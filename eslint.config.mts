import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";

export default [
  // Ignore build output
  {
    ignores: ["dist", "build", "coverage"],
  },

  // Base JS rules
  js.configs.recommended,

  // ---------------------------------------------
  // TypeScript + React (TYPE-AWARE, src only)
  // ---------------------------------------------
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      // 🔑 THIS WAS MISSING
      "@typescript-eslint": tseslint.plugin,
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
      prettier,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // React
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",

      // Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Imports
      "import/prefer-default-export": "off",

      // TypeScript
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",

      // Misc
      "no-console": "warn",
      "prettier/prettier": "warn",
    },
  },

  // Config files (non-type-aware)
  {
    files: ["*.config.ts", "*.config.js", "vitest.setup.ts"],
    languageOptions: {
      parserOptions: {
        project: null,
      },
    },
  },
];
