<template>
  <div id="about" class="about">
    <div class="container">
        <div class="section-title">
            <h2>Hi, I'm Jessie</h2>
            <p>I'm an International Marketer turned Digital Interactive Designer, who's passionate about telling thoughtful story with the combination of design, business and marketing. </p>
        </div>


        <div id="about" class="paddsection">
          <div class="container">
            <div class="row justify-content-between">

                  <div class="col-lg-4 ">
                    <div class="div-img-bg">
                        <div class="about-img">
                          <img src="/images/square.jpg" class="img-responsive" alt="me">
                        </div>
                    </div>
                  </div>

                  <div class="col-lg-7">
                        <div class="about-descr">
                            <p class="p-heading">My marketing background gives me a serious advantage in connecting the dots between real business goals,technical constraints and user satisfaction, while creating better digital experince for PEOPLE.  </p>
                            <p class="separator"> In my past life, I had been working as a dynamic and strategic but also hands-on marketing manager, actively involving in product marketing, campaign management and business development.
                          I have successfully launched new products, strategic plans, developed lead generation
                          and communication campaigns and brand stories resulting in extensive coverage and ultimately
                          sales and profit growth.</p>   

                          <p>  Ready to leverage my skills and experiences to help drive change . </p>           
                        </div>            
                  </div>     
                  
            </div>
          </div>
        </div>

    </div>
  </div><!-- End About Section -->  

</template>

<script>
    export default {
    }
</script>

<style lang="css">
  body {
  background: #ffffff;
  color: #0c0d0d;
  font-family: 'Poppins', helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 0.02em;
  overflow-x: hidden;
  margin: 0 auto;
  padding: 0;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing:border-box;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

h2 {
  color: #292929;
  font-weight: 600;
}

h4 {
  color: #292929;
  font-size: 14px;
  font-weight: 600;
}

a {
  color: #292929;
  text-decoration: none !important;
  transition: all 0.5s ease-in-out 0s;
}


a:hover {
  transition: all 0.5s ease-in-out 0s;
}

a:hover, a:focus {
  color: #b8a07e;
  text-decoration: underline;
}

nav ul li a {
  padding: 2px 0 0 0;
  position: relative;
  display: block;
  font-size: 12px;
  color: #999999;
  letter-spacing: 0.1em;
  font-weight: 500;
  line-height: 14px;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out 0s;
}

p {
  margin: 25px 0;
  padding: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  /* color: #999999; */
  color: #0c0d0d;
  line-height: 28px;
}

::-moz-selection {
  background: #b8a07e;
  color: #fff;
}

::selection {
  background: #b8a07e;
  color: #fff;
}

.btn {
  background: #333;
  border: medium none;
  border-radius: 12;
  color: #fff;
  font-size: 12px;
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
  text-transform: uppercase;
}

.btn:hover, .btn:focus {
  color: #fff;
}

.padDiv {
  padding: 30px 20px;
}

.section-title {
  margin-bottom: 10px;
}

.section-title h2 {
  font-size: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.form-control {
  background-color: transparent;
  border: 1px solid #999;
  border-radius: 0;
  color: #999999;
  font-size: 12px;
  font-weight: 500;
  height: 50px;
  letter-spacing: 0.1em;
  padding-left: 10px;
  margin: 0 0 25px 0;
  line-height: 14px;
  text-transform: uppercase;
}

.form-control:focus {
  box-shadow: none;
  outline: 0 none;
}

.paddsection {
  padding-top: 90px;
  padding-bottom: 90px;
}

.paddsections {
  padding-top: 90px;
  padding-bottom: 90px !important;
}

.hvr-shutter-in-horizontal::before {
  background: #333;
}

.hvr-shutter-in-horizontal:hover {
  background: #b8a07e;
}

.mb-30 {
  margin-bottom: 30px;
}

.main-content {
  padding-top: 140px;
}

/*--------------------------------------------------------------
# Navbar
--------------------------------------------------------------*/
nav {
  position: fixed;
  background: #fff;
  z-index: 1000;
  width: 100%;
  padding: 20px;
  display: none;
  box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.18);
}

.nav-menu {
  float: right;
  line-height: 32px;
  margin-bottom: 0;
  padding-top: 16px;
}

nav ul li {
  float: left;
  margin-right: 15px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  margin-left: 40px;
}

nav ul li a {
  padding: 2px 0 0 0;
  position: relative;
  display: block;
  font-size: 14px;
  color: #999999;
  font-family: 'Poppins', helvetica;
  font-weight: 500;
  line-height: 16px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  text-transform: capitalize;
}

.logo {
  float: left;
}

.logo img {
  width: 80px;
  height: 40px;
}

.responsive {
  display: none;
  font-size: 23px;
}

.active {
  color: #afafaf;
}

/*--------------------------------------------------------------
# Hero
--------------------------------------------------------------*/
#hero {
  background: url("https://lujess.dev.fast.sheridanc.on.ca/JessieLu/assets/bg.jpg") repeat scroll center center/cover;
  height: 100vh;
  width: 100%;
 }


