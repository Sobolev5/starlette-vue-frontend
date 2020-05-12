# starlette-vue

Starlette-Vue is a simple example that allows you to quickly get started 
with the Starlette framework "the same as Django structure" with Vue.js frontend.
See working example at http://starlette-vue.site/

Starlette part (https://github.com/Sobolev5/starlette-vue-backend):
  - JWT authentication middleware with token refresh view
  - Extended User model
  - Register and login views
  - Tortoise ORM 

Vue.js part (https://github.com/Sobolev5/starlette-vue-frontend):
  - Vuex JWT authentication
  - Register and login views (with Starlette backend)
  - Bootstrap 4 on board
  - SB admin 2 on board 


# starlette-vue frontend part

Clone frontend part, modify .env.development.example and rename it

```sh
$ git clone https://github.com/Sobolev5/starlette-vue-backend
$ cd starlette-vue-frontend
$ npm install
$ nano .env.example
$ mv .env.example .env
```

Run the project.

```sh
$ npm run serve --fix
```

Open your browser at http://localhost:8080 and see response from the main endpoint of Vue.js