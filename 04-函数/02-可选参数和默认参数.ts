/***
 * 可选参数：函数在声明的时候，内部的参数使用了?进行修饰，那么就表示该参数可以传入也可以不用传入
 * 默认参数：函数在声明的时候，内部的参数有自己的默认值，此时的这个参数就可以叫默认参数
 */
(() => {
  const getFullName = (firstName: string = '东方', lastName?: string): string => {
    // 判断名字是否传入了
    if(lastName) {
      return firstName + '-' + lastName
    } else {
      return firstName
    }
  }

  // 函数调用
  // 什么也不传入
  console.log(getFullName())
  // 只传入姓氏
  console.log(getFullName('诸葛'))
  // 传入姓氏和名字
  console.log(getFullName('诸葛', '孔明'))

})()