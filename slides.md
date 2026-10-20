---
theme: default
title: Spec-Driven Development · 从意图到可靠交付
info: |
  # Spec-Driven Development
  从意图到可靠交付
author: Inspire Group
transition: fade-out
aspectRatio: 16/9
canvasWidth: 1600
mdc: true
class: sdd-deck
---

<GlobalGlow tone="cyan" position="right" intensity="strong" />

<section class="deck-cover">
  <div class="deck-cover__copy">
    <div class="deck-cover__eyebrow">SPEC-DRIVEN DEVELOPMENT</div>
    <h1>Spec-Driven<br><span>Development</span></h1>
    <p class="deck-cover__lead">从意图到可靠交付</p>
    <p class="deck-cover__question">Agent 会写代码以后，团队还需要设计什么？</p>
  </div>
  <div class="deck-cover__protocol">
    <div class="protocol-card">
      <div class="protocol-card__label">共享执行协议</div>
      <div class="protocol-card__node"><b>01</b><div><strong>Spec</strong><small>定义意图、边界与证据</small></div></div>
      <div class="protocol-card__edge" />
      <div class="protocol-card__node"><b>02</b><div><strong>Plan</strong><small>设计依赖、路径与质量门</small></div></div>
      <div class="protocol-card__edge" />
      <div class="protocol-card__node"><b>03</b><div><strong>Implement</strong><small>用反馈循环持续收敛</small></div></div>
    </div>
  </div>
  <footer class="deck-cover__footer">
    <BrandLockup compact />
    <div class="cover-qr"><span>灵感<br>从这里开始</span><img src="/assets/brand/inspire-group-home-qr.svg" alt="Inspire Group 官网二维码" /></div>
  </footer>
</section>

---
class: sdd-deck
---

<GlobalGlow tone="blue" position="bottom" />
<SlideShell section="01 · AI 之前" title="没有 AI：人驱动完整开发链" subtitle="人既负责决策，也承担绝大部分执行；流程围绕分工、评审与交接设计。" page="02 / 40" tone="blue" variant="full-diagram">
  <div class="human-chain">
    <article><small>01 · 意图</small><h3>需求理解</h3><p>澄清目标、规则与优先级</p><span class="human-chain__owner">产品</span></article>
    <article><small>02 · 设计</small><h3>方案设计</h3><p>确定架构与系统边界</p><span class="human-chain__owner">技术负责人</span></article>
    <article><small>03 · 计划</small><h3>任务拆分</h3><p>规划顺序、依赖与人员</p><span class="human-chain__owner">团队</span></article>
    <article><small>04 · 构建</small><h3>编码</h3><p>把设计转化为代码</p><span class="human-chain__owner">开发</span></article>
    <article><small>05 · 验证</small><h3>测试</h3><p>验证行为与质量属性</p><span class="human-chain__owner">测试</span></article>
    <article><small>06 · 评审</small><h3>评审</h3><p>发现偏差并形成共识</p><span class="human-chain__owner">评审人</span></article>
    <article><small>07 · 发布</small><h3>发布</h3><p>交付、观察与响应</p><span class="human-chain__owner">运维</span></article>
  </div>
  <div v-click class="human-chain__artifacts"><strong>人同时承担执行者与 Harness</strong><span /><StatusChip status="owner">人做选择</StatusChip><StatusChip status="fact">人找事实</StatusChip><StatusChip status="decision">人写代码</StatusChip><StatusChip status="evidence">人组织证据</StatusChip></div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="blue" position="right" intensity="strong" />
<SlideShell section="02 · 早期 AI" title="早期 AI：代码更快，角色没变" subtitle="补全与问答提升局部速度，却没有接管任务分解、上下文管理和最终验证。" page="03 / 40" tone="blue">
  <div class="ai-focus-chain">
    <div>需求理解</div><div>方案设计</div><div>任务拆分</div><div class="active">编码实现</div><div>测试验证</div><div>代码评审</div><div>发布观察</div>
  </div>
  <div v-click class="acceleration-cards">
    <article><b>代码补全</b><small>缩短局部输入路径</small></article>
    <article><b>解释代码</b><small>降低阅读与迁移成本</small></article>
    <article><b>生成测试</b><small>加快样板与用例覆盖</small></article>
    <article><b>局部重构</b><small>自动执行清晰的小改动</small></article>
  </div>
  <div v-click class="bottleneck-shift">
    <article><small>之前</small><strong>实现带宽</strong></article><span>→</span><article><small>之后</small><strong>评审、上下文与验证</strong></article>
  </div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="cyan" position="center" intensity="strong" />
<SlideShell section="03 · AGENT" title="Agent：从回答问题到完成任务" subtitle="Agent 可以观察、行动和修复；真正的业务选择仍然必须由团队确认。" page="04 / 40" tone="cyan" variant="full-diagram">
  <div class="agent-scene">
    <LoopDiagram :steps="['理解','计划','行动','观察','修复']" center="Agent 循环" tone="blue" />
    <div class="agent-boundary">
      <article class="fact">
        <header><h3>事实可调查</h3><StatusChip status="fact" icon="i-carbon-search">Agent 调查</StatusChip></header>
        <p>读代码、搜索仓库、调用工具、运行测试、检查日志，并用环境证据修正自己的判断。</p>
      </article>
      <article v-click class="choice">
        <header><h3>选择需确认</h3><StatusChip status="owner" icon="i-carbon-user-avatar">人确认</StatusChip></header>
        <p>目标、范围、风险承诺、业务规则与不可逆架构权衡，不能由含糊输入静默决定。</p>
      </article>
      <StatementBlock v-click variant="answer" label="关键转变">自主执行越强，输入质量与控制机制越重要。</StatementBlock>
    </div>
  </div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="violet" position="left" />
<SlideShell section="04 · 能力栈" title="Agent 能力栈：能力不只来自模型" subtitle="可靠性是模型、上下文、规则、技能、工具、记忆与协作机制的共同结果。" page="05 / 40" tone="violet" variant="full-diagram">
  <div class="capability-blueprint">
    <div class="capability-blueprint__axis"><span>可靠执行</span><i /> <span>基础推理</span></div>
    <section class="capability-plane action"><small>行动层 · 能做什么</small><article><span class="i-carbon-skill-level" /><div><h3>Skill</h3><p>可复用判断与步骤</p></div></article><article><span class="i-carbon-plug" /><div><h3>工具 / MCP</h3><p>外部动作与数据接口</p></div></article><article><span class="i-carbon-collaborate" /><div><h3>子 Agent</h3><p>有边界的并行协作</p></div></article></section>
    <section class="capability-plane context"><small>上下文层 · 知道什么、受什么约束</small><article><h3>上下文</h3><p>当前任务事实</p></article><article><h3>规则</h3><p>工程与安全边界</p></article><article><span class="i-carbon-data-base" /><div><h3>记忆 / 知识</h3><p>跨步骤持续存在的上下文</p></div></article></section>
    <section class="capability-plane model"><small>推理基础</small><div><b>模型</b><p>语言、推理与生成能力</p></div><strong>模型决定能力上限，工程系统决定可用可靠性。</strong></section>
  </div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="cyan" position="top" />
