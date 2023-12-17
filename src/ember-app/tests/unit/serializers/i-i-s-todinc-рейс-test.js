import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-todinc-рейс', 'Unit | Serializer | i-i-s-todinc-рейс', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-todinc-рейс',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-todinc-класс-билета',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
