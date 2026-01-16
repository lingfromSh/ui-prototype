import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "@/volt/Button.vue";

const meta = {
  title: "Volt/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "按钮组件用于触发操作或提交表单。支持多种样式、大小和状态。",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "按钮显示的文本",
      table: {
        category: "Content",
      },
    },
    icon: {
      control: "text",
      description: "图标类名（使用 PrimeIcons）",
      table: {
        category: "Content",
      },
    },
    iconPos: {
      control: "select",
      options: ["left", "right", "top", "bottom"],
      description: "图标位置",
      table: {
        category: "Content",
      },
    },
    loading: {
      control: "boolean",
      description: "是否显示加载状态",
      table: {
        category: "State",
      },
    },
    loadingIcon: {
      control: "text",
      description: "加载状态的图标类名",
      table: {
        category: "Content",
      },
    },
    disabled: {
      control: "boolean",
      description: "是否禁用",
      table: {
        category: "State",
      },
    },
    severity: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "danger",
        "help",
        "contrast",
      ],
      description: "按钮的严重程度/样式",
      table: {
        category: "Appearance",
      },
    },
    size: {
      control: "select",
      options: ["small", "normal", "large"],
      description: "按钮大小",
      table: {
        category: "Appearance",
      },
    },
    outlined: {
      control: "boolean",
      description: "是否为轮廓样式",
      table: {
        category: "Appearance",
      },
    },
    text: {
      control: "boolean",
      description: "是否为文本样式",
      table: {
        category: "Appearance",
      },
    },
    raised: {
      control: "boolean",
      description: "是否为凸起样式",
      table: {
        category: "Appearance",
      },
    },
    rounded: {
      control: "boolean",
      description: "是否为圆角样式",
      table: {
        category: "Appearance",
      },
    },
    fluid: {
      control: "boolean",
      description: "是否为流体宽度",
      table: {
        category: "Layout",
      },
    },
    vertical: {
      control: "boolean",
      description: "是否为垂直布局",
      table: {
        category: "Layout",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    severity: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    severity: "secondary",
  },
};

export const Success: Story = {
  args: {
    label: "Success Button",
    severity: "success",
  },
};

export const Info: Story = {
  args: {
    label: "Info Button",
    severity: "info",
  },
};

export const Warning: Story = {
  args: {
    label: "Warning Button",
    severity: "warning",
  },
};

export const Danger: Story = {
  args: {
    label: "Danger Button",
    severity: "danger",
  },
};

export const Help: Story = {
  args: {
    label: "Help Button",
    severity: "help",
  },
};

export const Contrast: Story = {
  args: {
    label: "Contrast Button",
    severity: "contrast",
  },
};

export const Outlined: Story = {
  args: {
    label: "Outlined Button",
    outlined: true,
  },
};

export const Text: Story = {
  args: {
    label: "Text Button",
    text: true,
  },
};

export const Raised: Story = {
  args: {
    label: "Raised Button",
    raised: true,
  },
};

export const Rounded: Story = {
  args: {
    label: "Rounded Button",
    rounded: true,
  },
};

export const Loading: Story = {
  args: {
    label: "Loading Button",
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: "Small Button",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    label: "Large Button",
    size: "large",
  },
};

export const WithIcon: Story = {
  args: {
    label: "With Icon",
    icon: "pi pi-check",
  },
};

export const WithIconRight: Story = {
  args: {
    label: "Icon Right",
    icon: "pi pi-arrow-right",
    iconPos: "right",
  },
};

export const Fluid: Story = {
  args: {
    label: "Fluid Button",
    fluid: true,
  },
};

export const AllSizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-col gap-4">
        <Button label="Small Button" size="small" />
        <Button label="Normal Button" size="normal" />
        <Button label="Large Button" size="large" />
      </div>
    `,
  }),
};

export const AllSeverities: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-4">
        <Button label="Primary" severity="primary" />
        <Button label="Secondary" severity="secondary" />
        <Button label="Success" severity="success" />
        <Button label="Info" severity="info" />
        <Button label="Warning" severity="warning" />
        <Button label="Danger" severity="danger" />
        <Button label="Help" severity="help" />
        <Button label="Contrast" severity="contrast" />
      </div>
    `,
  }),
};

export const AllStyles: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-4">
        <Button label="Primary" />
        <Button label="Outlined" outlined />
        <Button label="Text" text />
        <Button label="Raised" raised />
        <Button label="Rounded" rounded />
      </div>
    `,
  }),
};

export const WithIcons: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-4">
        <Button label="Left Icon" icon="pi pi-check" iconPos="left" />
        <Button label="Right Icon" icon="pi pi-arrow-right" iconPos="right" />
        <Button label="Top Icon" icon="pi pi-arrow-up" iconPos="top" />
        <Button label="Bottom Icon" icon="pi pi-arrow-down" iconPos="bottom" />
      </div>
    `,
  }),
};

export const States: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-4">
        <Button label="Normal" />
        <Button label="Loading" loading />
        <Button label="Disabled" disabled />
      </div>
    `,
  }),
};
