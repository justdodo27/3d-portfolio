<template>
  <div class="home">
    <h1 id="heading1">3D MODDELING</h1>
    <h1 id="heading2">DIGITAL ART</h1>
    <h1 id="heading3">BLENDER</h1>
    <!-- <p>{{ $t("hello") }}</p> -->
    <img alt="Vue logo" src="https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/4075c05f7b5feee04b704f8e4fc3f263/large.png" class="flag" />
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

  .home{
    min-height: 600;
    overflow: hidden;
  }

  #heading1{
    position: absolute;
    width: 620px;
    left: 15px;
    top: 55px;
    font-size: 5rem;
    animation: slide-left 1.5s cubic-bezier(0.67, 0.37, 0.27, 0.17) 0s infinite alternate forwards;
  }

  @keyframes slide-left {
    from{
      left: 15px;
      }
    to{
      left: 20px;
    }
  }

  #heading2{
    position: absolute;
    right: 65px;
    bottom: 10px;
    font-size: 3.5rem;
    animation: slide-right 1.5s cubic-bezier(0.67, 0.37, 0.27, 0.17) 0.5s infinite alternate forwards;
  }

  @keyframes slide-right {
    from{
      right: 65px;
      }
    to{
      right: 70px;
    }
  }

  #heading3{
    position: absolute;
    left: 70px;
    top: 270px;
    font-size: 4rem;
    color: #0e548b;
  }
</style>