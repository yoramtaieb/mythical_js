const assert = require('chai').assert;
const Vampire = require('./vampire');

describe('Vampire', function() {

  it.skip('should instantiate our good friend, Vampire', function() {
    const vampire = new Vampire();
    assert.isObject(vampire);
  });

  it.skip('should have a name', function() {
    const vampire = new Vampire('Jhun');
    assert.equal(vampire.name, 'Jhun');
  });

  it.skip('should have a pet bat as a default', function() {
    const vampire = new Vampire('Brittany');
    assert.equal(vampire.name, 'Brittany');
    assert.equal(vampire.pet, 'bat');
  });

  it.skip('should take an argument for pet', function() {
    const vampire = new Vampire('Jeff', 'fox');
    assert.equal(vampire.pet, 'fox');
  });

  it.skip('should have vampire return true if thirsty', function() {
    const vampire = new Vampire('Andy');
    assert.equal(vampire.thirsty, true);
  });

  it.skip('should refute thirsty if vampire has drank', function() {
    const vampire = new Vampire('Meeka');
    vampire.drink();
    assert.equal(vampire.thirsty, false);
  });
});
