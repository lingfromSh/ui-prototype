<script setup lang="ts">
import { ref, computed, watch, nextTick } from "vue";
import type { Notification, NotificationStatus } from "../types/notification";

const props = withDefaults(
  defineProps<{
    notifications?: Notification[];
  }>(),
  {
    notifications: () => [],
  },
);

const emit = defineEmits<{
  markAsRead: [id: string];
  markAllAsRead: [];
  refresh: [];
  markSelectedAsRead: [ids: string[]];
}>();

// 当前选中的通知
const selectedNotification = ref<Notification | null>(null);

// 选中的通知ID集合
const selectedNotificationIds = ref<Set<string>>(new Set());

// 全选checkbox的引用
const selectAllCheckbox = ref<HTMLInputElement | null>(null);

// 刷新状态
const isRefreshing = ref(false);

// 筛选状态
const filterStatus = ref<NotificationStatus>("all");
const isFilterDropdownOpen = ref(false);

// 筛选选项
const filterOptions = [
  { key: "all" as NotificationStatus, label: "全部" },
  { key: "read" as NotificationStatus, label: "已读" },
  { key: "unread" as NotificationStatus, label: "未读" },
];

// 根据筛选状态过滤通知
const filteredNotifications = computed(() => {
  switch (filterStatus.value) {
    case "read":
      return props.notifications.filter((n) => n.isRead);
    case "unread":
      return props.notifications.filter((n) => !n.isRead);
    default:
      return props.notifications;
  }
});

// 是否所有筛选后的通知都被选中
const isAllSelected = computed(() => {
  if (filteredNotifications.value.length === 0) return false;
  return filteredNotifications.value.every((n) =>
    selectedNotificationIds.value.has(n.id),
  );
});

// 是否部分选中
const isIndeterminate = computed(() => {
  if (filteredNotifications.value.length === 0) return false;
  const selectedCount = filteredNotifications.value.filter((n) =>
    selectedNotificationIds.value.has(n.id),
  ).length;
  return (
    selectedCount > 0 && selectedCount < filteredNotifications.value.length
  );
});

// 选中的未读通知数量
const selectedUnreadCount = computed(() => {
  return filteredNotifications.value.filter(
    (n) => selectedNotificationIds.value.has(n.id) && !n.isRead,
  ).length;
});

// 格式化时间显示
const formatTime = (date: Date): string => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return "刚刚";
  if (minutes < 60) return `${minutes}分钟前`;
  if (hours < 24) return `${hours}小时前`;
  if (days < 7) return `${days}天前`;

  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};

// 截断文本，超过30字显示省略号
const truncateText = (text: string, maxLength: number = 30): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

// 选择通知
const selectNotification = (notification: Notification) => {
  selectedNotification.value = notification;
  // 如果通知未读，标记为已读
  if (!notification.isRead && props.notifications) {
    emit("markAsRead", notification.id);
  }
};

// 取消选择通知
const deselectNotification = () => {
  selectedNotification.value = null;
};

// 切换筛选下拉菜单
const toggleFilterDropdown = () => {
  isFilterDropdownOpen.value = !isFilterDropdownOpen.value;
};

// 选择筛选选项
const selectFilter = (status: NotificationStatus) => {
  filterStatus.value = status;
  isFilterDropdownOpen.value = false;
};

// 点击外部关闭下拉菜单
const closeDropdown = () => {
  isFilterDropdownOpen.value = false;
};

// 获取当前筛选选项的标签
const getCurrentFilterLabel = computed(() => {
  const option = filterOptions.find((opt) => opt.key === filterStatus.value);
  return option ? option.label : "全部";
});

// 全选/取消全选
const toggleSelectAll = () => {
  if (isAllSelected.value) {
    // 取消全选
    filteredNotifications.value.forEach((n) => {
      selectedNotificationIds.value.delete(n.id);
    });
  } else {
    // 全选
    filteredNotifications.value.forEach((n) => {
      selectedNotificationIds.value.add(n.id);
    });
  }
};

