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
                        Progetti
                    </router-link>
                    <router-link class="col-1 ms-nav-links" :to="{ name: 'about' }">
                        About Us
                    </router-link>
                    <router-link class="col-1 ms-nav-links" :to="{ name: 'staff' }">
                        Chi Siamo
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