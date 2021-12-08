<template>
  <div id="team">
    <div class="container">
      <br />
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link :to="'/'">Home</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link :to="`/team-area/${area[0].id}`">{{
              area[0].name
            }}</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ team.name }}
          </li>
        </ol>
      </nav>

      <div class="row text-center mb-3">
        <h2>{{ team.name }} Soccer Club</h2>
        <div class="col-lg-6 col-md-6 col-md-12 mb-lg-0 mb-2">
          <div class="card crop">
            <img v-if="team.crestUrl" :src="team.crestUrl" alt="" />
            <img
              v-else
              src="../assets/noimage.jpg"
              class="image-card border border-dark"
              alt=""
            />
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div>
            <div @click="showDetail" class="card col-lg-12 mb-2">
              <h5>Click for Club Detail</h5>
            </div>
            <div v-if="status" class="d-flex justify-content-between">
              <div class="text-left col-lg-6 col-md-6">
                <h6>Address:</h6>
              </div>
              <div class="text-left col-lg-6 col-md-6">
                <h6>{{ team.address ? team.address : "null" }}</h6>
              </div>
            </div>
            <div v-if="status" class="d-flex justify-content-between">
              <div class="text-left col-lg-6 col-md-6">
                <h6>Phone:</h6>
              </div>
              <div class="text-left col-lg-6 col-md-6">
                <h6>{{ team.phone ? team.phone : "null" }}</h6>
              </div>
            </div>
            <div v-if="status" class="d-flex justify-content-between">
              <div class="text-left col-lg-6 col-md-6">
                <h6>Website:</h6>
              </div>
              <div class="text-left col-lg-6 col-md-6">
                <h6>{{ team.website ? team.website : "null" }}</h6>
              </div>
            </div>
            <div v-if="status" class="d-flex justify-content-between">
              <div class="text-left col-lg-6 col-md-6">
                <h6>Email:</h6>
              </div>
              <div class="text-left col-lg-6 col-md-6">
                <h6>{{ team.email ? team.email : "null" }}</h6>
              </div>
            </div>
            <div v-if="status" class="d-flex justify-content-between">
              <div class="text-left col-lg-6 col-md-6">
                <h6>Founded:</h6>
              </div>
              <div class="text-left col-lg-6 col-md-6">
                <h6>{{ team.founded ? team.founded : "null" }}</h6>
              </div>
            </div>
            <div v-if="status" class="d-flex justify-content-between">
              <div class="text-left col-lg-6 col-md-6">
                <h6>Club Colors:</h6>
              </div>
              <div class="text-left col-lg-6 col-md-6">
                <h6>{{ team.clubColors ? team.clubColors : "null" }}</h6>
              </div>
            </div>
            <div v-if="status" class="d-flex justify-content-between">
              <div class="text-left col-lg-6 col-md-6">
                <h6>Venue:</h6>
              </div>
              <div class="text-left col-lg-6 col-md-6">
                <h6>{{ team.venue ? team.venue : "null" }}</h6>
              </div>
            </div>
            <div v-if="status" class="d-flex justify-content-between">
              <div class="text-left col-lg-6 col-md-6">
                <h6>Squads Number:</h6>
              </div>
              <div class="text-left col-lg-6 col-md-6">
                <h6>{{ squads.length ? squads.length : "null" }}</h6>
              </div>
            </div>
          </div>
        </div>

        <br />
        <div v-if="squads.length !== 0" class="search mt-2">
          <input
            type="text"
            placeholder="Search Player"
            v-model="searchQuery"
          />
          <button>
            <i class="fas fa-search"></i>
          </button>
        </div>
        <div class="teams">
          <div v-if="squads" class="row">
            <TeamCard
              v-for="squad in resultQuery"
              :key="squad.id"
              :squad="squad"
            />
          </div>
          <div v-else class="row">squad not found</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeamCard from "../components/TeamCard.vue";
import { alertError, alertLoading, swalDone } from "../apis/swal";
export default {
  data() {
    return {
      searchQuery: null,
      status: false,
    };
  },
  methods: {
    fetchTeamsById() {
      alertLoading();
      this.$store
        .dispatch("fetchTeamsById", this.$route.params.id)
        .then((data) => {
          this.$store.commit("SET_TEAM", data);
          this.$store.commit("SET_SQUADS", data.squad);
          swalDone();
        })
        .catch((err) => {
          alertError(err.error);
          this.$router.push("/");
        });
    },
    showDetail() {
      this.status = !this.status;
    },
  },
  created() {
    this.fetchTeamsById();
  },
  components: {
    TeamCard,
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.squads.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.squads;
      }
    },
    area() {
      return this.$store.state.areas.filter((item) => {
        return item.id === +this.teamId[0];
      });
    },
    team() {
      return this.$store.state.team;
    },
    squads() {
      return this.$store.state.squads;
    },
    teamId() {
      return this.$store.state.teamId;
    },
  },
};
</script>

<style scoped>
#team {
  background-color: #c2cad0;
  min-height: 93.3vh;
  height: auto;
}
h5 {
  margin: auto;
}
h6 {
  text-align: justify;
}
card {
  background-color: #2C3531;
}
</style>
