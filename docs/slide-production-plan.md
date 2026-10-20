# SDD 开发 Session：逐页视觉与素材规划

> 状态：演示稿制作蓝图，不修改 `slides.md`。  
> 内容基线：[content-outline.md](./content-outline.md)。  
> 视觉参考：[BaizeAI KubeCon HK 源码](https://github.com/BaizeAI/talks/tree/main/packages/2025-06-11-kubecon-hk)与[线上演示](https://baizeai.github.io/talks/2025-06-11-kubecon-hk/#/1)。

## 1. 对参考演示的判断

对参考稿的源码和带 `?clicks=n` 的页面最终态进行抽查后，可复用的不是某一张具体页面，而是一套稳定的演讲视觉语法：

- **暗色舞台**：接近纯黑的底色上叠加大面积蓝/青/紫模糊光晕，内容因此有纵深但不依赖背景图片。
- **标题负责定调**：左上大标题、低对比副标题，标题与主体之间保留足够空间。
- **主体原生构图**：卡片、流程、图标、代码、数字和简单几何图形承担信息表达，真实图片只在人物、品牌和产品证据页使用。
- **玻璃卡片而非白色容器**：低透明填充、1px 低对比边框、轻微背景模糊，不使用重阴影。
- **逐步出现服务叙事**：问题 → 原因 → 方案 → 结论按 click 形成，最终态是一张完整的信息图。
- **颜色表达语义**：红/绿用于问题与方案，黄用于警告，青/蓝用于结构，紫用于抽象能力；不是随机装饰。
- **图标比插画更重要**：参考稿大量使用统一 Iconify/UnoCSS 图标，只有少量 Logo、人物照、截图和二维码是外部素材。

本演示将继承这些原则，但不复制其主题、品牌或页面构图。

## 2. 全局视觉系统

### 2.1 画布与排版

- 16:9，按 1600×900 设计和验收。
- 安全边距：左右 88–96 px，上下 60–72 px。
- 中文无衬线栈：`Inter, "PingFang SC", "Noto Sans SC", system-ui, sans-serif`；代码和 Artifact 名称使用等宽字体。
- 普通页标题 54–64 px；关键结论页 72–96 px；正文 22–28 px；辅助标签 15–18 px。
- 一页最多 3–5 个视觉组；卡片内容超过 6 组时改用图、轴或分层结构。
- 左上页眉包含小号章节标签；右下只保留页码，不放持续占据注意力的大水印。

### 2.2 颜色

| 用途/章节 | 主色 | 使用方式 |
| --- | --- | --- |
| 基础背景 | `#03060B` / `#07101F` | 黑色主舞台和深蓝局部层次 |
| AI 演进 | `#4F8CFF` | 时间线、能力增长、Agent 连接 |
| SDD 总览 | `#35D5F3` | 协议、闭环、主路径 |
| Spec | `#A78BFA` | 意图、契约、文档结构 |
| Plan | `#F5B942` | 依赖、决策、Gate |
| Implement | `#45D483` | 测试通过、反馈、收敛 |
| 框架与工具 | `#D66BFF` + `#35D5F3` | 工具差异与组合 |
| 可复用能力 | `#7185FF` | 知识、Plugin、Marketplace |
| 团队落地 | `#37C6B0` + `#F5B942` | 协作、治理、路线 |
| 错误/风险 | `#FF6673` | 反例、失败、越界 |

规则：每页只选一个章节主色，红/绿只作为语义色，不形成彩虹式卡片墙。

### 2.3 背景与容器

- 使用一个全局 Vue/CSS Glow 组件，根据页面 Frontmatter 配置 `position`、`hue`、`opacity`、`seed`。
- 光晕使用 2–3 个模糊多边形或径向渐变，页面切换时缓慢位移和变色；不准备静态背景图。
- 卡片统一为 `rgba(255,255,255,.04)` 填充、`rgba(255,255,255,.10)` 边框、12–18 px 圆角。
- 重点卡片可提高边框色和局部底色，不使用大面积纯色面板。
- 图、箭头、流程线优先使用 HTML/CSS/SVG 原生绘制，保证清晰、可动和可统一换色。

### 2.4 标题层级

为避免每页标题看起来完全相同，使用四种标题形态：

1. **陈述型**：大结论直接占据页面上半部，如“AI 改变了瓶颈”。
2. **概念型**：章节标签 + 名词 + 一句定义，如“Spec｜共享执行协议”。
3. **问题型**：以问题作为标题，主体在 click 后给出答案，如“做完，等于做对了吗？”
4. **对比型**：标题中直接给出张力，如“代码更快，角色没变”。

避免所有标题都使用“什么是……”“如何……”的课程式句法。

### 2.5 Click 与动效规范

- 所有页面的**初始态必须能看懂当前问题**；最终态必须能单独导出为完整静态页。
- 普通页 1–3 次 click，复杂图最多 5 次；不按每一个 bullet 设置 click。
- 单次 click 应增加一个完整语义块：一个阶段、一条因果链、一组对比或一个结论。
- 进入：opacity 0→1、translate 8–16 px、blur 6→0；时长 350–500 ms。
- 强调：已有元素降至 35–50% 透明度，当前元素提高边框亮度；避免闪烁和大幅弹跳。
- 环形/图结构按路径逐段点亮，不做持续旋转。
- 页面切换时只保留光晕缓慢 morph；主体动效在 click 后快速完成。

## 3. 逐页视觉编排

表中“素材”标记含义：

- **原生**：用 Slidev + Vue + CSS/SVG 完成，无需外部文件。
- **图标**：从统一 Iconify 集合选取。
- **官方**：需要从官方仓库或品牌资源获取，并核对授权。
- **待提供**：需要演讲人/团队补充。

## 封面

### 00｜从意图到可靠交付

- **构图**：左侧 55% 放主标题和副标题；右侧是一条从模糊光点收敛为 Spec 节点、任务图和绿色验证环的抽象路径。
- **初始态**：标题与一个模糊的“Intent”光点。
- **Click 1**：路径生成 Spec、Plan、Implement 三个节点。
- **Click 2 / 最终态**：验证环闭合，出现引导问题。
- **素材**：原生 SVG 路径；演讲人姓名、团队/公司 Logo 为待提供项。

## 一、AI 开发方式的演进

### 01｜没有 AI：人驱动完整开发链

- **构图**：横向生命周期轴，7 个阶段节点；人的图标作为唯一执行者沿轴移动。
- **初始态**：只显示需求和发布两个端点，强调距离。
- **Click 1**：中间阶段全部展开。
- **Click 2 / 最终态**：每阶段出现交接 Artifact，小结“决策与执行都在人”。
- **素材**：原生时间线；人物、文档、代码、测试、Review、发布图标。

### 02｜代码更快，角色没变

- **构图**：复用上一页的生命周期骨架，仅“编码”节点被蓝色 AI 光晕放大；右侧显示 Review/验证排队。
- **初始态**：传统链路淡化。
- **Click 1**：AI 补全、问答、测试生成叠加到编码节点。
- **Click 2 / 最终态**：瓶颈标记从编码滑到理解与验证，出现标题结论。
- **素材**：原生；spark/chat/code 图标。

### 03｜Agent：从回答问题到完成任务

- **构图**：中心 Agent，外圈为 Understand → Plan → Act → Observe → Repair；工具能力作为卫星节点。
- **初始态**：中心 Agent + “Task”。
- **Click 1**：执行环顺时针点亮。
- **Click 2**：读写代码、搜索、工具、测试等卫星接入。
- **Click 3 / 最终态**：画面分出“可调查事实”和“需人确认选择”两条边界。
- **素材**：原生环图；Agent、terminal、search、test、human 图标。

### 04｜能力不只来自模型

- **构图**：八层垂直能力栈，Model 在底部，Harness 可使用的上下文与行动层逐层向上；右侧只放一句职责提示。
- **初始态**：只有 Model 层，画面显得单薄。
- **Click 1**：Context、Rules、Skills 出现。
- **Click 2**：Tools/MCP、Memory、Sub-agent 出现。
- **Click 3 / 最终态**：外框将各层连成“Agent Capability Stack”。
- **素材**：原生堆栈；每层一个统一线性图标。

### 05｜Harness：把 Agent 放进工程系统

- **构图**：中心 Agent Loop 被一个半透明运行容器包围，七个控制面沿容器边缘排列。
- **初始态**：只有 Agent Loop，边界开放。
- **Click 1**：Context、Workflow、State 形成左侧输入控制。
- **Click 2**：Permission、Verification 形成上下安全边界。
- **Click 3 / 最终态**：Observability 与 Human Escalation 闭合右侧输出。
- **素材**：原生架构图；shield、eye、branch、memory、human-transfer 图标。

### 06｜从 Vibe 到 Graph

- **构图**：向右上方发展的成熟度曲线，六个方法节点不是等距直线，而是逐步增加“控制面”。
- **初始态**：Vibe/Prompt 两点，背景仍有大量未控制的噪点。
- **Click 1**：Context 与 SDD 收束意图和上下文。
- **Click 2**：Loop 与 Graph 补上反馈和复杂依赖。
- **最终态**：下方形成四条连续能力带：Intent、Context、Feedback、Dependency。
- **素材**：原生曲线、能力带和节点图标。

## 二、进入 SDD

### 07｜AI 改变了瓶颈

- **构图**：一架极简天平或两条容量柱；左为“实现带宽”，右为“意图/验证带宽”。
- **初始态**：传统状态中实现最重。
- **Click 1**：AI 将实现成本压低，天平快速反转。
- **Click 2 / 最终态**：意图、边界、证据三块成为新瓶颈。
- **素材**：原生天平/柱图；不使用虚构数字。

### 08｜Spec：共享执行协议

- **构图**：中央大号 SPEC 圆核，三瓣分别是 Intent、Contract、Evidence；人、Agent、Test、Review 四方通过连线接入。
- **初始态**：只有模糊需求气泡和四个彼此分离的角色。
- **Click 1**：Intent、Contract、Evidence 聚合为 Spec。
- **Click 2 / 最终态**：四方连线闭合，副标题出现。
- **素材**：原生协议核；角色图标。

### 09｜主路径与完整闭环

- **构图**：中心是三个大节点 Spec → Plan → Implement，外部细线形成 Explore/Clarify/Verify/Reconcile 闭环。
- **初始态**：先出现中心主路径。
- **Click 1**：Explore/Clarify 接入 Spec 前端。
- **Click 2**：Verify 接入 Implement 后端。
- **Click 3 / 最终态**：Reconcile 回到 Spec，形成闭环。
- **素材**：原生环形流程；后续章节反复复用同一视觉模型。

## 三、Spec：定义正确的问题

### 10｜Spec 是契约，不是愿望清单

- **构图**：左右不等宽对比；左侧 65% 是紫色“契约”卡，右侧 35% 是被压低的误区列表。
- **初始态**：显示三个常见误区。
- **Click 1**：共享事实源、行为契约、验收依据覆盖误区。
- **Click 2 / 最终态**：底部出现 What / Why / Constraints / Evidence，How 被推送到 Plan。
- **素材**：原生对比卡；contract、target、check 图标。

### 11｜一份可执行 Spec 的解剖

- **构图**：中央是一张半透明 Spec 文档，八个字段像爆炸图一样从文档向四周拉出；右下保留一个微型贯穿示例。
- **初始态**：空文档只有标题。
- **Click 1**：背景、目标/非目标、用户/场景。
- **Click 2**：业务规则、接口/数据契约、边界异常。
- **Click 3 / 最终态**：非功能约束与验收闭合底部，示例字段同步高亮。
- **素材**：原生文档爆炸图；无需模板截图。

### 12｜详细，不等于高质量

- **构图**：左侧一本很厚但模糊的文档，右侧是六边形质量环；标题采用对比式大字。
- **初始态**：厚文档和“100 pages”被划掉。
- **Click 1**：Clear、Complete、Consistent 三维出现。
- **Click 2**：Verifiable、Traceable、Evolvable 补齐。
- **最终态**：中心显示“减少多种合理解释”。
- **素材**：原生六边形/雷达图；六个质量图标。

### 13｜进入 Plan 前，先过 Spec Gate

- **构图**：左侧为五项 Review Gate，右侧为一段 Bad → Better 的短文本 diff。
- **初始态**：Bad 示例单独出现。
- **Click 1**：歧义、边界、证据 Gate 点亮并标出问题。
- **Click 2**：隐含决策、非目标 Gate 补齐。
- **Click 3 / 最终态**：Better 文本替换 Bad，顶部 Gate 变绿。
- **素材**：原生 checklist 与 diff；等宽字体。

## 四、Plan：设计可执行路径

### 14｜Plan 是执行设计，不是 Todo 列表

- **构图**：左侧是一列松散 Todo，右侧是带依赖、输出和验证的任务网络；中间箭头显示转换。
- **初始态**：Todo 列表占主导。
- **Click 1**：任务被拆成带输入/输出的节点。
- **Click 2 / 最终态**：依赖边与 Gate 出现，右侧成为完整 Plan。
- **素材**：原生；list、graph、test 图标。

### 15｜好 Plan = Node + Edge + Gate

- **构图**：页面中央一个放大的任务节点，左接输入，右接输出；上下分别显示依赖 Edge 和质量 Gate。
- **初始态**：只有 Node 的目标与输出。
- **Click 1**：文件范围、验证命令和完成证据写入 Node。
- **Click 2**：Edge 连接上下游。
- **Click 3 / 最终态**：Gate 落下并显示通过条件。
- **素材**：原生任务卡与连接线。

### 16｜Graph Engineering：复杂工作不是一条线

- **构图**：真实感 DAG，占据页面 70%；关键路径用琥珀色，平行分支用蓝色，Gate 用六边形。
- **初始态**：契约/Schema 根节点。
- **Click 1**：后端、前端、迁移、测试四条分支展开。
- **Click 2**：汇合到集成节点并显示关键路径。
- **Click 3**：一个分支失败，回退到最近检查点。
- **Click 4 / 最终态**：所有分支通过验收 Gate。
- **素材**：原生 SVG DAG；节点需可复用为后续团队协作图组件。

## 五、Implement：让实现持续收敛

### 17｜实现的最小可信单位

- **构图**：从左到右的“证据阶梯”：Task → Diff → Test → Trace → Review → Acceptance；只把“Diff”单独框出时显示不完整。
- **初始态**：大号代码 Diff + “Done?”。
- **Click 1**：测试和运行证据补上。
- **Click 2**：Review 与验收连接回 Spec。
- **最终态**：结论“改动 + 验证证据”。
- **素材**：原生阶梯；code、flask、trace、review 图标。

### 18｜TDD：先固定行为，再写实现

- **构图**：Red → Green → Refactor 三段环形路径，外部由 Acceptance Criterion 指向 Red。
- **初始态**：验收条件变成红色测试，强调“正确失败”。
- **Click 1**：最小实现让路径转绿。
- **Click 2**：Refactor 出现，但绿灯保持。
- **Click 3 / 最终态**：循环回到下一条验收条件。
- **素材**：原生环图；使用语义红/绿，避免大面积刺眼填色。

### 19｜Loop Engineering：循环必须可观察、可退出

- **构图**：中央 Act → Observe → Verify → Repair 环；外圈七个 Guardrail 像控制旋钮。
- **初始态**：只有快速循环，边缘出现失控轨迹。
- **Click 1**：Scope、Permission、Budget 限制行动。
- **Click 2**：Retry、Timeout、Stop Condition 限制循环。
- **Click 3 / 最终态**：Escalation 连接到 Human，失控轨迹消失。
- **素材**：原生环和控制点；timer、shield、budget、stop、human 图标。

### 20｜做完，等于做对了吗？

- **构图**：问题型标题；左侧 Verify 检查矩阵，右侧 Reconcile 三岔路，底部箭头回到 Spec/Plan/Code。
- **初始态**：只出现“Tests Passed”绿色徽标和标题问题。
- **Click 1**：行为、NFR、Review、验收矩阵展开，显示仅测试通过不够。
- **Click 2**：修实现、修 Plan、批准后修 Spec 三条路径出现。
- **Click 3 / 最终态**：回环闭合。
- **素材**：原生检查矩阵与三岔路径。

## 六、框架与澄清工具

### 21｜方法、框架与 Harness 是三层

- **构图**：三层同心/堆叠结构：Methodology 在上提供判断，Framework 在中固化 Artifact/Workflow，Harness 在下运行 Agent。
- **初始态**：只有 Methodology 原则。
- **Click 1**：Framework 层将原则变成 Gate 和 Artifact。
- **Click 2 / 最终态**：Harness 层装配上下文、权限、工具与运行证据。
- **素材**：原生三层架构。

### 22｜Grill：只问当前 Frontier

- **构图**：黑底决策树；已解决节点低亮，当前 Frontier 为紫色发光节点，后续节点保持模糊锁定。
- **初始态**：Loose Idea 根节点。
- **Click 1**：Agent 调查可验证事实，事实节点自动变绿。
- **Click 2**：当前两项真正决策进入 Frontier。
- **Click 3**：用户回答后下一层解锁。
- **Click 4 / 最终态**：Confirmed Decisions 汇入 Spec。
- **素材**：原生决策树；search、user-choice、lock 图标。

### 23｜四种 Grill 半径

- **构图**：从左到右的规模连续谱，不做四张等权卡片；对话气泡 → Repo 文档 → 专家问卷 → Issue/Decision Graph。
- **初始态**：`grill-me` 处理单次想法。
- **Click 1**：`grill-with-docs` 增加 CONTEXT/ADR。
- **Click 2**：`to-questionnaire` 把未知业务事实交给专家。
- **Click 3 / 最终态**：`wayfinder` 管理大型问题的依赖图。
- **素材**：原生连续谱；skill 名称用等宽字，不需要 Matt Pocock 头像。

### 24｜OpenSpec：以 Change 为中心

- **构图**：一个大型 Change 容器，内部是 Proposal、Specs、Design、Tasks 的 Artifact DAG；右侧显示 Sync 与 Archive。
- **初始态**：Explore/Proposal 建立 Change。
- **Click 1**：Specs 与 Design 平行生成。
- **Click 2**：Tasks 依赖两者并进入 Apply。
- **Click 3**：Verify 后 Delta 同步到主 Spec。
- **Click 4 / 最终态**：Change 进入日期化 Archive。
- **素材**：官方 OpenSpec 标识（可回退为文字标识）；其余原生。

### 25｜Spec Kit：阶段与质量门

- **构图**：横向阶段轨道，Constitution 作为贯穿全程的上方基线，Checklist/Analyze/Converge 以 Gate 形态插入。
- **初始态**：Constitution → Specify → Clarify。
- **Click 1**：Plan → Tasks 及对应产物出现。
- **Click 2**：Checklist 与 Analyze Gate 落下。
- **Click 3 / 最终态**：Implement → Converge 完成闭环。
- **素材**：官方 GitHub Mark/Spec Kit 标识；其余原生。

### 26｜Superpowers：执行纪律流水线

- **构图**：像 CI Pipeline 一样的技能流水线；每个 Skill 是一个可插拔模块，批准与 Review 是人工 Gate。
- **初始态**：Brainstorm → Approve。
- **Click 1**：Plan → Worktree。
- **Click 2**：Execute/Sub-agent + TDD。
- **Click 3 / 最终态**：Review → Finish，所有 Gate 变绿。
- **素材**：官方 Superpowers 标识（可回退为文字标识）；brainstorm、plan、branch、test、review 图标。

### 27｜按缺口选框架

- **构图**：左侧三行比较矩阵，右侧是三条“如果……优先……”选择路径；底部一条红线列组合红线。
- **初始态**：只显示三个不同定位，不显示胜负。
- **Click 1**：规格演进、标准产物、执行纪律三项主优势高亮。
- **Click 2**：三种团队场景连接到对应工具。
- **Click 3 / 最终态**：唯一 Spec、唯一任务状态、唯一 Done 标准出现。
- **素材**：三个官方/文字标识；原生矩阵和路径。

## 七、可复用能力工程

### 28｜能力系统，不是 Prompt 文件夹

- **构图**：五层纵向系统图：Knowledge → Plugin → Marketplace → Harness → Eval/Telemetry；左侧项目经验进入，右侧可靠能力输出。
- **初始态**：一堆散落 Prompt/Docs，显示重复与漂移。
- **Click 1**：知识分层并被 Plugin 封装。
- **Click 2**：Marketplace 提供分发和治理。
- **Click 3 / 最终态**：Harness 运行，Eval 反馈回到知识与 Plugin。
- **素材**：原生系统架构；book、package、store、runtime、chart 图标。

### 29｜分级知识库：向下组装，向上晋升

- **构图**：五层金字塔或阶梯，L0 在顶部最稳定、L4 在底部最具体；左右两条方向相反的箭头。
- **初始态**：L0–L2 稳定知识层出现。
- **Click 1**：L3–L4 项目与运行知识出现。
- **Click 2**：向下 Context Assembly 箭头连接任务。
- **Click 3 / 最终态**：向上 Promotion 箭头标明“重复、验证、评审”条件。
- **素材**：原生阶梯；ADR、repo、spec、log 图标。

### 30｜Plugin：能力的发布单元

- **构图**：中心 Plugin Package 爆炸图；Manifest 为封面，Knowledge/Rules/Skills/Tools/Templates/Workflow/Evals/Examples 围绕核心展开。
- **初始态**：一个黑盒 Package。
- **Click 1**：Manifest、版本、Owner、权限展开。
- **Click 2**：Knowledge、Rules、Skills、Tools/MCP 展开。
- **Click 3 / 最终态**：Templates、Workflow、Evals、Examples 补齐，并出现可安装/升级/回滚标签。
- **素材**：原生爆炸图；package、manifest、skill、plug、test 图标。

### 31｜Marketplace：目录 + 信任 + 生命周期

- **构图**：仿真实但品牌中性的内部 Marketplace 界面：左侧筛选，中央 Plugin 卡片，右侧详情/权限面板；顶部有生命周期状态。
- **初始态**：搜索和能力卡片，回答“能不能找到”。
- **Click 1**：Owner、权限、依赖、兼容性、质量证据出现，回答“敢不敢装”。
- **Click 2 / 最终态**：Draft → Pilot → Stable → Deprecated 生命周期出现，回答“谁维护”。
- **素材**：原生 HTML/CSS mock UI；不需要真实产品截图。

### 32｜Harness：任务现场的动态装配

- **构图**：横向运行管线，Task/Repo Signal 进入后，经 Resolver、Policy、Plugin Selection 到 Agent Loop，再到 Verification 与 Trace。
- **初始态**：任务与仓库信号进入。
- **Click 1**：Context Resolver 选择知识层。
- **Click 2**：Policy/Permission 过滤 Plugin 与工具。
- **Click 3**：Agent Loop 执行并验证。
- **Click 4 / 最终态**：Trace/Feedback 回流，未使用能力保持在灰色库中。
- **素材**：原生管线；filter、shield、package、loop、trace 图标。

### 33｜能力如何晋升

- **构图**：上半部是九阶段生命周期带，下半部是三条晋升轨道：Note → Knowledge；Recipe → Skill；Capability Bundle → Plugin。
- **初始态**：Observe → Capture，一次经验仍是灰色。
- **Click 1**：Generalize → Evaluate，重复且有效的模式变蓝。
- **Click 2**：Package → Pilot → Publish。
- **Click 3 / 最终态**：Monitor → Improve/Deprecate 形成回路，并显示 Owner 与版本 Gate。
- **素材**：原生生命周期和轨道。

## 八、团队规模化落地

### 34｜Spec 也会制造确定性幻觉

- **构图**：冰山或风险雷达；水面上是“完整文档”，水面下是八类潜在风险和检测信号。
- **初始态**：一份看起来完整的 Spec 漂在水面。
- **Click 1**：过早冻结、假精确、Spec 漂移、上下文污染露出。
- **Click 2**：验证不足、循环失控、工具锁定、责任稀释补齐。
- **Click 3 / 最终态**：每类风险旁出现一个可观察信号。
- **素材**：原生冰山/雷达；warning 图标。

### 35｜六种“看起来像 SDD”的失败

- **构图**：六行紧凑对照表；左侧红色 Bad 行为，右侧绿色 Better 机制，中间用箭头连接前文章节。
- **初始态**：前三个 Bad 逐行出现。
- **Click 1**：对应 Better 机制出现。
- **Click 2**：后三个 Bad 出现。
- **Click 3 / 最终态**：其余 Better 补齐，底部标出共同根因“没有可执行 Gate”。
- **素材**：原生对照表；少量 cross/check 图标。

### 36｜团队围绕 Artifact 交接

- **构图**：中央 Artifact Chain：Spec → Plan → Tasks → Code/Evidence → Release；五类角色在上下方连接到拥有权与批准权。
- **初始态**：Artifact Chain 先出现，聊天气泡被放在背景并淡出。
- **Click 1**：Product/Domain 与 Tech Lead 连接 Spec/Plan。
- **Click 2**：Developer/Agent 与 QA/Reviewer 连接执行和验证。
- **Click 3 / 最终态**：Platform/Enablement 作为底座连接 Harness、Plugin、Metrics。
- **素材**：原生泳道/链路；角色图标。

### 37｜先闭环，再规模化

- **构图**：五阶段上升式路线图，每阶段是一块能力台阶；上方是成功信号，下方是“暂不建设”。
- **初始态**：Stage 1 单 Feature 模板。
- **Click 1**：Stage 2 Gate + TDD。
- **Click 2**：Stage 3 Repo Harness。
- **Click 3**：Stage 4 Plugin/Knowledge。
- **Click 4 / 最终态**：Stage 5 Marketplace/Eval/Governance。
- **素材**：原生台阶；不写固定周数。

### 38｜度量可靠交付，而不是生成量

- **构图**：五个指标组形成仪表盘；每组一个主指标、一个趋势线和一句解释；“Lines Generated/Prompt Count”作为被划掉的虚荣指标。
- **初始态**：先划掉生成量指标。
- **Click 1**：Flow、Quality 出现。
- **Click 2**：Alignment、Agent Reliability 出现。
- **Click 3 / 最终态**：Reuse 出现并用反馈箭头连接能力系统。
- **素材**：原生数字卡和 sparkline；正式实现时使用示意趋势，不伪造实际数值。

### 39｜可靠 AI 开发系统

- **构图**：全场最大的信息图。上层是人类意图到 Release 的 SDD 主链；中层是 Spec/Plan/Implement 的闭环；下层是 Knowledge/Plugin/Marketplace/Harness；右侧是 Metrics/Eval 回流。
- **初始态**：Human Intent → Explore/Grill → Spec。
- **Click 1**：Plan/Graph 展开。
- **Click 2**：Implement/TDD/Loop 展开。
- **Click 3**：Verify/Reconcile 闭环。
- **Click 4**：底部能力系统接入各阶段。
- **Click 5 / 最终态**：Metrics/Eval 反馈回流，收束语从中央浮现。
- **素材**：复用全稿已经出现的节点、图标和连接线；若提供分享地址，右下可加入最终二维码。

## 4. 需要提前准备的视觉素材

### 4.1 P0：实现前必须完成

| 素材/组件 | 形式 | 来源 | 用途 | 状态 |
| --- | --- | --- | --- | --- |
| 全局 Glow 背景引擎 | Vue + CSS | 自制 | 所有页面的统一舞台与章节变色 | 待实现 |
| Glass Card 组件 | Vue/CSS class | 自制 | 对比、框架、指标、Marketplace 页面 | 待实现 |
| Diagram Node / Edge / Gate | Vue + SVG | 自制 | SDD Loop、DAG、决策树、系统图 | 待实现 |
| 统一图标集 | Iconify Carbon 为主，Logos/Devicon 为辅 | 开源依赖 | 角色、流程、工具、指标 | 待选定并锁版本 |
| 中文/英文排版栈 | 系统字体优先 | 本地可用 | 离线演示稳定性 | 可直接使用 |
| Click transition | 全局 CSS | 自制 | 淡入、位移、模糊和当前阶段强调 | 待实现 |

### 4.2 P1：内容确认后准备

| 素材 | 使用页 | 获取与处理要求 | 回退方案 |
| --- | ---: | --- | --- |
| OpenSpec 标识 | 24、27 | 从官方仓库/站点获取 SVG，核对许可与品牌规则 | Git branch 图标 + 文字标识 |
| GitHub / Spec Kit 标识 | 25、27 | 使用官方 GitHub Mark，Spec Kit 可采用文字标识 | GitHub 图标 + “Spec Kit”文字 |
| Superpowers 标识 | 26、27 | 优先官方仓库资源，避免自行重绘近似商标 | wand/skills 图标 + 文字标识 |
| 演讲人姓名、职位 | 00 | 由演讲人确认中文/英文写法 | 封面不展示个人信息 |
| 团队/公司 Logo | 00、39 | 用户提供透明 SVG/PNG 及安全边距版本 | 纯文字团队名 |

### 4.3 P2：临近发布时准备

| 素材 | 使用页 | 前置条件 |
| --- | ---: | --- |
| 分享链接二维码 | 39 | 最终公开地址稳定后生成；需要高容错、白色模块、透明/深色背景适配 |
| 讲义或仓库短链 | 39 | 确认是否对外公开 |
| 实际团队指标 | 38 | 只有在口径、基线、时间范围确认后替换示意趋势 |
| 案例中的真实 Spec/Plan 片段 | 13、16、18 | 脱敏且得到内部使用许可；否则继续使用自造微型示例 |

### 4.4 当前不需要准备

- 40 张独立背景图：由统一 Glow 引擎动态生成。
- 大量 AI 插画：核心内容是方法、关系和系统，原生图形更清晰。
- 工具界面截图：OpenSpec、Spec Kit、Superpowers 页面以工作流和 Artifact 表达，避免小字截图失去可读性。
- Matt Pocock 人像：Grill 章节讲机制而非个人介绍，文字标识与决策树足够。
- Marketplace 产品截图：使用品牌中性的 HTML/CSS mock UI，更符合“组织内部能力市场”的抽象层级。

## 5. 实现前的组件清单

后续真正修改 `slides.md` 时，优先建立这些可复用组件，再填页面内容：

1. `GlobalGlow.vue`：按页面配置背景分布、章节色、透明度和过渡。
2. `SectionLabel.vue`：小号章节标签与页码。
3. `GlassCard.vue`：支持 normal、accent、danger、success 四种语义。
4. `FlowNode.vue` / `FlowEdge.vue` / `QualityGate.vue`：供流程、DAG、决策树和最终系统图复用。
5. `IconLabel.vue`：统一图标尺寸、标题和辅助说明。
6. `ComparePanel.vue`：Bad/Better、Before/After、Verify/Reconcile 对比。
7. `MetricCard.vue`：指标数值、趋势、解释和证据口径。
8. `ClickStage.vue`：统一初始态、进入态、低亮态和最终态。

## 6. 制作与验收顺序

1. 内容评审：先确认 [content-outline.md](./content-outline.md) 的章节、页数和每页 takeaway。
2. 视觉评审：确认本文的全局系统、逐页构图和素材范围。
3. 组件样张：只实现封面、卡片页、流程页、DAG 页、最终系统图五个代表页，验证视觉语言。
4. 素材冻结：确认 Logo、演讲人信息、二维码和真实案例是否使用。
5. 全量制作：用已确认的内容 + 效果统一改写 `slides.md`。
6. Click 验收：逐页检查 `#/n` 初始态与 `#/n?clicks=k` 最终态，保证没有遮挡、溢出和空白状态。
7. 导出验收：检查静态 PDF 最终态、1600×900 浏览器、无网络或弱网下的字体与图标表现。

## 7. 决策记录

- 当前阶段只落盘内容与制作规划，**不修改 `slides.md`**。
- 参考 BaizeAI 演示的视觉语法，不复制其 KubeCon 品牌、具体页面或素材。
- 每个主题一页；章节通过标签和色彩体现，不插入独立章节页。
- 框架介绍安排在 Spec、Plan、Implement、TDD、Loop 讲解完成之后。
- 可复用能力以“分级知识库 + Plugin + Marketplace + Harness + Eval/Telemetry”的系统方式呈现。
