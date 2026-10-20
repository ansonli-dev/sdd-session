<script setup>
defineProps({ selected: { type: String, default: 'SDD 交付套件' } })
</script>

<template>
  <div class="marketplace-mock">
    <aside><b>能力市场</b><span class="marketplace-mock__search">⌕ 搜索能力</span><small>全部</small><a class="active">工程</a><a>领域</a><a>治理</a><a>已弃用</a></aside>
    <main>
      <header><div><small>工程 / 交付</small><h3>{{ selected }}</h3></div><StatusChip status="evidence">稳定</StatusChip></header>
      <div class="marketplace-mock__cards">
        <GlassCard title="Spec 评审" icon="i-carbon-document"><p>澄清意图并执行质量门检查。</p><template #footer><small>负责人 · 工程赋能</small></template></GlassCard>
        <GlassCard title="任务图规划" icon="i-carbon-flow"><p>构建显式管理依赖的交付计划。</p><template #footer><small>权限 · 读取代码库</small></template></GlassCard>
      </div>
    </main>
    <section><small>安装</small><h4>信任档案</h4><p>版本 <b>2.4.1</b></p><p>兼容性 <b>12 个 Agent</b></p><p>评估 <b>94%</b></p><button>安装能力</button></section>
  </div>
</template>
