/*
 * @Author: Jafish 
 * @Date: 2018-01-26 13:47:16 
 * @Last Modified by: Jafish
 * @Last Modified time: 2018-02-22 10:19:20
 * @Action: 模糊匹配
 * @param: [String] search    -->  要匹配的字符串
 * @param: [String] matchStr  -->  被匹配的字符串
 * @param: [Object] config    -->  可不传
 *                 [Boolean] openSearchFilter  -->  是否开启search非中文、英文、数字过滤，默认开启
 *                 [Boolean] openMatchStrFilter  -->  是否开启matchStr非中文、英文、数字过滤，默认开启
 * @Return: [Number] successCount  -->  匹配成功次数
 */

const fuzzyMatch = (search = '', matchStr = '', config = {}) => {
   if (typeof search !== 'string' || typeof matchStr !== 'string') throw new Error('search or matchStr expect is String')
   
   let strReg = /[^\w\d\u4e00-\u9fa5]/g // 非中文、英文、数字匹配
   config = { openSearchFilter: true, openMatchStrFilter: true, ...config }
   
   let searchValue = config.openSearchFilter ? search.toLocaleLowerCase().replace(strReg, ',').split(',').filter(member => member) : [search]// 匹配数组
   if (config.openMatchStrFilter) matchStr = matchStr.replace(strReg, '').toLocaleLowerCase()

   let successCount = 0 // 成功匹配次数 
   for (let i = 0; i < searchValue.length; i++) {
      matchStr.includes(searchValue[i]) && ++successCount
   }

   return successCount
}

export default fuzzyMatch
