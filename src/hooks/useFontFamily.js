import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useFontFamily = () => {
  const [font, setFont] = useState('Poppins')
  const router = useRouter()

  useEffect(() => {
    console.log('listern')
    if (router.locale === 'en') {
      setFont('Poppins')
    } else {
      setFont('NotoSansKR')
    }
  }, [router.locale])

  return {
    fontFamily: font
  }
}
