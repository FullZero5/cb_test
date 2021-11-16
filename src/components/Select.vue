<template>
  <div>
    <b-form-select v-model="selected" :options="getCountries" size="sm" class="mt-3" @change="convert"></b-form-select>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
 name: 'Select',
 props: {
    selected: {
        type: String,
        default: 'RUB'
    },
 },
 computed: {
        ...mapGetters([
        'getCountries'
        ])
    },
    methods: {
        convert(){
          console.log('rr')
        }
    }

}
</script>

<style>

</style>