function merge(array1, array2) {
  const mergedArray = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < array1.length && index2 < array2.length) {
    if (array1[index1] <= array2[index2]) {
      mergedArray.push(array1[index1]);
      index1++;
    } else {
      mergedArray.push(array2[index2]);
      index2++;
    }
  }

  while (index1 < array1.length) {
    mergedArray.push(array1[index1]);
    index1++;
  }

  while (index2 < array2.length) {
    mergedArray.push(array2[index2]);
    index2++;
  }

  return mergedArray;
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);

