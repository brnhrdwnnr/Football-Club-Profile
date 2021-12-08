<template>
  <div class="col-md-4 mb-2">
    <div class="card mt-2">
      <div @click.prevent="toDetails" class="card-body border border-dark">
        <div class="d-flex justify-content-between">
          <div class="align-self-center">
            <div>
              <h6>
                <strong>{{ squad.name }}</strong>
              </h6>
            </div>
          </div>
          <div class="justify-content-end">
            <h6>{{ squad.position ? squad.position : "null" }}</h6>
            <h6>{{ squad.role ? squad.role : "null" }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamCard",
  props: ["squad"],
  methods: {
    toDetails() {
      this.$router.push(`/player/${this.squad.id}`);
    },
  },
};
</script>

<style scoped>
.card-img-top {
  max-width: 50px;
  max-height: 25px;
  object-fit: cover;
}
.image {
  border-radius: 1px;
}
.card {
  background-color: #2C3531;
}
h6 {
  margin-top: 5px;
  color: white;
}

</style>
