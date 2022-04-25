import './ver-vaga.css'
import predios from '../../assets/predios.jpg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import firebase from '../../services/firebaseConnection'
import { UserContext } from '../../contexts/user'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'


export default function VerVaga() {

    const {tituloDaVaga, empresaContratante, salarioOferecido, descricaoDaVaga, emailContato} = useContext(UserContext)
    const [minhasVagas, setVagas] = useState([])
    const {id} = useParams()


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
                        salarioOferecido: item.data().salarioOferecido,
                        descricaoDaVaga:item.data().descricaoDaVaga,
                        emailContato: item.data().emailContato,
                    })
                })

                setVagas(minhasVagas)
                console.log(minhasVagas)
            })
        }

        loadVagas()

    }, [])



    return (
        <>
       <div className='container-ver-vagas'>

            <div className='voltar'>
                <Link to="/">Voltar</Link>
            </div>

            <h1>aaa {id}</h1>

            <div className='img-topo'>
                <img src={predios}/>
            </div>

            <div className='titulo'>
                <h1>{tituloDaVaga}</h1>
            </div>

            <div className='subtitulo'>
                <h4>Quem eles estão buscando</h4>
            </div>

            <div className='texto'>
                <p>{descricaoDaVaga}</p>
            </div>

            <div className='salario'>
                <h4>O salário informado é de: <span> R$ {salarioOferecido} </span></h4>
            </div>

            <div className='contato'>
                <p>Para trabalhar na <strong> {empresaContratante} </strong> envie um email para <strong>{emailContato}</strong> </p>
            </div>


       </div>
    </>   
    )
}
