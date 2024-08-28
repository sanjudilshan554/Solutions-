<template>
    <footer class="footer text-center footer-content background-setup">
        <div class="content container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="row ">
                         <div class="col-xs-12">
                            <ul class="list-unstyled footer-list ">
                                <li class="footer-list-item d-flex align-items-center gap-2 icon-padding">
                                    <a href="tel:+94712988298" ><i class="bi bi-telephone-fill footer-cons  text-color-white"></i></a>
                                </li>
                                <li class="footer-list-item d-flex align-items-center gap-2 ">
                                    <a href="mailto:sanjudilshan554@gmail.com"   class="icon-padding"><i class="bi bi-envelope-fill text-color-white footer-cons"></i> </a>
                                </li>
                                <li class="footer-list-item icon-padding"><a href="https://web.facebook.com/profile.php?id=100049952920825" target="blank"><i class="bi bi-facebook footer-cons text-color-white"></i></a>
                                </li>
                                <li class="footer-list-item icon-padding"><a href="https://www.linkedin.com/in/sanjudilshan/" target="blank"> <i class="bi bi-linkedin footer-cons text-color-white"></i></a>
                                </li>
                                <li class="footer-list-item"><a href="https://www.youtube.com/@dashakacreation" target="blank"><i class="bi bi-youtube footer-cons text-color-white"></i></a></li>
                            </ul>
                    </div>
                </div>

                <div class=""><img class="footer-logo text-color-white" src="@/../src/img/dc_Logo_wd_transparent.png"
                        alt="DC Solutions Logo"></div>

                <div class="copyright">
                    <div class="text-color-white">
                        © {{ currentYear }} <a class="fweight-700 mt-3 text-color-white" href="#">DC Solutions</a> All rights
                        reserved
                    </div>
                </div>
            </div>
        </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear().toString());
</script>