#hero .hero-content {
  height: 100vh;
  text-align: left;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.hero-content h1 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #fff;
}

.hero-content p {
  font-size: 13px;
  letter-spacing: 3px;
  margin-top: 0;
  margin-bottom: 30px;
  text-transform: capitalize;
  color: #fff;
  font-weight: 500;
}

.hero-content .list-social li {
  float: left;
  margin-right: 20px;
}

.hero-content .list-social li i {
  color: #fff;
  font-size: 15px;
}

/*--------------------------------------------------------------
# Breadcrumbs
--------------------------------------------------------------*/
.breadcrumbs {
  padding: 120px 0 0 0;
  background-color: white;
  min-height: 40px;
}

@media (max-width: 992px) {
  .breadcrumbs {
    padding-top: 100px;
  }
}

.breadcrumbs h2 {
  font-size: 24px;
  font-weight: 300;
  margin: 0;
}

@media (max-width: 992px) {
  .breadcrumbs h2 {
    margin: 0 0 10px 0;
  }
}

.breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
}

.breadcrumbs ol li + li {
  padding-left: 10px;
}

.breadcrumbs ol li + li::before {
  display: inline-block;
  padding-right: 10px;
  color: #6c757d;
  content: "/";
}

@media (max-width: 768px) {
  .breadcrumbs .d-flex {
    display: block !important;
  }
  .breadcrumbs ol {
    display: block;
  }
  .breadcrumbs ol li {
    display: inline-block;
  }

}

/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
section {
  padding: 60px 0;
  overflow: hidden;
}

.section-bg {
  background: #f5f8fd;
}

.section-title {
  padding-bottom: 30px;
}

.section-title h2 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  color: #173b6c;
}

.section-title h2::after {
  content: '';
  position: absolute;
  display: block;
  width: 50px;
  height: 3px;
  background: #79c3b2;
  bottom: 0;
  left: 0;
}

.section-title p {
  margin-bottom: 0;
}
/*--------------------------------------------------------------
# Portfolio
--------------------------------------------------------------*/
#portfolio {
  position: relative;
  padding-bottom: 50px;
}

#portfolio #portfolio-flters {
  padding: 0;
  margin: 0 auto 35px auto;
  list-style: none;
  text-align: center;
  border-radius: 50px;
  padding: 2px 15px;
}

#portfolio #portfolio-flters li {
  cursor: pointer;
  display: inline-block;
  padding: 10px 15px 8px 15px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  color: #999999;
  margin-bottom: 5px;
  transition: all 0.3s ease-in-out;
}

#portfolio #portfolio-flters li:hover, #portfolio #portfolio-flters li.filter-active {
  color: #b8a07e;
}

#portfolio #portfolio-flters li:last-child {
  margin-right: 0;
}

#portfolio .portfolio-item {
  margin-bottom: 30px;
}

#portfolio .portfolio-item .portfolio-info {
  opacity: 0;
  position: absolute;
  left: 30px;
  right: 30px;
  bottom: 0;
  z-index: 3;
  transition: all ease-in-out 0.3s;
  background: rgba(255, 255, 255, 0.9);
  padding: 15px;
}

