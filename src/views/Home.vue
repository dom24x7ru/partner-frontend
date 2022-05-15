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

      </div>
      <div class="content__boxed bg-gray-500 my-3 pt-3">

      </div>

      <Footer></Footer>

  </section>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  components: {
    Footer
  }
}
</script>
