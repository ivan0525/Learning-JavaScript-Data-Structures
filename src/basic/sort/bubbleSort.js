// 冒泡排序
const bubbleSort = function (arr) {
  const { length } = arr;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const arr = [4, 52, 3, 1, 6, 7, 2, 4];
console.log(bubbleSort(arr));
