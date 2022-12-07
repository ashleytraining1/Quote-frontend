import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FaceBookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer () {
    return (
      <footer className="text-center">
      <div className='socialMedia'>
          <InstagramIcon/>
          <TwitterIcon/>
          <FaceBookIcon/>
          <LinkedInIcon/>
        </div>
      <p>Made with ❤️  by Ashley Oketo. Copyright @ 2022</p>
  </footer>
    )
}

export default Footer;