<template>
    <div class="container container-sm">

        <div class="d-sm-flex align-items-center justify-content-between mb-2">
            <h1 class="h3 mb-0 text-gray-800">Register</h1>                 
        </div>          
        <div class="card">
            <div class="card-body">
                <form id="userRegister__registration-form" action="" @submit.prevent="register">
                    <div class="form-group">
                        <div class="col-xs-12">
                            <input class="form-control" type="text" id="username" required="" placeholder="Name" value="" v-model="username">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-xs-12">
                            <input class="form-control" type="text" id="email" required="" placeholder="Email" value="" v-model="email">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-xs-12">
                            <input class="form-control" type="password" id="password" required="" placeholder="Password" value="" v-model="password">
                        </div>
                    </div>
                    <div class="form-group text-center m-t-20">
                        <div class="col-xs-12">
                            <button class="btn btn-info btn-lg btn-block text-uppercase" type="submit">Register</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12 text-center">                           
                            <p>Already have an account? <router-link :to="{ name: 'UserLogin'}" class="text-primary m-l-5"><b>Sign In</b></router-link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "UserRegister",
    data() {
        return {
            username : "",
            email : "",          
            password : ""
        }
    },    
    methods: {
        register: function() {
            let username = this.username;
            let email = this.email;            
            let password = this.password;
            this.$store.dispatch("registerUser", { username, email, password })
            .then(() => this.$router.push("/"))
            .catch(err => console.log(err))
        },           
    }
}
</script>
