import { Button } from 'bootstrap';
import React,{ useEffect, useState } from 'react'
import{ useDispatch } from 'react-redux'
import { addArticle, incrementId } from '. ./redux/actions/myActions'
const Ajouterr = () => {
        const [labell , setlibelle]=useState();
        const [qte , SetQte]=useState () ;
        const [prix , SetPrix]=useState();
        const [id , setId]=useState();
        const [disponible , setDisponible]=useState ();
        const [total  ,  setTotal]=useState();
            useEffect ( ( ) =>{
            setTotal (qte*prix)
            },[qte  , prix])
        const dispatch = useDispatch ();
        const ajouter =()=>{
        dispatch(addArticle({labell:labell, total:total, qte:qte , prix:prix , id:id}))
        dispatch(incrementId())
        }
        return (
        <div>
            <input type={'text'} onChange={(e)=>{setlibelle(e.target.value)}} />
            <input type={'number'} onChange={(e)=>{SetQte (e. target. value)}} />
            <input type={'number'} onChange={(e) =>{SetPrix (e. target. value)}} />
            <input type={'number'} onChange={(e)=>{setId (e. target. value)}} />
            <input type={'number'} onChange={(e)=>{setDisponible (e. target. value)}} />
            <button onClick={ajouter} >Primary</button>
        </div>
        )
}
export default  Ajouterr ; 