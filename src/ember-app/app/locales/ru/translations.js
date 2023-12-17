import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Todinc',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Todinc',
          title: 'Todinc'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
