import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";

export default [
  {
    ignores: ["node_modules", "dist", "build", "coverage"],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
      prettier,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      /* React */
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",

      /* Hooks */
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      /* Imports */
      "import/prefer-default-export": "off",

      /* TypeScript ergonomics */
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],

      /* Console usage */
      "no-console": "warn",

      /* Prettier */
      "prettier/prettier": "warn",
    },
  },
];
