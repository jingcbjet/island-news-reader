import { useEffect, useState } from 'react';
import {
  Card,
  Title,
  Tag,
  Button,
  Progress,
  Divider,
  Tooltip,
  Footer,
  Typewriter,
} from 'animal-island-ui';
import { pageData, sections, type Section, type StatItem, type BarItem, type FlowItem, type ListItem } from './data';
import './App.css';

// ──────────────────────────────
// 渲染单个数据卡片
// ──────────────────────────────
function renderStatItem(item: StatItem) {
  return (
    <div className="stat-card" key={item.label}>
      <span
        className={`stat-num ${item.numColor === 'accent2' ? 'up' : item.numColor === 'accent' ? 'warn' : ''}`}
        style={item.numSize ? { fontSize: (item as any).numSize } : undefined}
      >
        {item.num}
      </span>
      <span className="stat-label">{item.label}</span>
      {item.chip && <span className={`chip chip-${item.chip.type}`}>{item.chip.text}</span>}
    </div>
  );
}

// ──────────────────────────────
// 渲染进度条
// ──────────────────────────────
function renderBarItem(item: BarItem) {
  return (
    <div className="seg-group" key={item.label}>
      <div className="seg-label">
        <span>{item.icon} {item.label}</span>
        <Tag size="small" variant="soft" color={item.chip.type === 'up' ? 'app-red' : item.chip.type === 'down' ? 'app-green' : 'app-blue'}>
          {item.chip.text}
        </Tag>
      </div>
      {item.barColors ? (
        <div className="seg-bar" style={{ background: item.barColors }}>
          <div className="seg-fill" style={{ width: `${item.percent}%` }} />
        </div>
      ) : (
        <div className="seg-bar">
          <div className="seg-fill" style={{ width: `${item.percent}%` }} />
        </div>
      )}
      <div className="seg-meta">{item.meta}</div>
    </div>
  );
}

// ──────────────────────────────
// 渲染时间线
// ──────────────────────────────
function renderFlowItem(item: FlowItem, idx: number) {
  const colorEmoji: Record<string, string> = {
    green: '🟢', blue: '🔵', orange: '🟠', red: '🔴', purple: '🟣',
  };
  const cleanTitle = item.title.replace(/^[🟢🔵🟠🔴🟣]\s*/, '').trim();
  return (
    <div className="flow-item" key={idx}>
      <div className="flow-title">{colorEmoji[item.color]} {cleanTitle}</div>
      <div className="flow-desc" dangerouslySetInnerHTML={{ __html: item.desc }} />
      {item.amount && <div className="flow-amount">{item.amount}</div>}
    </div>
  );
}

// ──────────────────────────────
// 渲染要点列表
// ──────────────────────────────
function renderListItem(item: ListItem, idx: number) {
  const bulletClass = item.type === 'number' ? '' : item.type;
  const bulletContent = item.type === 'number' ? String(idx + 1) : '!';
  return (
    <div className="list-item" key={idx}>
      <div className={`list-bullet ${bulletClass}`}>{bulletContent}</div>
      <div dangerouslySetInnerHTML={{ __html: item.text }} />
    </div>
  );
}

// ──────────────────────────────
// 渲染 Title（统一处理）
// ──────────────────────────────
function renderTitle(text: string, color?: string) {
  if (!color) {
    return <Title>{text}</Title>;
  }
  return <Title color={color as any}>{text}</Title>;
}

// ──────────────────────────────
// 渲染板块
// ──────────────────────────────
function renderSection(section: Section, idx: number) {
  const cardProps: any = { className: 'island-card' };
  if (pageData.enablePattern && section.cardColor) {
    cardProps.color = section.cardColor;
    cardProps.pattern = section.cardPattern || 'default';
  } else if (section.cardColor) {
    cardProps.color = section.cardColor;
  }

  const tooltipVariant = pageData.enableIslandTooltip ? 'island' : 'default';
  const safeTitle = section.title || '';
  const safeContent = section.content || '';

  switch (section.type) {
    case 'stats':
      return (
        <section className="section" key={idx}>
          {safeTitle && renderTitle(safeTitle, section.titleColor)}
          <Card {...cardProps}>
            <div className="stat-grid">{(section.items as StatItem[]).map(renderStatItem)}</div>
            {section.insight && (
              <div className="insight" dangerouslySetInnerHTML={{ __html: section.insight }} />
            )}
          </Card>
        </section>
      );

    case 'bars':
      return (
        <section className="section" key={idx}>
          {safeTitle && renderTitle(safeTitle, section.titleColor)}
          <Card {...cardProps}>
            {(section.items as BarItem[]).map(renderBarItem)}
          </Card>
        </section>
      );

    case 'flow':
      return (
        <section className="section" key={idx}>
          {safeTitle && renderTitle(safeTitle, section.titleColor)}
          <Card {...cardProps}>
            <div className="flow">{(section.items as FlowItem[]).map((item, i) => renderFlowItem(item, i))}</div>
            {section.tags && (
              <div className="tag-row" style={{ marginTop: '14px' }}>
                {section.tags.map((t, i) => (
                  <Tag
                    key={i}
                    color={section.tagsColor || 'app-teal'}
                    variant={section.tagsVariant || 'soft'}
                  >
                    {t}
                  </Tag>
                ))}
              </div>
            )}
            {section.insight && (
              <Tooltip
                title={section.insight.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 60) + '...'}
                variant={tooltipVariant as any}
                placement="top"
                bordered
              >
                <div className="insight insight-tooltip" style={{ marginTop: '14px' }} dangerouslySetInnerHTML={{ __html: section.insight }} />
              </Tooltip>
            )}
          </Card>
        </section>
      );

    case 'list':
      return (
        <section className="section" key={idx}>
          {safeTitle && renderTitle(safeTitle, section.titleColor)}
          <Card {...cardProps}>
            {(section.items as ListItem[]).map((item, i) => renderListItem(item, i))}
            {section.insight && (
              <div className="insight" style={{ marginTop: '14px' }} dangerouslySetInnerHTML={{ __html: section.insight }} />
            )}
          </Card>
        </section>
      );

    case 'compare':
      return (
        <section className="section" key={idx}>
          {safeTitle && renderTitle(safeTitle, section.titleColor)}
          <Card {...cardProps}>
            <div className="contrast">
              <div className="contrast-item old">
                <Tag color="app-orange" variant="outlined" size="small">旧</Tag>
                <h4 style={{ marginTop: '8px' }}>{section.oldTitle}</h4>
                <p dangerouslySetInnerHTML={{ __html: section.oldContent || '' }} />
              </div>
              <div className="contrast-item new">
                <Tag color="app-green" variant="outlined" size="small">新</Tag>
                <h4 style={{ marginTop: '8px' }}>{section.newTitle}</h4>
                <p dangerouslySetInnerHTML={{ __html: section.newContent || '' }} />
              </div>
            </div>
            {section.insight && (
              <div className="insight" style={{ marginTop: '14px' }} dangerouslySetInnerHTML={{ __html: section.insight }} />
            )}
          </Card>
        </section>
      );

    case 'quote':
      return (
        <section className="section" key={idx}>
          {safeTitle && renderTitle(safeTitle, section.titleColor)}
          <Card {...cardProps}>
            <div className="insight" dangerouslySetInnerHTML={{ __html: safeContent }} />
          </Card>
        </section>
      );

    default:
      return null;
  }
}

