import type { Meta, StoryObj } from "@storybook/vue3";
import { ref, toRefs } from "vue";
import NotificationPanel from "@/components/NotificationPanel.vue";
import type { Notification } from "@/types/notification";

const sampleNotifications: Notification[] = [
  {
    id: "1",
    title: "系统更新通知",
    content: "系统将于今晚22:00进行维护升级，预计耗时2小时。",
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    isRead: false,
  },
  {
    id: "2",
    title: "新功能上线",
    content: "全新的通知系统已上线，点击查看详情。",
    timestamp: new Date(Date.now() - 30 * 60 * 1000),
    isRead: false,
  },
  {
    id: "3",
    title: "任务提醒",
    content: "您有一个待处理的任务即将到期，请及时处理。",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    isRead: true,
  },
  {
    id: "4",
    title: "欢迎加入",
    content: "欢迎来到UI Design System，开始您的组件设计之旅。",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    isRead: true,
  },
  {
    id: "5",
    title: "安全警告",
    content: "检测到您的账户在异地登录，如非本人操作请立即修改密码。",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    isRead: false,
  },
];

const meta = {
  title: "Components/Molecules/NotificationPanel",
  component: NotificationPanel,
  tags: ["autodocs"],
  args: {
    isOpen: false,
    notifications: sampleNotifications,
    placement: "bottom",
    align: "middle",
    offset: 4,
  },
  parameters: {
    docs: {
      description: {
        component:
          "通知面板组件，用于展示站内通知列表，支持按全部/已读/未读筛选。",
      },
    },
  },
  render: (args) => ({
    components: { NotificationPanel },
    setup() {
      const { isOpen, notifications, placement, align, offset } = toRefs(args);
      const bellElement = ref<HTMLElement | null>(null);
      return { isOpen, notifications, bellElement, placement, align, offset };
    },
    template: `
      <div class="p-8 bg-gray-50 min-h-screen">
        <div class="mb-4">
          <button 
            ref="bellElement"
            @click="isOpen = !isOpen" 
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {{ isOpen ? '关闭面板' : '打开面板' }}
          </button>
        </div>
        <NotificationPanel 
          :is-open="isOpen" 
          :notifications="notifications"
          :bell-element="bellElement"
          :placement="placement"
          :align="align"
          :offset="offset"
        />
      </div>
    `,
  }),
} satisfies Meta<typeof NotificationPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllUnread: Story = {
  args: {
    notifications: sampleNotifications.map((n) => ({ ...n, isRead: false })),
  },
  parameters: {
    docs: {
      description: {
        story: "所有通知都是未读状态，未读通知会有蓝色背景高亮。",
      },
    },
  },
};

export const AllRead: Story = {
  args: {
    notifications: sampleNotifications.map((n) => ({ ...n, isRead: true })),
  },
  parameters: {
    docs: {
      description: {
        story: "所有通知都是已读状态，已读通知没有特殊背景。",
      },
    },
  },
};

export const Empty: Story = {
  args: {
    notifications: [],
  },
  parameters: {
    docs: {
      description: {
        story: "没有通知时显示空状态提示。",
      },
    },
  },
};

export const LongContent: Story = {
  args: {
    notifications: [
      {
        id: "1",
        title: "超长内容通知",
        content:
          "这是一条非常长的通知内容，用于测试内容截断功能。当内容超过20个字符时，应该显示省略号。这条内容明显超过了20个字符的限制。",
        timestamp: new Date(),
        isRead: false,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "通知内容超过20个字符时会自动截断并显示省略号。",
      },
    },
  },
};

export const ManyNotifications: Story = {
  args: {
    notifications: [
      ...sampleNotifications,
      ...sampleNotifications.map((n, i) => ({
        ...n,
        id: `${n.id}-${i}`,
        timestamp: new Date(Date.now() - (i + 5) * 24 * 60 * 60 * 1000),
      })),
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "当通知数量很多时，面板会显示滚动条，最多显示高度为96（24rem）。",
      },
    },
  },
};

