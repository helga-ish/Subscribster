import './Footer.css';
import { currentYear, creator } from '../../constants/const';
import githubLogo from '../../images/githublogo.svg';
import instaLogo from '../../images/instalogo.svg';

export default function Footer() {



  return(
    <footer className='footer'>
      <div className='footer__container'>
        <ul className='footer__list'>
          <li><a className='footer__link' href='https://instagram.com/helga_ish/' target="_blank" rel='noreferrer'><img className='footer__social-logo' src={instaLogo} alt='instagram'/> Instagram</a></li>
          <li><a className='footer__link' href="https://github.com/helga-ish" target="_blank" rel='noreferrer'><img className='footer__social-logo' src={githubLogo} alt='github'/> GitHub</a></li>
        </ul>
        <p className='footer__year'>{`© ${currentYear}. ${creator}`}</p>
      </div>
    </footer>
  )
}