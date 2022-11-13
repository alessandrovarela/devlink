import { useState } from 'react'
import './login.css'
import { Logo } from '../../components/Logo'
import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handLogin(e){
    e.preventDefault();
    if (email === '' || password === ''){
      alert("preencha todos os campos!")
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
    .then( () => { 
        navigate("/admin", { replace: true })
    })
    .catch( () => { 
        console.log("ERRO AO FAZER SEU LOGIN")
    })
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