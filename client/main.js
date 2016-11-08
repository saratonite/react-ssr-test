import React from 'react';
import {render} from 'react-dom';

import Hello from './Hello';

var rootEl = document.getElementByID('app');

render(<Hello/>,rootEl);