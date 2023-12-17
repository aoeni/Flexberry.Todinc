import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTodincКодБрониLForm from './forms/i-i-s-todinc-код-брони-l';
import IISTodincМестоНаРейсLForm from './forms/i-i-s-todinc-место-на-рейс-l';
import IISTodincПассажирLForm from './forms/i-i-s-todinc-пассажир-l';
import IISTodincПосадТалонLForm from './forms/i-i-s-todinc-посад-талон-l';
import IISTodincРейсLForm from './forms/i-i-s-todinc-рейс-l';
import IISTodincКодБрониEForm from './forms/i-i-s-todinc-код-брони-e';
import IISTodincМестоНаРейсEForm from './forms/i-i-s-todinc-место-на-рейс-e';
import IISTodincПассажирEForm from './forms/i-i-s-todinc-пассажир-e';
import IISTodincПосадТалонEForm from './forms/i-i-s-todinc-посад-талон-e';
import IISTodincРейсEForm from './forms/i-i-s-todinc-рейс-e';
import IISTodincИнфБроньModel from './models/i-i-s-todinc-инф-бронь';
import IISTodincКодБрониModel from './models/i-i-s-todinc-код-брони';
import IISTodincМестоНаРейсModel from './models/i-i-s-todinc-место-на-рейс';
import IISTodincПассажирModel from './models/i-i-s-todinc-пассажир';
import IISTodincПосадТалонModel from './models/i-i-s-todinc-посад-талон';
import IISTodincРейсModel from './models/i-i-s-todinc-рейс';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-todinc-инф-бронь': IISTodincИнфБроньModel,
    'i-i-s-todinc-код-брони': IISTodincКодБрониModel,
    'i-i-s-todinc-место-на-рейс': IISTodincМестоНаРейсModel,
    'i-i-s-todinc-пассажир': IISTodincПассажирModel,
    'i-i-s-todinc-посад-талон': IISTodincПосадТалонModel,
    'i-i-s-todinc-рейс': IISTodincРейсModel
  },

  'application-name': 'Todinc',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Todinc',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Todinc',
          title: 'Todinc'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        todinc: {
          caption: 'Todinc',
          title: 'Todinc',
          'i-i-s-todinc-рейс-l': {
            caption: 'Рейс',
            title: ''
          },
          'i-i-s-todinc-посад-талон-l': {
            caption: 'Посад талон',
            title: ''
          },
          'i-i-s-todinc-код-брони-l': {
            caption: 'Код брони',
            title: ''
          },
          'i-i-s-todinc-место-на-рейс-l': {
            caption: 'Место на рейс',
            title: ''
          },
          'i-i-s-todinc-пассажир-l': {
            caption: 'Пассажир',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-todinc-код-брони-l': IISTodincКодБрониLForm,
    'i-i-s-todinc-место-на-рейс-l': IISTodincМестоНаРейсLForm,
    'i-i-s-todinc-пассажир-l': IISTodincПассажирLForm,
    'i-i-s-todinc-посад-талон-l': IISTodincПосадТалонLForm,
    'i-i-s-todinc-рейс-l': IISTodincРейсLForm,
    'i-i-s-todinc-код-брони-e': IISTodincКодБрониEForm,
    'i-i-s-todinc-место-на-рейс-e': IISTodincМестоНаРейсEForm,
    'i-i-s-todinc-пассажир-e': IISTodincПассажирEForm,
    'i-i-s-todinc-посад-талон-e': IISTodincПосадТалонEForm,
    'i-i-s-todinc-рейс-e': IISTodincРейсEForm
  },

});

export default translations;
