<template>
  <div>
    <vue-headful title="应用场景"></vue-headful>
    <div class="application1" :style="bgm">
      <div class="top_logo">
        <img src="@/assets/images2/logo3.png" />
      </div>
      <div class="application_list">
        <div
          class="application_item"
          @click="goPdf(1,'https://www.arubanetworks.com/assets/so/SO_HigherEducationArubaOS8.pdf')"
        >
          <p>
            <img src="@/assets/images2/appIcon1.png" />
          </p>
          <p>学生进行网络漫游必须要有 Wi-Fi 作为保障</p>
        </div>
        <div
          class="application_item"
          @click="goPdf(2,'https://www.arubanetworks.com/assets/wp/WP_LocatingValue.pdf')"
        >
          <p>
            <img src="@/assets/images2/appIcon2.png" />
          </p>
          <p>
            环境信息可对数字工作场所进行强化</br>
            了解基于环境信息的位置服务如何提升会议室体验
          </p>
        </div>
        <div
          class="application_item"
          @click="goPdf(3,'https://www.arubanetworks.com/assets/so/SO_Education.pdf')"
        >
          <p>
            <img src="@/assets/images2/appIcon3.png" />
          </p>
          <p>不会干扰学习的可靠课堂 Wi-Fi</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Application1",
  methods: {
    goPdf(NUM,MYURL) {
      let NAME = "PdfSetting";

      let vm = this;
        vm.$router.push({
          name: NAME,
          query: {
            theurl: MYURL
          }
        });
    }
  },
  data() {
    return {
      bgm: {
        backgroundImage:
          "url(" + require("@/assets/images2/arubabg.png") + ") ",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }
    };
  }
};
</script>
<style scoped>
.application1 {
  height: 100vh;
  width: 100%;
}
.application1 .top_logo {
  padding: 3vh 0;
  text-align: center;
}
.application1 .top_logo img {
  width: 100px;
  height: 50px;
}
.application_list {
  padding: 2vw;
}
.application_item {
  color: #fff;
  padding: 1px 10px;
  background: rgba(0, 0, 0, 0.6);
  margin-bottom: 1vh;
  border-radius: 6px;
}
.application_item p {
  text-align: center;
}
.application_item p img {
  width: 25px;
  height: 25px;
}
</style>



