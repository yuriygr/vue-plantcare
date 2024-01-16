<template>
  <modal size="wide" class="plant-modal">
    <div class="plant-modal__close" @click.exact="closeModal" :title="$t('actions.close')"></div>
    <div class="plant-modal__cover" :style="{ backgroundImage: 'url(https://cdn.plantcare.info/images/' + getSource + ')' }">
      <div class="plant-modal__header">
        <div class="header__main_name" v-html="getMainName" />
        <div class="header__second_names" v-html="getSecondNames" />
      </div>
    </div>
    
    <div class="plant-modal__tips" v-if="has('tips')">
      <div class="item" v-for="(tip, index) in plant.tips" :key="'tip' + index">
        <div class="icon">{{ tip.icon }}</div>
        <div class="detail">
          <span class="title">{{ tip.title }}</span>
          <span class="content">{{ tip.content }}</span>
        </div>
      </div>
    </div>

    <div class="plant-modal__content" v-if="has('content')">
      <div class="item" v-if="plant.content.description">
        <div class="icon">📄</div>
        <div class="detail">
          <div class="title">{{ $t('plant.description') }}</div>
          <div class="content" v-html="plant.content.description" />
        </div>
      </div>
      <div class="item" v-if="plant.content.reproduction_methods">
        <div class="icon">🌱</div>
        <div class="detail">
          <div class="title">{{ $t('plant.reproduction_methods') }}</div>
          <div class="content" v-html="plant.content.reproduction_methods" />
        </div>
      </div>
      <div class="item" v-if="plant.content.diseases_and_pests">
        <div class="icon">🐛</div>
        <div class="detail">
          <div class="title">{{ $t('plant.diseases_and_pests') }}</div>
          <div class="content" v-html="plant.content.diseases_and_pests" />
        </div>
      </div>
      <div class="item" v-if="plant.content.interesting_facts">
        <div class="icon">🙂</div>
        <div class="detail">
          <div class="title">{{ $t('plant.interesting_facts') }}</div>
          <div class="content" v-html="plant.content.interesting_facts" />
        </div>
      </div>
    </div>

    <div class="plant-modal__details" v-if="has('details')">
      <div class="plant-modal__detail" v-for="(value, key) in plant.details" :key="'detail-' + key">
        <div class="detail__content">{{ value }}</div>
        <div class="detail__name">{{ $t('plant.details.' + key) }}</div>
      </div>
    </div>
  </modal>
</template>

<script>
import { Modal, ModalHeader, Icon, IconButton } from '@vue-norma/ui'

export default {
  name: 'plant-modal',
  components: { Modal, ModalHeader, Icon, IconButton },
  props: {
    plant: {
      type: Object,
      required: true
    }
  },
  computed: {
    lang() {
      return 'RU'
    },
    getSource() {
      if (this.plant.images.length > 0)
        return this.plant.images[0].source
      else
        return ''
    },
    getMainName() {
      return this.plant.names.find(name => name.code == this.lang).name
    },
    getSecondNames() {
      return this.plant.names.filter(name => name.code != this.lang).map(name => name.name).join(',')
    }
  },
  methods: {
    has(key) {
      return this.plant[key] && Object.keys(this.plant[key]).length > 0
    },
    closeModal() {
      this.$modals.close()
    }
  }
}
</script>

<style lang="scss" scoped>
  .plant-modal {
  }

  .plant-modal__close {
    position: absolute;
    cursor: pointer;
    right: calc(16px + .5rem);
    top: calc(16px + .5rem);
    width: 32px;
    height: 32px;
    text-align: center;
    color: #fff;
    opacity: .5;
    z-index: 100;
    transition: var(--x-transition);

    &:hover {
      opacity: 1;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }

    &:after, &:before {
      position: absolute;
      left: 15px;
      content: " ";
      height: 33px;
      width: 4px;
      background-color: #fff;
    }
  }

  .plant-modal__cover {
    display: block;
    position: relative;
    width: 100%;
    height: 320px;
    background-position: center center;
    background-size: cover;
  }

  .plant-modal__header {
    background: linear-gradient(-180deg, rgb(255 255 255 / 0%) 5%, rgb(0 0 0 / 80%) 100%);
    padding: 1rem 2rem;
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 102;

    .header__main_name {
      font-weight: 900;
      font-size: 6rem;
      line-height: 1.2;
    }
    .header__second_names {
      font-weight: 200;
      font-size: 3rem;
      line-height: 1.2;
    }
  }

  // TIPS
  .plant-modal__tips {
    padding: 1rem 2rem;

    .item {
      margin: 1rem 0;
      font-size: 1.7rem;
      display: grid;
      align-items: start;
      grid-template-columns: 48px auto;

      .icon {
        display: flex;
        align-content: center;
        text-align: center;
        font-size: 3rem;
        height: 100%;
      }

      .title {
        font-weight: 900;
        display: block;
      }
    }
  }


  // Content
  .plant-modal__content {
    border-top: 1px solid var(--divider-color);
    padding: 1rem 2rem;

    .item {
      margin: 1rem 0;
      font-size: 1.7rem;
      display: grid;
      align-items: start;
      grid-template-columns: 48px auto;

      .icon {
        display: flex;
        align-content: center;
        text-align: center;
        font-size: 3rem;
        height: 100%;
      }

      .title {
        font-weight: 900;
        display: block;
      }
    }
  }

  .plant-modal__details {
    background: var(--thumb-backgroud-color);
    padding: .5rem 2rem 1rem;
  }
  .plant-modal__detail {
    margin: 1rem 0;
    font-size: 1.3rem;

    .detail__content {
      font-weight: 600;
      display: block;
    }
  }
</style>