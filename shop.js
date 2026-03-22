
import {useEffect,useState} from "react"

export default function Shop(){
 const [products,setProducts]=useState([])

 useEffect(()=>{
  fetch("http://localhost:5000/api/products")
  .then(r=>r.json()).then(setProducts)
 },[])

 return(
  <div>
   <h1>Shop</h1>
   {products.map(p=>(
    <div key={p._id}>
     <h3>{p.name}</h3>
     <p>${p.price}</p>
    </div>
   ))}
  </div>
 )
}
