{
  type s = string
  let str: s = '张三'
  console.log(str)

  type m = number
  let num: m = 123456
  console.log(num)

  type cb = () => string
  const fn: cb = () => '李四'
  console.log(fn())

  type T = 'a' | 'b' | boolean | number | 5
  let str1: T = 'a'
  // let str2: T = 'c'
  let num2: T = 15956
  let b: T = true
  console.log(str1)
  console.log(num2)
  console.log(b)
}