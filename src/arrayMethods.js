window.every = function (array, callback) {
  var result = true;
  for (var i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      result = false;
      break;
    }
  }
  return result;
};
window.some = function (array, callback) {
  var result = false;
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result = true;
      break;
    }
  }
  return result;
};
window.forEach = function (array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
};
window.filter = function (array, callback) {
  var filteredArray = [];
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
};
window.map = function (array, callback) {
  var mapedArray = [];
  for (var i = 0; i < array.length; i++) {
    mapedArray[i] = (callback(array[i], i, array));
  }
  return mapedArray;
};