<SlideShell section="05 · HARNESS" title="Harness：把 Agent 放进工程系统" subtitle="Harness 负责运行、约束、观察和升级；同一模型会因此呈现不同的工程可靠性。" page="06 / 40" tone="cyan" variant="full-diagram">
  <div class="harness-field">
    <section class="harness-domain input"><small>01 · 输入域</small><h3>装配正确上下文</h3><div><span>上下文组装</span><span>状态</span></div><p>只让 Agent 看见当前任务需要且可信的信息。</p></section>
    <section class="harness-domain control"><small>02 · 控制域</small><h3>限制行动边界</h3><div><span>权限</span><span>循环控制</span></div><p>控制可写范围、预算、重试、超时与退出。</p></section>
    <div class="harness-core"><small>运行时</small><strong>Agent</strong><p>行动 · 观察 · 修复</p></div>
    <section class="harness-domain execution"><small>03 · 执行域</small><h3>规定工作方式</h3><div><span>工作流</span><span>人工升级</span></div><p>用阶段、产物与质量门组织协作和升级。</p></section>
    <section class="harness-domain evidence"><small>04 · 证据域</small><h3>判断是否完成</h3><div><span>验证</span><span>可观测性</span></div><p>记录行为、结果与成本，并独立判断证据。</p></section>
  </div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="amber" position="corner" intensity="strong" />
<SlideShell section="06 · 方法论" title="方法论演进：从生成代码到设计系统" subtitle="这些方法不是互相替代，而是在意图、上下文、验证和复杂依赖上逐层增加控制。" page="07 / 40" tone="amber" variant="full-diagram">
  <div class="evolution-track">
    <article style="--level:0;--stage-tone:#4f8cff"><small>01 · 输出</small><h3>Vibe Coding</h3><p>先让模型生成，再凭感觉修正。</p></article>
    <article style="--level:1;--stage-tone:#35d5f3"><small>02 · 指令</small><h3>Prompt Engineering</h3><p>设计更清晰、稳定的指令。</p></article>
    <article style="--level:2;--stage-tone:#a78bfa"><small>03 · 上下文</small><h3>Context Engineering</h3><p>控制模型看到什么事实与规则。</p></article>
    <article style="--level:3;--stage-tone:#f5b942"><small>04 · 意图</small><h3>Spec-Driven Development</h3><p>把意图与证据固化为共享协议。</p></article>
    <article style="--level:4;--stage-tone:#45d483"><small>05 · 反馈</small><h3>Loop Engineering</h3><p>设计可观察、可退出的执行循环。</p></article>
    <article style="--level:5;--stage-tone:#d66bff"><small>06 · 依赖</small><h3>Graph Engineering</h3><p>显式管理并行、依赖、汇合与恢复。</p></article>
  </div>
  <div v-click class="evolution-legend"><span><b>不是：</b>一条严格的行业时间线</span><span><b>而是：</b>从局部生成走向完整交付系统</span></div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="cyan" position="right" intensity="strong" />
<SlideShell section="07 · 为什么需要 SDD" title="AI 改变了瓶颈" subtitle="当代码生成成本下降，真正稀缺的是清晰意图、系统边界与可相信的完成证据。" page="08 / 40" tone="cyan">
  <div class="bottleneck-compare">
    <section class="bottleneck-column">
      <small>之前 · 人工实现</small><h3>怎么写？</h3>
      <div class="bottleneck-bars"><div><span>实现带宽</span><i style="--bar:92%;--bar-tone:#4f8cff" /></div><div><span>意图澄清</span><i style="--bar:42%;--bar-tone:#a78bfa" /></div><div><span>验证证据</span><i style="--bar:34%;--bar-tone:#45d483" /></div></div>
    </section>
    <div class="bottleneck-arrow">→</div>
    <section class="bottleneck-column after">
      <small>之后 · Agent 执行</small><h3>写什么，如何证明？</h3>
      <div class="bottleneck-bars"><div><span>实现带宽</span><i style="--bar:36%;--bar-tone:#4f8cff" /></div><div><span>意图与边界</span><i style="--bar:88%;--bar-tone:#a78bfa" /></div><div><span>验证与对账</span><i style="--bar:96%;--bar-tone:#45d483" /></div></div>
    </section>
  </div>
  <StatementBlock v-click variant="answer" label="新瓶颈" style="margin-top:30px">SDD 首先解决控制与沟通，其次才是效率。</StatementBlock>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="violet" position="center" intensity="strong" />
<SlideShell section="08 · SDD" title="SDD 用 Spec 建立共享执行协议" subtitle="人、Agent、测试与评审围绕同一份可验证契约协作。" page="09 / 40" tone="violet" variant="full-diagram">
  <div class="spec-protocol">
    <div class="spec-protocol__core"><div><strong>SPEC</strong><span>意图 · 契约 · 证据<br>唯一事实源</span></div></div>
    <article><small>为什么 / 为谁</small><h3>意图</h3><p>目标、价值、用户与关键选择。</p></article>
    <article><small>可观察行为</small><h3>契约</h3><p>规则、输入输出、边界与不变量。</p></article>
    <article><small>如何证明</small><h3>证据</h3><p>验收条件、测试、评审与运行信号。</p></article>
    <article><small>共同使用</small><h3>人 × Agent × 测试 × 评审</h3><p>同一协议驱动计划、实现与验收。</p></article>
  </div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="cyan" position="bottom" />
