<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <div class="tile is-child box">
        <div class="title">
          user list
        </div>
        <filter-bar></filter-bar>
        <vuetable
        api-url="https://vuetable.ratiw.net/api/users"
        :fields=fields
        :append-params="appendParams"
        ref="vuetable"
        pagination-path=""
        @vuetable:pagination-data="onPaginationData"></vuetable>
        <user-pagination
          @vuetable-pagination:change-page="onChangePage"
        ref="pagination"></user-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable.vue'
  import UserPagination from './components/UserPagination.vue'
  import FilterBar from './components/FilterBar.vue'

  export default {
    name: 'UserIndex',
    data () {
      return {
        fields: [
          {
            name: 'name',
            title: 'name',
            sortField: 'name'
          },
          {
            name: 'email',
            title: 'email',
            sortField: 'email'
          },
          {
            name: 'birthdate',
            title: 'birthdate',
            sortField: 'birthdate'
          },
          {
            name: 'salary',
            title: 'salary',
            sortField: 'salary'
          }
        ],
        appendParams: {}
      }
    },
    methods: {
      onChangePage (page) {
        this.$refs.vuetable.changePage(page)
      },
      onPaginationData (paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
      },
      onFilterSet (filterText) {
        this.appendParams = {
          filter: filterText
        }
        this.$nextTick(() => {
          this.$refs.vuetable.refresh()
        })
      },
      onFilterReset () {
        this.appendParams = {}
        this.$nextTick(() => {
          this.$refs.vuetable.refresh()
        })
      }
    },
    mounted () {
      this.$events.listen('filter-set', filterText => this.onFilterSet(filterText))
      this.$events.listen('filter-reset', this.onFilterReset)
    },
    beforeDestory () {
      this.$events.remove('filter-set')
      this.$events.remove('filter-reset')
    },
    components: {
      FilterBar,
      Vuetable,
      UserPagination
    }
  }
</script>

<style>

</style>
