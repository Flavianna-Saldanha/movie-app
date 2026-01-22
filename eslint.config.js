import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import { defineConfig, globalIgnores } from "eslint/config"

export default defineConfig([
	globalIgnores([
		"dist",
		"node_modules",
	]),

	{
		files: ["**/*.{ts,tsx}"],

		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
		],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: globals.browser,
		},

		rules: {
			"no-undef": "error",
			"no-unreachable": "error",
			"no-duplicate-imports": "error",
			"eqeqeq": ["error", "always"],
			"no-var": "error",
			"prefer-const": "warn",
			"quotes": ["error", "double"],              
			"jsx-quotes": ["error", "prefer-double"], 
			"semi": ["error", "always"],
			"indent": ["error", "tab"],
			"object-curly-spacing": ["error", "always"],
			"arrow-spacing": ["error", { before: true, after: true }],
			"comma-dangle": ["error", "always-multiline"],
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{ argsIgnorePattern: "^_" },
			],
			"@typescript-eslint/no-explicit-any": "warn",
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",
		},
	},
])
