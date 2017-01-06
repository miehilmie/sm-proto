import React from 'react';

import Header from './header.jsx';
import Content from './content.jsx';

const Main = props => (
  <div>
    <Header
      login={props.login}
      logout={props.logout}
      isAuthenticated={props.isAuthenticated}
    />
    <Content
      login={props.login}
      logout={props.logout}
      isAuthenticated={props.isAuthenticated}
    />
  </div>
);

export default Main;
