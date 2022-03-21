import {FirebaseAuth} from 'modules/firebase/components/Auth';
import {AuthContextProvider} from 'modules/firebase/components/AuthContextProvider';
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
        <AuthContextProvider>
          <FirebaseAuth />
        </AuthContextProvider>
      </div>
    );
  }
}

export const FirebaseContainer = Firebase;
