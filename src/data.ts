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
  title: '逼着胖东来关店，全国房东该彻底醒醒了',
  subtitle: '于东来的公平账本与房东躺赚时代的终结',
  date: '2026年8月12日',
  headerIcon: '🏬',
  footerIcons: '🏪 🏭 🚚 🛒',

  // 视觉特效开关
  enableTypewriter: true,        // 标题打字机效果
  enablePattern: true,           // 卡片花纹背景
  enableIslandTooltip: true,     // 动森气泡提示
  enableDecorFooter: true,       // 树根装饰

  // 页面顶部标签
  topTags: [
    { text: '胖东来', color: 'app-red' as TagColor, variant: 'soft' as TagVariant },
    { text: '房租博弈', color: 'app-orange' as TagColor, variant: 'soft' as TagVariant },
    { text: '商业地产', color: 'app-blue' as TagColor, variant: 'soft' as TagVariant },
    { text: '租约管理', color: 'app-teal' as TagColor, variant: 'soft' as TagVariant },
  ],

  // 核心结论
  summaryTitle: '📌 核心结论',
  summary: `胖东来关店的本质，是用财务底气、战略轮转和价值观三重对齐，做出的一次理性决策。真正让房东该醒醒的不是道德批判，而是一道简单的算术题：<strong>逼走租户之后，你的铺子还能租给谁？</strong>`,

  // 原始文章（折叠内容）
  originalTitle: '「逼着胖东来关店，全国房东该彻底醒醒了」全文',
  originalArticle: `今天看到一个很有意思的新闻：胖东来宣布闭店，这次关的是许昌生活广场店。这家店2002年开业，面积2.3万平方米，是胖东来历史上第一家大型综合商场，也是胖东来体系里资历最老的一家店，甚至可以说是胖东来的发家老店。它不仅年盈利上亿，而且人流量并不少，以至于被很多外地人戏称为"6A级景区"。

那很多人就奇怪了：一家开了快25年，没有经营危机，没有客流问题，也没有什么负面丑闻的老店，为什么说关就关了？

8月9日，于东来发了一段文字，解释了原因：2015年签约时，由于工作失误，租约合同没有统一签订，个别租户租金涨到无法想象的地步，完全脱离了公平原则。

问题在于，许昌生活广场这栋物业产权是分散在好几个小业主手里的，不是单一房东。胖东来本来应该走的流程是统一谈判，把整栋楼的租金锁定在一个公允的水平上。但当年负责这个项目租约签订的工作人员没有严格按照公司规定操作，签合同时没有统一打包、统一签订，而是零零散散地跟各个小业主分开谈的。这一下就埋了雷。续约时，个别房东看胖东来生意好，往死里涨租。

这次正好赶上租约到期，于东来的处理方式没有一丝犹豫：租约到期就是了断的时机。哪怕这家店一年能赚一个多亿，也坚决关掉。他自己原话讲的是："信仰和开心永远是第一位的。人生不要跟不同路的人打交道，否则会影响快乐。而幸福快乐才是一切的前提。"

再往外延伸一层：这件事其实也顺带戳破了中国商业地产这些年的一个老毛病。很多房东的定价逻辑压根不是按照房屋本身的市场价值或者所在区域的市场行情来定的，而是死死盯着租客的经营效益来定价。你生意差，房租照旧不降；你生意一旦好起来，对不起，翻倍、3倍甚至5倍地往上涨。

为什么国外的电商没有干掉实体？不是因为人家法律禁止电商，而是因为实体本身就活得挺滋润，不用给房东打工。在美国，装品牌的租售比——也就是租金占销售额的比重——普遍在8%到10%之间。而在中国呢，核心商圈的商铺租金能占到营收的20%到30%，有些黄金地段甚至能占到一半以上。

胖东来这次关掉的不只是一家店，某种意义上，他关掉的是房东躺赚时代的最后一道门。`,

  // 底部来源
  footerSource: '来源：sunriches 财经深度分析 · 2026年8月12日',
  footerTag: '#胖东来 #商业地产 #房租博弈 #零售',
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

  // ── 1. 事件概览 ──
  {
    type: 'stats',
    title: '🏪 事件概览',
    cardColor: 'app-blue',
    cardPattern: 'default',
    titleColor: 'app-blue',
    items: [
      { num: '2002', label: '开业年份', numColor: 'default', chip: { text: '22年历史', type: 'neutral' } },
      { num: '2.3万㎡', label: '经营面积', numColor: 'default', chip: { text: '发家老店', type: 'neutral' } },
      { num: '上亿', label: '年盈利水平', numColor: 'accent', chip: { text: '仍被关停', type: 'down' } },
      { num: '25年', label: '租约到期', numColor: 'default', chip: { text: '永久关闭', type: 'down' } },
    ],
    insight: '被外地人戏称为<span class="up">"6A级景区"</span>的胖东来许昌生活广场店，8月9日宣布永久关闭。',
  },

  // ── 2. 事件始末时间线 ──
  {
    type: 'flow',
    title: '📖 事件始末',
    cardColor: 'app-teal',
    cardPattern: 'default',
    titleColor: 'app-teal',
    tags: ['许昌生活广场', '租约管理', '公平原则', '果断决策'],
    tagsColor: 'app-teal',
    items: [
      {
        icon: '📋',
        title: '2015年：租约签订失误',
        desc: '工作人员没有按公司规定统一谈判、统一签订，而是<strong>零零散散与各小业主分开谈</strong>，为日后纠纷埋下隐患。',
        color: 'orange',
      },
      {
        icon: '📈',
        title: '续约期：房东大幅涨租',
        desc: '个别房东看胖东来生意好，<strong>往死里涨租，完全脱离公平原则</strong>，远高于市场合理水平。',
        color: 'red',
      },
      {
        icon: '💰',
        title: '合同锁死：中途解约需赔巨额违约金',
        desc: '当年签的分散合同中途无法解约，胖东来面临<strong>继续干利润被蚕食、退出要赔违约金</strong>的两难困境。',
        color: 'orange',
      },
      {
        icon: '🔒',
        title: '2026年8月：租约到期，直接关店',
        desc: '于东来：<em>"信仰和开心永远是第一位，你涨租，我不租，一拍两散。"</em>',
        color: 'green',
      },
    ],
    insight: '新乡大胖店曾有同样剧本：房东涨租3倍（800万→2400万），于东来第二天直接关店，后续房东空置整整10年。',
  },

  // ── 3. 三层因素 ──
  {
    type: 'list',
    title: '💪 敢于关店的三层因素',
    cardColor: 'app-orange',
    cardPattern: 'default',
    titleColor: 'app-orange',
    items: [
      { text: '<strong>财务底气</strong>：账上41亿现金，零负债、不融资、不上市。单店年利润占比极小，关店动不了根本。', type: 'number' },
      { text: '<strong>硬件迭代需求</strong>：24年老店，无地下停车场，通道狭窄。2029年前所有门店须达国际一流，落后空间不值得续命。', type: 'number' },
      { text: '<strong>战略资源轮转</strong>：许昌梦之城、物流237、郑州东站超市、郑州二店红方项目——资源从"维持存量"转向"做增量"。', type: 'number' },
    ],
  },

  // ── 4. 公平=核心资产 ──
  {
    type: 'quote',
    title: '⚖️ 公平是胖东来最核心的资产',
    cardColor: 'app-yellow',
    cardPattern: 'default',
    titleColor: 'app-yellow',
    content: `<blockquote style="border-left: 4px solid #f5c542; padding: 12px 16px; margin: 0; background: rgba(245,197,66,0.1); border-radius: 8px;">
<p style="margin: 0 0 8px; font-size: 15px;">"无论钱多钱少，失去公平正义是底线。"</p>
<p style="margin: 0; color: var(--text-light); font-size: 13px;">— 于东来</p>
</blockquote>
<p style="margin-top: 14px; font-size: 14px; line-height: 1.8;">对顾客无条件退货，对员工薪资比同行高<span class="up">70%</span>，严禁强制加班，对合作伙伴不欺不压——这套"公平"叙事是胖东来品牌的底层资产。<br><br>一旦为高租金妥协，叙事出现裂缝，长期损失<span class="up">远超</span>一家店一年一个亿的利润。<strong>公平是不可减值的资产，一旦减值一次，整张表都得重新估值。</strong></p>`,
  },

  // ── 5. 商业地产问题 ──
  {
    type: 'bars',
    title: '🏢 中国商业地产的定价之殇',
    cardColor: 'app-red',
    cardPattern: 'default',
    titleColor: 'app-red',
    items: [
      { icon: '📊', label: '国内核心商圈租售比', percent: 65, chip: { text: '高达20-30%', type: 'warn' }, meta: '部分黄金地段甚至超过50%' },
      { icon: '🌍', label: '国外品牌租售比', percent: 27, chip: { text: '仅8-10%', type: 'up' }, meta: '美国零售行业平均水平' },
      { icon: '🏚️', label: '二线城市核心商圈空置率', percent: 33, chip: { text: '超过30%', type: 'down' }, meta: '优质租户稀缺已成常态' },
      { icon: '🏙️', label: '一线城市写字楼空置率', percent: 22, chip: { text: '普遍超20%', type: 'down' }, meta: '供需关系已根本性逆转' },
    ],
    insight: '房东盯着租户经营效益定价：你赚钱就涨租，你亏钱租金照旧。这套逻辑把房东变成了"二股东"，而非物业管理者。',
  },

  // ── 6. 高房租 vs 电商 ──
  {
    type: 'compare',
    title: '⚔️ 压垮实体零售的真正元凶',
    cardColor: 'app-pink',
    cardPattern: 'default',
    titleColor: 'app-pink',
    oldTitle: '电商',
    oldContent: `多数人认为电商抢走了实体客流。但电商只是提供了<strong>替代渠道</strong>，让消费者有了用脚投票的权利。`,
    newTitle: '高房租',
    newContent: `真正让商户咬牙切齿的是房东。<strong>没有电商，房东涨租更肆无忌惮；有了电商，商户至少有第二条路可走。</strong><br><br>商务部数据：租金占实体经营成本约<span class="up">三成</span>，涨幅常年是销售额增速的<span class="up">两倍</span>。餐饮行业百分之六七十都在给房东打工。`,
    insight: '在美国，实体零售活的滋润是因为租售比合理（8-10%）；在中国核心商圈，房东把租户当成利润分成对象，而非物业契约方。',
  },

  // ── 7. 对三类人的启发 ──
  {
    type: 'list',
    title: '💡 对不同对象的启发',
    cardColor: 'app-green',
    cardPattern: 'default',
    titleColor: 'app-green',
    items: [
      { text: '<strong>零售企业</strong>：租约管理是命脉，不是文牍工作。警惕沉没成本续命思维——到期节点恰恰是止损和资源重新配置的最佳窗口。', type: 'number' },
      { text: '<strong>商业地产方</strong>：主力店是整个商圈的心脏。对着心脏加价，是最短视的博弈方式。健康的租约结构应该是共生分成，而不是地段勒索。', type: 'number' },
      { text: '<strong>所有决策者</strong>：胖东来真正可贵之处，是把价值观、财务底气、战略轮转<strong>在同一时间点对齐了</strong>。三者缺一，这才是最难复制的地方。', type: 'number' },
    ],
  },

  // ── 8. 金句 ──
  {
    type: 'quote',
    title: '💬 金句',
    cardColor: 'app-teal',
    cardPattern: 'default',
    titleColor: 'app-teal',
    content: `<blockquote style="border-left: 4px solid #4ecdc4; padding: 12px 16px; margin: 0; background: rgba(78,205,196,0.1); border-radius: 8px;">
<p style="margin: 0 0 8px; font-size: 15px;">"你有涨价的自由，我有<span style="color:#e74c3c">不租</span>的自由。账算不拢，那就一拍两散。"</p>
<p style="margin: 0; color: var(--text-light); font-size: 13px;">— 于东来</p>
</blockquote>
<p style="margin-top: 14px; font-size: 14px; line-height: 1.8; text-align: center; color: var(--text-main);">
🏝 胖东来这次关掉的不只是一家店<br>
<strong>他关掉的是房东躺赚时代的最后一道门。</strong>
</p>`,
  },

];
