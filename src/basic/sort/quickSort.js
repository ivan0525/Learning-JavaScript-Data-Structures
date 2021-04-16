const quickSort = function (arr) {
  return quick(arr, 0, arr.length - 1);
};

const quick = function (arr, left, right) {
  if (arr.length > 1) {
    const index = partition(arr, left, right);
    // 如果子数组中存在较小元素
    if (left < index - 1) {
      quick(arr, left, index - 1);
    }
    // 如果子数组中存在较大元素
    if (right > index) {
      quick(arr, index, right);
    }
  }
  return arr;
};

const partition = function (arr, left, right) {
  // 选择中间值作为主元
  const pivot = arr[Math.floor((left + right) / 2)];
  while (left <= right) {
    // 移动左指针，找比主元大的元素
    while (arr[left] < pivot) {
      left++;
    }
    // 移动右指针，找比主元小的元素
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left;
};

const swap = function (arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const arr = [3, 5, 1, 123, 45, 654, 12, 4, 2, 0];
console.log(quickSort(arr));
