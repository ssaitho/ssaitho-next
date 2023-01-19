import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
import { getSortedPostsData } from '../../lib/posts'
import Date from '../components/Date/date'

type Props = {
  allPostsData: {
    id: string
    title: string
    date: string
  }[]
}

const Blog: FC<Props> = ({ allPostsData }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id} className='mb-8 last:mb-0'>
            <article>
              <Link href={`/posts/${id}`}>
                <a>
                  <h2 className='mb-2 text-base font-bold'>{title}</h2>
                </a>
              </Link>
              <p className='text-xs text-gray-400'>
                <Date dateString={date} />
              </p>
            </article>
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
