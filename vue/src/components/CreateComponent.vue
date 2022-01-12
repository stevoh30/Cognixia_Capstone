<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Employee</h3>
            <form @submit.prevent="handleSubmitForm">
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

                <div class="form-group">
                    <button class="btn btn-danger btn-block">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

    export default {
        data() {
            return {
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
            handleSubmitForm() { 
                let apiURL = 'http://localhost:4000/api/create-employee';
                
                axios.post(apiURL, this.employee).then(() => {
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