<SlideShell section="09 · 交付模型" title="SDD 的主路径与完整闭环" subtitle="核心主路径保持简单；可靠交付依靠探索、澄清、验证与对账形成外部闭环。" page="10 / 40" tone="cyan" variant="full-diagram">
  <div class="delivery-loop">
    <div class="delivery-loop__track">
      <article class="discovery"><small>调查</small><h3>探索</h3><p>调查事实与约束</p></article><i />
      <article class="discovery"><small>决策</small><h3>澄清</h3><p>确认真正选择</p></article><i />
      <article class="core"><small>01 · 契约</small><h3>Spec</h3><p>意图、边界、证据</p></article><i />
      <article class="core"><small>02 · 设计</small><h3>Plan</h3><p>节点、依赖、质量门</p></article><i />
      <article class="core"><small>03 · 执行</small><h3>Implement</h3><p>改动与反馈循环</p></article><i />
      <article class="evidence"><small>证明</small><h3>验证</h3><p>独立判断是否满足</p></article>
    </div>
    <div v-click class="delivery-loop__return"><span>新事实 / 偏差</span><strong>对账</strong><p>修实现 · 修 Plan · 批准后更新 Spec</p><i>↺</i></div>
    <div v-click class="delivery-loop__takeaway">主路径保持简单，外部闭环负责让系统持续对齐真实世界。</div>
  </div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="violet" position="left" />
<SlideShell section="10 · SPEC" title="Spec 固定行为契约，不预设实现路径" subtitle="它回答行为、目标、边界与证据；具体实现方式留给 Plan。" page="11 / 40" tone="violet">
  <ComparePanel class="spec-definition-compare" left-title="不是：把输入包装成文档" right-title="是：团队共享的执行协议" balance="equal">
    <template #left>
      <p class="spec-boundary-thesis">内容看起来完整，却没有改变下一步如何判断与行动。</p>
      <div class="spec-boundary-list">
        <article><strong>重述材料</strong><p>复制 PRD 背景，但没有可判定的系统行为。</p></article>
        <article><strong>只写期待</strong><p>“更快、更稳定、体验更好”，却没有阈值。</p></article>
        <article><strong>预设方案</strong><p>把数据库、框架或接口选择提前写成需求。</p></article>
        <article><strong>堆积指令</strong><p>提示词只对一次对话有效，团队无法追踪。</p></article>
      </div>
      <small class="spec-boundary-note">也不是一次性预测所有细节。</small>
    </template>
    <template #right>
      <p class="spec-boundary-thesis">让人和 Agent 对目标、边界与完成证据使用同一套判断。</p>
      <div class="spec-boundary-list">
        <article><strong>共享事实</strong><p>目标、术语和业务规则有明确权威来源。</p></article>
        <article><strong>行为契约</strong><p>输入、输出、主路径与异常都可以被观察。</p></article>
        <article><strong>边界声明</strong><p>约束、非目标、负责人和风险保持显式。</p></article>
        <article><strong>验收依据</strong><p>每条要求都能对应独立、可重复的证据。</p></article>
      </div>
      <small class="spec-boundary-note">允许未知，但未知必须被明确标记。</small>
    </template>
  </ComparePanel>
  <div class="spec-contract-bar"><small>Spec 回答</small><div><strong>行为</strong><span>可观察结果</span></div><div><strong>目标</strong><span>价值与对象</span></div><div><strong>边界</strong><span>约束与非目标</span></div><div><strong>证据</strong><span>如何判定完成</span></div><i>实现方式 → Plan</i></div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="violet" position="right" intensity="strong" />
<SlideShell section="11 · SPEC 构成" title="可执行 Spec 的组成" subtitle="目标、行为、边界与验收必须同时清楚；非目标与异常路径和正向需求同等重要。" page="12 / 40" tone="violet" variant="full-diagram">
  <div class="spec-anatomy-scene">
    <DocumentAnatomy title="SPEC" :fields="['背景 / 问题','目标 / 非目标','用户 / 场景','业务规则','接口 / 数据契约','异常 / 边界','非功能约束','验收标准']" />
    <article class="spec-example">
      <small>贯穿示例 · 批量导入</small><h3>“支持批量导入”还不够</h3>
      <dl><dt>目标</dt><dd>运营人员一次导入客户名单</dd><dt>边界</dt><dd>每批最多 1,000 条，格式固定</dd><dt>失败</dt><dd>第 N 条失败时回滚整批</dd><dt>证据</dt><dd>返回 error_code 与 row_index；数据库无部分写入</dd></dl>
    </article>
  </div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="violet" position="top" />
<SlideShell section="12 · SPEC 质量" title="好 Spec 的六个质量维度" subtitle="质量不是“看起来很详细”，而是减少多种合理解释，并让变化可被追踪。" page="13 / 40" tone="violet" variant="full-diagram">
  <div class="quality-orbit">
    <article><small>01 · 术语</small><h3>明确</h3><p>关键术语是否只有一种合理解释？</p></article>
    <article><small>02 · 范围</small><h3>完整</h3><p>主路径、边界、异常与非目标是否齐全？</p></article>
    <article><small>03 · 规则</small><h3>一致</h3><p>规则、示例与验收之间是否相互冲突？</p></article>
    <article><small>04 · 证据</small><h3>可验证</h3><p>每条要求是否能对应可观察证据？</p></article>
    <article><small>05 · 链路</small><h3>可追踪</h3><p>Plan、实现和测试能否回到原始意图？</p></article>
    <article><small>06 · 变更</small><h3>可演进</h3><p>变更是否带着原因、影响与版本前进？</p></article>
  </div>
  <div v-click class="quality-centerline">100 页 ≠ 高质量　·　真正的质量是：更少的隐式选择，更清晰的验证路径。</div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="amber" position="corner" />
<SlideShell section="13 · SPEC 质量门" title="Spec 评审门：进入 Plan 前先消除歧义" subtitle="未消除的歧义会被 Agent 放大；能调查的事实让 Agent 查，真正的选择让人确认。" page="14 / 40" tone="amber" variant="full-diagram">
  <div class="spec-gate-layout">
    <div class="review-gates">
      <article><b>01</b><div><h3>歧义</h3><p>是否存在两种同样合理的解释？</p></div></article>
      <article><b>02</b><div><h3>边界</h3><p>非目标、异常和恢复路径是否明确？</p></div></article>
      <article><b>03</b><div><h3>证据</h3><p>完成后从哪里获得独立证据？</p></div></article>
      <article><b>04</b><div><h3>隐含决策</h3><p>哪些选择被悄悄藏进了措辞？</p></div></article>
      <article><b>05</b><div><h3>非目标</h3><p>本次明确不解决什么问题？</p></div></article>
    </div>
    <div>
      <CodeDiff :before="['支持批量导入', '失败时给出友好提示']" :after="['单批最多 1,000 条 CSV 记录', '第 N 条失败时回滚整批', '返回 error_code 与 row_index', '不包含 Excel 格式与断点续传']" />
      <div v-click class="spec-gate-result"><strong>可以进入 Plan</strong><span>事实已调查 · 选择已确认 · 证据可获得</span></div>
    </div>
  </div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="amber" position="left" />
