import anyConfig from 'eslint-config-any';
import { defineConfig } from 'eslint/config';

export default defineConfig([...anyConfig.node]);
