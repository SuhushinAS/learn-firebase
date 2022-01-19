import {TFirebaseContext} from 'modules/firebase/type';
import React from 'react';

export const FirebaseContext = React.createContext<TFirebaseContext | undefined>(undefined);

/**
 * HOC для Firebase.
 * @param Component Компонент.
 * @return Компонент c Firebase.
 */
export const withFirebase = (Component) => {
  return class ComponentWithFirebase extends React.Component {
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
