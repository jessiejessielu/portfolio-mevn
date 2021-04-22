<template>

<div>

    <section class="portfolio-details">
        <div class="container">

                <div class="portfolio-details-container ">
                
                    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">

                         <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="/images/astroboy1.jpg" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                            <img src="/images/astroboy2.jpg" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                            <img src="/images/astroboy3.jpg" class="d-block w-100" alt="...">
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
                            <h3>Astroboy</h3>
                                <ul>
                                    <li><strong>Category</strong>: Game</li>
                                    <li><strong>Technology</strong>: ZIM JS</li>
                                    <li><strong>Project Data:</strong>: 28 March 2021</li>
                                    <li><strong>Github</strong>:<a href="https://lujess.dev.fast.sheridanc.on.ca/AstroBoy/">Live Demo</a></li>
                                </ul>
                    </div>

                </div>
        </div>

    </section>

     <section id="about" class="about">
            <div class="container">

                <div class="section-title">
                        <h2>Project Overview</h2>
                        <p> Astroboy is a little game developed by a canvas framework called ZIM</p> 
                </div>
            


                <div id="about" class="paddsection">
                    <div class="container">
                        <div class="row justify-content-between">

                            <div class="col-lg-4 ">
                                    <div class="div-img-bg">
                                        <div class="about-img"><img src="/images/astroboy2.jpg" class="img-responsive" alt="me"></div>
                                    </div>
                            </div>

                            <div class="col-lg-7">
                                <div class="about-descr">
                                    <p class="p-heading">MY ROLES</p>
                                    <p class="separator"> I designed and developed the game from initial idea to coding and from multiple interactions to fully fledged functional product.</p>
                                    <p class="p-heading">TECHOLOGY</p>
                                    <p class="separator"> </p>
                                        <ul>
                                            <li >ZIMJS: Game Setting(scoring & Timing) Music toggle Switch </li><br/>
                                            <li >BOX2D & ZIM Physics: Player Control, Element Animation & Hitting Events, Etc.</li><br/>                     
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