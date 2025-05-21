import React from "react"

export default function RemediesCategory(){
    return(<>
    <div className="life-prob">
	<div className="container">
		<h3 className="main-title">Remedies For Your Life Problems</h3>
		<hr className="horo-hr"/>
		<p className="horo-para">Vedic Remedies such as Homa, Pooja, and other significant rituals aimed to bring targeted results in your life. The remedies will be scheduled to be performed on powerful days to elicit maximum outcome with Divine blessings.</p>
		<div className="row-main">

			<div className="row">
						<div className="col-lg-3 col-sm-6">
							<div className="prob-box">
								<a href={`${process.env.NEXT_PUBLIC_WEB_BASE}/love-marriage/love-marriage-astrology`} className="prob-lnk">
                <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}life-love.png`} alt="Love / Marriage"/><br/>
								<span>Love / Marriage</span></a>
							</div>
						</div>

						<div className="col-lg-3 col-sm-6">
							<div className="prob-box">
								<a href={`${process.env.NEXT_PUBLIC_WEB_BASE}/student-education/student-education-astrology`} className="rep-pos prob-lnk ">
                <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}life-education.png`} alt="Education"/><br/>
								<span>Education</span></a>
							</div>
						</div>

						<div className="col-lg-3 col-sm-6">
							<div className="prob-box">
								<a href={`${process.env.NEXT_PUBLIC_WEB_BASE}/fertility-children/fertility-children-astrology`} className="prob-lnk">
                <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}life-family.png`} alt="Family / Fertility"/><br/>
								<span>Family / Fertility</span>
                </a>
							</div>
						</div>

						<div className="col-lg-3 col-sm-6">
							<div className="prob-box">
								<a href={`${process.env.NEXT_PUBLIC_WEB_BASE}/beauty-health/beauty-health-astrology`} className="prob-lnk">
                <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}life-health.png`} alt="Health / Beauty"/><br/>
								<span>Health / Beauty</span></a>
							</div>
						</div>
				</div>

				<div className="in-sec">
						<div className="row">
							<div className="col-lg-4 col-sm-6">
							<div className="prob-box">
								<a href={`${process.env.NEXT_PUBLIC_WEB_BASE}/arts-sports/arts-sports-astrology`} className="rep-pos prob-lnk ">
                <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}life-sports.png`} alt="Sports"/><br/>
								<span>Sports</span></a>
							</div>
							</div>
							<div className="col-lg-4 col-sm-6">
								<div className="prob-box">
									<a href={`${process.env.NEXT_PUBLIC_WEB_BASE}/ancestors-lastrites/ancestors-lastrites-astrology`} className="rep-pos prob-lnk">
                  <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}life-ancestor.png`} alt="Family / FertilityAncestors"/><br/>
									<span>Ancestors</span></a>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6">
							<div className="prob-box">
								<a href={`${process.env.NEXT_PUBLIC_WEB_BASE}/career-money/career-money-astrology`} className="prob-lnk">
                <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}life-business.png`} alt="Business / Career"/><br/>
								<span>Business / Career</span></a>
							</div>
							</div>
						</div>
				</div>

		</div>
	</div>
</div>
    </>)
}