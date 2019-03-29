function compareObjects(firstObject, secondObject) {
    return firstObject.id === secondObject.id && firstObject.name === secondObject.name === -1
}
function mergeArray(firstArray, secondArray) {
    'use strict';
    const tmpArray = firstArray.concat(secondArray);
    const resArray = [];
    tmpArray.forEach(sourceItem => {
        if (resArray.findIndex(resItem => compareObjects(sourceItem, resItem))) {
            resArray.push(sourceItem);
        }
    });
    return resArray;
}
