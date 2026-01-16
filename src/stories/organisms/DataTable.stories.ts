import type { Meta, StoryObj } from "@storybook/vue3";
import DataTable from "@/volt/DataTable.vue";
import Column from "primevue/column";

const meta = {
  title: "Volt/Organisms/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "数据表格组件用于展示和操作结构化数据。支持分页、排序、筛选等功能。",
      },
    },
  },
  argTypes: {
    value: {
      control: "object",
      description: "表格数据",
      table: {
        category: "Content",
      },
    },
    showGridlines: {
      control: "boolean",
      description: "是否显示网格线",
      table: {
        category: "Appearance",
      },
    },
    stripedRows: {
      control: "boolean",
      description: "是否显示斑马纹",
      table: {
        category: "Appearance",
      },
    },
    scrollable: {
      control: "boolean",
      description: "是否可滚动",
      table: {
        category: "Layout",
      },
    },
    scrollHeight: {
      control: "text",
      description: "滚动高度",
      table: {
        category: "Layout",
      },
    },
    tableStyle: {
      control: "text",
      description: "表格样式",
      table: {
        category: "Appearance",
      },
    },
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  {
    id: 1,
    name: "张三",
    email: "zhangsan@example.com",
    role: "管理员",
    status: "活跃",
  },
  {
    id: 2,
    name: "李四",
    email: "lisi@example.com",
    role: "用户",
    status: "活跃",
  },
  {
    id: 3,
    name: "王五",
    email: "wangwu@example.com",
    role: "用户",
    status: "离线",
  },
  {
    id: 4,
    name: "赵六",
    email: "zhaoliu@example.com",
    role: "用户",
    status: "活跃",
  },
  {
    id: 5,
    name: "钱七",
    email: "qianqi@example.com",
    role: "管理员",
    status: "离线",
  },
];

export const Default: Story = {
  render: () => ({
    components: { DataTable, Column },
    template: `
      <DataTable :value="sampleData">
        <Column field="id" header="ID" />
        <Column field="name" header="姓名" />
        <Column field="email" header="邮箱" />
        <Column field="role" header="角色" />
        <Column field="status" header="状态" />
      </DataTable>
    `,
  }),
};

export const WithGridlines: Story = {
  render: () => ({
    components: { DataTable, Column },
    template: `
      <DataTable :value="sampleData" showGridlines>
        <Column field="id" header="ID" />
        <Column field="name" header="姓名" />
        <Column field="email" header="邮箱" />
        <Column field="role" header="角色" />
        <Column field="status" header="状态" />
      </DataTable>
    `,
  }),
};

export const StripedRows: Story = {
  render: () => ({
    components: { DataTable, Column },
    template: `
      <DataTable :value="sampleData" stripedRows>
        <Column field="id" header="ID" />
        <Column field="name" header="姓名" />
        <Column field="email" header="邮箱" />
        <Column field="role" header="角色" />
        <Column field="status" header="状态" />
      </DataTable>
    `,
  }),
};

export const Scrollable: Story = {
  render: () => ({
    components: { DataTable, Column },
    template: `
      <DataTable :value="sampleData" scrollable scrollHeight="flex">
        <Column field="id" header="ID" />
        <Column field="name" header="姓名" />
        <Column field="email" header="邮箱" />
        <Column field="role" header="角色" />
        <Column field="status" header="状态" />
      </DataTable>
    `,
  }),
};

export const CustomStyle: Story = {
  render: () => ({
    components: { DataTable, Column },
    template: `
      <DataTable :value="sampleData" tableStyle="min-width: 50rem">
        <Column field="id" header="ID" />
        <Column field="name" header="姓名" />
        <Column field="email" header="邮箱" />
        <Column field="role" header="角色" />
        <Column field="status" header="状态" />
      </DataTable>
    `,
  }),
};

export const LargeDataset: Story = {
  render: () => ({
    components: { DataTable, Column },
    setup() {
      const largeData = [
        ...sampleData,
        ...sampleData.map((item, i) => ({
          ...item,
          id: item.id + 5,
          name: `${item.name}${i + 1}`,
        })),
        ...sampleData.map((item, i) => ({
          ...item,
          id: item.id + 10,
          name: `${item.name}${i + 2}`,
        })),
      ];
      return { largeData };
    },
    template: `
      <DataTable :value="largeData" scrollable scrollHeight="flex">
        <Column field="id" header="ID" />
        <Column field="name" header="姓名" />
        <Column field="email" header="邮箱" />
        <Column field="role" header="角色" />
        <Column field="status" header="状态" />
      </DataTable>
    `,
  }),
};