// ──────────────────────────────
// 主页面
// ──────────────────────────────
function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [originalOpen, setOriginalOpen] = useState(false);
  const [typewriterKey, setTypewriterKey] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 用户滚动到顶部时重新触发打字机
  useEffect(() => {
    if (scrollProgress < 5 && pageData.enableTypewriter) {
      setTypewriterKey(k => k + 1);
    }
  }, [scrollProgress]);

  const tooltipVariant = pageData.enableIslandTooltip ? 'island' : 'default';

  return (
    <div className="app">
      <div className="read-progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* ── Header ── */}
      <header className="app-header">
        <span className="app-header-icon">{pageData.headerIcon}</span>
        <span className="app-date">{pageData.date}</span>
        <h1 className="app-title">
          {pageData.enableTypewriter ? (
            <Typewriter trigger={typewriterKey} speed={70}>
              {pageData.title}
            </Typewriter>
          ) : (
            pageData.title
          )}
        </h1>
        <p className="app-subtitle">{pageData.subtitle}</p>
        {pageData.topTags.length > 0 && (
          <div className="tag-row" style={{ justifyContent: 'center', marginTop: '12px' }}>
            {pageData.topTags.map((t, i) => (
              <Tag key={i} color={t.color} variant={t.variant} size="medium">
                {t.text}
              </Tag>
            ))}
          </div>
        )}
      </header>

      {/* ── 板块 ── */}
      {sections.map((s: Section, i: number) => renderSection(s, i))}

      {/* 波浪分隔线（库自带 wave-yellow 装饰） */}
      <Divider type="wave-yellow" />

      {/* ── 现金储备进度条（保留旧版特色） ── */}
      <section className="section">
        {renderTitle('📊 现金储备水位', 'app-orange')}
        <Card color="app-yellow" pattern={pageData.enablePattern ? 'default' : undefined} className="island-card">
          <Tooltip
            title="现金储备从历史高位回落到 3655 亿美元，仍处历史第二高水平"
            variant={tooltipVariant as any}
            placement="top"
            bordered
          >
            <Progress percent={92} />
          </Tooltip>
        </Card>
      </section>

      {/* ── 核心结论 ── */}
      <div className="section">
        <div className="summary-box">
          {renderTitle(pageData.summaryTitle, 'app-green')}
          <p dangerouslySetInnerHTML={{ __html: pageData.summary }} />
        </div>
      </div>

      {/* ── 原始文章（用原生 details 元素实现折叠，因为库里的 Collapse 是 Q&A 不是面板） ── */}
      <section className="section">
        {renderTitle('📖 原始文章', 'app-pink')}
        <Card color="app-pink" pattern={pageData.enablePattern ? 'default' : undefined} className="island-card original-card">
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px',
          }}>
            <span style={{ fontSize: '13px', color: 'var(--text-light)' }}>
              📎 点击下方按钮展开/收起原文完整内容
            </span>
            <Button
              type={originalOpen ? 'default' : 'primary'}
              size="middle"
              onClick={() => setOriginalOpen(v => !v)}
            >
              {originalOpen ? '🔼 收起原文' : '🔽 展开原文'}
            </Button>
          </div>
          {originalOpen && (
            <div className="original-content">
              <h4 style={{ marginTop: 0, color: 'var(--text-main)' }}>
                {pageData.originalTitle}
              </h4>
              <pre className="card-content">{pageData.originalArticle}</pre>
            </div>
          )}
        </Card>
      </section>

      {/* ── Footer（库自带树根装饰） ── */}
      {pageData.enableDecorFooter && (
        <div style={{ marginTop: '40px' }}>
          <Footer type="tree" seamless />
        </div>
      )}

      <footer className="app-footer">
        <div className="app-footer-icons">{pageData.footerIcons}</div>
        <p>{pageData.footerSource}</p>
        <p style={{ marginTop: '4px' }}>{pageData.footerTag}</p>
        <p style={{ marginTop: '8px', opacity: 0.6 }}>{pageData.footerPowered}</p>
      </footer>
    </div>
  );
}

export default App;