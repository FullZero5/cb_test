<template>
  <div class="card shadow-sm mb-3">
    <div class="text-muted">Название</div>
    <b-card-text class="h3">
      <b-row cols="2" cols-sm="2" cols-md="2" cols-lg="2">
        <b-col>
          <Select />
        </b-col>
        <b-col>
          <b-form-input
            v-model="text"
            placeholder="Enter your name"
          ></b-form-input>
        </b-col>
      </b-row>
    </b-card-text>
  </div>
</template>

<script>
import Select from "./Select.vue";

export default {
  name: "item",
  components: {
    Select,
  },
};
</script>

<style>
</style>