import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import NotificationManagement from "@/pages/NotificationManagement.vue";
import type { Notification } from "@/types/notification";

const meta = {
  title: "Pages/NotificationManagement",
  component: NotificationManagement,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "站内通知管理页面，左右布局展示通知列表和详情，支持按全部/已读/未读筛选。",
      },
    },
    layout: "fullscreen",
  },
  argTypes: {
    notifications: {
      control: "object",
      description: "通知列表数据",
      table: {
        category: "Content",
      },
    },
  },
} satisfies Meta<typeof NotificationManagement>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleNotifications: Notification[] = [
  {
    id: "1",
    title: "系统更新通知",
    content: "系统将于今晚22:00进行维护升级，预计耗时2小时。期间系统将暂停服务，请您提前做好相关准备。升级完成后，系统将自动恢复服务。如有任何问题，请联系技术支持。",
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    isRead: false,
  },
  {
    id: "2",
    title: "新功能上线",
    content: "全新的通知系统已上线，点击查看详情。本次更新包含以下新功能：1. 支持通知分类管理 2. 新增批量操作功能 3. 优化了通知阅读体验。快来体验吧！",
    timestamp: new Date(Date.now() - 30 * 60 * 1000),
    isRead: false,
  },
  {
    id: "3",
    title: "任务提醒",
    content: "您有一个待处理的任务即将到期，请及时处理。任务名称：UI组件库设计评审，截止时间：明天下午5点。请务必在截止时间前完成并提交。",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    isRead: true,
  },
  {
    id: "4",
    title: "欢迎加入",
    content: "欢迎来到UI Design System，开始您的组件设计之旅。我们提供丰富的组件库和设计规范，帮助您快速构建美观、一致的用户界面。如有任何问题，请随时联系我们的支持团队。",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    isRead: true,
  },
  {
    id: "5",
    title: "安全警告",
    content: "检测到您的账户在异地登录，如非本人操作请立即修改密码。登录时间：2026-01-14 15:30，登录地点：北京市。为了保护您的账户安全，建议您立即修改密码并开启两步验证。",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    isRead: false,
  },
  {
    id: "6",
    title: "版本发布",
    content: "UI Design System v2.0 已发布！本次更新包含50+个新组件，性能提升30%，并修复了已知问题。立即升级体验全新版本！",
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    isRead: true,
  },
  {
    id: "7",
    title: "会议通知",
    content: "本周五下午2点将召开产品评审会议，请准时参加。会议地点：3楼会议室A。会议议程：1. 产品需求评审 2. 技术方案讨论 3. 时间规划确认。",
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    isRead: false,
  },
];

export const Default: Story = {
  args: {
    notifications: sampleNotifications,
  },
  render: (args) => ({
    components: { NotificationManagement },
    setup() {
      const notifications = ref<Notification[]>(args.notifications);

      const handleMarkAsRead = (id: string) => {
        const notification = notifications.value.find((n: Notification) => n.id === id);
        if (notification) {
          notification.isRead = true;
        }
      };

      const handleMarkAllAsRead = () => {
        notifications.value.forEach((n: Notification) => {
          n.isRead = true;
        });
      };

      const handleMarkSelectedAsRead = (ids: string[]) => {
        ids.forEach(id => {
          const notification = notifications.value.find((n: Notification) => n.id === id);
          if (notification) {
            notification.isRead = true;
          }
        });
      };

      return {
        notifications,
        handleMarkAsRead,
        handleMarkAllAsRead,
        handleMarkSelectedAsRead,
      };
    },
    template: `
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
        @mark-selected-as-read="handleMarkSelectedAsRead"
      />
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "默认状态，显示所有通知，左侧列表，右侧详情。点击列表项可以查看完整详情，未读通知点击后会自动标记为已读。支持多选模式，可以批量标记已读。",
      },
    },
  },
};

export const AllUnread: Story = {
  args: {
    notifications: sampleNotifications.map(n => ({ ...n, isRead: false })),
  },
  render: (args) => ({
    components: { NotificationManagement },
    setup() {
      const notifications = ref<Notification[]>(args.notifications);

      const handleMarkAsRead = (id: string) => {
        const notification = notifications.value.find((n: Notification) => n.id === id);
        if (notification) {
          notification.isRead = true;
        }
      };

      const handleMarkAllAsRead = () => {
        notifications.value.forEach((n: Notification) => {
          n.isRead = true;
        });
      };

      const handleMarkSelectedAsRead = (ids: string[]) => {
        ids.forEach(id => {
          const notification = notifications.value.find((n: Notification) => n.id === id);
          if (notification) {
            notification.isRead = true;
          }
        });
      };

      return {
        notifications,
        handleMarkAsRead,
        handleMarkAllAsRead,
        handleMarkSelectedAsRead,
      };
    },
    template: `
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
        @mark-selected-as-read="handleMarkSelectedAsRead"
      />
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "所有通知都是未读状态，未读通知在列表中有蓝色圆点标识，点击后会自动标记为已读。支持多选模式批量标记已读。",
      },
    },
  },
};

