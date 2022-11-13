import { useState } from 'react'
import './login.css'
import {Logo} from '../../components/Logo'

export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handLogin(e){
    e.preventDefault();
    alert("TESTE")
  }

  return(
    <div className='login-container'>
      <Logo/>
      <form className='form' onSubmit={handLogin}>
        <input
          type='email'
          placeholder='Digite o seu email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='*******'
          autoComplete='on'
          value={password}
          onChange = { (e) => setPassword(e.target.value)}
        />

        <button type='submit'>Acessar</button>

      </form>
    </div>
  )
}