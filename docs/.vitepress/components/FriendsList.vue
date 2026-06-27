<template>
  <div class="friends-list">
    <div v-if="friends && friends.length" class="grid">
      <a
        v-for="f in friends"
        :key="(f.url || f.name) + (f.name || '')"
        :href="f.url || f.link || '#'
        "
        class="card"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img v-if="f.logo" :src="f.logo" alt="" class="avatar" />
        <div class="meta">
          <div class="name">{{ f.name }}</div>
          <div class="desc" v-if="f.desc">{{ f.desc }}</div>
        </div>
      </a>
    </div>
    <div v-else class="empty">暂无友链</div>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
const { page } = useData()
const friends = page.value.frontmatter?.friends || []
</script>

<style scoped>
.friends-list { margin-top: 12px }
.grid { display: flex; flex-wrap: wrap; gap: 12px }
.card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  border-radius: 8px;
  background: var(--vp-c-bg-1);
  color: var(--vp-c-text-1);
  text-decoration: none;
  width: 280px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.card:hover { transform: translateY(-4px); transition: .18s }
.avatar { width: 56px; height: 56px; border-radius: 8px; object-fit: cover }
.meta { flex: 1 }
.name { font-weight: 600 }
.desc { margin-top: 6px; color: var(--vp-c-text-2); font-size: 13px }
.empty { color: var(--vp-c-text-2) }
</style>