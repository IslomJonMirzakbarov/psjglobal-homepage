import cls from './style.module.scss'

export default function Error({ title, text, img }) {
  return (
    <div className={cls.box}>
      <h2>{title}</h2>
      <p>{text}</p>
      <img src={img} alt={title} />
    </div>
  )
}
