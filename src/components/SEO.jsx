import React from 'react'
import Head from 'next/head'

export default function SEO() {
  return (
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1  maximum-scale=1, user-scalable=0'
      />
      <meta charSet='utf-8' />
      <title>CONUN | Connect On New Universal Networks</title>

      <meta
        name='description'
        content="CONUN is a blockchain-based decentralized storage network. It is a service platform that collects world wide storage by sharing the idle resources of the participants' personal computers."
      />
      <meta
        name='keywords'
        content='코넌, 오션드라이브, 코넌코리아, 코넌 글로벌, conun, conun korea, oceandrive, ocean drive, conun global'
      />
      <meta property='og:type' content='website' />
      <meta
        property='og:title'
        content='CONUN | Connect On New Universal Networks'
        key='ogtitle'
      />
      <meta
        property='og:description'
        content="CONUN is a blockchain-based decentralized storage network. It is a service platform that collects world wide storage by sharing the idle resources of the participants' personal computers."
        key='ogdesc'
      />
      <meta property='og:site_name' content='CONUN' key='ogsitename' />
      <meta property='og:image' content='/images/seo.jpg' key='ogimage' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:title'
        content='CONUN | Connect On New Universal Networks'
      />
      <meta
        name='twitter:description'
        content="CONUN is a blockchain-based decentralized storage network. It is a service platform that collects world wide storage by sharing the idle resources of the participants' personal computers."
      />
      <meta name='twitter:site' content='CONUN' />
      <meta name='twitter:creator' content='CONUN' />
      <meta name='twitter:image' content='/images/seo.jpg' />
      <meta
        name='naver-site-verification'
        content='06dec53f28980c6983321de3b4f1807fc8cfb336'
      />
      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-DP03G0MJXZ'
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-DP03G0MJXZ');
                    `
        }}
      />
      <link rel='icon' href='/favicon.png' />
    </Head>
  )
}
