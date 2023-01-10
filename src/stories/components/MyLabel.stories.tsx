import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
   title: 'UI/Etiquetas/MyLabel',
   component: MyLabel,
   argTypes: {
      size: { control: 'select' },
      color: { control: 'select' },
      fontColor: { control: 'color' }
   }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
   size: 'nomal',
   allCaps: false
}

export const AllCaps = Template.bind({});
AllCaps.args = {
   size: 'nomal',
   allCaps: true //true: capitalizar toda la palabra
}

export const Secondary = Template.bind({});
Secondary.args = {
   size: 'nomal',
   color: 'secondary' //primary | secondary | tertiary
}

export const Tertiary = Template.bind({});
Tertiary.args = {
   size: 'nomal',
   color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
   size: 'h1',
   fontColor: '#5517AC'
}