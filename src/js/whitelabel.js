const data = require("./whitelabelData.js");

export default class WhiteLabel {
  static get(id) {
    if (data[id]) {
      return data[id];
    } else {
      console.error(`通过这个${id}获取不到对应的json信息`);
    }
  }
}
