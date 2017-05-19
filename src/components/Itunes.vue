<template>
  <div class="itunes">
      <input type="text" v-model="query">
      <button type='button' @click="search">Search Artist</button>
  </div>

  </div>
</template>


<script>
import ItunesService from '@/services/itunes-service'
export default {
  name: 'itunes',
  data(){
    return {
      query: "",
      currentArtistData: {}

    }
  },
  computed:{},
  methods:{
    search(){
      debugger
      ItunesService.getMusicByArtist(this.query).then(artistData=>{
        this.currentArtistData = artistData
      })
    }
  },
  components:{}
}
</script>


<style scoped>

</style>