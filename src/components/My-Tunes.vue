<template>
  <div class="my-tunes">
    <div>
      <button @click="getMyPlaylist">Show Your Playlist</button>
    </div>
    <br>
    <div class="row">
      <div v-for='artist in this.myPlayList' class="col-xl-4">
        <div class="card text-center">
          <div class="card-block">
            <img :src="artist.artworkUrl100" alt="">
            <h3>{{artist.artistName}}</h3>
            <h4 class="card-title">{{artist.trackName}}</h4>
            <p class="card-text">{{artist.collectionName}}</p>
            <p class="card-text">{{artist.collectionPrice}}</p>
            <audio :id="artist.trackId" controls="controls" preload="none">
              <source :src="artist" type="audio/mp4" />
            </audio>
            <br>
            <a @click="removeArtistFromPlaylist(artist)" class="btn btn-primary">Remove</a>
            <button @click="promoteSong(artist)">Promote</button>
            <button @click="demoteSong(artist)">Demote</button>
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
        myPlayList: []
      }
    },
    computed: {},
    methods: {
      getMyPlaylist() {
        this.myPlayList.push(MyTunesService.getTracks())
      },
      removeArtistFromPlaylist(artist) {
        MyTunesService.removeTrack(artist)
        this.myPlayList = MyTunesService.getTracks()
      },
      promoteSong(song){
        debugger
        MyTunesService.promoteTrack(song)

      },
      demoteSong(song){
        MyTunesService.demoteTrack(song)
      }
    },
    components: {}
  }

</script>


<style scoped>

</style>