function 计算 (心法) {
  // 这一行不能删掉，因为待执行代码里有localStorage的访问，这里做了个假的localStorage防止报错
  global.localStorage = { getItem:() => { return ''} }

  const 太玄经 = require('./demo_太玄.json')
  const 花间游 = require('./demo_花间.json')
  const 山海心诀 = require('./demo_山海.json')
  const 孤锋诀 = require('./demo_孤锋.json')
  const 无方 = require('./demo_无方.json')
  const 凌海诀 = require('./zwpl.json')
  const 心法枚举 = {
    "花间游": 花间游,
    '山海心诀': 山海心诀,
    '太玄经': 太玄经,
    "凌海诀": 凌海诀,
    "孤锋诀": 孤锋诀,
    "无方": 无方,
    // '山海心诀':山海心诀,
    // '山海心诀':山海心诀,
  }
  const params = 心法枚举?.[心法] || 山海心诀
  global.心法 = params?.心法 
  // eslint-disable-next-line no-global-assign
  window = global
  const DPS = require('../../build/static/js/getDps.js')
  // const DPS = require('./getDps.js')
  const 计算结果 = DPS?.计算秒伤?.(params)
  const 支持循环 = DPS?.获取心法循环?.({ 心法: params?.心法 })
  const fs = require('fs')
  // console.log(`开始写入${params?.心法}计算结果文件`)
  fs.writeFile(`node/demoRes/${params?.心法}_计算结果.json`, JSON.stringify(计算结果), err => {
    if (err) {
      console.log('err',err)
    }
  })
  fs.writeFile(`node/demoRes/${params?.心法}_支持循环.json`, JSON.stringify(支持循环), err => {
    if (err) {
      console.log('err',err)
    }
  })
  // console.log(`写入完成`)
  // console.log('计算结果',计算结果)
  return 计算结果
}

console.time('【花间游】计算完成，用时')
计算("花间游")
console.timeEnd('【花间游】计算完成，用时')

console.time('【凌海诀】计算完成，用时')
计算("凌海诀")
console.timeEnd('【凌海诀】计算完成，用时')

console.time('【无方】计算完成，用时')
计算("无方")
console.timeEnd('【无方】计算完成，用时')

console.time('【太玄经】计算完成，用时')
计算("太玄经")
console.timeEnd('【太玄经】计算完成，用时')

console.time('【孤锋诀】计算完成，用时')
计算("孤锋诀")
console.timeEnd('【孤锋诀】计算完成，用时')

console.time('【山海心诀】计算完成，用时')
计算("山海心诀")
console.timeEnd('【山海心诀】计算完成，用时')