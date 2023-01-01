import { Html, Head, Main, NextScript } from 'next/document'

const fontFamilyClass = 'font-notosansjp'

const MyDocument = () => {
  return (
    <Html lang='ja-JP'>
      <Head>
        <meta name='description' content='ssaitho portfolio' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <body className={fontFamilyClass}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
