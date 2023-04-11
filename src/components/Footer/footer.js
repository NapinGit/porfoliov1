const Footer = () => {
  return (
    <>
      <div className="footer-container">
      <hr />
      <p>
        © {new Date().getFullYear()} Ambroise's Portfolio
      </p>
      <div className='socialmedia'>
        
      <a href="mailto:ambroiseloiseau@hotmail.fr"><i className="fa-regular fa-envelope fa-2xl"></i></a>
      <a href="https://github.com/NapinGit"><i className="fa-brands fa-github fa-2xl"></i></a>
      <a href="https://www.linkedin.com/in/ambroise-loiseau-34526bb6/"><i className="fa-brands fa-linkedin fa-2xl"></i></a>
        {/* <MailImage></MailImage>
        <LinkedInImage></LinkedInImage>
        <GitHubImage></GitHubImage> */}
      </div>
    </div>
      </>
    )
  }

export default Footer;