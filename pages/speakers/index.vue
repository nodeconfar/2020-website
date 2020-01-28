  <template>
  <div class="container center ph3 pt5 vh-100">
    <h1 class="f-subheadline-l f2 mv4-l mv3 fw6 tc blue-node">Speakers</h1>
      <div class="flex flex-wrap">
        <node-profile v-for="w in posts" :key="w.id" :id="w.id" :name="w.name" :job="w.job" :image="w.image" />
      </div>
      </div>
  </template>

<style lang="scss" scoped>

</style>

<script>
import NodeProfile from '@/components/profile.vue'
import json from '@/json/data.json'

export default {
  components: { NodeProfile },

  data() {
    return {
      posts: json
    }
  },
}
</script>




