import { Link } from "react-router-dom";


const About = () => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <h4>Verson 1.0.0</h4>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default About