// 切换单个通知的选中状态
const toggleNotificationSelection = (notificationId: string, event: Event) => {
  event.stopPropagation();
  if (selectedNotificationIds.value.has(notificationId)) {
    selectedNotificationIds.value.delete(notificationId);
  } else {
    selectedNotificationIds.value.add(notificationId);
  }
};

// 将选中的通知标记为已读
const markSelectedAsRead = () => {
  const unreadIds = filteredNotifications.value
    .filter((n) => selectedNotificationIds.value.has(n.id) && !n.isRead)
    .map((n) => n.id);

  if (unreadIds.length > 0) {
    emit("markSelectedAsRead", unreadIds);
    selectedNotificationIds.value.clear();
  }
};

// 全部标记为已读
const markAllAsRead = () => {
  emit("markAllAsRead");
};

// 刷新通知列表
const refreshNotifications = () => {
  isRefreshing.value = true;
  emit("refresh");
  // 模拟刷新完成，1秒后停止旋转动画
  setTimeout(() => {
    isRefreshing.value = false;
  }, 1000);
};

// 监听部分选中状态，更新全选checkbox的indeterminate属性
watch(isIndeterminate, (newValue) => {
  nextTick(() => {
    if (selectAllCheckbox.value) {
      selectAllCheckbox.value.indeterminate = newValue;
    }
  });
});
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- 页面标题 -->
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900">站内通知管理</h1>
        <p class="text-gray-500 mt-1">查看和管理您的所有通知</p>
      </div>

      <!-- 主内容区域：左右布局 -->
      <div
        class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
      >
        <div class="flex h-[calc(100vh-200px)]">
          <!-- 左侧：通知列表 -->
          <div class="w-1/3 border-r border-gray-200 flex flex-col">
            <!-- 列表头部 -->
            <div class="px-4 py-3 border-b border-gray-200 bg-gray-50">
              <div class="flex items-center justify-between">
                <!-- 左侧：全选checkbox -->
                <div class="flex items-center space-x-2">
                  <input
                    ref="selectAllCheckbox"
                    type="checkbox"
                    :checked="isAllSelected"
                    @change="toggleSelectAll"
                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                  />
                </div>

                <!-- 右侧：刷新和筛选按钮 -->
                <div class="flex items-center space-x-2">
                  <!-- 刷新按钮 -->
                  <button
                    @click="refreshNotifications"
                    class="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    title="刷新"
                    :disabled="isRefreshing"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      :class="['h-4 w-4', { 'animate-spin': isRefreshing }]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </button>

                  <!-- 筛选漏斗图标按钮 -->
                  <div class="relative">
                    <button
                      @click="toggleFilterDropdown"
                      class="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                      :class="{
                        'bg-gray-100 text-gray-700': isFilterDropdownOpen,
                      }"
                      title="筛选"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                        />
                      </svg>
                    </button>

                    <!-- 下拉菜单 -->
                    <transition
                      enter-active-class="transition-all duration-200 ease-out"
                      enter-from-class="opacity-0 scale-95 -translate-y-2"
                      enter-to-class="opacity-100 scale-100 translate-y-0"
                      leave-active-class="transition-all duration-150 ease-in"
                      leave-from-class="opacity-100 scale-100 translate-y-0"
                      leave-to-class="opacity-0 scale-95 -translate-y-2"
                    >
                      <div
                        v-if="isFilterDropdownOpen"
                        v-click-outside="closeDropdown"
                        class="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-10"
                      >
                        <button
                          v-for="option in filterOptions"
                          :key="option.key"
                          @click="selectFilter(option.key)"
                          :class="[
                            'w-full px-3 py-2 text-left text-sm transition-colors',
                            filterStatus === option.key
                              ? 'bg-blue-50 text-blue-700 font-medium'
                              : 'text-gray-700 hover:bg-gray-50',
                          ]"
                        >
                          {{ option.label }}
                        </button>
                      </div>
                    </transition>
                  </div>

                  <!-- 全部已读按钮 -->
                  <button
                    @click="markAllAsRead"
                    v-if="notifications.some((n) => !n.isRead)"
                    class="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    全部已读
                  </button>

                  <!-- 设为已读按钮 -->
                  <button
                    @click="markSelectedAsRead"
                    v-if="selectedUnreadCount > 0"
                    class="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <span>设为已读 ({{ selectedUnreadCount }})</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- 通知列表 -->
            <div class="flex-1 flex flex-col overflow-hidden">
              <div class="flex-1 overflow-y-auto">
                <div
                  v-if="filteredNotifications.length === 0"
                  class="flex flex-col items-center justify-center h-full text-gray-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12 mb-3 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  <p class="text-sm">暂无通知</p>
                </div>

                <div v-else class="divide-y divide-gray-100">
                  <div
                    v-for="notification in filteredNotifications"
                    :key="notification.id"
                    @click="selectNotification(notification)"
                    :class="[
                      'px-4 py-3 cursor-pointer transition-colors border-l-4',
                      selectedNotification?.id === notification.id
                        ? 'bg-blue-50 border-blue-500'
                        : selectedNotificationIds.has(notification.id)
                          ? 'bg-blue-50 border-blue-500'
                          : !notification.isRead
                            ? 'bg-white border-transparent hover:bg-gray-50'
                            : 'bg-white border-transparent hover:bg-gray-50',
                    ]"
                  >
                    <div class="flex items-start space-x-3">
                      <!-- 复选框 -->
                      <input
                        type="checkbox"
                        :checked="selectedNotificationIds.has(notification.id)"
                        @click="
                          (e) => toggleNotificationSelection(notification.id, e)
                        "
                        class="mt-1.5 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer flex-shrink-0"
                      />

                      <div class="flex-1 min-w-0">
                        <div class="flex items-center justify-between mb-1">
                          <h4
                            :class="[
                              'text-sm font-medium truncate',
                              !notification.isRead
                                ? 'text-gray-900'
                                : 'text-gray-600',
                            ]"
                          >
                            {{ notification.title }}
                          </h4>
                        </div>

                        <p
                          :class="[
                            'text-sm mb-1',
                            !notification.isRead
                              ? 'text-gray-700'
                              : 'text-gray-500',
                          ]"
                        >
                          {{ truncateText(notification.content) }}
                        </p>

                        <p class="text-xs text-gray-400">
                          {{ formatTime(notification.timestamp) }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧：通知详情 -->
          <div class="flex-1 flex flex-col">
            <div
              class="px-4 py-3 border-b border-gray-200 bg-gray-50 flex items-center justify-between"
            >
              <h2 class="font-semibold text-gray-900">通知详情</h2>
              <button
                v-if="selectedNotification"
                @click="deselectNotification"
                class="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-md transition-colors"
                title="关闭详情"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div class="flex-1 overflow-y-auto p-6">
              <div v-if="selectedNotification" class="space-y-6">
                <!-- 标题和状态 -->
                <div class="flex items-center justify-between">
                  <h3 class="text-xl font-semibold text-gray-900">
                    {{ selectedNotification.title }}
                  </h3>
                  <span
                    :class="[
                      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                      selectedNotification.isRead
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-blue-100 text-blue-800',
                    ]"
                  >
                    {{ selectedNotification.isRead ? "已读" : "未读" }}
                  </span>
                </div>

                <!-- 时间 -->
                <div class="flex items-center space-x-2 text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{{ formatTime(selectedNotification.timestamp) }}</span>
                </div>

                <!-- 内容 -->
                <div class="pt-4 border-t border-gray-200">
                  <h4 class="text-sm font-medium text-gray-700 mb-3">
                    通知内容
                  </h4>
                  <p class="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {{ selectedNotification.content }}
                  </p>
                </div>
              </div>

              <!-- 未选择通知时的空状态 -->
              <div
                v-else
                class="flex flex-col items-center justify-center h-full text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-16 w-16 mb-4 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p class="text-lg font-medium">请选择一条通知查看详情</p>
                <p class="text-sm mt-1">点击左侧列表中的通知即可查看完整内容</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 自定义滚动条样式 */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

/* 刷新旋转动画 */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* 点击外部关闭下拉菜单 */
[v-click-outside] {
  /* 指令将在父组件中实现 */
}
</style>
