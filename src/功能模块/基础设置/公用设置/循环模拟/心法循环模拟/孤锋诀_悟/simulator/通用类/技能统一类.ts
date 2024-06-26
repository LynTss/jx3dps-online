import 循环主类类型 from '../main'
import { 技能释放记录结果 } from '../type'

class 技能统一类 {
  模拟循环: Partial<循环主类类型> = {}
  本次释放记录: 技能释放记录结果 = {}

  constructor(模拟循环) {
    this.模拟循环 = 模拟循环
    return
  }

  释放前初始化() {
    // 重置释放记录
    this.本次释放记录 = {}
  }

  减少对阵技能CD(减少时间 = 1) {
    this.模拟循环.技能类实例集合?.停云势?.减少调息时间?.(减少时间)
    this.模拟循环.技能类实例集合?.['横云势·一']?.减少调息时间?.(减少时间)
    this.模拟循环.技能类实例集合?.['决云势·一']?.减少调息时间?.(减少时间)
    this.模拟循环.技能类实例集合?.['灭影追风']?.减少调息时间?.(减少时间)
    this.模拟循环.技能类实例集合?.留客雨?.减少调息时间?.(减少时间)
  }

  减少绝技技能CD(减少时间 = 2) {
    this.模拟循环.技能类实例集合?.孤风破浪?.减少调息时间?.(减少时间)
  }

  对阵招式橙武减少绝技技能CD() {
    if (this.模拟循环.大橙武模拟) {
      this.模拟循环.技能类实例集合?.孤风破浪?.减少调息时间?.(0.3125)
    }
  }

  释放技能回复锐意(锐意值, 来源) {
    const 当前是否满锐 = this.模拟循环.角色状态信息?.锐意 && this.模拟循环.角色状态信息?.锐意 >= 60

    if (当前是否满锐) {
      this.模拟循环.添加buff?.({ 名称: '披靡·悟', 对象: '自身' })
    }

    this.模拟循环.增加锐意?.(锐意值, 来源)
  }

  触发消耗锐意(锐意值, 来源) {
    this.模拟循环.减少锐意?.(锐意值, 来源)
  }

  触发伤害行为(
    伤害名称,
    伤害次数 = 1,
    额外增益列表: string[] = [],
    触发伤害时间: number | undefined = undefined,
    DOT伤害 = false
  ) {
    this.模拟循环.技能造成伤害?.(伤害名称, 伤害次数, 额外增益列表, 触发伤害时间, DOT伤害)
  }

  获取技能释放记录结果() {
    return {
      ...this.本次释放记录,
    }
  }

  获取当前重要buff列表(技能依赖自身buff列表: string[] = [], 技能依赖目标buff列表: string[] = []) {
    const 重要buff列表: string[] = []
    技能依赖自身buff列表.forEach((buff) => {
      if (this.模拟循环.当前自身buff列表?.[buff]?.当前层数) {
        重要buff列表.push(buff)
      }
    })
    技能依赖目标buff列表.forEach((buff) => {
      if (this.模拟循环.当前目标buff列表?.[buff]?.当前层数) {
        重要buff列表.push(buff)
      }
    })
    return 重要buff列表 || []
  }

  获取施加重要buff信息(buff名称) {
    const 当前时间 = this.模拟循环.当前时间 || 0
    const buff对象 = this.模拟循环.Buff和Dot数据?.[buff名称]

    return buff对象
      ? {
          buff名称: buff名称,
          buff开始时间: 当前时间,
          buff结束时间: 当前时间 + (buff对象?.最大持续时间 || 0),
        }
      : null
  }
}

export default 技能统一类
