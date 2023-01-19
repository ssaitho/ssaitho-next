import Head from 'next/head'
import Link from 'next/link'
import React, { FC } from 'react'
import { getAllPostIds, getPostData } from '../../../lib/posts'
import Date from '../../components/Date/date'

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

const Post: FC<Props> = ({ postData }) => {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div>
        {postData.title}
        <br />
        {postData.id}
        <br />
        <Date dateString={postData.date} />
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
      <Link href={`/blog`}>
        <a>ブログトップへ戻る</a>
      </Link>
    </>
  )
}

export default Post
