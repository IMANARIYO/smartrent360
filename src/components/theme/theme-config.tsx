/**
 * Theme configuration for consistent styling
 */

export const themeConfig = {
  colors: {
    primary: {
      50: "rgb(240 250 247)",
      100: "rgb(212 237 230)",
      500: "rgb(11 110 79)",
      900: "rgb(4 44 32)",
    },
    accent: {
      50: "rgb(255 253 244)",
      500: "rgb(242 201 76)",
      900: "rgb(140 99 25)",
    },
    neutral: {
      50: "rgb(250 250 250)",
      100: "rgb(245 245 245)",
      200: "rgb(229 229 229)",
      600: "rgb(82 82 82)",
      900: "rgb(23 23 23)",
    },
    semantic: {
      success: "rgb(16 185 129)",
      warning: "rgb(245 158 11)",
      error: "rgb(239 68 68)",
    },
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  radius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
  },
} as const
