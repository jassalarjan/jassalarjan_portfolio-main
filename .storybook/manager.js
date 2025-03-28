import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './icon.svg',
    brandTitle: 'Arjan SIngh Jassal Projects',
    brandUrl: 'https://arjansinghjassal.xyz',
  },
});
