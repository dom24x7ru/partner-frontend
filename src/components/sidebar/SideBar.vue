<template>
<nav id="mainnav-container" class="mainnav">
    <div class="mainnav__inner">

        <!-- Navigation menu -->
        <div class="mainnav__top-content scrollable-content pb-5">

            <!-- Profile Widget -->
            <UserData></UserData>
            <!-- End - Profile widget -->

            <!-- Navigation Category -->
            <div class="mainnav__categoriy py-3">
                <h6 class="mainnav__caption mt-0 px-3 fw-bold">Навигация</h6>
                <ul class="mainnav__menu nav flex-column">

                    <ChapterNav></ChapterNav>

                    <!-- Link with submenu -->
                    <li class="nav-item has-sub">

                        <a href="#" class="mininav-toggle nav-link collapsed"><i class="demo-pli-split-vertical-2 fs-5 me-2"></i>
                            <span class="nav-label ms-1">Layouts</span>
                        </a>

                        <!-- Layouts submenu list -->
                        <ul class="mininav-content nav collapse">
                            <li class="nav-item">
                                <a href="./layouts-mini-navigation.html" class="nav-link">Mini Navigation</a>
                            </li>
                            <li class="nav-item">
                                <a href="./layouts-push-navigation.html" class="nav-link">Push Navigation</a>
                            </li>
                            <li class="nav-item">
                                <a href="./layouts-slide-navigation.html" class="nav-link">Slide Navigation</a>
                            </li>
                            <li class="nav-item">
                                <a href="./layouts-reveal-navigation.html" class="nav-link">Reveal Navigation</a>
                            </li>
                            <li class="nav-item">
                                <a href="./layouts-stuck-sidebar.html" class="nav-link">Stuck Sidebar</a>
                            </li>
                            <li class="nav-item">
                                <a href="./layouts-pinned-sidebar.html" class="nav-link">Pinned Sidebar</a>
                            </li>
                            <li class="nav-item">
                                <a href="./layouts-unite-sidebar.html" class="nav-link">Unite Sidebar</a>
                            </li>
                            <li class="nav-item">
                                <a href="./layouts-sticky-header.html" class="nav-link">Sticky Header</a>
                            </li>
                            <li class="nav-item">
                                <a href="./layouts-sticky-navigation.html" class="nav-link">Sticky Navigation</a>
                            </li>

                        </ul>
                        <!-- END : Layouts submenu list -->

                    </li>
                    <!-- END : Link with submenu -->

                    <!-- Regular menu link -->
                    <li class="nav-item">
                        <a href="./widgets.html" class="nav-link mininav-toggle"><i class="demo-pli-gear fs-5 me-2"></i>

                            <span class="nav-label mininav-content ms-1">Widgets</span>
                        </a>
                    </li>
                    <!-- END : Regular menu link -->

                </ul>
            </div>
            <!-- END : Navigation Category -->

        </div>
        <!-- End - Navigation menu -->
    </div>
</nav>
</template>

<script>
import ChapterNav from "@/components/sidebar/ChapterNav";
import UserData from "@/components/sidebar/UserData";

export default {
    name: 'SideBar',
    props: {
        msg: String
    },
    components: {
        ChapterNav,
        UserData
    },

}
</script>


