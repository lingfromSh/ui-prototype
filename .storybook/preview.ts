import type { Preview } from "@storybook/vue3";
import PrimeVue from "primevue/config";
import "@/assets/base.css"; // 包含 Tailwind 和 CSS 变量

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story) => ({
      setup() {
        return { story, PrimeVue };
      },
      template: `
        <PrimeVue :unstyled="true">
          <div class="p-4">
            <story />
          </div>
        </PrimeVue>
      `,
    }),
  ],
};

export default preview;
