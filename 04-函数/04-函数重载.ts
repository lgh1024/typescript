// 函数重载：函数名字相同，函数的参数及个数不同
(() => {
  // 函数重载声明
  function add(x: string, y: string): string
  function add(x: number, y: number): number

    // 函数声明
  function add(x: string | number, y: string | number): string | number {
    if(typeof x === 'string' && typeof y === 'string') {
      return x + y // 字符串拼接
    } else if (typeof x === 'number' && typeof y === 'number') {
      return x + y // 数字相加
    } else {
      return ''
    }
  }
  // 两个参数都是字符串
  console.log(add('诸葛', '孔明'))
  // 两个参数都是数字
  console.log(add(12, 34))
  // console.log(add(12, '孔明'))
  // console.log(add('诸葛', 2))

})()