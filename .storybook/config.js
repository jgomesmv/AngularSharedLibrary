import { configure } from '@storybook/angular';

// automatically import all files ending in *.stories.ts
configure(require.context('../projects/shared-components/src/stories', true, /\.stories\.ts$/), module);
