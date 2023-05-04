import { Button } from 'bootstrap'
import React from 'react'
import
{ Container, Table } from 'react-bootstrap'
import
{ useDispatch, useSelector } from 'react-redux'
import { moinsOperation, plusOperation, Supprimer }from'.. / redux/actions/myAction'
const AfficherIntable = () => {
const affichage = useSelector (state=>state.myproduct)
console.log (affichage)
const dispatch = useDispatch () ;
return (
    <div>

    <Container>
        <thead>
            <tr>
            <th>id</th>
            <th>labell </th>
            <th>qte </th>
            <th> prix </th>
            <th>disponible</th>
            <th>operation</th>
            <th>total </th>
            </tr>
        </thead>
    {
        affichage.map((item)=>{
            return(
                <tbody key={item.id}>
                <tr>
                <td>
                    {item.id}
                </td>
                <td>
                    {item.Labell}
                </td>
                <td>
                {item.qte===item.disponible?(<p style={{color:'red'}}>{item.qte}</p>):(item.qte)}
                </td>
                <td>
                    {item.prix}
                </td>
                <td>
                </td>
                    {item.disponible}
                <td>
                    <button onClick={()=>{dispatch (plusOperation (item.id))}} >+</button>
                    <button onClick={()=>{dispatch (moinsOperation(item.id) )}} >-</button>
                    <button onClick={()=>{dispatch (Supprimer(item.id))}} >delete</button>
                </td>
                <td>
                    {item.total}
                </td>
                </tr>
                </tbody>
                            )
                        })
                    } 

    </Container>
    </div>
)
}
export default AfficherIntable ; 
