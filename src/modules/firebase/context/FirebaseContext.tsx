import {FirebaseApp} from '@firebase/app';
import React from 'react';

export type TFirebaseContext = {
  app: FirebaseApp;
};

export const FirebaseContext = React.createContext<TFirebaseContext | undefined>(undefined);

/**
 * HOC для Firebase.
 * @param Component Компонент.
 * @return Компонент c Firebase.
 */
export const withFirebase = (Component) => {
  return class ComponentWithFirebase extends React.Component<React.ComponentProps<typeof Component>> {
    renderComponent = (context) => <Component {...this.props} {...context} />;

    /**
     * Вывести компонент.
     * @return {*} Представление.
     */
    render() {
      return <FirebaseContext.Consumer>{this.renderComponent}</FirebaseContext.Consumer>;
    }
  };
};
