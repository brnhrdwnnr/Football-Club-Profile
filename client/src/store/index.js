import Vue from "vue";
import Vuex from "vuex";
import axios from "@/apis/server.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    areas: [],
    teamsArea: [],
    teamId: [],
    team: [],
    squads: []
  },
  mutations: {
    SET_AREAS(state, payload) {
      state.areas = payload;
    },
    SET_TEAMSAREA(state, payload) {
      state.teamsArea = payload;
    },
    SET_TEAMID(state, payload) {
      state.teamId = payload;
    },
    SET_TEAM(state, payload) {
      state.team = payload;
    },
    SET_SQUADS(state, payload) {
      state.squads = payload;
    }
  },
  actions: {
    fetchAllAreas(context) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: "/areas/",
          headers: {
            "X-Auth-Token": "c9bd0001fae74844b0345876cec08d6c",
          },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    fetchTeamsByAreaId(context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: `/teams?areas=${payload}`,
          headers: {
            "X-Auth-Token": "c9bd0001fae74844b0345876cec08d6c",
          },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    fetchTeamsById(context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: `/teams/${payload}`, 
          headers: {
            "X-Auth-Token": "c9bd0001fae74844b0345876cec08d6c",
          },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
    fetchPlayersByTeamId(context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: `/players/${payload}`, 
          headers: {
            "X-Auth-Token": "c9bd0001fae74844b0345876cec08d6c",
          },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },
  },
  modules: {},
});
