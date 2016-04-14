'use strict';

var expect = require('chai').expect;


describe('pick-key: ', function () {

  var pickProp = require('../../');

  it('common', function () {

    expect(pickProp()).to.be.undefined;
    expect(pickProp(null)).to.be.undefined;
    expect(pickProp(1)).to.be.undefined;
    expect(pickProp('a')).to.be.undefined;

    expect(pickProp([])).to.be.undefined;
    expect(pickProp({})).to.be.undefined;

    expect(pickProp([2])).to.be.equal(2);
    expect(pickProp({ a: 1, b: 2, c: 3 })).to.be.oneOf([1, 2, 3]);
  });
});
