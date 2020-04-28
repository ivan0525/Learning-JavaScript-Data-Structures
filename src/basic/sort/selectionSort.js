// 选择排序
const selectionSort = function (arr) {
  const { length } = arr;
  let indexMin = 0; // 最小值的下标
  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      let temp = arr[i];
      arr[i] = arr[indexMin];
      arr[indexMin] = temp;
    }
  }
  return arr;
};

const arr = [4, 52, 3, 1, 6, 7, 2, 4];
console.log(selectionSort(arr));
