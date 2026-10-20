# SDD Slidev 视觉组件库清单

> 目的：在实现正式 40 页内容前，先完成并验收整套视觉组件库。  
> 状态：12 页 `visual-catalog.md` 已完成、构建与浏览器验收通过，正式演示已基于冻结接口实现。

## 1. 外部素材（已准备）

| 类别 | 文件/依赖 | 状态 |
| --- | --- | --- |
| Inspire 白色 Logo | `public/assets/brand/inspire-group-logo-white.svg` | 已准备，取自官网底部渲染版本 |
| DJI 白色/灰色 Logo | `public/assets/brand/dji-logo-white.svg`、`dji-logo-gray.svg` | 已准备，取自官网官方 CDN |
| Inspire 官网二维码 | `public/assets/brand/inspire-group-home-qr.svg` | 已准备，本地生成 SVG |
| OpenSpec 标识 | `public/assets/frameworks/openspec-dark.svg`、`openspec-light.svg` | 已准备，官方仓库 |
| Spec Kit 标识 | `public/assets/frameworks/spec-kit-logo.webp` | 已准备，官方仓库 |
| Superpowers 标识 | `public/assets/frameworks/superpowers.svg` | 已准备，官方仓库 |
| 通用功能图标 | `@iconify-json/carbon` | 已安装 |
| 品牌/技术图标 | `@iconify-json/logos`、`@iconify-json/simple-icons` | 已安装 |

## 2. 设计基础组件

### 2.1 Design Tokens

需要提前固化：

- 背景、文字、边框、玻璃层、风险/成功语义色。
- 八个章节主色及 Glow 色相。
- 标题、正文、说明、标签、等宽文本字号与行高。
- 4/8 px 间距体系、圆角、边框、透明度和模糊级别。
- 350–500 ms click 动效与 2.5 s 页面 Glow morph。

验收变体：深色标准、风险、成功、框架、品牌五组色板。

### 2.2 `GlobalGlow`

- 变体：top、bottom、left、right、center、corner、full。
- Props：章节色、透明度、种子、分布。
- 行为：页面切换缓慢 morph；不响应 click，不抢正文注意力。
- 使用页：全部 40 页与组件预览。

### 2.3 `SlideShell`

- 统一安全边距、章节标签、页码与内容区域。
- 变体：standard、statement、full-diagram、cover、closing。
- 标题形态：陈述型、概念型、问题型、对比型。

### 2.4 `GlassCard`

- 变体：neutral、accent、danger、success、muted。
- Slot：icon、title、body、footer。
- 状态：default、active、dimmed、passed、blocked。

### 2.5 `BrandLockup`

- Inspire 单品牌。
- Inspire × DJI 合作关系。
- 框架标识 + 名称。
- Logo 高度、间距、分隔线与“合作方”关系文字统一。

## 3. 内容表达组件

### 3.1 `SectionLabel`

- 章节编号、章节名、章节色。
- 不制作独立章节页，所有内容页复用。

### 3.2 `StatementBlock`

- 用于单句核心结论、引导问题和结尾收束。
- 变体：question、answer、quote、warning。

### 3.3 `ComparePanel`

- Before/After、Is/Is Not、Bad/Better、Verify/Reconcile。
- 变体：balanced、problem-heavy、solution-heavy。
- 支持 click 后一侧 dim、另一侧 active。

### 3.4 `CodeDiff`

- Bad → Better 文本差异、伪代码、Artifact 片段。
- 支持 removed、added、focus 三类行，不做完整编辑器模拟。

### 3.5 `IconLabel` 与 `StatusChip`

- 图标、短标签、辅助说明统一尺寸。
- 状态：fact、decision、risk、gate、evidence、owner。

## 4. 图与流程组件

### 4.1 `FlowNode`

- 变体：primary、secondary、artifact、human、agent、evidence。
- 状态：locked、current、complete、failed、dimmed。

### 4.2 `FlowEdge`

- 变体：solid、dashed、feedback、critical、blocked。
- 支持箭头、标签、方向和 click 后点亮。

### 4.3 `QualityGate`

- 六边形/门形视觉。
- 状态：pending、checking、passed、failed、human-review。

### 4.4 `ProcessRail`

