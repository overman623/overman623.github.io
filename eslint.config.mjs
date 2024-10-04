import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks"; // react-hooks 플러그인 추가

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      plugins: [pluginReactHooks], // react-hooks 플러그인 추가
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",  // Checks rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // 또는 'error'로 변경
    },
  },
  {
    // react 플러그인 설정
    languageOptions: {
      settings: {
        react: {
          version: "detect", // React 버전을 자동으로 감지
        },
      },
    },
    extends: [
      "plugin:react/recommended",
      "plugin:react-hooks/recommended", // react-hooks 추천 설정
    ],
  },
];