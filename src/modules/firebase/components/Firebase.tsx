import {FirebaseAuth} from 'modules/firebase/components/Auth';
import React from 'react';

type TProps = {};

/**
 * Пример компонента.
 */
export class Firebase extends React.Component<TProps> {
  /**
   * Вывести компонент.
   * @return {*} Представление.
   */
  render() {
    return (
      <div>
        <FirebaseAuth />
      </div>
    );
  }
}

export const FirebaseContainer = Firebase;
