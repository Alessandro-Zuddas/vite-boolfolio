<script>
import { RouterLink } from 'vue-router';


export default {
    name: "ProjectCard",
    props: {
        data: Object,
    },
    components: { RouterLink }
};

</script>

<template>

    <div class="col d-flex flex-column align-items-center">
        <div class="card" style="width: 18rem;">
            <img      
                v-if="project_image"
                :src="data.project_image"
                class="card-img-top"
                :alt="data.name">

            <img v-else
                class="card-img-top"
                src="https://via.placeholder.com/150"
                :alt="data.name">

            <div class="card-body text-center">
                <h5 class="card-title">{{ data.name }}</h5>
                <p class="card-text">{{ data.description }}</p>
                <p>{{ data.slug }}</p>
                <small>{{ data.date }}</small>
                <router-link class="btn btn-primary d-block my-2" :to="{ name: 'single-project', params: { slug: data.slug } }">
                    Mostra il progetto
                </router-link>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>



</style>