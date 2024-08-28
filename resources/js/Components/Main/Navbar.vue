<template>
    <header :class="['header navbar-fixed-top navbar-decorations', { 'navbar-scrolled': hasScrolled }]">
        <nav class="navbar" role="navigation">
            <div class="container">
                <div class="menu-container justify-content-between">
                    <img class="navbar-image d-block d-sm-none" :style="{ 'width': isMenuOpen ? '60px' : '20px' }"
                        src="@/../src/img/dc_Logo_w_ico_transparent.png" alt="FlameOnePage Logo" />

                    <button type="button" class="navbar-toggle" @click="toggleMenu">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="toggle-icon"></span>
                    </button>
                </div>

                <div :class="['nav-collapse', { 'is-open': isMenuOpen }]">
                    <div class="menu-container">
                        <ul class="nav navbar-nav navbar-nav-right">
                            <li class="js_nav-item nav-item" @click="hideMenu"><a class="nav-item-child item-child"
                                    href="#body">Home</a></li>
                            <li class="js_nav-item nav-item" @click="hideMenu"><a class="nav-item-child item-child"
                                    href="#about">Team</a></li>
                            <li class="js_nav-item nav-item" @click="hideMenu"><a class="nav-item-child item-child"
                                    href="#services">Services</a></li>
                            <li class="js_nav-item nav-item" @click="hideMenu"><a class="nav-item-child item-child"
                                    href="#products">Projects</a></li>
                            <li class="js_nav-item nav-item" @click="hideMenu"><a class="nav-item-child item-child"
                                    href="#technologies">Technologies</a></li>
                            <li class="js_nav-item nav-item" @click="hideMenu"><a class="nav-item-child item-child"
                                    href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const hasScrolled = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const hideMenu = () => {
    isMenuOpen.value = false;
};

const handleScroll = () => {
    hasScrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.header {
    transition: background-color 0.3s ease;
    border: none;
}

.navbar-decorations {
    background-color: transparent;
    border: none;
}

.navbar-scrolled {
    background: rgba(111, 112, 112, 0.253);
    border-radius: 10px;
    backdrop-filter: blur(40px);
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border: none;
}

.navbar,
.menu-container,
.navbar-toggle {
    border: none;
}

ul.navbar-nav>li>a {
    border: none;
}

img.navbar-image {
    border: none;
}

.toggle-icon {
    border: none;
}
</style>
