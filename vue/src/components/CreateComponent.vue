<template>
<!-- Form Display -->
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Employee</h3>
            <form @submit.prevent="handleSubmitForm" class ="border border-info">
                <div class="form-group">
                    <label>ID</label>
                    <input type="text" class="form-control" v-model="employee.id" required>
                </div>

                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="employee.name" required>
                </div>

                <div class="form-group">
                    <label>Department</label>
                    <input type="text" class="form-control" v-model="employee.department" required>
                </div>

                <div class="form-group">
                    <label>Salary</label>
                    <input type="text" class="form-control" v-model="employee.salary" required>
                </div>

                <div class="form-group">
                    <label>Location</label>
                    <input type="text" class="form-control" v-model="employee.location" required>
                </div> <br>

                <div class="form-group text-center">
                    <button class="btn btn-primary btn-block btn-">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
// Axios handles HTTP client for the browser
import axios from "axios";

    export default {
        data() {
            return {
                //default values
                employee: {
                   id: '',
                   name: '',
                   department: '',
                   salary: '',
                   location: ''
                }
            }
        },
        methods: {
            // Make a call to api using the Axios library to create employee in database
            handleSubmitForm() { 
                let apiURL = 'http://localhost:4000/api/create-employee';
                
                axios.post(apiURL, this.employee).then(() => {
                // router resets values after post
                  this.$router.push('/view')
                  this.employee = {
                   id: '',
                   name: '',
                   department: '',
                   salary: '',
                   location: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>

<style> 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.text-center, .nav-link, .btn, td, .navbar-brand{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.navbar{
    background: #103b66;
}

body{
  margin:0;
  /* background: rgb(238, 217, 189); */
  background-image: url("../assets/mountains.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

form {
    max-width: 420px;
    margin: 30px auto;
    background: rgb(243, 243, 233);
    text-align: left;
    padding: 40px;
    border-radius: 10px;
    /* border-color: black;
    border */
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

 /* button styling */

.error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
.submit{
  text-align: center;
}
table{
    background-color:rgb(241, 241, 226);
    /* opacity: 0.9; */
}
.btn-block{
     width: 100%;
}
.border{
    border-width: thick;
}


</style>