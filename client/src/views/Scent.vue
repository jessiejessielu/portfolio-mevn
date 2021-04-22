<template>

<div>

    <section class="portfolio-details">
        <div class="container">

                <div class="portfolio-details-container ">
                
                    <!-- <div class="owl-carousel portfolio-details-carousel">
                    <img src="/images/scent.jpg" class="img-fluid" alt="">
                    <img src="/images/scent2.jpg" class="img-fluid" alt="">
                    <img src="/images/scent3.jpg" class="img-fluid" alt="">
                    </div> -->

                    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">

                         <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="/images/scent.jpg" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                            <img src="/images/scent2.jpg" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                            <img src="/images/scent3.jpg" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>




                    <div class="portfolio-info">
                            <h3>Scent</h3>
                            <ul>
                            <li><strong>Category</strong>: Mobile App </li>
                            <li><strong>Technology</strong>: HTML, JavaScript, CSS, Node/MongoDB, Luxand API</li>
                            <li><strong>Project Data:</strong>: 05 April 2021</li>
                            <li><strong>Github</strong>:<a href="https://github.com/jessiejessielu/scent">Source Code</a></li>
                            </ul>
                    </div>

                </div>
        </div>

    </section>

    

    <section id="about" class="about">
        <div class="container">

            <div class="section-title">
                <h2>Project Overview</h2>
                <p>Scent® is a powerful trigger to revieve memorites.  
                It allows users to sort throught the album and group user memories according to emotions,
                letting users interact with their memories where the user experienced and expressed the same emotions.</p>            
            </div>


            <div id="about" class="paddsection">
                <div class="container">
                <div class="row justify-content-between">
                    <div class="col-lg-4 ">
                            <div class="div-img-bg">
                                <div class="about-img"> <img src="/images/scent.png" class="img-responsive" alt="me"></div>
                            </div>
                    </div>

                    <div class="col-lg-7">
                            <div class="about-descr">
                                <p class="p-heading">MY ROLES</p>
                                <p class="separator"> I worked as Developer in collaboration with Disah, UI designer and Cora, Product Designer.</p>
                                <p>Working as a Full-Stack Developer in the team, I participated in the concept and wireframe build up, and was responsible for the app development,
                                    including API testing and integration, coding and programming, final debugging and testing.</p>
                            
                                <p class="p-heading">TECHOLOGY</p>
                                <p class="separator"> </p>
                                <ul>
                                    <li >HTML/CSS: Structure and Layout Design</li><br/>
                                    <li >Bootstrap: Layout & Responsive Design</li><br/>
                                    <li >jQuery: Navigation Bar Function, Product Images Display Animation</li><br/>
                                    <li >NodeJS/Express: Routes Management, Server Requests Listening & handling,  </li><br/>
                                    <li >MongoDB: Database Creation & Connection </li><br/>
                                    <li >Luxand API: Emotion recoganization </li><br/>
                                    <li >Heroku/AWS: Website & Domain </li><br/>
                                </ul>

                            </div>

                    </div>
            
                </div>
                </div>
            </div>
        </div>
    </section><!-- End About Section -->



</div>


</template>

<style scoped>



</style>