<SlideShell section="14 · PLAN" title="Plan 把 Spec 转换成可验证的执行路径" subtitle="明确架构落点、任务边界、依赖、风险与验证，而不是按文件罗列待办。" page="15 / 40" tone="amber" variant="full-diagram">
  <div class="plan-transform">
    <section class="todo-list"><small>不是 Plan · 文件待办</small><ul><li>修改 API</li><li>更新页面</li><li>补充测试</li><li>处理异常</li><li>上线验证</li></ul></section>
    <div class="plan-transform__arrow">→</div>
    <section class="task-network"><small>执行设计 · 可追溯到 Spec</small><div class="task-network__nodes"><article><b>任务 01</b><h3>稳定数据契约</h3><p>输入：Spec 规则<br>输出：数据结构 + 测试</p></article><article><b>任务 02</b><h3>实现原子写入</h3><p>依赖：任务 01<br>证据：回滚测试</p></article><article><b>任务 03</b><h3>接入错误反馈</h3><p>依赖：错误契约<br>证据：E2E 行为</p></article><article><b>任务 04</b><h3>完成集成验收</h3><p>汇合：02 + 03<br>证据：验收结果</p></article></div><div class="task-network__gate"><span>依赖显式</span><span>完成 = 证据</span></div></section>
  </div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="amber" position="center" intensity="strong" />
<SlideShell section="15 · PLAN 质量" title="好 Plan = 任务节点 + 依赖关系 + 质量门" subtitle="小任务不是目的；降低耦合、暴露依赖、让失败可定位才是目的。" page="16 / 40" tone="amber" variant="full-diagram">
  <div class="node-edge-gate">
    <article class="node-edge-gate__input"><small>输入</small><strong>Spec 规则 + 既有契约</strong></article>
    <article class="task-node-large"><header><div><small class="deck-note">任务节点 · 02</small><h3>实现整批回滚</h3></div><StatusChip status="owner">后端</StatusChip></header><div class="task-node-large__fields"><div><small>目标</small><b>任何一条失败，不保留部分写入</b></div><div><small>文件范围</small><b>导入服务 + 仓储层</b></div><div><small>验证</small><b>npm test -- rollback</b></div><div><small>完成证据</small><b>失败 → 通过记录</b></div></div></article>
    <article class="node-edge-gate__output"><small>输出</small><strong>原子导入 + 测试证据</strong></article>
    <div v-click class="node-edge-gate__edge"><span /><QualityGate label="单元测试 + 集成测试 + 评审" state="passed" /><span /></div>
  </div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="amber" position="corner" intensity="strong" />
<SlideShell section="16 · GRAPH ENGINEERING" title="Graph Engineering：让复杂工作可并行、可恢复" subtitle="存在依赖、并行、汇合和失败恢复时，Plan 应被视为图，而不是线性清单。" page="17 / 40" tone="amber" variant="full-diagram">
  <div class="graph-stage"><DagGraph root="数据契约" :branches="['后端','前端','迁移','契约测试']" merge="集成" gate="验收" /></div>
  <div v-click class="graph-legend"><StatusChip status="gate">关键路径</StatusChip><StatusChip status="fact">并行分支</StatusChip><StatusChip status="decision">汇合点</StatusChip><StatusChip status="risk">失败 → 最近检查点</StatusChip><StatusChip status="evidence">验收质量门</StatusChip></div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="green" position="right" />
<SlideShell section="17 · 实现" title="可信交付必须同时包含改动与证据" subtitle="代码差异只有与测试、运行结果、评审和验收证据一起出现，才构成可接受交付。" page="18 / 40" tone="green" variant="full-diagram">
  <div class="evidence-chain">
    <article><small>01 · 任务</small><h3>任务节点</h3><p>目标、边界、依赖和完成定义</p></article>
    <article><small>02 · 改动</small><h3>代码差异</h3><p>最小、可审查、严格在范围内</p></article>
    <article><small>03 · 测试</small><h3>测试</h3><p>行为在正确层级被重复验证</p></article>
    <article><small>04 · 记录</small><h3>运行记录</h3><p>日志、命令和运行结果可观察</p></article>
    <article><small>05 · 评审</small><h3>独立评审</h3><p>实现与 Spec 被独立对照</p></article>
    <article><small>06 · 验收</small><h3>验收</h3><p>证据满足可判定的完成标准</p></article>
  </div>
  <div v-click class="evidence-formula">改动　+　证据　=　可信交付单元</div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="green" position="center" intensity="strong" />
<SlideShell section="18 · TDD" title="TDD：把验收条件变成快速反馈" subtitle="先看到正确失败，再写最小实现；TDD 固定的是可观察行为，不是覆盖率数字。" page="19 / 40" tone="green" variant="full-diagram">
  <div class="tdd-scene">
    <LoopDiagram :steps="['Red','Green','Refactor']" center="验收条件" tone="green" />
    <div class="tdd-steps">
      <article class="red"><b>RED</b><div><h3>写出正确失败</h3><p>测试因缺失目标行为而失败，而不是因环境或语法错误失败。</p></div></article>
      <article v-click class="green"><b>GREEN</b><div><h3>最小实现通过</h3><p>只做让当前行为成立的最小改动，保持范围可控。</p></div></article>
      <article v-click class="refactor"><b>REFACTOR</b><div><h3>保持绿灯改善设计</h3><p>移除重复、深化接口，随后进入下一条验收条件。</p></div></article>
    </div>
  </div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="green" position="top" />
<SlideShell section="19 · LOOP ENGINEERING" title="Loop Engineering：设计可控的执行循环" subtitle="Agent 的价值来自循环；可靠性来自观察、验证、预算、退出条件与人工升级。" page="20 / 40" tone="green" variant="full-diagram">
  <div class="loop-guardrail-scene">
    <LoopDiagram :steps="['行动','观察','验证','修复']" center="Agent 循环" tone="green" />
    <div class="guardrail-console">
      <article><small>行动</small><h3>范围 + 权限</h3><p>允许改什么、调用什么、影响谁。</p></article>
      <article><small>资源</small><h3>预算 + 重试</h3><p>限制时间、成本、步数与重试。</p></article>
      <article><small>观察</small><h3>证据 + 超时</h3><p>每轮必须产生新信号；无进展则退出。</p></article>
      <article><small>停止</small><h3>退出条件</h3><p>成功、失败和无法判断都必须可结束。</p></article>
      <article v-click><small>升级</small><h3>人工决策边界</h3><p>遇到不可推断的产品或架构选择时，停止扩张并交还决定。</p></article>
    </div>
  </div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="green" position="bottom" intensity="strong" />
