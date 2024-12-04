import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Phone,
  Twitter,
} from "lucide-react";
import { useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import about from "../assets/about-img.png";
import "bootstrap/dist/css/bootstrap.min.css";
import doctor1 from "../assets/Programmer1.png";
import doctor2 from "../assets/Programmer2.png.jpg";
import doctor3 from "../assets/Programmer3.jpg";
import doctor4 from "../assets/Programmer4.png";
import quickIcon from "../assets/quick-icon.png";
import footer1 from "../assets/img-4.png";
import footer2 from "../assets/img-5.png";

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      {/* header section start */}
      <div className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    A
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Service">
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#doctors">
                    Doctors
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact Us
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0"></form>
            </div>
          </nav>
          <div className="custom_bg">
            <div className="custom_menu">
              <ul>
                <li className="active">
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#Service">Service</a>
                </li>
                <li>
                  <a href="#doctors">Our Team</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <form className="form-inline my-2 my-lg-0">
              <div className="search_btn">
                <li className="signin_text" onClick={handleLogout}>
                  Log out
                </li>
                {/* <li>
                  <a href="#">
                    <i className="fa fa-search" aria-hidden="true" />
                  </a>
                </li> */}
              </div>
            </form>
          </div>
        </div>
        {/* header section end */}
        {/* banner section start */}
        <div className="banner_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="banner_taital">We care Of You</h1>
                <p className="banner_text">
                  Welcome in your assistant to get better from your diabete{" "}
                </p>
                <div className="read_bt">
                  <a href="#Service">To Service</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* banner section end */}
      </div>
      {/* header section end */}
      {/* appointment section start */}
      {/* Service section start */}
      <div id="Service" className="treatment_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="treatment_taital">Our Service</h1>
            </div>
          </div>
          <div className="treatment_section_2">
            <div className="row Service_main">
              <div className="col-lg-3 col-sm-6 ">
                <h1 className="number_text">01</h1>
                <h2 className="care_text">Log in</h2>
                <p className="treatment_text_1">
                  Make sure you have a registered account{" "}
                </p>
                <div className="readmore_bt">
                  <a href="signin">Log In</a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <h1 className="number_text">02</h1>
                <h2 className="care_text">Eye Image</h2>
                <p className="Service_text_1">
                  Make sure you have been uploaded your eye img{" "}
                </p>
                <div className="readmore_bt">
                  <a href="eye">UPLOAD</a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <h1 className="number_text">03</h1>
                <h2 className="care_text">Fill data</h2>
                <p className="Service_text_1">
                  Make sure you have been fill your midical data
                </p>
                <div className="readmore_bt">
                  <a href="#">FILL</a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <h1 className="number_text">04</h1>
                <h2 className="care_text">To May-X</h2>
                <p className="Service_text_1">
                  After this steps you will be able to use ChatBot
                </p>
                <div className="readmore_bt">
                  <a href="chat-bot">TO BOT</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service section end */}

      {/* How It Works Section Start */}
      <div id="how-it-works" className="how_it_works_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="how_it_works_title">How It Works</h1>
            </div>
          </div>
          <div className="row">
            {/* Image 1 */}
            <div className="col-md-4">
              <div className="how_it_works_box">
                <img src={doctor2} alt="Step 1" className="how_it_works_img" />
                <h4 className="step_title">Step 1: Diagnosis</h4>
                <p className="step_description">
                  We analyze your medical data to diagnose potential risks.
                </p>
              </div>
            </div>
            {/* Image 2 */}
            <div className="col-md-4">
              <div className="how_it_works_box">
                <img src={doctor2} alt="Step 2" className="how_it_works_img" />
                <h4 className="step_title">Step 2: Advice</h4>
                <p className="step_description">
                  Receive personalized advice based on your condition.
                </p>
              </div>
            </div>
            {/* Image 3 */}
            <div className="col-md-4">
              <div className="how_it_works_box">
                <img src={doctor2} alt="Step 3" className="how_it_works_img" />
                <h4 className="step_title">Step 3: Consultation</h4>
                <p className="step_description">
                  Get in touch with real doctors for further assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How It Works Section End */}

      {/* Combined About and Doctors Section Start */}
      <div id="about" className="about_doctors_section layout_padding">
        <div className="container">
          {/* About Us Section */}
          <div className="row about_main">
            <div className="col-md-6 about-text">
              <h1 className="about_taital">About Us</h1>
              <p className="about_text">
                Our service is dedicated to supporting individuals with diabetes
                by leveraging advanced technology and personalized care. Using
                state-of-the-art tools, we analyze retinal images, blood tests,
                and tailored surveys to provide insights into your health.
                Additionally, we offer a smart chatbot designed to monitor your
                condition, provide timely advice, and guide you through managing
                your health effectively. Our goal is to empower you with the
                tools and knowledge needed to live a healthier and more balanced
                life.
              </p>
              <h2 className="values_title">Our Values</h2>
              <ul className="values_list">
                <li>
                  <i className="fas fa-lightbulb"></i> Innovation
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Accuracy
                </li>
                <li>
                  <i className="fas fa-user-shield"></i> User Care and Data
                  Protection
                </li>
              </ul>
            </div>
            <div className="col-md-6 about-img">
              <div className="about_img">
                <img src={about} alt="About Us" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="about_doctors_section layout_padding">
        <div className="container">
          {/* About Us Section */}

          {/* Doctors Section */}
          <div id="doctors" className="doctors_section mt-5">
            <div className="row">
              <div className="col-md-12">
                <h1 className="doctors_taital">Meet Our Team</h1>
              </div>
            </div>
            <div className="team_gallery d-flex flex-wrap justify-content-between">
              {[
                {
                  name: "Mohammed Elsayed Atwan",
                  img: doctor1,
                  role: "Doctor",
                  socials: ["#"],
                },
                {
                  name: "Abdo EL-Gazzar",
                  img: doctor2,
                  role: "Doctor",
                  socials: ["#"],
                },
                {
                  name: "Youssef Khalaf",
                  img: doctor3,
                  role: "Doctor",
                  socials: ["#"],
                },
                {
                  name: "Hossam Elganyny",
                  img: doctor4,
                  role: "Doctor",
                  socials: ["#"],
                },
              ].map((doc, index) => (
                <div className="doctor_card col-md-3 mb-4" key={index}>
                  <div className="card">
                    <img
                      src={doc.img}
                      alt={doc.name}
                      className="card-img-top img-fluid rounded-circle"
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{doc.name}</h5>
                      <p className="card-text">{doc.role}</p>
                      <div className="social_icons">
                        {doc.socials.map((link, i) => (
                          <a href={link} key={i} className="social_icon_link">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Combined About and Doctors Section End */}

      {/* FAQ section start */}
      <div id="blog" className="testimonial_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="testimonial_taital">FAQ</h1>
            </div>
          </div>
          <div className="customer_section_2">
            <div className="row">
              <div className="col-md-12">
                <div className="box_main">
                  <div
                    id="main_slider"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="customer_main">
                          <div className="customer_right">
                            <h3 className="customer_name">
                              AI EAGLES{" "}
                              <span className="quick_icon">
                                <img src={quickIcon} />
                              </span>
                            </h3>
                            <p className="default_text">Default model text,</p>
                            <p className="enim_text">
                              editors now use Lorem Ipsum as their default model
                              text, and a search for 'lorem ipsum' will uncover
                              many web sites still in their infancy.
                              Variouseditors now use Lorem Ipsum as their
                              default model text, and a search for 'lorem ipsum'
                              will uncover many web sites still in their
                              infancy. Variouseditors now use Lorem Ipsum as
                              their default model text, and a search for 'lorem
                              ipsum' will uncover many web sites still in their
                              infancy. Various
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="customer_main">
                          <div className="customer_right">
                            <h3 className="customer_name">
                              Morijorch{" "}
                              <span className="quick_icon">
                                <img src={quickIcon} />
                              </span>
                            </h3>
                            <p className="default_text">AI EAGLES</p>
                            <p className="enim_text">
                              editors now use Lorem Ipsum as their default model
                              text, and a search for lorem ipsum will uncover
                              many web sites still in their infancy.
                              Variouseditors now use Lorem Ipsum as their
                              default model text, and a search for lorem ipsum
                              will uncover many web sites still in their
                              infancy. Variouseditors now use Lorem Ipsum as
                              their default model text, and a search for 'lorem
                              ipsum' will uncover many web sites still in their
                              infancy. Various
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="customer_main">
                          <div className="customer_right">
                            <h3 className="customer_name">
                              Morijorch{" "}
                              <span className="quick_icon">
                                <img src={quickIcon} />
                              </span>
                            </h3>
                            <p className="default_text">AI EAGLES,</p>
                            <p className="enim_text">
                              editors now use Lorem Ipsum as their default model
                              text, and a search for 'lorem ipsum' will uncover
                              many web sites still in their infancy.
                              Variouseditors now use Lorem Ipsum as their
                              default model text, and a search for 'lorem ipsum'
                              will uncover many web sites still in their
                              infancy. Variouseditors now use Lorem Ipsum as
                              their default model text, and a search for 'lorem
                              ipsum' will uncover many web sites still in their
                              infancy. Various
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#main_slider"
                      role="button"
                      data-slide="prev"
                    >
                      <ChevronLeft />
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#main_slider"
                      role="button"
                      data-slide="next"
                    >
                      <ChevronRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial section end */}
      {/* contact section start
      <div id="contact" className="contact_section layout_padding">
        <div className="container-fluid">
          <div className="contact_section_2">
            <div className="row">
              <div className="col-md-6">
                <h1 className="contact_taital">Get In Touch</h1>
                <form action="">
                  <div className="mail_section_1">
                    <input
                      type="text"
                      className="mail_text"
                      placeholder="Name"
                      name="Name"
                    />
                    <input
                      type="text"
                      className="mail_text"
                      placeholder="Phone Number"
                      name="Phone Number"
                    />
                    <input
                      type="text"
                      className="mail_text"
                      placeholder="Email"
                      name="Email"
                    />
                    <textarea
                      className="massage-bt"
                      placeholder="Massage"
                      rows={5}
                      id="comment"
                      name="Massage"
                      defaultValue={""}
                    />
                    <div className="send_bt">
                      <a href="mailto:ae043784@gmail.com">SEND</a>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6 padding_left_15">
                <div className="map_main">
                  <div className="map-responsive">
                    <iframe
                      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Egypt+كفرالشيخ"
                      width={600}
                      height={600}
                      frameBorder={0}
                      style={{ border: 0, width: "100%" }}
                      allowFullScreen=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* contact section end */}
      {/* footer section start */}
      <div className="footer_section">
        <div className="container">
          <div className="input_bt">
            <input
              type="text"
              className="mail_bt"
              placeholder="Enter Your Email"
              name="Enter your email"
            />
            <span className="subscribe_bt" id="basic-addon2">
              <a href="#">Subscribe</a>
            </span>
          </div>
          <div className="footer_section_2">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <h3 className="footer_taital">Address</h3>
                <div className="location_main">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-map-marker" aria-hidden="true" />
                        <span className="padding_15">
                          Making this the first true
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone" aria-hidden="true" />
                        <span className="padding_15">Call : +201069642954</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope" aria-hidden="true" />
                        <span className="padding_15">
                          Email : ae043784@gmail.com
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer_social_icon">
                  <ul>
                    <li>
                      <a href="#">
                        <Facebook />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Twitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Linkedin />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Instagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <h3 className="footer_taital">Useful Link</h3>
                <div className="footer_menu">
                  <ul>
                    <li className="active">
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#Service">Service</a>
                    </li>
                    <li>
                      <a href="doctors.html">Doctors</a>
                    </li>
                    <li>
                      <a href="news.html">News</a>
                    </li>
                    <li>
                      <a href="Service.html">Service</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <h3 className="footer_taital">Help &amp; Support</h3>
                <p className="ipsum_text">
                  Opposed to using 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages and
                  web page
                </p>
              </div>
              <div className="col-lg-3 col-sm-6">
                <h3 className="footer_taital">News</h3>
                <div className="dryfood_text">
                  <img src={footer1} />
                  <span className="padding_15">Normal distribution</span>
                </div>
                <div className="dryfood_text">
                  <img src={footer2} />
                  <span className="padding_15">Normal distribution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer section end */}
      {/* copyright section start */}
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">
            2024 All Rights Reserved. Design by{" "}
            <a href="https://html.design">Free Html Templates</a> Distribution
            By <a href="https://themewagon.com">ThemWagons</a>
          </p>
        </div>
      </div>
      {/* co
       */}
    </>
  );
};

export default HomePage;
