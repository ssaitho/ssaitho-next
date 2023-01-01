import type { FC } from 'react'

type Props = {
  className?: string
  text: string
}

const tagClass =
  'font-montserrat border border-blue-500 rounded-full text-blue-500 text-xs py-0.5 px-2 font-medium'

const Tag: FC<Props> = ({ className = '', text }) => {
  return <span className={`${tagClass} ${className}`}>{text}</span>
}

export default Tag
