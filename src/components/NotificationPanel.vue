<script setup lang="ts">
import { ref, computed, watch, nextTick, onBeforeUnmount } from "vue";
import type { Notification, NotificationStatus } from "../types/notification";

// 面板方向类型
export type PanelPlacement = "bottom" | "top" | "left" | "right";

const props = withDefaults(
  defineProps<{
    notifications: Notification[];
    isOpen: boolean;
    onMarkAsRead?: (id: string) => void;
    onMarkAllAsRead?: () => void;
    bellElement?: HTMLElement | null;
    // 面板与按钮的距离（像素）
    offset?: number;
    // 面板相对于按钮的方向
    placement?: PanelPlacement;
    // 面板对齐方式（对于水平方向：'start' | 'center' | 'end'，对于垂直方向：'top' | 'middle' | 'bottom'）
    align?: "start" | "center" | "end" | "top" | "middle" | "bottom";
  }>(),
  {
    isOpen: false,
    bellElement: null,
    offset: 4,
    placement: "bottom",
    align: "center",
  }
);

// 面板位置
const panelPosition = ref({ top: "0px", left: "0px" });

// 计算面板位置
const calculatePosition = async () => {
  if (!props.bellElement) return;
  await nextTick();

  const bellRect = props.bellElement.getBoundingClientRect();
  // 面板宽度是 w-96 (384px)
  const panelWidth = 384;
  // 面板高度（估计值，实际会根据内容变化）
  const panelHeight = 400;

  let top = 0;
  let left = 0;

  // 根据方向计算位置
  switch (props.placement) {
    case "bottom":
      // 面板在按钮下方
      top = bellRect.bottom + props.offset;
      break;
    case "top":
      // 面板在按钮上方
      top = bellRect.top - panelHeight - props.offset;
      break;
    case "left":
      // 面板在按钮左侧
      top = bellRect.top;
      left = bellRect.left - panelWidth - props.offset;
      break;
    case "right":
      // 面板在按钮右侧
      top = bellRect.top;
      left = bellRect.right + props.offset;
      break;
  }

  // 根据对齐方式调整位置
  if (props.placement === "bottom" || props.placement === "top") {
    // 水平对齐
    switch (props.align) {
      case "start":
        left = bellRect.left;
        break;
      case "center":
        left = bellRect.left + bellRect.width / 2 - panelWidth / 2;
        break;
      case "end":
        left = bellRect.right - panelWidth;
        break;
    }
  } else {
    // 垂直对齐（对于 left/right 方向）
    switch (props.align) {
      case "top":
        top = bellRect.top;
        break;
      case "middle":
        top = bellRect.top + bellRect.height / 2 - panelHeight / 2;
        break;
      case "bottom":
        top = bellRect.bottom - panelHeight;
        break;
    }
  }

  panelPosition.value = {
    top: `${top}px`,
    left: `${left}px`,
  };
};

const emit = defineEmits<{
  close: [];
}>();

const activeTab = ref<NotificationStatus>("all");

const tabs = [
  { key: "all" as NotificationStatus, label: "全部" },
  { key: "read" as NotificationStatus, label: "已读" },
  { key: "unread" as NotificationStatus, label: "未读" },
];

