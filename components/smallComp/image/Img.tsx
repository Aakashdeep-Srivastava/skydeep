import React from 'react'

interface ImgProps {
  src: string;
  alt: string;
  className?: string;
}

export default function Img(props: ImgProps) {
  return (

        // eslint-disable-next-line @next/next/no-img-element
        <img src={props.src} alt={props.alt} className={props.className} />
  )
}
