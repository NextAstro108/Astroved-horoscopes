import React from "react";
import { HoroscopesUrl } from "@/Component/Config/horoscopes";

export default function StaticSignComponent({SignCategory}){
    const baseUrl = HoroscopesUrl.CategoryBase[SignCategory];
    return(<>
    
    {SignCategory==="DailyHoroscope" && 
(	<div className="section1">
	<div className="container">
		<div className="lovehoro-title">
		<h1 className="main-title" style={{textAlign: "center"}}>Today’s Free Daily Horoscope </h1>
			<div className="sec1-txt">
				<h2 className="main-title">Everything You Need to Know About Today’s Free Daily Horoscope</h2>
				<hr className="horo-hr"/>
				<p className="horo-para" style={{textAlign: "center"}}><span data-doc-id="7392660000005436012" data-doc-type="writer">Today’s Free Daily Horoscope signifies the astrological predictions for all the 12 zodiac signs daily. It gives you forecasts for the day you choose and also for the near future sometimes. Expert astrologers give these daily predictions for each of the 12 zodiac signs. The daily predictions given are common and not specific to an individual. They apply to all people born in the chosen zodiac sign.
					</span></p>
				<h2 className="main-title">What’s in Today’s Free Daily Horoscope?</h2>
				<hr className="horo-hr"/>
				<p className="horo-para" style={{textAlign: "center"}}><span data-doc-id="7392660000005436012" data-doc-type="writer">Today’s Free Daily horoscope will furnish information about how the day would go; the good or not-so-good things that could happen on the day; which activities can be undertaken and which should be avoided so that you can take necessary precautions or do remedies to overcome the hindrances.</span></p>
			</div>
			<h2 className="main-title">Structure Of Today’s Free Daily Horoscope</h2>
			<hr className="horo-hr"/>
			<div className="sec1-txt">
				<p className="horo-para">There are 12 zodiac signs in the astrological system, and a horoscope indicates these 12 signs in the form of 12 Houses, where each of these Houses carries its unique significance. The 12 signs are Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces. It is only these signs that the different planets and stars stay in and also pass through in a person’s lifetime.Hence they form the most important part of any daily horoscope.</p>
				<div className="row">
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign1}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-aries.jpg`} alt="Aries"/><br/>
						Today’s Free Daily Horoscope for <br/>Aries
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign2}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-taurus.jpg`} alt="Taurus"/><br/>
						Today’s Free Daily Horoscope for <br/>Taurus
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign3}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-gemini.jpg`} alt="Gemini"/><br/>
						Today’s Free Daily Horoscope for <br/>Gemini
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign4}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-cancer.jpg`} alt="Cancer"/><br/>
						 Today’s Free Daily Horoscope for <br/>Cancer
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign5}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-leo.jpg`} alt="Leo"/><br/>
						 Today’s Free Daily Horoscope for <br/>Leo
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign6}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-virgo.jpg`} alt="Virgo"/><br/>
						 Today’s Free Daily Horoscope for <br/>Virgo
						</a>
					</div>

					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign7}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-libra.jpg`} alt="Libra"/><br/>
						 Today’s Free Daily Horoscope for <br/>Libra
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign8}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-scorpio.jpg`} alt="scorpio"/><br/>
						 Today’s Free Daily Horoscope for <br/>Scorpio
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign9}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-sagittarius.jpg`} alt="sagittarius"/><br/>
						 Today’s Free Daily Horoscope for <br/>Sagittarius
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign10}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-capricorn.jpg`} alt="capricorn"/><br/>
						 Today’s Free Daily Horoscope for <br/>Capricorn
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign11}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-aquarius.jpg`} alt="aquarius"/><br/>
						 Today’s Free Daily Horoscope for <br/>Aquarius
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign12}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-pisces.jpg`} alt="pisces"/><br/>
						 Today’s Free Daily Horoscope for <br/>Pisces
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>)}

