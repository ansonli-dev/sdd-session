---
theme: default
title: SDD Visual Component Catalog
aspectRatio: 16/9
canvasWidth: 1600
transition: fade-out
mdc: true
class: visual-catalog
---

<GlobalGlow tone="blue" position="right" intensity="strong" />
<SlideShell section="Visual System · 01" title="品牌、框架与二维码" subtitle="所有外部视觉素材均已本地化并记录来源" page="01 / 12" tone="blue">
  <div class="catalog-grid-2">
    <GlassCard title="Brand lockup" variant="accent" state="active">
      <BrandLockup />
      <template #footer>Inspire Group · 分享方　/　DJI · 合作方</template>
    </GlassCard>
    <GlassCard title="Inspire Group 官网" icon="i-carbon-qr-code">
      <div class="catalog-qr">
        <img src="/assets/brand/inspire-group-home-qr.svg" alt="Inspire Group 官网二维码" />
        <div><b>可离线展示</b><span>二维码固定指向 inspiregroup.com/zh</span></div>
      </div>
    </GlassCard>
  </div>
  <div class="catalog-grid-3" style="margin-top: 22px">
    <div class="catalog-logo-card"><img src="/assets/frameworks/openspec-dark.svg" alt="OpenSpec" /><small>OFFICIAL · OPENSPEC</small></div>
    <div class="catalog-logo-card"><img src="/assets/frameworks/spec-kit-logo.webp" alt="GitHub Spec Kit" /><small>OFFICIAL · SPEC KIT</small></div>
    <div class="catalog-logo-card"><img class="invert" src="/assets/frameworks/superpowers.svg" alt="Superpowers" /><small>OFFICIAL · SUPERPOWERS</small></div>
  </div>
</SlideShell>

---
class: visual-catalog
---

<GlobalGlow tone="cyan" position="top" />
<SlideShell section="Foundation · 02" title="色板、字体与 Glow" subtitle="章节色表达语义，Glow 只负责空间层次" page="02 / 12" tone="cyan">
  <div class="token-grid">
    <div class="token-swatch" style="--token:#4f8cff"><span>AI · BLUE</span></div>
    <div class="token-swatch" style="--token:#35d5f3"><span>SDD · CYAN</span></div>
    <div class="token-swatch" style="--token:#a78bfa"><span>SPEC · VIOLET</span></div>
    <div class="token-swatch" style="--token:#f5b942"><span>PLAN · AMBER</span></div>
    <div class="token-swatch" style="--token:#45d483"><span>IMPLEMENT · GREEN</span></div>
    <div class="token-swatch" style="--token:#d66bff"><span>TOOLS · MAGENTA</span></div>
    <div class="token-swatch" style="--token:#37c6b0"><span>TEAM · TEAL</span></div>
    <div class="token-swatch" style="--token:#ff6673"><span>RISK · RED</span></div>
  </div>
  <div class="type-samples">
    <article><small class="catalog-note">DISPLAY / PINGFANG SC</small><h2>从意图到可靠交付</h2><p>正文保持 22–28 px，标题负责讲述结论。</p></article>
    <article><small class="catalog-note">MONO / ARTIFACT</small><code>SPEC → PLAN → IMPLEMENT<br/>VERIFY ↺ RECONCILE</code></article>
  </div>
</SlideShell>

---
class: visual-catalog
---

<GlobalGlow tone="violet" position="left" />
<SlideShell section="Foundation · 03" title="标题体系与 SlideShell" subtitle="标题句法与页面结构共同制造节奏" page="03 / 12" tone="violet">
  <div class="catalog-grid-2">
    <div class="title-samples">
      <div class="title-sample" style="--tone:#4f8cff"><small>STATEMENT</small><h2>AI 改变了瓶颈</h2></div>
      <div class="title-sample" style="--tone:#35d5f3"><small>CONCEPT</small><h2>Spec｜共享执行协议</h2></div>
    </div>
    <div class="title-samples">
      <div class="title-sample" style="--tone:#f5b942"><small>QUESTION</small><h2>做完，等于做对了吗？</h2></div>
      <div class="title-sample" style="--tone:#45d483"><small>CONTRAST</small><h2>代码更快，角色没变</h2></div>
    </div>
  </div>
  <StatementBlock variant="quote" label="SHELL VARIANTS" style="margin-top: 40px">standard · statement · full-diagram · cover · closing</StatementBlock>
</SlideShell>

---
class: visual-catalog
---

