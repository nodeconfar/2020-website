<template>
  <div>
    <div class="container center pt6 vh-100">
      <div class="flex ph5-l ph3">
        <div class="w-40-l w-100"> <p class="mv0"><img :src="`/profiles/${post.image}.jpg`" class="v-mid" :alt="post.name"></p></div>
      <div class="w-60-l w-100 pt3 pb0-l pb6">
        <p class="ttu f5-l f6 ma0">{{post.job }}</p>
        <h2 class="green-node f1-l f3 mt0 mb2">{{post.name }}</h2>
        <p class="lh-copy">
          {{post.bio }}
        </p>
              <!-- ocultar si no hay dato -->
      <div v-if="post.title" class="mt4">
        <p class="f6 ttu mv0">details about the talk</p>
        <h4 class="f3-l green-node f4 mv2">{{post.title }}</h4>
        <p class="f6 lh-copy mv0">{{post.description }}</p>
      </div>
      <!-- fin -->
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from '@/json/data.json'
export default {
  data() {
    return {
      id: this.$route.params.id,
      posts: json
    }
  },
  computed: {
    post() {
      return this.posts.find(post => post.id === this.id)
    }
  },

head () {
    let post = this.post
    return {
      title: post.name,
      meta: [
        { hid: `description`, name: 'description', content: post.bio },
        { property: 'og:image', content: `https://2020.nodeconfar.com/profiles/${post.ogImage}.png`},
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: post.name },
        { name: 'twitter:description', content: post.bio},
        { name: 'twitter:image', content: `https://2020.nodeconfar.com/profiles/${post.ogImage}.png` }, 
      ]
    }
  },
}

</script>
<style lang="scss" scoped>

</style>


