// =====================================================
// 📝 内容数据配置
// 以后要换内容，**只改这个文件**即可。
// =====================================================

import type { CardColor, TagColor, TagVariant } from 'animal-island-ui';

// =====================================================
// 全局开关
// =====================================================
export const pageData = {
  // 页面基础信息
  title: '结婚率跌10年、离婚率三连涨，婚姻正在巨变',
  subtitle: '结婚登记创十年新低、离结比超42%，婚恋市场的结构性变局',
  date: '2026年8月13日',
  headerIcon: '💍',
  footerIcons: '💔 💍 👶 🏠',

  // 视觉特效开关
  enableTypewriter: true,        // 标题打字机效果
  enablePattern: true,           // 卡片花纹背景
  enableIslandTooltip: true,     // 动森气泡提示
  enableDecorFooter: true,       // 树根装饰

  // 页面顶部标签
  topTags: [
    { text: '结婚率下滑', color: 'app-red' as TagColor, variant: 'soft' as TagVariant },
    { text: '离婚率回升', color: 'app-orange' as TagColor, variant: 'soft' as TagVariant },
    { text: '婚姻模式多元化', color: 'app-teal' as TagColor, variant: 'soft' as TagVariant },
    { text: '人口危机', color: 'app-blue' as TagColor, variant: 'soft' as TagVariant },
  ],

  // 核心结论
  summaryTitle: '📌 核心结论',
  summary: `2026年上半年，结婚登记同比下降<strong>7.46%</strong>，离婚登记同比上涨<strong>3.91%</strong>，离结比达<strong>42.2%</strong>——每100对新人结婚，同时有42对夫妻离婚。结婚率下滑与离婚率回升交织，加上无证婚姻、干婚等新型模式的兴起，共同勾勒出当下婚恋领域的全新面貌。`,

  // 底部来源
  footerSource: '来源：财经深度分析 · 2026年8月13日',
  footerTag: '#结婚率 #离婚率 #婚姻模式 #单身经济 #人口危机',
  footerPowered: '🏝 Powered by Animal Island UI + React',
};

// =====================================================
// 板块类型定义
// =====================================================
export type SectionType = 'stats' | 'bars' | 'flow' | 'compare' | 'list' | 'quote';

export interface StatItem {
  num: string;
  label: string;
  numColor?: 'accent' | 'accent2' | string;
  numSize?: string;
  chip?: { text: string; type: 'up' | 'down' | string };
}

export interface BarItem {
  icon: string;
  label: string;
  percent: number;
  chip: { text: string; type: 'up' | 'down' | string };
  barColors?: string;
  meta?: string;
}

export interface FlowItem {
  icon: string;
  title: string;
  desc: string;
  color: string;
  amount?: string;
}

export interface ListItem {
  text: string;
  type?: string;
}

// =====================================================
// 通用板块属性（每个 section 都支持）
// =====================================================
export interface SectionExtras {
  cardColor?: CardColor;
  cardPattern?: string;
  titleColor?: string;
  tagsVariant?: TagVariant;
}

// =====================================================
// 各板块数据
// =====================================================
export interface Section extends SectionExtras {
  type: SectionType;
  title?: string;
  items?: (StatItem | BarItem | FlowItem | ListItem)[];
  // stats 专用
  insight?: string;
  // flow 专用
  tags?: string[];
  tagsColor?: TagColor;
  // compare 专用
  oldTitle?: string;
  oldContent?: string;
  newTitle?: string;
  newContent?: string;
  // quote/list 专用
  content?: string;
}

