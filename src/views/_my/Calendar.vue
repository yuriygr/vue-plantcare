<template>
  <template v-if="!loading && !error">
    <template v-if="data.length > 0">
      <template v-for="(item, index) in data" :key="'item-' + index">
        <pre>{{ item }}</pre>
      </template>
    </template>

    <template v-if="data.length == 0">
      <placeholder :text="$t('calendar.errors.not_found')" />
    </template>
  </template>

  <placeholder-loading v-if="loading" />

  <placeholder v-if="error"
    :icon="$t(humanizeError.icon)"
    :header="$t(humanizeError.title)"
    :text="$t(humanizeError.description)"
  />
</template>

<script>
import { Placeholder, PlaceholderLoading } from '@vue-norma/ui'
import { mapState } from 'vuex'

export default {
  name: 'my-calendar',
  components: {
    Placeholder, PlaceholderLoading
  },
  meta() { return this.meta },
  data() {
    return {
      meta: {
        title: this.$t('my-calendar.title')
      }
    }
  },
  computed: {
    ...mapState('my/calendar', [ 'data', 'loading', 'error' ]),
    humanizeError() {
      return this.$filters.humanizeError(this.error)
    }
  },
  methods: {

  },
  mounted() {
    this.$store.dispatch('my/calendar/fetch')
  }
}
</script>

<style lang="scss" scoped>
 
</style>