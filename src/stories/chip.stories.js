import { withKnobs, text } from '@storybook/addon-knobs';

import Chip from '../components/Chip.vue';

export default {
  component: Chip,
  title: "Chip",
  decorators: [withKnobs]
}

export const primary = () => ({
  components: { Chip },
  props: {
    title: {
      default: text('Text', 'Default')
    }
  },
  template: `
    <div>
      <Chip :title="title" />
    </div>
  `,
})