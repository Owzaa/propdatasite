import React from "react";
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';

import "./footer.css";

 const Font = {size: 12}; 

 React.createElement("p", { style: Font });
const Footer = () => (



<div className="flex footer mt-5 p-5">

{/* Association Logo */}
<div className="flex assoc pt-0">
<Image className="logoAss mt-2 m-1 pt-3" src="../assets/Associations/EAAB/Light.png"
id='icon-brand-footer'>
</Image> 
<Image className="logoAss mt-2 m-1 pt-3" src="../assets/Associations/IEASA/Light.png"
id='icon-brand-footer'>
</Image> 


{/* Footer Nav.Link ks */}

<div className="container-fluid pt-5 m-0 footerLinks">
    <Nav className="navLink">
        <Nav.Link href="/home" className="nav-link footerLink">Browse: Home |</Nav.Link>
        <Nav.Link href="/home" className="nav-link footerLink">Residential For Sale <span>[5] </span> |</Nav.Link>
        <Nav.Link href="/home" className="footerLink">Calculators |</Nav.Link>
        <Nav.Link href="/home" className="footerLink">Company Profile |</Nav.Link> 
        <Nav.Link href="/home" className="footerLink">Agent Search |</Nav.Link>
        <Nav.Link href="/home" className="footerLink">Contact Us |</Nav.Link>
        <Nav.Link href="/home" className="footerLink">Website Map |</Nav.Link>
        <Nav.Link href="/home" className="footerLink">Links |</Nav.Link>
        <Nav.Link href="/home" className="footerLink">Privacy Policy</Nav.Link> 
    </Nav>
</div>
<br/>
<br/>
<hr/>


<div className="flex advert-con">
        <Nav.Link href="/home" className="footerLink">Residential For Sale <span>[54] </span>|</Nav.Link>
        <Nav.Link href="/home" className="footerLink">Amazimtoti <span>[12] </span> |</Nav.Link>
        <Nav.Link href="/home" className="footerLink">Athlone Park <span>[3] </span>|</Nav.Link>
        <Nav.Link href="/home" className="footerLink">Doonside <span>[6] </span> |</Nav.Link>
        <Nav.Link href="/home" className="footerLink">Warner Beach <span>[11] </span> |</Nav.Link>
        <Nav.Link href="/home" className="footerLink">St. Winifreds <span>[4] </span> |</Nav.Link>
        <Nav.Link href="/home" className="footerLink">Residential To Let<span>[54] </span> |</Nav.Link>  
        <Nav.Link href="/home" className="footerLink">Amazimtoti <span>[12] </span> |</Nav.Link>
        <Nav.Link href="/home" className="footerLink">Doonside <span>[6] </span> |</Nav.Link>
        <Nav.Link href="/home" className="footerLink">Warner Beach <span>[11] </span> |</Nav.Link>
        <Nav.Link href="/home" className="footerLink">St. Winifreds <span>[4] </span> |</Nav.Link>
</div>


<div className=" pt-5 mt-0 mb-0 m-0">
<Image className="logo mb-0 pt-0" src="../assets/footer-icon.svg" id='brand-footer'>
</Image><p className="text-white mb-0 pt-0 m-5 mt-0 t-0">Website Powered by Prop Data</p>  
<p className="text-white  pt-0 m-5 mt-0 t-0">Copyright ©  {new Date().getFullYear()} </p>


<div className="flex social-icon t-0 pt-0">
<Image className="m-1 pt-0" src="../assets/Facebook.svg">
</Image>
<Image className="m-1 pt-0" src="../assets/Twitter.svg" >
</Image>
<Image className="m-1 pt-0" src="../assets/YouTube.svg">
</Image>

</div>

</div> 


{/* Footer Social Media */}




</div>


{/* Footer Advert Nav.Link ks */}









</div>



);

export default Footer;