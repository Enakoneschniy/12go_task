function mergeArray(firstArray, secondArray) {
    'use strict';
    const tmpArray = firstArray.concat(secondArray);
    const resArray = new Map();
    tmpArray.forEach(item => resArray.set(item.id, item));
    return Array.from(resArray.values());
}

function test() {
    const arr1 = [{id:1, name: 'foo'}, {id:2, name: 'bar'}];
    const arr2 = [{id:3, name: 'bla'}, {id:1, name:'foo'}, {id:4, name:'baz'}];
    console.log(mergeArray(arr1, arr2));
}
test();

