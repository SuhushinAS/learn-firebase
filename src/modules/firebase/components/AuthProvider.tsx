import {getAuth} from 'firebase/auth';
import {AuthContext, TAuthContext} from 'modules/firebase/context/AuthContext';
import React from 'react';

type TProps = {
  children: React.ReactNode;
};

/**
 * Пример компонента.
 */
export class AuthProvider extends React.Component<TProps> {
  value: TAuthContext = {
    auth: getAuth(),
  };

  /**
   * Вывести компонент.
   * @return {*} Представление.
   */
  render() {
    return <AuthContext.Provider value={this.value}>{this.props.children}</AuthContext.Provider>;
  }
}
