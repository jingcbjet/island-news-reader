// =====================================================
// 📝 内容数据配置
// 以后要换内容，**只改这个文件**即可。
// 支持 6 种板块类型：stats / bars / flow / compare / list / quote
// =====================================================

// 注意：CardPattern / DividerType 是库内部类型，没有从入口导出。
// 用 CardColor / TagColor / TagVariant 来约束配色即可。
import type { CardColor, TagColor, TagVariant } from 'animal-island-ui';

export interface StatItem {
  icon?: string;
  num: string;
  label: string;
  chip?: { text: string; type: 'up' | 'down' | 'mid' };
  numColor?: string;
  numSize?: string;
}

export interface BarItem {
  icon: string;
  label: string;
  percent: number;
  chip: { text: string; type: 'up' | 'down' | 'mid' };
  barColors?: string;
  meta: string;
}

export interface FlowItem {
  color: 'green' | 'blue' | 'orange' | 'red' | 'purple';
  title: string;
  desc: string;
  amount?: string;
}

export interface ListItem {
  type: 'number' | 'accent' | 'red' | 'blue';
  text: string;
}

// 板块通用字段：color / pattern / titleColor / tagVariant
export interface SectionExtras {
  cardColor?: CardColor;
  cardPattern?: 'default' | 'none' | 'app-pink' | 'app-blue' | 'app-yellow' | 'app-green' | 'app-orange' | 'app-teal' | 'app-red' | 'purple' | 'lime-green' | 'yellow-green' | 'brown' | 'warm-peach-pink';
  titleColor?: CardColor;
  tagsVariant?: TagVariant;
}

export type Section =
  | ({ type: 'stats'; title: string; items: StatItem[]; insight?: string } & SectionExtras)
  | ({ type: 'bars'; title: string; items: BarItem[] } & SectionExtras)
  | ({ type: 'flow'; title: string; items: FlowItem[]; insight?: string; tags?: string[]; tagsColor?: TagColor } & SectionExtras)
  | ({ type: 'list'; title: string; items: ListItem[]; insight?: string } & SectionExtras)
  | ({ type: 'compare'; title: string; oldTitle: string; oldContent: string; newTitle: string; newContent: string; insight?: string } & SectionExtras)
  | ({ type: 'quote'; title?: string; content: string } & SectionExtras);

// =====================================================
// 📊 内容数据 — 修改这里就行
// =====================================================

