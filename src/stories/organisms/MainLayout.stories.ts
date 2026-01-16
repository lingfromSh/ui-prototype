import type { Meta, StoryObj } from "@storybook/vue3";
import MainLayout from "@/layouts/MainLayout.vue";
import type { Notification } from "@/types/notification";

const meta = {
  title: "Components/Organisms/MainLayout",
  component: MainLayout,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "主布局组件，包含固定顶部栏和通知系统。顶部栏包含Logo、铃铛通知按钮和用户头像。",
      },
    },
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
} satisfies Meta<typeof MainLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Default: Story = {
  render: () => ({
    components: { MainLayout },
    setup() {
      return { sampleNotifications };
    },
    template: `
      <MainLayout :notifications="sampleNotifications">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">
              欢迎使用 MainLayout
            </h1>
            <p class="text-gray-600">
              这是主布局组件的默认示例。点击右上角的铃铛图标可以查看通知面板。
            </p>
          </div>
        </div>
      </MainLayout>
    `,
  }),
};

export const NoNotifications: Story = {
  render: () => ({
    components: { MainLayout },
    template: `
      <MainLayout :notifications="[]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">
              没有通知
            </h1>
            <p class="text-gray-600">
              当没有通知时，铃铛按钮不会显示未读数量徽章。
            </p>
          </div>
        </div>
      </MainLayout>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "没有通知时，铃铛按钮不会显示红色徽章。",
      },
    },
  },
};

export const AllUnread: Story = {
  render: () => ({
    components: { MainLayout },
    setup() {
      const allUnread = sampleNotifications.map(n => ({ ...n, isRead: false }));
      return { allUnread };
    },
    template: `
      <MainLayout :notifications="allUnread">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">
              全部未读
            </h1>
            <p class="text-gray-600">
              铃铛徽章显示所有未读通知数量。点击铃铛查看通知面板。
            </p>
          </div>
        </div>
      </MainLayout>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "所有通知都是未读状态，铃铛徽章显示总数。",
      },
    },
  },
};

export const ManyUnread: Story = {
  render: () => ({
    components: { MainLayout },
    setup() {
      const manyUnread = Array.from({ length: 100 }, (_, i) => ({
        id: `notification-${i}`,
        title: `通知 ${i + 1}`,
        content: `这是第 ${i + 1} 条通知的内容。`,
        timestamp: new Date(Date.now() - (i + 1) * 60 * 60 * 1000),
        isRead: false,
      }));
      return { manyUnread };
    },
    template: `
      <MainLayout :notifications="manyUnread">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">
              大量未读通知
            </h1>
            <p class="text-gray-600">
              当未读数量超过99时，铃铛徽章显示"99+"。
            </p>
          </div>
        </div>
      </MainLayout>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "未读数量超过99时，徽章显示'99+'。",
      },
    },
  },
};

export const WithDashboard: Story = {
  render: () => ({
    components: { MainLayout },
    setup() {
      return { sampleNotifications };
    },
    template: `
      <MainLayout :notifications="sampleNotifications">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="mb-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-2">仪表板</h1>
            <p class="text-gray-600">欢迎回来，查看您的最新数据。</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div class="text-3xl font-bold text-blue-600 mb-2">1,234</div>
              <div class="text-sm text-gray-600">总访问量</div>
            </div>
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div class="text-3xl font-bold text-green-600 mb-2">567</div>
              <div class="text-sm text-gray-600">新增用户</div>
            </div>
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div class="text-3xl font-bold text-purple-600 mb-2">89</div>
              <div class="text-sm text-gray-600">待处理任务</div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">最近活动</h2>
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span class="text-blue-600">U</span>
                </div>
                <div>
                  <div class="text-sm font-medium text-gray-900">用户完成了一项任务</div>
                  <div class="text-xs text-gray-500">2分钟前</div>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <div class="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span class="text-green-600">S</span>
                </div>
                <div>
                  <div class="text-sm font-medium text-gray-900">系统更新成功</div>
                  <div class="text-xs text-gray-500">1小时前</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "展示一个完整的仪表板页面布局。",
      },
    },
  },
};

export const Interactive: Story = {
  render: () => ({
    components: { MainLayout },
    setup() {
      const notifications = ref<Notification[]>(sampleNotifications);

      const handleMarkAsRead = (id: string) => {
        const notification = notifications.value.find(n => n.id === id);
        if (notification) {
          notification.isRead = true;
        }
      };

      const handleMarkAllAsRead = () => {
        notifications.value.forEach(n => {
          n.isRead = true;
        });
      };

      const addNotification = () => {
        const newId = (notifications.value.length + 1).toString();
        notifications.value.unshift({
          id: newId,
          title: `新通知 ${newId}`,
          content: "这是一条新添加的通知。",
          timestamp: new Date(),
          isRead: false,
        });
      };

      return {
        notifications,
        handleMarkAsRead,
        handleMarkAllAsRead,
        addNotification,
      };
    },
    template: `
      <MainLayout
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">
              交互式示例
            </h1>
            <p class="text-gray-600 mb-6">
              点击右上角的铃铛图标查看通知面板。您可以：
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>点击铃铛打开/关闭通知面板</li>
              <li>点击通知标记为已读</li>
              <li>点击"全部已读"标记所有通知为已读</li>
              <li>使用Tab切换查看全部/已读/未读通知</li>
            </ul>
            <button
              @click="addNotification"
              class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              添加新通知
            </button>
            <p class="mt-4 text-sm text-gray-500">
              当前未读数量: {{ notifications.filter(n => !n.isRead).length }}
            </p>
          </div>
        </div>
      </MainLayout>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "完整的交互示例，可以添加通知、标记已读等操作。",
      },
    },
  },
};
