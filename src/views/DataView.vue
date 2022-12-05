<script lang="ts">
export default {
  data() {
    return { 
      x_coor: -97,
      y_coor: 39,
      url: 'https://api.weather.gov/points/${y_coor},${x_coor}',
      Data: null,
    }
  },
  methods: {
    async fetchData() {
      this.Data = null
      const res = await fetch( 
        `https://api.weather.gov/points/39,${this.x_coor}`
      )
      this.Data = await res.json()
    }
  },
  mounted() {
    this.fetchData()
  },
  watch: {
    x_coor() {
      this.fetchData()
    }
  }
}
</script>

<template>
  <h1>Fetching Data from api.weather.gov</h1>
  <main>
    <p>X coordinate: {{ x_coor }}, Y coordinate: {{y_coor}}</p>
    <button @click="x_coor = x_coor + 10">Fetch next coordinate</button>
    <button @click="x_coor = -97">Reset x coor</button>
    <p v-if="!Data">Loading...</p>
    <p v-else>{{Data}}</p>
   </main>
</template>
