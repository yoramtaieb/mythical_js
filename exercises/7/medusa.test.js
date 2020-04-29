const assert = require('chai').assert;
const Medusa = require('./medusa');
const Person = require('./person');

describe('Medusa', function() {

  it.skip('should instantiate our good friend, Medusa', function() {
    const medusa = new Medusa();
    assert.isObject(medusa);
  });

  it.skip('should have a name', function() {
    const medusa = new Medusa('Bree');
    assert.equal(medusa.name, 'Bree');
  });

  it.skip('should start with no statues', function() {
    const medusa = new Medusa('Taytay');
    assert.equal(medusa.name, 'Taytay');
    assert.deepEqual(medusa.statues, []);
  });

  // Pass first 3 tests for Person down below

  it.skip('should gain a statue when staring at a person', function() {
    const medusa = new Medusa('Brenna');
    const victim = new Person('Jhun');

    medusa.stare(victim);

    assert.equal(medusa.statues.length, 1);
    assert.equal(medusa.statues[0].name, 'Jhun');

  });

  it.skip('should only be able to have three victims as a statue', function() {
    const medusa = new Medusa('Meeka');
    const victim1 = new Person('Lousia');
    const victim2 = new Person('Bree');
    const victim3 = new Person('TayTay');
    const victim4 = new Person('Steve');

    medusa.stare(victim1);
    medusa.stare(victim2);
    medusa.stare(victim3);
    medusa.stare(victim4);

    assert.equal(medusa.statues.length, 3);
  });

  it.skip('should unstone the the first victim and stone the 4th coming in', function() {
    // create medusa
    // create first victim
    // create second victim
    // create third victim
    // create fourth victim

    // medusa stares at first victim
    // assert that the first victim is stoned
    // medusa stares at second victim
    // medusa stares at third victim
    // medusa stares at fourth victim
    // assert the fourth victim is stoned

    // assert that the first victim is not stoned
  });
})

describe('Person', function() {

  it.skip('should be a function', function() {
    assert.isFunction(Person);
  });

  it.skip('should instantiate our good friend, Person', function() {
    const person = new Person();
    assert.isObject(person);
  });

  it.skip('should have a name', function() {
    const person = new Person('Steve');
    assert.equal(person.name, 'Steve');
  });

  it.skip('should be stoned after looking into Medusas eyes', function() {
    const medusa = new Medusa('Brenna');
    const victim = new Person('Jhun');

    assert.equal(victim.stoned, false);
    medusa.stare(victim);
    assert.equal(victim.stoned, true);
  });
});
