import {Auth as FAuth, GoogleAuthProvider, signInWithPopup, signOut, User as FUser} from 'firebase/auth';
import {AuthForm} from 'modules/firebase/components/AuthForm';
import {withAuth} from 'modules/firebase/context/AuthContext';
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
    return <AuthForm onSignIn={this.onSignIn} onSignOut={this.onSignOut} user={this.state.user} />;
  }

  /**
   * Компонент примонтировался.
   * В данный момент у нас есть возможность использовать refs,
   * а следовательно это то самое место, где мы хотели бы указать установку фокуса.
   * Так же, таймауты, ajax-запросы и взаимодействие с другими библиотеками стоит обрабатывать здесь.
   */
  componentDidMount() {
    this.props.auth.onAuthStateChanged(this.onAuthStateChanged);
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
