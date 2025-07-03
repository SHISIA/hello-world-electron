# Hello World Electron App

This is a minimal Electron application built with React, TypeScript, and Vite.

## Features

- React + TypeScript + Vite for the frontend
- Electron for the desktop application
- macOS notarization support

## macOS Notarization

For distributing macOS applications, Apple requires apps to be notarized. This project includes support for notarization, but requires Apple Developer credentials.

### Setting up Notarization

1. Create a `.env` file in the project root (or edit the existing one)
2. Add the following environment variables:
   ```
   APPLE_ID=your.apple.id@example.com
   APPLE_APP_SPECIFIC_PASSWORD=your-app-specific-password
   APPLE_TEAM_ID=your-team-id
   ```

If these credentials are not provided, the notarization step will be skipped during the build process.

### Obtaining the Required Credentials

- **Apple ID**: Your Apple Developer account email
- **App-Specific Password**: Generate from [Apple ID Account Page](https://appleid.apple.com/account/manage)
- **Team ID**: Find in your [Apple Developer Account](https://developer.apple.com/account) under Membership Details

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
