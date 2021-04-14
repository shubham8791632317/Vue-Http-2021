<template>
  <div>
      <h2>Http Post Request Example</h2>
      <label>Enter Your Post:</label>
      <input type="text" name="post" id="post" v-model="postBody" >
      <br><br>
      <input type="submit" @click="submitPost" value="Submit Post (With using Promise)"> <!--Without using Async Await-->
      <input type="submit" @click="submitPostRequestUsingAsyncAwait" value="Submit Post (With using Async Await)"> <!--With using Async Await-->
     
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "HttpPostRequest",
    data(){
        return{
            postBody: '',
            errors: []
        }
    },
    methods: {

        // With Using Promises
        submitPost(){
            // Pushes posts to the server when called.
            if(this.postBody){
                axios.post('http://jsonplaceholder.typicode.com/posts', {body: this.postBody}).
                then(response => {
                    console.log('Post Api Response:: ', response);
                    this.postBody = "";
                }).catch(error =>{
                    console.error('Post Api Error:: ', error);
                    this.errors.push(error);
            });
            }  
        },

        // With using Async Await
        async submitPostRequestUsingAsyncAwait(){
            if(this.postBody){
                // Pushes posts to the server when called.
            try{
                const response = await axios.post('http://jsonplaceholder.typicode.com/posts',{body: this.postBody});
                console.log('Post Api Response:: ', response);
                this.postBody = "";
            }catch(error){
                this.errors.push(error);
                console.error('Post Api Error:: ', error);
            }
            }
        }
    },
}
</script>

<style>
input[type=submit]{
    margin: 10px;
    padding: 10px;
    
}
</style>