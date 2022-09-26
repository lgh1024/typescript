(() => {
  // 函数类型：通过接口的方式作为函数的类型来使用
  // 定义一个接口，用来作为某个函数的类型使用
  interface ISearchFunc {
    // 定义一个调用签名
    (source: string, subString: string): boolean
  }
  // 定义一个函数，该类型就是上面定义的接口
  const searchString: ISearchFunc = function (source ,subString) {
    // 在source字符串中查找subString这个字符串
    return source.search(subString) > -1
  }

  // 调用函数
  console.log(searchString('顺丰航空', '顺'))

})()