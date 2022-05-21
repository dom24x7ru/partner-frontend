<template>
<section id="content" class="content">
    <div class="content__header content__boxed overlapping">
        <div class="content__wrap">

            <!-- Page title and information -->
            <h1 class="page-title mb-2">Dashboard</h1>
            <h2 class="h5">Welcome back to the Dashboard.</h2>
            <p>Scroll down to see quick links and overviews of your Server, To do list<br> Order status or get some Help using Nifty.</p>
            <!-- END : Page title and information -->

        </div>
    </div>

    <div class="content__boxed">
        <div class="content__wrap">
            <Map></Map>
        </div>
    </div>
    <div class="content__boxed">
        <div class="content__wrap">
          <MainData></MainData>   
        </div>
    </div>

    <Footer></Footer>

</section>
</template>

<script>
import Footer from '@/components/Footer'
import Map from '@/components/dashboard/Map'
import MainData from '@/components/dashboard/MainData'

export default {
    name: 'MyHome',
    components: {
        Footer,
        Map,
        MainData
    },
    data() {
        return {

        };
    },
}
</script>
