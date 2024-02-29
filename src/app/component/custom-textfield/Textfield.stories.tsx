import * as React from 'react'
import CustomTextField from '../custom-textfield/Textfield'
import AccountCircle from '@mui/icons-material/AccountCircle'
import InputAdornment from '@mui/material/InputAdornment'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'component/Textfield',
  component: CustomTextField
}
const Template: ComponentStory<typeof CustomTextField> = (args) => <CustomTextField {...args} />

export const standard = Template.bind({})
standard.args = {
  id: 'standard-basic',
  variant: 'standard',
  label: 'standard',
  size: 'small'
}

export const filled = Template.bind({})
filled.args = {
  id: 'filled-basic',
  variant: 'outlined',
  label: 'filled',
  size: 'small'
}

export const Required = Template.bind({})
Required.args = {
  id: 'required',
  required: true,
  label: 'Required',
  size: 'small',
  color: 'success'
}

export const multiline = Template.bind({})
multiline.args = {
  id: 'multiline',
  required: true,
  multiline: true,
  label: 'multiline',
  size: 'small',
  rows: 4,
  color: 'success'
}

export const Disabled = Template.bind({})
Disabled.args = {
  id: 'disabled',
  disabled: true,
  label: 'Disabled',
  size: 'small',
  sx: { minWidth: '328px', maxWidth: '363px' }
}

export const Number = Template.bind({})
Number.args = {
  id: 'outlined-number',
  label: 'Number',
  type: 'number',
  size: 'small',
  color: 'success'
}

export const Text = Template.bind({})
Text.args = {
  id: 'text',
  label: 'text',
  type: 'text',
  sx: { minWidth: '328px', maxWidth: '363px' },
  size: 'small',
  color: 'success'
}

export const helperText = Template.bind({})
helperText.args = {
  id: 'outlined-helperText',
  label: 'Helper text',
  defaultValue: 'Default Value',
  helperText: 'Some important text',
  sx: { minWidth: '328px', maxWidth: '363px' },
  size: 'small',
  color: 'success'
}
export const Validdation = Template.bind({})
Validdation.args = {
  id: 'filled-error',
  label: 'Error',
  helperText: 'Error Message',
  defaultValue: '',
  variant: 'outlined',
  sx: { minWidth: '328px', maxWidth: '363px' },
  size: 'small',
  color: 'error'
}
export const Icon = Template.bind({})
Icon.args = {
  id: 'icon',
  label: 'icon',
  defaultValue: '',
  variant: 'standard',
  sx: { minWidth: '328px', maxWidth: '363px' },
  size: 'small',
  color: 'error',
  InputProps: {
    startAdornment: (
      <InputAdornment position="start">
        <AccountCircle />
      </InputAdornment>
    )
  }
}

export const Placeholder = Template.bind({})
Placeholder.args = {
  id: 'outlined-textarea',
  label: 'placeholder',
  defaultValue: 'Hello',
  variant: 'outlined',
  size: 'small',
  sx: { minWidth: '328px', maxWidth: '363px' },
  color: 'error'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'input',
  size: 'small',
  sx: { minWidth: '328px', maxWidth: '363px' },
  color: 'success'
}

export const Large = Template.bind({})
Large.args = {
  label: 'input',
  size: 'small',
  sx: { minWidth: '328px', maxWidth: '363px' },
  color: 'success'
}

export const Small = Template.bind({})
Small.args = {
  label: 'input',
  size: 'small',
  sx: { minWidth: '328px', maxWidth: '363px' },
  color: 'success'
}

export const fullWidth = Template.bind({})
standard.args = {
  fullWidth: true,
  topLabel: 'Enter the Name',
  label: 'input',
  size: 'small'
}