{SignCategory==="MonthlyHoroscope" && <div className="section1">
	<div className="container">
		<div className="lovehoro-title">
		<h1 className="main-title" style={{textAlign: "center"}}>Monthly Horoscope </h1>
			<div className="sec1-txt">
				
				<hr className="horo-hr"/>
				<p className="horo-para" style={{textAlign: "center"}}><span data-doc-id="7392660000005436012" data-doc-type="writer">Monthly Horoscope gives out the astrological predictions for a period of one month. This usually happens to be a calendar month. Monthly Horoscope forecasts given to people for their near future can be called as short-term predictions. Monthly Horoscope predictions are based fundamentally on the zodiac signs and are given individually, for every one of the 12 signs. Thus, a monthly horoscope is something that will be common and applicable for all the people, who are born under a particular zodiac sign.
					</span></p>
				
			</div>
			<h2 className="main-title">Structure of a Horoscope</h2>
			<hr className="horo-hr"/>
			<div className="sec1-txt">
				<p className="horo-para">There are 12 zodiac signs in the astrological system, and a horoscope indicates these 12 signs in the form of 12 Houses, where each of these Houses carries its unique significance. The 12 signs are Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces. It is only these signs that the different planets and stars stay in and also pass through in a person’s lifetime.</p>
				<div className="row">
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign1}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-aries.jpg`} alt="Aries"/><br/>
						Aries
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign2}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-taurus.jpg`} alt="Taurus"/><br/>
						Taurus
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign3}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-gemini.jpg`} alt="Gemini"/><br/>
						Gemini
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign4}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-cancer.jpg`} alt="Cancer"/><br/>
						Cancer
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign5}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-leo.jpg`} alt="Leo"/><br/>
						Leo
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign6}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-virgo.jpg`} alt="Virgo"/><br/>
						Virgo
						</a>
					</div>

					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign7}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-libra.jpg`} alt="Libra"/><br/>
						Libra
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign8}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-scorpio.jpg`} alt="scorpio"/><br/>
						Scorpio
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign9}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-sagittarius.jpg`} alt="sagittarius"/><br/>
						Sagittarius
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign10}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-capricorn.jpg`} alt="capricorn"/><br/>
						Capricorn
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign11}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-aquarius.jpg`} alt="aquarius"/><br/>
						Aquarius
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign12}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-pisces.jpg`} alt="pisces"/><br/>
						Pisces
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>}

{SignCategory==="TomorrowHoroscope" && <div className="section1">
	<div className="container">
		<div className="lovehoro-title">
		<h1 className="main-title" style={{textAlign: "center"}}>Tomorrow Horoscope </h1>
			<div className="sec1-txt">
				
				<hr className="horo-hr"/>
				<p className="horo-para" style={{textAlign: "center"}}><span data-doc-id="7392660000005436012" data-doc-type="writer">Tomorrow is another day. It is a strong statement of hope. Faith is fundamental to the human spirit. Let whatever unfavorable happens on a day, it is still natural for a human being to be hopeful and believe that the next day will bring in better fortune. Every day has a tomorrow that follows and every tomorrow has good hopes inbuilt in it. Moreover, astrology provides its contribution in sustaining such aspirations for the morrow.
					</span></p>
					<p className="horo-para" style={{textAlign: "center"}}><span data-doc-id="7392660000005436012" data-doc-type="writer">Tomorrow Horoscope denotes the simple astrological predictions for ‘tomorrow,’ the next day. Tomorrow Horoscope provides people, forecasts for the day that follows. These predictions are based on the zodiac signs and are given individually, for each of the 12 signs. Thus, the tomorrow horoscope will be applicable for all the people, who are born under a particular zodiac sign.
					</span></p>
				
			</div>
			<h2 className="main-title">Structure of a Horoscope</h2>
			<hr className="horo-hr"/>
			<div className="sec1-txt">
				<p className="horo-para">There are 12 zodiac signs in the astrological system, and a horoscope indicates these 12 signs in the form of 12 Houses, where each of these Houses carries its unique significance. The 12 signs are Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces. It is only these signs that the different planets and stars stay in and also pass through in a person’s lifetime.</p>
				<div className="row">
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign1}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-aries.jpg`} alt="Aries"/><br/>
						Aries
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign2}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-taurus.jpg`} alt="Taurus"/><br/>
						Taurus
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign3}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-gemini.jpg`} alt="Gemini"/><br/>
						Gemini
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign4}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-cancer.jpg`} alt="Cancer"/><br/>
						Cancer
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign5}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-leo.jpg`} alt="Leo"/><br/>
						Leo
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign6}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-virgo.jpg`} alt="Virgo"/><br/>
						Virgo
						</a>
					</div>

					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign7}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-libra.jpg`} alt="Libra"/><br/>
						Libra
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign8}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-scorpio.jpg`} alt="scorpio"/><br/>
						Scorpio
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign9}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-sagittarius.jpg`} alt="sagittarius"/><br/>
						Sagittarius
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign10}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-capricorn.jpg`} alt="capricorn"/><br/>
						Capricorn
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign11}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-aquarius.jpg`} alt="aquarius"/><br/>
						Aquarius
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign12}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-pisces.jpg`} alt="pisces"/><br/>
						Pisces
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>}

