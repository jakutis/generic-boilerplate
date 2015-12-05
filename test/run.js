'use strict';

var lib = require('..');

describe('run', function() {
  it('works', function execute() {
    return lib.run(new lib.Boundary());
  });
});
