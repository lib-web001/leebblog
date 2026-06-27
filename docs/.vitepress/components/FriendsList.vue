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
        <div class="avatar-wrap">
          <img v-if="f.logo" :src="f.logo" alt="" class="avatar" />
          <div v-else class="avatar-fallback">{{ initials(f.name) }}</div>
        </div>
        <div class="meta">
          <div class="name">{{ f.name }}</div>
          <div class="desc" v-if="f.desc">{{ f.desc }}</div>
        </div>
        <div class="visit">访问 →</div>
      </a>
    </div>
    <div v-else class="empty">暂无友链</div>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
const { page } = useData()
const friends = computed(() => page.value.frontmatter?.friends || [])

function initials(name = '') {
  if (!name) return ''
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + (parts[1][0] || '')).toUpperCase()
}
</script>

<style scoped>
.friends-list { margin-top: 18px }
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}
.card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--vp-c-bg-1), rgba(255,255,255,0.02));
  color: var(--vp-c-text-1);
  text-decoration: none;
  box-shadow: 0 6px 18px rgba(16,24,40,0.04);
  transition: transform .18s ease, box-shadow .18s ease;
}
.card:hover { transform: translateY(-6px); box-shadow: 0 12px 30px rgba(16,24,40,0.08) }
.avatar-wrap { flex: 0 0 56px; width: 56px; height: 56px }
.avatar { width: 56px; height: 56px; border-radius: 12px; object-fit: cover; display: block }
.avatar-fallback {
  width: 56px; height: 56px; border-radius: 12px; display:flex; align-items:center; justify-content:center;
  background: linear-gradient(135deg, #8ec5ff 0%, #b3ffab 100%);
  color: #0b1320; font-weight: 700; font-size: 16px; box-shadow: inset 0 -2px 0 rgba(255,255,255,0.15);
}
.meta { flex: 1; min-width: 0 }
.name { font-weight: 700; font-size: 15px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis }
.desc { margin-top: 6px; color: var(--vp-c-text-2); font-size: 13px; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical }
.visit { color: var(--vp-c-primary); font-weight: 600; margin-left: 8px }
.empty { color: var(--vp-c-text-2) }
</style>