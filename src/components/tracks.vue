<template>
  <div>
    <div class="card trackcard border-0" v-if="trackObject">
      <img
        class="card-img-top img-fluid"
        alt="Card image cap"
        :src="trackObject.album.images[1].url"
      >
      <div class="card-body text-dark">
        <h6 class="card-title">{{trackObject.name}}</h6>
        <!-- <h6>
          <small>Duration:</small>
          <span class="badge badge-secondary">{{seconds(trackObject.duration_ms)}}</span>
        </h6>-->
        <div class="audio">
          <audio controls>
            <source :src="trackObject.preview_url" type>
          </audio>
        </div>
        <button class="btn btn-dark btn-block mt-1">Go to</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tracks",
  props: {
    trackObject: {
      type: Object,
      required: true
    }
  },
  computed: {
    seconds(millis) {
      return function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return seconds;
      };
    }
  }
};
</script>

<style scoped>
.card-body {
  background: white;
}
audio::-webkit-media-controls-panel {
  background: white;
}
audio {
  outline: none;
  width: 100%;
}

/*
.btn {
  display: block;
  border: 1px solid white;
  border-radius: 4px;
  position: relative;
  z-index: 10;
  color: white;
  padding: 10px;
  text-align: center;
  background: rgba(0, 0, 0, .3);
  margin: 20px 0px;
  outline: none;
  box-shadow: 0 0 10px rgba(0,0,0,.5);
  transition: all .2s;
}
button:hover {
  background: rgba(255, 255, 255, .8);
  color: black;
  box-shadow: 0 0 10px rgba(255,255,255,.5);
  mix-blend-mode: screen;
}
*/
button:active {
  transform: translateY(2px);
}
</style>

