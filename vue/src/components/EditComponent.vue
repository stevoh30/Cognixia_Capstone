
<!-- Form Display -->
<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Employee</h3>
            <form @submit.prevent="handleUpdateForm">
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
                    <button class="btn btn-danger btn-block">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
// Axios handles HTTP client for browser and node.js
import axios from "axios";

export default {
    data() {
        return {
            employee: { }
        }
    },
    // Upon component creation, gets employee values from API and passed ID parameter
    created() {
        let apiURL = `http://localhost:4000/api/edit-employee/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.employee = res.data;
        })
    },
    methods: {
        // Updates employee information using Axios
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-employee/${this.$route.params.id}`;

            axios.put(apiURL, this.employee).then((res) => {
                console.log(res)
                // uses router to go back to /view screen
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>