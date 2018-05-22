import assign from 'lodash.assign';

export default (obj, ...props) => {
  // copy the object
  let newObj = assign({}, obj);

  // delete all the props in ...props from the new object
  for (let prop of props) {
    delete newObj[prop];
  }

  return newObj;
}
