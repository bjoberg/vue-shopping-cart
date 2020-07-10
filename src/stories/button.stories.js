import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Button from '../components/Button.vue';

export default {
  component: Button,
  title: "Button",
  decorators: [withKnobs]
}

export const defaults = () => ({
  components: { Button },
  props: {
    title: {
      default: text('title', 'Default')
    },
    enableColorBlindMode: {
      default: boolean("enableColorBlindMode", false)
    }
  },
  methods: { onClick: action('clicked') },
  template: `
    <div>
      <Button @on-click="onClick" :title="title" variant="primary" :enableColorBlindMode="enableColorBlindMode" />
      <Button @on-click="onClick" :title="title" variant="secondary" :enableColorBlindMode="enableColorBlindMode" />
      <Button @on-click="onClick" :title="title" isDisabled :enableColorBlindMode="enableColorBlindMode" />
    </div>
  `,
});