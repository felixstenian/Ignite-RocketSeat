import { Header, Sidebar, Post } from "./components"
import styles from './App.module.css'

const App = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  )
}

export default App
