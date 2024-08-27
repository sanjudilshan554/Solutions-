<template>
    <AppLayout>
        <template #content>

            <!-- Slider -->
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <swiper :modules="[Autoplay]" :autoplay="{ delay: 8000 }" loop :slides-per-view="1"
                            :speed="1000" :space-between="0" class="swiper-decorations">
                            <swiper-slide v-for="(img, index) in header_images" :key="index">
                                <img :src="img.src" :alt="img.alt" class="img-responsive" />
                                <div class="container">
                                    <div class="carousel-centered header-image">
                                        <div class="margin-b-40">
                                            <h1 class="carousel-title">{{ img.title }}</h1>
                                            <p class="color-white">{{ img.description }}</p>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>

            <!-- Services -->
            <div id="services background-setup">
                <div class="bg-color-sky-light" data-auto-height="true">
                    <div class="content-lg container">
                        <div class="row margin-b-40">
                            <div class="col-sm-6">
                                <h2 class="text-shadow text-color-yellow">Services</h2>
                                <p class="text-color-white">We specialize in creating compelling digital experiences
                                    with our wide range of
                                    services, including professional website development, and expert
                                    computer repair and assembly. We also offer software installation and advertisement
                                    creation, ensuring your business stands out both online and offline.</p>
                            </div>
                        </div>


                        <div class="row row-space-1 margin-b-2">
                            <div class="col-sm-4 sm-margin-b-2 ">
                                <div class="service service-card" data-height="height">
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
                            <div class="col-sm-4 sm-margin-b-2 service-card">
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
                            <div class="col-sm-4 service-card">
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
            <div id="about" class="about background-setup">
                <div class="content-lg container">
                    <div class="masonry-grid row">
                        <div class="masonry-grid-sizer col-xs-6 col-sm-6 col-md-1"></div>
                        <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-4 sm-margin-b-30 "
                            style="border-radius: 10px !important;">
                            <div class="margin-b-60">
                                <h2 class="text-color-yellow text-shadow">Creative thinking</h2>
                                <p class="text-color-white">Unlock innovative solutions tailored to your unique needs,
                                    driven by a
                                    forward-thinking approach that encourages out-of-the-box ideas.</p>
                            </div>
                            <img class="full-width img-responsive wow fadeInUp border-radius"
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
                            <img class="full-width img-responsive wow fadeInUp border-radius "
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
                            <img class="full-width img-responsive wow fadeInUp border-radius"
                                src="@/../src/img/500x500/3.png" alt="Portfolio Image" data-wow-duration=".3"
                                data-wow-delay=".4s">
                        </div>
                    </div>
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
            <div id="products" class="projects background-setup">
                <div class="content-lg container">
                    <div class="row margin-b-40">
                        <div class="col-sm-6">
                            <h2 class="text-color-yellow text-shadow">Recent Projects</h2>
                            <p class="text-color-white">Discover our latest work focused on innovation, community
                                growth, and impactful solutions. These projects highlight our commitment to enhancing
                                user experiences and driving meaningful change."</p>
                        </div>
                    </div>


                    <div class="row">
                        <!-- Latest Products -->
                        <div class="col-sm-4   wow fadeInUp" @click="openProductModal(1)">
                            <div class="margin-b-20">
                                <img class="img-responsive border-radius project-images"
                                    src="@/../src/img/970x647/01.png" alt="Latest Products Image">
                            </div>
                            <h4><a href="#" class="project-keyword">KUPPI Conductor</a> <span
                                    class="text-uppercase margin-l-20">Knowledge Sharing
                                </span>
                            </h4>
                            <p>Base on knowledge sharing, Features include user registration,
                                user profiles, and smart qualification based on expertise.</p>
                            <a class="link" href="#">Details</a>
                        </div>
                        <!-- End Latest Products -->

                        <!-- Latest Products -->
                        <div class="col-sm-4 wow fadeInUp" @click="openProductModal(2)">
                            <div class="margin-b-20">
                                <img class="img-responsive border-radius project-images"
                                    src="@/../src/img/970x647/02.png" alt="Latest Products Image">
                            </div>
                            <h4><a href="#" class="project-keyword">SL innovation</a> <span
                                    class="text-uppercase margin-l-20">Innovation & Creativity</span></h4>
                            <p>Invent new things, creating objects, archive goals, give ratings,
                                posting Blog, get support,instructions to patent
                                SQLservices are available on this site.</p>
                            <a class="link" href="#">Details</a>
                        </div>
                        <!-- End Latest Products -->

                        <!-- Latest Products -->
                        <div class="col-sm-4 wow fadeInUp" @click="openProductModal(3)">
                            <div class="margin-b-20">
                                <img class="img-responsive border-radius project-images"
                                    src="@/../src/img/970x647/03.png" alt="Latest Products Image">
                            </div>
                            <h4><a href="#" class="project-keyword">Blood donator</a> <span
                                    class="text-uppercase margin-l-20">Health & Social Good</span>
                            </h4>
                            <p>Find, make and accept donation requests, update personal event
                                timelines, and facilitate blood donations for those in need.</p>
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

            <!-- Technologies -->
            <div id="work" class="work background-setup">
                <div class="content-lg container">
                    <swiper :modules="[Autoplay]" :autoplay="{ delay: 2000 }" loop :slides-per-view="4"
                        space-between="20">
                        <swiper-slide v-for="(img, index) in images" :key="index">
                            <img :src="img.src" :alt="img.alt" class="technology-images" />
                        </swiper-slide>
                    </swiper>
                </div>
            </div>

            <div id="contact" class="contact background-setup">
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

        <template #modal>

            <!-- Kuppi Conductor Modal -->
            <div class="modal fade bd-example-modal-lg" id="kc-modal" tabindex="-1" role="dialog"
                aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">

                        <div class="row">
                            <div class="col-6"></div>
                            <div class="col-6"> <button type="button"
                                    class="close position-absolute text-light modal-header-text close-btn-header"
                                    @click.prevent="closeBloodDonationModal" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" class="close-btn-middle">
                                        <i class="bi bi-x-circle-fill close-btn"></i>
                                    </span>
                                </button></div>
                        </div>



                        <div class="text-light text-center mt-2 modal-header-text">
                            KUPPI CONDUCTOR</div>
                        <p class=" text-center text-light">A Social Learning Management System</p>
                        <div class="d-flex justify-content-center">
                            <div class="card justify-content-center image-border">
                                <img :src="projectImage[0]" class="card-img-top w-100" alt="missed">
                                <div class="card-body d-flex">
                                    <p class="justify-content-center text-light text-center modal-description">Kuppi
                                        Conductor is an innovative
                                        Learning Management System (LMS) that goes beyond traditional online education
                                        platforms by integrating entertainment and social interaction. It offers a
                                        vibrant community-driven environment where students and lecturers collaborate,
                                        share knowledge, and support each other’s learning journey.</p>
                                </div>

                                <div class="row">
                                    <div class="col-6">
                                        <ul class="">
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i>Student Requests and
                                                Lecturers Interaction <p>Students can directly request assistance or
                                                    guidance from lecturers,
                                                    making the learning process more interactive and personalized. The
                                                    platform allows lecturers to respond to queries and mentor students
                                                    based on their needs.</p>
                                            </li>
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i>Knowledge Sharing
                                                Among Students & Lectures <p> Not only Students, Lectures also can share
                                                    their expertise, insights, and
                                                    learning experiences with others by posting content related to
                                                    various topics. This peer-to-peer knowledge sharing builds a
                                                    collaborative learning environment, allowing them to learn from
                                                    one another.</p>
                                            </li>
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i>Skill and Profile
                                                Management <p>Each student has a personalized profile showcasing their
                                                    skills and expertise. Students can highlight their strengths, making
                                                    it easier for others to identify them as valuable resources for
                                                    learning in specific domains.</p>
                                            </li>
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i>Intelligent Learning
                                                Area Matching <p>When students search for topics they want to learn, the
                                                    system automatically suggests the most relevant individuals
                                                    (students or lecturers) based on their profiles and past
                                                    performance. This intelligent matching feature ensures that learners
                                                    connect with the right person for targeted knowledge.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-6">
                                        <ul class="">
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i>Entertainment-Enhanced
                                                Learning <p>Unlike conventional LMS platforms, Kuppi Conductor
                                                    incorporates entertainment elements, transforming learning into an
                                                    engaging experience. Students can share posts, collaborate on
                                                    discussions, and enjoy a more relaxed and enjoyable learning
                                                    atmosphere.</p>
                                            </li>
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i>Community Engagement
                                                and Connectivity <p>The platform fosters a strong community where
                                                    everyone—students and lecturers—can interact, share resources, and
                                                    help each other grow. It’s more than just an LMS; it’s a social
                                                    network focused on collaborative learning.</p>
                                            </li>
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i>Content Posting and
                                                Social Features <p>The platform fosters a strong community where
                                                    everyone—students and lecturers—can interact, share resources, and
                                                    help each other grow. It’s more than just an LMS; it’s a social
                                                    network focused on collaborative learning.</p>
                                            </li>
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i>Gamification for
                                                Enhanced Learning Experience<p>Kuppi Conductor incorporates gamification
                                                    elements such as badges, points, and leaderboards to motivate
                                                    students and make learning more engaging. As students participate in
                                                    knowledge sharing, complete tasks, or help others, they earn
                                                    rewards, fostering a competitive yet fun learning atmosphere.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Blood Donation Modal -->
            <div class="modal fade bd-example-modal-lg" id="blood-donation-modal" tabindex="-1" role="dialog"
                aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">

                    <div class="modal-content" style="overflow: hidden;">
                        <div class="row">
                            <div class="col-6"></div>
                            <div class="col-6"> <button type="button"
                                    class="close position-absolute text-light modal-header-text close-btn-header"
                                    @click.prevent="closeBloodDonationModal" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" class="close-btn-middle">
                                        <i class="bi bi-x-circle-fill close-btn"></i>
                                    </span>
                                </button></div>
                        </div>

                        <div class="text-light text-center mt-2 modal-header-text">
                            BloodConnect</div>
                        <p class=" text-center text-light">A Community-Driven Blood Donation App</p>
                        <div class="d-flex justify-content-center">
                            <div class="card justify-content-center image-border">
                                <img :src="projectImage[0]" class="card-img-top w-100" alt="missed">
                                <div class="card-body d-flex">
                                    <p class="justify-content-center text-light text-center modal-description">
                                        BloodConnect is a blood donation app that seamlessly connects donors with
                                        recipients while fostering community engagement through social posts, real-time
                                        alerts, and donation campaigns. The platform also offers personalized matching,
                                        rewards, and collaboration features to make saving lives easier and more
                                        interactive.</p>
                                </div>

                                <div class="row">
                                    <div class="col-6">
                                        <ul class="">
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i>Seamless Blood Donor
                                                Matching and Requests<p>BloodConnect offers an intuitive platform where
                                                    users in need of blood can easily request donations. The system
                                                    intelligently matches donors based on location, blood type, and
                                                    availability, making it faster and more reliable to find the right
                                                    donor in critical situations.</p>
                                            </li>
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i>Social Collaboration
                                                and Knowledge Sharing<p>Beyond donations, BloodConnect allows users to
                                                    share posts, updates, and stories related to blood donation and
                                                    healthcare. This social aspect helps build awareness, encourages
                                                    discussions, and fosters a community where everyone can contribute
                                                    their ideas and knowledge.
                                                </p>
                                            </li>
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i> Personalized Donor
                                                and Recipient Profiles <p> Each user has a dedicated profile that
                                                    showcases their blood type, donation history, and availability.
                                                    Donors and recipients can easily manage their profiles, set
                                                    preferences, and update their status in real-time.
                                                </p>
                                            </li>
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i>Blood Donation
                                                Campaigns and Events <p>Users can create and join local blood donation
                                                    drives, campaigns, and events. The app provides tools to organize
                                                    these events, send out notifications, and track participation,
                                                    making it easier to mobilize communities for a common cause.</p>
                                            </li>

                                        </ul>
                                    </div>
                                    <div class="col-6">
                                        <ul class="">
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i>Emergency Alerts and
                                                Notifications<p> In urgent situations, the app sends out real-time
                                                    notifications to nearby donors who match the required blood type.
                                                    This feature ensures that emergencies are addressed swiftly,
                                                    reducing the time taken to locate and connect with donors.</p>
                                            </li>
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i>Gamified Experience
                                                with Recognition and Rewards <p>To keep users engaged and motivated,
                                                    BloodConnect includes gamification features such as badges, points,
                                                    and rankings for frequent donors. Users earn recognition for their
                                                    contributions, which helps build a sense of accomplishment and
                                                    community spirit.</p>
                                            </li>
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i>Health Tips and
                                                Educational Resources<p>The app also offers valuable resources,
                                                    including health tips, articles, and guides related to blood
                                                    donation and overall wellness. Users can access expert advice, stay
                                                    informed, and learn how to maintain good health while supporting
                                                    others.</p>
                                            </li>
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i>Interactive
                                                Donor-Recipient Communication<p>BloodConnect provides secure and direct
                                                    messaging between donors and recipients, allowing them to
                                                    communicate, coordinate, and plan donation schedules effectively.
                                                    This personal interaction makes the donation process smoother and
                                                    more convenient for everyone involved.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SL innovation Modal -->
            <div class="modal fade bd-example-modal-lg" id="sl-innovation-modal" tabindex="-1" role="dialog"
                aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content" style="overflow: hidden;">

                         <div class="row">
                            <div class="col-6"></div>
                            <div class="col-6"> <button type="button"
                                    class="close position-absolute text-light modal-header-text close-btn-header"
                                    @click.prevent="closeBloodDonationModal" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" class="close-btn-middle">
                                        <i class="bi bi-x-circle-fill close-btn"></i>
                                    </span>
                                </button></div>
                        </div>

                        <div class="text-light text-center mt-2 modal-header-text">
                            SL Innovation</div>
                        <p class=" text-center text-light">Empowering Ideas and Innovation</p>
                        <div class="d-flex justify-content-center">
                            <div class="card justify-content-center image-border">
                                <img :src="projectImage[0]" class="card-img-top w-100" alt="missed">
                                <div class="card-body d-flex">
                                    <p class="justify-content-center text-light text-center modal-description">SL
                                        Innovation is a platform for Sri Lankan innovators to showcase their ideas,
                                        apply for patents, share knowledge, and connect with experts. The app supports
                                        collaboration, provides patent assistance, and offers resources to turn
                                        innovative ideas into successful ventures.</p>
                                </div>

                                <div class="row">
                                    <div class="col-6">
                                        <ul class="">
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i>Platform for
                                                Showcasing Innovations <p>SL Innovation provides a dedicated platform
                                                    where users can post and share their innovative ideas and projects,
                                                    helping them gain visibility and recognition across Sri Lanka.</p>
                                            </li>
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i>Patent Support and
                                                Guidance<p> NInnovators can apply for patents directly through the
                                                    platform, with expert guidance and resources available to help
                                                    protect their intellectual property.</p>
                                            </li>
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i>Collaborative
                                                Knowledge Sharing<p>The platform encourages users to share insights,
                                                    best practices, and learnings through posts and blogs, fostering a
                                                    culture of open innovation and knowledge exchange.
                                                </p>
                                            </li>
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i>Connect with Experts
                                                and Technicians<p>WUsers can seek help from skilled technicians,
                                                    industry experts, and mentors, making it easier to bring their ideas
                                                    to life through collaboration and expert advice.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-6">
                                        <ul class="">
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i>Innovation-Focused
                                                Blog Space<p>The platform features a dedicated blog section where users
                                                    can publish articles, stories, and tips related to innovation,
                                                    contributing to a growing library of resources.
                                                </p>
                                            </li>
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i>Idea Collaboration
                                                and Team Building<p>SL Innovation allows users to find and collaborate
                                                    with like-minded individuals, forming teams to work together on
                                                    innovative projects, boosting the potential for success.</p>
                                            </li>
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i> Innovation
                                                Competitions and Challenges<p> The platform hosts regular innovation
                                                    competitions and challenges, giving users opportunities to showcase
                                                    their ideas, compete, and win recognition or rewards.</p>
                                            </li>
                                            <li class="text-light text-left list-style-none"><i
                                                    class="bi bi-arrow-right-circle-fill mr-2"></i>Support for Idea
                                                Commercialization<p>Innovators can access resources and connect with
                                                    investors or business partners who can help take their ideas from
                                                    concept to market, enabling real-world impact.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </template>
    </AppLayout>