<SlideShell section="20 · 验证与对账" title="验证与对账：做完不等于做对" subtitle="验证对照 Spec 判断是否满足；对账让新事实回到权威来源。" page="21 / 40" tone="green" variant="full-diagram">
  <div class="verify-reconcile">
    <section class="verify-matrix">
      <article><small>验证 01</small><h3>自动化测试</h3><p>行为和回归是否通过？</p></article>
      <article><small>验证 02</small><h3>静态检查</h3><p>类型、安全与工程标准是否满足？</p></article>
      <article><small>验证 03</small><h3>行为 / NFR</h3><p>验收场景与非功能约束是否成立？</p></article>
      <article><small>验证 04</small><h3>人工评审</h3><p>风险、范围和设计是否被独立判断？</p></article>
    </section>
    <section class="reconcile-tree"><small>对账 · 显式决策</small><h3>发现偏差后，修哪一层？</h3><div class="reconcile-branches"><article><b>01</b><div><strong>修实现</strong><small>Spec 与 Plan 正确，代码偏离</small></div></article><article><b>02</b><div><strong>修 Plan</strong><small>执行设计无法达成既定契约</small></div></article><article><b>03</b><div><strong>批准后修 Spec</strong><small>新事实改变了意图或边界；必须显式决策</small></div></article></div></section>
  </div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="magenta" position="right" />
<SlideShell section="21 · 从方法到机制" title="框架的作用：把方法变成可重复机制" subtitle="方法论提供判断，框架固化产物与流程，Harness 在任务现场运行和约束 Agent。" page="22 / 40" tone="magenta" variant="full-diagram">
  <div class="framework-layers">
    <article><div><small>第 01 层</small><h3>方法论</h3></div><p>定义什么是好的 Spec、Plan、实现与证据，以及何时需要人做决定。</p><strong>原则 · 判断</strong></article>
    <article v-click><div><small>第 02 层</small><h3>框架</h3></div><p>把方法固化成产物、命令、工作流、质量门与状态。</p><strong>可重复机制</strong></article>
    <article v-click><div><small>第 03 层</small><h3>Harness</h3></div><p>装配上下文、权限、工具和验证，并控制 Agent 的执行循环。</p><strong>运行时 · 控制</strong></article>
  </div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="violet" position="left" intensity="strong" />
<SlideShell section="22 · GRILL" title="Grill：先把当前决策前沿问清楚" subtitle="Matt Pocock 的 Grilling 用依赖化决策树澄清问题，只处理当前可回答的决策前沿。" page="23 / 40" tone="violet" variant="full-diagram">
  <div class="grill-scene">
    <div class="grill-tree-card"><DecisionTree root="模糊想法" :frontier="['范围？','风险？','成功标准？']" :locked="['数据模型','发布策略','责任归属']" /></div>
    <div class="grill-principles">
      <article><small>01 · 调查</small><h3>事实由 Agent 调查</h3><p>代码、配置、数据和文档能查到，就先给证据，不把事实问题推回用户。</p></article>
      <article><small>02 · 决策</small><h3>选择由人确认</h3><p>范围、风险、偏好和不可逆权衡进入当前决策前沿，并附带推荐答案。</p></article>
      <article v-click><small>03 · 推进</small><h3>回答后再暴露下一层</h3><p>当前决策前沿清空后仍需确认共同理解，然后才把已确认决策交给 Spec。</p></article>
    </div>
  </div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="violet" position="bottom" />
<SlideShell section="23 · GRILL 能力族" title="Grill 能力族：根据问题规模选择澄清方式" subtitle="从一次对话到组织知识沉淀，四个入口共享“先调查事实，再确认决策”的原则。" page="24 / 40" tone="violet" variant="full-diagram">
  <div class="grill-spectrum">
    <article style="--radius:0"><code>grill-me</code><h3>轻量对话</h3><p>不依赖仓库、不写文件，把松散想法澄清到可进入 Spec。</p><small>无状态 · 单次会话</small></article>
    <article style="--radius:1"><code>grill-with-docs</code><h3>仓库级沉淀</h3><p>同步统一语言到 CONTEXT.md，为重要且难回退的选择形成 ADR。</p><small>上下文 · ADR</small></article>
    <article style="--radius:2"><code>to-questionnaire</code><h3>专家异步回答</h3><p>当当前参与者不知道业务事实，把信息缺口交给真正的领域专家。</p><small>领域知识</small></article>
    <article style="--radius:3"><code>wayfinder</code><h3>大型问题图</h3><p>用问题图、决策票据与依赖前沿管理调研、原型和追问。</p><small>问题图 / 决策图</small></article>
  </div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="magenta" position="center" intensity="strong" />
<SlideShell section="24 · OPENSPEC" title="OpenSpec：围绕 Change 管理规格演进" subtitle="重点解决一次变更的规格如何创建、依赖、实现、同步并进入可追溯历史。" page="25 / 40" tone="magenta" variant="full-diagram">
  <div class="framework-brand"><img src="/assets/frameworks/openspec-dark.svg" alt="OpenSpec" /><p class="framework-brand__position">以变更为中心的产物系统 · 主规格 + 差量 + 归档</p></div>
  <div class="openspec-change">
    <article><small>探索 / 提案</small><h3>Change</h3></article><span>→</span>
    <article class="split"><div><small>产物</small><h3>规格</h3></div><div><small>产物</small><h3>设计</h3></div></article><span>→</span>
    <article><small>两者齐备</small><h3>Tasks → Apply</h3></article>
  </div>
  <div v-click class="openspec-tail"><StatusChip status="evidence">验证（Verify）</StatusChip><StatusChip status="decision">同步 Delta → 主 Spec</StatusChip><StatusChip status="fact">归档 Change</StatusChip></div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="magenta" position="top" />
