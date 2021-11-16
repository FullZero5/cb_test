<template>
  <div>
    <b-form-input v-model="text" placeholder="Поиск ...." class="my-4"></b-form-input>
    <Cards v-for="item in getValues(text)" :key="item.ID" :data="item" class="my-2"/>
  </div>
</template>

<script>
import Cards from './Cards.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'currenciesList',
    components: {
        Cards
    },
    data () {
     return {
        text : ''
     }
    },
    computed: {
        ...mapGetters([
        'getValues'
        ])
    }
}
</script>

<style>

</style>