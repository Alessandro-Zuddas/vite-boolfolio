<script>

export default {
  name: "ContactUs",

  components: {

  },
  data() {
    return {

        formData: {
            name: "",
            email: "",
            message: "",
        },

    }
  },
  methods:{

    sendEmail(){
        
    },

  },    
  created(){

  }
};

</script>

<template>

    <form @submit.prevent="sendEmail()" action="">
        <div class="mb-3">
            <label for="name" class="form-label">Nome</label>
            <input type="text" class="form-control" id="name" placeholder="Inserisci il nome" v-model="formData.name">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="formData.email">
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="3" v-model="formData.message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary mt-2">Invia</button>
    </form>

</template>

<style lang="scss" scoped>



</style>