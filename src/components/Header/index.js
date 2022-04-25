import './header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
      <header>
        <div className='logo'>
          <Link to="/">FindJOB</Link>
        </div>

          <div className='vagas'>
            <Link className='see-vagas' to="/ver-vagas">Ver Vagas</Link>
            <Link className='open-vagas' to="/abrir-vagas">Abrir Vagas</Link>
          </div>  
      </header>
    )
}
