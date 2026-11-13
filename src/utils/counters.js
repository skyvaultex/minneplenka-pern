function checkEdges(arr, currentPos, dir) {
  if (arr.length === 0) {
    return currentPos;
  }
  if (dir === 'next') {
    return currentPos < arr.length - 1 ? currentPos + 1 : 0;
  } else if (dir === 'prev') {
    return currentPos > 0 ? currentPos - 1 : arr.length - 1;
  } else {
    throw new Error('Direction should have only "prev" or "next" value')
  }
}

export function imageReducer(state, action) {
  const { arr, dir, index } = action;
  if(index !== undefined) return index;
  if(dir === 'next' || dir === 'prev') return checkEdges(arr, state, dir);
}