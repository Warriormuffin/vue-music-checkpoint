<template>
  <div class="my-tunes">
    <button @click="getMyPlaylist">Show Your Playlist</button>
    <br>
    <div class="row">
      <div v-for='artist in this.myPlayList' class="col-xl-6">
          <div class="card text-center">
            <div class="card-block">
              <img :src="artist.artworkUrl100" alt="">
              <h3>{{artist.artistName}}</h3>
              <h4 class="card-title">{{artist.trackName}}</h4>
              <p class="card-text">{{artist.collectionName}}</p>
              <p class="card-text">{{artist.collectionPrice}}</p>
              <audio :id="artist.trackId" controls = "controls" preload="none"><source :src="artist" type="audio/mp4"/></audio>
              <br>
              <a  @click="addSongToMyPlaylist(artist)" class="btn btn-primary">Add To Playlist</a>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>


<script>
import MyTunesService from '@/services/mytunes-service'
  export default {
    name: 'my-tunes',
    data() {
      return {
        myPlayList: {}
      }
    },
    computed: {},
    methods: {
      getMyPlaylist(){
        debugger
        this.myPlayList = MyTunesService.getTracks()
        debugger
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>