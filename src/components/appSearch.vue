<template>
  <div>
    <div class="container-fluid pb-5" id="main-container">
      <div class="row mt-5">
        <div class="offset-md-3 col-md-6 form-inline">
          <input
            type="text"
            class="form-control col"
            placeholder="Buscar tema"
            v-model="searchedTrack"
            @keyup.enter="search"
          >
          <button class="btn" @click="search">Buscar</button>
        </div>
        <div class="offset-md-3 col-md-6 text-left pt-1" v-show="encontrados > 0">
          <h6 class="mt-1 mb-5">
            <small class="found">Encontrados: {{encontrados}}</small>
          </h6>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12 mt-4" v-show="cargando">
          <div class="loader">Loading...</div>
        </div>
        <div class="col-md-4 col-lg-3 mb-4" v-for="track in tracks" :key="track.id">
          <tracks :trackObject="track"></tracks>
        </div>
        <div
          class="alert alert-danger offset-md-3 col-md-6 pt-3 pb-3 mt-5 fadeInUp"
          role="alert"
          v-show="alertNotification"
        >No se encontraron resultados</div>
      </div>
    </div>
  </div>
</template>

<script>
import gettingApi from "../services/track";
import tracks from "./tracks";

export default {
  name: "appSearch",
  components: {
    tracks
  },
  data() {
    return {
      searchedTrack: "",
      tracks: [],
      cargando: null,
      alertNotification: false
    };
  },
  methods: {
    search() {
      this.tracks = [];
      this.cargando = true;
      if (!this.searchedTrack) {
        return;
      }
      gettingApi.search(this.searchedTrack).then(res => {
        this.tracks = res.tracks.items;
        this.cargando = false;
        if (this.tracks.length === 0) {
          this.alertNotification = true;
        }
      });
    }
  },
  computed: {
    encontrados() {
      return this.tracks.length;
    }
  },
  watch: {
    alertNotification() {
      if (this.alertNotification) {
        setTimeout(() => {
          this.alertNotification = false;
        }, 2000);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.found {
  color: #fff;
}
.loader {
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #ffffff;
  background: -moz-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: linear-gradient(
    to right,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.loader:before {
  width: 50%;
  height: 50%;
  background: #ffffff;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
}
.loader:after {
  background: #130721;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: "";
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.btn {
  background: #373737;
  color: white;
}
.fadeInUp {
  -webkit-animation-name: fadeInUp; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 0.5s; /* Safari 4.0 - 8.0 */
  animation-name: fadeInUp;
  animation-duration: 0.5s;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>

