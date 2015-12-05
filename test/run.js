'use strict';

var lib = require('..');

describe('run', function() {
  it('works', function() {
    return lib.run(new lib.Boundary());
  });
});
