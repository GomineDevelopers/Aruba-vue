<template>
  <div class="persona_center">
    <vue-headful title="个人中心"></vue-headful>
    <div class="persona_center_content" :style="bgm">
      <div class="top_logo">
        <img src="@/assets/images2/logo3.png" />
      </div>
      <div class="card_list">
        <ul>
          <li @click="myclick()" :style="card_list1">
            <p>
              <i>
                <img src="@/assets/images2/card1.png" />
              </i>微名片
            </p>
          </li>
          <li @click="myclick2()" :style="card_list2">
            <p>
              <i>
                <img src="@/assets/images2/hd1.png" />
              </i>我的活动
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Dialog } from 'vant';
Vue.use(Dialog);
export default {
  name: "PersonCenter",
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
        backgroundImage: "url(" + require("@/assets/images2/card0.png") + ") ",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      card_list2: {
        backgroundImage: "url(" + require("@/assets/images2/hd0.png") + ") ",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }
    };
  },
  methods: {
    myclick() {
      let vm = this;
      vm.$router.push({ name: "PersonalData" });
    },
    myclick2() {
      let vm = this;
      Dialog.alert({
        title: "活动提示",
        message: "您目前没有参加任何活动！"
      }).then(() => {
        // on close
      });


    }
  }
};
</script>
<style scoped>
.persona_center_content {
  height: 100vh;
  width: 100%;
}
.persona_center_content .top_logo {
  padding: 3vh 0;
  text-align: center;
}
.persona_center_content .top_logo img {
  width: 100px;
  height: 50px;
}
.persona_center_content .card_list {
  padding: 0px 2vw;
  overflow: hidden;
}
.persona_center_content .card_list ul li {
  position: relative;
  width: 100%;
  height: 30vh;
  margin-bottom: 20px;
}
.persona_center_content .card_list ul li p {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px 0px;
  margin: 0;
  font-size: 14px;
}
.persona_center_content .card_list ul li p i {
  vertical-align: sub;
  margin-right: 8px;
}
</style>


