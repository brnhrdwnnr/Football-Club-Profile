<template>
  <div class="col-md-4 mb-2">
    <div class="card mt-2">
      <div @click.prevent="toDetails" class="card-body border border-dark">
        <div class="d-flex justify-content-between">
          <div class="justify-content-start">
            <img
              v-if="area.ensignUrl"
              :src="area.ensignUrl"
              class="card-img-top border border-dark"
              alt=""
            />
            <img
              v-else
              src="../assets/noimage.jpg"
              class="card-img-top border border-dark"
              alt=""
            />
            <div class="country-code">
              <h6>{{ area.countryCode }}</h6>
            </div>
          </div>
          <h6 class="align-self-center">
            <strong>{{ area.name }}</strong>
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AreaCard",
  props: ["area"],
  methods: {
    toDetails() {
      this.$router.push(`/team-area/${this.area.id}`);
    },
  },
};
</script>

<style scoped>
.card-img-top {
  width: 50px;
  height: 25px;
  object-fit: cover;
  margin-top: 10px;
}
.country-code {
  margin-top: 5px;
}
.card {
  background-color: #5d5c61;
}
h6 {
  color: white;
}
</style>
