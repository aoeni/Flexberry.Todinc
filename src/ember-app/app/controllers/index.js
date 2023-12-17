import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.todinc.caption'),
          title: i18n.t('forms.application.sitemap.todinc.title'),
          children: [{
            link: 'i-i-s-todinc-рейс-l',
            caption: i18n.t('forms.application.sitemap.todinc.i-i-s-todinc-рейс-l.caption'),
            title: i18n.t('forms.application.sitemap.todinc.i-i-s-todinc-рейс-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-todinc-посад-талон-l',
            caption: i18n.t('forms.application.sitemap.todinc.i-i-s-todinc-посад-талон-l.caption'),
            title: i18n.t('forms.application.sitemap.todinc.i-i-s-todinc-посад-талон-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-todinc-код-брони-l',
            caption: i18n.t('forms.application.sitemap.todinc.i-i-s-todinc-код-брони-l.caption'),
            title: i18n.t('forms.application.sitemap.todinc.i-i-s-todinc-код-брони-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-todinc-место-на-рейс-l',
            caption: i18n.t('forms.application.sitemap.todinc.i-i-s-todinc-место-на-рейс-l.caption'),
            title: i18n.t('forms.application.sitemap.todinc.i-i-s-todinc-место-на-рейс-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-todinc-пассажир-l',
            caption: i18n.t('forms.application.sitemap.todinc.i-i-s-todinc-пассажир-l.caption'),
            title: i18n.t('forms.application.sitemap.todinc.i-i-s-todinc-пассажир-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})