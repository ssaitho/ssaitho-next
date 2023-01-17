import type { NextPage } from 'next'
import Head from 'next/head'
import ListItem from '@/components/ListItem/ListItem'

export type StaticImageData = { src: string; height: number; width: number; blurDataURL?: string }
export const Home: NextPage = () => {
  const ListItems: {
    id: number
    src: string | StaticImageData
    title: string
    tags?: {
      id: number
      skill: string
    }[]
    text?: string
  }[] = [
    {
      id: 1,
      src: '/images/img_top_01.png',
      title: 'デザインシステムの構築',
      tags: [
        { id: 1, skill: 'React.js' },
        { id: 2, skill: 'Storybook' },
        {
          id: 3,
          skill: 'FigmaTokens',
        },
      ],
      text: 'ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。',
    },
    {
      id: 2,
      src: '/images/img_top_02.png',
      title: 'カートシステムのフロントエンド開発',
      tags: [
        { id: 1, skill: 'React.js' },
        { id: 2, skill: 'Storybook' },
        {
          id: 3,
          skill: 'FigmaTokens',
        },
      ],
      text: 'ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。',
    },
    {
      id: 3,
      src: '/images/img_top_03.png',
      title: 'UI/UXデザイナーの経験を活かした施策の提案',
      tags: [
        { id: 1, skill: 'React.js' },
        { id: 2, skill: 'Storybook' },
        {
          id: 3,
          skill: 'FigmaTokens',
        },
      ],
      text: 'ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。',
    },
  ]

  return (
    <>
      <Head>
        <title>ssaitho portfolio</title>
      </Head>
      {ListItems.map(({ id, src, title, tags, text }) => {
        return <ListItem key={id} src={src} title={title} tags={tags} text={text} />
      })}
    </>
  )
}

export default Home
