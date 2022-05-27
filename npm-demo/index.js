var _ = require('underscore');

// Node first checks for core module (but underscore is not a core module)
// Then checks if file or folder (but we don't have a file or folder)
// Assumes it exists uner the node_modules folder

var result = _.contains([1, 2, 3], 1);
console.log(result);