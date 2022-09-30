import style from './Sidebar.module.css'

export const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <img 
        className={style.cover} 
        src='https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=380&q=50' 
      />
      <div className={style.profile}>
        <strong>Felix</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href='#'>Editar seu perfil</a>
      </footer>
    </aside>
  )
}
