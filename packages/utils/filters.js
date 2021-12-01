/*
 * @Author: chaiyf
 * @Date: 2021-09-27 11:33:39
 * @LastEditTime: 2021-10-13 17:29:28
 * @LastEditors: Please set LastEditors
 * @Description:
 * @FilePath: /thor_os_components/src/utils/filters.js
 * Copyright (c) 2019 Shenzhen Laidian Technology Co., Ltd
 */
// 毫秒转换
/*
* 示例  format(时间戳，yyyy-MM-dd hh:mm)
*/
export function format (time, formatStr) {
  if (!time) {
    return ''
  }
  let t = new Date(time)
  let tf = (i) => {
    return (i < 10 ? '0' : '') + i
  }
  return formatStr.replace(/yyyy|MM|dd|hh|mm|ss/g, (a) => {
    switch (a) {
      case 'yyyy':
        return tf(t.getFullYear())
      case 'MM':
        return tf(t.getMonth() + 1)
      case 'dd':
        return tf(t.getDate())
      case 'hh':
        return tf(t.getHours())
      case 'mm':
        return tf(t.getMinutes())
      case 'ss':
        return tf(t.getSeconds())
    }
  })
}

/**
 * 过滤空格、表情、换行、回车、制表符
 *
 * @author liux
 * @date 2020-04-17
 * @export
 * @param {string} [v='']
 * @returns {string}
 */
export function filterNull (v = '') {
  if (!v) return v
  v = String(v).replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
  return v.replace(/\n|\r|\t|\s/g, '')
}
/**
 * 过滤赋值浮点数字(用于仅可输入数字的输入框@input方法)
 * @author chaiyf
 * @date 2020-04-17
 * @param {string} [v='']
 * @returns {string}
 */
export function filterFloatNumber (v = '', fixNum) {
  if (!v) return v
  v = String(v)
  v = v.replace(/[^\d!.]/g, '')
  v = v.replace(/^\./g, '')
  v = v.replace(/\.{2,}/g, '')
  v = v.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
  if (fixNum && typeof fixNum === 'number' && !isNaN(fixNum) && (v.indexOf('.') + 3) < v.length) { v = Number(v).toFixed(fixNum) }
  return String(v)
}
/**
 * 过滤赋值整数数字(用于仅可输入数字的输入框@input方法)
 * @author chaiyf
 * @date 2020-04-17
 * @param {string} [v='']
 * @returns {string}
 */
export function filterInitNumber (v = '') {
  if (!v) return v
  v = v.replace(/[^\d]/g, '')
  return v
}
