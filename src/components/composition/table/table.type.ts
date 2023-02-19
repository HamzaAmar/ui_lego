import { ReactNode, TableHTMLAttributes } from 'react';

type Variant = 'default' | 'striped' | 'soft' | 'head-color'
type Color = 'primary' | 'secondary' | 'danger' | 'success' | 'purple' | 'mint' | 'indigo' | 'slate' | 'yellow'
type Size = 'sm' | 'md' | 'lg'
type Type = 'head' | 'body'
type Weight = 'thin' | 'extra-light' | 'light' | 'normal' | 'medium' | 'semi-bold' | 'bold' | 'extra-bold' | 'black'

// type Border = "none" | 'soft';

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  variant?: Variant
  color?: Color
  showBorder?: boolean
  size?: Size
  children: ReactNode
}

export interface TableColumnProps {
  weight?: Weight
}
export interface TableRowProps {
  children: ReactNode
  type?: Type
}
