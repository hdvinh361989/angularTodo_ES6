/**
 * Created by vinhhoang on 15/11/2015.
 */
export class todoStorage {

  constructor(tableId) {
    var ctrl = this;

    ctrl.tableId = tableId;

    //localStorage.clear();

    //If table is already exist load data, else throw error
    loadFromDataBase(tableId).then(function (result) {
      ctrl._datas = result.length > 0 ? new Map(result) : new Map();
      //ctrl._datas = result.length >0 ? result : [];
    }, function (err) {
      ctrl._datas = new Map();
    });
  }

  get datas() {
    return [...this._datas.values()];
  }

  save(data) {
    /* var index = -1;
     for(let todo of this._datas){
     if(todo._id === data._id){
     index = this._datas.indexOf(todo);
     break;
     }
     }

     if(index > -1)
     this._datas[index] = data;
     else
     this._datas.push(data);*/

    this._datas.set(data._id, data);
    return saveToDataBase(this.tableId, this._datas);
  }

  remove(data) {
    //this._datas.splice(this._datas.indexOf(data), 1);
    this._datas.delete(data._id);
    return saveToDataBase(this.tableId, this._datas);
  }

  removeAllCompleted() {
    this._datas.forEach(function (v, k, map) {
      if(v.complete) map.delete(k);
    });
    return saveToDataBase(this.tableId, this._datas);
  }
}

function loadFromDataBase(tableId) {
  return new Promise((resolve, reject) => {
    let data = localStorage.getItem(tableId);
    if (data) {
      resolve(deSerialize(data));
    } else {
      reject(`Do not have any table: ${tableId}`);
    }
  });
}

function saveToDataBase(tableId, datas) {
  return new Promise((resolve, reject) => {
    if (!datas) {
      reject('Please input data');
    } else {
      try {
        localStorage.setItem(tableId, serialize(datas));
        resolve('Success');
      } catch (e) {
        reject(e);
      }
    }
  });
}

function serialize(jsonObject) {
  //return JSON.stringify([...jsonObject]);
  return JSON.stringify([...jsonObject]);
}

function deSerialize(jsonString) {
  return JSON.parse(jsonString);
}

function findById(object) {

}