- 线性流程、成熟度曲线、框架阶段链。
- 支持 3–10 个阶段和阶段 Gate。

### 4.5 `LoopDiagram`

- 3、4、5 节点环形结构。
- 支持外圈 Guardrail、退出路径和 Human Escalation。

### 4.6 `DagGraph`

- 根节点、并行分支、关键路径、汇合点、失败回退。
- 用于 Plan、Graph Engineering、OpenSpec Artifact DAG 和最终系统图。

### 4.7 `DecisionTree`

- solved、frontier、locked、fact、decision 五类节点。
- 支持逐层解锁，用于 Grill 和大型澄清问题。

### 4.8 `CapabilityStack`

- 垂直堆栈与分层系统。
- 用于 Agent 能力栈、Harness、Method/Framework/Harness、能力系统。

## 5. 专用信息图组件

### 5.1 `DocumentAnatomy`

- 中央文档 + 4/6/8 个字段拉出。
- 用于 Spec 结构、Plugin 包结构。

### 5.2 `KnowledgePyramid`

- L0–L4 分层、向下组装、向上晋升。
- 支持稳定性和作用域两条辅助轴。

### 5.3 `MarketplaceMock`

- Search、Filter、Plugin Card、Detail、Permission、Lifecycle。
- 完全用 HTML/CSS 构建，不依赖真实产品截图。

### 5.4 `MetricCard` 与 `Sparkline`

- 数字、趋势、口径、状态、证据来源。
- 支持示意态，未提供真实数据时不展示虚构精确数字。

### 5.5 `RiskIceberg`

- 水面结论、水下风险、检测信号。
- 使用 CSS clip-path/SVG，不使用位图插画。

### 5.6 `MaturityRoadmap`

- 五阶段台阶、成功信号、暂不建设项。
- 支持逐阶段 click 揭示。

### 5.7 `SystemMap`

- 复用 FlowNode、FlowEdge、Gate、Loop、CapabilityStack。
- 用于最后一页完整系统图，不再创建一套独立视觉语言。

## 6. Click/状态组件

### `ClickStage`

- 进入：opacity + translate + blur。
- 当前阶段：active 边框与主色。
- 已完成阶段：降低亮度但保持可读。
- 未解锁阶段：隐藏或锁定，不提前泄露结论。
- 最终态：所有语义块完整且适合 PDF 导出。

限制：普通页 1–3 次 click，复杂图最多 5 次；一次 click 增加一个完整语义块，不逐 bullet 动画。

## 7. 视觉组件预览稿

`visual-catalog.md` 计划包含 12 页，只用于组件验收：

1. 品牌、框架 Logo 与二维码。
2. 色板、字体、间距和 Glow 变体。
3. 标题体系与 SlideShell。
4. GlassCard、StatusChip、IconLabel。
5. ComparePanel 与 CodeDiff。
6. FlowNode、FlowEdge、QualityGate。
7. ProcessRail 与 LoopDiagram。
8. DagGraph 与 DecisionTree。
9. CapabilityStack、DocumentAnatomy、KnowledgePyramid。
10. MarketplaceMock。
11. MetricCard、RiskIceberg、MaturityRoadmap。
12. ClickStage 初始态、过程态、最终态。

## 8. 视觉组件验收接缝

在正式演示稿之前，组件库只通过这些公开边界验收：

- `visual-catalog.md` 能被 Slidev 构建。
- 1600×900 下 12 页组件预览没有溢出。
- 每个公开 variant 至少在预览稿出现一次。
- 初始态和 `?clicks=n` 最终态均可理解。
- 所有 Logo、二维码和 Iconify 图标在离线构建后仍可显示。
- 正式 `slides.md` 不依赖组件内部 DOM 结构，只使用公开 Props/Slots/Class。

## 9. 完成顺序

1. 外部素材和依赖：已完成。
2. 视觉组件契约测试：已完成。
3. Design Tokens、基础组件和组件预览稿：已完成。
4. 流程/图组件和组件预览稿：已完成。
5. 专用信息图和 click 状态组件：已完成。
6. 视觉组件预览构建与浏览器验收：已完成。
7. 组件库冻结后实现正式 40 页：已完成。
