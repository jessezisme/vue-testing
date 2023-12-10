import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*', 'cypress/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      // globals: true,
      /*
      browser: {
        enabled: true,
        name: 'chrome', // browser name is required
        provider: 'webdriverio'
      },
      */
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  })
);
