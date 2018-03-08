/*
 * @Author: Jafish 
 * @Date: 2018-02-22 10:09:07 
 * @Last Modified by: Jafish
 * @Last Modified time: 2018-02-23 10:01:10
 * @Action: 电话号码格式验证（11位）
 * @Param: {String, Number} phone - 传入要验证的电话号码
 * @Return: {Boolean} isPhone - 验证是否成功
 */

const isPhone = phone => {
   let isString = typeof phone
   if (isString !== 'string' && isString !== 'number') throw new Error('phone expect is String or Number')

   let newPhone = +phone
   if (newPhone !== newPhone) return false // 得到的不是纯数字

   let phoneReg = /^1[34578][0-9]\d{8}$/
   return phoneReg.test(newPhone)
}

export default isPhone
