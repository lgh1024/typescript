(() => {
  // 布尔类型  ---- boolean
  let flag: boolean = true
  let flag0: boolean = Boolean(0)
  console.log(flag)
  console.log(flag0)

  // 数字类型 ---- number
  let a1: number = 10 // 十进制
  let a2: number = 0b1010 // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制
  console.log(a1)
  console.log(a2)
  console.log(a3)
  console.log(a4)

  // 字符串类型 ---- string
  let str1: string = 'abcd'
  let str2: string = 'efgh'
  let str3: string = 'ijkl'
  let str4: string = 'nmop'
  let str00: string = `123,${str1}`
  console.log(`${str00},${str2},${str3},${str4},`)

  // 字符串和数字之间能够一起拼接
  let str5: string = '我有这么多钱'
  let num: number = 1000
  console.log(str5 + num)

  console.log('-------------------------------')

  let und: undefined = undefined
  let nll: null = null
  console.log(und)
  console.log(nll)
  // undefinen 和 null 都可以作为其他类型的子类型 (需要关闭严格模式
  // let num2: number = undefined
  // let num2: number = null
  // console.log(num2)

  console.log('-------------------------------')

  // 数组类型
  // 数组定义方式1
  // 语法：let 变量名: 数据类型[] = [值1,值2,值3]
  let arr1: number[] = [10, 20, 30, 40, 50]
  console.log(arr1)
  // 数组定义方式2：泛型写法
  // 语法：let 变量名: Array<数据类型> = [值1,值2,值3]
  let arr2: Array<number> = [100, 200, 300]
  console.log(arr2)

  // 元组类型
  let arr3: [string, number, boolean] = ['小甜甜', 100.23456, true]
  // 语法延伸：let arr3:(string|number)[]=[1,2,3,4,5]
  console.log(arr3)
  // 注意：元组类型前后个数应该保持一致
  // 可以使用对应类型的方法
  console.log(arr3[0].split('')) // 使用字符串类型方法
  console.log(arr3[1].toFixed(2)) // 使用数字类型方法

  console.log('-------------------------------')

  // 枚举类型，枚举里面的每个数据值都可以叫元素，每个元素都有自己的编号，默认编号从0开始，依次递增加1，可以自己数字编号
  enum Color {
    red = 1,
    green,
    blue
  }
  // 定义一个Color的枚举类型的变量来接收枚举的值
  let color: Color = Color.red
  console.log(color)
  console.log(Color.red, Color.green, Color.blue)
  console.log(Color[1])
  // 枚举中的元素可以是中文的数据值，但是不推荐
  /*enum Gender {
    女,
    男
  }
  console.log(Gender.男)*/

  console.log('-------------------------------')

  // any 类型
  let str: any = 100
  str = '年少有为'
  console.log(str)
  // 当一个数组中要存储多个数据，个数不确定，类型不确定，此时可以使用any类型定义数组
  let arr: any[] = [100, '啊哈哈哈', true]
  console.log(arr)

  // void 类型，在函数声明的时候，小括号的后面使用:void，代表的是该函数没有任何的返回值
  function showMsg(): void {
    console.log('空类型')
    // return
    // return undefined
  }
  console.log(showMsg())

  console.log('-------------------------------')

  // object 类型
  // 定义一个函数，参数是object类型，返回值也是object类型
  function getObj(obj: object): object {
    console.log(obj)
    return {
      name: '卡卡西',
      age: 29
    }
  }
  // console.log(getObj({name: '左助', age: '男'}))
  // console.log(getObj('123')) // 错误
  // console.log(getObj(new String('123')))
  console.log(getObj(String))

  console.log('-------------------------------')

  // 联合类型表示取值可以为多种类型中的一种
  // 需求1：定义一个函数得到一个数字或字符串值的字符串形式值
  // function getString(str: number | string): string {
  //   return str.toString()
  // }
  // console.log(getString(123))
  // console.log(getString('123'))

  // 需求2：定义一个函数得到一个数字或字符串的长度

  // 类型断言：告诉编译器，我知道我自己是什么类型，也知道自己在干什么
  // 类型断言的语法方式1：<类型>变量名
  // 类型断言的语法方式2：值 as 类型

  function getString(str: number | string): number {
    // return str.toString().length
    // 如果str本身就是string类型，那么是没有必要调用toString()方法的
    if((<string>str).length) {
      // str.length 存在？ 如果存在就说明str是string类型的
      return (str as string).length
    } else {
      // 此时说明str是number类型
      return str.toString().length
    }
  }

  console.log(getString(123456))
  console.log(getString('123456'))

  // 类型推断：没有明确的指定类型的时候推测出一个类型
  let text = 100 // number
  // text = '水水水水'
  console.log(text)

  let text2 // any
  text2 = 100
  text2 = '数个刚刚'
  console.log(text2)

})()