<template>
   <div>
      <h2>Http Get Request Example</h2>
         <ul >
            <li v-for="post in posts" :key="post.id">
                <p><strong>{{post.first_name}}</strong></p>
                <p>{{post.email}}</p>
                <img :src="post.avatar" alt="Image Not Found" width="100" height="100">
            </li>
        </ul> 

        
         <ul v-if="errors && errors.length>0">
            {{errors && errors.length>0}}
            <li v-for="error in errors" :key="error">
                {{error.message}}
            </li>
        </ul> 
  </div>
</template>

<script>
import { HTTP } from '../http/http-common';
export default {
     data(){
        return{
            posts: [],
            errors: []
        }
    },

    created(){
        HTTP.get('users?page=1').then(response => {
            this.posts = response.data.data;
        }).catch(error =>{
            console.error('Get Api Failure Response:: ', error);
            this.errors.push(error);
            console.log('Errors:::', this.errors);
        });
    }
}
</script>

<style>

</style>