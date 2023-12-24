import cer1 from '../assets/certificates/certificate1.png'
import cer2 from '../assets/certificates/certificate2.png'
import cer3 from '../assets/certificates/certificate3.png'
import cer4 from '../assets/certificates/certificate4.png'
import cer5 from '../assets/certificates/certificate5.png'
import cer6 from '../assets/certificates/certificate6.png'
import cer7 from '../assets/certificates/certificate7.png'
import cer8 from '../assets/certificates/certificate8.png'
import cer9 from '../assets/certificates/certificate9.png'
import cer10 from '../assets/certificates/certificate10.png'
import cer11 from '../assets/certificates/certificate11.png'
import Particle from '../Components/Particle'
import '../styles/Certificates.css'

const Certificates = () => {
  return (
    <div className="certificate-container">
      <div className="cer-background">
            <Particle />
      </div>
      <div className="cer-data">
        <img src={cer10} alt="" className='cer-item' />
        <img src={cer2} alt="" className='cer-item' />
        <img src={cer9} alt="" className='cer-item' />
        <img src={cer6} alt="" className='cer-item' />
        <img src={cer3} alt="" className='cer-item' />
        <img src={cer7} alt="" className='cer-item' />
        <img src={cer11} alt="" className='cer-item' />
        <img src={cer4} alt="" className='cer-item' />
        <img src={cer5} alt="" className='cer-item' />
        <img src={cer8} alt="" className='cer-item' />
        <img src={cer1} alt="" className='cer-item' />
      </div>
      
    </div>
  )
}

export default Certificates