<template>
  <div id="teams">
    <div class="container">
      <br />
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link :to="'/'">Home</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ area[0].name }}
          </li>
        </ol>
      </nav>

      <div class="row text-center mb-3">
        <h2>Football / Soccer Club at {{ area[0].name }}</h2>
      </div>

      <br />
      <div v-if="teamsArea.length" class="search">
        <input type="text" placeholder="Search Teams" v-model="searchQuery" />
        <button>
          <i class="fas fa-search"></i>
        </button>
      </div>

      <div v-if="teamsArea.length" class="row">
        <TeamAreaCard v-for="club in resultQuery" :key="club.id" :club="club" />
      </div>
      <div v-if="teamsArea.length === 0" class="row">
        <div class="col-md-12">
          <div class="card">
            <h3>Club is not found</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeamAreaCard from "../components/TeamAreaCard.vue";
import { alertError, alertLoading, swalDone } from "../apis/swal";
export default {
  name: "TeamArea",
  data() {
    return {
      searchQuery: null,
    };
  },
  methods: {
    fetchTeamsByAreaId() {
      alertLoading();
      this.$store
        .dispatch("fetchTeamsByAreaId", this.$route.params.id)
        .then((data) => {
          this.$store.commit("SET_TEAMID", data.filters.areas);
          this.$store.commit("SET_TEAMSAREA", data.teams);
          swalDone();
        })
        .catch((err) => {
          alertError(err.error);
          this.$router.push("/");
        });
    },
  },
  created() {
    this.fetchTeamsByAreaId();
  },
  components: {
    TeamAreaCard,
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.teamsArea.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.teamsArea;
      }
    },
    area() {
      return this.$store.state.areas.filter((item) => {
        return item.id === +this.$route.params.id;
      });
    },
    teamsArea() {
      return this.$store.state.teamsArea;
    },
  },
};
</script>

<style scoped>
#teams {
  background-color: #c2cad0;
  min-height: 93.3vh;
  height: auto;
}
h2 {
  text-align: left;
}
h3 {
  text-align: center;
  color: white;
  margin: auto;
}

.card {
  background-color: #5d5c61;
  height: 250px;
}
.search {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
card-img-top {
  max-width: 150px;
  max-height: 75px;
  object-fit: cover;
  /* margin-top: 10px; */
}
</style>
