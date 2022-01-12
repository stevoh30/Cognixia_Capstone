<template>
   <div>
    <!-- Nav bar Display -->
    <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row bg-black">
      <div class="container">
        <a class="navbar-brand float-left">MEVN Capstone Project</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
           <!-- Router-links to navigate through vue router -->
            <router-link class="nav-link pr-3" to="/">Create Employees&nbsp;&nbsp;&nbsp;</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">&nbsp;&nbsp;&nbsp;View Employees</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view to display specified path components-->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
