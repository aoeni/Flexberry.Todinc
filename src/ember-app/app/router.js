import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-todinc-код-брони-l');
  this.route('i-i-s-todinc-код-брони-e',
  { path: 'i-i-s-todinc-код-брони-e/:id' });
  this.route('i-i-s-todinc-код-брони-e.new',
  { path: 'i-i-s-todinc-код-брони-e/new' });
  this.route('i-i-s-todinc-место-на-рейс-l');
  this.route('i-i-s-todinc-место-на-рейс-e',
  { path: 'i-i-s-todinc-место-на-рейс-e/:id' });
  this.route('i-i-s-todinc-место-на-рейс-e.new',
  { path: 'i-i-s-todinc-место-на-рейс-e/new' });
  this.route('i-i-s-todinc-пассажир-l');
  this.route('i-i-s-todinc-пассажир-e',
  { path: 'i-i-s-todinc-пассажир-e/:id' });
  this.route('i-i-s-todinc-пассажир-e.new',
  { path: 'i-i-s-todinc-пассажир-e/new' });
  this.route('i-i-s-todinc-посад-талон-l');
  this.route('i-i-s-todinc-посад-талон-e',
  { path: 'i-i-s-todinc-посад-талон-e/:id' });
  this.route('i-i-s-todinc-посад-талон-e.new',
  { path: 'i-i-s-todinc-посад-талон-e/new' });
  this.route('i-i-s-todinc-рейс-l');
  this.route('i-i-s-todinc-рейс-e',
  { path: 'i-i-s-todinc-рейс-e/:id' });
  this.route('i-i-s-todinc-рейс-e.new',
  { path: 'i-i-s-todinc-рейс-e/new' });
});

export default Router;
