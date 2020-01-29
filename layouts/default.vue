<template>
  <div>
    <node-header />
    <nuxt />
    <node-footer />

  </div>
</template>

<script>
import NodeHeader from '@/components/header.vue'
import NodeFooter from '@/components/footer.vue';

export default {
  components: { NodeHeader, NodeFooter}
}
</script>
