<template>
    <header class="header">
        <div class="header__inner">

            <!-- Brand -->
            <div class="header__brand">
                <div class="brand-wrap">

                    <!-- Brand logo -->
                    <a href="./index.html" class="brand-img stretched-link">
                        <img :src="images.logo" alt="Nifty Logo" class="Nifty logo" width="40" height="40">
                    </a>

                    <!-- Brand title -->
                    <div class="brand-title">Nifty</div>

                    <!-- You can also use IMG or SVG instead of a text element. -->

                </div>
            </div>
            <!-- End - Brand -->

            <div class="header__content">

                <!-- Content Header - Left Side: -->
                <div class="header__content-start">

                    <!-- Navigation Toggler -->
                    <button type="button" class="nav-toggler header__btn btn btn-icon btn-sm" aria-label="Nav Toggler">
                        <i class="demo-psi-view-list"></i>
                    </button>

                    <!-- Searchbox -->
                    <div class="header-searchbox">

                        <!-- Searchbox toggler for small devices -->
                        <label for="header-search-input" class="header__btn d-md-none btn btn-icon rounded-pill shadow-none border-0 btn-sm" type="button">
                            <i class="demo-psi-magnifi-glass"></i>
                        </label>

                        <!-- Searchbox input -->
                        <form class="searchbox searchbox--auto-expand searchbox--hide-btn input-group">
                            <input id="header-search-input" class="searchbox__input form-control bg-transparent" type="search" placeholder="Type for search . . ." aria-label="Search">
                            <div class="searchbox__backdrop">
                                <button class="searchbox__btn header__btn btn btn-icon rounded shadow-none border-0 btn-sm" type="button" id="button-addon2">
                                    <i class="demo-pli-magnifi-glass"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- End - Content Header - Left Side -->
            </div>
        </div>
    </header>
</template>

<script>
import logo from "@/assets/img/logo.svg";

export default {
  name: 'Header',
  data() {
        return {
            images: {
                logo
            }
        };
    },
}
</script>