import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import test from 'node:test'

test('the visual component catalog is available as a Slidev entry point', async () => {
  await assert.doesNotReject(() => access(new URL('../visual-catalog.md', import.meta.url)))
})

test('the catalog presents every approved visual component family across twelve slides', async () => {
  const source = await readFile(new URL('../visual-catalog.md', import.meta.url), 'utf8')
  const slideCount = 1 + (source.match(/\n---\nclass: visual-catalog\n---\n/g)?.length ?? 0)
  const requiredHeadings = [
    '品牌、框架与二维码',
    '色板、字体与 Glow',
    '标题体系与 SlideShell',
    'GlassCard、StatusChip 与 IconLabel',
    'ComparePanel 与 CodeDiff',
    'FlowNode、FlowEdge 与 QualityGate',
    'ProcessRail 与 LoopDiagram',
    'DagGraph 与 DecisionTree',
    'CapabilityStack、DocumentAnatomy 与 KnowledgePyramid',
    'MarketplaceMock',
    'MetricCard、RiskIceberg 与 MaturityRoadmap',
    'ClickStage',
  ]

  assert.equal(slideCount, 12)
  for (const heading of requiredHeadings) {
    assert.match(source, new RegExp(heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
  }
})

test('LoopDiagram nodes are centered on their polar anchors', async () => {
  const source = await readFile(new URL('../styles/visual-system.css', import.meta.url), 'utf8')
  const nodeRule = source.match(/\.loop-diagram__node\s*\{([^}]*)\}/s)?.[1] ?? ''

  assert.match(
    nodeRule,
    /transform:\s*translate\(-50%,\s*-50%\)\s*rotate\(var\(--angle\)\)/,
    'each loop node must translate by half its own size before rotating around the diagram center',
  )
})

test('KnowledgePyramid side labels stay on one horizontal line', async () => {
  const source = await readFile(new URL('../styles/visual-system.css', import.meta.url), 'utf8')
  const arrowRule = source.match(/\.knowledge-pyramid__arrow\s*\{([^}]*)\}/s)?.[1] ?? ''

  assert.match(arrowRule, /writing-mode:\s*horizontal-tb/, 'side labels should read horizontally')
  assert.match(arrowRule, /white-space:\s*nowrap/, 'side labels must not wrap')
})

test('the runtime assembly filter is a vertically symmetric trapezoid', async () => {
  const source = await readFile(new URL('../styles/deck.css', import.meta.url), 'utf8')
  const filterRule = source.match(/\.assembly-filter::before\s*\{([^}]*)\}/s)?.[1] ?? ''

  assert.match(
    filterRule,
    /clip-path:\s*polygon\(0\s+0,\s*100%\s+0,\s*82%\s+100%,\s*18%\s+100%\)/,
    'the top edge must be level and the lower insets must mirror each other',
  )
})

test('Slidev transition surfaces keep the deck background dark', async () => {
  const source = await readFile(new URL('../styles/deck.css', import.meta.url), 'utf8')
  const transitionSurfaceRule = source.match(/html,\s*body,\s*#app,\s*#slide-content\s*\{([^}]*)\}/s)?.[1] ?? ''

  assert.match(
    transitionSurfaceRule,
    /background(?:-color)?:\s*#03070d/,
    'fade transitions must reveal the dark deck surface, never Slidev white',
  )
})
