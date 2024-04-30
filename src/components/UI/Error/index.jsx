import cls from './style.module.scss'

export default function Error({ title, text, img }) {
  return (
    <div className={cls.box}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}
