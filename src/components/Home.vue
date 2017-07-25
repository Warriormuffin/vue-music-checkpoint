<template>
  <div class="home">
    <div class="container">
      <div class="row" id='logo-row'>
        <h1 class="logo-name"><img class="logo-image" src="./../assets/logo.png" alt="">ue Music Finder</h1>
      </div>
      <div class='row'>
        <div class="col-xl-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
  </div>
</template>

<script>
  import Itunes from './Itunes'
  import MyTunes from './My-Tunes'
  export default {
    name: 'home',
    components: { Itunes, MyTunes },
    data() {
      return {

      }
    }
  }

</script>


<style>
  /**
* YOU SHOULD PROBABLY MAKE THIS LOOK BETTER :)
* BOOTSTRAP IS FOR THE WEAK FLEXBOX IS KING
* -- McCall
**/
  /*.my-tunes{
  display: inline-block;
  min-height: 500px;
  min-width: 50%;
  background: purple;
}

.itunes{
  display: inline-block;
  background: pink;
  min-height: 500px;
  min-width: 45%;
}*/
body{
    background-image: url(https://templeofara.net/wp-content/uploads/2015/07/wheat-field.jpg);
    /*background-image: url(https://unsplash.it/g/1920/1080/?random);*/
    background-size: cover;
    background-attachment: fixed;
    -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;


}

  .logo-image {
    height: 50px;
  }

  h1 {
    color: #35495e;
  }

  .card:hover{
  background-color: rgba(255,255,255, .8);

}
</style>