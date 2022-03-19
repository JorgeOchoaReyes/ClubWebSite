import React from "react";
import './Footer.css';
import {Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Proj1_path, Proj2_path, About_path, Home_path} from '../Components/constants'; 


const Footer = () => {
  return (
    <div className="footer"> 

        <div> 
            <p className="footer-text"> Pages: </p> 
            <p> <Nav.Link as={Link} to={Home_path}>Home</Nav.Link> </p>
            <p> <Nav.Link as={Link} to={Proj1_path}>2022/Proj1</Nav.Link> </p>
            <p> <Nav.Link as={Link} to={Proj2_path}>2022/Proj2</Nav.Link> </p>
            <p> <Nav.Link as={Link} to={About_path}>About</Nav.Link> </p>

        </div>

        <div> 
            <p className="footer-text"> Social Links: </p>
            <p> <a href=''> Youtube </a> </p>
            <p> <a href=''> Discord </a> </p>
            <p> <a href=''> Github </a> </p>
            <p> <a href=''> Instagram </a> </p>
            <p> <a href=''> TikTok </a> </p>

        </div>

        <div> 
            <p className="footer-text"> Have feedback or Request? </p>
            <p> <a href=''> Fill Out This Survey To Give Feedback. </a> </p>
            <p> <a href=''> Make Request For A Workshop </a> </p>
            <p> <a href=''> Apply for officer positons </a> </p>

        </div>

    </div>
  );
};
export default Footer;