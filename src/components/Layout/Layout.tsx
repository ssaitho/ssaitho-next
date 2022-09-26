import React, { FC } from 'react'
import Profile from '@/components/Profile/profile'
import Tabs from '@/components/Tabs/Tabs'

type Props = {
  children?: React.ReactNode
}

const mainClass = 'm-auto max-w-[672px] px-8 pt-16'

const Layout: FC<Props> = ({ children }) => {
  return (
    <main className={mainClass}>
      <section className='mb-14'>
        <Profile />
      </section>
      <section>
        <Tabs />
        <div className='mt-8'>{children}</div>
      </section>
    </main>
  )
}

export default Layout
