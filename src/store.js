import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      value:{},
      countries: ['RUB']
  },
  getters: {
    getValues: state => filter => {
        const data = Object.keys(state.value).map(key => {return state.value[key]})
        const result  = data.filter(row => {
            return Object.keys(row).some(key => {
              return (
                String(row[key])
                  .toLowerCase()
                  .indexOf(filter) > -1
              );
            });
        });
        return filter === '' ? data : result
    },
    getCountries: state => state.countries
  },
  mutations: {
    SET_CURRENCIES: (state, payload) => {
        state.value = payload;
    },
    SET_COUNTRIES: (state, array) => {
        const countries = []
        for (let code in array) {
            countries.push(code)
        }
        state.countries = [...state.countries, ...countries]
    }
  },
  actions: {
    GET_CURRENCIES: async (context) => {
        let { data } = await Axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
        context.commit('SET_CURRENCIES', data.Valute);
        context.commit('SET_COUNTRIES', data.Valute)
  },
 }
});