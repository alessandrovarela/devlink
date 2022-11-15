import { useState , useEffect } from 'react'
import './networks.css'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { MdAddLink } from 'react-icons/md'

import { db } from '../../services/firebaseConnection'
import {
  setDoc,
  doc,
  getDoc,
} from 'firebase/firestore'

import { toast } from 'react-toastify'

export default function Networks(){
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  useEffect( () => {
    async function loadLinks(){
      const docRef = doc( db, "social", "link" )
      getDoc(docRef)
      .then( (snapshot) => {

        if (snapshot !== undefined ) {          
          setFacebook(snapshot.data().facebook)
          setInstagram(snapshot.data().instagram)
          setYoutube(snapshot.data().youtube)
        }

      })
    }

    loadLinks();
  }, [] )

  function handleSave(e) {
    e.preventDefault();
    setDoc(doc( db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube
    })
    .then(() => {
      toast.success("Redes salvas com sucesso")
    })
    .catch( (error)=>{
      console.log("ERRO AO SALVAR " + error) 
    })
  }

  return(
    <div className='admin-container'>
      <Header />
      <h1 className='title-social'>Suas Redes Sociais</h1>
      <form className='form' onSubmit={handleSave}>

        <label className='label'> Link do Facebook</label>
        <Input 
          placeholder = "Digite a url do facebook..."
          value={ facebook }
          onChange={ (e) => setFacebook(e.target.value) }
          />
        <label className='label'>Link do Instagram</label>
        <Input 
          placeholder = "Digite a url do Instagram..."
          value={ instagram }
          onChange={ (e) => setInstagram(e.target.value) }
          />
        <label className='label'>Link do Youtube</label>
        <Input 
          placeholder = "Digite a url do Youtube..."
          value={ youtube }
          onChange={ (e) => setYoutube(e.target.value) }
        />

        <button type='submit' className='btn-register'>
          Salvar links <MdAddLink size={24} color="FFF" />
        </button>

      </form>

    </div>
  )
}