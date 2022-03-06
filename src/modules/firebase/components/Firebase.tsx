import {FirebaseAuth} from 'modules/firebase/components/Auth';
import {AuthProvider} from 'modules/firebase/components/AuthProvider';
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
        <AuthProvider>
          <FirebaseAuth />
        </AuthProvider>
      </div>
    );
  }
}

export const FirebaseContainer = Firebase;
