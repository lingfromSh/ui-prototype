import type { Meta, StoryObj } from "@storybook/vue3";
import Card from "@/volt/Card.vue";

const meta = {
  title: "Volt/Molecules/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "卡片组件用于展示内容块，包含标题、副标题、内容和页脚等部分。",
      },
    },
  },
  argTypes: {
    header: {
      control: "text",
      description: "卡片头部内容",
      table: {
        category: "Content",
      },
    },
    title: {
      control: "text",
      description: "卡片标题",
      table: {
        category: "Content",
      },
    },
    subtitle: {
      control: "text",
      description: "卡片副标题",
      table: {
        category: "Content",
      },
    },
    footer: {
      control: "text",
      description: "卡片底部内容",
      table: {
        category: "Content",
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "卡片标题",
    subtitle: "这是一个副标题",
  },
};

export const WithHeader: Story = {
  args: {
    header: "头部内容",
    title: "卡片标题",
    subtitle: "这是一个副标题",
  },
};

export const WithFooter: Story = {
  args: {
    title: "卡片标题",
    subtitle: "这是一个副标题",
    footer: "底部内容",
  },
};

export const FullFeatured: Story = {
  args: {
    header: "头部内容",
    title: "卡片标题",
    subtitle: "这是一个副标题",
    footer: "底部内容",
  },
};

export const WithCustomContent: Story = {
  args: {
    title: "自定义内容",
    subtitle: "支持自定义内容",
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card :title="args.title" :subtitle="args.subtitle">
        <template #content>
          <div class="p-4">
            <p class="text-surface-700 dark:text-surface-0">
              这是卡片的自定义内容区域。您可以在这里放置任何内容，包括文本、图片、表单等。
            </p>
            <p class="mt-4 text-surface-500 dark:text-surface-400">
              Volt 卡片组件提供了灵活的插槽系统，让您可以完全自定义卡片的各个部分。
            </p>
          </div>
        </template>
      </Card>
    `,
  }),
};

export const WithActions: Story = {
  args: {
    title: "操作卡片",
    subtitle: "包含操作按钮",
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card :title="args.title" :subtitle="args.subtitle">
        <template #content>
          <div class="p-4">
            <p class="text-surface-700 dark:text-surface-0 mb-4">
              这是一个包含操作按钮的卡片示例。
            </p>
            <div class="flex gap-2">
              <Button label="确认" />
              <Button label="取消" outlined />
            </div>
          </div>
        </template>
      </Card>
    `,
  }),
};

export const WithImage: Story = {
  args: {
    title: "图片卡片",
    subtitle: "包含图片展示",
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card :title="args.title" :subtitle="args.subtitle">
        <template #content>
          <div>
            <div class="w-full h-48 bg-surface-100 dark:bg-surface-800 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-surface-400 dark:text-surface-500">图片区域</span>
            </div>
            <p class="p-4 text-surface-700 dark:text-surface-0">
              这是一个包含图片展示的卡片示例。您可以在内容区域放置任何类型的媒体内容。
            </p>
          </div>
        </template>
      </Card>
    `,
  }),
};

export const CardVariants: Story = {
  render: () => ({
    components: { Card },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="基础卡片" subtitle="简单的卡片">
          <template #content>
            <div class="p-4 text-surface-700 dark:text-surface-0">
              基础卡片组件，包含标题和副标题。
            </div>
          </template>
        </Card>
        <Card title="内容卡片" subtitle="带有内容">
          <template #content>
            <div class="p-4">
              <p class="text-surface-700 dark:text-surface-0 mb-2">
                这是卡片的主体内容区域。
              </p>
              <p class="text-surface-500 dark:text-surface-400">
                支持多行文本和其他 HTML 内容。
              </p>
            </div>
          </template>
        </Card>
        <Card title="操作卡片" subtitle="带有操作按钮">
          <template #content>
            <div class="p-4">
              <p class="text-surface-700 dark:text-surface-0 mb-4">
                卡片可以包含操作按钮。
              </p>
              <Button label="查看详情" />
            </div>
          </template>
        </Card>
      </div>
    `,
  }),
};

export const WithCustomHeader: Story = {
  args: {
    title: "自定义头部",
    subtitle: "自定义头部内容",
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card :title="args.title" :subtitle="args.subtitle">
        <template #header>
          <div class="flex items-center justify-between p-4 border-b border-surface-200 dark:border-surface-700">
            <div>
              <h3 class="font-medium text-lg">自定义头部</h3>
              <p class="text-surface-500 dark:text-surface-400 text-sm">这是自定义的头部内容</p>
            </div>
            <Button icon="pi pi-ellipsis-h" text />
          </div>
        </template>
        <template #content>
          <div class="p-4 text-surface-700 dark:text-surface-0">
            使用 header 插槽可以完全自定义卡片的头部区域。
          </div>
        </template>
      </Card>
    `,
  }),
};

export const WithCustomFooter: Story = {
  args: {
    title: "自定义底部",
    subtitle: "自定义底部内容",
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card :title="args.title" :subtitle="args.subtitle">
        <template #content>
          <div class="p-4 text-surface-700 dark:text-surface-0">
            使用 footer 插槽可以完全自定义卡片的底部区域。
          </div>
        </template>
        <template #footer>
          <div class="flex items-center justify-between p-4 border-t border-surface-200 dark:border-surface-700">
            <span class="text-surface-500 dark:text-surface-400 text-sm">共 5 个项目</span>
            <div class="flex gap-2">
              <Button label="取消" outlined />
              <Button label="确定" />
            </div>
          </div>
        </template>
      </Card>
    `,
  }),
};
