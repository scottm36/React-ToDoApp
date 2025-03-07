# React-ToDoApp [![React demo](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/count/fqoeb2&style=flat-square&logo=cypress)](https://cloud.cypress.io/projects/fqoeb2/runs) [![Cypress Tests](https://github.com/scottm36/React-ToDoApp/actions/workflows/cypress.yml/badge.svg)](https://github.com/scottm36/React-ToDoApp/actions/workflows/cypress.yml) [![CodeQL Advanced](https://github.com/scottm36/React-ToDoApp/actions/workflows/codeql.yml/badge.svg)](https://github.com/scottm36/React-ToDoApp/actions/workflows/codeql.yml) 

# React + TypeScript + Vite + Cypress

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

TODO:  Try TanStack

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Run Cypress
CI workflow automatically runs Cypress tests on push to main branch and pull requests.

Locally, you can run Cypress using:

```bash
npm run cy:open  # Opens Cypress Test Runner
npm run cy:run   # Runs Cypress tests headlessly
```

Todo:
  - [X] Add cypress (`npm install cypress @testing-library/cypress --save-dev`)
  - [X] Add cypress config with TypeScript support
    - Create `cypress.config.ts`
    - Update `tsconfig.json` for Cypress types
  - [X] Add cypress commands with TypeScript
    - Set up `cypress/support/commands.ts`
    - Configure `cypress/support/e2e.ts`
  - [X] Add cypress tests with `.cy.ts` extension 
  - [ ] Add cypress fixtures
  - [ ] Add Component Testing.

Example TypeScript configuration for Cypress:

```typescript
// cypress.config.ts
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
```

```bash
npm run cy:open
```

```bash
npm run cy:run
```
