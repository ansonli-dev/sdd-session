<template>
  <div class="system-map">
    <div class="system-map__lane intent"><small>意图</small><FlowNode label="人的意图" kind="human" state="complete" /><FlowEdge /><FlowNode label="探索 / Grill" kind="artifact" state="complete" /><FlowEdge /><FlowNode label="Spec" kind="artifact" state="current" /></div>
    <div class="system-map__lane execution"><small>执行</small><FlowNode label="Plan / 任务图" kind="primary" state="complete" /><FlowEdge variant="critical" /><FlowNode label="Implement / TDD" kind="primary" state="current" /><FlowEdge /><QualityGate label="验证" state="passed" /></div>
    <div class="system-map__lane capability"><small>能力</small><StatusChip status="fact">知识</StatusChip><StatusChip status="decision">Plugin</StatusChip><StatusChip status="evidence">Marketplace</StatusChip><StatusChip status="gate">Harness</StatusChip></div>
    <div class="system-map__feedback">证据与度量 ↺</div>
  </div>
</template>