export const WithTabSwitching: Story = {
  render: (args) => ({
    components: { NotificationPanel },
    setup() {
      const { isOpen, notifications, placement, align, offset } = toRefs(args);
      const bellElement = ref<HTMLElement | null>(null);
      return { isOpen, notifications, bellElement, placement, align, offset };
    },
    template: `
      <div class="p-8 bg-gray-50 min-h-screen">
        <div class="mb-4">
          <button 
            ref="bellElement"
            @click="isOpen = !isOpen" 
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {{ isOpen ? '关闭面板' : '打开面板' }}
          </button>
        </div>
        <NotificationPanel 
          :is-open="isOpen" 
          :notifications="notifications"
          :bell-element="bellElement"
          :placement="placement"
          :align="align"
          :offset="offset"
        />
        <p class="mt-96 text-gray-600">点击上方的Tab标签可以切换显示全部/已读/未读通知</p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "点击Tab标签可以在全部、已读、未读三个视图之间切换。",
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    notifications: sampleNotifications,
  },
  render: (args) => ({
    components: { NotificationPanel },
    setup() {
      const { isOpen, notifications, placement, align, offset } = toRefs(args);
      const bellElement = ref<HTMLElement | null>(null);

      const handleClose = () => {
        isOpen.value = false;
      };

      const handleMarkAsRead = (id: string) => {
        const notification = notifications.value.find(
          (n: Notification) => n.id === id
        );
        if (notification) {
          notification.isRead = true;
        }
      };

      const handleMarkAllAsRead = () => {
        notifications.value.forEach((n: Notification) => {
          n.isRead = true;
        });
      };

      return {
        isOpen,
        notifications,
        handleClose,
        handleMarkAsRead,
        handleMarkAllAsRead,
        bellElement,
        placement,
        align,
        offset,
      };
    },
    template: `
      <div class="p-8 bg-gray-50 min-h-screen">
        <div class="mb-4 space-y-2">
          <button 
            ref="bellElement"
            @click="isOpen = !isOpen" 
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {{ isOpen ? '关闭面板' : '打开面板' }}
          </button>
          <button @click="handleMarkAllAsRead" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            全部标记为已读
          </button>
        </div>
        <NotificationPanel
          :is-open="isOpen"
          :notifications="notifications"
          :bell-element="bellElement"
          :placement="placement"
          :align="align"
          :offset="offset"
          @close="handleClose"
          :on-mark-as-read="handleMarkAsRead"
          :on-mark-all-as-read="handleMarkAllAsRead"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "完整的交互示例：可以关闭面板、点击通知标记为已读、全部标记为已读。",
      },
    },
  },
};

export const CustomOffset: Story = {
  args: {
    offset: 20,
  },
  render: (args) => ({
    components: { NotificationPanel },
    setup() {
      const { isOpen, notifications, placement, align, offset } = toRefs(args);
      const bellElement = ref<HTMLElement | null>(null);
      return { isOpen, notifications, offset, bellElement, placement, align };
    },
    template: `
      <div class="p-8 bg-gray-50 min-h-screen">
        <div class="mb-4">
          <button 
            ref="bellElement"
            @click="isOpen = !isOpen" 
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {{ isOpen ? '关闭面板' : '打开面板' }}
          </button>
        </div>
        <NotificationPanel 
          :is-open="isOpen" 
          :notifications="notifications"
          :bell-element="bellElement"
          :placement="placement"
          :align="align"
          :offset="offset"
        />
        <p class="mt-2 text-gray-600">面板与按钮的距离设置为 {{ offset }}px</p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "通过 offset 属性可以调整面板与按钮之间的距离，默认为 4px。",
      },
    },
  },
};

export const TopPlacement: Story = {
  args: {
    placement: "top",
  },
  render: (args) => ({
    components: { NotificationPanel },
    setup() {
      const { isOpen, notifications, placement, align, offset } = toRefs(args);
      const bellElement = ref<HTMLElement | null>(null);
      return { isOpen, notifications, placement, align, offset, bellElement };
    },
    template: `
      <div class="p-8 bg-gray-50 min-h-screen">
        <div class="mb-4 mt-32">
          <button 
            ref="bellElement"
            @click="isOpen = !isOpen" 
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {{ isOpen ? '关闭面板' : '打开面板' }}
          </button>
        </div>
        <NotificationPanel 
          :is-open="isOpen" 
          :notifications="notifications"
          :bell-element="bellElement"
          :placement="placement"
          :align="align"
          :offset="offset"
        />
        <p class="mt-2 text-gray-600">面板显示在按钮上方</p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "通过 placement='top' 属性可以让面板显示在按钮上方。",
      },
    },
  },
};

