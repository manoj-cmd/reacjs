import React from 'react';
import classes01 from './images/d1.jpg';
import classes from './images/d2.jpg';
import classes1 from './images/d3.jpg';
import classes2 from './images/d4.jpg';
import classes3 from './images/d5.jpg';
import classes4 from './images/d6.jpg';

class Classes extends React.Component{
	
	render(){
		
		return(
		
		<section class="py-5 team-w3ls" id="classes">
		<div class="container py-xl-5 py-lg-3">
			<h3 class="title-w3 pt-sm-5 mb-5 tittle-2 font-weight-bold">We offer adults to achieve the best</h3>
			<div class="d-flex team-w3ls-row pt-xl-5 pt-md-3">
				<div class="col-lg-4 col-sm-6">
					<div class="box20">
						<img src={classes01} alt="clssls" class="img-fluid" />
						<div class="box-content">
							<h3 class="title">Ballet</h3>
							<span class="post">Dance</span>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-sm-6 my-sm-0 my-4">
					<div class="box20 active">
						<img src={classes} alt="classes" class="img-fluid" />
						<div class="box-content active">
							<h3 class="title">Salsa</h3>
							<span class="post">Dance</span>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-sm-6 mt-lg-0 mt-sm-4 mx-auto">
					<div class="box20">
						<img src={classes1} alt="classes1" class="img-fluid" />
						<div class="box-content">
							<h3 class="title">Hip Hop</h3>
							<span class="post">Dance</span>
						</div>
					</div>
				</div>
			</div>
			<div class="d-flex team-w3ls-row pt-lg-5 mt-lg-0 mt-4">
				<div class="col-lg-4 col-sm-6">
					<div class="box20">
						<img src={classes2} alt="classes2" class="img-fluid" />
						<div class="box-content">
							<h3 class="title">Break</h3>
							<span class="post">Dance</span>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-sm-6 mt-sm-0 mt-4">
					<div class="box20">
						<img src={classes3} alt="classes3" class="img-fluid" />
						<div class="box-content">
							<h3 class="title">Zumba</h3>
							<span class="post">Dance</span>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-sm-6 mt-lg-0 mt-4 mx-auto">
					<div class="box20">
						<img src={classes4} alt="classes4" class="img-fluid" />
						<div class="box-content">
							<h3 class="title">Group</h3>
							<span class="post">Dance</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
		
		)
		
	}
}

export default Classes;

