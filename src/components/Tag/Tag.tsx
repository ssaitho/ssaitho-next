import type { FC } from 'react'

type Props = {
  className?: string
  text: string
}

const tagClass = 'border border-blue-500 rounded-full text-blue-500 text-xs px-2 font-medium'

const Tag: FC<Props> = ({ className = '', text }) => {
  return <span className={`${tagClass} ${className}`}>{text}</span>
}

export default Tag
