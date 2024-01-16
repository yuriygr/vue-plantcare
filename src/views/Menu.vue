<template>
  <div class="navigation">
    <template v-for="(section, index) in sections" :key="`section-${index}`">
      <navigation-section>
        <template v-for="(item, jndex) in section.items" :key="`section-${index}-item-${jndex}`">
          <navigation-item :icon="item.icon" :to="item.to" :chevron="item.chevron">
            {{ item.label }}
          </navigation-item>
        </template>
      </navigation-section>
    </template>
  </div>
</template>

<script>
import { NavigationSection, NavigationItem, Icon } from '@vue-norma/ui'

export default {
  name: 'menu',
  components: {
    NavigationSection, NavigationItem, Icon
  },
  meta() { return this.meta },
  data() {
    return {
      meta: {
        title: this.$t('menu.title')
      }
    }
  },
  computed: {
    sections() {
      let main = [
        {
          icon: 'settings-line',
          label: this.$t('menu.item.settings'),
          to: { name: 'settings' },
          chevron: true
        },
        {
          icon: 'kb-line',
          label: this.$t('menu.item.help'),
          to: { name: 'helps' },
          chevron: true
        },
        {
          icon: 'charity-line',
          label: this.$t('menu.item.donate'),
          to: { name: 'donate' },
          chevron: true
        },
        {
          icon: 'about-line',
          label: this.$t('menu.item.about'),
          to: { name: 'about' },
          chevron: true
        }
      ]

      let last = [
        {
          icon: 'logout-line',
          label: this.$t('menu.item.logout'),
          to: { name: 'auth-logout' },
          chevron: false
        }
      ]

      return [
        { items: main },
        { items: last }
      ]
    }
  },
  methods: { }
}
</script>

<style lang="scss">

</style>