</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import { onMounted, ref } from 'vue';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import WOW from 'wow.js';
import SmoothScroll from 'smooth-scroll';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';

import KCHomeImage from '@/../src/img/projects/KC/KC_Main.png';
import BloodDonationHomeImage from '@/../src/img/projects/Blood Donation/Blood_Donation_Main.png';
import SLInnovationHomeImage from '@/../src/img/projects/SL innovation/SL_Main.png';

const projectImage = ref({});

const images = [
    { src: new URL('@/../src/img/technologies/01.png', import.meta.url).href, alt: 'Clients Logo' },
    { src: new URL('@/../src/img/technologies/02.png', import.meta.url).href, alt: 'Clients Logo' },
    { src: new URL('@/../src/img/technologies/03.png', import.meta.url).href, alt: 'Clients Logo' },
    { src: new URL('@/../src/img/technologies/04.png', import.meta.url).href, alt: 'Clients Logo' },
    { src: new URL('@/../src/img/technologies/05.png', import.meta.url).href, alt: 'Clients Logo' },
    { src: new URL('@/../src/img/technologies/06.png', import.meta.url).href, alt: 'Clients Logo' },
    { src: new URL('@/../src/img/technologies/07.png', import.meta.url).href, alt: 'Clients Logo' },
    { src: new URL('@/../src/img/technologies/08.png', import.meta.url).href, alt: 'Clients Logo' },
];

