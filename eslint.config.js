// eslint.config.js
import cypress from "eslint-plugin-cypress";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        window: true,
        document: true,
        navigator: true,
        cy: true,
        Cypress: true,
        require: true,
        module: true,
        process: true,
        __dirname: true,
        console: true,
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
      },
    },
    plugins: {
      cypress,
    },
    rules: {
      // Aquí puedes poner reglas específicas o dejar vacío para usar reglas por defecto
    },
  },
];
