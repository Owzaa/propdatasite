import React from "react";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon  from "@mui/icons-material/LinkedIn";
import "./footer.css";

 const Font = {size: 18}; 

 React.createElement("h3", { style: Font });
const Footer = () => (



<div className="footer text-center p-5 bg-dark">


<div className="footer">
<p className="text-center text-secondary" >© {new Date().getFullYear()} Copyright  | Triple Double Media (Pty) Ltd | - All Rights Reserved.</p>
</div>

<div className="container-flex text-center pt-5 pb-5 " id="SocialIcons"> 
<a className="text-white" href="https://www.facebook.com/tripledoublemedia"><FacebookRoundedIcon fontSize="large"/></a>
<a className="text-white" href="https://www.instagram.com/tripled_media"><InstagramIcon fontSize="large"/> </a>
<a className="text-white" href="https://www.twitter.com/Tripled_media"><TwitterIcon fontSize="large"/> </a>
<a className="text-white" href="https://www.linkedin.com/company/triple-double-media/"><LinkedInIcon fontSize="large"/></a>

</div>
<div className="e-mail">
    <p className="text-white-50">info@tripledoublemedia.co.za </p>
</div>
</div>
);

export default Footer;