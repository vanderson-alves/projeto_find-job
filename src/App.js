import './style.css'
import Routes from './routes'
import { ToastContainer } from 'react-toastify'

import UserProvider from './contexts/user'


export default function App() {
  return (
    <UserProvider>
      <div className='app'>
          <Routes/>
          <ToastContainer autoClose={3000}/>
      </div>
    </UserProvider>
  )
}
