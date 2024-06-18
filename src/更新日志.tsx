export default [
  {
    version: '[雾海寻龙] 1.0.13',
    date: '2024-06-18 09:00:00',
    content: [
      '综合',
      <p style={{ paddingLeft: 12 }} key='1.0.13.1'>
        <p>- 新增全局伤害因子独立乘区，应用场景例【青冠】【正律】</p>
        <p>- 配装器装备选择区间下降至12100品</p>
        <p>- 配装器装备新增10100赠送橙武</p>
      </p>,
      '花间游',
      <p style={{ paddingLeft: 12 }} key='1.0.13.2'>
        <p>{`- 应「蔓海赋尘」大佬支持。新增花间游心法`}</p>
        <p>{`- 支持循环：`}</p>
        <p>{`- 紫武：1、2段加速「焚玉」；1、2段加速「故幽」`}</p>
        <p>{`- 橙武：2段加速「焚玉」`}</p>
        <p style={{ color: 'red' }}>注意</p>
        <p>橙武循环无视配装加速情况，固定按2段加速计算。</p>
        <p>紫武循环如果配装为0段加速，计算结果直接返回0.</p>
      </p>,
    ],
  },
  {
    version: '[雾海寻龙] 1.0.12',
    date: '2024-06-12 18:00:00',
    content: [
      '综合',
      <p style={{ paddingLeft: 12 }} key='1.0.12.1'>
        <p>- 新增会破比、招无比两个收益图表（花里胡哨的功能又增加了）</p>
      </p>,
      '太玄经',
      <p style={{ paddingLeft: 12 }} key='1.0.12.2'>
        <p>{`- 压缩了背景图片的尺寸`}</p>
      </p>,
    ],
  },
  {
    version: '[雾海寻龙] 1.0.11',
    date: '2024-06-11 10:00:00',
    content: [
      '综合',
      <p style={{ paddingLeft: 12 }} key='1.0.11.1'>
        <p>- 新增三个试炼之地目标，方便计算。数据来源魔盒</p>
        <p>- 冷龙峰副本Boss防御数据与124级木桩相同，不额外添加</p>
      </p>,
      '太玄经',
      <p style={{ paddingLeft: 12 }} key='1.0.5.2'>
        <p>{`- 配装器武器选择增加5600品归一`}</p>
      </p>,
    ],
  },
  {
    version: '[雾海寻龙] 1.0.10',
    date: '2024-06-07 18:00:00',
    content: [
      '综合',
      <p style={{ paddingLeft: 12 }} key='1.0.10.1'>
        <p>- 订正负数破招系数的计算函数</p>
        <p>- 优化了计算程序函数，理论计算效率提升一倍</p>
        <p>- 优化了在开启智能对比后，无论是否展开阵眼弹窗都会重复多次计算导致性能损耗的BUG</p>
      </p>,
    ],
  },
  {
    version: '[雾海寻龙] 1.0.9',
    date: '2024-05-30 18:00:00',
    content: [
      '综合',
      <p style={{ paddingLeft: 12 }} key='1.0.9.1'>
        <p>- 增加了端午节日增益粽子和小吃，在团队增益弹窗中可选</p>
      </p>,
      '凌海诀',
      <p style={{ paddingLeft: 12 }} key='1.0.9.2'>
        <p>
          - 新增了凌海诀「怅归」循环，
          <span style={{ color: 'red' }}>默认按一段加速计算。非一段加速配装会返回0</span>
        </p>
      </p>,
    ],
  },
  {
    version: '[雾海寻龙] 1.0.8',
    date: '2024-05-29 11:15:00',
    content: [
      '山海心诀',
      <p style={{ paddingLeft: 12 }} key='1.0.8.2'>
        <p>{`- 生成了新的丛云朝仪循环，时间为第五轮大招打完`}</p>
        <p>{`- 对循环进行重新订正`}</p>
        <p>{`- 模拟器增加了对倒读条技能的延迟补偿逻辑`}</p>
        <p>{`- 订正了模拟器对于同时间Dot伤害和叠加Dot行为先后顺序逻辑`}</p>
      </p>,
    ],
  },
  {
    version: '[雾海寻龙] 1.0.7',
    date: '2024-05-28 12:40:00',
    content: [
      '综合',
      <p style={{ paddingLeft: 12 }} key='1.0.7.1'>
        <p>{`- 修改了全局的DOT系数计算公式，使其更加合理易懂`}</p>
        <p>{`- 新增了新的增益类型，无双百分比。对面板无双乘法计算，例：养荣`}</p>
      </p>,
      '无方',
      <p style={{ paddingLeft: 12 }} key='1.0.7.2'>
        <p>{`- 新增无方心法`}</p>
        <p>{`- 无方循环数据均由长倦大佬提供`}</p>
        <p>养荣循环经长倦确认定为按千枝全程覆盖计算</p>
        <p style={{ color: 'red' }}>注意，无方循环目前均为一段加速固定计算。</p>
      </p>,
      '孤锋诀',
      <p style={{ paddingLeft: 12 }} key='1.0.7.2'>
        <p>{`- 生成了新的二段加速橙武循环`}</p>
      </p>,
      '太玄经',
      <p style={{ paddingLeft: 12 }} key='1.0.5.2'>
        <p>{`- 修复了天斗旋一个伤害秘籍的文案错误`}</p>
      </p>,
    ],
  },
  {
    version: '[雾海寻龙] 1.0.6',
    date: '2024-05-27 09:30:00',
    content: [
      '孤锋诀',
      <p style={{ paddingLeft: 12 }} key='1.0.6.2'>
        <p>{`- 非侠系数修改「6」=> 「13」`}</p>
        <p>{`- 流岚无视防御「40%」=>「25%」`}</p>
        <p>{`- 以上两条数值待更新后测试，暂定133和256`}</p>
        <p>{`- 模拟器溃延减少诀云CD「10」=>「11」`}</p>
        <p>{`- 外部计算循环暂未通过模拟器重新生成，理论上溃延对结果影响较小。`}</p>
        <p style={{ color: 'red' }}>{`- 最终伤害正负1%上下浮动，约等于没变`}</p>
      </p>,
      '凌海诀',
      <p style={{ paddingLeft: 12 }} key='1.0.6.2'>
        <p>{`- 移除非侠3%加成`}</p>
        <p style={{ color: 'red' }}>{`- 最终伤害削弱2%-3%`}</p>
      </p>,
      '太玄经',
      <p style={{ paddingLeft: 12 }} key='1.0.6.2'>
        <p>{`- 由于JCL解析鬼遁丢失问题，暂时将鬼遁视作全局覆盖计算`}</p>
        <p>{`- 更新了新的橙武循环`}</p>
        <p>{`- 修复了紫武鬼列循环鬼遁覆盖计算有问题的BUG`}</p>
      </p>,
    ],
  },
  {
    version: '[雾海寻龙] 1.0.5',
    date: '2024-05-24 12:00:00',
    content: [
      '综合',
      <p style={{ paddingLeft: 12 }} key='1.0.5.1'>
        <p>{`- 修正了全局对于技能系数增伤的计算取整位置，例：涤瑕、素矰等`}</p>
        <p>{`- 新增了技能系数对技能等级的取值逻辑`}</p>
      </p>,
      '孤锋诀',
      <p style={{ paddingLeft: 12 }} key='1.0.5.2'>
        <p>{`- 修正「停云势」和「断云势」的武器伤害系数「2.5」=> 「2」`}</p>
        <p>{`- 精细破招系数的算法`}</p>
        <p>{`- 修复门派套装双会buff的覆盖率时间`}</p>
      </p>,
      '山海心诀',
      <p style={{ paddingLeft: 12 }} key='1.0.5.2'>
        <p>{`- 精细破招系数的算法`}</p>
      </p>,
      '太玄经',
      <p style={{ paddingLeft: 12 }} key='1.0.5.2'>
        <p>{`- 新增太玄经心法`}</p>
        <p>{`- 支持循环「鬼列」「堪炸」「橙武」`}</p>
        <p style={{ color: 'red' }}>注意，太玄经循环目前均为一段加速固定计算。</p>
      </p>,
    ],
  },
  {
    version: '[雾海寻龙] 1.0.4',
    date: '2024-05-21 10:45:00',
    content: [
      '综合',
      <p style={{ paddingLeft: 12 }} key='1.0.4.1'>
        <p>{`- 修复「关闭背景」功能重新进入页面没有读取缓存的问题`}</p>
        <p>{`- 修复系统中部分错别字 「决」 => 「诀」`}</p>
        <p>{`- 增加「万灵阵(从朱)」选项，覆盖率100%`}</p>
      </p>,
      '孤锋诀',
      <p style={{ paddingLeft: 12 }} key='1.0.4.2'>
        <p>- 修复孤锋诀无法选择力道五彩石的BUG</p>
        <p>
          -
          更新了孤锋诀模拟器内DOT伤害的快照拆分，（后续保存的循环会生效，外面循环目前没改。理论差距不大）
        </p>
      </p>,
    ],
  },
  {
    version: '[雾海寻龙] 1.0.3',
    date: '2024-05-17 10:40:00',
    content: [
      '综合',
      <p style={{ paddingLeft: 12 }} key='1.0.3.1'>
        <p>- 配装器快速一键附魔功能增加选择计算部位功能，大大提高计算效率</p>
        <p>- 修复切换循环没有自动切换至对应循环奇穴的BUG</p>
      </p>,
      '凌海诀',
      <p style={{ paddingLeft: 12 }} key='1.0.3.2'>
        <p>- 凌海诀计算卡顿的原因为循环细化的较为详细，计算过程更为复杂</p>
        <p>- 暂时去除了凌海诀的「优化算法」功能</p>
      </p>,
    ],
  },
  {
    version: '[雾海寻龙] 1.0.2',
    date: '2024-05-16 09:40:00',
    content: [
      '综合',
      <p style={{ paddingLeft: 12 }} key='1.0.2.1'>
        <p>- 主JS拆包，优化了首次加载的速度</p>
      </p>,
      '凌海诀',
      <p style={{ paddingLeft: 12 }} key='1.0.2.2'>
        <p>- 根据方小皮提供的橙武JCL生成了新的橙武循环</p>
        <p>- 修复了普通水特效和风特效没有生效的BUG</p>
        <p>- 增加了团队增益快捷设置</p>
      </p>,
    ],
  },
  {
    version: '[雾海寻龙] 1.0.1',
    date: '2024-05-11 16:10:00',
    content: ['支持凌海诀模块，数据提供：考拉。测试：方小皮（还在调试中）'],
  },
  {
    version: '[雾海寻龙] 1.0.0',
    date: '2024-05-11 16:10:00',
    content: [
      '合并万灵/刀宗计算器',
      '项目代码重构',
      '系统右上角可以切换心法',
      '新心法可以通过录入心法模块实现，提高了接入效率',
      '理论计算效率提升50%，1164次附魔计算本地耗时【500ms】 => 【240ms】',
      '后续提供接入文档',
    ],
  },
]
