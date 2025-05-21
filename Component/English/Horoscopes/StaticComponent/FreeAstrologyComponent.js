import React from "react"

export default function FreeAstrologyComponent(){
    return(<>
    <div className="sec-ast">
	<div className="container">
	<h3 className="main-title">Astrology And Horoscope</h3>
	<hr className="horo-hr"/>
	<div className="alg-txt">
		<p>Our ancients, in their profound wisdom and through painstaking analysis realized that the heavenly bodies like the stars and planets wield a strong influence over the lives of the people and that their careful study can reveal almost everything about an individual, including his or her past, present and the future.</p>
		<p>This study is known as Vedic Astrology or just, as Astrology.</p>
		<p>A horoscope is an astrological chart, which presents in it, the positions of the planets and stars, along with other astrological aspects, as found at the time of birth. Horoscope is a karmic map which is specific to an individual, and its study can provide invaluable information and guidance on all the significant aspects of life like education, profession, love, marriage, progeny, health, income, financial condition, relationships, any happening of significance and longevity. It is thus the horoscope which can be said to form the basis of the entire gamut of astrology.</p>
	</div>
	</div>
</div>




<div className="astro-report">
	<div className="container">
		<h3 className="main-title">Free Astrology Reports</h3>
		<hr className="horo-hr"/>
		<p className="horo-para">Get Free Astrology Reports On Daily Horoscope, Birth Chart, Numerology &amp; Planetary Influences to understand more about your horoscope and get accurate predictions.</p>
		<div className="row">
			<div className="col-lg-4 col-sm-12 sign-box">
				<div className="report-sec">
					<a href={`${process.env.NEXT_PUBLIC_WEB_BASE}/reports/yearly-horoscope-predictions?promo=SMO_HHASTROLOGYREPORTS`}>
          <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}astroved-report1.png`} alt="Daily/Monthly/Yearly Horoscopes"/></a>
					<p className="astro-t1">Daily/Monthly/Yearly Horoscopes</p>
					<p className="astro-t2">Get your accurate moon sign predictions</p>
					<div className="report-btn">
						<a href={`${process.env.NEXT_PUBLIC_WEB_BASE}/reports/yearly-horoscope-predictions?promo=SMO_HHASTROLOGYREPORTS`} className="view-btn">
            <span>View Details</span></a>
					</div>
				</div>
			</div>

			<div className="col-lg-4 col-sm-12 sign-box">
				<div className="report-sec">
					<a href={`${process.env.NEXT_PUBLIC_WEB_BASE}/Report.aspx?type=birthstar?promo=SMO_HHASTROLOGYREPORTS`}>
          <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}astroved-report2.png`} alt="Birthstar Astrology Report"/></a>
					<p className="astro-t1">Birthstar Astrology Report</p>
					<p className="astro-t2">Find out what star the Moon was in when you were born. This is your birthstar.</p>
					<div className="report-btn">
						<a href={`${process.env.NEXT_PUBLIC_WEB_BASE}/Report.aspx?type=birthstar?promo=SMO_HHASTROLOGYREPORTS`} className="view-btn">
            <span>View Details</span></a>
					</div>
				</div>
			</div>

			<div className="col-lg-4 col-sm-12 sign-box">
				<div className="report-sec">
					<a href={`${process.env.NEXT_PUBLIC_WEB_BASE}/Report.aspx?type=moonsign?promo=SMO_HHASTROLOGYREPORTS`}>
          <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}astroved-report3.png`} alt="Moon Sign Report"/></a>
					<p className="astro-t1">Moon Sign Report</p>
					<p className="astro-t2">The Moon controls your mind and emotions.</p>
					<div className="report-btn">
						<a href={`${process.env.NEXT_PUBLIC_WEB_BASE}/Report.aspx?type=moonsign?promo=SMO_HHASTROLOGYREPORTS`} className="view-btn">
            <span>View Details</span></a>
					</div>
				</div>
			</div>

			<div className="col-lg-4 col-sm-12 sign-box">
				<div className="report-sec">
					<a href={`${process.env.NEXT_PUBLIC_WEB_BASE}/Report.aspx?type=chart?promo=SMO_HHASTROLOGYREPORTS`}>
          <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}astroved-report4.png`} alt="Birth Chart Astrology Report"/></a>
					<p className="astro-t1">Birth Chart Astrology Report</p>
					<p className="astro-t2">Learn where your planets are located in a Vedic Birth Chart (this can be different from your Western Birth Chart). </p>
					<div className="report-btn">
						<a href={`${process.env.NEXT_PUBLIC_WEB_BASE}/Report.aspx?type=chart?promo=SMO_HHASTROLOGYREPORTS`} className="view-btn">
            <span>View Details</span></a>
					</div>
				</div>
			</div>

			<div className="col-lg-4 col-sm-12 sign-box">
				<div className="report-sec">
					<a href={`${process.env.NEXT_PUBLIC_WEB_BASE}/Report.aspx?type=planetaryinfluence?promo=SMO_HHASTROLOGYREPORTS`}>
          <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}astroved-report5.png`} alt="Planetary Influence Report"/></a>
					<p className="astro-t1">Planetary Influence Report</p>
					<p className="astro-t2">Know which planets are most impacting you right now. Their influence is known as your current “Dasha-Bukti” or current.</p>
					<div className="report-btn">
						<a href={`${process.env.NEXT_PUBLIC_WEB_BASE}/Report.aspx?type=planetaryinfluence?promo=SMO_HHASTROLOGYREPORTS`} className="view-btn">
            <span>View Details</span></a>
					</div>
				</div>
			</div>

			<div className="col-lg-4 col-sm-12 sign-box">
				<div className="report-sec">
					<a href={`${process.env.NEXT_PUBLIC_WEB_BASE}/panchanga.aspx?promo=SMO_HHASTROLOGYREPORTS`}>
          <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}astroved-report6.png`} alt="Daily Panchangam Report"/></a>
					<p className="astro-t1">Daily Panchangam Report</p>
					<p className="astro-t2">The 5 Elements of Time. The ancients measured time in terms of 5 specific measures. </p>
					<div className="report-btn">
						<a href={`${process.env.NEXT_PUBLIC_WEB_BASE}/panchanga.aspx?promo=SMO_HHASTROLOGYREPORTS`} className="view-btn">
            <span>View Details</span></a>
					</div>
				</div>
			</div>
		</div>
		<div className="btn-div">
				<a href={`${process.env.NEXT_PUBLIC_WEB_BASE}/reports?promo=SMO_HHASTROLOGYREPORTS`} className="view-btn">
        <span><i className="fa fa-external-link" aria-hidden="true"></i> VIEW ALL</span></a>
		</div>
	</div>
</div>

<div className="horo-reading">
	<div className="container">
		<div className="row">
			<div className="col-md-7">
				<h3 className="main-title">Importance of <br/>Horoscope Reading</h3>
				<hr className="horo-hr"/>
				<p className="horo-para">Indian culture comes from ancient times, and even today, India remains as a tradition-bound society essentially. Here it is customary here to consult an astrologer and take the help of horoscopes, in all issues of importance in life. Hence, aspects like casting a horoscope accurately and reading it precisely, assume prime importance in the life of an individual.</p>
			</div>
			<div className="col-md-5">
				<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-reading-bg.jpg`} alt="Horoscope Reading"/>
			</div>
		</div>
	</div>
</div>
    
    
    </>)
}