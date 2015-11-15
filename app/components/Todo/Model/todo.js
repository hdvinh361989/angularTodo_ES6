/**
 * Created by vinhhoang on 14/11/2015.
 */
import {KeyHelper} from 'components/Todo/helper/KeyHelper.js';

export class Todo {
  constructor(content = '', complete = '') {
    this._id = KeyHelper.generateUniqueKey();
    this.date = new Date();
    this.content = content;
    this.complete = complete || false;
  }
}
