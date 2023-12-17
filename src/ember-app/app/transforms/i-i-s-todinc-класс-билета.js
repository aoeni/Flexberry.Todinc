import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import КлассБилетаEnum from '../enums/i-i-s-todinc-класс-билета';

export default FlexberryEnum.extend({
  enum: КлассБилетаEnum,
  sourceType: 'IIS.Todinc.КлассБилета'
});
