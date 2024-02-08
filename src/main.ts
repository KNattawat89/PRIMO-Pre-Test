function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return mergeArrays(mergeSort(left), mergeSort(right));
  }

  function mergeArrays(arr1: number[], arr2: number[]): number[] {
    const mergedArray: number[] = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }

    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }

    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }

    return mergedArray;
  }
  const sortedCollection1 = mergeSort(collection1);
  const sortedCollection2 = mergeSort(collection2);
  const sortedCollection3 = mergeSort(collection3);
  const mergedArray = mergeArrays(sortedCollection1, sortedCollection2);
  return mergeArrays(mergedArray, sortedCollection3);
}

export { merge };
