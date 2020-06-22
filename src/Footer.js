import React from 'react';

class Footer extends React.Component{
	
	render(){
		
		return(
		
		<div>
	<div className="slide-imaes"></div>
	<footer className="py-5">
		<div className="container pt-xl-5 pt-lg-3">
			<div className="newsletter_right_w3w3pvt-lau pb-5">
				<h2 className="tittle text-wh mb-5 font-weight-bold">Subscribe Newsletter</h2>
				<div className="n-right-w3ls pt-3">
					<form action="#" method="post">
						<div className="row">
							<div className="col-md-4 form-group">
								<input className="form-control" type="text" name="Name" placeholder="Name" required="" />
							</div>
							<div className="col-md-4 form-group px-md-0">
								<input className="form-control" type="email" name="Email" placeholder="Email Address"
									required="" />
							</div>
							<div className="col-md-4 form-group mt-md-0 mt-3">
								<button className="form-control submit text-uppercase btn" type="submit">Subscribe</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className="row pt-xl-5 pt-lg-3">
				<div className="col-lg-5 col-md-7 w3l-footer mt-lg-3 text-md-left text-center">
					<ul className="list-unstyled footer-nav-wthree">
						<li>
							<a href="index.html" className="active">Home</a>
						</li>
						<li>
							<a href="about.html">About Us</a>
						</li>
						<li>
							<a href="gallery.html">Gallery</a>
						</li>
						<li>
							<a href="contact.html">Contact Us</a>
						</li>
					</ul>
				</div>
				<div className="col-lg-7 col-md-5 w3social-icons text-md-right text-center mt-md-0 mt-3">
					<ul>
						<li>
							<a href="#" className="rounded-circle">
								<span className="fa fa-facebook-f"></span>
							</a>
						</li>
						<li>
							<a href="#" className="rounded-circle">
								<span className="fa fa-google-plus"></span>
							</a>
						</li>
						<li>
							<a href="#" className="rounded-circle">
								<span className="fa fa-twitter"></span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="pt-lg-4 pt-3 text-md-left text-center">
				<p className="copy-right-grids mt-lg-1">© 2019 Dance School. All Rights Reserved | Design by
					<a href="https://w3layouts.com/" target="_blank">W3layouts</a>
				</p>
			</div>
		</div>
	</footer>
		</div>
		)
		
	}
}

export default Footer;

