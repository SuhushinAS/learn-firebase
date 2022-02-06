import {FirebaseOptions} from '@firebase/app';
import {withFirebase} from 'modules/firebase/context/FirebaseContext';
import React from 'react';

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
    console.log(props);
  }

  /**
   * Вывести компонент.
   * @return {*} Представление.
   */
  render() {
    return this.props.children;
  }
}

export const FirebaseAuth = withFirebase(Auth);
