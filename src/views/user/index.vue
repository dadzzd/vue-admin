<template>
  <div class="title is-ancestor">
    <div class="tile is-parent">
      <div class="tile is-child box">
        <div class="title">
          user list
        </div>
        <vuetable
        apiUrl="https://vuetable.ratiw.net/api/users"
        :fields="['name', 'email', 'birthdate', 'salary']"></vuetable>
      </div>
    </div>
  </div>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable.vue'
  export default {
    name: 'UserIndex',
    components: {
      Vuetable
    }
  }
</script>

<style>

</style>
