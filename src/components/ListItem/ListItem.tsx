import Image from 'next/image'
import type { FC } from 'react'

type StaticImageData = { src: string; height: number; width: number; blurDataURL?: string }

export interface Props {
  src: string | StaticImageData
  title: string
  tag?: string[]
  text?: string
}

const ListItem: FC<Props> = ({ src, title, tag, text }) => {
  return (
    <div className='mb-8 flex last:mb-0'>
      <div className='mr-4'>
        <Image src={src} width={56} height={56} alt={title} />
      </div>
      <div>
        <h2 className='mb-2 text-sm font-bold'>{title}</h2>
        <p>{tag}</p>
        <p className='mt-2 text-sm leading-normal'>{text}</p>
      </div>
    </div>
  )
}

export default ListItem
