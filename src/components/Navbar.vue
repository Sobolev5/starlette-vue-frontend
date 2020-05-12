<template>
  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
      <i class="fa fa-bars"></i>
    </button>
    <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <div class="input-group">
        <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
        <div class="input-group-append">
          <button class="btn btn-primary" type="button">
          <i class="fas fa-search fa-sm"></i>
          </button>
        </div>
      </div>
    </form>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown no-arrow d-sm-none">
        <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-search fa-fw"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
          <form class="form-inline mr-auto w-100 navbar-search">
          <div class="input-group">
            <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
            <div class="input-group-append">
              <button class="btn btn-primary" type="button">
                <i class="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
          </form>
        </div>
             
      </li>
      <li class="nav-item dropdown no-arrow mx-1" v-if="!isLoggedIn">
        <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-bell fa-fw"></i>
          <span class="badge badge-danger badge-counter">1</span>
        </a>
        <!-- Dropdown - Alerts -->
        <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
          <h6 class="dropdown-header">
            Development process
          </h6>
          <a class="dropdown-item d-flex align-items-center" href="#">
            <div class="mr-3">
              <div class="icon-circle bg-primary">
              <i class="fas fa-file-alt text-white"></i>
              </div>
            </div>
            <div>
              <div class="small text-gray-500">May 5, 2020</div>
              Migrate to SB Admin 2 
            </div>
          </a>
          <a class="dropdown-item text-center small text-gray-500" href="https://trello.com/b/Q5A8dvY6/starlette-vue" target="_blank">Show Trello</a>
        </div>
      </li>
      <div class="topbar-divider d-none d-sm-block"></div>
      <li class="nav-item dropdown no-arrow" v-if="isLoggedIn">
        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="mr-2 d-none d-lg-inline text-gray-600 small">
            <b>Logged as: {{ authUser.username }} ({{ authUser.email }})</b>
          </span>
        </a>
      </li>      
      <li class="nav-item dropdown no-arrow" v-if="!isLoggedIn">
        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="mr-2 d-none d-lg-inline text-gray-600 small">
            Sobolev Andrey
          </span>
          <img class="img-profile rounded-circle" src="../plugins/images/sobolev.jpg">
        </a>
        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
          <a class="dropdown-item" href="https://github.com/Sobolev5" target="_blank">
            <i class="fab fa-github fa-sm fa-fw mr-2 text-gray-400"></i>
            Github
          </a>
        </div>
      </li>
      <div class="topbar-divider d-none d-sm-block" v-if="!isLoggedIn"></div>
      <li class="nav-item dropdown no-arrow" v-if="!isLoggedIn">
        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="mr-2 d-none d-lg-inline text-gray-600 small">Markulchak Evgeniy</span>
          <img class="img-profile rounded-circle" src="../plugins/images/markulchak.png">
        </a>
        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
          <a class="dropdown-item" href="https://github.com/EvgeniyMarkulchak" target="_blank">
            <i class="fab fa-github fa-sm fa-fw mr-2 text-gray-400"></i>
            Github
          </a>
        </div>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
	name: 'Navbar',
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
      this.$log.debug('Navbar--authUser', this.$store.getters.authUser)
			return this.$store.getters.isLoggedIn
		},
		authUser: function() {
			return this.$store.getters.authUser
		}
	},
}	
</script>