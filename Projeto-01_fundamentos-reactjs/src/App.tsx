import { Header, Sidebar } from "./components"
import styles from './App.module.css'
const App = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates quae minima fugiat possimus quisquam at quibusdam! Eligendi qui veritatis corporis, vitae pariatur hic. Officia quasi deserunt earum obcaecati alias.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo labore tenetur optio hic magnam quibusdam dolore inventore, neque mollitia cupiditate autem exercitationem nemo beatae adipisci blanditiis cum sed provident facere?</p>
        </main>
      </div>
    </>
  )
}

export default App
