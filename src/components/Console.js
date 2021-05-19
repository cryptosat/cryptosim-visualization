import React from "react";
import { Provider } from 'react-redux';

import { App, store } from '@cryptosat/jsconsole';


class Console extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
    }
  }

  render() {
      return (
      <div>
        <Provider store={store}>
          <App />
        </Provider>
      </div>
    );
  }
}
export default Console;
