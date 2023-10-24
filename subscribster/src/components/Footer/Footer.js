import './Footer.css';
import { currentYear, creator } from '../../constants/const';

export default function Footer() {



  return(
    <footer>
      <div>
        <ul>
          <li><a><img alt='instagram logo'/>Instagram</a></li>
          <li><a href="https://github.com/helga-ish" target="_blank" rel='noreferrer'><img alt='github logo'/>GitHub</a></li>
        </ul>
        <p>{`© ${currentYear}. ${creator}`}</p>
      </div>
    </footer>
  )
}