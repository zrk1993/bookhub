export function splitNumber(n) {
  if (n < 1000) {
    return n
  } else {
    const s = n.toString()
    return s[0] + ',' + s[1]
  }
}

/*判断字段值是否为空*/
export function isNotData(n) {
  if (n === undefined) {
    return true
  }
  return n == -2147483648
}

/*数字转换*/
export function getNumberShow(n) {
  if (isNotData(n)) {
    return '-'
  }
  if (n < 0) {
    return `-${getNumberShow(-n)}`
  }
  if (n < 10000) {
    return splitNumber(n)
  } else if (n < 100000000) {
    const w = n / 10000
    return `${splitNumber(Math.round(w * 10) / 10)}w`
  } else {
    const w = n / 100000000
    return `${splitNumber(Math.round(w * 100) / 100)}亿`
  }
}
