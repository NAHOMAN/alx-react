// src/setupTests.js

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

// src/setupTests.js

import Enzyme from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
