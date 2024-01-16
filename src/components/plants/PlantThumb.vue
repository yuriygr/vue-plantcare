<template>
  <div class="plant-thumb">
    <router-link class="plant-thumb__link" :to="computedLink" :key="plant.plant_id" />
    <div class="plant-thumb__title" v-html="computedName" />
    <div class="plant-thumb__gradient"></div>
    <div class="plant-thumb__cover" :style="computedStyle" />
  </div>
</template>

<script>
  export default {
    name: 'plant-thumb',
    props: {
      plant: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        lang: 'RU'
      }
    },
    computed: {
      computedName() {
        return this.plant.names.find(name => name.code == this.lang).name
      },
      computedLink() {
        return { name: 'plant', params: { id: this.plant.plant_id }, query: this.$route.query }
      },
      computedStyle() {
        if (this.plant.images.length > 0)
          return 'background-image: url(https://cdn.plantcare.info/images/' + this.plant.images[0].thumb  + ');'
        else
          return ''
      }
    },
    methods: { },
    created() { },
    mounted() { }
  }
</script>

<style lang="scss" scoped>
.plant-thumb {
  --thumb-backgroud-color: #f3f4f3;
  --thumb-text-color: #fff;
  --thumb-shadow-1: 0 3.2px 7.2px 0 rgba(0,0,0,.132), 0 0.6px 1.8px 0 rgba(0,0,0,.108);
  --thumb-shadow-2: 0 12.8px 28.8px 0 rgba(0,0,0,.132), 0 2.4px 7.2px 0 rgba(0,0,0,.216);

  html[data-theme="black"] & {
    --thumb-backgroud-color: #181818;
    --thumb-text-color: #fff;
  }
}

.plant-thumb {
  background: var(--thumb-backgroud-color);
  border-radius: var(--thumb-border-radius);
  height: var(--thumb-height);
  overflow: hidden;
  position: relative;
  user-select: none;
  transition: box-shadow .18s ease, transform .18s ease;

  &:hover {
    box-shadow: var(--thumb-shadow-1);
  }
  &:not(:hover):focus,
  &:not(:hover):focus-within {
    outline: none;
    box-shadow: var(--thumb-shadow-2);
    transform: translateY(-2px);
  }
}
.plant-thumb__title {
  padding: .5rem 1rem;
  color: var(--thumb-text-color);
  font-weight: 400;
  font-size: 2rem;
  position: absolute;
  bottom: 0;
  z-index: 20;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.55);
}
.plant-thumb__gradient {
  background: linear-gradient(18deg,rgba(0,0,0,.5),rgba(76,76,76,.1) 24%,rgba(74,74,74,0) 56%,hsla(0,0%,100%,0));
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 15;
}
.plant-thumb__cover {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}
.plant-thumb__link {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
}
</style>