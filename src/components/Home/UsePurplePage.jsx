import React from "react";
import Appstore from "../../assets/appstore01.png";
import Playstore from "../../assets/playstore01.png";
import iPhone from "../../assets/iPhone.png";

const UsePurplePage = () => {
	return (
		<section className='use'>
			<div className='container use__container'>
				<div className='use__left'>
					<h2>Use Purple Pages</h2>
					<p>HOLISTIC . AFFORDABLE . EASY-TO-USE</p>
					<div className='use__links'>
						<a href='#' rel='noreferrer noopener'>
							<img src={Appstore} alt='Appstore' style={{ height: "40px" }} />
						</a>
						<a href='#' rel='noreferrer noopener'>
							<img src={Playstore} alt='playstore' style={{ height: "40px" }} />
						</a>
					</div>
				</div>
				<div className='use__right'>
					<img src={iPhone} alt='playstore' />
				</div>
			</div>
		</section>
	);
};

export default UsePurplePage;
