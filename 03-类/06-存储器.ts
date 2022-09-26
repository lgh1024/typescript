/*
* 存储器：让我们可以有效的控制对对象中的成员的访问，通过getters和setters来进行操作
* */
(() => {
  // 外部可以传入姓氏和名字数据，同时使用set和get控制姓名的数据，外部也可以进行修改操作
  class Person {
    firstName: string //姓氏
    lastName: string //名字
    constructor(firstNanme:string, lastName: string) {
      this.firstName = firstNanme
      this.lastName = lastName
    }
    // 姓名的成员属性(外部可以访问，也可以修改)

    // 读取器 ---- 负责读取数据的
    get fullName() {
      console.log('get...')
      return this.firstName + '-' + this.lastName
    }
    // 设置器 --- 负责设置数据的(修改)
    set fullName(val) {
      console.log('set...')
      let names = val.split('-')
      this.firstName = names[0]
      this.lastName = names[1]
    }
  }

  // 实例化对象
  const person: Person = new Person('东方', '不败')
  console.log(person)
  // 获取该成员属性
  console.log(person.fullName)
  // 设置该属性数据
  person.fullName = '诸葛-孔明'
  console.log(person.fullName)

})()