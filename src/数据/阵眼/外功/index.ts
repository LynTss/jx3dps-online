import { 属性类型 } from '@/@types/属性'
import { 阵眼数据类型 } from '../interface'
import 通用阵眼数据 from '../通用'

const 外功阵眼数据: 阵眼数据类型[] = [
  {
    阵眼名称: '刀宗阵',
    增益集合: [
      { 属性: 属性类型.破招值, 值: 1516 },
      { 属性: 属性类型.郭氏外功破防等级, 值: 256 },
      { 属性: 属性类型.郭氏外功基础攻击, 值: 50 },
    ],
  },
  {
    阵眼名称: '刀宗阵(阵眼)',
    所属心法: '孤锋诀',
    增益集合: [
      { 属性: 属性类型.破招值, 值: 1516 },
      { 属性: 属性类型.郭氏外功破防等级, 值: 256 },
      { 属性: 属性类型.郭氏外功基础攻击, 值: 50 },
      { 属性: 属性类型.郭氏外功会心效果等级, 值: 100, 触发型增益: true }, // 覆盖率100% id 24582
    ],
  },
  {
    阵眼名称: '鲸鱼阵',
    增益集合: [
      { 属性: 属性类型.郭氏额外无双, 值: 20 },
      { 属性: 属性类型.郭氏外功破防等级, 值: 205 },
      { 属性: 属性类型.外功会心百分比, 值: 0.05, 触发型增益: true }, // 第五层阵眼-追命10秒会心5%-覆盖率:100%
    ],
  },
  {
    阵眼名称: '天策阵',
    增益集合: [
      { 属性: 属性类型.郭氏外功基础攻击, 值: 50 },
      { 属性: 属性类型.郭氏外功破防等级, 值: 200 },
      { 属性: 属性类型.郭氏外功基础攻击, 值: 51 * 0.5, 触发型增益: true }, // 第五层阵眼-雷基攻5%(15/30))-覆盖率:50%
    ],
    覆盖率: 50,
  },
  {
    阵眼名称: '霸刀阵',
    增益集合: [
      { 属性: 属性类型.郭氏外功基础攻击, 值: 50 },
      { 属性: 属性类型.郭氏额外无双, 值: 20 },
      { 属性: 属性类型.郭氏外功破防等级, 值: 102 },
      { 属性: 属性类型.外功会心百分比, 值: 0.05, 触发型增益: true }, // 第五层阵眼-耗能4秒会心5%-覆盖率:100%
    ],
  },
  {
    阵眼名称: '剑纯阵',
    增益集合: [
      { 属性: 属性类型.外功会心百分比, 值: 0.03 },
      { 属性: 属性类型.郭氏额外无双, 值: 20 },
      { 属性: 属性类型.郭氏外功会心效果等级, 值: 150 },
      { 属性: 属性类型.外功会心百分比, 值: 0.05, 触发型增益: true }, // 第五层阵眼-技能会心1%5层-覆盖率:100%
    ],
  },
  {
    阵眼名称: '藏剑阵',
    增益集合: [
      { 属性: 属性类型.郭氏身法, 值: 30 },
      { 属性: 属性类型.郭氏外功基础攻击, 值: 51 },
      { 属性: 属性类型.郭氏外功会心效果等级, 值: 204 },
      { 属性: 属性类型.武器伤害, 值: (1571 * 8) / 48, 触发型增益: true },
    ],
    覆盖率: 16,
  },
  {
    阵眼名称: '凌雪阵',
    增益集合: [
      { 属性: 属性类型.郭氏外功基础攻击, 值: 50 },
      { 属性: 属性类型.外功会心百分比, 值: 0.03 },
      { 属性: 属性类型.郭氏外功会心效果等级, 值: 154 },
      { 属性: 属性类型.郭氏外功基础攻击, 值: 102 * 0.55, 触发型增益: true }, // 更新第五层阵眼-技能基攻10%-覆盖率:50% => 70%
      // 旧：第五层阵眼-技能基攻10%-覆盖率:50%
    ],
    覆盖率: 55,
  },
  {
    阵眼名称: '苍云阵',
    增益集合: [
      { 属性: 属性类型.外功会心百分比, 值: 0.03 },
      { 属性: 属性类型.郭氏额外无双, 值: 20 },
      { 属性: 属性类型.郭氏外功会心效果等级, 值: 100, 触发型增益: true }, // 第五层阵眼-绝刀会效2%5层30秒-覆盖率:100%
    ],
  },
  {
    阵眼名称: '蓬莱阵',
    增益集合: [
      { 属性: 属性类型.外功会心百分比, 值: 0.03 },
      { 属性: 属性类型.郭氏外功基础攻击, 值: 133 },
      { 属性: 属性类型.郭氏外功破防等级, 值: 102 },
    ],
  },
  {
    阵眼名称: '蓬莱阵(阵眼)',
    所属心法: '凌海诀',
    增益集合: [
      { 属性: 属性类型.外功会心百分比, 值: 0.03 },
      { 属性: 属性类型.郭氏外功基础攻击, 值: 133 },
      { 属性: 属性类型.郭氏外功破防等级, 值: 102 },
      { 属性: 属性类型.郭氏外功基础攻击, 值: 72 },
    ],
  },
  {
    阵眼名称: '丐帮阵',
    增益集合: [
      { 属性: 属性类型.郭氏外功基础攻击, 值: 50 },
      { 属性: 属性类型.郭氏外功破防等级, 值: 102 },
      { 属性: 属性类型.外功破防等级, 值: 770 * 5, 触发型增益: true }, // 第五层阵眼-12秒叠一层，叠满1分钟，覆盖率按:100%算
    ],
  },
  {
    阵眼名称: '天罗阵',
    增益集合: [
      { 属性: 属性类型.郭氏全无视防御, 值: 52 },
      { 属性: 属性类型.郭氏全会心效果等级, 值: 150 },
      { 属性: 属性类型.全会心百分比, 值: 0.05, 触发型增益: true }, // 第五层阵眼-1覆盖率按:100%算
    ],
  },
  ...通用阵眼数据,
]

export default 外功阵眼数据
