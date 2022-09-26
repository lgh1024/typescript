// 泛型：在定义函数、接口、类的时候不能预先确定要使用的数据的类型，而是在使用函数、接口、类的时候才能确定数据的类型
(() => {
  function getArr<T>(value: T, count: number): Array<T> {
    // 根据数据和数量产生一个数组
    // const arr: T[] = []
    const arr: Array<T> = []
    for (let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }
  const arr1 = getArr<number>(200.123456, 5)
  const arr2 = getArr<string>('abcdefg', 5)
  console.log(arr1)
  console.log(arr2)
  console.log(arr1[0].toFixed(3))
  console.log(arr2[0].split(''))

})()