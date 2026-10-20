import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const deckPath = new URL('../slides.md', import.meta.url)

const localAssets = [
  '../public/assets/brand/inspire-group-logo-white.svg',
  '../public/assets/brand/dji-logo-white.svg',
  '../public/assets/brand/dji-logo-gray.svg',
  '../public/assets/brand/inspire-group-home-qr.svg',
  '../public/assets/frameworks/openspec-dark.svg',
  '../public/assets/frameworks/openspec-light.svg',
  '../public/assets/frameworks/spec-kit-logo.webp',
  '../public/assets/frameworks/superpowers.svg',
]

async function readDeck() {
  return readFile(deckPath, 'utf8')
}

function assertInOrder(source, expected) {
  let cursor = -1
  for (const text of expected) {
    const next = source.indexOf(text, cursor + 1)
    assert.notEqual(next, -1, `missing expected deck content: ${text}`)
    assert.ok(next > cursor, `deck content is out of order: ${text}`)
    cursor = next
  }
}

test('the cover and AI evolution chapter establish the approved narrative', async () => {
  const source = await readDeck()

  assertInOrder(source, [
    'Spec-Driven Development',
    '从意图到可靠交付',
    'Agent 会写代码以后，团队还需要设计什么？',
    '没有 AI：人驱动完整开发链',
    '早期 AI：代码更快，角色没变',
    'Agent：从回答问题到完成任务',
    'Agent 能力栈：能力不只来自模型',
    'Harness：把 Agent 放进工程系统',
    '方法论演进：从生成代码到设计系统',
  ])
})

test('slide titles state a takeaway instead of using the what-it-is-and-is-not template', async () => {
  const source = await readDeck()

  assert.ok(!source.includes('是什么，也不是什么'), 'replace classification-style titles with direct audience-facing claims')
})

test('generic presentation labels use Chinese while named concepts stay intact', async () => {
  const source = await readDeck()
  const genericEnglishLabels = [
    'SHARED EXECUTION PROTOCOL',
    'BEFORE AI',
    'EARLY AI',
    'ACTION PLANE',
    'INPUT FIELD',
    'THE NEW BOTTLENECK',
    'RUNNING EXAMPLE',
    'READY FOR PLAN',
    'NOT A PLAN',
    'TASK SIGNAL',
    'CAPABILITY POOL',
    'SIGNAL',
    'BAD 01',
    'BETTER',
    'THE SYSTEM, NOT JUST THE MODEL',
  ]

  for (const label of genericEnglishLabels) {
    assert.ok(!source.includes(label), `generic visible label should be Chinese: ${label}`)
  }
})

test('SDD and Spec are explained before any framework is introduced', async () => {
  const source = await readDeck()

  assertInOrder(source, [
    'AI 改变了瓶颈',
    'SDD 用 Spec 建立共享执行协议',
    'SDD 的主路径与完整闭环',
    'Spec 固定行为契约，不预设实现路径',
    '可执行 Spec 的组成',
    '好 Spec 的六个质量维度',
    'Spec 评审门：进入 Plan 前先消除歧义',
  ])

  const specIndex = source.indexOf('Spec 评审门：进入 Plan 前先消除歧义')
  for (const framework of ['OpenSpec', 'Spec Kit', 'Superpowers']) {
    const frameworkIndex = source.indexOf(framework)
    assert.ok(frameworkIndex === -1 || frameworkIndex > specIndex, `${framework} appears before the tool-independent Spec section is complete`)
  }
})

test('Plan and Implement remain tool-independent through TDD, Loop, and reconciliation', async () => {
  const source = await readDeck()

  assertInOrder(source, [
    'Plan 把 Spec 转换成可验证的执行路径',
    '好 Plan = 任务节点 + 依赖关系 + 质量门',
    'Graph Engineering：让复杂工作可并行、可恢复',
    '可信交付必须同时包含改动与证据',
    'TDD：把验收条件变成快速反馈',
    'Loop Engineering：设计可控的执行循环',
    '验证与对账：做完不等于做对',
  ])

  const methodComplete = source.indexOf('验证与对账：做完不等于做对')
  for (const framework of ['OpenSpec', 'Spec Kit', 'Superpowers']) {
    const frameworkIndex = source.indexOf(framework)
    assert.ok(frameworkIndex === -1 || frameworkIndex > methodComplete, `${framework} appears before the tool-independent delivery method is complete`)
  }
})