export const AllRead: Story = {
  args: {
    notifications: sampleNotifications.map(n => ({ ...n, isRead: true })),
  },
  render: (args) => ({
    components: { NotificationManagement },
    setup() {
      const notifications = ref<Notification[]>(args.notifications);

      const handleMarkAsRead = (id: string) => {
        const notification = notifications.value.find((n: Notification) => n.id === id);
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
        notifications,
        handleMarkAsRead,
        handleMarkAllAsRead,
      };
    },
    template: `
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
      />
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "所有通知都是已读状态，已读通知在列表中有灰色圆点标识。",
      },
    },
  },
};

export const Empty: Story = {
  args: {
    notifications: [],
  },
  render: (args) => ({
    components: { NotificationManagement },
    setup() {
      const notifications = ref<Notification[]>(args.notifications);

      const handleMarkAsRead = (id: string) => {
        const notification = notifications.value.find((n: Notification) => n.id === id);
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
        notifications,
        handleMarkAsRead,
        handleMarkAllAsRead,
      };
    },
    template: `
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
      />
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "没有通知时显示空状态提示图标和文字。",
      },
    },
  },
};

export const FilterUnread: Story = {
  args: {
    notifications: sampleNotifications,
  },
  render: (args) => ({
    components: { NotificationManagement },
    setup() {
      const notifications = ref<Notification[]>(args.notifications);

      const handleMarkAsRead = (id: string) => {
        const notification = notifications.value.find((n: Notification) => n.id === id);
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
        notifications,
        handleMarkAsRead,
        handleMarkAllAsRead,
      };
    },
    template: `
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
      />
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "点击右上角的筛选下拉菜单，选择'未读'可以只显示未读通知。同样可以选择'全部'或'已读'来切换筛选条件。",
      },
    },
  },
};

export const LongContent: Story = {
  args: {
    notifications: [
      {
        id: "1",
        title: "超长内容通知测试",
        content: "这是一条非常长的通知内容，用于测试详情页面的显示效果。在左侧列表中，内容会被截断显示，只显示前30个字符。当点击列表项后，右侧详情页面会显示完整的内容，包括标题、通知内容、通知发生时间等所有信息。这样可以确保用户能够方便地查看通知的完整内容，同时保持列表的简洁性。本组件还支持时间格式化显示，根据时间距离当前时间的远近，显示'刚刚'、'X分钟前'、'X小时前'、'X天前'或具体日期时间。",
        timestamp: new Date(),
        isRead: false,
      },
    ],
  },
  render: (args) => ({
    components: { NotificationManagement },
    setup() {
      const notifications = ref<Notification[]>(args.notifications);

      const handleMarkAsRead = (id: string) => {
        const notification = notifications.value.find((n: Notification) => n.id === id);
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
        notifications,
        handleMarkAsRead,
        handleMarkAllAsRead,
      };
    },
    template: `
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
      />
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "测试长内容通知。在左侧列表中，内容会被截断显示，只显示前30个字符。点击后在右侧详情页面可以查看完整内容。",
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
        timestamp: new Date(Date.now() - (i + 10) * 24 * 60 * 60 * 1000),
      })),
      ...sampleNotifications.map((n, i) => ({
        ...n,
        id: `${n.id}-${i + 10}`,
        timestamp: new Date(Date.now() - (i + 20) * 24 * 60 * 60 * 1000),
      })),
    ],
  },
  render: (args) => ({
    components: { NotificationManagement },
    setup() {
      const notifications = ref<Notification[]>(args.notifications);

      const handleMarkAsRead = (id: string) => {
        const notification = notifications.value.find((n: Notification) => n.id === id);
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
        notifications,
        handleMarkAsRead,
        handleMarkAllAsRead,
      };
    },
    template: `
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
      />
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "当通知数量很多时，左侧列表会显示滚动条。支持滚动浏览所有通知，并可以随时点击查看详情。",
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    notifications: sampleNotifications,
  },
  render: (args) => ({
    components: { NotificationManagement },
    setup() {
      const notifications = ref<Notification[]>(args.notifications);

      const handleMarkAsRead = (id: string) => {
        const notification = notifications.value.find((n: Notification) => n.id === id);
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
        notifications,
        handleMarkAsRead,
        handleMarkAllAsRead,
      };
    },
    template: `
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
      />
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "完整的交互示例：可以点击列表项查看详情、筛选通知、点击未读通知自动标记为已读。尝试点击左侧列表中的通知，观察右侧详情页面的变化。",
      },
    },
  },
};
