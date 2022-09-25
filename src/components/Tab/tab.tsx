import Link from 'next/link'
import type { FC } from 'react'

const Tab: FC = () => {
  return (
    <>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/photo'>
        <a>Photo</a>
      </Link>
      <Link href='/youtube'>
        <a>Youtube</a>
      </Link>
      <Link href='/other'>
        <a>Other</a>
      </Link>
    </>
  )
}

export default Tab
