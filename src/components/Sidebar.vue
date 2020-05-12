<template>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <router-link :to="{ name: 'MainInstallation'}" class="sidebar-brand d-flex align-items-center justify-content-center">
            <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">
                STARLETTE-VUE <sup>.02</sup>
            </div>
        </router-link>
        <hr class="sidebar-divider my-0">

        <li class="nav-item">
            <router-link :to="{ name: 'MainInstallation'}" class="nav-link">
                <i class="fas fa-fw fa-tools"></i>
                <span>Installation</span>
            </router-link>        
        </li>
        <hr class="sidebar-divider">      
        <div class="sidebar-heading">
            Pages
        </div>
        <li class="nav-item active">
            <a class="nav-link" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-cog"></i>
                <span>Main views</span>
            </a>
            <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Main components:</h6>
                    <router-link :to="{ name: 'MainHello'}" class="collapse-item">Hello</router-link>
                    <router-link :to="{ name: 'MainPrivate'}" class="collapse-item" v-if="isLoggedIn">Private</router-link>
                </div>
            </div>
        </li>
        <li class="nav-item active">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
            <i class="far fa-fw fa-user"></i>
            <span>User views</span>
            </a>
            <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">User components:</h6>
                    <router-link :to="{ name: 'UserRegister'}" class="collapse-item" v-if="!isLoggedIn">Registrer</router-link>
                    <router-link :to="{ name: 'UserLogin'}" class="collapse-item" v-if="!isLoggedIn">Login</router-link>
                    <a href="#" @click="logoutUser" class="collapse-item" v-if="isLoggedIn">Logout</a>
                </div>
            </div>
        </li>
        <hr class="sidebar-divider">
        <div class="sidebar-heading">
            Development
        </div>
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
            <i class="fab fa-fw fa-github"></i>
            <span>Github</span>
            </a>
            <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Backend:</h6>
                    <a class="collapse-item" href="https://github.com/Sobolev5/starlette-vue-backend">starlette-vue-backend</a>
                    <div class="collapse-divider"></div>
                    <h6 class="collapse-header">Frontend:</h6>
                    <a class="collapse-item" href="https://github.com/Sobolev5/starlette-vue-frontend">starlette-vue-frontend</a>
                </div>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="https://trello.com/b/Q5A8dvY6/starlette-vue" target="_blank">
                <i class="fab fa-fw fa-trello"></i>
                <span>Trello</span>
            </a>
        </li>
    </ul>

</template>    
<script>
export default {
	name: 'Sidebar',
	data() {
		return {
		}
	},
	methods: {
        logoutUser: function() {
            this.$store.dispatch('logoutUser')
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err))
        },  		
	},
	computed: {
		isLoggedIn: function() {
            console.log(this.$store.getters.authUser)
			return this.$store.getters.isLoggedIn
		},
		authUser: function() {
			return this.$store.getters.authUser
		}
	},
}	
</script>