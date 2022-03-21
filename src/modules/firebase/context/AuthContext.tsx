import {Auth} from 'firebase/auth';
import React from 'react';

export type TAuthContext = {
  auth: Auth;
};

export const AuthContext = React.createContext<TAuthContext | undefined>(undefined);

/**
 * HOC для Auth.
 * @param Component Компонент.
 * @return Компонент c Auth.
 */
export const withAuth = (Component) => {
  return class ComponentWithAuth extends React.Component<React.ComponentProps<typeof Component>> {
    renderComponent = (context) => <Component {...this.props} {...context} />;

    /**
     * Вывести компонент.
     * @return {*} Представление.
     */
    render() {
      return <AuthContext.Consumer>{this.renderComponent}</AuthContext.Consumer>;
    }
  };
};
