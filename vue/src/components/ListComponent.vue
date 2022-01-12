<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="employee in Employees" :key="employee._id">
                        <td>{{ employee.id }}</td>
                        <td>{{ employee.name }}</td>
                        <td>{{ employee.department }}</td>
                        <td>{{ employee.salary }}</td>
                        <td>{{ employee.location }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: employee._id }}" class="btn btn-success">Edit
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
    import axios from "axios";

    export default {
        data() {
            return {
                Employees: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.Employees = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteEmployee(id){
                let apiURL = `http://localhost:4000/api/delete-employee/${id}`;
                let indexOfArrayItem = this.Employees.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
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
    .btn-success {
        margin-right: 10px;
    }
</style>