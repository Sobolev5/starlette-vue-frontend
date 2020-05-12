<template>
    <div class="container container-sm">
        <div class="d-sm-flex align-items-center justify-content-between mb-2">
            <h1 class="h3 mb-0 text-gray-800">Login</h1>                 
        </div>     
        <div class="card">
            <div class="card-body">
                <form id="UserLogin__login-form" action="" @submit.prevent="login">
                    <div class="form-group">
                        <div class="col-xs-12">
                            <input class="form-control" type="text" id="UserLogin__username" v-model="email" required="" placeholder="Username" value="">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-xs-12">
                            <input class="form-control" type="password" id="UserLogin__password" required="" v-model="password" placeholder="Password" value="">
                        </div>
                    </div>
                    <div class="form-group text-center">
                        <div class="col-xs-12">
                            <button class="btn btn-info btn-lg btn-block text-uppercase" type="submit" id="LogIn" method="post">Log In</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12 text-center">
                            <p>
                                Don't have an account? 
                                <router-link :to="{ name: 'UserRegister'}" class="text-primary m-l-5"><b>Sign Up</b></router-link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    name: "UserLogin",
    data() {
        return {
            email : "",
            password : ""
        }
    },    
    methods: {
        login: function() {
            let email = this.email; 
            let password = this.password;
            this.$store.dispatch("loginUser", { email, password })
            .then(() => this.$router.push("/"))
            .catch(err => console.log(err))
        },           
    }
}
</script>
