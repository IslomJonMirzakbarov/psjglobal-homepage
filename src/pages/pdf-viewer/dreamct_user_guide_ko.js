import Head from 'next/head'

const DreamctUserGuideKO = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <iframe
        src="/dreamct_user_guide_ko.pdf"
        width="100%"
        height="100%"
        style={{
          border: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          margin: 0,
        }}
      ></iframe>
    </>
  )
}

export default DreamctUserGuideKO