<GlobalGlow tone="blue" position="bottom" />
<SlideShell section="Content · 04" title="GlassCard、StatusChip 与 IconLabel" subtitle="容器、状态和图标共享同一套语义" page="04 / 12" tone="blue">
  <div class="catalog-grid-4">
    <GlassCard title="Neutral" icon="i-carbon-document"><p>低对比容器承载普通信息。</p></GlassCard>
    <GlassCard title="Current" icon="i-carbon-play" variant="accent" state="active"><p>当前阶段使用章节色聚焦。</p></GlassCard>
    <GlassCard title="Passed" icon="i-carbon-checkmark" variant="success" state="passed"><p>通过状态只使用语义绿色。</p></GlassCard>
    <GlassCard title="Blocked" icon="i-carbon-warning" variant="danger" state="blocked"><p>风险和越界使用语义红色。</p></GlassCard>
  </div>
  <div class="catalog-grid-2" style="margin-top: 30px">
    <div class="component-states"><StatusChip status="fact" icon="i-carbon-search">Fact</StatusChip><StatusChip status="decision" icon="i-carbon-user-avatar">Decision</StatusChip><StatusChip status="risk" icon="i-carbon-warning-alt">Risk</StatusChip><StatusChip status="gate" icon="i-carbon-locked">Gate</StatusChip><StatusChip status="evidence" icon="i-carbon-checkmark-outline">Evidence</StatusChip><StatusChip status="owner" icon="i-carbon-user-role">Owner</StatusChip></div>
    <div class="catalog-grid-2"><IconLabel icon="i-carbon-skill-level" title="Skill" detail="可复用做法" /><IconLabel icon="i-carbon-plug" title="MCP / Tool" detail="可调用能力" /><IconLabel icon="i-carbon-data-base" title="Knowledge" detail="持续上下文" /><IconLabel icon="i-carbon-ai-status" title="Agent" detail="循环执行者" /></div>
  </div>
</SlideShell>

---
class: visual-catalog
---

<GlobalGlow tone="green" position="right" />
<SlideShell section="Content · 05" title="ComparePanel 与 CodeDiff" subtitle="问题与方案不是两张卡，而是一条转换关系" page="05 / 12" tone="green">
  <div class="catalog-grid-2">
    <ComparePanel left-title="愿望式 Spec" right-title="可执行契约" balance="problem-heavy">
      <template #left><p>“系统应该更快、更稳定，并提供良好体验。”</p></template>
      <template #right><p>行为、边界、阈值和验收证据都可以被独立验证。</p></template>
    </ComparePanel>
    <CodeDiff :before="['支持批量导入', '异常时友好提示']" :after="['单次最多 1,000 条', '第 N 条失败时回滚整批', '返回 error_code 与 row_index']" />
  </div>
</SlideShell>

---
class: visual-catalog
---

<GlobalGlow tone="amber" position="corner" />
<SlideShell section="Diagram · 06" title="FlowNode、FlowEdge 与 QualityGate" subtitle="所有流程图共享节点、连接和质量门三种原语" page="06 / 12" tone="amber" variant="full-diagram">
  <div class="catalog-row" style="justify-content:center; margin-top: 80px">
    <FlowNode label="Human intent" detail="choice" kind="human" state="complete" icon="i-carbon-user" />
    <FlowEdge label="clarify" />
    <FlowNode label="Spec" detail="artifact" kind="artifact" state="complete" icon="i-carbon-document" />
    <FlowEdge label="derive" variant="critical" />
    <FlowNode label="Plan" detail="graph" kind="primary" state="current" icon="i-carbon-flow" />
    <FlowEdge label="execute" />
    <FlowNode label="Evidence" detail="observable" kind="evidence" state="current" icon="i-carbon-test-tool" />
    <FlowEdge />
    <QualityGate label="Accepted" state="passed" />
  </div>
  <div class="catalog-row" style="justify-content:center; margin-top: 80px"><QualityGate label="Pending" /><QualityGate label="Human review" state="human-review" /><QualityGate label="Failed" state="failed" /><FlowEdge variant="dashed" label="optional" /><FlowEdge variant="feedback" label="reconcile" /><FlowEdge variant="blocked" label="blocked" /></div>
</SlideShell>

---
class: visual-catalog
---

<GlobalGlow tone="green" position="center" />
<SlideShell section="Diagram · 07" title="ProcessRail 与 LoopDiagram" subtitle="线性阶段负责推进，循环结构负责反馈与收敛" page="07 / 12" tone="green" variant="full-diagram">
  <ProcessRail :steps="['Explore','Specify','Plan','Implement','Verify','Reconcile']" :active="3" tone="green" style="margin-top: 28px" />
  <div class="catalog-grid-2" style="margin-top: 22px; align-items:center">
    <LoopDiagram :steps="['Act','Observe','Verify','Repair']" center="Agent loop" tone="green" />
    <GlassCard title="Guardrails" icon="i-carbon-security" variant="accent"><div class="component-states"><StatusChip status="gate">Scope</StatusChip><StatusChip status="gate">Permission</StatusChip><StatusChip status="gate">Budget</StatusChip><StatusChip status="risk">Timeout</StatusChip><StatusChip status="owner">Escalation</StatusChip><StatusChip status="evidence">Stop condition</StatusChip></div></GlassCard>
  </div>
