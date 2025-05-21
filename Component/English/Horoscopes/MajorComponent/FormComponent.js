

"use client"; // Ensure this is treated as a client-side component
import { useState, useEffect } from "react";

export default function FormComponent({ formCategory }) {
  
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    captchaInput: "",
    slectname: "",
  });

  const [captchaNum1, setCaptchaNum1] = useState(null);
  const [captchaNum2, setCaptchaNum2] = useState(null);

  const [errors, setErrors] = useState({
    fname: "",
    email: "",
    captchaInput: "",
    slectname: "",
  });

  const [success, setSuccess] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // This effect is responsible for generating captcha numbers only on the client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCaptchaNum1(Math.floor(Math.random() * 10));
      setCaptchaNum2(Math.floor(Math.random() * 10));
    }
  }, []); // Runs only once on mount (client-side)

  // Scroll event listener for the sidebar and blog form behavior
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const sidebarForm = document.querySelector(".new-horo-fixed");
        const blogForm = document.querySelector(".new-horo-subcribe");
        const tagElement = document.querySelector("#tag");
        const footer = document.querySelector(".av-foot-bg");

        if (sidebarForm && blogForm && footer) {
          const footerOffsetTop = footer.offsetTop;
          const formHeight = blogForm.offsetHeight;

          if (window.scrollY > sidebarForm.offsetTop && window.scrollY + formHeight < footerOffsetTop) {
            blogForm.classList.remove("rel-box");
            blogForm.classList.add("fixed-box");
          } else {
            blogForm.classList.remove("fixed-box");
            blogForm.classList.add("rel-box");
          }

          if (tagElement && window.scrollY > tagElement.offsetTop) {
            blogForm.classList.remove("fixed-box");
            blogForm.classList.add("rel-box");
          }
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []); // Runs only on client side


  useEffect(() => {
    fetchLocationAndSetCookies();
  }, []);

  const fetchLocationAndSetCookies = async () => {
    try {
      const res = await fetch("https://ipinfo.io/json"); // Replace with your IPInfo token
      const locationData = await res.json();
      const { country, city } = locationData;

      // console.log(country,city)
      // Set cookies for country and city
      document.cookie = `country=${country}; path=/; max-age=3600;`;
      document.cookie = `city=${city}; path=/; max-age=3600;`;
    } catch (error) {
      console.error("Error fetching location data", error);
    }
  };



  // Form submission logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setIsFormValid(true);

    let formErrors = { ...errors };
    let isValid = true;

    // Validate name
    if (!formData.fname) {
      formErrors.fname = "Name is required";
      isValid = false;
    } else if (!/^[A-Za-z]+$/.test(formData.fname)) {
      formErrors.fname = "Please enter a valid text";
      isValid = false;
    }

    // Validate email
    if (!formData.email) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Validate captcha
    const sum = captchaNum1 + captchaNum2;
    if (!formData.captchaInput) {
      formErrors.captchaInput = "Captcha is required";
      isValid = false;
    } else if (parseInt(formData.captchaInput) !== sum) {
      setSuccess("Captcha is incorrect");
      isValid = false;
      setIsFormValid(false);
    }

    if (!formData.slectname) {
      formErrors.slectname = "Please select a Moon sign";
      isValid = false;
    }

    if (!isValid) {
      setErrors(formErrors);
      setIsFormValid(false);
      setLoading(false);
      return;
    }

    // If everything is valid, clear errors and prepare the payload
    setErrors({
      fname: "",
      email: "",
      captchaInput: "",
      slectname: "",
    });

    const payload = {
      name: formData.fname,
      emailaddress: formData.email,
      shopid: 1,
      trackingcode: "articles",
      addtoifs: false,
      tagName: "MembershipOptin",
      sendemail: true,
      createaccount: true,
      templatename: "NewslettersWelcomeMailer.html",
      benefits: "membership",
      returnurl: "optin-thankyou.aspx",
      locale: "en-US",
      currency: "USD",
    };

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BLOG_FORM1, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();
        setSuccess(result);
        setFormData({ fname: "", email: "", captchaInput: "", slectname: "" });

        const xmlPayload = {
          emailId: formData.email,
          SubscriberName: formData.fname,
          Title: "horoscopes",
          city: city,
          countrycode: country,
        };

        const secondResponse = await fetch(process.env.NEXT_PUBLIC_BLOG_FORM2, {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(xmlPayload),
        });

        if (!secondResponse.ok) {
          setSuccess("Second form submission failed. Please try again.");
        }
      } else {
        setErrors({ ...formErrors, api: "Failed to submit the form. Please try again." });
      }
    } catch (error) {
      setErrors({ ...formErrors, api: "An error occurred. Please try again." });
    } finally {
      setLoading(false);
    }

    // Reset captcha numbers
    setCaptchaNum1(Math.floor(Math.random() * 10));
    setCaptchaNum2(Math.floor(Math.random() * 10));
  };

  return (
    <>
      {formCategory === "SlideForm" && (
        <div className="right-panel yeaely-right-panel"id="single-file">
          <div className="fixed-astrospeaks1">
            <a href="https://www.astroved.com/astrovedspeaks?promo=SL_HOROSCOPE_MONTHLY_ASTROVEDSPEAKS">
              <img src="/horoscope_Images/talk-to-astrologers.jpg" alt="Astroved Speaks" title="Talk to India's Best Astrologers" width="452" height="316" />
            </a>
          </div>
          <div className="new-horo-fixed">
            <div className="new-horo-subcribe rel-box">
              <h5>
                <img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}free-horo.webp`} alt="Daily Free Horoscope" />
                <span className="daily-txt">Daily</span>
                <span className="free-txt">FREE</span>
                <br />
                <span className="text-cont">Get Daily Horoscope For Your Moon Sign Every Day</span>
              </h5>
              <h6>Enter Your Name &amp; Email ID For Free Daily Horoscope</h6>
              <form name="horoscopeform" method="post" action="#result" id="horoscopeform" noValidate="noValidate" onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="name"
                  name="fname"
                  placeholder="Enter your Name"
                  value={formData.fname}
                  onChange={handleInputChange}
                />
                {errors.fname && <span style={{ color: "red", fontSize: "15px", fontWeight: "500" }}>{errors.fname}</span>}
              
                <div className="clear">
              </div>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <span style={{ color: "red", fontSize: "15px", fontWeight: "500" }}>{errors.email}</span>}
                <select name="slectname" id="subscriberMoonSign" value={formData.slectname} onChange={handleInputChange} aria-labelledby="state">
                  <option value="">Choose your Moonsign</option>
                  <option value="Aries">Aries</option>
                  <option value="Taurus">Taurus</option>
                  <option value="Gemini">Gemini</option>
                  <option value="Cancer">Cancer</option>
                  <option value="Leo">Leo</option>
                  <option value="Virgo">Virgo</option>
                  <option value="Libra">Libra</option>
                  <option value="Scorpio">Scorpio</option>
                  <option value="Sagittarius">Sagittarius</option>
                  <option value="Capricorn">Capricorn</option>
                  <option value="Aquarius">Aquarius</option>
                  <option value="Pisces">Pisces</option>
                </select>
                {errors.slectname && <span style={{ color: "red", fontSize: "15px", fontWeight: "500" }}>{errors.slectname}</span>}
               
                <div className="captcha-wrap">
                  
                  Resolve the simple captcha below:
                  <br/>
                  <div className="captcha-box">
                    <span className="captcha-txt">
                      {captchaNum1} + {captchaNum2} =
                    </span>
                    <input
                      type="text"
                      id="captcha"
                      name="captchaInput"
                       aria-label="captcha"
                      value={formData.captchaInput}
                      onChange={handleInputChange}
                      maxLength="2"
                    />
                    {errors.captchaInput && <span style={{ color: "red", fontSize: "15px", fontWeight: "500" }}>{errors.captchaInput}</span>}
                  </div>
                </div>
                <button type="submit" id="nlButton">
                  Subscribe Now
                </button>
                {loading && <div id="ajaxLoaderSub"><img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}ajax-loader.gif`} /></div>}
              </form>
              {success && (
                <div
                  id="NewsletterMsgSub"
                  className="nl-success"
                  style={{
                    backgroundColor: isFormValid ? "#aaedaa85" : "#ff00000a", // Green if valid, red if there's an error
                    color: isFormValid ? "#1e6d1e" : "red",
                    border: isFormValid ? "1px solid #1e6d1e" : "1px solid #ff0000",
                    padding: "6px 20px",
                    borderRadius: "5px",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  {success}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
        {/* <div className="clear"></div> */}
      {formCategory === "Static" && (
        <>
         <div className="clear"></div>
        <div className="subscribe-sec">
          <div className="container">
            <div className="av-sub-form">
              <h6>SUBSCRIBE</h6>
              <div className="hr"></div>
              <p>for our daily horoscope mailers</p>
            </div>
            <div className="row">
              <div className="col-lg-12 input-form">
                <form
                  name="horoscopeform"
                  method="post"
                  action="#result"
                  id="horoscopeform"
                  className="main-form"
                  noValidate="noValidate"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-lg-3 col-md-3">
                      <input
                        type="text"
                        id="name"
                        name="fname"
                        placeholder="Enter your Name"
                        className="form-io"
                        value={formData.fname}
                        onChange={handleInputChange}
                      />
                      {errors.fname && <span style={{ color: "red", fontSize: "15px", fontWeight: "500" }}>{errors.fname}</span>}
                    </div>
                    <div className="col-lg-3 col-md-3">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="form-io"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && <span style={{ color: "red", fontSize: "15px", fontWeight: "500" }}>{errors.email}</span>}
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <select name="slectname" id="subscriberMoonSign" className="form-list" value={formData.slectname} onChange={handleInputChange} aria-labelledby="state">
                        <option value="">Choose your Moonsign</option>
                        <option value="Aries">Aries</option>
                        <option value="Taurus">Taurus</option>
                        <option value="Gemini">Gemini</option>
                        <option value="Cancer">Cancer</option>
                        <option value="Leo">Leo</option>
                        <option value="Virgo">Virgo</option>
                        <option value="Libra">Libra</option>
                        <option value="Scorpio">Scorpio</option>
                        <option value="Sagittarius">Sagittarius</option>
                        <option value="Capricorn">Capricorn</option>
                        <option value="Aquarius">Aquarius</option>
                        <option value="Pisces">Pisces</option>
                      </select>
                      {errors.slectname && <span style={{ color: "red", fontSize: "15px", fontWeight: "500" }}>{errors.slectname}</span>}
                    </div>
                    <div className="col-lg-3 col-md-12">
                      <div className="captcha-wrap mt-10">
                        <span className="cap-text">Resolve the simple captcha below:</span> <br />
                        <div className="captcha-box">
                          <span className="captcha-txt">
                            {captchaNum1} + {captchaNum2} =
                          </span>
                          <input
                            type="text"
                            id="captcha"
                            name="captchaInput"
                            aria-label="captcha"
                            value={formData.captchaInput}
                            onChange={handleInputChange}
                            maxLength="2"
                          />
                          {errors.captchaInput && <span style={{ color: "red", fontSize: "15px", fontWeight: "500" }}>{errors.captchaInput}</span>}
                        </div>
                       
                      </div>
                    </div>
                  </div>
                  <input type="submit" id="nlButton" className="btn-form" value="Sign Up" />
                  {loading && <div id="ajaxLoaderSub"><img src={`${process.env.NEXT_PUBLIC_HOROSCOPE_IMAGES}ajax-loader.gif`} /></div>}
                </form>
                {success && (
                  <div
                    id="NewsletterMsgSub"
                    className="nl-success"
                    style={{
                      border: isFormValid ? "1px solid #74e98a" : "1px solid #fe2829",
                      backgroundColor: isFormValid ? "white" : "#f7f8ff", // Green if valid, red if there's an error
                      color: isFormValid ? "black" : "#fe2829",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    {success}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div></>
      )}
    </>
  );
}
