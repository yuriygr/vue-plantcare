<template>

  <group>
    <n-header>{{ $t('my-plants.lists') }}</n-header>
    <template v-for="(item, index) in lists.data" :key="'lists-' + index">
      <my-list-item :data="item" />
      {{ item }}
    </template>

    <template v-if="!lists.error && !lists.loading && lists.data.length == 0">
      <placeholder :text="$t('plants.lists_empty')" />
    </template>

    <template v-if="lists.error">
      <placeholder :text="lists.error" />
    </template>

    <placeholder-loading v-if="lists.loading" />
  </group>

  <group>
    <n-header>{{ $t('my-plants.plants') }}</n-header>
    <template v-for="(item, index) in plants.data" :key="'plants-' + index">
      <my-plant-item :data="item" />
      {{ item }}
    </template>

    <template v-if="!plants.error && !plants.loading && plants.data.length == 0">
      <placeholder :text="$t('plants.plants_empty')" />
    </template>

    <template v-if="plants.error">
      <placeholder :text="plants.error" />
    </template>

    <placeholder-loading v-if="plants.loading" />
  </group>


</template>

<script>
import { Placeholder, PlaceholderLoading, Group, NHeader } from '@vue-norma/ui'

export default {
  name: 'my-plants',
  components: {
    Placeholder, PlaceholderLoading, Group, NHeader
  },
  meta() { return this.meta },
  data() {
    return {
      meta: {
        title: this.$t('my-plants.title')
      }
    }
  },
  computed: {
    lists() {
      return this.$store.state.my.lists
    },
    plants() {
      return this.$store.state.my.plants
    }
  },
  methods: {
    humanizeError(error) {
      return this.$filters.humanizeError(error)
    }
  },
  mounted() {
    this.$store.dispatch('my/lists/fetch')
    this.$store.dispatch('my/plants/fetch')
  }
}
</script>

<style lang="scss" scoped>
 
</style>