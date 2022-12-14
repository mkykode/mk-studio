import cn from 'classnames'
import { ReactNode } from 'react'

import s from './Container.module.css'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={cn(s.root, className)}>{children}</div>
}
