const chai = require('chai');
const { expect } = chai;
const R = require('ramda');

function add(one) {
  return function (two) {
    return one + two;
  }
}

function multiply(one) {
  return function (two) {
    return one * two;
  }
}

function abs(p) {
  return Math.abs(p)
}

function compose(a, b, c) {
  return function (d) {
    return a(b(c(d)))
  }
}

describe('组合函数的测试', function () {
  it('期待结果为-7', function () {
    const c = compose(abs, add(1), multiply(2))(-4)
    expect(c).to.equal(7)
  });
  it('期待结果为-30', function () {
    const c = compose(abs, add(2), multiply(4))(7)
    expect(c).to.equal(30)
  });
  it('期待结果为67', function () {
    const c = compose(abs, add(5), multiply(6))(-12)
    expect(c).to.equal(67)
  });
});
