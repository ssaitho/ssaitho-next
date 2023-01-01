import type { NextPage } from 'next'
import Head from 'next/head'
import ListItem from '@/components/ListItem/ListItem'

type StaticImageData = { src: string; height: number; width: number; blurDataURL?: string }
const Home: NextPage = () => {
  const ListItems: {
    id: number
    src: string | StaticImageData
    title: string
    tag?: string[]
    text?: string
  }[] = [
    {
      id: 1,
      src: '/images/img_profile.jpg',
      title: 'デザインシステムの構築',
      tag: ['React.js', 'Storybook', 'FigmaTokens'],
      text: 'ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。',
    },
    {
      id: 2,
      src: '/images/img_profile.jpg',
      title: 'カートシステムのフロントエンド開発',
      tag: ['React.js', 'Storybook', 'FigmaTokens'],
      text: 'ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。',
    },
    {
      id: 3,
      src: '/images/img_profile.jpg',
      title: 'UI/UXデザイナーの経験を活かした施策の提案',
      tag: ['React.js', 'Storybook', 'FigmaTokens'],
      text: 'ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。',
    },
  ]

  return (
    <>
      <Head>
        <title>ssaitho portfolio</title>
      </Head>
      {ListItems.map(({ id, src, title, tag, text }) => {
        return <ListItem key={id} src={src} title={title} tag={tag} text={text} />
      })}
    </>
  )
}

export default Home
