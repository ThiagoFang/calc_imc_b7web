import { useState } from 'react'
import { levels, calculateImc } from './helpers/imc'

import {GridItem} from './components/GridItem'
import styles from './App.module.css'

const App = () => {
  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)

  const [disabled, setDisabled] = useState<boolean>(false)

  const handleCalculateButton = () => {
    if(heightField > 0 && weightField > 0) {

      setDisabled(true)
    } else {
      alert('digite todos os valores')
    }
  }

  return (
    <div className={styles.main}>
        <header>
          <div className={styles.headerContainer}>
            <img src={require('./assets/powered.png')}/>
          </div>
        </header>
        <section className={styles.container}>
          <div className={styles.leftSide}>
            <h1>Calcule o seu IMC</h1>
            <p>
              IMC é a sigla para índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde
              para calcular o peso ideal de cada pessoa
            </p>

            <input 
              placeholder='Digite a sua altura. Ex: 1.5(em métros)'
              type="number"
              disabled={disabled}
              value={heightField > 0 ? heightField : ''}
              onChange={e => setHeightField(parseFloat(e.target.value))}  
            />

            <input 
              placeholder='Digite o seu peso. Ex: 60.4(em kg)'
              type="number"
              disabled={disabled}
              value={weightField > 0 ? weightField : ''}
              onChange={e => setWeightField(parseFloat(e.target.value))}  
            />

            <button onClick={handleCalculateButton}>Calcular</button>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item}/>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}

export default App