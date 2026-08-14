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
  title: '40万亿美债压顶、加息潮来袭，央行这份报告透露了什么？',
  subtitle: '二季度货币政策报告解读：警惕外部风险，坚持精准调控',
  date: '2026年8月14日',
  headerIcon: '🏦',
  footerIcons: '🏦 💵 📉 💱',

  // 视觉特效开关
  enableTypewriter: true,        // 标题打字机效果
  enablePattern: true,           // 卡片花纹背景
  enableIslandTooltip: true,     // 动森气泡提示
  enableDecorFooter: true,       // 树根装饰

  // 页面顶部标签
  topTags: [
    { text: '货币政策', color: 'app-red' as TagColor, variant: 'soft' as TagVariant },
    { text: '全球加息', color: 'app-orange' as TagColor, variant: 'soft' as TagVariant },
    { text: '美债危机', color: 'app-teal' as TagColor, variant: 'soft' as TagVariant },
    { text: '精准调控', color: 'app-blue' as TagColor, variant: 'soft' as TagVariant },
  ],

  // 核心结论
  summaryTitle: '📌 核心结论',
  summary: `二季度货币政策执行报告释放关键信号：央行对海外风险的关注度大幅飙升——加息相关表述从一季度的<b>1处</b>暴增至<b>21处</b>，海外通胀从<b>14处</b>增至<b>30处</b>。美债规模逼近<b>40万亿美元</b>、年净利息达<b>1.04万亿美元</b>、占财政支出的14%，全球加息潮正通过美债收益率外溢至各国融资成本。央行坚持两条主线：高度警惕外部风险，国内坚持精准调控、不搞大水漫灌。`,

  // 底部来源
  footerSource: '来源：季度货币政策报告深度解读 · 2026年8月14日',
  footerTag: '#央行 #货币政策 #美债 #全球加息 #精准调控',
  footerPowered: '🏝 Powered by Animal Island UI + React',
};

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


