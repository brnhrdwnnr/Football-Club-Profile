<template>
  <div id="player">
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
          <li class="breadcrumb-item">
            <router-link :to="`/team/${team.id}`">
              {{ team.name }}
            </router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ players.name }}
          </li>
        </ol>
      </nav>

      <div class="col-md-8 mb-2">
        <div class="card mt-2 card-player">
          <div class="card-body border border-dark">
            <h1 class="card">{{ players.name }}</h1>
            <div class="d-flex justify-content-between">
              <div class="justify-content-start">
                <div>
                  <h6>First Name :</h6>
                </div>
              </div>
              <h6 class="align-self-center">
                {{ players.firstName ? players.firstName : "null" }}
              </h6>
            </div>
            <div class="d-flex justify-content-between">
              <div class="justify-content-start">
                <div>
                  <h6>Last Name :</h6>
                </div>
              </div>
              <h6 class="align-self-center">
                {{ players.lastName ? players.lastName : "null" }}
              </h6>
            </div>
            <div class="d-flex justify-content-between">
              <div class="justify-content-start">
                <div>
                  <h6>Date of Birth :</h6>
                </div>
              </div>
              <h6 class="align-self-center">
                {{ players.dateOfBirth ? players.dateOfBirth : "null" }}
              </h6>
            </div>
            <div class="d-flex justify-content-between">
              <div class="justify-content-start">
                <div>
                  <h6>Country Of Birth :</h6>
                </div>
              </div>
              <h6 class="align-self-center">
                {{ players.countryOfBirth ? players.countryOfBirth : "null" }}
              </h6>
            </div>
            <div class="d-flex justify-content-between">
              <div class="justify-content-start">
                <div>
                  <h6>Nationality :</h6>
                </div>
              </div>
              <h6 class="align-self-center">
                {{ players.nationality ? players.nationality : "null" }}
              </h6>
            </div>
            <div class="d-flex justify-content-between">
              <div class="justify-content-start">
                <div>
                  <h6>Position :</h6>
                </div>
              </div>
              <h6 class="align-self-center">
                {{ players.position ? players.position : "null" }}
              </h6>
            </div>
            <div class="d-flex justify-content-between">
              <div class="justify-content-start">
                <div>
                  <h6>Shirt Number :</h6>
                </div>
              </div>
              <h6 class="align-self-center">
                {{ players.shirtNumber ? players.shirtNumber : "null" }}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { alertError, alertLoading, swalDone } from "../apis/swal";
export default {
  data() {
    return {
      players: {},
    };
  },
  methods: {
    fetchPlayersByTeamId() {
      alertLoading()
      this.$store
        .dispatch("fetchPlayersByTeamId", this.$route.params.id)
        .then((data) => {
          this.players = data;
          swalDone()
        })
        .catch((err) => {
          alertError(err.error);
          this.$router.push("/");
        });
    },
  },
  created() {
    this.fetchPlayersByTeamId();
  },
  computed: {
    area() {
      return this.$store.state.areas.filter((item) => {
        return item.id === +this.teamId[0];
      });
    },
    teamId() {
      return this.$store.state.teamId;
    },
    team() {
      return this.$store.state.team;
    },
  },
};
</script>

<style scoped>
#player {
  background-color: #c2cad0;
  min-height: 93.3vh;
  height: auto;
}
.card-player {
  background-color: #2C3531;
}
h6 {
  color: white;
}
</style>
