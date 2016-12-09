import _ from 'lodash';

const deleteEmptyKeys = (obj) => {
  for (var key in obj) {
    if(_.isNil(obj[key]) ||
      ( typeof obj[key] === 'object' && _.isEmpty(obj[key]) )
    ) {

      delete obj[key];

    } else if (typeof obj[key] === 'object') {

      deleteEmptyKeys(obj[key]);

      // If this embedded object is now empty, delete it
      if(_.isEmpty(obj[key])) {
      
        delete obj[key];
      }
    }
  }
  return obj;
}

export default deleteEmptyKeys;
