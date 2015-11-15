/**
 * Created by vinhhoang on 14/11/2015.
 */
export class KeyHelper {
  static generateUniqueKey() {
    return Math.floor((1 + Math.random()) * new Date().valueOf())
      .toString(16)
      .substring(1);
  }
}
