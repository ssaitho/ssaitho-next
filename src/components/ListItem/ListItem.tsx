import Image from 'next/image'
import type { FC } from 'react'
import Tag from '@/components/Tag/Tag'

type StaticImageData = { src: string; height: number; width: number; blurDataURL?: string }

export interface Props {
  src: string | StaticImageData
  title: string
  tags?: {
    id: number
    skill: string
  }[]
  text?: string
}

const listItemClass = 'mb-8 flex last:mb-0'
const listItemImageWrapClass = 'mr-4 min-w-[56px]'
const listItemTitleClass = 'mb-2 text-sm font-bold'
const listImgTextClass = 'mt-2 text-sm leading-normal'
const tagClass = 'mr-2 last:mr-0'

const ListItem: FC<Props> = ({ src, title, tags, text }) => {
  return (
    <div className={listItemClass}>
      <div className={listItemImageWrapClass}>
        <Image src={src} width={56} height={56} alt={title} />
      </div>
      <div>
        <h2 className={listItemTitleClass}>{title}</h2>
        {tags?.map(({ id, skill }) => {
          return <Tag key={id} text={skill} className={tagClass} />
        })}
        <p className={listImgTextClass}>{text}</p>
      </div>
    </div>
  )
}

export default ListItem