<SlideShell section="25 · SPEC KIT" title="GitHub Spec Kit：标准化 SDD 产物链" subtitle="用 Constitution、阶段化产物和质量门，把需求与目标稳定转换成 Plan、任务与实现。" page="26 / 40" tone="magenta" variant="full-diagram">
  <div class="spec-kit-layout">
    <aside><img class="spec-kit" src="/assets/frameworks/spec-kit-logo.webp" alt="GitHub Spec Kit" /><small>项目主轴</small><strong>CONSTITUTION</strong><p>项目原则与治理约束贯穿所有阶段</p></aside>
    <div class="spec-kit-flow">
      <div class="spec-kit-stage"><small>01 · 意图</small><h3>Specify</h3><p>需求与目标</p><span>Clarify · 欠定义区域</span></div>
      <div class="spec-kit-gate"><b>质量门</b><strong>Checklist</strong><small>需求文本质量</small></div>
      <div class="spec-kit-stage"><small>02 · 设计</small><h3>Plan</h3><p>技术设计</p></div>
      <div class="spec-kit-stage"><small>03 · 任务图</small><h3>Tasks</h3><p>依赖有序</p></div>
      <div class="spec-kit-gate"><b>质量门</b><strong>Analyze</strong><small>跨产物一致性</small></div>
      <div class="spec-kit-stage"><small>04 · 交付</small><h3>Implement</h3><p>执行任务</p></div>
      <div class="spec-kit-gate"><b>质量门</b><strong>Converge</strong><small>规格与代码对账</small></div>
      <div class="spec-kit-stage done"><small>完成</small><h3>证据</h3><p>可追踪交付</p></div>
    </div>
  </div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="magenta" position="right" intensity="strong" />
<SlideShell section="26 · SUPERPOWERS" title="Superpowers：把执行纪律装进 Agent" subtitle="可组合 Skill 与强制触发规则，让 Agent 不跳过澄清、批准、计划、TDD、评审和收尾。" page="27 / 40" tone="magenta" variant="full-diagram">
  <div class="powers-system">
    <div class="powers-brand"><img class="superpowers" src="/assets/frameworks/superpowers.svg" alt="Superpowers" /><small>可组合 Skill</small><strong>执行纪律不是提醒，而是强制触发的路径。</strong></div>
    <div class="powers-mainline"><article><small>01</small><h3>Brainstorm</h3><p>澄清目标与方案</p></article><div class="human-gate"><b>人工</b><strong>批准</strong></div><article><small>02</small><h3>Write Plan</h3><p>精确到文件与验证</p></article><article class="execute"><small>03</small><h3>Execute</h3><p>Plan / 子 Agent 驱动</p></article><div class="human-gate"><b>人工</b><strong>收尾</strong></div></div>
    <div class="powers-guardrail"><span>隔离</span><article><h3>Worktree</h3><p>隔离环境与变更范围</p></article><span>证明</span><article><h3>TDD</h3><p>Red → Green → Refactor</p></article><span>检查</span><article><h3>评审</h3><p>Spec 合规与代码质量</p></article></div>
  </div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="magenta" position="corner" />
<SlideShell section="27 · 框架选择" title="框架选择与组合：按缺口选，不按热度选" subtitle="三者解决的主问题不同；组合时必须保持唯一 Spec、唯一任务状态和唯一完成标准。" page="28 / 40" tone="magenta" variant="full-diagram">
  <div class="framework-choice">
    <div class="framework-matrix">
      <div class="head">主要缺口</div><div class="head">OpenSpec</div><div class="head">Spec Kit</div><div class="head">Superpowers</div>
      <div>规格演进</div><div class="strong">Change / Delta / Archive</div><div>功能产物链</div><div>设计规格</div>
      <div>标准产物</div><div>可定制产物图</div><div class="strong">Constitution / Spec / Plan / Tasks</div><div>设计 + Plan</div>
      <div>执行纪律</div><div>Apply / Verify</div><div>Implement / Converge</div><div class="strong">Skill / TDD / 评审 / 收尾</div>
      <div>主要形态</div><div>Change 系统</div><div>阶段化 Harness</div><div>Agent 方法论</div>
    </div>
    <div class="selection-paths"><article><small>适用 · 变更历史</small><strong>规格随变更持续演进</strong><p>优先看 OpenSpec</p></article><article><small>适用 · 团队标准</small><strong>统一团队产物和质量门</strong><p>优先看 Spec Kit</p></article><article><small>适用 · 执行漂移</small><strong>Agent 经常跳过计划或验证</strong><p>用 Superpowers 补强执行层</p></article></div>
  </div>
  <div v-click class="framework-redline">组合红线 · 唯一权威 Spec · 唯一任务状态 · 唯一完成标准</div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="teal" position="right" intensity="strong" />
<SlideShell section="28 · 可复用能力" title="从项目资产到组织能力系统" subtitle="可复用能力不是提示词文件夹，而是知识、封装、分发、运行和评估组成的系统。" page="29 / 40" tone="teal" variant="full-diagram">
  <div class="capability-system">
    <article><b>01</b><h3>分级知识库</h3><p>按稳定性、权威性和作用域组织团队知道什么。</p><small>上下文 · 规则 · ADR</small></article>
    <article><b>02</b><h3>Plugin</h3><p>把知识与行动机制封装成可版本化、可测试的发布单元。</p><small>发布包 · 负责人 · 版本</small></article>
    <article><b>03</b><h3>Marketplace</h3><p>提供发现、信任、权限和生命周期治理。</p><small>发现 · 信任 · 治理</small></article>
    <article><b>04</b><h3>Harness</h3><p>在任务现场动态装配正确能力，并限制运行边界。</p><small>组装 · 运行 · 控制</small></article>
    <article><b>05</b><h3>评估 / 遥测</h3><p>用采用、成功、失败与成本信号持续评价真实价值。</p><small>证据 · 反馈</small></article>
  </div>
  <div v-click class="capability-feedback"><span>项目证据与失败模式回流</span><strong>观察 → 改进 → 晋升 / 废弃 ↺</strong><span>下一次可被可靠调用</span></div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="blue" position="left" />
<SlideShell section="29 · 分级知识库" title="分级知识库：按稳定性和作用域组织上下文" subtitle="运行时向下组装，复盘时向上晋升；越稳定的知识越精炼，越具体的证据越易过期。" page="30 / 40" tone="teal" variant="full-diagram">
  <div class="knowledge-scene">
    <KnowledgePyramid :levels="['L0 · 通用原则','L1 · 组织治理 / 工程标准','L2 · 领域 / 平台 / 代码库 / ADR','L3 · 功能 Spec / Plan / 运行手册','L4 · 会话 / 日志 / 临时证据']" />
    <div class="knowledge-directions"><article class="assembly"><small>↓ 上下文组装</small><h3>按任务向下组装</h3><p>从稳定原则到当前任务证据，只加载本次真正需要且有权限使用的上下文。</p></article><article class="promotion"><small>↑ 知识晋升</small><h3>经验证后向上晋升</h3><p>重复出现、被证据支持、通过负责人评审的模式，才从 L4 上升。</p></article><div class="rule">不要把所有文档无差别塞进向量库；作用域与新鲜度同样是知识质量。</div></div>
  </div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="teal" position="center" intensity="strong" />