</SlideShell>

---
class: visual-catalog
---

<GlobalGlow tone="amber" position="left" />
<SlideShell section="Diagram · 08" title="DagGraph 与 DecisionTree" subtitle="任务依赖和决策依赖使用不同节点语义" page="08 / 12" tone="amber" variant="full-diagram">
  <div class="catalog-grid-2" style="align-items:center">
    <GlassCard title="Execution graph" icon="i-carbon-tree-view" variant="accent"><DagGraph root="Contract" :branches="['API','UI','Migration']" merge="Integration" gate="Acceptance" /></GlassCard>
    <GlassCard title="Decision frontier" icon="i-carbon-decision-tree"><DecisionTree root="Loose idea" :frontier="['Scope?','Risk?']" :locked="['Data model','Rollout']" /></GlassCard>
  </div>
</SlideShell>

---
class: visual-catalog
---

<GlobalGlow tone="violet" position="bottom" />
<SlideShell section="Structure · 09" title="CapabilityStack、DocumentAnatomy 与 KnowledgePyramid" subtitle="层级、结构和作用域使用不同空间隐喻" page="09 / 12" tone="violet" variant="full-diagram">
  <div class="catalog-structure-grid">
    <CapabilityStack :layers="['Model','Context','Rules','Skills','Tools / MCP']" />
    <DocumentAnatomy title="SPEC" :fields="['Goal','Non-goal','Rules','Edges','NFR','Acceptance']" />
    <KnowledgePyramid :levels="['Principles','Organization','Domain / Repo','Feature','Task evidence']" />
  </div>
</SlideShell>

---
class: visual-catalog
---

<GlobalGlow tone="magenta" position="right" intensity="strong" />
<SlideShell section="Product UI · 10" title="MarketplaceMock" subtitle="目录、信任和生命周期组成能力市场，而不只是卡片列表" page="10 / 12" tone="magenta" variant="full-diagram">
  <MarketplaceMock selected="SDD Delivery Kit" />
</SlideShell>

---
class: visual-catalog
---

<GlobalGlow tone="teal" position="top" />
<SlideShell section="Data · 11" title="MetricCard、RiskIceberg 与 MaturityRoadmap" subtitle="数字、风险与组织演进分别使用对应的信息结构" page="11 / 12" tone="teal" variant="full-diagram">
  <div class="catalog-grid-3">
    <div class="catalog-column"><MetricCard label="FLOW" value="Lead time ↓" detail="Clarify → Accepted" tone="blue" /><MetricCard label="REUSE" value="Adoption ↑" detail="Reusable capability success" tone="green" /></div>
    <RiskIceberg visible="Complete-looking Spec" :risks="['False precision','Spec drift','Weak evidence','Loop runaway','Context pollution']" />
    <MaturityRoadmap :stages="['Feature','Gate + TDD','Repo Harness','Plugin reuse','Marketplace']" :active="4" />
  </div>
</SlideShell>

---
class: visual-catalog
---

<GlobalGlow tone="cyan" position="center" intensity="strong" />
<SlideShell section="Motion · 12" title="ClickStage" subtitle="一次 click 增加一个完整语义块，最终态可独立导出" page="12 / 12" tone="cyan">
  <div class="catalog-grid-4" style="margin-top: 56px">
    <ClickStage state="active"><GlassCard title="Initial" state="active"><p>当前问题在初始态已经可理解。</p></GlassCard></ClickStage>
    <ClickStage v-click state="active"><GlassCard title="Reveal 01" variant="accent"><p>第一条完整因果关系出现。</p></GlassCard></ClickStage>
    <ClickStage v-click state="active"><GlassCard title="Reveal 02" variant="success"><p>验证证据与结论闭合。</p></GlassCard></ClickStage>
    <ClickStage v-click state="passed"><GlassCard title="Final state" state="passed"><p>最终态适合静态 PDF 导出。</p></GlassCard></ClickStage>
  </div>
  <StatementBlock v-click variant="answer" label="MOTION RULE" style="margin-top: 58px">opacity + translate + blur · 350–500 ms · max 5 clicks</StatementBlock>
</SlideShell>
