const DIALECTS = {
    'en': 'en',
    'en-gb': 'en',
    'en-us': 'en',
    'it': 'it',
    'it-it': 'it',
    'fr': 'fr',
    'fr-fr': 'fr',
    'fr-ca': 'fr',
    'pt': 'pt',
    'pt-br': 'pt',
    'pt-pt': 'pt',
    'de': 'de',
    'de-de': 'de',
    'es': 'es',
    'es-es': 'es',
    'pl': 'pl',
    'pl-pl': 'pl',
    'ru': 'ru',
    'ru-ru': 'ru',
    'sv': 'sv',
    'sv-sv': 'sv',
    'sv-fi': 'sv',
    'da': 'da',
    'da-dk': 'da',
    'id': 'id',
    'id-id': 'id',
    'zh': 'zh',
    'zh-cn': 'zh',
    'zh-tw': 'zh',
    'zh-hk': 'zh'
};

export default class Messages {
  constructor(aLocale="zh-cn") {
    this.locale = aLocale;
    this.dialect = Messages.getDialect(this.locale.toLowerCase());
    const messages = require('../locales/locale-'+this.dialect+'.js');
    this.msg = messages;

  }

  static getDialect(aLocale="zh-cn") {
    return DIALECTS[aLocale.toLowerCase()];
  }

  getAllMessages(){
    return this.msg;
  }

  get(id) {
    if (this.msg[id]) {
      return this.msg[id];
    } else {
      console.error(`没有这个 ${id} 所对应的文本`);
    }
  }
}
