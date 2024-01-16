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
  name: 'settngs-menu',
  components: {
    NavigationSection, NavigationItem, Icon
  },
  data() {
    return {
      sections: [
        { label: this.$t('settings.section.base'), items: [
          {
            icon: 'user-edit-line',
            label: this.$t('settings.item.profile'),
            to: { name: 'settings-profile' }
          },
          {
            icon: 'bell-line',
            label: this.$t('settings.item.notifications'),
            to: { name: 'settings-notifications' }
          },
          {
            icon: 'link-line',
            label: this.$t('settings.item.connections'),
            to: { name: 'settings-connections' }
          }
        ] },
        { label: this.$t('settings.section.secure'), items: [
          {
            icon: 'password-line',
            label: this.$t('settings.item.password'),
            to: { name: 'settings-password' }
          },
          {
            icon: 'history-line',
            label: this.$t('settings.item.login_activity'),
            to: { name: 'settings-login-activity' }
          },
          {
            icon: 'alarm-warning-line',
            label: this.$t('settings.item.login_alerts'),
            to: { name: 'settings-login-alerts' }
          }
        ] },
        { label: this.$t('settings.section.danger'), items: [
          {
            icon: 'gdpr-line',
            label: this.$t('settings.item.gdpr'),
            to: { name: 'settings-gdpr' }
          },
          {
            icon: 'delete-bin-line',
            label: this.$t('settings.item.delete_account'),
            to: { name: 'settings-delete-account' }
          }
        ] }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>