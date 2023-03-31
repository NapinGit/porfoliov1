import Image from 'next/image'
import MailImg from '../../assets/img/mail.png'
import LinkedInImg from '../../assets/img/linkedin.png'
import GithubImg from '../../assets/img/github.png'

const MailImage = (props) => {
  return (
    <a href='mailto:ambroiseloiseau@hotmail.fr'>
      <Image
        src={MailImg}
        alt="Mail"
        width={35}
        height={45}
      />
    </a>
  )
}
const LinkedInImage = (props) => {
  return (
    <a href='https://www.linkedin.com/in/ambroise-loiseau-34526bb6/'>
      <Image
        src={LinkedInImg}
        alt="LinkedIn"
        width={30}
        height={30}
      />
    </a>
  )
}
const GitHubImage = (props) => {
  return (
    <a href='https://github.com/NapinGit'>
      <Image
        src={GithubImg}
        alt="Github"
        width={30}
        height={30}
      />
    </a>
  )
}

const Footer = () => {
  return (
    <>
      <div className="footer-container">
      <hr />
      <p>
        © {new Date().getFullYear()} Ambroise's Portfolio
      </p>
      <div className='socialmedia'>
        <MailImage></MailImage>
        <LinkedInImage></LinkedInImage>
        <GitHubImage></GitHubImage>
      </div>
    </div>
      </>
    )
  }

export default Footer;