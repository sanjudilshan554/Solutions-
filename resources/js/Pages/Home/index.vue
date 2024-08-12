<template>
    <AppLayout>
        <template #content>
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                <div class="container">
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>
                </div>
                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img class="img-responsive" src="@/../src/img/1920x1080/bg01.png" alt="Slider Image">
                        <div class="container">
                            <div class="carousel-centered">
                                <div class="margin-b-40">
                                    <h1 class="carousel-title">DC Solutions</h1>
                                    <p class="color-white">Experience the Decade of Excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img class="img-responsive" src="@/../src/img/1920x1080/bg03.png" alt="Slider Image">
                        <div class="container">
                            <div class="carousel-centered">
                                <div class="margin-b-40">
                                    <h2 class="carousel-title">Building Tomorrow, Today</h2>
                                    <p class="color-white">dedication to delivering top-notch services and solutions.
                                        <br>It
                                        suggests that DC Solutions is not just about getting the job done but doing it
                                        with exceptional quality, <br> ensuring that every project meets the highest
                                        standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img class="img-responsive" src="@/../src/img/1920x1080/bg06.png" alt="Slider Image">
                        <div class="container">
                            <div class="carousel-centered">
                                <div class="margin-b-40">
                                    <h2 class="carousel-title">Longevity and Experience</h2>
                                    <p class="color-white">The mention of a decade implies a long-term vision and
                                        experience.
                                        <br>It indicates that your company has the expertise to create lasting solutions
                                        that stand the test of time.<br> It also suggests that you are prepared for
                                        long-term relationships with your clients, offering them stability and
                                        reliability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!--========== SLIDER ==========-->

            <!--========== PAGE LAYOUT ==========-->
            <div id="services">
                <div class="bg-color-sky-light" data-auto-height="true">
                    <div class="content-lg container">
                        <div class="row margin-b-40">
                            <div class="col-sm-6">
                                <h2 class="text-shadow" style="color:#FFEA00">Services</h2>
                                <p class="text-color-white">We specialize in creating compelling digital experiences
                                    with our wide range of
                                    services, including professional website development, and expert
                                    computer repair and assembly. We also offer software installation and advertisement
                                    creation, ensuring your business stands out both online and offline.</p>
                            </div>
                        </div>


                        <div class="row row-space-1 margin-b-2">
                            <div class="col-sm-4 sm-margin-b-2">
                                <div class="service" data-height="height">
                                    <div class="service-element">
                                        <!-- <i class="service-icon icon-chemistry"></i> -->
                                        <i class="service-icon bi bi-file-code text-color-yellow"></i>
                                    </div>
                                    <div class="service-info">
                                        <h3 class="text-color-yellow">Website Development</h3>
                                        <p class="margin-b-5 text-color-white">Creating responsive, user-friendly, and
                                            visually appealing
                                            websites tailored to your business needs .</p>
                                    </div>
                                    <a href="#" class="content-wrapper-link"></a>
                                </div>
                            </div>
                            <div class="col-sm-4 sm-margin-b-2">
                                <div class="service" data-height="height">
                                    <div class="service-element">
                                        <i class="service-icon bi bi-badge-ad text-color-yellow"></i>
                                    </div>
                                    <div class="service-info">
                                        <h3 class="text-color-yellow">Advertisement Creation</h3>
                                        <p class="margin-b-5 text-color-white">Designing impactful advertisements that
                                            effectively
                                            promote your products or services.</p>
                                    </div>
                                    <a href="#" class="content-wrapper-link"></a>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="service" data-height="height">
                                    <div class="service-element">
                                        <i class="service-icon bi bi-tools text-color-yellow"></i>
                                    </div>
                                    <div class="service-info">
                                        <h3 class="text-color-yellow">Repairing & Installation</h3>
                                        <p class="margin-b-5 text-color-white">Expert repairs, custom builds, and
                                            efficient software
                                            installations to keep your devices running smoothly.
                                        </p>
                                    </div>
                                    <a href="#" class="content-wrapper-link"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- About -->
            <div id="about" class="about">
                <div class="content-lg container">
                    <!-- Masonry Grid -->
                    <div class="masonry-grid row">
                        <div class="masonry-grid-sizer col-xs-6 col-sm-6 col-md-1"></div>
                        <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-4 sm-margin-b-30 ">
                            <div class="margin-b-60">
                                <h2 class="text-color-yellow text-shadow">Creative thinking</h2>
                                <p class="text-color-white">Unlock innovative solutions tailored to your unique needs,
                                    driven by a
                                    forward-thinking approach that encourages out-of-the-box ideas.</p>
                            </div>
                            <img class="full-width img-responsive wow fadeInUp border-radius creative-thinking"
                                src="@/../src/img/500x500/1.png" alt="Portfolio Image" data-wow-duration=".3"
                                data-wow-delay=".2s">
                        </div>
                        <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-4">
                            <div class="margin-b-60">
                                <h2 class="text-color-yellow text-shadow">Easy Integration</h2>
                                <p class="text-color-white">Seamlessly blend our technology with your existing systems,
                                    ensuring a smooth and
                                    hassle-free setup that saves time and resources.</p>
                            </div>
                            <img class="full-width img-responsive wow fadeInUp border-radius creative-thinking"
                                src="@/../src/img/500x500/2.png" alt="Portfolio Image" data-wow-duration=".3"
                                data-wow-delay=".3s">
                        </div>
                        <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-4">
                            <div class="margin-t-60 margin-b-60">
                                <h2 class="text-color-yellow text-shadow">Superior Support</h2>
                                <p class="text-color-white">Benefit from our dedicated support team, always ready to
                                    assist you with prompt,
                                    personalized help whenever you need it.</p>
                            </div>
                            <img class="full-width img-responsive wow fadeInUp border-radius creative-thinking"
                                src="@/../src/img/500x500/3.png" alt="Portfolio Image" data-wow-duration=".3"
                                data-wow-delay=".4s">
                        </div>
                    </div>
                    <!-- End Masonry Grid -->
                </div>

                <div class="bg-color-sky-light">
                    <div class="content-lg container">
                        <div class="row">
                            <div class="col-md-5 col-sm-5 md-margin-b-60">
                                <div class="why-us-section" style="text-align:center; margin: 0px 0 30px;">
                                    <h2 class="text-color-yellow text-shadow" style=" margin-bottom: 20px;">Why Us?</h2>
                                    <img class="wow fadeInUp" style="width: 210px; margin-bottom: 20px;"
                                        src="@/../src/img/500x500/why_transparent.png" alt="Why Us Image"
                                        data-wow-duration=".3" data-wow-delay=".4s">
                                    <p class="text-color-white"
                                        style=" line-height: 1.6; margin: 0 auto; max-width: 600px;">
                                        We deliver innovative, tailored solutions that integrate seamlessly with your
                                        systems. With proven expertise and a customer-first approach, we ensure your
                                        success through effortless integration and unparalleled support every step of
                                        the way.
                                    </p>
                                </div>

                                <!-- <a href="#" class="btn-theme btn-theme-sm btn-white-bg text-uppercase">More...</a> -->
                            </div>
                            <div class="col-md-5 col-sm-7 col-md-offset-2">
                                <!-- Accordion -->
                                <div class="accordion">
                                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                        <div class="panel panel-default why-us-radius" style="background-color: black;">
                                            <div class="panel-heading why-us-radius" role="tab" id="headingOne">
                                                <h4 class="panel-title why-us-radius">
                                                    <a class="panel-title-child why-us-radius" role="button"
                                                        data-toggle="collapse" data-parent="#accordion"
                                                        href="#collapseOne" aria-expanded="true"
                                                        aria-controls="collapseOne">
                                                        Innovative Solutions
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel"
                                                aria-labelledby="headingOne">
                                                <div class="panel-body">
                                                    We embrace creativity and innovation, offering
                                                    cutting-edge
                                                    solutions that are tailored to meet the unique needs of your
                                                    business, ensuring
                                                    you stay ahead in the market.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default why-us-radius">
                                            <div class="panel-heading why-us-radius" role="tab" id="headingTwo">
                                                <h4 class="panel-title why-us-radius">
                                                    <a class="collapsed panel-title-child why-us-radius" role="button"
                                                        data-toggle="collapse" data-parent="#accordion"
                                                        href="#collapseTwo" aria-expanded="false"
                                                        aria-controls="collapseTwo">
                                                        Effortless Integration
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel"
                                                aria-labelledby="headingTwo">
                                                <div class="panel-body why-us-radius">
                                                    Our products are designed with simplicity in
                                                    mind, allowing for quick and seamless integration with your existing
                                                    systems.
                                                    This means less downtime and more focus on what matters most—growing
                                                    your
                                                    business.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default why-us-radius">
                                            <div class="panel-heading why-us-radius" role="tab" id="headingThree">
                                                <h4 class="panel-title why-us-radius">
                                                    <a class="collapsed panel-title-child why-us-radius" role="button"
                                                        data-toggle="collapse" data-parent="#accordion"
                                                        href="#collapseThree" aria-expanded="false"
                                                        aria-controls="collapseThree">
                                                        Proven Expertise:
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel"
                                                aria-labelledby="headingThree">
                                                <div class="panel-body">
                                                    With a wealth of experience in the industry, our team
                                                    brings deep knowledge and a track record of success to help you
                                                    achieve your
                                                    business goals efficiently and effectively.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Accodrion -->
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!-- End About -->

            <!-- Latest Products -->
            <div id="products" class="projects">
                <div class="content-lg container">
                    <div class="row margin-b-40">
                        <div class="col-sm-6">
                            <h2 class="text-color-yellow text-shadow">Recent Projects</h2>
                            <p class="text-color-white">Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                                tempor incididunt ut laboret
                                dolore magna aliqua enim minim veniam exercitation</p>
                        </div>
                    </div>


                    <div class="row">
                        <!-- Latest Products -->
                        <div class="col-sm-4 sm-margin-b-50">
                            <div class="margin-b-20">
                                <img class="img-responsive border-radius" src="@/../src/img/970x647/01.jpg"
                                    alt="Latest Products Image">
                            </div>
                            <h4><a href="#">Interior</a> <span class="text-uppercase margin-l-20">Architecture</span>
                            </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret
                                dolor magna ut consequat siad esqudiat dolor</p>
                            <a class="link" href="#">Details</a>
                        </div>
                        <!-- End Latest Products -->

                        <!-- Latest Products -->
                        <div class="col-sm-4 sm-margin-b-50">
                            <div class="margin-b-20">
                                <img class="img-responsive border-radius" src="@/../src/img/970x647/02.jpg"
                                    alt="Latest Products Image">
                            </div>
                            <h4><a href="#">Trend</a> <span class="text-uppercase margin-l-20">Setting</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret
                                dolor magna ut consequat siad esqudiat dolor</p>
                            <a class="link" href="#">Details</a>
                        </div>
                        <!-- End Latest Products -->

                        <!-- Latest Products -->
                        <div class="col-sm-4 sm-margin-b-50">
                            <div class="margin-b-20">
                                <img class="img-responsive border-radius" src="@/../src/img/970x647/03.jpg"
                                    alt="Latest Products Image">
                            </div>
                            <h4><a href="#">Fresh Style</a> <span class="text-uppercase margin-l-20">Philosophy</span>
                            </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret
                                dolor magna ut consequat siad esqudiat dolor</p>
                            <a class="link" href="#">Details</a>
                        </div>
                        <!-- End Latest Products -->
                    </div>

                </div>
            </div>
            <!-- End Latest Products -->

            <!-- Pricing -->
            <!-- <div id="pricing">
                <div class="bg-color-sky-light">
                    <div class="content-lg container">
                        <div class="row row-space-1">
                            <div class="col-sm-4 sm-margin-b-2">
                                <div class="pricing">
                                    <div class="margin-b-30">
                                        <i class="pricing-icon icon-chemistry"></i>
                                        <h3>Silver Package <span> - $</span> 74.99</h3>
                                        <p>Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                    </div>
                                    <ul class="list-unstyled pricing-list margin-b-50">
                                        <li class="pricing-list-item">Starter Kit</li>
                                        <li class="pricing-list-item">Basic Features</li>
                                        <li class="pricing-list-item">Annual Report</li>
                                    </ul>
                                    <a href="pricing.html"
                                        class="btn-theme btn-theme-sm btn-default-bg text-uppercase">Start Now</a>
                                </div> 
                            </div>
                            <div class="col-sm-4 sm-margin-b-2"> 
                                <div class="pricing pricing-active">
                                    <div class="margin-b-30">
                                        <i class="pricing-icon icon-badge"></i>
                                        <h3>Gold Package <span> - $</span> 199.99</h3>
                                        <p>Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                    </div>
                                    <ul class="list-unstyled pricing-list margin-b-50">
                                        <li class="pricing-list-item">Professional Kit</li>
                                        <li class="pricing-list-item">Full Options</li>
                                        <li class="pricing-list-item">Bi-anual Report</li>
                                    </ul>
                                    <a href="pricing.html"
                                        class="btn-theme btn-theme-sm btn-default-bg text-uppercase">Start Now</a>
                                </div> 
                            </div>
                            <div class="col-sm-4"> 
                                <div class="pricing">
                                    <div class="margin-b-30">
                                        <i class="pricing-icon icon-shield"></i>
                                        <h3>Platinum Package <span> - $</span> 500</h3>
                                        <p>Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                    </div>
                                    <ul class="list-unstyled pricing-list margin-b-50">
                                        <li class="pricing-list-item">Complete Kit</li>
                                        <li class="pricing-list-item">Advanced Options</li>
                                        <li class="pricing-list-item">Monthly Report</li>
                                    </ul>
                                    <a href="pricing.html"
                                        class="btn-theme btn-theme-sm btn-default-bg text-uppercase">Start Now</a>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- End Pricing -->

            <!-- Work -->
            <div id="work" class="work">
                <div class="section-seperator">
                    <div class="content-md container">
                        <div class="row margin-b-40">
                            <div class="col-sm-6">
                                <h2 class="text-color-yellow">Portfolio</h2>
                                <p class="text-color-white">Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut
                                    laboret dolore magna aliqua enim minim veniam exercitation</p>
                            </div>
                        </div>


                        <!-- Masonry Grid -->
                        <div class="masonry-grid row">
                            <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-4 md-margin-b-30">
                                <!-- Work -->
                                <div class="work work-popup-trigger">
                                    <div class="work-overlay">
                                        <img class="full-width img-responsive" src="@/../src/img/397x300/01.jpg"
                                            alt="Portfolio Image">
                                    </div>
                                    <div class="work-popup-overlay">
                                        <div class="work-popup-content">
                                            <a href="javascript:void(0);" class="work-popup-close">Hide</a>
                                            <div class="margin-b-30">
                                                <h3 class="margin-b-5">Art Of Coding</h3>
                                                <span>Clean &amp; Minimalistic Design</span>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-8 work-popup-content-divider sm-margin-b-20">
                                                    <div class="margin-t-10 sm-margin-t-0">
                                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit
                                                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                            occaecat cupidatat non proident, sunt in culpa qui officia
                                                            deserunt mollit anim id est laborum.</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                                            do eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                                        <ul class="list-inline work-popup-tag">
                                                            <li class="work-popup-tag-item"><a
                                                                    class="work-popup-tag-link" href="#">Strategy,</a>
                                                            </li>
                                                            <li class="work-popup-tag-item"><a
                                                                    class="work-popup-tag-link"
                                                                    href="#">Implementation,</a></li>
                                                            <li class="work-popup-tag-item"><a
                                                                    class="work-popup-tag-link" href="#">Credentials</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="margin-t-10 sm-margin-t-0">
                                                        <p class="margin-b-5"><strong>Project Manager:</strong> Boris
                                                            Becker</p>
                                                        <p class="margin-b-5"><strong>Executive:</strong> Heike Macatsch
                                                        </p>
                                                        <p class="margin-b-5"><strong>Architect:</strong> Oliver Pocher
                                                        </p>
                                                        <p class="margin-b-5"><strong>Client:</strong> FairTech</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Work -->
                            </div>
                            <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-4 md-margin-b-30">
                                <!-- Work -->
                                <div class="work work-popup-trigger">
                                    <div class="work-overlay">
                                        <img class="full-width img-responsive" src="@/../src/img/397x300/02.jpg"
                                            alt="Portfolio Image">
                                    </div>
                                    <div class="work-popup-overlay">
                                        <div class="work-popup-content">
                                            <a href="javascript:void(0);" class="work-popup-close">Hide</a>
                                            <div class="margin-b-30">
                                                <h3 class="margin-b-5">Art Of Coding</h3>
                                                <span>Clean &amp; Minimalistic Design</span>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-8 work-popup-content-divider sm-margin-b-20">
                                                    <div class="margin-t-10 sm-margin-t-0">
                                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit
                                                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                            occaecat cupidatat non proident, sunt in culpa qui officia
                                                            deserunt mollit anim id est laborum.</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                                            do eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                                        <ul class="list-inline work-popup-tag">
                                                            <li class="work-popup-tag-item"><a
                                                                    class="work-popup-tag-link" href="#">Strategy,</a>
                                                            </li>
                                                            <li class="work-popup-tag-item"><a
                                                                    class="work-popup-tag-link"
                                                                    href="#">Implementation,</a></li>
                                                            <li class="work-popup-tag-item"><a
                                                                    class="work-popup-tag-link" href="#">Credentials</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="margin-t-10 sm-margin-t-0">
                                                        <p class="margin-b-5"><strong>Project Manager:</strong> Boris
                                                            Becker</p>
                                                        <p class="margin-b-5"><strong>Executive:</strong> Heike Macatsch
                                                        </p>
                                                        <p class="margin-b-5"><strong>Architect:</strong> Oliver Pocher
                                                        </p>
                                                        <p class="margin-b-5"><strong>Client:</strong> Keenthemes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Work -->
                            </div>
                            <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-4">
                                <!-- Work -->
                                <div class="work work-popup-trigger">
                                    <div class="work-overlay">
                                        <img class="full-width img-responsive" src="@/../src/img/397x300/03.jpg"
                                            alt="Portfolio Image">
                                    </div>
                                    <div class="work-popup-overlay">
                                        <div class="work-popup-content">
                                            <a href="javascript:void(0);" class="work-popup-close">Hide</a>
                                            <div class="margin-b-30">
                                                <h3 class="margin-b-5">Art Of Coding</h3>
                                                <span>Clean &amp; Minimalistic Design</span>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-8 work-popup-content-divider sm-margin-b-20">
                                                    <div class="margin-t-10 sm-margin-t-0">
                                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit
                                                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                            occaecat cupidatat non proident, sunt in culpa qui officia
                                                            deserunt mollit anim id est laborum.</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                                            do eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                                        <ul class="list-inline work-popup-tag">
                                                            <li class="work-popup-tag-item"><a
                                                                    class="work-popup-tag-link" href="#">Strategy,</a>
                                                            </li>
                                                            <li class="work-popup-tag-item"><a
                                                                    class="work-popup-tag-link"
                                                                    href="#">Implementation,</a></li>
                                                            <li class="work-popup-tag-item"><a
                                                                    class="work-popup-tag-link" href="#">Credentials</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="margin-t-10 sm-margin-t-0">
                                                        <p class="margin-b-5"><strong>Project Manager:</strong> Boris
                                                            Becker</p>
                                                        <p class="margin-b-5"><strong>Executive:</strong> Heike Macatsch
                                                        </p>
                                                        <p class="margin-b-5"><strong>Architect:</strong> Oliver Pocher
                                                        </p>
                                                        <p class="margin-b-5"><strong>Client:</strong> Keenthemes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Clients -->
                <div class="content-lg container">
                    <!-- Swiper Clients -->
                    <div class="swiper-slider swiper-clients">
                        <!-- Swiper Wrapper -->
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img class="swiper-clients-img" src="@/../src/img/clients/01.png" alt="Clients Logo">
                            </div>
                            <div class="swiper-slide">
                                <img class="swiper-clients-img" src="@/../src/img/clients/02.png" alt="Clients Logo">
                            </div>
                            <div class="swiper-slide">
                                <img class="swiper-clients-img" src="@/../src/img/clients/03.png" alt="Clients Logo">
                            </div>
                            <div class="swiper-slide">
                                <img class="swiper-clients-img" src="@/../src/img/clients/04.png" alt="Clients Logo">
                            </div>
                            <div class="swiper-slide">
                                <img class="swiper-clients-img" src="@/../src/img/clients/05.png" alt="Clients Logo">
                            </div>
                            <div class="swiper-slide">
                                <img class="swiper-clients-img" src="@/../src/img/clients/06.png" alt="Clients Logo">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact" class="contact">
                <!-- <div class="section-seperator">
                    <div class="content-lg container">
                        <div class="row">
                            <div class="col-sm-4 sm-margin-b-50"> 
                            </div>
                            <div class="col-sm-4 sm-margin-b-50">
                                <h3><a href="http://ft-seo.ch/" class="text-color-yellow">Sanju</a> <span
                                        class="text-uppercase margin-l-20 text-color-yellow " >Development</span></h3>
                                <p class="text-color-white">Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut
                                    laboret dolor magna ut consequat siad esqudiat dolor</p>
                                <ul class="list-unstyled contact-list">
                                    <li class="text-color-white"><i class="margin-r-10  icon-call-out text-color-white"></i> +94 (71) 298 8298</li>
                                    <li class="text-color-white"><i class="margin-r-10  icon-envelope text-color-white"></i>
                                        sanjudilshan554@gmail.com</li>
                                </ul>
                            </div>
                            <div class="col-sm-4 sm-margin-b-50"> 
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="map height-300">

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2200.0604845626394!2d80.8364971!3d6.3396969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173e41d4af403%3A0x0!2zNi4zMzk2OTY5LCA4MC44MzY0OTcx!5e0!3m2!1sen!2sin!4v1691439640664!5m2!1sen!2sin&z=21"
                        width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
            </div>
        </template>
    </AppLayout>
</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import { onMounted } from 'vue';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import WOW from 'wow.js';
import SmoothScroll from 'smooth-scroll';

onMounted(() => {
    new SmoothScroll('a[href*="#"]', {
        speed: 300
    });
    const elem = document.querySelector('.masonry-grid');
    imagesLoaded(elem, () => {
        new Masonry(elem, {
            itemSelector: '.masonry-grid-item',
            columnWidth: '.masonry-grid-sizer',
            percentPosition: true
        });
    });


    new WOW().init();
});

</script>

<style>
.masonry-grid {
    margin: 0 auto;
}

.masonry-grid-item {
    margin-bottom: 16px;
}
</style>