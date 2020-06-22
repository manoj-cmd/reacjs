import React from 'react';
import banner1 from './images/b1.png';
import {Link} from 'react-router-dom';

function Menu() {
  return (
 
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
																				
									</ul>
								</li>
								<li><Link to="/About">Home</Link></li>
								<li><a href="about.html">About Us</a></li>
							
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
		
	  
  );
}

export default Menu;

