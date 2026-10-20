# SDD Slidev 实施方案

> 状态：已按五个公开测试接缝完成实施与验收（2026-08-27）。  
> 内容基线：[content-outline.md](./content-outline.md)  
> 视觉基线：[slide-production-plan.md](./slide-production-plan.md)

## 1. 实施目标

先完成并验收视觉组件库，再将已经确认的 40 页内容与逐页视觉规划实现为可运行、可构建、可导出、可逐步演示的 Slidev 演示稿，并满足：

- 每个主题一页，共 40 页（封面 1 页 + 内容 39 页）。
- Spec、Plan、Implement 三个核心环节脱离工具讲解。
- 框架与 Grill 安排在 TDD、Loop、Verify/Reconcile 之后。
- 使用暗色 Glow、玻璃卡片、原生图形和语义化配色形成统一视觉系统。
- 每页初始态可理解，`?clicks=n` 最终态构图完整。
- Inspire Group、DJI Logo 和 Inspire 官网二维码使用已经准备的本地素材。
- 本地 `npm run dev`、`npm test`、`npm run build` 可稳定运行。

## 2. 产品边界

### 本次包含

- 重写 `slides.md` 的 40 页内容和页面结构。
- 重构 `styles/index.css`，建立统一设计 token、排版、卡片、流程图和 click 动效。
- 新增少量全局 Vue 组件，承载背景、页眉、Logo、流程节点、Gate、指标卡等重复结构。
- 增加最小图标依赖和测试脚本。
- 使用 TDD 分章节垂直实现。
- 构建后使用 Playwright 在 1600×900 下逐页检查。

### 本次不包含

- Figma、PowerPoint 或 Google Slides 版本。
- 独立章节过场页、Session 组织或 Workshop 内容。
- 大量背景图、AI 插画或第三方产品界面截图。
- 未经确认的真实业务数据、客户案例细节或演讲人身份信息。
- 将演示稿发布到公网。

## 3. 已采用的测试接缝

TDD 测试只从下面四个公开边界观察行为，不测试 Vue 组件内部实现：

### Seam A｜Slidev 源内容契约

**公开接口**：`slides.md` 作为 Slidev 的输入文件。

检查：

- 章节按确认顺序出现。
- 每个垂直切片包含预期页标题和核心 takeaway。
- 最终为 40 页，且没有独立章节页、Session/Workshop 页面。
- 品牌素材只在规划页使用，路径指向本地 `public/` 文件。

### Seam B｜静态素材契约

**公开接口**：浏览器可访问的 `/assets/brand/*` URL。

检查：

- Inspire Logo、DJI 白色 Logo、官网二维码存在且格式正确。
- QR 文件的生成来源记录指向 `https://www.inspiregroup.com/zh`。
- 构建产物包含这些素材，演示不依赖运行时外网加载。

### Seam C｜Slidev CLI 构建契约

**公开接口**：`npm test` 与 `npm run build` 的退出状态及 `dist/` 产物。

检查：

- 内容契约测试通过。
- Slidev 编译无错误。
- 构建后首页和静态资源存在。

### Seam D｜浏览器演示契约

**公开接口**：本地演示地址的 `#/n` 和 `#/n?clicks=k`。

检查：

- 1600×900 下页面没有横向或纵向溢出。
- 初始态包含当前问题，最终态包含完整 takeaway。
- click 次数被 Slidev 正确归一化，前后翻页正常。
- 关键代表页覆盖封面、对比、流程、DAG、框架、Marketplace、指标和最终系统图。
- 第 40 页显示 `40 / 40`。

### Seam E｜视觉组件库契约

**公开接口**：独立的 `visual-catalog.md` 及组件公开 Props/Slots/Class。

检查：

- 视觉组件预览稿可独立构建。
- [visual-component-kit.md](./visual-component-kit.md) 中所有公开组件与状态均有代表实例。
- 1600×900 下初始态和最终 click 状态无溢出。
- 正式 `slides.md` 只消费公开接口，不依赖组件私有 DOM。

说明：Seam A–C 使用 Node 内置测试运行器和 CLI；Seam D 使用 Playwright CLI 做黑盒浏览器验收，不测试组件私有结构。

## 4. TDD 垂直切片

不一次写完所有测试。每个切片严格执行“一条失败测试 → 最小实现 → 通过”，完成后再进入下一切片。

### Slice 0｜测试与构建基线

1. **Red**：`npm test` 当前不存在，测试命令失败。
2. **Green**：加入 Node 内置测试运行器和最小 Deck Contract helper，只验证当前演示可被读取。
3. **验证**：现有演示基线通过；不改变页面内容。

### Slice 1｜视觉组件库与预览稿

1. **Red**：`visual-catalog.md` 尚不存在，视觉组件契约失败。
2. **Green**：按 [visual-component-kit.md](./visual-component-kit.md) 分组实现全局 token、基础组件、图组件、专用信息图和 click 状态组件。
3. **浏览器检查**：完成 12 页预览稿，验证所有公开变体、Logo 对比度、二维码尺寸、初始态和最终态。
4. **冻结**：组件预览通过后再开始修改正式 `slides.md`。

