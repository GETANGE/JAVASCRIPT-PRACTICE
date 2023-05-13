function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Example usage
const unsortedArr = [3, 7, 1, 9, 2];
console.log("Unsorted array:", unsortedArr); // [3, 7, 1, 9, 2]

const sortedArr = bubbleSort(unsortedArr);
console.log("Sorted array:", sortedArr); // [1, 2, 3, 7, 9]


