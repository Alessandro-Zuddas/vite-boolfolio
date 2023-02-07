<script>

export default {
  name: "AppHeader",
};

</script>

<template>

    <header>
        <div class="row align-items-center">
            <div class="col-4">
                <h3>Logo</h3>
            </div>
            <div class="col-8">
                <nav class="row justify-content-end">
                    <router-link class="col-1 ms-nav-links" :to="{ name: 'projects' }">
                        <small>Progetti</small>
                    </router-link>
                    <router-link class="col-1 ms-nav-links" :to="{ name: 'about' }">
                       <small>About Us</small>
                    </router-link>
                    <router-link class="col-1 ms-nav-links" :to="{ name: 'staff' }">
                        <small>Chi siamo</small>
                    </router-link>
                    <router-link class="col-1 ms-nav-links" :to="{ name: 'contact-us' }">
                        <small>Contattaci</small>
                    </router-link>
                </nav>
            </div>
        </div>
    </header>

</template>

<style lang="scss" scoped>

header{
    padding: 10px 10px;
}

.ms-nav-links{
    text-decoration: none;
    color: black;
}

.ms-nav-links:hover{
    transform: scale(1.1);
}

</style>