import Error from 'components/UI/Error'

export default function Custom502() {
  return (
    <Error
      title='Server is being updated'
      text='Please wait.'
      img='/images/500.svg'
    />
  )
}
