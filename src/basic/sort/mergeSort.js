// 归并排序
const mergeSort = function (arr) {
  const { length } = arr;
  if (length > 1) {
    const middle = Math.floor(length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle, length));
    arr = merge(left, right);
  }
  return arr;
};

const merge = function (left, right) {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
};

const arr = [31, 23, 2, 4, 5, 6, 2, 6, 8, 89, 4, 32, 5, 1, 4, 2];
console.log(mergeSort(arr));
