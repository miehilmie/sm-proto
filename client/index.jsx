import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import WelcomeDialog from '../imports/ui/components/app/app.jsx';

Meteor.startup(() => {
  render(<WelcomeDialog />, document.getElementById('root'));
});
