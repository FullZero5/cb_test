<template>
  <div class="card shadow-sm">
    <div class="card-body">
      <div class="text-muted">
        {{ data.Name }}
      </div>
      <b-card-text class="h3">
        <b-row class="">
          <b-col> {{ data.Nominal }} {{ data.CharCode }} </b-col>
          <b-col>
            <b-icon icon="arrow-up" rotate="270"></b-icon>
            <b-icon icon="arrow-up" rotate="90"></b-icon>
          </b-col>
          <b-col>{{ data.Value }} RUB</b-col>
          <b-col class="float-right">
            <IconArrow
              :rotate="!delta.log ? 0 : 180"
              :variant="!delta.log ? 'success' : 'danger'"
            />
            <span :class="!delta.log ? 'text-success' : 'text-danger'">{{
              delta.num
            }}</span>
          </b-col>
        </b-row>
      </b-card-text>
    </div>
  </div>
</template>

<script>
import IconArrow from "./IconArrow.vue";

export default {
  name: "card",
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  components: {
    IconArrow,
  },
  computed: {
    delta: function () {
      const num = Number(this.data.Value - this.data.Previous).toFixed(4)
      const log = this.data.Value < this.data.Previous
      return { num: num, log: log }
    },
  },
};
</script>

<style>
</style>