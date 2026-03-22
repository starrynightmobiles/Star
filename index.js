import HeroSmoke from "../components/HeroSmoke"

export default function Home(){
 return(
  <div style={{overflow:"hidden"}}>

   <HeroSmoke />

   <div style={{
    position:"absolute",
    top:"40%",
    width:"100%",
    textAlign:"center",
    color:"white"
   }}>
    <h1 style={{fontSize:"40px"}}>Starry Mobile Space</h1>
    <a href="/shop" style={{
     padding:"10px 20px",
     background:"#fff",
     color:"#000",
     borderRadius:"5px",
     textDecoration:"none"
    }}>
     Enter Store
    </a>
   </div>

  </div>
 )
}