// =====================================================
// 各板块数据
// =====================================================
export const sections: Section[] = [

  // ── 1. 核心数据一览 ──
  {
    type: 'stats',
    title: '📊 报告里的关键数字',
    cardColor: 'app-blue',
    cardPattern: 'default',
    titleColor: 'app-blue',
    items: [
      { num: '40万亿美元', label: '美债总规模', numColor: 'accent', chip: { text: '全球债务最突出', type: 'up' } },
      { num: '1.04万亿', label: '年净利息（美元）', numColor: 'app-red', chip: { text: '占财政14%', type: 'warn' } },
      { num: '21处', label: '加息相关表述', numColor: 'app-orange', chip: { text: '一季度仅1处', type: 'up' } },
      { num: '-3668亿', label: '上半年住户贷款（元）', numColor: 'default', chip: { text: '二季度缺口', type: 'down' } },
    ],
    insight: '加息表述从1处暴增至21处、美债逼近40万亿——外部风险已成为央行二季度报告最核心的关切。',
  },

  // ── 2. 全球加息潮来袭 ──
  {
    type: 'flow',
    title: '🌍 全球加息潮悄然开启',
    cardColor: 'app-orange',
    cardPattern: 'default',
    titleColor: 'app-orange',
    tags: ['全球加息', '通胀', '美债', '外部环境'],
    tagsColor: 'app-orange',
    items: [
      {
        icon: '🔥',
        title: '导火索：美以冲突推高通胀',
        desc: '冲突推升能源价格，并向工业原材料扩散。央行判断短期看不到结束迹象，<strong>一次性能源冲击可能演变为长期通胀压力</strong>。',
        color: 'red',
      },
      {
        icon: '🌐',
        title: '5月起：多国相继跟进加息',
        desc: '欧央行、日本、澳大利亚、印尼、菲律宾、南非先后加息，美联储内部鹰派声音渐强，<strong>连马斯克都公开支持日本央行加息</strong>。',
        color: 'orange',
      },
      {
        icon: '📢',
        title: '海外加息成主流共识',
        desc: '加息已从边缘议题变成主流政策选择，全球流动性收紧预期快速升温，直接牵动中国外部金融环境。',
        color: 'orange',
      },
    ],
    insight: '从5月全球加息潮到美以冲突推升通胀，外部变量正以前所未有的权重进入央行视野。',
  },

  // ── 3. 央行点名的两大风险 ──
  {
    type: 'bars',
    title: '⚠️ 央行点名的两大风险',
    cardColor: 'app-red',
    cardPattern: 'default',
    titleColor: 'app-red',
    items: [
      { icon: '📈', label: '股市估值泡沫', percent: 72, chip: { text: 'AI概念推高', type: 'warn' }, meta: '流动性收紧易触发资金撤离、大幅回调' },
      { icon: '🌍', label: '全球主权债务风险', percent: 88, chip: { text: '美债40万亿', type: 'up' }, meta: '主要经济体债务处高位，利率涨则付息压力加剧' },
      { icon: '📊', label: '美债收益率 4.683%', percent: 95, chip: { text: '2007年来最高', type: 'up' }, meta: '10年期中标收益率创金融危机以来纪录' },
    ],
    insight: '估值泡沫与主权债务是央行点明的两大风险，而美债收益率正成为全球利率的<b>定价锚</b>——它一往上走，全球融资成本都跟着抬升。',
  },

  // ── 4. 美债科普：借新还旧 ──
  {
    type: 'stats',
    title: '💵 美债真相：用新债还旧债',
    cardColor: 'app-teal',
    cardPattern: 'default',
    titleColor: 'app-teal',
    items: [
      { num: '9.2万亿', label: '2026年到期本金（美元）', numColor: 'accent', chip: { text: '全部借新还旧', type: 'neutral' } },
      { num: '1.04万亿', label: '年净利息（美元）', numColor: 'app-red', chip: { text: '占财政14%', type: 'warn' } },
      { num: '8570亿', label: '前9个月净利息（美元）', numColor: 'default', chip: { text: '月均952亿', type: 'neutral' } },
      { num: '31.74亿', label: '日均付息（美元）', numColor: 'app-orange', chip: { text: '刚性兑付', type: 'neutral' } },
    ],
    insight: '美国从不计划偿还40万亿本金，靠常态化发债滚动续期——本质与个人以贷养贷无异，只是国家信用规模以万亿计。',
  },

  // ── 5. 通胀的多维传导 ──
  {
    type: 'bars',
    title: '🔥 通胀的多维传导链',
    cardColor: 'app-pink',
    cardPattern: 'default',
    titleColor: 'app-pink',
    items: [
      { icon: '⛽', label: '能源 → 工业原材料', percent: 68, chip: { text: '化肥/稀有气体/有色上涨', type: 'up' }, meta: '冲突不平息则继续向消费品传导' },
      { icon: '🤖', label: 'AI 推升通胀效应', percent: 55, chip: { text: '效应已显现', type: 'warn' }, meta: '降本增效的一面尚未看到' },
      { icon: '🔄', label: '一次性冲击 → 长期压力', percent: 62, chip: { text: '央行特别警惕', type: 'warn' }, meta: '欧盟贸易保护主义抬头叠加' },
    ],
    insight: '能源冲击若演变为长期通胀压力，叠加AI投资推升成本，全球央行的宽松空间将被进一步压缩。',
  },

  // ── 6. 总量工具 vs 结构性工具 ──
  {
    type: 'compare',
    title: '🔧 工具取舍：总量留想象，结构做实事',
    cardColor: 'app-blue',
    cardPattern: 'default',
    titleColor: 'app-blue',
    oldTitle: '🔧 总量工具：适时调整',
    oldContent: `二季度表述从"灵活运用多种工具"变为"综合运用并<strong>适时调整</strong>"，似留出降息降准想象空间。<br><br>但银行准备金充裕、降准必要性不高；真降息则大概率配合存款利率下调，可能<strong>加剧居民存款搬家</strong>。`,
    newTitle: '🎯 结构性工具：落地做实',
    newContent: `从"用好各类结构性工具"变为"落实好年初出台政策、<strong>完善工具设计</strong>"，重点把已出台政策落地，而非推新工具。<br><br>7月政治局会议也强调财政金融协同促内需，<span class="up">结构性工具是短期主要抓手</span>。`,
    insight: '总量工具留想象、结构性工具做实事——下半年大概率是结构性工具唱主角，降息降准空间有限。',
  },

  // ── 7. 国内数据两重信号 ──
  {
    type: 'bars',
    title: '📉 国内数据的两重信号',
    cardColor: 'app-orange',
    cardPattern: 'default',
    titleColor: 'app-orange',
    items: [
      { icon: '💳', label: '住户贷款 -3668亿', percent: 60, chip: { text: '二季度缺口', type: 'down' }, meta: '真正拖累的是短期贷款（信用卡/消费贷）' },
      { icon: '🌐', label: '境外贷款 31.7%', percent: 80, chip: { text: '17.1%→31.7%', type: 'up' }, meta: '中资银行境外人民币贷款激增' },
      { icon: '💱', label: '跨境人民币收付 21.4%', percent: 70, chip: { text: '17.2%→21.4%', type: 'up' }, meta: '海外用人民币结算规模快速增长' },
    ],
    insight: '住户贷款收缩 <span class="down">vs</span> 境外贷款飙升——内需不足、外需依赖加深，这正是央行大篇幅谈海外风险的底层原因。',
  },

  // ── 8. 调控范式：管数量 → 管价格 ──
  {
    type: 'flow',
    title: '🎚️ 调控范式：从"管数量"到"管价格"',
    cardColor: 'app-teal',
    cardPattern: 'default',
    titleColor: 'app-teal',
    tags: ['利率改革', '价格调控', '隔夜逆回购'],
    tagsColor: 'app-teal',
    items: [
      {
        icon: '🪣',
        title: '管数量：一放就乱',
        desc: '降准或大量MLF一次性倒钱，要么在金融体系空转、推高资产泡沫，要么节奏踩不准致利率暴涨、机构借钱难——<strong>一放就乱，一收就死</strong>。',
        color: 'blue',
      },
      {
        icon: '🎯',
        title: '管价格：定基准价',
        desc: '央行不直接拍板放多少，而是定<strong>政策利率</strong>，再通过日常买卖让实际利率围绕基准小幅波动，调控更精细。',
        color: 'green',
      },
      {
        icon: '🌙',
        title: '抓隔夜利率',
        desc: '管住最短期限的隔夜利率是关键抓手，逐步增加<strong>隔夜逆回购</strong>频率，政策利率向隔夜演变。',
        color: 'teal',
      },
    ],
    insight: '彻底告别大水漫灌，把调控从"管数量"切换到"管价格"——这是2024年以来反复确认的方向。',
  },

  // ── 9. 结语 ──
  {
    type: 'quote',
    title: '💬 结语',
    cardColor: 'app-yellow',
    cardPattern: 'default',
    titleColor: 'app-yellow',
    content: `<blockquote style="border-left: 4px solid #f5c542; padding: 12px 16px; margin: 0; background: rgba(245,197,66,0.1); border-radius: 8px;">
<p style="margin: 0 0 8px; font-size: 15px;">"在外部约束与内部压力之间寻找平衡，<br>降准可能性不高、降息空间有限，<br>但<strong>精准调控的方向不会变</strong>。"</p>
<p style="margin: 0; color: var(--text-light); font-size: 13px;">— 央行二季度货币政策执行报告</p>
</blockquote>
<p style="margin-top: 14px; font-size: 14px; line-height: 1.8; text-align: center; color: var(--text-main);">
🏦 一条主线：高度警惕外部风险<br>
💡 另一条主线：国内坚持精准调控、不搞大水漫灌<br><br>
全球加息、通胀扩散、债务压力交织，<br>
中国货币政策正学着在风浪里把舵。
</p>`,
  },

];
