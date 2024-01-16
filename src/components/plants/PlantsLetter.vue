<template>
  <div class="plants-letter">
    <div class="plants-letter__thumb">
      <div class="plants-letter__title"><span v-if="letter">{{ letter }}</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'plants-letter',
    props: {
      letter: {
        type: String,
        required: false
      }
    },
    computed: {},
    methods: {},
    created() { },
    mounted() { }
  }
</script>

<style lang="scss">
.plants-letter {
  --letter-backgroud-color: #f3f4f3;
  --letter-text-color: #111;

  html[data-theme="black"] & {
    --letter-backgroud-color: #181818;
    --letter-text-color: #aaa;
  }
}

.plants-letter {
  background: var(--letter-backgroud-color);
  border-radius: var(--letter-border-radius);
  min-height: var(--letter-height);
  height: 100%;
  grid-column-start: 1;
  user-select: none;
}
.plants-letter__thumb {
  background: var(--letter-backgroud-color);
  border-radius: var(--letter-border-radius);
  height: var(--letter-height);
  position: relative;
  position: sticky;
  top: 0;
}
.plants-letter__title {
  padding: .5rem 1rem;
  font-weight: 300;
  font-size: 5rem;
  position: relative;
  z-index: 20;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    color: #a7128d;
    background: linear-gradient(45deg,#a7128d 33%,#0d61bc 66%,#8aa9d6);
    background-clip: text;
    opacity: .7;
    -webkit-text-fill-color: transparent;
  }
}
</style>