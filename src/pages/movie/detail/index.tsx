import React from 'react';
import { myObserver } from '~/src/utils/resize-observe';

export default class Detail extends React.Component {

  componentDidMount(): void {
    const someEl = document.querySelector('body');
    myObserver((entry) => console.log('resize:', entry)).observe(someEl);
  }

  render(): JSX.Element {
    return (
      <h1>deneme</h1>
    );
  }

}
