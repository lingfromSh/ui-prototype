<script setup lang="ts">
import { computed } from "vue";
import type { NotificationBellProps } from "../types/notification";

const props = withDefaults(defineProps<NotificationBellProps>(), {
  unreadCount: 0,
  maxDisplayCount: 99,
});

const emit = defineEmits<{
  click: [];
}>();

const hasUnread = computed(() => props.unreadCount > 0);

const displayCount = computed(() => {
  if (props.unreadCount > props.maxDisplayCount) {
    return `${props.maxDisplayCount}+`;
  }
  return props.unreadCount.toString();
});

const handleClick = () => {
  emit("click");
};
</script>

<template>
  <button
    class="relative p-2 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg cursor-pointer"
    @click="handleClick"
    aria-label="通知"
  >
    <!-- 铃铛图标 -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>

    <!-- 未读数量徽章 -->
    <transition
      enter-active-class="transform transition-transform duration-200"
      enter-from-class="scale-0"
      enter-to-class="scale-100"
      leave-active-class="transform transition-transform duration-200"
      leave-from-class="scale-100"
      leave-to-class="scale-0"
    >
      <span
        v-if="hasUnread"
        class="absolute -top-1 -right-1 flex items-center justify-center min-w-[1.25rem] h-5 px-1 bg-red-500 text-white text-xs font-bold rounded-full"
      >
        {{ displayCount }}
      </span>
    </transition>
  </button>
</template>

<style scoped>
/* 可以在这里添加额外的样式 */
</style>
