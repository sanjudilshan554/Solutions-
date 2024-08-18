<template>
    <header class="header navbar-fixed-top navbar-decorations">
        <nav class="navbar" role="navigation">
            <div class="container">
                <div class="menu-container d-flex justify-content-between">
                    <img class="navbar-image d-block d-sm-none" :style="{ 'width': isMenuOpen ? '60px' : '20px' }"
                        src="@/../src/img/dc_Logo_color_transparent_N.png" alt="FlameOnePage Logo" />

                    <button type="button" class="navbar-toggle" @click="toggleMenu">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="toggle-icon"></span>
                    </button>
                </div>

                <div :class="['nav-collapse', { 'is-open': isMenuOpen }]">
                    <div class="menu-container">
                        <ul class="nav navbar-nav navbar-nav-right">
                            <li class="js_nav-item nav-item " @click="hideMenu"><a class="nav-item-child text-color-yellow"
                                    href="#body">Home</a></li>
                            <li class="js_nav-item nav-item" @click="hideMenu"><a class="nav-item-child text-color-yellow"
                                    href="#about">Team</a></li>
                            <li class="js_nav-item nav-item" @click="hideMenu"><a class="nav-item-child text-color-yellow"
                                    href="#services">Services</a></li>
                            <li class="js_nav-item nav-item" @click="hideMenu"><a class="nav-item-child text-color-yellow"
                                    href="#products">Products</a></li>
                            <li class="js_nav-item nav-item" @click="hideMenu"><a class="nav-item-child text-color-yellow"
                                    href="#work">Credentials</a></li>
                            <li class="js_nav-item nav-item" @click="hideMenu"><a class="nav-item-child text-color-yellow" 
                                    href="#pricing">Pricing</a></li>
                            <li class="js_nav-item nav-item" @click="hideMenu"><a class="nav-item-child text-color-yellow"
                                    href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const hideMenu = () => {
    isMenuOpen.value = false;
};
</script>

<style scoped>

</style>
