<template>
  <div>
      <h2>Http Get Request Example</h2>
         <ul >
            <li v-for="post in posts" :key="post.id">
                <p><strong>{{post.title}}</strong></p>
                <p>{{post.body}}</p>
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

import axios from 'axios';
export default {
    name: "HttpGetRequest",
    data(){
        return{
            posts: [],
            errors: []
        }
    },

    // With using Promises
    // Fetches posts when the component is created.
    created(){
        // Created is a life cycle hook method
        axios.get('http://jsonplaceholder.typicode.com/posts').then(response => {
            console.log('Get Api Success Response:: ', response.data);
            this.posts = response.data;
        }).catch(error =>{
            console.error('Get Api Failure Response:: ', error);
            this.errors.push(error);
            console.log('Errors:::', this.errors);
        });
    },

    // With using Async Await

    // Fetches posts when the component is created.

   /* async created(){
        try{
            const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
            if(response) console.log('Get Api Success Response:: ', response.data);
            this.posts = response.data;

        }catch(error){
            this.errors.push(error);
            console.log('Errors:::', this.errors);
        }
    }
*/

}
</script>

<style>
ul li{
    border: 1px solid black;
    list-style-type: none;
    background: rgb(88, 212, 221);
}
</style>