test('frameworks and Grill follow the completed delivery method and use local official assets', async () => {
  const source = await readDeck()

  assertInOrder(source, [
    '验证与对账：做完不等于做对',
    '框架的作用：把方法变成可重复机制',
    'Grill：先把当前决策前沿问清楚',
    'Grill 能力族：根据问题规模选择澄清方式',
    'OpenSpec：围绕 Change 管理规格演进',
    'GitHub Spec Kit：标准化 SDD 产物链',
    'Superpowers：把执行纪律装进 Agent',
    '框架选择与组合：按缺口选，不按热度选',
  ])

  for (const asset of [
    '/assets/frameworks/openspec-dark.svg',
    '/assets/frameworks/spec-kit-logo.webp',
    '/assets/frameworks/superpowers.svg',
  ]) {
    assert.ok(source.includes(asset), `framework slide does not reference its local asset: ${asset}`)
  }
})

test('brand and framework assets are local, readable, and provenance is recorded', async () => {
  const files = await Promise.all(localAssets.map((path) => readFile(new URL(path, import.meta.url))))

  for (const [index, file] of files.entries()) {
    assert.ok(file.byteLength > 100, `local asset is empty or invalid: ${localAssets[index]}`)
  }

  const brandReadme = await readFile(new URL('../public/assets/brand/README.md', import.meta.url), 'utf8')
  const frameworkReadme = await readFile(new URL('../public/assets/frameworks/README.md', import.meta.url), 'utf8')
  assert.match(brandReadme, /https:\/\/www\.inspiregroup\.com\/zh/, 'the Inspire QR destination must be documented')
  assert.match(brandReadme, /DJI/i, 'DJI logo provenance must be documented')
  assert.match(frameworkReadme, /OpenSpec/i, 'OpenSpec provenance must be documented')
  assert.match(frameworkReadme, /Spec Kit/i, 'Spec Kit provenance must be documented')
  assert.match(frameworkReadme, /Superpowers/i, 'Superpowers provenance must be documented')
})

test('reusable capability engineering forms one knowledge, plugin, marketplace, harness, and evaluation system', async () => {
  const source = await readDeck()

  assertInOrder(source, [
    '从项目资产到组织能力系统',
    '分级知识库：按稳定性和作用域组织上下文',
    'Plugin：可版本化、可测试的能力发布单元',
    'Plugin Marketplace：让能力可发现、可治理',
    'Harness：在任务现场组装正确能力',
    '能力晋升与迭代：从一次经验到稳定产品',
  ])

  for (const concept of ['分级知识库', 'Plugin', 'Marketplace', 'Harness', '评估 / 遥测']) {
    assert.ok(source.includes(concept), `reusable capability system is missing: ${concept}`)
  }
})

test('team-scale delivery closes the narrative at exactly forty slides', async () => {
  const source = await readDeck()

  assertInOrder(source, [
    'SDD 的风险：Spec 也会制造确定性幻觉',
    'SDD 反例：看起来规范，实际不可执行',
    '团队协作：围绕产物与质量门，而不是聊天记录',
    '渐进式落地路线：先闭环，再规模化',
    '度量：观察可靠交付，不追逐生成量',
    '完整系统图：从一次需求到可复用能力',
    '不要只让 Agent 写得更快',
  ])

  const frontmatterDelimiters = source.match(/^---$/gm) ?? []
  assert.equal(frontmatterDelimiters.length / 2, 40, 'the formal deck must contain exactly forty slides')
  assert.ok(source.includes('page="40 / 40"'), 'the final slide must show 40 / 40')
  assert.ok(!source.includes('Session 组织'), 'session-organization content must not appear')
  assert.ok(!source.includes('实战 Workshop'), 'workshop content must not appear')
})
