<template>
  <div class="app-tabbar" 
    @contextmenu="$event.preventDefault()"
    @dragstart="$event.preventDefault()"
    @drop="$event.preventDefault()"
  >
    <div class="app-tabbar__layout">
      <tabbar class="app-tabbar__tabbar">
        <tabbar-item :to="{ name: 'plants' }" :title="$t('tabbar.nav.home')">
          <icon name="home-line" size="20" />
        </tabbar-item>
        
        <tabbar-item :to="{ name: 'my-calendar' }" :title="$t('tabbar.nav.calendar')">
          <icon name="calendar-line" size="20" />
        </tabbar-item>

        <tabbar-item :to="{ name: 'my-plants' }" :title="$t('tabbar.nav.plants')">
          <icon name="plant-line" size="20" />
        </tabbar-item>

        <template v-if="session_data.is_auth">
          <tabbar-item :to="{ name: 'menu' }" :title="$t('tabbar.nav.menu')">
            <icon name="menu-line" size="20" />
          </tabbar-item>
        </template>

        <template v-else>
          <tabbar-item :to="{ name: 'auth' }" :title="$t('tabbar.nav.auth')">
            <icon name="login-line" size="20" />
          </tabbar-item>
        </template>

      </tabbar>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Tabbar, TabbarItem, Icon } from '@vue-norma/ui'

export default {
  name: 'app-tabbar',
  components: { Tabbar, TabbarItem, Icon },
  data() {
    return { }
  },
  computed: {
    ...mapState('auth', {
      'session_data': state => state.data
    })
  },
  methods: {

  }
}
</script>

<style lang="scss">
.app-tabbar {
  --tabbar-item-count: 4;

  background: var(--tabbar--background);
  height: var(--tabbar--height);
  z-index: 500;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);

  &__layout {
    display: flex;
    justify-content: space-between;
    width: 100vw;

    padding-right: var(--mobile-page-horizontal-padding);
    padding-left: var(--mobile-page-horizontal-padding);

    @media (min-width: 768px) {
      & {
        margin-right: auto;
        margin-left: auto;

        max-width: var(--large-screen-max-width);
        padding-right: var(--desktop-page-horizontal-padding);
        padding-left: var(--desktop-page-horizontal-padding);
      }
    }
  }

  @media (max-width: 768px) {
    & { 
      position: fixed;
      bottom: 0;
    }
  }

  @media (min-width: 768px) {
    & { 
      position: sticky;
      top: 0;
    }
  }

  &--loading {
    opacity: 0.6;
  }
}
</style>