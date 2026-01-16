<script setup lang="ts">
import { ref } from 'vue';
import MainLayout from './layouts/MainLayout.vue';
import type { Notification } from './types/notification';

// 示例通知数据
const notifications = ref<Notification[]>([
  {
    id: '1',
    title: '系统更新通知',
    content: '系统将于今晚22:00进行维护升级，预计耗时2小时。',
    timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5分钟前
    isRead: false,
  },
  {
    id: '2',
    title: '新功能上线',
    content: '全新的通知系统已上线，点击查看详情。',
    timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30分钟前
    isRead: false,
  },
  {
    id: '3',
    title: '任务提醒',
    content: '您有一个待处理的任务即将到期，请及时处理。',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2小时前
    isRead: true,
  },
  {
    id: '4',
    title: '欢迎加入',
    content: '欢迎来到UI Design System，开始您的组件设计之旅。',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1天前
    isRead: true,
  },
  {
    id: '5',
    title: '安全警告',
    content: '检测到您的账户在异地登录，如非本人操作请立即修改密码。',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3天前
    isRead: false,
  },
]);

// 标记单条通知为已读
const handleMarkAsRead = (id: string) => {
  const notification = notifications.value.find(n => n.id === id);
  if (notification) {
    notification.isRead = true;
  }
};

// 标记所有通知为已读
const handleMarkAllAsRead = () => {
  notifications.value.forEach(n => {
    n.isRead = true;
  });
};
</script>

<template>
  <MainLayout
    :notifications="notifications"
    @mark-as-read="handleMarkAsRead"
    @mark-all-as-read="handleMarkAllAsRead"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">
          欢迎使用 UI Design System
        </h1>
        <p class="text-gray-600 mb-6">
          这是一个带有顶部通知栏的布局示例。点击右上角的铃铛图标可以查看站内通知。
        </p>
        
        <div class="space-y-4">
          <h2 class="text-xl font-semibold text-gray-900">功能特性：</h2>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>铃铛右上角显示未读消息数量（超过99显示99+）</li>
            <li>点击铃铛显示浮动通知面板</li>
            <li>提供"全部/已读/未读"三个标签页筛选通知</li>
            <li>每条通知显示标题、内容（截断超过20字的部分）和发生时间</li>
            <li>未读通知有蓝色背景高亮</li>
            <li>支持点击通知标记为已读</li>
            <li>支持一键全部标记为已读</li>
          </ul>
        </div>

        <div class="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 class="font-medium text-blue-900 mb-2">提示</h3>
          <p class="text-sm text-blue-700">
            点击右上角的铃铛图标查看通知面板，体验完整的通知功能。
          </p>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<style scoped>
/* 可以在这里添加额外的样式 */
</style>
