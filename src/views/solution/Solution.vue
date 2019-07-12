<template>
  <div class="solution">
    <vue-headful title="解决方案"></vue-headful>
    <div class="solution_content" :style="bgm">
      <div class="top_logo">
        <img src="@/assets/images2/logo3.png" />
      </div>
      <div class="card_list">
        <ul>
          <li :style="card_list1" @click="RouterPush('TechnicalWhitePaper')"></li>
          <li :style="card_list2" @click="RouterPush('ProductCatalogue')"></li>
          <li :style="card_list3" @click="RouterPush('KeyTechnology')"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Solution",
  data() {
    return {
      bgm: {
        backgroundImage:
          "url(" + require("@/assets/images2/arubabg.png") + ") ",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      card_list1: {
        backgroundImage: "url(" + require("@/assets/images2/bps2.png") + ") ",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      card_list2: {
        backgroundImage: "url(" + require("@/assets/images2/cp2.png") + ") ",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      card_list3: {
        backgroundImage: "url(" + require("@/assets/images2/js2.png") + ") ",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }
    };
  },
  methods: {
    RouterPush(routername) {
      let vm = this;
      vm.$router.push({ name: routername });
    }
  }
};
</script>
<style scoped>
.solution_content {
  height: 100vh;
  width: 100%;
}
.solution_content .top_logo {
  padding: 3vh 0px;
  text-align: center;
  left: -3vw;
}
.solution_content .top_logo img {
  width: 100px;
  height: 50px;
  /* margin: 3vh 0; */
}
.solution_content .card_list {
  padding: 0px 2vw;
  overflow: hidden;
}
.solution_content .card_list ul li {
  position: relative;
  width: 100%;
  height: 25vh;
  margin-bottom: 12px;
  border-radius: 5px;
}
</style>