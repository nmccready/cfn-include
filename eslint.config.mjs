import globals from "globals";
import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import mochaPlugin from "eslint-plugin-mocha";

export default defineConfig([
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.commonjs,
        ...globals.node,
      },
    },
    plugins: {
      js,
      mocha: mochaPlugin,
    },
    rules: {
      ...mochaPlugin.configs.recommended.rules,
      "mocha/no-setup-in-describe": "off",
      "no-unused-vars": "warn",
      "comma-dangle": ["error", "always-multiline"],
    },
    ignores: [
      'node_modules',
      'node_modules/**/*.js',
      'dist',
      'lib',
      'tmp',
    ]
  },
]);
