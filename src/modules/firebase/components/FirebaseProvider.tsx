import {FirebaseOptions} from '@firebase/app';
import {initializeApp} from 'firebase/app';
import {FirebaseContext, TFirebaseContext} from 'modules/firebase/context/FirebaseContext';
import React from 'react';

type TProps = {
  children: React.ReactNode;
  config: FirebaseOptions;
};

/**
 * Пример компонента.
 */
export class FirebaseProvider extends React.Component<TProps> {
  value: TFirebaseContext = {
    app: initializeApp(this.props.config),
  };

  /**
   * Вывести компонент.
   * @return {*} Представление.
   */
  render() {
    return <FirebaseContext.Provider value={this.value}>{this.props.children}</FirebaseContext.Provider>;
  }
}
