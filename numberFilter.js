/*
 * @Author: Jafish 
 * @Date: 2018-02-22 10:33:00 
 * @Last Modified by: Jafish
 * @Last Modified time: 2018-02-22 14:19:48
 * @Action: 数字过滤
 * @Param:  [String, Number] value   -->  传入的字符串，如果是数字值请注意JS中最大数字值的表现形式
 * @Param:  [Object] config  -->  配置项，如果都填入则优先返回最大长度的整数
 *                   [Number] length  -->  返回整数最大长度
 *                   [Number] maxNum  -->  返回整数最大值
 * @Return: [String] num  -->  正整数，String型
 */

const numberFilter = (value, config = {}) => {
   let isString = typeof value
   if (isString !== 'string' && isString !== 'number') throw new Error('value expect is String or Number')
   
   config = { length: 0, maxNum: 0, ...config }
   let awaitNum = (value + '').replace(/[^\d]/g, '')

   if (config.length) return awaitNum.substr(0, config.length)
   if (config.maxNum) return +awaitNum < config.maxNum ? awaitNum : Math.floor(config.maxNum) + ''

   return awaitNum
}

export default numberFilter