import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as LikedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';


function Footer() {
    return (
      <footer className="main-footer">
        App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
        <div className="footer-icons">
            <a href="https://youtube.com/c/devsuperior" target="_new">
                <YouTubeIcon />
            </a>
            <a href="https://www.likendin.com/school/devsuperior/" target="_new">
                <LikedinIcon />
            </a>
            <a href="https://www.instagram.com/devsuperior.ig/" target="_new">
                <InstagramIcon />
            </a>
        </div>
      </footer>
    )
}

export default Footer;