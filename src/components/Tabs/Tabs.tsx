import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

export type TabLink = {
  label: string
  href: string
}

const tabsLink: TabLink[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/photo',
    label: 'Photo',
  },
  {
    href: '/youtube',
    label: 'Youtube',
  },
  {
    href: '/other',
    label: 'Other',
  },
]

const tabsClass = 'font-montserrat flex border-b border-gray-200 text-sm'
const activeClass = 'w-full border-b-2 border-blue-500 p-2 text-center font-medium text-blue-500'
const inactiveClass =
  'w-full border-b-2 border-transparent p-2 text-center font-medium text-gray-400'

const Tabs: FC = () => {
  const router = useRouter()
  return (
    <div className={tabsClass}>
      {tabsLink.map((tabLink) => (
        <Link key={tabLink.label} href={tabLink.href}>
          <a className={router.pathname === tabLink.href ? activeClass : inactiveClass}>
            {tabLink.label}
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Tabs
