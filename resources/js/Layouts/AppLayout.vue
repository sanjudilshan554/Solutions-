<template>
    <div>
        <Head>
            <slot name="meta_head" />
        </Head>

        <Navbar />

        <main>
            <slot name="content" />

        </main>

        <Footer />
    </div>
</template>

<script setup>
import { Head } from "@inertiajs/vue3";
import Footer from "@/Components/Main/Footer.vue";
import Navbar from "@/Components/Main/Navbar.vue";

</script>
