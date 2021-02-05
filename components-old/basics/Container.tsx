import classNames from 'classnames'
import { FC } from 'react'

export const Container: FC<{ className?: string }> = ({
  className,
  children,
}) => (
  <div className={classNames('container mx-auto px-5', className)}>
    {children}
  </div>
)