<SlideShell section="30 · PLUGIN" title="Plugin：可版本化、可测试的能力发布单元" subtitle="Skill 是 Plugin 内的一种能力；完整 Plugin 还要携带知识、规则、工具、流程、评估与治理元数据。" page="31 / 40" tone="teal" variant="full-diagram">
  <div class="plugin-package">
    <article><small>基础</small><h3>Manifest 清单</h3><p>名称、版本、负责人、依赖与兼容性。</p></article><article><small>上下文</small><h3>知识 + 规则</h3><p>稳定事实、边界与工程标准。</p></article><article><small>行动</small><h3>Skill</h3><p>可复用判断与执行步骤。</p></article><article><small>集成</small><h3>工具 / MCP</h3><p>外部动作、数据和权限范围。</p></article>
    <article><small>交付</small><h3>模板</h3><p>产物骨架与示例。</p></article><article><small>编排</small><h3>工作流</h3><p>阶段、质量门与状态转换。</p></article><article><small>质量</small><h3>评估</h3><p>成功标准与回归证据。</p></article><article><small>采用</small><h3>示例</h3><p>适用场景与反例。</p></article>
    <div class="plugin-package__core"><div><strong>Plugin</strong><span>可安装<br>可升级<br>可回滚</span></div></div>
  </div>
  <div class="plugin-trust"><StatusChip status="owner">负责人</StatusChip><StatusChip status="gate">权限</StatusChip><StatusChip status="fact">依赖</StatusChip><StatusChip status="evidence">版本化评估</StatusChip></div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="magenta" position="right" intensity="strong" />
<SlideShell section="31 · MARKETPLACE" title="Plugin Marketplace：让能力可发现、可治理" subtitle="Marketplace 不只是列表页；它同时回答能不能找到、敢不敢安装、由谁长期维护。" page="32 / 40" tone="magenta" variant="full-diagram">
  <MarketplaceMock selected="SDD 交付套件" />
  <div v-click class="market-lifecycle"><div>草稿 · 内部开发</div><div>试点 · 小范围验证</div><div class="active">稳定 · 可组织复用</div><div>弃用 · 迁移与回收</div></div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="teal" position="top" />
<SlideShell section="32 · 运行时装配" title="Harness：在任务现场组装正确能力" subtitle="Marketplace 负责“有什么”；Harness 负责“这次加载什么、允许做什么、怎样留下证据”。" page="33 / 40" tone="teal" variant="full-diagram">
  <div class="assembly-funnel">
    <section class="assembly-input"><small>任务信号</small><h3>任务 / 代码库</h3><p>目标 · 代码库 · 风险 · 当前阶段</p></section>
    <section class="assembly-candidates"><small>能力池</small><div><span>知识</span><span>规则</span><span>Plugin A</span><span>Plugin B</span><span>工具</span><span class="unused">未使用</span></div></section>
    <div class="assembly-filter"><article><small>解析</small><h3>上下文</h3><p>作用域 · 新鲜度</p></article><article><small>控制</small><h3>策略</h3><p>权限 · 兼容性</p></article><article><small>选择</small><h3>Plugin</h3><p>质量 · 任务适配</p></article></div>
    <section class="assembly-runtime"><small>已组装运行时</small><h3>Agent 循环</h3><p>只加载这次需要的能力</p><span>预算 · 重试 · 停止</span></section>
    <section class="assembly-output"><QualityGate label="证据" state="passed" /><p>测试 · 评审 · 验收</p></section>
    <div v-click class="assembly-trace">运行记录 / 反馈 → 评估 / 遥测 → 知识与 Plugin 改进 ↺</div>
  </div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="teal" position="bottom" />
<SlideShell section="33 · 能力生命周期" title="能力晋升与迭代：从一次经验到稳定产品" subtitle="沉淀的目标不是保存，而是下一次能被可靠调用；晋升必须经过重复验证、负责人和版本治理。" page="34 / 40" tone="teal" variant="full-diagram">
  <div class="promotion-lifecycle">
    <article><small>01</small><h3>观察</h3><p>发现重复问题</p></article><article><small>02</small><h3>记录</h3><p>保留证据</p></article><article class="active"><small>03</small><h3>抽象</h3><p>移除项目偶然性</p></article><article class="active"><small>04</small><h3>评估</h3><p>证明模式有效</p></article><article class="active"><small>05</small><h3>封装</h3><p>负责人 + 版本</p></article><article><small>06</small><h3>试点</h3><p>小范围验证</p></article><article><small>07</small><h3>发布</h3><p>进入市场</p></article><article><small>08</small><h3>监控</h3><p>观察采用与失败</p></article><article><small>09</small><h3>改进 / 废弃</h3><p>演进或退出</p></article>
  </div>
  <div class="promotion-tracks"><article><small>经验轨道</small><div /><strong>笔记 → 知识</strong></article><article><small>做法轨道</small><div /><strong>做法 → Skill</strong></article><article><small>能力轨道</small><div /><strong>能力包 → Plugin</strong></article></div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="red" position="right" intensity="strong" />
<SlideShell section="34 · 风险" title="SDD 的风险：Spec 也会制造确定性幻觉" subtitle="SDD 不能消除不确定性；它只能让假设、边界与证据更可见、更容易被纠正。" page="35 / 40" tone="amber" variant="full-diagram">
  <div class="risk-scene">
    <RiskIceberg visible="看似完整的 Spec" :risks="['过早冻结','假精确','Spec 漂移','上下文污染','验证不足','循环失控','工具锁定','责任稀释']" />
    <div class="risk-signals"><article><small>信号</small><h3>过早冻结</h3><p>大量“待定”被默认值吞掉。</p></article><article><small>信号</small><h3>假精确</h3><p>数字很具体，却没有来源或证据。</p></article><article><small>信号</small><h3>Spec 漂移</h3><p>代码行为与规格长期不一致。</p></article><article><small>信号</small><h3>上下文污染</h3><p>旧规则、无关知识影响当前判断。</p></article><article><small>信号</small><h3>验证不足</h3><p>只有测试绿灯，没有验收与 NFR。</p></article><article><small>信号</small><h3>循环失控</h3><p>反复修改却没有新证据或退出条件。</p></article><article><small>信号</small><h3>工具锁定</h3><p>产物只在单一框架内可理解。</p></article><article><small>信号</small><h3>责任稀释</h3><p>关键选择找不到明确负责人。</p></article></div>
  </div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="red" position="left" />
