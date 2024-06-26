import { 每秒郭氏帧 } from '../../../constant'
import 循环模拟技能基础数据 from '../../../constant/skill'
import 有CD技能通用类 from '../../通用类/有CD技能通用类'

class 留客雨 extends 有CD技能通用类 {
  static 技能数据 = 循环模拟技能基础数据?.find((item) => item.技能名称 === '留')

  constructor(模拟循环) {
    super(模拟循环)

    this.初始化技能运行数据(留客雨.技能数据)
  }

  潋风触发重置留客雨调息时间() {
    this.技能运行数据 = {
      当前层数: 1,
    }
    this.模拟循环.添加战斗日志?.({
      日志: `潋风触发重置留客雨调息时间`,
      日志类型: '技能释放结果',
    })
  }

  减少单刀GCD() {
    if (this.模拟循环?.GCD组?.单刀) {
      const 减少后GCD = Math.max(this.模拟循环.GCD组?.单刀 - 每秒郭氏帧, 0)
      this.模拟循环.GCD组.单刀 = 减少后GCD
      this.模拟循环.添加战斗日志?.({
        日志: `留客雨命中减少单刀GCD1秒，单刀GCD变为【${减少后GCD}】`,
        日志类型: '技能释放结果',
      })
    }
  }

  命中() {
    // 留客雨命中-降低自身1秒“流云势法/单刀”套路基础调息时间。
    this.减少单刀GCD()

    if (this.模拟循环.校验奇穴是否存在?.('雨积')) {
      this.模拟循环.添加buff?.({ 名称: '雨积', 对象: '自身', 新增层数: 1 })
    }

    if (this.模拟循环.校验奇穴是否存在?.('聚疏')) {
      this.模拟循环.技能类实例集合?.决?.聚疏触发减少决云势调息时间?.()
    }

    // 横断：停云势”“留客雨”会刷新目标身上属于自身的“横云断浪”流血效果。
    if (
      this.模拟循环.当前自身buff列表?.['流血']?.当前层数 &&
      this.模拟循环.校验奇穴是否存在?.('横断')
    ) {
      this.模拟循环.添加buff?.({ 名称: '流血', 对象: '目标', 新增层数: 0 })
    }
  }

  造成伤害() {
    this.模拟循环.触发避实击虚?.()
    this.触发伤害行为('留客雨')
    this.保存释放记录()
  }

  保存释放记录() {
    this.本次释放记录 = {
      重要buff列表: this.获取当前重要buff列表(['灭影追风', '流岚', '潋风']),
    }
  }
}

export default 留客雨

export const 留客雨类型 = typeof 留客雨
