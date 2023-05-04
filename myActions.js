export const addArticle = (objetAajouter)=>{
    return({

        type: 'Aioute-Produit' , 
        payload: objetAajouter

    }
        
    )
}
export const plusOperation = (idincr)=>{
    return ({
    type: 'Plus_Operation', 
    payload: idincr
    })
}
export const moinsOperation = (idincr)=>{
    return ({
    type: 'Moins_Operation', 
    payload: idincr
    })
}
export const Supprimer = (idsupp)=>{
    return ({
    type: 'Supprimer', 
    payload: idsupp
    })
}
export const incrementId = ()=>{
    return ({
    type: 'INCREMENT_ID', 

    })
}





