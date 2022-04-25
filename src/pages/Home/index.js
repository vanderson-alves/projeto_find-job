import './home.css'
import predios from '../../assets/predios.jpg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import firebase from '../../services/firebaseConnection'
import { UserContext } from '../../contexts/user'
import { useContext } from 'react'

export default function Home() {
    const {tituloDaVaga, empresaContratante, salarioOferecido} = useContext(UserContext)
    const [minhasVagas, setVagas] = useState([])

    const [busca, setBusca] = useState('')

    useEffect(() => {
        async function loadVagas(){
            await firebase.firestore().collection('vagas-disponiveis')
            .onSnapshot((doc)=>{
                let minhasVagas = []

                doc.forEach((item) => {
                    minhasVagas.push({
                        id: item.id,
                        tituloDaVaga: item.data().tituloDaVaga,
                        empresaContratante: item.data().empresaContratante,
                        salarioOferecido: item.data().salarioOferecido
                    })
                })

                setVagas(minhasVagas)
            })
        }

        loadVagas()

    }, [])

    
    
        async function filtrarVagas(){

            setVagas(minhasVagas.filter((vaga)=> vaga.tituloDaVaga.includes(busca)))
            
        }


    return (
        <>
      <div className='container-home'>

          <div className='background-img'>
              
          </div>

          <div className='texto-banner'>
              <h1>Encontre o emprego dos seus sonhos</h1>
              <p>Somos o site com mais vagas de tecnologia no mercado, direcionadas a home office.</p>
          </div>

          <div className='input-banner'>
              <form onSubmit={filtrarVagas}>
                <input type="text" value={busca} onChange={(e)=> setBusca(e.target.value)} placeholder='Digite a vaga que está buscando'></input>
                <button>Procurar</button>
             </form>
          </div>        

      </div>


        <div className='container-vagas'>
        
            <div>
                <h1>Veja as nossas vagas em destaque</h1>


                <ul>
                    {minhasVagas.map((vagas) => {
                        return(
                            <>   
                                <li key={vagas.id} className='caixa-vagas'>
                                    <div>
                                        <img src={predios}/>
                                    </div>

                                    <div>
                                        <p>{vagas.empresaContratante}</p>
                                        <h1>{vagas.tituloDaVaga}</h1>
                                        <p>R$ {vagas.salarioOferecido}</p>
                                    </div>

                                    <div>
                                        <Link to={`/ver-vagas/${vagas.id}`}>Ver vagas</Link>
                                        
                                    </div>
                                </li>
                            
                            </>
                        )
                    })}
                    
                </ul>

            </div>
        </div>
      

</>
    )
}