<SlideShell section="35 · 反例" title="SDD 反例：看起来规范，实际不可执行" subtitle="最危险的失败不是没有文档，而是文档存在，却不能约束实现和验收。" page="36 / 40" tone="amber" variant="full-diagram">
  <div class="anti-pattern-table">
    <div class="bad"><small>反例 01</small>愿望式 Spec：更快、更稳定、体验更好</div><div class="arrow">→</div><div class="better"><small>改进</small>行为、边界、阈值和证据可独立判断</div>
    <div class="bad"><small>反例 02</small>伪技术细节：提前猜定实现而没有决策依据</div><div class="arrow">→</div><div class="better"><small>改进</small>Spec 固定目标与行为；Plan 承担实现方式</div>
    <div class="bad"><small>反例 03</small>线性大 Plan：所有任务相互依赖、无法定位失败</div><div class="arrow">→</div><div class="better"><small>改进</small>任务节点 + 依赖 + 质量门，显式并行与汇合</div>
    <div class="bad"><small>反例 04</small>实现先行，最后补 Spec</div><div class="arrow">→</div><div class="better"><small>改进</small>先固定关键契约，再通过对账处理新事实</div>
    <div class="bad"><small>反例 05</small>测试通过替代验收完成</div><div class="arrow">→</div><div class="better"><small>改进</small>测试、行为、NFR、评审与验收矩阵</div>
    <div class="bad"><small>反例 06</small>多套框架维护多份权威 Spec / Plan / 任务</div><div class="arrow">→</div><div class="better"><small>改进</small>唯一事实源、唯一任务状态、唯一完成标准</div>
  </div>
  <div v-click class="anti-root-cause">共同根因：没有可执行质量门，文档无法改变下一步行为。</div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="teal" position="top" />
<SlideShell section="36 · 团队协作" title="团队协作：围绕产物与质量门，而不是聊天记录" subtitle="协作的最小单元，是有负责人、有状态、有批准权和验收证据的产物。" page="37 / 40" tone="teal" variant="full-diagram">
  <div class="artifact-chain"><article><small>负责人 · 产品</small><h3>Spec</h3><p>意图、规则、范围</p></article><article><small>负责人 · 技术</small><h3>Plan</h3><p>架构、依赖、风险</p></article><article><small>负责人 · 团队</small><h3>任务</h3><p>边界、状态、质量门</p></article><article><small>负责人 · 开发 / Agent</small><h3>改动 + 证据</h3><p>改动、测试、运行记录</p></article><article><small>负责人 · 发布</small><h3>发布</h3><p>批准、发布、观察</p></article></div>
  <div class="role-map"><article><b>产品 / 领域</b><p>拥有业务意图与规则，确认真正选择。</p></article><article><b>技术负责人</b><p>拥有架构落点、Plan 与关键风险。</p></article><article><b>开发 / Agent</b><p>实现任务并生成可审查证据。</p></article><article><b>测试 / 评审</b><p>独立验证行为、质量与范围。</p></article><article><b>平台 / 赋能</b><p>提供 Harness、Plugin、知识与度量。</p></article></div>
  <div v-click class="platform-foundation">平台基础 · 知识 · Plugin · Harness · 评估 / 遥测</div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="teal" position="right" intensity="strong" />
<SlideShell section="37 · 落地" title="渐进式落地路线：先闭环，再规模化" subtitle="从一个高价值场景建立最小闭环，不要先建设完整平台；每阶段都用成功信号决定下一步。" page="38 / 40" tone="teal" variant="full-diagram">
  <div class="adoption-scene">
    <MaturityRoadmap :stages="['单功能模板','评审质量门 + TDD','代码库 Harness','Plugin / 知识','Marketplace / 评估 / 治理']" :active="4" />
    <div class="adoption-detail"><article><small>阶段 01 · 闭合一个循环</small><h3>Spec → Plan → Implement → 验证</h3><p>暂不建设：组织平台</p></article><article><small>阶段 02 · 质量门</small><h3>评审质量门 + TDD</h3><p>成功信号：返工更早暴露</p></article><article><small>阶段 03 · 代码库控制</small><h3>规则与验证进入 Harness</h3><p>成功信号：Agent 行为更稳定</p></article><article><small>阶段 04 · 已验证复用</small><h3>知识与 Plugin 复用</h3><p>成功信号：第二个团队也能成功调用</p></article><article><small>阶段 05 · 规模化治理</small><h3>Marketplace + 评估 + 治理</h3><p>进入条件：已有真实供给、采用与维护责任</p></article></div>
  </div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="teal" position="bottom" />
<SlideShell section="38 · 度量" title="度量：观察可靠交付，不追逐生成量" subtitle="指标要有基线和趋势；成功是更短的可靠交付周期、更少返工和更高复用。" page="39 / 40" tone="teal" variant="full-diagram">
  <div class="metrics-dashboard"><MetricCard label="交付流" value="周期 ↓" detail="澄清 → 验收" tone="blue" /><MetricCard label="质量" value="通过率 ↑" detail="验收 / 逃逸缺陷" tone="green" /><MetricCard label="对齐" value="返工 ↓" detail="Spec 变更 / 后期反转" tone="violet" /><MetricCard label="AGENT 可靠性" value="人工修复 ↓" detail="人工修复 / 越界受阻" tone="amber" /><MetricCard label="复用" value="采用率 ↑" detail="Plugin 使用 / 成功复用" tone="green" /></div>
  <div v-click class="vanity-metrics">生成代码行数　·　提示词数量　·　消耗 Token　≠　可靠交付</div>
</SlideShell>

---
class: sdd-deck
---

<GlobalGlow tone="cyan" position="center" intensity="strong" />
<SlideShell section="39 · 完整系统" title="完整系统图：从一次需求到可复用能力" subtitle="可靠 AI 开发来自意图协议、执行图、反馈循环、运行控制与组织复用共同工作。" page="40 / 40" tone="cyan" variant="full-diagram">
  <div class="closing-system">
    <SystemMap />
    <div class="closing-statement"><div><small>系统，而不只是模型</small><h2>不要只让 Agent 写得更快</h2><p>让系统可靠地知道该写什么、如何证明，以及如何把经验留下来。</p></div><div class="closing-brand"><BrandLockup compact /><img class="qr" src="/assets/brand/inspire-group-home-qr.svg" alt="Inspire Group 官网二维码" /></div></div>
  </div>
</SlideShell>
