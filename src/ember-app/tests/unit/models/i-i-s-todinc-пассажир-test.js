import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-todinc-пассажир', 'Unit | Model | i-i-s-todinc-пассажир', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-todinc-инф-бронь',
    'model:i-i-s-todinc-код-брони',
    'model:i-i-s-todinc-место-на-рейс',
    'model:i-i-s-todinc-пассажир',
    'model:i-i-s-todinc-посад-талон',
    'model:i-i-s-todinc-рейс',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
