import type { Meta, StoryObj } from "@storybook/vue3";
import NotificationBell from "@/components/NotificationBell.vue";

const meta = {
  title: "Components/Atoms/NotificationBell",
  component: NotificationBell,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "通知铃铛按钮组件，用于显示站内通知的未读数量和触发通知面板。",
      },
    },
  },
  argTypes: {
    unreadCount: {
      control: "number",
      description: "未读通知数量",
      table: {
        category: "Content",
      },
    },
    maxDisplayCount: {
      control: "number",
      description: "显示的最大数量，超过此值显示为'maxDisplayCount+'（默认值为99）",
      table: {
        category: "Content",
      },
    },
  },
} satisfies Meta<typeof NotificationBell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoUnread: Story = {
  args: {
    unreadCount: 0,
  },
};

export const OneUnread: Story = {
  args: {
    unreadCount: 1,
  },
};

export const MultipleUnread: Story = {
  args: {
    unreadCount: 5,
  },
};

export const ManyUnread: Story = {
  args: {
    unreadCount: 99,
  },
};

export const OverLimit: Story = {
  args: {
    unreadCount: 150,
  },
  parameters: {
    docs: {
      description: {
        story: "未读数量超过99时显示'99+'",
      },
    },
  },
};

export const AllVariants: Story = {
  args: {
    unreadCount: 0,
  },
  render: () => ({
    components: { NotificationBell },
    template: `
      <div class="flex flex-wrap gap-8 items-center p-8 bg-white rounded-lg">
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="0" />
          <span class="text-sm text-gray-600">无未读</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="1" />
          <span class="text-sm text-gray-600">1条未读</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="5" />
          <span class="text-sm text-gray-600">5条未读</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="50" />
          <span class="text-sm text-gray-600">50条未读</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="99" />
          <span class="text-sm text-gray-600">99条未读</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="100" />
          <span class="text-sm text-gray-600">99+</span>
        </div>
      </div>
    `,
  }),
};

export const Interactive: Story = {
  args: {
    unreadCount: 3,
  },
  parameters: {
    docs: {
      description: {
        story: "点击铃铛按钮会触发click事件，可用于打开通知面板。",
      },
    },
  },
};

export const CustommaxDisplayCount99: Story = {
  args: {
    unreadCount: 150,
    maxDisplayCount: 99,
  },
  parameters: {
    docs: {
      description: {
        story: "默认maxDisplayCount为99，超过99显示'99+'",
      },
    },
  },
};

export const CustommaxDisplayCount999: Story = {
  args: {
    unreadCount: 150,
    maxDisplayCount: 999,
  },
  parameters: {
    docs: {
      description: {
        story: "自定义maxDisplayCount为999，超过999显示'999+'",
      },
    },
  },
};

export const CustommaxDisplayCountExamples: Story = {
  args: {
    unreadCount: 0,
  },
  render: () => ({
    components: { NotificationBell },
    template: `
      <div class="flex flex-wrap gap-8 items-center p-8 bg-white rounded-lg">
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="50" :max-count="99" />
          <span class="text-sm text-gray-600">maxDisplayCount=99, unread=50</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="100" :max-count="99" />
          <span class="text-sm text-gray-600">maxDisplayCount=99, unread=100 (99+)</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="500" :max-count="999" />
          <span class="text-sm text-gray-600">maxDisplayCount=999, unread=500</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="1000" :max-count="999" />
          <span class="text-sm text-gray-600">maxDisplayCount=999, unread=1000 (999+)</span>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "展示不同maxDisplayCount设置的效果。maxDisplayCount用于控制显示的最大数量，超过此值会显示为'maxDisplayCount+'。",
      },
    },
  },
};
