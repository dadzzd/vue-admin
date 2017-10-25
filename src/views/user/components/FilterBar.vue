<template>
  <div class="filter-bar control is-grouped">
    <p class="control is-expanded has-addons">
      <input
        id="search" class="input"
        type="text" v-model="filterText"
        @keyup.enter="doFilter"
        placeholder="write name or email">
      <a @click="doFilter" class="button is-primary">search</a>
    </p>
    <p class="control">
      <a @click="resetFilter">reset</a>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'FilterBar',
    data () {
      return {
        filterText: ''
      }
    },
    methods: {
      doFilter () {
        this.$events.fire('filter-set', this.filterText)
      },
      resetFilter () {
        this.filterText = ''
        this.$events.fire('filter-reset')
      }
    }
  }
</script>

<style scoped>
  #search {
    width: 300px;
  }
</style>
