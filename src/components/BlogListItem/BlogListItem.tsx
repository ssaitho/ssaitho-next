import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import Date from '../../components/Date/date'

export interface Props {
  id: string
  title: string
  date: string
}

const bloglistItemClass = 'flex'
const bloglistItemImageWrapClass = 'mr-4 min-w-[56px]'
const bloglistItemTitleClass = 'mb-2 text-base font-bold'
const bloglistItemDateClass = 'text-xs text-gray-400'

const BlogListItem: FC<Props> = ({ id, title, date }) => {
  return (
    <article className={bloglistItemClass}>
      <div className={bloglistItemImageWrapClass}>
        <Link href={`/posts/${id}`}>
          <a>
            <Image src={'/images/img_blog_01.png'} width={56} height={56} alt={title} />
          </a>
        </Link>
      </div>
      <div>
        <Link href={`/posts/${id}`}>
          <a>
            <h2 className={bloglistItemTitleClass}>{title}</h2>
          </a>
        </Link>
        <p className={bloglistItemDateClass}>
          <Date dateString={date} />
        </p>
      </div>
    </article>
  )
}

export default BlogListItem
