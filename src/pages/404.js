import Error from 'components/UI/Error'

export default function Custom404() {
  return (
    <Error
      title='404 Error'
      text='Sorry, the page not found'
      img='/images/404.svg'
    />
  )
}