#portfolio .portfolio-item .portfolio-info h4 {
  font-size: 18px;
  color: #666;
  font-weight: 600;
  margin-bottom: 10px;
}

#portfolio .portfolio-item .portfolio-info p {
  color: #999;
  font-size: 14px;
  margin: 0;
  padding: 0;
}

#portfolio .portfolio-item .portfolio-info .preview-link, #portfolio .portfolio-item .portfolio-info .details-link {
  position: absolute;
  right: 40px;
  font-size: 24px;
  top: calc(50% - 18px);
  color: #b8a07e;
}

#portfolio .portfolio-item .portfolio-info .preview-link:hover, #portfolio .portfolio-item .portfolio-info .details-link:hover {
  color: #cab89f;
}

#portfolio .portfolio-item .portfolio-info .details-link {
  right: 10px;
}

#portfolio .portfolio-item:hover .portfolio-info {
  opacity: 1;
  bottom: 20px;
}

/*--------------------------------------------------------------
# Portfolio Details
--------------------------------------------------------------*/
.portfolio-details {
  padding-top: 30px;
}

.portfolio-details .portfolio-details-container {
  position: relative;
}

.portfolio-details .portfolio-details-carousel {
  position: relative;
  z-index: 1;
}

.portfolio-details .portfolio-details-carousel .owl-nav, .portfolio-details .portfolio-details-carousel .owl-dots {
  margin-top: 5px;
  text-align: left;
}

.portfolio-details .portfolio-details-carousel .owl-dot {
  display: inline-block;
  margin: 0 10px 0 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd !important;
}

.portfolio-details .portfolio-details-carousel .owl-dot.active {
  background-color: #b8a07e !important;
}

.portfolio-details .portfolio-info {
  padding: 30px;
  position: absolute;
  right: 0;
  bottom: -70px;
  background: #fff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.portfolio-details .portfolio-info h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.portfolio-details .portfolio-info ul {
  list-style: none;
  padding: 0;
  font-size: 15px;
}

.portfolio-details .portfolio-info ul li + li {
  margin-top: 10px;
}

.portfolio-details .portfolio-description {
  padding-top: 50px;
}

.portfolio-details .portfolio-description h2 {
  width: 50%;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
}

.portfolio-details .portfolio-description p {
  padding: 0 0 0 0;
}

@media (max-width: 768px) {
  .portfolio-details .portfolio-description h2 {
    width: 100%;
  }
  .portfolio-details .portfolio-info {
    position: static;
    margin-top: 30px;
  }
}

/*-----------------------------------------------------------------------------------*/
/*  About
/*-----------------------------------------------------------------------------------*/
#about {
  width: 100%;
  height: auto;
  background: #f7f7f7;
  padding-top: 120px;
}

#about .div-img-bg {
  padding-bottom: 30px;
  border: 20px solid #b8a07e;
}

#about .div-img-bg .about-img img {
  width: 100%;
  box-shadow: 0px 0px 85px 0px rgba(0, 0, 0, 0.14);
  margin-top: -60px;
  margin-left: 40px;
  height: 400px;
  -o-object-fit: cover;
  object-fit: cover;
}

#about .about-descr .p-heading {
  font-family: 'Playfair Display', serif;
  font-size: 21px;
  text-align: left;
  color: #b8a07e;
}

#about .about-descr .separator {
  max-width: 80%;
  margin-bottom: 0;
  text-align: left;
}

/*--------------------------------------------------------------
# Skills
--------------------------------------------------------------*/
.skills .progress {
  height: 50px;
  display: block;
  background: none;
}

.skills .progress .skill {
  padding: 10px 0;
  margin: 0 0 6px 0;
  text-transform: uppercase;
  display: block;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: #050d18;

}

.skills .progress .skill .val {
  float: right;
  font-style: normal;
}

.skills .progress-bar-wrap {
  background: #dce8f8;


 }

.skills .progress-bar {
  width: 1px;
  height: 10px;
  transition: .9s;
  background-color: #79c3b2;
}



@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
  background: #f7f7f7;
  padding-top: 10px;
  padding-bottom: 10px;
}