export const LeftPlacement: Story = {
  args: {
    placement: "left",
    align: "middle",
  },
  render: (args) => ({
    components: { NotificationPanel },
    setup() {
      const { isOpen, notifications, placement, align, offset } = toRefs(args);
      const bellElement = ref<HTMLElement | null>(null);
      return { isOpen, notifications, placement, align, offset, bellElement };
    },
    template: `
      <div class="p-8 bg-gray-50 min-h-screen">
        <div class="mb-4 ml-64">
          <button 
            ref="bellElement"
            @click="isOpen = !isOpen" 
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {{ isOpen ? '关闭面板' : '打开面板' }}
          </button>
        </div>
        <NotificationPanel 
          :is-open="isOpen" 
          :notifications="notifications"
          :bell-element="bellElement"
          :placement="placement"
          :align="align"
          :offset="offset"
        />
        <p class="mt-2 text-gray-600">面板显示在按钮左侧</p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "通过 placement='left' 属性可以让面板显示在按钮左侧。",
      },
    },
  },
};

export const RightPlacement: Story = {
  args: {
    placement: "right",
    align: "middle",
  },
  render: (args) => ({
    components: { NotificationPanel },
    setup() {
      const { isOpen, notifications, placement, align, offset } = toRefs(args);
      const bellElement = ref<HTMLElement | null>(null);
      return { isOpen, notifications, placement, align, offset, bellElement };
    },
    template: `
      <div class="p-8 bg-gray-50 min-h-screen">
        <div class="mb-4">
          <button 
            ref="bellElement"
            @click="isOpen = !isOpen" 
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {{ isOpen ? '关闭面板' : '打开面板' }}
          </button>
        </div>
        <NotificationPanel 
          :is-open="isOpen" 
          :notifications="notifications"
          :bell-element="bellElement"
          :placement="placement"
          :align="align"
          :offset="offset"
        />
        <p class="mt-2 text-gray-600">面板显示在按钮右侧</p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "通过 placement='right' 属性可以让面板显示在按钮右侧。",
      },
    },
  },
};

export const AlignStart: Story = {
  args: {
    align: "start",
  },
  render: (args) => ({
    components: { NotificationPanel },
    setup() {
      const { isOpen, notifications, placement, align, offset } = toRefs(args);
      const bellElement = ref<HTMLElement | null>(null);
      return { isOpen, notifications, placement, align, offset, bellElement };
    },
    template: `
      <div class="p-8 bg-gray-50 min-h-screen">
        <div class="mb-4">
          <button 
            ref="bellElement"
            @click="isOpen = !isOpen" 
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {{ isOpen ? '关闭面板' : '打开面板' }}
          </button>
        </div>
        <NotificationPanel 
          :is-open="isOpen" 
          :notifications="notifications"
          :bell-element="bellElement"
          :placement="placement"
          :align="align"
          :offset="offset"
        />
        <p class="mt-2 text-gray-600">面板与按钮左对齐</p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "通过 align='start' 属性可以让面板与按钮左对齐。",
      },
    },
  },
};

export const AlignEnd: Story = {
  args: {
    align: "end",
  },
  render: (args) => ({
    components: { NotificationPanel },
    setup() {
      const { isOpen, notifications, placement, align, offset } = toRefs(args);
      const bellElement = ref<HTMLElement | null>(null);
      return { isOpen, notifications, placement, align, offset, bellElement };
    },
    template: `
      <div class="p-8 bg-gray-50 min-h-screen">
        <div class="mb-4">
          <button 
            ref="bellElement"
            @click="isOpen = !isOpen" 
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {{ isOpen ? '关闭面板' : '打开面板' }}
          </button>
        </div>
        <NotificationPanel 
          :is-open="isOpen" 
          :notifications="notifications"
          :bell-element="bellElement"
          :placement="placement"
          :align="align"
          :offset="offset"
        />
        <p class="mt-2 text-gray-600">面板与按钮右对齐</p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "通过 align='end' 属性可以让面板与按钮右对齐。",
      },
    },
  },
};
