export default function HeroSmoke(){

 return(
  <div style={{
   position:"relative",
   height:"100vh",
   width:"100%"
  }}>

  <div style={{
 position:"absolute",
 width:"100%",
 height:"100%",
 background:"rgba(0,0,0,0.4)"
}} />
  <video
    autoPlay
    muted
    loop
    playsInline
    style={{
     position:"absolute",
     width:"100%",
     height:"100%",
     objectFit:"cover",
     zIndex:-1
    }}
   >
    <source src="/videos/Smoke.mp4" type="video/mp4" />
   </video>

  </div>
 )
}
