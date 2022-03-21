import {Auth as FAuth, GoogleAuthProvider, signInWithPopup, signOut, User as FUser} from 'firebase/auth';
import {withAuth} from 'modules/firebase/context/AuthContext';
import {Message} from 'modules/locale/components/Message';
import React from 'react';

type TProps = {
  auth: FAuth;
  children: React.ReactNode;
};

type TState = {
  user?: FUser;
};

/**
 * Пример компонента.
 */
export class Auth extends React.Component<TProps, TState> {
  provider = new GoogleAuthProvider();

  state: TState = {};

  /**
   * Обработать клик.
   */
  onSignIn = () => {
    signInWithPopup(this.props.auth, this.provider).then(this.onSignInSuccess).catch(this.onSignInError);
  };

  /**
   * Обработать успех.
   * @param result Результат.
   */
  onSignInSuccess = (result) => {
    GoogleAuthProvider.credentialFromResult(result);
  };

  /**
   * Обработать ошибку.
   * @param error Ошибка.
   */
  onSignInError = (error) => {
    GoogleAuthProvider.credentialFromError(error);
  };

  /**
   * Обработать клик.
   * @return * Результат.
   */
  onSignOut = () => signOut(this.props.auth);

  /**
   * Вывести компонент.
   * @return {*} Представление.
   */
  render() {
    const {user} = this.state;

    if (user && user.displayName) {
      return (
        <div>
          <h1>{user.displayName}</h1>
          <button onClick={this.onSignOut} type="button">
            <Message id="auth.action.signOut" />
          </button>
        </div>
      );
    }

    return (
      <div>
        <button onClick={this.onSignIn} type="button">
          <Message id="auth.action.signIn" />
        </button>
      </div>
    );
  }

  /**
   * Компонент примонтировался.
   * В данный момент у нас есть возможность использовать refs,
   * а следовательно это то самое место, где мы хотели бы указать установку фокуса.
   * Так же, таймауты, ajax-запросы и взаимодействие с другими библиотеками стоит обрабатывать здесь.
   */
  componentDidMount() {
    this.props.auth.onAuthStateChanged(this.onAuthStateChanged);
    this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  }

  /**
   * Обработать изменение состояния Auth.
   * @param user Пользователь.
   */
  onAuthStateChanged = (user) => {
    this.setState({user});
  };
}

export const FirebaseAuth = withAuth(Auth);
