<template>
  <nav v-if="tablePagination && tablePagination.last_page > 1"
    class="pagination">
    <a
      @click="loadPage('prev')"
      :class="['pagination-previous', isOnFirstPage ? 'is-disabled' : '']">
      Prev
    </a>
    <a
      @click="loadPage('next')"
      :class="['pagination-next', isOnLastPage ? 'is-disabled' : '']">
      Next
    </a>

    <ul class="pagination-list">
        <li v-for="index in totalPage">
          <a
            @click="loadPage(index)"
            :class="['pagination-link', isCurrentPage(index) ? 'is-current' : '']">
            {{ index }}
          </a>
        </li>
    </ul>
  </nav>
</template>

<script>
  import PaginationMixin from 'vuetable-2/src/components/VuetablePaginationMixin.vue'
  export default {
    name: 'UserPagination',
    mixins: [PaginationMixin]
  }
</script>

<style>

</style>
