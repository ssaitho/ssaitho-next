import Image from 'next/image'
import React, { FC, useMemo } from 'react'

export type Variant = 'github' | 'twitter' | 'qiita'

export interface Props {
  variant?: Variant
  className?: string
}

const iconButtonClass = 'w-14 h-14 rounded-full inline-flex items-center justify-center'
const githubBgClass = 'bg-github-default hover:bg-github-hover'
const twitterBgClass = 'bg-twitter-default hover:bg-twitter-hover'
const qiitaBgClass = 'bg-qiita-default hover:bg-qiita-hover'

const IconButton: FC<Props> = ({ variant = 'github', className = '' }) => {
  const { iconButtonBgClass, iconButtonIcon } = useMemo(() => {
    switch (variant) {
      case 'github':
        return {
          iconButtonBgClass: githubBgClass,
          iconButtonIcon: (
            <Image src={'/images/logo_github.png'} width={24} height={24} alt='github' />
          ),
        }
      case 'twitter':
        return {
          iconButtonBgClass: twitterBgClass,
          iconButtonIcon: (
            <Image src={'/images/logo_twitter.png'} width={24} height={24} alt='twitter' />
          ),
        }
      case 'qiita':
        return {
          iconButtonBgClass: qiitaBgClass,
          iconButtonIcon: (
            <Image src={'/images/logo_qiita.png'} width={24} height={24} alt='qiita' />
          ),
        }
    }
  }, [variant])

  return (
    <button className={`${iconButtonClass} ${iconButtonBgClass} ${className}`}>
      {iconButtonIcon}
    </button>
  )
}

export default IconButton
