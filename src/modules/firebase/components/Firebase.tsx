import {FirebaseOptions} from '@firebase/app';
import {initializeApp} from 'firebase/app';
import {FirebaseContext} from 'modules/firebase/context/FirebaseContext';
import {TFirebaseContext} from 'modules/firebase/type';
import React from 'react';

type TProps = {
  children: React.ReactNode;
  config: FirebaseOptions;
};

/**
 * Пример компонента.
 */
export class Firebase extends React.Component<TProps> {
  firebase: TFirebaseContext;

  /**
   * Конструктор компонента.
   * @param {*} props Свойства переданные в компонент.
   */
  constructor(props: TProps) {
    super(props);
    this.firebase = {
      app: initializeApp(props.config),
    };
  }

  /**
   * Вывести компонент.
   * @return {*} Представление.
   */
  render() {
    return <FirebaseContext.Provider value={this.firebase}>{this.props.children}</FirebaseContext.Provider>;
  }
}
