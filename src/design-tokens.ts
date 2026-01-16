/**
 * 设计令牌（Design Tokens）
 *
 * 设计令牌是 UI 设计系统的核心，定义了所有可重用的设计变量。
 * 这些令牌确保了整个应用的视觉一致性，并且可以轻松地进行主题切换。
 *
 * 使用方式：
 * import { designTokens } from '@/design-tokens';
 *
 * 在 CSS 中使用：
 * color: var(--p-primary-500);
 * spacing: var(--spacing-4);
 */

export const designTokens = {
  // 颜色系统
  colors: {
    primary: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
      950: "#022c22",
    },
    surface: {
      0: "#ffffff",
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
      950: "#09090b",
    },
    semantic: {
      success: "#10b981",
      warning: "#f59e0b",
      danger: "#ef4444",
      info: "#3b82f6",
    },
  },

  // 间距系统
  spacing: {
    0: "0",
    1: "0.25rem", // 4px
    2: "0.5rem", // 8px
    3: "0.75rem", // 12px
    4: "1rem", // 16px
    5: "1.25rem", // 20px
    6: "1.5rem", // 24px
    8: "2rem", // 32px
    10: "2.5rem", // 40px
    12: "3rem", // 48px
    16: "4rem", // 64px
    20: "5rem", // 80px
    24: "6rem", // 96px
  },

  // 字体系统
  typography: {
    fontFamily: {
      sans: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: 'JetBrains Mono, "Fira Code", "Cascadia Code", "Courier New", monospace',
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    lineHeight: {
      tight: "1.25",
      normal: "1.5",
      relaxed: "1.75",
    },
  },

  // 圆角系统
  borderRadius: {
    none: "0",
    sm: "0.25rem", // 4px
    base: "0.375rem", // 6px
    md: "0.5rem", // 8px
    lg: "0.75rem", // 12px
    xl: "1rem", // 16px
    "2xl": "1.5rem", // 24px
    full: "9999px",
  },

  // 阴影系统
  shadow: {
    sm: "0 1px 2px 0 rgba(18, 18, 23, 0.05)",
    base: "0 1px 3px 0 rgba(18, 18, 23, 0.1)",
    md: "0 4px 6px -1px rgba(18, 18, 23, 0.1)",
    lg: "0 10px 15px -3px rgba(18, 18, 23, 0.1)",
    xl: "0 20px 25px -5px rgba(18, 18, 23, 0.1)",
  },

  // 过渡系统
  transition: {
    duration: {
      fast: "150ms",
      base: "200ms",
      slow: "300ms",
    },
    easing: {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
    },
  },

  // 断点系统
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // z-index 系统
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
} as const;

/**
 * 主题配置
 *
 * 主题配置定义了不同主题下的颜色变量。
 * 可以轻松切换主题，而不需要修改组件代码。
 */
export const themes = {
  light: {
    primary: {
      color: "var(--p-primary-500)",
      contrastColor: "var(--p-surface-0)",
      hoverColor: "var(--p-primary-600)",
      activeColor: "var(--p-primary-700)",
    },
    surface: {
      0: "var(--p-surface-0)",
      50: "var(--p-surface-50)",
      100: "var(--p-surface-100)",
      200: "var(--p-surface-200)",
      300: "var(--p-surface-300)",
      400: "var(--p-surface-400)",
      500: "var(--p-surface-500)",
      600: "var(--p-surface-600)",
      700: "var(--p-surface-700)",
      800: "var(--p-surface-800)",
      900: "var(--p-surface-900)",
      950: "var(--p-surface-950)",
    },
    text: {
      color: "var(--p-text-color)",
      hoverColor: "var(--p-text-hover-color)",
      mutedColor: "var(--p-text-muted-color)",
      hoverMutedColor: "var(--p-text-hover-muted-color)",
    },
    border: {
      color: "var(--p-content-border-color)",
      hoverColor: "var(--p-content-hover-color)",
    },
    highlight: {
      background: "var(--p-highlight-background)",
      color: "var(--p-highlight-color)",
      focusBackground: "var(--p-highlight-focus-background)",
      focusColor: "var(--p-highlight-focus-color)",
    },
  },
  dark: {
    primary: {
      color: "var(--p-primary-400)",
      contrastColor: "var(--p-surface-900)",
      hoverColor: "var(--p-primary-300)",
      activeColor: "var(--p-primary-200)",
    },
    surface: {
      0: "var(--p-surface-900)",
      50: "#0f172a",
      100: "var(--p-surface-800)",
      200: "var(--p-surface-700)",
      300: "var(--p-surface-600)",
      400: "var(--p-surface-500)",
      500: "var(--p-surface-400)",
      600: "var(--p-surface-300)",
      700: "var(--p-surface-200)",
      800: "var(--p-surface-100)",
      900: "var(--p-surface-50)",
      950: "var(--p-surface-0)",
    },
    text: {
      color: "var(--p-text-color)",
      hoverColor: "var(--p-text-hover-color)",
      mutedColor: "var(--p-text-muted-color)",
      hoverMutedColor: "var(--p-text-hover-muted-color)",
    },
    border: {
      color: "var(--p-content-border-color)",
      hoverColor: "var(--p-content-hover-color)",
    },
    highlight: {
      background: "var(--p-highlight-background)",
      color: "var(--p-highlight-color)",
      focusBackground: "var(--p-highlight-focus-background)",
      focusColor: "var(--p-highlight-focus-color)",
    },
  },
} as const;

/**
 * 组件尺寸
 *
 * 组件尺寸定义了不同大小组件的尺寸规范。
 */
export const componentSizes = {
  button: {
    small: {
      padding: "0.375rem 0.625rem", // 6px 10px
      fontSize: "0.875rem", // 14px
    },
    normal: {
      padding: "0.5rem 1rem", // 8px 16px
      fontSize: "1rem", // 16px
    },
    large: {
      padding: "0.625rem 1.25rem", // 10px 20px
      fontSize: "1.125rem", // 18px
    },
  },
  input: {
    small: {
      padding: "0.375rem 0.625rem", // 6px 10px
      fontSize: "0.875rem", // 14px
    },
    normal: {
      padding: "0.5rem 1rem", // 8px 16px
      fontSize: "1rem", // 16px
    },
    large: {
      padding: "0.875rem 1.25rem", // 14px 20px
      fontSize: "1.125rem", // 18px
    },
  },
} as const;
