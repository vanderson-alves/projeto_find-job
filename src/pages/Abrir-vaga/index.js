import './abrir-vaga.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import firebase from '../../services/firebaseConnection'



export default function AbrirVaga() {

    const [tituloDaVaga, setTituloDaVaga] = useState('')
    const [descricaoDaVaga, setDescricaoDaVaga] = useState('')
    const [empresaContratante, setEmpresaContratante] = useState('')
    const [emailContato, setEmailContato] = useState('')
    const [salarioOferecido, setSalarioOferecido] = useState('')

    // FUNÇÃO PARA ADICIONAR VAGAS NO FIREBASE (BANCO DE DADOS)
    async function handleAdd(e) {
        e.preventDefault()

        if(tituloDaVaga !== '' && descricaoDaVaga !== '' && empresaContratante !== '' && emailContato !== '' && salarioOferecido !== '' ){
            await firebase.firestore().collection('vagas-disponiveis')
            .add({
                tituloDaVaga: tituloDaVaga,
                descricaoDaVaga: descricaoDaVaga,
                empresaContratante: empresaContratante,
                emailContato: emailContato,
                salarioOferecido: salarioOferecido
            })
            .then(()=>{
                setTituloDaVaga('')
                setDescricaoDaVaga('')
                setEmpresaContratante('')
                setEmailContato('')
                setSalarioOferecido('')
                toast.info("Vaga cadastrada com sucesso!")
            })
            .catch((error)=>{
                console.log(error)
                toast.error("Erro ao preencher essa vaga.")
            })
        }else{
            toast.error('Preencha todos os campos!')
        }
    }


    return (
        <div className='container-abrir-vagas'>     

                    <div className='titulo-subtitulo'>
                        <h1>Divulgue a vaga preenchendo o formulário</h1>

                        <div>
                            <h3>Preencha os dados da melhor forma possível para encontrar mais rápido seu dev!</h3>
                        </div>
                    </div>

            <div className='conteudo'>
                <form className='form-abrir-vagas' onSubmit={handleAdd}>
                    <div className='titulo-vaga'>
                        <label> <strong>  Titulo da vaga: </strong></label> <br/>
                        <input type="text" placeholder='Digite o título da vaga' value={tituloDaVaga} onChange={(e) => setTituloDaVaga(e.target.value)} />
                        <p>O titulo é muito importante, seja claro e objetivo</p>
                    </div>

                    <div className='descricao'>
                        <label> <strong> Descrição da vaga: </strong></label> <br/>
                        <textarea type="text" placeholder='Descreva as atividades do desenvolvedor...' value={descricaoDaVaga} onChange={(e)=>setDescricaoDaVaga(e.target.value)}></textarea>
                    </div>

                    <div className='contratante'>
                        <label> <strong>Empresa contratante: </strong></label> <br/>
                        <input type="text" placeholder='Digite a empresa que irá contratar' value={empresaContratante} onChange={(e) => setEmpresaContratante(e.target.value)} />
                    </div>

                    <div className='email'>
                        <label> <strong>E-mail para contato: </strong></label> <br/>
                        <input type="text" placeholder='Digite a empresa que irá contratar' value={emailContato} onChange={(e) => setEmailContato(e.target.value)} />
                    </div>

                    <div className='salario'>
                        <label> <strong>Salário oferecido: </strong></label> <br/>
                        <input type="number" placeholder='Digite o salário da vaga' value={salarioOferecido} onChange={(e) => setSalarioOferecido(e.target.value)} />
                    </div>

                    <div className='botao'>
                        <button type='submit'>Cadastrar</button>
                    </div>
                </form>
            </div>     
        </div>
    )
}
