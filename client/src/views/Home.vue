<template>
  <div id="home">
    <div class="container">
      <br />
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">Home</li>
        </ol>
      </nav>

      <div class="row text-center mb-3">
        <h2>Football / Soccer Club World Area</h2>
        <div class="carousel">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide
              caption="First slide"
              text="Nulla vitae elit libero, a pharetra augue mollis interdum."
              img-src="https://wallpaperaccess.com/full/2821048.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Second slide"
              text="Nulla vitae elit libero, a pharetra augue mollis interdum."
              img-src="https://wallpaperaccess.com/full/2821044.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Third slide"
              text="Nulla vitae elit libero, a pharetra augue mollis interdum."
              img-src="https://wallpaperaccess.com/full/2821041.jpg"
            ></b-carousel-slide>
          </b-carousel>
        </div>
      </div>

      <div class="search">
        <input type="text" placeholder="Search Country" v-model="searchQuery" />
        <button>
          <i class="fas fa-search"></i>
        </button>
      </div>

      <div class="row">
        <AreaCard v-for="area in resultQuery" :key="area.id" :area="area" />
      </div>
    </div>
  </div>
</template>

<script>
import { alertError, alertLoading, swalDone } from "../apis/swal";
import AreaCard from "../components/AreaCard";
export default {
  name: "Home",
  data: function () {
    return {
      searchQuery: null,
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    fetchAllAreas() {
      alertLoading();
      this.$store
        .dispatch("fetchAllAreas")
        .then((data) => {
          this.$store.commit("SET_AREAS", data.areas);
          swalDone();
        })
        .catch((err) => {
          alertError(err.error);
        });
    },
  },
  created() {
    this.fetchAllAreas();
  },
  components: {
    AreaCard,
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.areas.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.areas;
      }
    },
    areas() {
      return this.$store.state.areas;
    },
  },
};
</script>
<style>
#home {
  background-color: #c2cad0;
  min-height: 93.3vh;
  height: auto;
}
.search {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel {
  width: 100%;
  max-height: 480px;
  justify-items: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
h2 {
  text-align: left;
}
</style>
