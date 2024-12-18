export function countInversions(correctArray: string[], shuffledArray: string[]): number {
    const indexMap: { [key: string]: number } = correctArray.reduce((map, item, index) => {
      map[item] = index;
      return map;
    }, {});
  
    const indexArray = shuffledArray.map(item => indexMap[item]);
  
    const mergeSortAndCount = (arr: number[]): [number[], number] => {
      if (arr.length <= 1) return [arr, 0];
  
      const mid = Math.floor(arr.length / 2);
      const [left, leftCount] = mergeSortAndCount(arr.slice(0, mid));
      const [right, rightCount] = mergeSortAndCount(arr.slice(mid));
  
      let merged: number[] = [];
      let count = leftCount + rightCount;
      let i = 0;
      let j = 0;
  
      while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
          merged.push(left[i]);
          i++;
        } else {
          merged.push(right[j]);
          j++;
          count += left.length - i;
        }
      }
  
      return [merged.concat(left.slice(i)).concat(right.slice(j)), count];
    };
  
    const [, inversions] = mergeSortAndCount(indexArray);
    return inversions;
  }
  