import _ from 'lodash';

const deleteEmptyKeys = (obj) => {
  for (var key in obj) {
    // console.log('key', key);
    // console.log('value', obj[key]);
    if(_.isNil(obj[key]) ||
      typeof obj[key] === 'object' && _.isEmpty(obj[key])) {

      // console.log(`${obj[key]} deleted`);
      delete obj[key];
    } else if (typeof obj[key] === 'object') {
      // console.log('going around again');
      deleteEmptyKeys(obj[key]);

      // If this embedded object is now empty, delete it
      if(_.isEmpty(obj[key])) {
        // console.log('now the embedded obj is empty too; delete it');
        delete obj[key];
      }
    }
  }
  return obj;
}

export default deleteEmptyKeys;
