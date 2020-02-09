<template>
  <div>
    <node-banner />
    <node-about />
              <node-newsletter />
                        <node-sponsors />
  </div>
</template>

<script>
import NodeBanner from '~/components/banner.vue'
import NodeAbout from '~/components/about.vue'
import NodeSponsors from '~/components/sponsors.vue'
import NodeNewsletter from '~/components/newsletter.vue'

export default {
  components: { NodeBanner, NodeAbout, NodeNewsletter, NodeSponsors }
}
</script>
<style lang="scss" scoped>

</style>