### Slice 2｜封面

1. **Red**：正式封面缺少确认后的标题、品牌素材和可靠交付视觉节点。
2. **Green**：使用已经冻结的组件实现第 00 页，不为封面临时扩展新视觉语言。
3. **浏览器检查**：`#/1` 初始态与最终 click 状态。

### Slice 3｜AI 开发方式的演进（01–06）

1. **Red**：章节契约要求六个指定标题和递进顺序。
2. **Green**：实现时间线、Agent Loop、能力栈、Harness 与成熟度曲线。
3. **浏览器检查**：时间线复用、click 节奏和章节色一致。

### Slice 4｜进入 SDD + Spec（07–13）

1. **Red**：要求 SDD 总览、Spec 定义、组成、质量与 Gate 七页。
2. **Green**：实现天平、Spec 协议核、主路径、文档解剖、质量环和 Review Gate。
3. **浏览器检查**：页面标题形态有差异，Bad → Better diff 可读。

### Slice 5｜Plan + Implement（14–20）

1. **Red**：要求 Plan、Graph、TDD、Loop、Verify/Reconcile 的顺序和 takeaway。
2. **Green**：实现 Todo→Graph、Node/Edge/Gate、DAG、证据阶梯、TDD 环、Loop Guardrails 与 Reconcile 三岔路。
3. **浏览器检查**：复杂图最终态不溢出，关键路径与语义色清晰。

### Slice 6｜框架与澄清工具（21–27）

1. **Red**：要求该章节出现在 TDD/Loop 之后，并包含 Grill、OpenSpec、Spec Kit、Superpowers 与组合原则。
2. **Green**：实现三层模型、决策 Frontier、能力连续谱、三个框架工作流和比较矩阵。
3. **浏览器检查**：工具名称与流程阶段无误，不出现工具排名式表达。

### Slice 7｜可复用能力工程（28–33）

1. **Red**：要求 Tiered Knowledge、Plugin、Marketplace、Harness、Eval/Telemetry 形成完整系统。
2. **Green**：实现五层系统、知识阶梯、Plugin 爆炸图、Marketplace mock UI、运行管线和能力晋升轨道。
3. **浏览器检查**：复杂信息密度受控，Marketplace 不依赖截图。

### Slice 8｜团队规模化（34–39）

1. **Red**：要求风险、反例、协作、路线、度量、最终系统图六页，并使总页数达到 40。
2. **Green**：实现风险冰山、Bad/Better 表、Artifact Chain、成熟度台阶、指标卡和全系统图。
3. **浏览器检查**：第 40 页显示完整收束语与品牌/二维码。

### Slice 9｜全量构建与回归

1. `npm test`：所有内容、顺序、素材与页数契约通过。
2. `npm run build`：生产构建通过。
3. Playwright：抽查全部 40 页初始态和最终态；对 8 类代表页面截图复核。
4. 修复只针对失败的公开行为，不为测试暴露组件私有状态。

## 5. 文件结构

实际新增或修改：

```text
slides.md                         # 40 页内容与页面编排
visual-catalog.md                 # 视觉组件独立预览稿
styles/index.css                  # 全局 token、布局与动效
global-top.vue                    # Glow、章节标签、页码等全局层
components/                       # 25 个公开视觉组件
tests/
  deck-contract.test.mjs          # Slidev 源内容与素材契约
  visual-catalog.test.mjs         # 视觉组件目录契约
public/assets/brand/
  README.md                       # 素材来源与使用说明
  inspire-group-logo-white.svg
  dji-logo-white.svg
  dji-logo-gray.svg
  inspire-group-home-qr.svg
public/assets/frameworks/
  README.md
  openspec-dark.svg
  openspec-light.svg
  spec-kit-logo.webp
  superpowers.svg
```

组件数量保持克制：只有在至少三页复用或显著降低图结构复杂度时才抽组件；单页独有构图直接写在对应 Slide 中。

## 6. 技术选择

- Slidev 52 作为渲染与路由层。
- Vue 组件承载可复用视觉原语。
- CSS/SVG 绘制 Glow、流程、DAG、图表和 mock UI。
- Iconify 使用 Carbon 为主，Logos/Simple Icons 为辅；只安装实际用到的集合。
- Node `node:test` 作为零额外框架的契约测试运行器。
- Playwright CLI 作为浏览器黑盒验收工具，不引入组件级 Playwright 测试。

## 7. Done 标准

- [x] 五个测试接缝得到确认。
- [x] 素材准备完成且来源可追溯。
- [x] 视觉组件预览稿构建和浏览器验收通过。
- [x] 40 页内容与批准规划一致。
- [x] 每页标题、构图和 click 节奏符合视觉规划。
- [x] `npm test` 通过。
- [x] `npm run build` 通过。
- [x] 1600×900 下初始态和最终态无溢出。
- [x] 品牌 Logo 清晰，Inspire 二维码指向公司中文主页。
- [x] 演示不依赖运行时外网素材。
