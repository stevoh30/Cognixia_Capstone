
<!-- Form Display -->
<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped ">
                <thead class="thead-dark">
                    <!-- Table headers -->
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Display employees -->
                    <tr v-for="employee in Employees" :key="employee._id">
                        <td>{{ employee.id }}</td>
                        <td>{{ employee.name }}</td>
                        <td>{{ employee.department }}</td>
                        <td>{{ employee.salary }}</td>
                        <td>{{ employee.location }}</td>
                        <td>
                            <!-- Display buttons through router-link -->
                            <router-link :to="{name: 'edit', params: { id: employee._id }}" class="btn btn-info">Edit
                            </router-link>
                            <button @click.prevent="deleteEmployee(employee._id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
// Axios handles HTTP client for browser
    import axios from "axios";

    export default {
        // Initializes employee object
        data() {
            return {
                Employees: []
            }
        },
        // Upon loading this component, returns api data into Employees array object
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.Employees = res.data;
            }).catch(error => {
                console.log(error)
            });
        },

        methods: {
             // Make a call to api using the Axios library to delete employee from database
            deleteEmployee(id){
                let apiURL = `http://localhost:4000/api/delete-employee/${id}`;
                let indexOfArrayItem = this.Employees.findIndex(i => i._id === id);

                // Prompt user to confirm delete
                if (window.confirm("Do you want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        // Removes employee from Employees array object /updates display
                        this.Employees.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>

<style>
    .btn-success, .btn-info {
        margin-right: 10px;
    }
</style>