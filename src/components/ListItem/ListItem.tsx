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
    <>
      <div>
        <Image src={src} width={56} height={56} alt='hoge' />
        <h2>{title}</h2>
        <p>{tag}</p>
        <p>{text}</p>
      </div>
    </>
  )
}

export default ListItem
