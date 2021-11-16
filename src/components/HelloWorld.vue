<template>
  <div >
  <b-card no-body >
    <b-tabs card fill>
      <b-tab title="Список валют" active>
        <b-card-text >
          <CarrenciesList/>
        </b-card-text>
      </b-tab>
      <b-tab title="Конвертер">
        <b-card-text>
         <Converter />
        </b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</div>
</template>

<script>
import CarrenciesList from './СurrenciesList.vue'
import Converter from './Converter.vue'

export default {
  name: 'HelloWorld',
  components: {
    CarrenciesList,
    Converter
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only #2797fe -->
<style scoped>

</style>
