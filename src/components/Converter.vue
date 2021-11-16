<template>
  <div class="vh-100">
    <b-row class="justify-content-md-center">
      <b-col>
        <div class="card shadow">
          <div class="card-body">
            <div class="text-muted">Название</div>
            <b-card-text class="h3">
              <b-row cols="2" cols-sm="2" cols-md="2" cols-lg="2">
                <b-col>
                  <b-form-select
                    v-model="selected[0]"
                    :options="getCountries"
                    size="sm"
                    class="form-select"
                    @change="convert"
                  ></b-form-select>
                </b-col>
                <b-col>
                  <b-form-input
                    :state="nameState"
                    v-model="inputed"
                    @keypress="onlyNumber"
                    type="text"
                    @input="convert"
                    required
                  ></b-form-input>
                </b-col>
              </b-row>
            </b-card-text>
          </div>
        </div>
      </b-col>
      <b-col class="col-auto" align-self="center">
        <div class="d-flex h-50">
          <b-button
            style="border-radius: 100%"
            class="shadow"
            variant="outline-light"
            @click="change"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="black"
              class="bi bi-arrow-left-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
              />
            </svg>
          </b-button>
        </div>
      </b-col>
      <b-col>
         <div class="card shadow">
          <div class="card-body">
            <div class="text-muted">Название</div>
            <b-card-text class="h3">
              <b-row cols="2" cols-sm="2" cols-md="2" cols-lg="2">
                <b-col>
                  <b-form-select
                    v-model="selected[1]"
                    :options="getCountries"
                    size="sm"
                    class="form-select"
                    @change="convert"
                  ></b-form-select>
                </b-col>
                <b-col>
                  <b-form-input
                    v-model="result"
                    type="text"
                    @input="convert"
                    disabled
                  ></b-form-input>
                </b-col>
              </b-row>
            </b-card-text>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Converter",
  data() {
    return {
      inputed: null,
      result: null,
      selected: ['RUB', 'USD'],
    }
  },
  computed: {
    nameState() {
      return this.inputed !== null && this.inputed !== '' ? true : false
    },
    ...mapGetters([
      "getCountries",
      "getDatas"
    ]),
  },
  methods: {
    onlyNumber ($event) {
      let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
          $event.preventDefault();
      }
    },
    convert() {
      const defaultValute = {Value: 1, Nominal: 1 };
      let firstValute = this.getDatas(this.selected[0]) ?? defaultValute,
          firstValuteValue = firstValute.Value * Number(this.inputed),
          firstValuteNominal = firstValute.Nominal;
      let secondValute = this.getDatas(this.selected[1]) ?? defaultValute,
          secondValuteValue = secondValute.Value,
          secondValuteNominal = secondValute.Nominal;
      let result = (firstValuteValue / firstValuteNominal) / (secondValuteValue / secondValuteNominal);
      this.result = result ? Math.floor(result * 10000) / 10000 : null;
    },
    change() {
     this.selected = [this.selected[1], this.selected[0]]
     const result = this.result
     const inputed = this.inputed
     this.result = inputed
     this.inputed = result
    }
  },
};
</script>

<style>
</style>