<script setup lang="ts">
import { ref, computed } from 'vue';
import NotificationBell from '../components/NotificationBell.vue';
import NotificationPanel from '../components/NotificationPanel.vue';
import type { Notification } from '../types/notification';

const props = withDefaults(defineProps<{
  notifications?: Notification[];
}>(), {
  notifications: () => [],
});

const emit = defineEmits<{
  markAsRead: [id: string];
  markAllAsRead: [];
}>();

const isNotificationPanelOpen = ref(false);
const bellContainerRef = ref<HTMLElement | null>(null);

// 计算未读数量
const unreadCount = computed(() => {
  return props.notifications.filter(n => !n.isRead).length;
});

// 切换通知面板显示状态
const toggleNotificationPanel = () => {
  isNotificationPanelOpen.value = !isNotificationPanelOpen.value;
};

// 关闭通知面板
const closeNotificationPanel = () => {
  isNotificationPanelOpen.value = false;
};

// 标记单条通知为已读
const handleMarkAsRead = (id: string) => {
  emit('markAsRead', id);
};

// 标记所有通知为已读
const handleMarkAllAsRead = () => {
  emit('markAllAsRead');
};
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 顶部栏 -->
    <header class="bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 right-0 z-30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo区域 -->
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                src="/vite.svg"
                alt="Logo"
                class="h-8 w-auto"
              />
            </div>
            <span class="ml-3 text-xl font-bold text-gray-900">
              UI Design System
            </span>
          </div>

          <!-- 右侧操作区域 -->
          <div class="flex items-center space-x-4">
            <!-- 铃铛通知按钮容器 -->
            <div ref="bellContainerRef" class="relative">
              <NotificationBell
                :unread-count="unreadCount"
                @click="toggleNotificationPanel"
              />
            </div>

            <!-- 用户头像 -->
            <div class="flex items-center space-x-3">
              <div class="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium">
                U
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- 通知面板 -->
    <NotificationPanel
      :is-open="isNotificationPanelOpen"
      :notifications="notifications"
      :on-mark-as-read="handleMarkAsRead"
      :on-mark-all-as-read="handleMarkAllAsRead"
      :bell-element="bellContainerRef"
      @close="closeNotificationPanel"
    />

    <!-- 主内容区域 -->
    <main class="pt-16">
      <slot />
    </main>
  </div>
</template>

<style scoped>
/* 可以在这里添加额外的样式 */
</style>
