# SDD 框架与 Grill Skills：演示稿研究底稿

> 研究日期：2026-08-27。仅使用项目官方仓库、官方文档与官方 Skill 源文件。

## 核心结论

OpenSpec、GitHub Spec Kit 与 Superpowers 并不是三个完全同类的工具：

| 项目 | 更准确的定位 | 核心价值 |
| --- | --- | --- |
| OpenSpec | 变更中心的规格资产与工作流系统 | 管理 Change、Delta Spec、Design、Tasks、Sync 与 Archive |
| GitHub Spec Kit | 阶段化、意图驱动的 SDD Harness | 用 Constitution、Spec、Plan、Tasks 和质量门禁固化 SDD |
| Superpowers | 基于可组合 Skills 的完整 Agent 开发方法论 | 约束 Agent 必须经过澄清、批准、计划、TDD、Review 和验证 |

这些定位分别来自 [OpenSpec 官方概念文档](https://github.com/Fission-AI/OpenSpec/blob/main/docs/concepts.md)、[GitHub Spec Kit 官方文档](https://github.com/github/spec-kit/blob/main/docs/index.md)和 [Superpowers 官方 README](https://github.com/obra/superpowers#how-it-works)。

Matt Pocock 的 Grill Skills 位于这些框架之前：它们不是 Spec 的替代品，而是 Explore / Clarify 机制，负责把隐含假设转化成显式决策，再把更高质量的输入交给 Spec。[官方 Grilling 文档](https://github.com/mattpocock/skills/blob/main/docs/productivity/grilling.md)

## OpenSpec：围绕 Change 管理规格演进

官方项目：[Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec)

默认快速路径是：

```text
/opsx:explore（可选）
→ /opsx:propose
→ /opsx:apply
→ /opsx:sync（可选）
→ /opsx:archive
```

扩展路径增加 `/opsx:new`、`/opsx:continue`、`/opsx:ff` 和 `/opsx:verify`，允许逐个生成并评审 Artifact。[官方 OPSX 文档](https://github.com/Fission-AI/OpenSpec/blob/main/docs/opsx.md)、[命令参考](https://github.com/Fission-AI/OpenSpec/blob/main/docs/commands.md)

默认 `spec-driven` Schema 产生：

```text
proposal
   ├── specs
   └── design
          ↓
        tasks
          ↓
      implement
```

典型文件为 `proposal.md`、`specs/**/spec.md`、`design.md` 和 `tasks.md`。Artifact 之间通过 `requires` 组成 DAG；团队可以 fork 或新建 Schema，改变 Artifact、依赖和模板。[官方 Concepts](https://github.com/Fission-AI/OpenSpec/blob/main/docs/concepts.md)、[官方 Schema 文档](https://openspec.dev/docs/customize-schemas)

完成变更时，Delta Spec 可以同步到主规格，Change 则移动到日期化的 Archive，因而同时保留“当前有效规格”和“变更历史”。[官方 Commands](https://github.com/Fission-AI/OpenSpec/blob/main/docs/commands.md)

一句话定位：

> OpenSpec 重点解决一次变更的规格如何被创建、依赖、实现、同步和归档。

## GitHub Spec Kit：标准化 SDD 产物链

官方项目：[github/spec-kit](https://github.com/github/spec-kit)

官方核心流程是 `Spec → Plan → Tasks → Implement`；完整的 Agentic SDD 流程还包括治理和质量门禁：[官方 Agentic SDD Reference](https://github.com/github/spec-kit/blob/main/docs/reference/agentic-sdd.md)

```text
Constitution
→ Specify
→ Clarify
→ Plan
→ Checklist
→ Tasks
→ Analyze
→ Implement
→ Converge
```

- `constitution` 建立项目原则和治理约束。
- `specify` 描述 What 与 Why，形成需求和用户故事。
- `clarify` 针对欠定义区域提问，并把答案写回 `spec.md`。
- `plan` 形成技术实现设计。
- `checklist` 检查需求文本本身是否完整、明确和一致，即“需求的单元测试”。
- `tasks` 生成依赖有序、按用户故事组织的任务。
- `analyze` 以只读方式检查 `spec.md`、`plan.md` 和 `tasks.md` 的冲突与覆盖缺口。
- `implement` 执行任务；`converge` 再比较规格产物与代码，将遗漏补成可追踪任务。

以上职责见 [Agentic SDD Reference](https://github.com/github/spec-kit/blob/main/docs/reference/agentic-sdd.md)、[Clarify Command](https://github.com/github/spec-kit/blob/main/templates/commands/clarify.md)、[Checklist Command](https://github.com/github/spec-kit/blob/main/templates/commands/checklist.md)和 [Analyze Command](https://github.com/github/spec-kit/blob/main/templates/commands/analyze.md)。

主要持久化产物包括 `.specify/memory/constitution.md`，以及每个 Feature 的 `spec.md`、`plan.md`、`tasks.md`、Checklist 和相关设计 Artifact；任务采用严格的 Task ID、并行标记 `[P]` 与用户故事标记 `[USn]`。[官方 README](https://github.com/github/spec-kit#step-1-establish-project-principles)、[Tasks Command](https://github.com/github/spec-kit/blob/main/templates/commands/tasks.md)

一句话定位：

> Spec Kit 重点解决如何用标准阶段、标准产物和质量门禁，把意图稳定地转换成实现。

## Superpowers：把可靠交付纪律装进 Agent

官方项目：[obra/superpowers](https://github.com/obra/superpowers)

Superpowers 将自己定位为面向编码 Agent 的完整软件开发方法论，由可组合 Skills 与强制触发规则组成。[官方 README](https://github.com/obra/superpowers#superpowers)

官方主流程是：[Basic Workflow](https://github.com/obra/superpowers#the-basic-workflow)

```text
brainstorming
→ using-git-worktrees
→ writing-plans
→ subagent-driven-development / executing-plans
→ test-driven-development
→ requesting-code-review
→ finishing-a-development-branch
```

`brainstorming` 在编码前澄清目标、约束、成功标准和方案取舍；架构型任务生成 `docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md`，自检后等待人工批准。[官方 Brainstorming Skill](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md)

`writing-plans` 将已批准的 Spec 拆成带精确文件路径、测试和验证步骤的小任务，默认输出到 `docs/superpowers/plans/YYYY-MM-DD-<feature-name>.md`。[官方 Writing Plans Skill](https://github.com/obra/superpowers/blob/main/skills/writing-plans/SKILL.md)

执行阶段可以为每个任务派发全新 Sub-agent，并在任务后同时检查 Spec 合规和代码质量；实现使用 Red → Green → Refactor，要求先看到测试正确失败，再写最小实现。[官方 Subagent-Driven Development Skill](https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md)、[官方 TDD Skill](https://github.com/obra/superpowers/blob/main/skills/test-driven-development/SKILL.md)

一句话定位：

> Superpowers 不只管理规格产物，更强调 Agent 从澄清到分支收尾必须遵守的执行纪律。

## 三个框架的关键差异

| 维度 | OpenSpec | GitHub Spec Kit | Superpowers |
| --- | --- | --- | --- |
| 流程形态 | Change 内的 Artifact DAG | Constitution 驱动的阶段链 | 自动触发的 Skills 流水线 |
| 规格组织 | 主规格 + Delta + Archive | 每个 Feature 的 Spec / Plan / Tasks | Design Spec + Implementation Plan |
| 澄清 | `/opsx:explore` | `/speckit.clarify` | `brainstorming` + 人工批准 |
| 验证 | `/opsx:verify` | Checklist + Analyze + Converge | TDD + Task Review + Final Review |
| 主要优势 | 规格演进与变更历史 | 标准产物与质量门禁 | 执行纪律与交付闭环 |

表格依据：[OpenSpec Concepts](https://github.com/Fission-AI/OpenSpec/blob/main/docs/concepts.md)、[Spec Kit Agentic SDD](https://github.com/github/spec-kit/blob/main/docs/reference/agentic-sdd.md)、[Superpowers Basic Workflow](https://github.com/obra/superpowers#the-basic-workflow)。

基于这些官方工作流，可以做出以下工程归纳：

- 强调 Change、Delta 与 Archive：优先介绍 OpenSpec。
- 强调团队标准化 SDD 与 Artifact 质量门禁：优先介绍 Spec Kit。
- 已有规格机制，但 Agent 经常跳过计划、测试或 Review：Superpowers 更像执行层补强。
- 若组合使用，应明确唯一的 Spec 事实源和任务状态源，避免多份 Plan / Tasks 同时成为权威。最后一点是基于三个项目都会生成计划类产物所做的工程推论。

## Matt Pocock 的 Grill Skills：提高 Spec 输入质量

### `grilling`：决策树式澄清原语

`grilling` 将问题建模为设计树：当前前置条件均已解决的决策构成 Frontier；一轮只处理当前 Frontier，回答后再计算下一轮。可从环境查明的事实由 Agent 调查，真正的选择由用户决定；Frontier 为空后仍需用户确认已经形成共同理解，不能直接进入实施。[官方 Skill](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md)、[官方说明](https://github.com/mattpocock/skills/blob/main/docs/productivity/grilling.md)

```text
建立决策树
→ 提出当前 Frontier 的问题并附推荐答案
→ 用户做决定
→ 重新计算 Frontier
→ 用户确认共同理解
```

它对 SDD 的价值是把默认值、边界、异常和取舍从“Agent 猜测”变成“人明确确认”。

### `grill-me`：轻量、无状态入口

`grill-me` 调用同一个 `grilling` 原语，不需要代码仓库，也不写文件，适合把松散想法澄清到可以进入 Spec 的程度。[官方 Grill Me Skill](https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md)、[官方说明](https://github.com/mattpocock/skills/blob/main/docs/productivity/grill-me.md)

### `grill-with-docs`：同步沉淀领域语言与 ADR

`grill-with-docs` 组合 `grilling` 与 `domain-modeling`，面向已有仓库：它会将稳定术语写入 `CONTEXT.md`，并只为“难以逆转、缺少上下文会令人意外、且经过真实取舍”的决定创建 `docs/adr/` 记录。[官方 Grill With Docs Skill](https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md)、[官方说明](https://github.com/mattpocock/skills/blob/main/docs/engineering/grill-with-docs.md)、[Domain Modeling Skill](https://github.com/mattpocock/skills/blob/main/skills/engineering/domain-modeling/SKILL.md)

```text
CONTEXT.md → 团队把事物叫什么
docs/adr/  → 为什么做出重要且难以回退的决定
```

这两类资产分别提高 Spec 的术语一致性与决策可追踪性。

### `wayfinder` 与 `to-questionnaire`：扩大澄清范围

大型问题无法在单次会话中澄清时，`wayfinder` 会先定义 Destination，再用 Issue Map、Decision Tickets 和依赖 Frontier 管理 research、prototype 与 grilling 工作，直到路线清楚。[官方 Wayfinder Skill](https://github.com/mattpocock/skills/blob/main/skills/engineering/wayfinder/SKILL.md)

若当前参与者无法回答某个业务事实，`to-questionnaire` 会确认接收者与信息缺口，再生成 `to-questionnaire-<slug>.md` 交给领域专家异步填写，避免为了继续写 Spec 而猜测。[官方 To Questionnaire Skill](https://github.com/mattpocock/skills/blob/main/skills/productivity/to-questionnaire/SKILL.md)

## 对演示稿提纲的建议

建议在“如何写出好的 Spec”之后、“Plan 与 Graph Engineering”之前加入一个章节：

### 新章节：SDD 框架与前置澄清

1. **SDD 框架解决什么问题**  
   方法论说明应该怎样开发；框架把方法固化为 Artifact、Command、Workflow 和 Gate。

2. **OpenSpec：围绕 Change 管理规格演进**  
   展示 `Explore → Proposal → Specs + Design → Tasks → Apply → Verify → Sync → Archive`。

3. **GitHub Spec Kit：标准化 SDD 产物链**  
   展示 `Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze → Implement → Converge`。

4. **Superpowers：把可靠交付纪律装进 Agent**  
   展示 `Brainstorm → Approve → Plan → Worktree → Sub-agent → TDD → Review → Finish`。

5. **三个框架不是三个同类产品**  
   用对比表说明：OpenSpec 管规格演进，Spec Kit 管 SDD 产物链，Superpowers 管 Agent 执行纪律。

6. **Spec 之前，先 Grill**  
   展示 `Loose Idea → grilling / grill-me → grill-with-docs → Confirmed Decisions → Spec`。

7. **大型问题：把澄清也变成 Graph**  
   用 Wayfinder 连接后面的 Graph Engineering：Graph 不只管理执行任务，也能管理尚未解决的决策依赖。

整套内容可以用一句话收束：

> Grill 负责把问题问清楚；Spec 负责把意图写清楚；OpenSpec 与 Spec Kit 负责把规格过程结构化；Superpowers 负责让 Agent 按工程纪律把它做出来。
