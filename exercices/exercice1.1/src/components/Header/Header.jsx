import img from 'components/Header/gauffre.jpg'

const Header = (props)=>{
    return(
    <div>
      <img src={img} alt="gauffre"/>
      <h1>{props.name}</h1>
    </div>
  )
  
  }
export default Header  