import style from './Header.module.css'
import igniteLogo from '../assets/Ignite-logo.svg'

export const Header = () => {
  return (
    <header className={style.header}>
      <img src={igniteLogo} alt='Logo do Ignite' />
      <strong>Ignite Feed</strong>
    </header>
  )
}