export const sections: Section[] = [

  // ── 1. 核心数据概览 ──
  {
    type: 'stats',
    title: '📊 婚恋数据一览',
    cardColor: 'app-blue',
    cardPattern: 'default',
    titleColor: 'app-blue',
    items: [
      { num: '327.5万对', label: '上半年结婚登记', numColor: 'accent', chip: { text: '同比-7.46%', type: 'down' } },
      { num: '138.3万对', label: '上半年离婚登记', numColor: 'app-red', chip: { text: '同比+3.91%', type: 'up' } },
      { num: '42.2%', label: '离结比', numColor: 'app-orange', chip: { text: '每100对结婚·42对离婚', type: 'warn' } },
      { num: '1346.9万对', label: '2013年历史峰值', numColor: 'default', chip: { text: '2023年跌至683.5万对', type: 'down' } },
    ],
    insight: '结婚率下滑与离婚率回升同步发生，离结比从10年前不可想象的水平一路走高。',
  },

  // ── 2. 结婚登记10年下降时间线 ──
  {
    type: 'flow',
    title: '📉 结婚登记数的10年下行线',
    cardColor: 'app-teal',
    cardPattern: 'default',
    titleColor: 'app-teal',
    tags: ['结婚率', '人口结构', '晚婚', '政策影响'],
    tagsColor: 'app-teal',
    items: [
      {
        icon: '🔺',
        title: '2013年：历史峰值',
        desc: '全国结婚登记<strong>1346.9万对</strong>，创下历史最高纪录。此后开始逐年下降，此后再未超越。',
        color: 'blue',
      },
      {
        icon: '📉',
        title: '2019年：跌破千万',
        desc: '从峰值到跌破1000万对用了6年。结婚登记数在下降通道中加速。',
        color: 'orange',
      },
      {
        icon: '📉',
        title: '2023年：跌破800万',
        desc: '十年减半。全国结婚登记跌至<strong>683.5万对</strong>，仅为2013年峰值的约一半。',
        color: 'orange',
      },
      {
        icon: '↗️',
        title: '2025年：短暂反弹',
        desc: '因婚姻登记服务优化，同比<strong>反弹11%</strong>，算是暂时松了口气。',
        color: 'green',
      },
      {
        icon: '📉',
        title: '2026上半年：再次转负',
        desc: '同比下跌约<strong>7.5%</strong>，327.5万对。反弹昙花一现，下降趋势未改。',
        color: 'red',
      },
    ],
    insight: '结婚登记数的10年轨迹：<span class="up">1346.9万对（2013）</span> → <span class="down">683.5万对（2023）</span> → 327.5万对（2026上半年），下降趋势不可逆。',
  },

  // ── 3. 婚姻结构新特征 ──
  {
    type: 'bars',
    title: '💍 婚姻结构的三大转变',
    cardColor: 'app-orange',
    cardPattern: 'default',
    titleColor: 'app-orange',
    items: [
      { icon: '👰', label: '25-29岁成为结婚主力', percent: 72, chip: { text: '取代20-24岁', type: 'neutral' }, meta: '晚婚化趋势明显' },
      { icon: '👨', label: '30-34岁男性未婚比例', percent: 28, chip: { text: '同比+5个百分点', type: 'up' }, meta: '女性同龄仅13%未婚' },
      { icon: '👩', label: '30-34岁女性未婚比例', percent: 13, chip: { text: '同比+2.8个百分点', type: 'up' }, meta: '男女差距持续扩大' },
      { icon: '👴', label: '40岁以上登记结婚占比', percent: 45, chip: { text: '明显上升', type: 'neutral' }, meta: '晚婚已成普遍现象' },
    ],
    insight: '晚婚化与未婚化同步深化，男女未婚比例差距从数据看极为悬殊——30-34岁男性未婚率是女性的<span class="up">2倍以上</span>。',
  },

  // ── 4. 相亲市场的结构性困境 ──
  {
    type: 'list',
    title: '💬 大龄女性相亲市场的结构性困境',
    cardColor: 'app-pink',
    cardPattern: 'default',
    titleColor: 'app-pink',
    items: [
      { text: '<strong>市场结构错位</strong>：一线城市同龄未婚、条件均衡的男性基数本来就很小，再经过线上筛选，人数大幅缩水。', type: 'number' },
      { text: '<strong>县城更极端</strong>：30岁以上女性回县城相亲，要么找条件比自己差的，要么接触的基本就是二婚群体，选择面比一线城市还窄。', type: 'number' },
      { text: '<strong>商业逻辑悖论</strong>：相亲机构七成营收来自30岁以上女性——一边安抚说不用焦虑，一边放大年龄紧迫感推销高价会员，本质上消费的是婚恋焦虑。', type: 'number' },
      { text: '<strong>最优解的讽刺</strong>：对大龄未婚女性来说，最优解是留在大城市尽早结婚——但这恰恰与晚婚大趋势相悖。', type: 'number' },
    ],
  },

  // ── 5. 结婚率下滑的连锁反应 ──
  {
    type: 'flow',
    title: '⚠️ 结婚率下滑的连锁反应',
    cardColor: 'app-red',
    cardPattern: 'default',
    titleColor: 'app-red',
    tags: ['生育', '人口', '消费', '经济'],
    tagsColor: 'app-red',
    items: [
      {
        icon: '⏰',
        title: '生育黄金期已过',
        desc: '妇产科界定<strong>22-25岁</strong>为女性生育黄金阶段，35岁后属高龄产妇。30岁结婚，身体损耗和风险比20岁时明显更高。',
        color: 'orange',
      },
      {
        icon: '👶',
        title: '一胎化趋势明显',
        desc: '30岁女性进入婚姻，大概率<strong>只会生一胎</strong>，因为身体压力下很难再生二胎。',
        color: 'orange',
      },
      {
        icon: '📉',
        title: '新生儿数量持续下降',
        desc: '结婚率起不来，二胎三胎比例也会随适龄女性年龄结构变化而走低。',
        color: 'red',
      },
      {
        icon: '🏭',
        title: '相关消费产业链承压',
        desc: '与新生儿挂钩的整个消费产业链——奶粉、母婴、教育——都会跟着承压，这是系统性的连锁反应。',
        color: 'red',
      },
    ],
    insight: '结婚率→生育率→新生儿→相关消费的链条正在系统性走弱，且每一个环节的下滑都会反向强化下一个环节的困境。',
  },

  // ── 6. 结婚 vs 离婚 ──
  {
    type: 'compare',
    title: '⚔️ 结婚曲线往下 vs 离婚曲线往上',
    cardColor: 'app-blue',
    cardPattern: 'default',
    titleColor: 'app-blue',
    oldTitle: '📉 结婚登记（下降通道）',
    oldContent: `今年上半年<strong>327.5万对</strong>，同比减少<strong>26.4万对</strong>，跌幅<strong>7.46%</strong>。<br><br>2013年峰值1346.9万对→2023年683.5万对→2026上半年327.5万对，<span class="down">十年减半</span>。`,
    newTitle: '📈 离婚登记（回升通道）',
    newContent: `今年上半年<strong>138.3万对</strong>，同比增加<strong>5.2万对</strong>，涨幅<strong>3.91%</strong>。<br><br>2023年离婚冷静期后连续回升，<span class="up">结束2025年全年回落态势</span>，重新回到缓慢增长通道。真实离婚规模还包括法院调解判离的数量，实际更大。`,
    insight: '结婚在降、离婚在升，这一降一升之间的剪刀差正在扩大。离结比从去年37.6%升至42.2%，即每100对新人结婚同时有42对离婚——这个数字10年前不可想象。',
  },

  // ── 7. 离婚人群画像 ──
  {
    type: 'bars',
    title: '👥 离婚人群画像',
    cardColor: 'app-orange',
    cardPattern: 'default',
    titleColor: 'app-orange',
    items: [
      { icon: '👨', label: '30-49岁离婚主力', percent: 55, chip: { text: '75后至95前', type: 'neutral' }, meta: '80后尤为突出，房贷、孩子、事业三重压力叠加' },
      { icon: '👴', label: '50岁以上银发离婚占比', percent: 15, chip: { text: '2025年达15.3%', type: 'up' }, meta: '每6.5对诉讼离婚中有1对是携手半辈子的夫妻' },
      { icon: '💔', label: '婚后6-14年高危期', percent: 52, chip: { text: '占比超52%', type: 'warn' }, meta: '10年以上婚龄离婚占比还在逐年提高' },
      { icon: '⚖️', label: '诉讼离婚（vs 民政登记）', percent: 38, chip: { text: '未纳入统计', type: 'neutral' }, meta: '实际离婚规模比民政数据更大' },
    ],
    insight: '<span class="up">75后至95前</span>是离婚绝对主力，<span class="up">银发族离婚</span>也在崛起——婚姻高危期集中在婚后6至14年，压垮婚姻的往往不是狗血大戏，而是鸡毛蒜皮。',
  },

  // ── 8. 离婚原因分析 ──
  {
    type: 'bars',
    title: '💔 离婚原因：生活琐事才是头号杀手',
    cardColor: 'app-pink',
    cardPattern: 'default',
    titleColor: 'app-pink',
    items: [
      { icon: '🧹', label: '感情基础薄弱/生活琐事', percent: 75, chip: { text: '74.53%', type: 'warn' }, meta: '压倒性第一原因，远超戏剧性冲突' },
      { icon: '💔', label: '出轨/重婚/同居', percent: 21, chip: { text: '21.07%', type: 'down' }, meta: '并非主流，比想象中低很多' },
      { icon: '👊', label: '家暴', percent: 18, chip: { text: '17.92%', type: 'down' }, meta: '同样是配角，不是主因' },
    ],
    insight: '戏剧性的出轨、家暴反而是配角，<span class="up">日常琐事磨掉了感情</span>才是婚姻的头号杀手——这颠覆了很多人对离婚原因的直觉判断。',
  },

  // ── 9. 离婚的财务博弈 ──
  {
    type: 'bars',
    title: '💰 离婚的财务精算',
    cardColor: 'app-teal',
    cardPattern: 'default',
    titleColor: 'app-teal',
    items: [
      { icon: '🏠', label: '财产分割：房产', percent: 83, chip: { text: '82.53%', type: 'warn' }, meta: '财产分割绝对核心，其次是车辆50.56%、存款48.70%' },
      { icon: '👶', label: '2-8岁子女抚养权争夺', percent: 54, chip: { text: '53.78%', type: 'neutral' }, meta: '孩子最依赖父母、教育投入开始加码的阶段' },
      { icon: '💵', label: '抚养费区间', percent: 59, chip: { text: '2000-4999元/月', type: 'neutral' }, meta: '58.55%集中在此区间，反映大多数家庭经济现实' },
      { icon: '⚖️', label: '家务劳动补偿获法院支持', percent: 58, chip: { text: '2025年达57.58%', type: 'up' }, meta: '三年从33%跃升至58%，但金额仍微薄' },
    ],
    insight: '离婚财产分割的核心是房产，抚养权争夺集中在2-8岁孩子阶段。家务劳动的价值正被看见——法院支持率三年翻倍，但补偿金额依然微薄。',
  },

  // ── 10. 离婚催生的新经济 ──
  {
    type: 'list',
    title: '💼 离婚催生的新经济业态',
    cardColor: 'app-green',
    cardPattern: 'default',
    titleColor: 'app-green',
    items: [
      { text: '<strong>法律服务市场</strong>：2025年规模达<strong>100-200亿元</strong>。离婚案受理费超1000元的比例从5.75%飙升至48.7%，增长超8倍。', type: 'number' },
      { text: '<strong>仪式感消费</strong>：婚纱照销毁（河北廊坊按重量收费，3公斤内59元）、离婚跟拍（500-1800元）、离婚蛋糕、离婚花艺等全套散伙服务。', type: 'number' },
      { text: '<strong>单身经济</strong>：市场规模超<strong>8万亿元</strong>，离婚群体贡献约9%。小户型住房、一人食餐饮、宠物经济、迷你家电是拥趸。', type: 'number' },
      { text: '<strong>二手流通</strong>：家具、家电、黄金首饰通过二手平台快速流通，催生针对离婚家庭的二手交易中介服务。', type: 'number' },
    ],
  },

  // ── 11. 新型婚姻模式 ──
  {
    type: 'list',
    title: '💍 新型婚姻模式：年轻人的多元选择',
    cardColor: 'app-blue',
    cardPattern: 'default',
    titleColor: 'app-blue',
    items: [
      { text: '<strong>无证婚姻</strong>：只办婚礼不领证。所有流程一个不落，唯独删去领证——为了避免财产牵扯、逃避生育压力、感情出问题离婚麻烦。超1/3年轻人认为领不领证都行。', type: 'number' },
      { text: '<strong>干婚</strong>：法律上还是夫妻，但生活中各过各的，情感和经济都高度独立。某婚恋机构数据显示，<strong>超25%的北上广深夫妻处于干婚状态</strong>，其中70%坦言是为了孩子、财产、社会形象在硬撑。', type: 'number' },
      { text: '<strong>搭子式婚姻、通勤婚姻</strong>等也在年轻群体中蔓延，但这些新型模式的普及程度还远未成为主流婚恋模式。', type: 'number' },
    ],
  },

  // ── 12. 总结金句 ──
  {
    type: 'quote',
    title: '💬 结语',
    cardColor: 'app-yellow',
    cardPattern: 'default',
    titleColor: 'app-yellow',
    content: `<blockquote style="border-left: 4px solid #f5c542; padding: 12px 16px; margin: 0; background: rgba(245,197,66,0.1); border-radius: 8px;">
<p style="margin: 0 0 8px; font-size: 15px;">"结婚不等于上了岸，离婚也不意味着翻了船，<br>不婚更不是掉了队。"</p>
<p style="margin: 0; color: var(--text-light); font-size: 13px;">— sunriches</p>
</blockquote>
<p style="margin-top: 14px; font-size: 14px; line-height: 1.8; text-align: center; color: var(--text-main);">
🏝 结婚率下滑、离婚率回升、婚姻模式多元化<br>
<strong>三条线交织，共同勾勒婚恋领域全新面貌。</strong><br><br>
好的社会从不是硬逼着人凑合过一辈子，<br>
而是在结婚、离婚、不婚的选择题里，<br>
允许每个人能选得更坦然一些。
</p>`,
  },

];
