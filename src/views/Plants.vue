<template>
  <template v-if="!loading || plants.length != 0">
    <n-input
      icon="search-line"
      size="m"
      :value="search"
      :placeholder="$t('all-plants.search-field.placeholder')"

      @input="(e) => { search = e.target.value }"
    />

    <template v-if="!searching">
      <div class="plants-section" :data-letter="section.letter" v-for="section in plants" :key="'plant-section-' + section.letter">
        <plants-letter :letter="section.letter" />
        <div class="plants-grid">
          <plant-thumb v-for="plant in section.plants" :key="'plant-' + plant.plant_id" :plant="plant" />
        </div>
      </div>
    </template>

    <template v-if="searching">
      <template v-if="filteredList.length > 0">
        <div class="plants-section --searching">
          <div class="plants-grid">
            <plant-thumb v-for="plant in filteredList" :key="'plant-' + plant.plant_id" :plant="plant" />
          </div>
        </div>
      </template>
      <template v-else>
        <placeholder 
          :text="$t('plants.search.not_found')"
        />
      </template>
    </template>
  </template>

  <template v-if="loading && plants.length == 0">
    <n-input
      icon="search-line"
      size="m"
      :value="search"
      :placeholder="$t('all-plants.search-field.placeholder')"
    />

    <div class="plants-section --loading" v-for="n in 5" :key="'placeholder-letter' + n">
      <plants-letter />
      <div class="plants-grid">
        <plant-thumb-placeholder v-for="i in 9" :key="'placeholder' + i + n" />
      </div>
    </div>
  </template>

  <template v-if="!loading && !searching && plants.length == 0">
    <placeholder text="sda" />
  </template>
</template>

<script>
import { mapState } from 'vuex'
import { Placeholder, Icon } from '@vue-norma/ui'

import { PlantsLetter, PlantThumb, PlantThumbPlaceholder } from '@/components/plants'
import PlantModal from '@/components/modals/Plant'

export default {
  name: 'plants',
  components: {
    Placeholder, Icon,
    PlantsLetter, PlantThumb, PlantThumbPlaceholder
  },
  meta() { return this.meta },
  data() {
    return {
      meta: {
        title: this.$t('all-plants.title')
      },
      lang: 'RU'
    }
  },
  computed: {
    ...mapState('plants', {
      'plants': state => state.plants,
      'plant': state => state.plant,
      'loading': state => state.loading,
      'error': state => state.error
    }),
    search: {
      get() {
        return this.$route.query.q || ''
      },
      set(value) {
        if (value == '')
          value = undefined

        this.$router.push({ name: this.$route.name, query: { ...this.$route.query, q: value } })
      }
    },
    searching() {
      return this.search != ''
    },
    filteredList() {
      if (!this.searching) return []

      let plants = this.plants.flatMap(letter => letter.plants)
      return plants.filter(plant =>
        plant.names.find(({ name }) => 
          name.toLowerCase().includes(this.search.toLowerCase())
        )
      )
    }
  },
  methods: {
    fetchPlants() {
      this.$store.dispatch('plants/fetchItems', { lang: this.lang })
    },

    fetchPlant(route) {
      this.$store.dispatch('plants/fetchItem', { id: route.params.id || 0, lang: this.lang })
    },
    
    clearPlant() {
      this.$store.dispatch('plants/clearItem')
    }
  },
  created() { },
  mounted() {
    this.fetchPlants()
    if (this.$route.name == 'plant')
      this.fetchPlant(this.$route)
  },
  watch: {
    $route(to, from) {
      // Если мы перешли на цветок
      // То получаем его
      if (to.name == 'plant')
        this.fetchPlant(to)

      // Если мы уходим с цветка на общий список
      // То удаляем текущий цветок
      if (from.name == 'plant' && to.name == 'plants')
        this.clearPlant()
    },
    plant(to) {
      if (to) {
        let name = to.names.find(name => name.code == this.lang).name
        this.meta.title = name
        // Вызываем модальное окно
        this.$modals.show(PlantModal, { plant: to }, () => {
          this.$router.push({ name: 'plants', query: this.$route.query })
        })
      } else {
        this.meta.title = this.$t('all-plants.title')
        // Закрываем модальное окно
        this.$modals.close()
      }
    }
  }
}
</script>

<style lang="scss">
  .brand {
      font-family: 'Pacifico', cursive;
      font-size: 3.1rem;
      font-weight: 400;
      letter-spacing: 2px;
      line-height: 2;

      a {
        color: #a7128d;
        background: linear-gradient(45deg, #a7128d 33%, #0D61BC 66%, #8AA9D6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        user-select: none;
        padding: .25rem 1rem;
      }
    }

  .plants-section {
    display: grid;
    align-items: start;
    grid-template-columns: var(--thumbs-template-columns);
    grid-gap: 2rem;
    margin: 2rem 0;

    &.--searching {
      .plants-grid {
        grid-column-start: 2;
      }
    }

    .plants-grid {
      display: grid;
      align-items: start;
      grid-template-columns: var(--thumbs-grid-template-columns);
      grid-gap: 2rem;
    }
  }

  @media (max-width: 440px) {
    .plants-section {
      grid-template-columns: 1fr;
      grid-template-rows: var(--letter-height) 1fr;

      &.--searching {
        grid-template-rows: 1fr;

        .plants-grid {
          grid-column-start: 1;
        }
      }
    }
    .plants-search {
      grid-template-columns: 1fr;

      .search__field {
        grid-column-start: 1;
      }
    }
  }

</style>