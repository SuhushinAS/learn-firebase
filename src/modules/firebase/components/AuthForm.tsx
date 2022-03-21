import {User} from 'firebase/auth';
import {Message} from 'modules/locale/components/Message';
import React from 'react';

type TProps = {
  onSignIn: () => void;
  onSignOut: () => void;
  user?: User;
};

/**
 * Пример компонента.
 */
export class AuthForm extends React.Component<TProps> {
  /**
   * Вывести компонент.
   * @return {*} Представление.
   */
  render() {
    const {onSignIn, onSignOut, user} = this.props;

    if (user && user.displayName) {
      return (
        <div>
          <h1>{user.displayName}</h1>
          <button onClick={onSignOut} type="button">
            <Message id="auth.action.signOut" />
          </button>
        </div>
      );
    }

    return (
      <div>
        <button onClick={onSignIn} type="button">
          <Message id="auth.action.signIn" />
        </button>
      </div>
    );
  }
}