export const pageData = {
  // ── 页面开关 ──
  enableTypewriter: true,        // 标题打字机效果
  enablePattern: true,           // 卡片花纹背景
  enableIslandTooltip: true,     // 动森气泡提示
  enableDecorFooter: true,       // Footer 装饰（树根）

  // 头部
  headerIcon: '🏝️',
  date: '📅 2026年8月9日 · 每日财经',
  title: '"巴菲特"，开始动手了',
  subtitle: '伯克希尔哈撒韦二季度财报深度解析 · 现金之王策略转向 · 三线出击重仓布局',

  topTags: [
    { text: '伯克希尔', color: 'app-green' as TagColor, variant: 'soft' as TagVariant },
    { text: '巴菲特', color: 'app-yellow' as TagColor, variant: 'soft' as TagVariant },
    { text: '格雷格·阿贝尔', color: 'app-blue' as TagColor, variant: 'soft' as TagVariant },
    { text: 'AI 投资', color: 'purple' as TagColor, variant: 'soft' as TagVariant },
    { text: '现金储备', color: 'app-orange' as TagColor, variant: 'soft' as TagVariant },
  ],

  sections: [
    {
      type: 'stats' as const,
      title: '📊 财报整体表现',
      cardColor: 'app-blue',
      cardPattern: 'default',
      titleColor: 'app-blue',
      items: [
        { num: '256.7亿', label: '二季度净利润（美元）', chip: { text: '同比 ↑107%', type: 'up' as const }, numColor: 'accent2' },
        { num: '357.7亿', label: '上半年累计净利润', chip: { text: '≈ 2414亿人民币', type: 'up' as const }, numColor: 'accent2' },
        { num: '129.8亿', label: '运营利润（真实盈利）', chip: { text: '同比 +16%', type: 'mid' as const }, numSize: '20px' },
        { num: '3655亿', label: '现金储备（美元）', chip: { text: '单季减少 319亿', type: 'down' as const }, numColor: 'accent' },
      ],
      insight: '💡 <strong>运营利润</strong>才是反映实业板块真实赚钱能力的指标 —— 二季度<strong>129.83亿美元</strong>，同比增长 16%，不含股票账面浮盈的扰动。',
    },
    {
      type: 'bars' as const,
      title: '🏭 各业务板块表现',
      cardColor: 'app-green',
      cardPattern: 'default',
      titleColor: 'app-green',
      items: [
        { icon: '🏪', label: '制造服务与零售', percent: 88, chip: { text: '+24%', type: 'up' as const }, meta: '二季度运营利润 44.70亿美元，表现最猛' },
        { icon: '🚂', label: '铁路运输 BNSF', percent: 60, chip: { text: '+6%', type: 'up' as const }, barColors: 'linear-gradient(90deg, #5B9BD5, #8BC34A)', meta: '贡献 15.58亿美元' },
        { icon: '⚡', label: '能源公司', percent: 50, chip: { text: '+27%', type: 'up' as const }, barColors: 'linear-gradient(90deg, #FFC107, #FF9800)', meta: '利润 8.91亿美元' },
        { icon: '🛡️', label: '保险业务（承保）', percent: 40, chip: { text: '-13%', type: 'down' as const }, barColors: 'linear-gradient(90deg, #E57373, #EF5350)', meta: '承保利润 17.31亿美元，同比下滑' },
      ],
    },
    {
      type: 'stats' as const,
      title: '💰 现金储备策略转向',
      cardColor: 'app-yellow',
      cardPattern: 'default',
      titleColor: 'app-orange',
      items: [
        { num: '3974亿', label: '一季度末现金储备', chip: { text: '历史最高点 🏔️', type: 'mid' as const } },
        { num: '3655亿', label: '二季度末现金储备', chip: { text: '单季减少 319亿 📉', type: 'down' as const }, numColor: 'accent2' },
      ],
      insight: '🏆 终结连续十几个季度净卖出的<strong>"现金之王"</strong>状态，二季度<strong>净买入股票 198亿美元</strong>，从"极致囤现金"切换为"留有余地的适度进攻"。',
    },
    {
      type: 'flow' as const,
      title: '🎯 三大投资方向（单季动用 300+ 亿美元）',
      cardColor: 'app-pink',
      cardPattern: 'default',
      titleColor: 'app-pink',
      tagsColor: 'app-teal',
      tagsVariant: 'solid' as TagVariant,
      items: [
        { color: 'green' as const, title: '方向一：买入谷歌 Alphabet', desc: '约 <strong>100亿美元</strong> 通过私募配售参与，折价 8%，24小时内敲定。直接冲进前五大重仓股，取代雪佛龙。', amount: '→ 约 100亿美元' },
        { color: 'blue' as const, title: '方向二：回购自家股票', desc: '二季度投入约 <strong>45亿美元</strong> 回购，是 2021 年以来最大单季回购，用真金白银为自家股票投票。', amount: '→ 约 45亿美元' },
        { color: 'orange' as const, title: '方向三：两笔实业收购', desc: '① 94亿美元收购西方化工 OxyChem（全球基础化学品）<br />② 68亿美元收购住宅建筑商 Taylor Morrison', amount: '→ 共约 162亿美元' },
      ],
      tags: ['谷歌 Alphabet', '股票回购', 'OxyChem', 'Taylor Morrison'],
    },
    {
      type: 'list' as const,
      title: '🧠 投资理念：不赌未来，只买现在',
      cardColor: 'app-blue',
      cardPattern: 'default',
      titleColor: 'app-blue',
      items: [
        { type: 'number' as const, text: '巴菲特明确表示：<strong>不碰任何纯概念AI股票</strong>，等的是有真实现金流支撑的标的' },
        { type: 'number' as const, text: '谷歌的商业闭环最扎实：<strong>搜索 = 全球最大现金流引擎</strong> + 云服务真实增长 + TPU 技术路径可验证' },
        { type: 'number' as const, text: '巴菲特坦诚历史失误：当年谷歌早期就错过了，"<strong>这是一个错误</strong>"' },
        { type: 'accent' as const, text: '这次买谷歌，本质上是巴菲特晚年的一次<strong>迟到的补票</strong>，只是由阿贝尔亲自执行落地' },
      ],
      insight: '🏦 <strong>不信故事看财报，不赌未来只买现在。</strong>用看得见摸得着的现金流，去对冲讲故事式的AI叙事风险 —— 这就是伯克希尔的风格。',
    },
    {
      type: 'compare' as const,
      title: '⚖️ 两代管理者风格对比',
      cardColor: 'app-green',
      cardPattern: 'default',
      titleColor: 'app-green',
      oldTitle: '👴 巴菲特时代',
      oldContent: '长期按兵不动，等到<strong>极端恐慌时刻</strong>才重拳出击。<br /><br />2008年金融危机注资高盛/通用电气、收购柏林顿北方铁路 —— 出手少，但每次都精准抄底。',
      newTitle: '🧑‍💼 阿贝尔时代',
      newContent: '保持极高现金比例的同时，在<strong>回购、建仓、收购三条线</strong>同步试探性配置。<br /><br />不等最恐慌那一刻，提前为持仓争取更多未来可能性。',
      insight: '🔑 巴菲特留下的风险控制基因并没有消失 —— <strong>3655亿美元现金底仓</strong>就是最好的证明。阿贝尔只是选择了一种更贴合AI时代节奏的执行方式。',
    },
    {
      type: 'stats' as const,
      title: '📉 市场反应：股价跑输大盘',
      cardColor: 'app-yellow',
      cardPattern: 'default',
      titleColor: 'app-orange',
      items: [
        { num: '+4.28%', label: '伯克希尔二季度涨幅', numSize: '20px' },
        { num: '+14.87%', label: '标普500同期涨幅', numSize: '20px', numColor: 'primary' },
      ],
      insight: '今年累计涨幅仅约 <strong>3%</strong>，明显落后同期上涨 <strong>13%</strong> 的标普500 🐢<br />市场对阿贝尔投资能力信任度尚未完全建立，大家还在持币观望 👀<br /><br /><span style="background:var(--highlight);padding:4px 12px;border-radius:8px;font-size:12px">B类股距历史新高仅差 3.7%，完整 13F 持仓报告将于8月中下旬披露</span>',
    },
  ] as Section[],

  summaryTitle: '📋 核心结论',
  summary: `伯克希尔从<strong>极致现金防御</strong>切换为<strong>留有余地的适度进攻</strong> —— 三线出击但依然保守克制，投资额不到总现金储备的 10%。
<br /><br />
这不是"看多转向"，而是当市场出现足够明显的定价错误时，继续 100% 持币不再是<em>最优解</em>。
<br /><br />
巴菲特与阿贝尔的传承关系，以及市场对阿贝尔投资能力的观望态度，成为本次财报的最大看点。`,

  originalTitle: '📰 20260809"巴菲特"，开始动手了 — 原文',
  originalArticle: `# 20260809"巴菲特"，开始动手了

## 第一部分：优化后的文本

北京时间8月8日晚间，伯克希尔发布了最新一期财报。数字一出来，整个投资圈为之一振，因为这份财报传递出一个信号：巴菲特留下的那座现金大山终于开始松动了。

根据财报显示，伯克希尔二季度净利润为256.67亿美元，同比暴涨超过107%，直接翻了一倍还多。按A类股计算，每股收益达到17868美元，去年同期才8601美元。上半年累计净利润357.73亿美元，折合人民币差不多2414亿元，同比增长约111%。

财报中公司管理层重点提醒，季度净利润会被股票投资的公允价值剧烈扰动。说白了，这256亿里头，投资收益就占了126.84亿美元，同比大涨155%。其中股票持仓的账面浮盈就贡献了约109亿美元。所谓账面浮盈不是公司当期经营赚到的真金白银，只是持仓股票市值涨了，账面上好看而已。

那真正能反映公司经营状况的数字是什么呢？是运营利润。二季度运营利润129.83亿美元，同比增长16%；上半年运营利润243.29亿美元，同比增长约17%。这个数字才是伯克希尔实业板块真实赚钱能力的体现。

具体看各个业务板块：
- 制造服务与零售板块表现最猛，二季度贡献运营利润44.70亿美元，同比大涨约24%；
- 铁路运输业务BNSF贡献15.58亿美元，同比增长6%；
- 能源公司二季度利润8.91亿美元，同比增长27%；
- 保险业务出现降温，承保利润17.31亿美元，同比下滑13%，保险投资收益30.59亿美元，同比下降约9%。

另外还有个小惊喜，其他类别业务二季度贡献了12.74亿美元，去年同期才0.32亿美元。这主要是因为外汇损益大幅改善，公司持有的非美元计价债务去年是汇兑损失，今年变成了汇兑收益。

接下来才是今天真正的重头戏：伯克希尔现金储备的变化以及投资风格的某种转向。

数据显示，截至6月30日，伯克希尔的现金储备从三个月前创纪录的3974亿美元，一路降到了3655亿美元，一个季度就减少了319亿美元。这在过去几年是很罕见的，因为此前在大家印象里，伯克希尔一直疯狂囤钱，是连续十几个季度净卖出股票的现金之王，以至于很多人都在担心：巴菲特囤了太多现金，是不是预示着要有股灾了？

但这个季度，风向变了。伯克希尔二季度净买入股票接近198亿美元，一举扭转了此前持续抛售的趋势。拉长到上半年看，公司买入股票394.05亿美元，卖出277.80亿美元，净买入约116.25亿美元，从去年同期的净卖出转身变成了净买入。

那么这些钱都花哪了？根据财报，主要是三个方向。

### 第一个方向：买入谷歌
这是最重磅的操作。伯克希尔买入了大约100亿美元的谷歌母公司Alphabet股票。这笔交易是通过私募配售完成的，折价大概8%，而且效率极高，仅24小时内就敲定了。这一下子把Alphabet直接送进了伯克希尔的前五大重仓股，排在苹果、美国运通、可口可乐、美国银行之后，取代了雪佛龙原来的位置。前五大持仓合计占了整个股票组合的66%。

要知道，2025年一季度伯克希尔才第一次建仓谷歌，当时谷歌还只是第十大重仓股。短短几个季度就冲进前五，速度相当快。

这笔投资的背景也挺有意思：今年6月初，Alphabet宣布要融资800亿美元用于扩展AI基础设施和算力，伯克希尔就是通过这轮私募配售参与进去的。投的这100亿美元里，一半是A类普通股，一半是C类股票。

这次操作被市场认为是格雷格·阿贝尔出任CEO以来最有分量的一笔投资，也是伯克希尔历史上参与规模最大的股票发行交易之一。外界一开始猜测，这笔投资会不会是阿贝尔上任之后想要证明自己，开始主动押注AI赛道？但巴菲特7月接受采访时亲口说了，伯克希尔投资谷歌最初其实是他本人发起的，阿贝尔是参与并同意了这个决策，而且阿贝尔拥有最终的决定权，两人之间保持着非常密切的沟通，互相确认各自的操作。

巴菲特还补充说，基于谷歌过往的发展业绩，它在AI领域的胜率很可能会大幅超越华尔街目前推销的绝大多数AI项目。巴菲特甚至坦诚了一个历史性的失误，说自己当年在谷歌运营成本更低、估值更便宜的早期阶段就错过了这家公司，"这是一个错误"。

所以这笔投资，与其说是阿贝尔的AI豪赌，不如说是巴菲特晚年的一次迟到的补票，只是由阿贝尔亲自执行落地而已。

### 第二个方向：回购自家股票
二季度，伯克希尔花了大约45亿美元回购自己的股票，这是2021年以来规模最大的单季回购。上半年累计回购总额大约48亿美元。对比一下，今年一季度的回购规模才2.35亿美元，二季度直接放量提速。

从交易数据能看得更清楚：4月份基本没怎么回购，5月份开始建仓，到了6月份明显加速。仅6月一个月，伯克希尔就回购了大约714万股B类股，平均价格约487.98美元，还有413股A类股，平均价格约73.38万美元。

伯克希尔是从今年一季度重新启动回购计划的，这也是公司一年多以来首次进行股票回购。阿贝尔当时给出的理由是，管理层评估之后认为公司股票目前的内在价值高于市场交易价格，所以决定回购。这其实就是在用真金白银给自家股票投票，用实际行动告诉大家：市场低估了伯克希尔。

### 第三个方向：两笔大手笔的实业收购
第一笔：1月2日，以大约94亿美元收购了西方石油旗下的化工业务OxyChem。这是一家全球性的基础化学品制造商，产品广泛应用在水处理、医药、建筑等领域。收购完成后已经并表到工业制品板块，二季度贡献营收大约14亿美元。

第二笔：以每股72.5美元现金收购住宅建筑商Taylor Morrison，总对价约68亿美元。这笔交易在7月24日正式完成交割，未来会被纳入建筑产品板块，和Clayton Homes、Schulman、Johns Manville这些业务并列。因为季报发布时这笔收购刚刚完成，具体的资产负债公允价值还没披露，要等三季报补充。

值得注意的是，这笔收购的时间点正好是在高利率导致住宅市场相对低迷的时候，多少体现出了阿贝尔对住宅建设长期需求的信心。

买谷歌、回购、搞实业收购，这三个方向一共动用了300多亿美元现金。但即便这样，伯克希尔手里剩下的现金和短期国债合计还有3655亿美元，约合人民币2.46万亿，流动性依然非常充裕。投资用的还不到总现金储备的10%。

那这到底算不算伯克希尔从看空转向看多了呢？我们觉得这个理解多少有点简单粗暴了。更准确的说法是，伯克希尔从极致的现金防御姿态切换成了留有余地的适度进攻。

伯克希尔之前囤积的大量短期国债，年化收益率大概3.7%，光利息每个季度就能带来超过30亿美元的收入，所以持有现金本身在过去这段时间就是一种赚钱的策略。但当市场出现足够明显的定价错误、安全边际足够高的时候，继续100%持有现金就不再是最优解了，所以才有了这一次三线出击但依然保守克制的调整。

比如说这次买入谷歌这个选择，其实也能说明伯克希尔的投资逻辑没变。前一段时间，市场对AI概念的炒作已经到了不太看估值的地步，芯片、算力、大模型，只要沾边的公司股价都在往上冲。但伯克希尔没有碰任何一只纯概念的AI股票，等的就是谷歌。

为什么是它呢？因为谷歌有在线搜索这个全球最大的现金流引擎，有云服务的真实增长，还有TPU芯片这条可验证的技术路径。它并不是AI故事里那个最性感的角色，但商业闭环是最扎实、最能落地的。说白了，伯克希尔买谷歌，本质上是在用看得见摸得着的现金流去对冲讲故事式的AI叙事风险。这也是伯克希尔一贯的风格：不信故事看财报，不赌未来只买现在。

当然，新旧两任管理者必然会有一些风格上的差异。格雷格·阿贝尔今年1月正式接任CEO，他现在展现出的风格跟巴菲特时代确实有一些微妙的不同。

巴菲特时代也不是不花钱，比如2008年金融危机注资高盛和通用电气优先股、2010年收购柏林顿北方铁路、2016年收购精密铸件。巴菲特的节奏基本是长期按兵不动，等到极端恐慌时刻才重拳出击。

而阿贝尔现在的操作模式似乎不太一样，不再静等市场最恐慌的那一刻，而是保持极高现金比例的同时，在回购、建仓、收购这三条线上同步去做试探性配置。本质上是在等待风险溢价回归的过程中，提前为自己的持仓争取更多未来的可能性。这里面既有两代管理者性格上的差异，也可能有时代背景的差异。在AI重塑各行各业的窗口期，如果完全持币等待，是有可能错过重要的战略卡位的。

但要强调的是，巴菲特留下的风险控制基因并没有消失。伯克希尔现在依然保持着3655亿美元的现金底仓，就是最好的证明。阿贝尔只是选择了一种更贴合这个时代节奏的执行方式。正如前面提到的，谷歌这笔投资实际上是巴菲特发起、阿贝尔参与执行的，某种程度上体现的也是传承，而不是阿贝尔另起炉灶。

有意思的是，虽然基本面数据这么强劲，伯克希尔的股价表现却不算特别给力。二季度股价只涨了4.28%，大幅落后标普500指数14.87%。今年以来累计涨幅只有约3%，也明显跑输同期上涨13%的标普500。

不过最近几个月，伯克希尔股价有所回暖，过去三个月累计涨幅大约9%。上周五收盘的时候，B类股股价报521.8美元，距离历史新高只差3.7%。这种股价表现，某种程度上也说明市场对巴菲特退休之后阿贝尔的投资能力信任度还没有完全建立起来，大家还在持币观望。

最后再提一句，完整的13F持仓报告要到8月中下旬才会正式披露，届时能进一步确认伯克希尔二季度整体持仓的全貌，咱们到时候可以再跟进一起看。`,

  footerIcons: '🏝️ 🐾 🌿',
  footerSource: '内容来源：每日财经 · 2026年8月9日',
  footerTag: '仅供个人阅读欣赏 📖',
  footerPowered: 'Powered by Animal-Island-UI 🌳',
};