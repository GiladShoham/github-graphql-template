import { expect } from 'chai';

import createClient from './index';

describe('#createClient()', () => {
  it('should throw an error if token not provided', () => {
    expect(createClient).to.throw('token was not provided');
  });
});