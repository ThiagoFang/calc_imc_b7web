import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.main}>
        <header>
          <div className={styles.headerContainer}>
            <img src={require('./assets/powered.png')}/>
          </div>
        </header>
        <section className={styles.container}>
          <div className={styles.leftSide}>
            ...
          </div>
          <div className={styles.rightSide}>
            ...
          </div>
        </section>
    </div>
  )
}

export default App