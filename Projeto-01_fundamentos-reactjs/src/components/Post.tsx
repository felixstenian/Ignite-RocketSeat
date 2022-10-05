import style from './Post.module.css'

export const Post = () => {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <img className={style.avatar} src='https://github.com/felixstenian.png' />
          <div className={style.authorInfo}>
            <strong>Stenian Felix</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='04 de Outubro às 21:22' dateTime='2022-10-04 21:21:00'>Publicado há 1h</time>
      </header>
      
      <div className={style.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href='#'>jane.design/doctorcare</a></p>
        <p>
          <a href='#'>#novoprojeto</a>
          <a href='#'>#nlw</a> 
          <a href='#'>#rocketseat</a>
        </p>
      </div>
    </article>
  )
}
