/**
 * 数组去重
 * @param {Araray} arr - 待去重的数组
 * @param {String} flag - 对象去重key
 * @return {Array} * - 去重后数组
 */
module.exports = function uniqueArray(arr, flag) {
  if (!Array.isArray(arr)) return []
  if (arr.length < 2) return arr

  const array = []
  const map = {}
  arr.forEach(item => {
    const key = typeof item === 'object' ? item[flag] : item
    if (Array.isArray(item)) {
      uniqueArray(item)
    } else if (key && !map[key]) {
      array.push(item)
      map[key] = item
    }
  })
  return array
};

