import React from "react";
export default function Blogs_ArticlesComponent({ articles, blogs }) {

  return (
    <>
      <div className="astro-app">
        <div className="container">
          <div className="row">
            <div className="col-md-6 av-lftmain">
              <div className="row av-applft">
                <div className="col-md-5 lft-sec">
                  <a href={`${process.env.NEXT_PUBLIC_WEB_BASE}/apps/astroved`}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}av-app-mobile.png`}
                      alt="Astroved App"
                    />
                  </a>
                </div>
                <div className="col-md-7 lft-sec1">
                  <a
                    href={`${process.env.NEXT_PUBLIC_WEB_BASE}/apps/astroved`}
                    className="avapp-title"
                  >
                    AstroVed –Astrology <br /> &amp; Remedies
                  </a>
                  <p className="avapp-sub">
                    An Exclusive Personalized, Location-Based App, Get Vedic
                    Wisdom At Your Fingertips <br />
                    Plan Your Every Action At The Right Moment
                  </p>
                  <div className="avapp-btn">
                    <a
                      href={`${process.env.NEXT_PUBLIC_WEB_BASE}/store/apps/details?id=com.astroved.birthchartnew`}
                      className="view-btn"
                    >
                      <span>
                        <i className="fa fa-android" aria-hidden="true"></i>&nbsp;
                        Google Play
                      </span>
                    </a>
                    <br className="hide-br" />
                    <a
                      href={`${process.env.NEXT_PUBLIC_WEB_BASE}/us/app/astroved/id1406242342`}
                      className="view-btn"
                    >
                      <span>
                        <i className="fa fa-apple" aria-hidden="true"></i>&nbsp; App
                        Store
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 av-rgtmain">
              <div className="art-blog">
                <p className="art-title">
                  ARTICLES
                  <a
                    className="new-read-more"
                    href={`${process.env.NEXT_PUBLIC_WEB_BASE}/articles`}
                    target="_blank"
                  >
                    <i className="fa fa-external-link" aria-hidden="true"></i> View
                    More...
                  </a>
                </p>
                {articles.map((data,index) => (
                 <div key={index}>
                    <a
                      href={data.article_url}
                      title="Aries November 2024 Monthly Horoscope Predictions | Aries November 2024 Horoscope"
                    >
                      <img
                        className="article-img"
                        src={data.image_url}
                        alt="1234"
                      />
                    </a>
                    <div className="col-txt">
                      <p>
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        {/* {data.publish_timestamp} */}
                        {new Date(data.publish_timestamp * 1000).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                                })}
                      </p>
                      <a
                        className="teaser-title"
                        href={data.article_url}
                        title="Aries November 2024 Monthly Horoscope Predictions | Aries November 2024 Horoscope"
                      >
                        {data.title}
                      </a>
                    </div>
                    </div>
                ))}
              </div>

              <div className="art-blog">
                <p className="art-title">
                  BLOGS{" "}
                  <a
                    className="new-read-more"
                    href={`${process.env.NEXT_PUBLIC_WEB_BASE}/blogs`}
                    target="_blank"
                  >
                    <i className="fa fa-external-link" aria-hidden="true"></i> View
                    More...
                  </a>
                </p>

                <div className="one-times">
                  {blogs.map((data, index) => (
                    <div className="slide-artblog" key={index}>
                      <a
                        title="Favorite Offerings for Lord Hanuman"
                        href={data.link}
                      >
                        <img
                          width="100"
                          height="100"
                          src={data.imgurl}
                          alt={data.alt}
                        />
                      </a>
                      <div className="col-txt">
                        <p>
                          <i className="fa fa-clock-o" aria-hidden="true"></i>
                          {data.date}
                        </p>
                        <a href={data.link}>{data.title}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
