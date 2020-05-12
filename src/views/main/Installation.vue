<template>
    <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-2">
            <h1 class="h3 mb-0 text-gray-800">Starlette-Vue.</h1>                 
        </div>
        <div class="mb-4">
            <h5 class="h5 mb-0 text-gray-800">Lightweight example Starlette+Vue.js with ready components for fast start.</h5> 
        </div>
        <div class="row">
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Backend (Starlette)</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">
                                    <a href="https://github.com/Sobolev5/starlette-vue-backend" target="_blank">Github</a>
                                </div>
                            </div>
                            <div class="col-auto">
                                <i class="fab fa-github fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-success shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Frontend (Vue.js)</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">
                                    <a href="https://github.com/Sobolev5/starlette-vue-frontend" target="_blank">Github</a>
                                </div>
                            </div>
                            <div class="col-auto">
                                <i class="fab fa-github fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-info shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
                                <div class="row no-gutters align-items-center">
                                    <div class="col-auto">
                                        <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                            <a href="https://github.com/Sobolev5/starlette-vue-frontend" target="_blank">20%</a>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="progress progress-sm mr-2">
                                            <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-warning shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Contributors</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">2</div>
                            </div>
                            <div class="col-auto">
                            <i class="fas fa-users fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="card mb-4">
                    <div class="card-header">
                        Starlette backend
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">JWT authentication middleware with token refresh view</li>
                            <li class="list-group-item">Extended User model</li>
                            <li class="list-group-item">Register and login views</li>
                            <li class="list-group-item">Tortoise ORM</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card mb-4">
                    <div class="card-header">
                        Vue.js frontend
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Vuex JWT authentication</li>
                            <li class="list-group-item">Register and login views (with Starlette backend)</li>
                            <li class="list-group-item">Bootstrap 4 on board</li>
                            <li class="list-group-item">SB admin 2 on board</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        Installation
                    </div>
                    <div class="card-body">
                        <h5 calss="mt-3">
                            Starlette
                        </h5>

                        Make virtualenv, clone backend part, modify .env.example and rename it.
                        <pre>
$ python3.8 -m venv starlette_django_env
$ source starlette_django_env/bin/activate
$ git clone https://github.com/Sobolev5/starlette-vue-backend
$ cd starlette-vue-backend
$ pip install -r requirements.txt
$ nano .env.example
$ mv .env.example .env
$ pre-commit install
                        </pre>

                        Run the project
                        <pre>
$ uvicorn app:entry_point --reload --port 9090
                        </pre>

                        Open your browser at 
                        <a href="http://localhost:9090" target="_blank">
                            http://localhost:9090
                        </a>
                        and see response from the main endpoint of Starlette.
                
                        <h5 class="mt-3">
                            Vue.js                           
                        </h5>

                        Clone frontend part, modify .env.development.example and rename it
                        <pre>
$ git clone https://github.com/Sobolev5/starlette-vue-backend
$ cd starlette-vue-frontend
$ npm install
$ nano .env.example
$ mv .env.example .env
                        </pre>
                        Run the project
                        <pre>
$ npm run serve
                        </pre>

                        Open your browser at 
                        <a href="http://localhost:8080" target="_blank">
                            http://localhost:8080                  
                        </a>
                        and see response from the main endpoint of Vue.js
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MainInstallation",
    metaInfo: {
      title: 'Starlette-Vue Installation',
    }    
}
</script>
