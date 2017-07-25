<template>
  <div class="itunes">
    <div class="search-bar">
      <input type="text" v-model="query">
      <button type='button' @click="search">Search Artist</button>
    </div> <br>
    <div class="row">
      <div v-for='artist in this.currentArtistData' class="col-xl-4">
          <div class="card text-center">
            <div class="card-block">
              <img :src="artist.artworkUrl100" alt="">
              <h3>{{artist.artistName}}</h3>
              <h4 class="card-title">{{artist.trackName}}</h4>
              <p class="card-text">{{artist.collectionName}}</p>
              <p class="card-text">{{artist.collectionPrice}}</p>
              <audio :id="artist.trackId" controls = "controls" preload="none"><source :src="artist.previewUrl" type="audio/mpeg"></audio>
              <br>
              <a  @click="addSongToMyPlaylist(artist)" class="btn btn-primary">Add To Playlist</a>
            </div>
          </div>
      </div>
      <br>
    </div>
  </div>
</template>


<script>
  import ItunesService from '@/services/itunes-service'
  import MyTunesService from '@/services/mytunes-service'
  import MyTunesComponent from './My-Tunes'
  export default {
    name: 'itunes',
    data() {
      return {
        query: "",
        currentArtistData: {}

      }
    },
    computed: {},
    methods: {
      search() {
        ItunesService.getMusicByArtist(this.query).then(artistData => {
          this.currentArtistData = JSON.parse(artistData)
          this.currentArtistData = this.currentArtistData.results
          console.log(this.currentArtistData)
        })
      },
      addSongToMyPlaylist(newlyAddedArtist){
        debugger
        MyTunesService.addTrack(newlyAddedArtist)

      }
    },
    components: {}
  }

</script>


<style scoped>
  .search-bar {
    text-align: center;
  }
  .card-columns{
    display: inline-block
  }
  audio{
    width: 220px;
  }
</style>