<template>
     <li class="nav-item has-sub">
        <a href="#" class="mininav-toggle nav-link active"><i class="demo-pli-home fs-5 me-2"></i>
            <span class="nav-label ms-1">Разделы</span>
        </a>
        <ul class="mininav-content nav collapse">
            <li class="nav-item">
                <router-link class="nav-link" to="/">Консоль</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/users">Пользователи</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/homes">Дома</router-link>
            </li>
        </ul>
    </li>
</template>

<script>
export default {
  name: 'ChapterNav',
}
</script>

<style lang="scss">
.nav-link {
    font-weight: bold;
}

.root .mainnav__inner .nav-link.router-link-exact-active {
    color: #25476a;
}
</style>