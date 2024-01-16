<template>
  <div class="navigation">
    <template v-for="(section, index) in sections" :key="`section-${index}`">
      <navigation-section>
        <navigation-title v-if="!section.label">{{ section.label }}</navigation-title>
        <template v-for="(item, jndex) in section.items" :key="`section-${index}-item-${jndex}`">
          <navigation-item :icon="item.icon" :to="item.to">
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
  name: 'help-menu',
  components: {
    NavigationSection, NavigationItem, Icon
  },
  data() {
    return {
      sections: [
        { label: this.$t('help.section.base'), items: [
          {
            icon: 'kb-line',
            label: this.$t('help.item.all-questions'),
            to: { name: 'help-all-questions' }
          },
        ] },
        { label: this.$t('help.section.my'), items: [
          {
            icon: 'question-line',
            label: this.$t('help.item.my-questions'),
            to: { name: 'help-my-questions' }
          },
          {
            icon: 'add-question-line',
            label: this.$t('help.item.add-question'),
            to: { name: 'help-add-question' }
          }
        ] }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>