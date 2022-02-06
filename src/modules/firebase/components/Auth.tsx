import {FirebaseOptions} from '@firebase/app';
import {withFirebase} from 'modules/firebase/context/FirebaseContext';
import React from 'react';
import {getAuth, signInAnonymously} from 'firebase/auth';

type TProps = {
  children: React.ReactNode;
  config: FirebaseOptions;
};

/**
 * Пример компонента.
 */
export class Auth extends React.Component<TProps> {
  /**
   * Конструктор компонента.
   * @param {*} props Свойства переданные в компонент.
   */
  constructor(props: TProps) {
    super(props);
    const auth = getAuth();
    signInAnonymously(auth).then(this.onAuthSuccess).catch(this.onAuthError);
  }

  onAuthError = (...rest) => {
    console.log(...rest);
  };

  onAuthSuccess = (...rest) => {
    console.log(...rest);
  };

  /**
   * Вывести компонент.
   * @return {*} Представление.
   */
  render() {
    return null;
  }
}

export const FirebaseAuth = withFirebase(Auth);
