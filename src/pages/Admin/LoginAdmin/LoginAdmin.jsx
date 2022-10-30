import { Loginform } from '../../../components/Admin'
import './LoginAdmin.css'
export const LoginAdmin = () => {
  return (
    <div className='login-admin'>
        <div className='login_admin_content'>
            <h1>Entrar al panel de Administrador</h1>
           <Loginform/>
        </div>
    </div>
  )
}

