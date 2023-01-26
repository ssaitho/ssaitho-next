import Head from 'next/head'
import Link from 'next/link'
import React, { FC } from 'react'
import { getAllPostIds, getPostData } from '../../../lib/posts'
import Date from '@/components/Date/date'

type Props = {
  postData: {
    title: string
    id: number
    date: string
    contentHtml: string
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

const blogTitleClass = 'mb-4 text-2xl font-bold leading-normal'
const blogPostdDateClass = 'mb-8 text-xs text-gray-400'
const blogContentClass = '[&>p]:mb-4 [&>p:last-child]:mb-0 leading-relaxed text-sm'
const blogBackLinkClass = 'block mt-8 text-sm'

const Post: FC<Props> = ({ postData }) => {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h2 className={blogTitleClass}>{postData.title}</h2>
      <p className={blogPostdDateClass}>
        <Date dateString={postData.date} />
      </p>
      <div
        className={blogContentClass}
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
      <Link href={`/blog`}>
        <a className={blogBackLinkClass}>←&nbsp;ブログトップへ戻る</a>
      </Link>
    </>
  )
}

export default Post
