// 两个数组的交集
function intersect(arr1, arr2) {
  const len1 = arr1.length;
  const len2 = arr2.length;
  let i = 0;
  let j = 0;
  let k = 0;
  arr1.sort(ascSort);
  arr2.sort(ascSort);
  while(i < len1 && j < len2) {
    if (arr1[i] > arr2[j]) {
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      arr1[k] = arr1[i]
      i++;
      j++;
      k++;
    }
  }
  return arr1.slice(0, k);
}

function ascSort(a, b) {
  return a - b;
}

console.log(intersect([1,3,4,4,13], [1,4,4,9,10]));