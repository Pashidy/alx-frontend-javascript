import taskBlock from './1-block-scoped';

console.log(taskBlock(true));   // Output: [ false, true ]
console.log(taskBlock(false));  // Output: [ false, true ]
