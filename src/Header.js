import React from 'react';
import banner1 from './images/b1.png';
import {Link} from 'react-router-dom';

function Header() {
  return (
 
     <div className="main-banner" id="home">
		<header>
			<div className="container">
				<div className="header d-md-flex justify-content-between align-items-center py-3">
					<div id="logo">
						<h1><a href="index.html" className="font-weight-bold">Dance School
								<span className="text-capitalize">Let'sDance With Us</span>
							</a>
						</h1>
					</div>
					<div className="nav_w3ls">
						<nav>
							<label for="drop" className="toggle">Menu</label>
							<input type="checkbox" id="drop" />
							<ul className="menu">
								<li>
									<label for="drop-2" className="toggle toogle-2">Dropdown <span className="fa fa-angle-down"
											aria-hidden="true"></span>
									</label>
									<a href="#"> <span className="fa fa-bars" aria-hidden="true"></span></a>
									<input type="checkbox" id="drop-2" />
									<ul>
									 
										<li><a href="#classNamees" className="drop-text">Dance classNamees</a></li>
										<li><Link exact to="/"> Home </Link> </li>
										<li><Link to="/classes"> Classes </Link> </li>
										<li><a href="about.html" className="drop-text">Trainers</a></li>
										<li><a href="#testi" className="drop-text">Testimonials</a></li>
										<li><a href="gallery.html" className="drop-text">Gallery</a></li>
										<li><a href="contact.html" className="drop-text">Contact Us</a></li>
										
									</ul>
								</li>
								<li><a href="index.html">Home</a></li>
								<li><a href="about.html">About Us</a></li>
							
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
		<div className="main-w3pvt">
			<div className="container">
				<div className="style-banner">
					<h3 className="text-wh font-weight-bold text-uppercase">Be in the <span>Spotlight</span> </h3>
					<p className="mt-5 text-li">Let’s dance with us and hold your beloved moments, sunt in culpa qui
						officia
						id est laborum.</p>
					<a href="about.html" className="btn button-style mt-sm-5 mt-4">Read More</a>
				</div>
			</div>
		</div>
		<div className="img-banner-w3">
			<img src={banner1} alt="Main banner" className="img-fluid" />
		</div>
	</div>
	  
  );
}

export default Header;

