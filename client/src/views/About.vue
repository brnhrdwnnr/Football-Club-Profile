<template>
  <div id="about">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <h3>This is an about page</h3>
          <p>You could check the source code by the link below</p>
          <a href="https://github.com/brnhrdwnnr/Football-Club-Profile.git">
            <button class="button is-warning">
              <font-awesome-icon
                :icon="['fab', 'github']"
                class="myIcon"
              />&nbsp; GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
#about {
  background-color: #c2cad0;
  min-height: 93.3vh;
  height: auto;
}
</style>
