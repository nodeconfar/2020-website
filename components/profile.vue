    <template>

      <article class="h-100 relative overflow-hidden">
        <nuxt-link :to="`/speakers/${id}/`" class="link black">
             <p class="mv0"><img :src="`/profiles/${image}.jpg`" class="v-mid" :alt="name"></p>
          <div class="hide-child aspect-ratio--object overflow-hidden">
              <div class="child tc h-100 flex justify-center flex-column bg-article pa3">
            <p class="tag ttu ma0 blue-node f7 pb1">{{ job }}</p>
            <p class="ma0 f4 fw6 blue-node">{{ name }}</p>
            </div>
          </div>
        </nuxt-link>
      </article>
    </template>

    <script>
      export default {
        props: ['id', 'image', 'name', 'job']
      }
    </script>

<style lang="scss" scoped>
article {
    width: 50%;
    @media screen and (min-width: 60em) {
      width: 25%;
    }
    .bg-article {
      background: rgba($color: #fff, $alpha: .9)
    }
}
</style>
