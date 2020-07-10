import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs';

import Button from '../components/Button.vue';

export default {
  component: Button,
  title: "Button",
  decorators: [withKnobs]
}

export const primary = () => ({
  components: { Button },
  props: {
    title: {
      default: text('Text', 'Default')
    }
  },
  methods: { onClick: action('clicked') },
  template: `
    <div>
      <Button @on-click="onClick" :title="title" variant="primary" />
      <Button @on-click="onClick" :title="title" variant="secondary" />
      <Button @on-click="onClick" :title="title" isDisabled />
    </div>
  `,
})