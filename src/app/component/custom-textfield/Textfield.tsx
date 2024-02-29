import * as React from 'react'
import TextField from '@mui/material/TextField'
import { Box, FormControl, FormLabel } from '@mui/material'

interface DataType {
  label: string
  id?: string
  size?: 'small' | 'medium'
  autoComplete?: any
  InputLabelProps?: any
  className?: any
  color?: 'success' | 'error'
  required?: boolean
  disabled?: boolean
  type?: 'number' | 'text' | 'password' | 'email'
  helperText?: string | boolean
  placeholder?: string
  variant?: 'standard' | 'filled' | 'outlined'
  onChange?: any
  onInput?: any
  FormHelperTextProps?: object
  fullWidth?: boolean
  inputProps?: object
  name?: string
  multiline?: boolean
  maxRows?: number
  value?: string | number | string[]
  sx?: object
  error?: boolean
  defaultValue?: any
  SelectProps?: object
  rows?: number
  labelsx?: object
  topLabel?: string
  // onKeyup?:any
}

const CustomTextField = ({
  id,
  size = 'small',
  label,
  color = 'success',
  InputLabelProps,
  required,
  autoComplete,
  disabled,
  type = 'text',
  className,
  helperText,
  placeholder,
  variant = 'outlined',
  fullWidth,
  defaultValue,
  inputProps,
  onChange,
  onInput,
  value,
  name,
  sx = { minWidth: '328px', maxWidth: '363px' },
  multiline,
  maxRows,
  rows,
  labelsx,
  topLabel,
  ...props
}: DataType) => {
  return (
    <FormControl>
      <FormLabel style={{ fontSize: '12px', fontWeight: '700', color: 'Gray' }} sx={labelsx}>
        {topLabel}
      </FormLabel>
      <TextField
        className={className}
        size={size}
        id={id}
        name={name}
        value={value}
        InputLabelProps={InputLabelProps}
        label={label}
        autoComplete={autoComplete}
        color={color}
        required={required}
        defaultValue={defaultValue}
        type={type}
        multiline={multiline}
        maxRows={maxRows}
        rows={rows}
        disabled={disabled}
        helperText={helperText}
        variant={variant}
        fullWidth={fullWidth}
        inputProps={inputProps}
        onChange={onChange}
        onInput={onInput}
        placeholder={placeholder}
        sx={sx}
        {...props}
      />
    </FormControl>
  )
}

export default CustomTextField
