import './bootstrap';
import '../css/app.css';

import '@/../../resources/src/vendor/jquery.min.js';
import '@/../../resources/src/vendor/jquery-migrate.min.js';
import '@/../../resources/src/vendor/bootstrap/js/bootstrap.min.js';
import '@/../../resources/src/vendor/jquery.easing.js';
import '@/../../resources/src/vendor/jquery.back-to-top.js';
import '@/../../resources/src/vendor/swiper/js/swiper.jquery.min.js';
import '@/../../resources/src/vendor/swiper/js/swiper.jquery.min.js';
import '@/../../resources/src/vendor/swiper/js/swiper.jquery.min.js';
import '@/../../resources/src/js/components/swiper.min.js';


// import '@/../../resources/src/vendor/jquery.smooth-scroll.js';
// import '@/../../resources/src/vendor/masonry/jquery.masonry.pkgd.min.js';
// import '@/../../resources/src/vendor/masonry/imagesloaded.pkgd.min.js';
// import '@/../../resources/src/js/components/wow.min.js';
// import '@/../../resources/src/js/components/wow.min.js';
// import '@/../../resources/src/js/components/masonry.min.js';


// import '@/../../resources/src/js/layout.min.js';




import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