#footer .socials-media {
  width: 100%;
}

#footer .socials-media ul {
  display: inline-block;
  float: none;
  margin: 0 0 20px 0;
}

#footer .socials-media ul li {
  float: left;
  margin-left: 10px;
  margin-right: 10px;
}

#footer .socials-media ul li a {
  font-size: 24px;
  color: #999;
  letter-spacing: 0.1em;
  font-weight: 500;
  background: transparent;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out 0s;
}

#footer .socials-media ul li a:hover {
  color: #b8a07e;
  transition: all 0.5s ease-in-out 0s;
}

#footer p {
  font-size: 12px;
  letter-spacing: 0.1em;
  font-weight: 500;
  margin-top: 0;
  text-transform: uppercase;
}

.credits {
  font-size: 13px;
}

/** Width between 1200x to 0
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
/** Width between 992px to 1199px
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
/** Width between 768px to 991px
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
@media (min-width: 768px) and (max-width: 991px) {
  /* Navbar */
  nav {
    padding: 10px 15px;
  }
  .nav-menu {
    margin-top: 40px;
    display: none;
    float: none;
    width: 100%;
  }
  .nav-menu li {
    float: none;
    width: 100%;
    text-align: center;
    border-top: 1px solid #f7f7f7;
    line-height: 45px;
    margin-left: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .responsive {
    float: right;
    padding-top: 15px;
    display: block;
  }
  /* About */
  .head-info .header-content .cmaster h1 {
    font-size: 32px;
  }
  #about .div-img-bg {
    padding: 0;
  }
  #about .div-img-bg .about-img img {
    margin-top: 0%;
    margin-left: calc(0% - 0px);
  }
  #about .about-descr .p-heading {
    font-size: 20px;
  }
  #about .about-descr .separator {
    max-width: 100%;
    margin-bottom: 0;
  }
  /* portfolio */
  #portfolio .portfolio-list .nav li {
    float: none;
    margin: 20px;
    display: inline-block;
  }
  /* journal */
  #journal .journal-block .journal-info {
    margin-bottom: 30px;
  }
  /* Contact */
  .contact-contact {
    margin-bottom: 30px;
  }
  /* Footer */
  #footer .socials-media ul li {
    margin-right: 0;
    margin-left: 0;
    float: none;
    display: inline-block;
  }
}

/** Width between 768px to 0
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
@media (max-width: 768px) {

 body, p{
    line-height: 1.5;
}
  /* Navbar */
  nav {
    padding: 20px 15px;
  }
  .nav-menu {
    margin-top: 40px;
    display: none;
    float: none;
    width: 100%;
  }
  .nav-menu li {
    float: none;
    width: 100%;
    text-align: center;
    border-top: 1px solid #f7f7f7;
    line-height: 45px;
    margin-left: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .responsive {
    float: right;
    padding-top: 15px;
    display: block;
  }
  /* About */
  .head-info .header-content h1 {
    font-size: 32px;
  }
  #about .div-img-bg {
    padding: 0;
  }
  #about .div-img-bg .about-img img {
    margin-top: 0%;
    margin-left: calc(0% - 0px);
  }
  #about .about-descr .p-heading {
    font-size: 20px;
  }
  #about .about-descr .separator {
    max-width: 100%;
    margin-bottom: 0;
  }
  /* portfolio */
  #portfolio .portfolio-list .nav li {
    float: none;
    margin: 20px;
    display: inline-block;
  }
  /* journal */
  #journal .journal-block .journal-info {
    margin-bottom: 30px;
  }
  /* Contact */
  .contact-contact {
    margin-bottom: 30px;
  }
  /* Footer */
  #footer .socials-media ul li {
    margin-right: 0;
    margin-left: 0;
    float: none;
    display: inline-block;
  }

  #hero {
    background: url("https://lujess.dev.fast.sheridanc.on.ca/JessieLu/assets/color.jpg") ;
  }

}

