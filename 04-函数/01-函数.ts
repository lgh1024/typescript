/***
 *  函数：封装了一些重复使用的代码，在需要的时候自己调用即可
 */
(() => {
  // ts中的函数书写方式
  // 函数声明，命名函数
  // 函数中的x和y参数的类型都是:string类型的，小括号后面的:string代表的是该函数的返回值也是string类型的
  function add(x: string, y: string):string {
    return x + y
  }
  const result1: string = add('111', '222')
  console.log(result1)

  // 函数表达式，匿名函数
  // 函数中的x和y参数的类型都是:number类型的，小括号后面的:number代表的是该函数的返回值也是number类型的
  const add2 = function(x: number, y: number):number {
    return x + y
  }
  console.log(add2(12, 34))

  // 函数的完整的写法
  // add3: (x: number, y: number) => number 当前的这个函数的类型
  const add3: (x: number, y: number) => number = function (x,y) {
    return x + y
  }
  console.log(add3(10, 100))
  const add4: (x: number, y: number) => number = (x,y) => {
    return x + y
  }
  console.log(add4(6, 20))

})()