{SignCategory==="WeeklyHoroscope" && <div className="section1">
	<div className="container">
		<div className="lovehoro-title">
		<h1 className="main-title" style={{textAlign: "center"}}>Weekly Horoscope </h1>
			<div className="sec1-txt">
			<hr className="horo-hr"/>
				<p className="horo-para" style={{textAlign: "center"}}><span data-doc-id="7392660000005436012" data-doc-type="writer">Weekly Horoscope stands for the astrological forecasts done for a full week. For this purpose, a week generally begins on a Sunday and ends on the following Saturday. Weekly Horoscope is zodiac sign-wise predictions and is given individually for all the 12 signs. The weekly horoscope will thus be common and applicable to all the people falling under a zodiac sign and not be specific for any individual.
					</span></p>
					<p className="horo-para" style={{textAlign: "center"}}><span data-doc-id="7392660000005436012" data-doc-type="writer">Weekly horoscopes are predicted based mainly on the position of the various planets in the different Houses of the horoscope. These will provide information about, how the week may generally be for a sign; what good or not so good may happen to people; what jobs they can do and what they can be wary of; and what precautions they can take or remedies they can perform during the period, for overcoming the difficulties.
					</span></p>
			
			</div>
			<h2 className="main-title">Structure of a Horoscope</h2>
			<hr className="horo-hr"/>
			<div className="sec1-txt">
				<p className="horo-para">There are 12 zodiac signs in the astrological system, and a horoscope indicates these 12 signs in the form of 12 Houses, where each of these Houses carries its unique significance. The 12 signs are Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces. It is only these signs that the different planets and stars stay in and also pass through in a person’s lifetime.</p>
				<div className="row">
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign1}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-aries.jpg`} alt="Aries"/><br/>
						Aries
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign2}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-taurus.jpg`} alt="Taurus"/><br/>
						Taurus
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign3}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-gemini.jpg`} alt="Gemini"/><br/>
						Gemini
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign4}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-cancer.jpg`} alt="Cancer"/><br/>
						Cancer
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign5}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-leo.jpg`} alt="Leo"/><br/>
						Leo
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign6}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-virgo.jpg`} alt="Virgo"/><br/>
						Virgo
						</a>
					</div>

					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign7}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-libra.jpg`} alt="Libra"/><br/>
						Libra
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign8}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-scorpio.jpg`} alt="scorpio"/><br/>
						Scorpio
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign9}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-sagittarius.jpg`} alt="sagittarius"/><br/>
						Sagittarius
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign10}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-capricorn.jpg`} alt="capricorn"/><br/>
						Capricorn
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign11}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-aquarius.jpg`} alt="aquarius"/><br/>
						Aquarius
						</a>
					</div>
					<div className="horo-col col-md-2 col-sm-3 col-xs-4">
						<a href={`${baseUrl}${HoroscopesUrl.Signs.Sign12}`} className="horo-lst">
						<img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}horoscope-pisces.jpg`} alt="pisces"/><br/>
						Pisces
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>}
    </>)
}