/** Width between 600px to 0
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
@media (max-width: 600px) {
  /* Navbar */
  nav {
    padding: 20px 15px;
  }
  .nav-menu {
    margin-top: 40px;
    display: none;
    float: none;
    width: 100%;
  }
  .nav-menu li {
    float: none;
    width: 100%;
    text-align: center;
    border-top: 1px solid #f7f7f7;
    line-height: 45px;
    margin-left: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .responsive {
    float: right;
    padding-top: 15px;
    display: block;
  }
  /* About */
  .head-info .header-content h1 {
    font-size: 32px;
  }
  #about .div-img-bg {
    padding: 0;
  }
  #about .div-img-bg .about-img img {
    margin-top: 0%;
    margin-left: calc(0% - 0px);
  }
  #about .about-descr .p-heading {
    font-size: 20px;
  }
  #about .about-descr .separator {
    max-width: 100%;
    margin-bottom: 0;
  }
  /* portfolio */
  #portfolio .portfolio-list .nav li {
    float: none;
    margin: 10px;
    display: inline-block;
  }
  /* journal */
  #journal .journal-block .journal-info {
    margin-bottom: 30px;
  }
  /* Contact */
  .contact-contact {
    margin-bottom: 30px;
  }
  /* Footer */
  #footer .socials-media ul li {
    margin-right: 0;
    margin-left: 0;
    float: none;
    display: inline-block;
  }
}

/** Width between 480px to 0
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
@media (max-width: 480px) {
  /* Navbar */
  nav {
    padding: 20px 15px;
  }
  .nav-menu {
    margin-top: 40px;
    display: none;
    float: none;
    width: 100%;
  }
  .nav-menu li {
    float: none;
    width: 100%;
    text-align: center;
    border-top: 1px solid #f7f7f7;
    line-height: 45px;
    margin-left: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .responsive {
    float: right;
    padding-top: 15px;
    display: block;
  }
  /* About */
  .head-info .header-content h1 {
    font-size: 32px;
  }
  #about .div-img-bg {
    padding: 0;
  }
  #about .div-img-bg .about-img img {
    margin-top: 0%;
    margin-left: calc(0% - 0px);
  }
  #about .about-descr .p-heading {
    font-size: 20px;
  }
  #about .about-descr .separator {
    max-width: 100%;
    margin-bottom: 0;
  }
  /* portfolio */
  #portfolio .portfolio-list .nav li {
    float: none;
    margin: 20px;
  }
  /* journal */
  #journal .journal-block .journal-info {
    margin-bottom: 30px;
  }
  /* Contact */
  .contact-contact {
    margin-bottom: 30px;
  }
  /* Footer */
  #footer .socials-media ul li {
    margin-right: 0;
    margin-left: 0;
    float: none;
    display: inline-block;
  }
}

/** Width between 320px to 0
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
@media (max-width: 320px) {
  /* Navbar */
  nav {
    padding: 20px 15px;
  }
  .nav-menu {
    margin-top: 40px;
    display: none;
    float: none;
    width: 100%;
  }
  .nav-menu li {
    float: none;
    width: 100%;
    text-align: center;
    border-top: 1px solid #f7f7f7;
    line-height: 45px;
    margin-left: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .responsive {
    float: right;
    padding-top: 15px;
    display: block;
  }
  /* About */
  .head-info .header-content h1 {
    font-size: 32px;
  }
  #about .div-img-bg {
    padding: 0;
  }
  #about .div-img-bg .about-img img {
    margin-top: 0%;
    margin-left: calc(0% - 0px);
  }
  #about .about-descr .p-heading {
    font-size: 20px;
  }
  #about .about-descr .separator {
    max-width: 100%;
    margin-bottom: 0;
  }
  /* portfolio */
  #portfolio .portfolio-list .nav li {
    float: none;
    margin: 20px;
  }
  /* journal */
  #journal .journal-block .journal-info {
    margin-bottom: 30px;
  }
  /* Contact */
  .contact-contact {
    margin-bottom: 30px;
  }
  /* Footer */
  #footer .socials-media ul li {
    margin-right: 0;
    margin-left: 0;
    float: none;
    display: inline-block;
  }
  /* Single page */
  .entry-comments-body span {
    display: inline-block;
    margin-right: 0;
  }
}
</style>