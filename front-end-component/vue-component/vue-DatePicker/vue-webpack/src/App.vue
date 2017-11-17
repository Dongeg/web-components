<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <div>
      <div>
        起始时间：<div class="datepicker"><datepicker v-model="startDate" :max="endDate == '' ? '3016-01-01' : endDate"></datepicker></div>
      </div>
      <br>
      <div>
        结束时间：<div class="datepicker"><datepicker v-model="endDate" :min="startDate"></datepicker></div>
      </div>
    </div>
    <div class="result">你选择的起始时间是:{{startDate}}</div>
    <div class="result">你选择的结束时间是:{{endDate}}</div>
  </div>
</template>

<script>
import datepicker from './components/vue-date/Datepicker'
export default {
  components: { datepicker },
  name: 'app',
  data () {
    return {
      startDate: '',
      endDate: ''
    }
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.result {
  width: 383px;
  text-align: left;
  margin: 100px auto;
}
.datepicker {
  display: inline-block;
  width: 300px;
}
</style>
