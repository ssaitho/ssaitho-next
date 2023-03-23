import Image from 'next/image'
import { useTheme } from 'next-themes'
import React, { useState, useEffect, FC } from 'react'

type Props = {
  className: string
}

const buttonClass = 'w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md'

export const ChangeThemeButton: FC<Props> = ({ className = '' }) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => setMounted(true), [])

  return (
    <>
      <button
        aria-label='DarkModeToggle'
        type='button'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && (
          <>
            {theme === 'dark' ? (
              <button className={`${buttonClass} ${className}`}>
                <Image
                  quality={100}
                  src={'/images/img_dark_mode.png'}
                  width={24}
                  height={24}
                  alt='dark mode'
                />
              </button>
            ) : (
              <button className={`${buttonClass} ${className}`}>
                <Image
                  quality={100}
                  src={'/images/img_light_mode.png'}
                  width={24}
                  height={24}
                  alt='light mode'
                />
              </button>
            )}
          </>
        )}
      </button>
    </>
  )
}