const projectOne = ref([
    KCHomeImage,
]);

const projectTwo = ref([
    SLInnovationHomeImage,
]);

const projectThree = ref([
    BloodDonationHomeImage,
]);



const header_images = [
    {
        src: new URL('@/../src/img/1920x1080/bg05.jpg', import.meta.url).href,
        alt: 'Clients Logo',
        title: 'DC Solutions',
        description: 'Delivering Innovative Software Solutions for a Digital Future'
    },
    {
        src: new URL('@/../src/img/1920x1080/bg06.jpg', import.meta.url).href,
        alt: 'Clients Logo',
        title: 'Empowering Your Business',
        description: 'Delivering Innovative Software Solutions for a Digital Future'
    },
    {
        src: new URL('@/../src/img/1920x1080/bg07.jpg', import.meta.url).href,
        alt: 'Clients Logo',
        title: 'Accelerating Business Growth',
        description: 'Pioneering Digital Software for a New Age'
    },
    {
        src: new URL('@/../src/img/1920x1080/bg08.jpg', import.meta.url).href,
        alt: 'Clients Logo',
        title: 'Connecting Your Business',
        description: 'Unlocking Digital Potential in a Globalized World'
    },
    {
        src: new URL('@/../src/img/1920x1080/bg09.jpg', import.meta.url).href,
        alt: 'Clients Logo',
        title: 'Enhancing Business Agility',
        description: 'Delivering Reliable Solutions for a Tech-Driven Era'
    },
    {
        src: new URL('@/../src/img/1920x1080/bg10.jpg', import.meta.url).href,
        alt: 'Clients Logo',
        title: 'Transforming Your Business',
        description: 'Leading the Way with Digital Innovation and Cloud Solutions'
    },
    {
        src: new URL('@/../src/img/1920x1080/bg11.jpg', import.meta.url).href,
        alt: 'Clients Logo',
        title: 'Future-Proofing Your Business',
        description: 'Empowering Growth with AI and Intelligent Technologies'
    },
    {
        src: new URL('@/../src/img/1920x1080/bg12.jpg', import.meta.url).href,
        alt: 'Clients Logo',
        title: 'Propelling Your Business Forward',
        description: 'Pioneering Tomorrow’s Digital Solutions Today'
    },
];

const openProductModal = (id) => {
    if (id == 1) {
        projectImage.value = projectOne.value;
        $('#kc-modal').modal('show');
    }
    if (id == 2) {
        projectImage.value = projectTwo.value;
        $('#sl-innovation-modal').modal('show');
    }
    if (id == 3) {
        projectImage.value = projectThree.value;
        $('#blood-donation-modal').modal('show');
    }
}

const closeKcModal = () => {
    $('#kc-modal').modal('hide');
}

const closeSLModal = () => {
    $('#sl-innovation-modal').modal('hide');
}

const closeBloodDonationModal = () => {
    $('#blood-donation-modal').modal('hide');
}



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