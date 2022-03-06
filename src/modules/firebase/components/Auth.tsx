import {Auth as FAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {withAuth} from 'modules/firebase/context/AuthContext';
import React from 'react';

type TProps = {
  auth: FAuth;
  children: React.ReactNode;
};

/**
 * Пример компонента.
 */
export class Auth extends React.Component<TProps> {
  provider = new GoogleAuthProvider();

  /**
   * Конструктор компонента.
   * @param {*} props Свойства переданные в компонент.
   */
  constructor(props: TProps) {
    super(props);

    console.log(props);
    this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  }

  onAuthSuccess = (result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;

    console.log({credential, result, user});
  };

  onAuthError = (error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);

    console.log({credential, email, errorCode, errorMessage});
  };

  onClick = () => {
    signInWithPopup(this.props.auth, this.provider).then(this.onAuthSuccess).catch(this.onAuthError);
  };

  /**
   * Вывести компонент.
   * @return {*} Представление.
   */
  render() {
    return (
      <div>
        <button onClick={this.onClick} type="button">
          auth
        </button>
      </div>
    );
  }
}

export const FirebaseAuth = withAuth(Auth);
