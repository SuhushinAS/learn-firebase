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
    return <div>Firebase</div>;
  }
}

export const FirebaseContainer = Firebase;