// 根据当前标签页过滤通知
const filteredNotifications = computed(() => {
  switch (activeTab.value) {
    case "read":
      return props.notifications.filter((n) => n.isRead);
    case "unread":
      return props.notifications.filter((n) => !n.isRead);
    default:
      return props.notifications;
  }
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

  return date.toLocaleDateString("zh-CN", { month: "2-digit", day: "2-digit" });
};

// 截断文本，超过20字显示省略号
const truncateText = (text: string, maxLength: number = 20): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

// 处理通知点击
const handleNotificationClick = (notification: Notification) => {
  if (!notification.isRead && props.onMarkAsRead) {
    props.onMarkAsRead(notification.id);
  }
};

// 处理全部标记为已读
const handleMarkAllAsRead = () => {
  if (props.onMarkAllAsRead) {
    props.onMarkAllAsRead();
  }
};

// 监听面板打开状态，切换到全部标签并计算位置
watch(
  () => props.isOpen,
  (newVal) => {
    if (newVal) {
      activeTab.value = "all";
      calculatePosition();
    }
  }
);

// 监听窗口大小变化，重新计算位置
let resizeObserver: ResizeObserver | null = null;
let scrollHandler: (() => void) | null = null;

watch(
  () => props.bellElement,
  (newVal) => {
    if (newVal) {
      resizeObserver = new ResizeObserver(() => {
        if (props.isOpen) {
          calculatePosition();
        }
      });
      resizeObserver.observe(newVal);

      // 监听窗口滚动
      scrollHandler = () => {
        if (props.isOpen) {
          calculatePosition();
        }
      };
      window.addEventListener("scroll", scrollHandler);
    } else {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
      if (scrollHandler) {
        window.removeEventListener("scroll", scrollHandler);
        scrollHandler = null;
      }
    }
  }
);

// 组件卸载前清理
onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }
  if (scrollHandler) {
    window.removeEventListener("scroll", scrollHandler);
    scrollHandler = null;
  }
});
</script>

<template>
  <teleport to="body">
    <transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 scale-95 -translate-y-2"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 -translate-y-2"
    >
      <div
        v-if="isOpen"
        class="fixed z-50 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
        :style="{ top: panelPosition.top, left: panelPosition.left }"
      >
        <!-- 头部 -->
        <div class="px-4 py-3 border-b border-gray-200 bg-gray-50">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-lg font-semibold text-gray-900">站内通知</h3>
            <button
              @click="handleMarkAllAsRead"
              v-if="notifications.some((n) => !n.isRead)"
              class="text-sm text-blue-600 hover:text-blue-700 transition-colors"
            >
              全部已读
            </button>
          </div>
          <!-- Tab分页 -->
          <div class="flex space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              v-for="tab in tabs"
              :key="tab.key"
              @click="activeTab = tab.key"
              :class="[
                'flex-1 px-3 py-1.5 text-sm font-medium rounded-md transition-all',
                activeTab === tab.key
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900',
              ]"
            >
              {{ tab.label }}
              <span class="ml-1 text-xs">
                <span v-if="tab.key === 'all'"
                  >({{ notifications.length }})</span
                >
                <span v-else-if="tab.key === 'read'"
                  >({{ notifications.filter((n) => n.isRead).length }})</span
                >
                <span v-else-if="tab.key === 'unread'"
                  >({{ notifications.filter((n) => !n.isRead).length }})</span
                >
              </span>
            </button>
          </div>
        </div>

        <!-- 通知列表 -->
        <div class="max-h-96 overflow-y-auto">
          <div
            v-if="filteredNotifications.length === 0"
            class="flex flex-col items-center justify-center py-12 text-gray-500"
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
              @click="handleNotificationClick(notification)"
              :class="[
                'px-4 py-3 cursor-pointer transition-colors',
                !notification.isRead ? 'bg-blue-50' : 'hover:bg-gray-50',
              ]"
            >
              <div class="flex items-start space-x-3">
                <!-- 未读指示器 -->
                <div
                  :class="[
                    'mt-1.5 h-2 w-2 rounded-full flex-shrink-0',
                    !notification.isRead ? 'bg-blue-500' : 'bg-gray-300',
                  ]"
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
                      'text-sm mb-2',
                      !notification.isRead ? 'text-gray-700' : 'text-gray-500',
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

        <!-- 底部 -->
        <div class="px-4 py-2 bg-gray-50 border-t border-gray-200">
          <button
            class="w-full py-2 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
          >
            查看全部通知
          </button>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
/* 自定义滚动条样式 */
.max-h-96::-webkit-scrollbar {
  width: 6px;
}

.max-h-96::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.max-h-96::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.max-h-96::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}
</style>
