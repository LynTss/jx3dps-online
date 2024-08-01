export interface 置换结果数据类型 {
  增加属性: string
  减少属性: string
  收益: number | undefined
}

export interface 置换数据信息类型 {
  最大值: number
  最小值: number
  每行收益最高对象: {
    [key: string]: 置换结果数据类型
  }
}
