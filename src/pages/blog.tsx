import Head from 'next/head'
import type { FC } from 'react'
import { getSortedPostsData } from '../../lib/posts'
import BlogListItem from '@/components/BlogListItem/BlogListItem'

type Props = {
  allPostsData: {
    id: string
    title: string
    date: string
  }[]
}

const blogListClass = 'mb-8 last:mb-0'

const Blog: FC<Props> = ({ allPostsData }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <ul>
        {allPostsData.map(({ id, title, date }) => (
          <li key={id} className={blogListClass}>
            <BlogListItem id={id} title={title} date={date} />
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default Blog
