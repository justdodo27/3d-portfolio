<template>
  <div class="home">
    <img alt="Vue logo" src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Extinctbirds1907_P24_Didus_cucullatus0329.png" class="flag" />
    <p>{{ $t("hello") }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    
  },
};
</script>

<style lang="scss" scoped>
  .flag{
    width: 500px;
    height: 500px;
  }
</style>