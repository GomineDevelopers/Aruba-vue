<template>
  <div class="Invitation">
    <div class="head">
      <p class="hfont1">ARUBA 2019中国高校第二届信息技术高峰论坛邀请函</p>
      <p class="hfont2">新疆·伊犁</p>
      <p class="hfont2">2019年8月12日-15日</p>
    </div>

    <div class="content1">
      <p class="c1 font_bold">尊敬的先生/女士</p>
    </div>
    <div class="content2">
      <p class="indent line_h l_spacing justify">
        我谨代表<span class="font_bold"> 安移通网络 (ARUBA) </span>诚挚地邀请您参加定于2019年8月12日至15日在<span class="font_bold">新疆伊犁</span>举办的ARUBA 2019中国高校第二届信息技术高峰论坛。
      </p>
      <p
        class="indent line_h l_spacing justify"
      >数字化颠覆已经是常态。移动网络，物联网IoT，云服务，软件定义的网络，区块链技术是这个新时代的催化剂。高校传统网络设计无法满足当今移动-IoT-云服务所需的高速网络性能、监控、带宽、安全和灵活配置的要求，位于网络中的学生和老师关心的是随时随地使用任意设备不受限制的安全访问，不能容忍停机和延迟。 对于高校的网络架构师和网络管理人员，需要消除无线和有线的划分，采纳自动化、智能化和主动安全防护技术，建立一个自适应、高速安全稳定、易于管理的校园网络。</p>
      <p
        class="indent line_h l_spacing justify"
      >为了迎接这一挑战，ARUBA特别为中国60家顶尖的大学信息中心主任设计了此次高峰论坛。本次论坛的主题是讨论未来三年中国高校网络技术和应用的发展。我们将为您带来国际最新的网络技术前沿趋势、Aruba新一代移动物联网解决方案和实施路线图，您还能聆听国内同行在网络自动化，大数据，信息安全等网络建设成功案例，希望能够为您在未来校园网络建设的规划提供前瞻性的思考和助力。</p>
      <p class="indent line_h l_spacing justify">期待您的光临和指导。</p>
    </div>
    <van-row class="hfont3">
      <van-col span="15">&nbsp;</van-col>
      <van-col span="9">
        <p>谢建国</p>
        <p>ARUBA中国区总裁</p>
        <p>2019年6月20日</p>
      </van-col>
    </van-row>
    <div class="btnP">
      <!-- <van-button @click="signup" class="btn" round>点击报名</van-button> -->
      <!-- <van-button @click="signup" class="btn" round>{{value.btnName}}</van-button> -->
      <van-button @click="signup" class="btn1" round>立即报名</van-button>
      <div class="space">&nbsp;</div>
      <!-- <van-button v-show="ifBtnShow" @click="goMeeting()" class="btn" round>查看日程</van-button> -->
      <!-- <van-button @click="goMeeting()" class="btn2" round>查看日程</van-button> -->
      <span @click="goMeeting()" class="btn2" round>查看日程</span>
      <div class="space">&nbsp;</div>
      <div class="space">&nbsp;</div>
      <div class="space">&nbsp;</div>
      <div class="space">&nbsp;</div>

    </div>
    <p>{{temp}}</p>
  </div>
</template> 

<script>
import { getRegister } from "@/api";

export default {
  name: "Invitation",
  data() {
    return {
      value: {
        btnName: "立即报名",
        url: ""
      },
      temp: null,
      ifBtnShow: false
    };
  },
  mounted() {
    let vm = this;
    vm.$jquery.ajax({
      type: "GET",
      url:
        "https://icampaign.com.cn/customers/aruba/app/index.php?i=1&c=entry&p=activity&do=shop&api=true&m=ewei_shop", //访问的链接
      // dataType: "jsonp", //数据格式设置为jsonp
      // jsonp: "callback", //Jquery生成验证参数的名称
      success: function(data) {
        data = JSON.parse(data);
        vm.value.btnName = data.result.content;
        vm.value.url = data.result.url;
      },
      error: function(e) {
        // alert("error");
        console.log("error: ");
        console.log(e);
        var data = {
          status: 200,
          result: {
            url:
              "https://icampaign.com.cn/customers/aruba/app/index.php?i=1&c=home&a=page&page=register",
            content: "立即报名"
          }
        };
        vm.value.btnName = data.result.content;
        vm.value.url = data.result.url;
        vm.ifBtnShow = true; // 测试：报错显示查看日程
      }
    });
  },
  methods: {
    goMeeting() {
      let vm = this;
      vm.$router.push({ name: "Meeting" });
    },
    signup() {
      let vm = this;
      vm.$router.push({ name: "Register" });

    }
  }
};
</script>


<style scoped>
.Invitation .head {
  background-image: url("../../assets/images2/invitationhead.png");
  background-size: 100% 100%;
  height: 22vh;
  /* height: 22vmax; */
  width: 100vw;
  text-align: center;
  color: #ffffff;
  margin-top: -2.8vh;
}
.Invitation .hfont1 {
  font-size: 2.4vh;
  padding-top: 7vh;
  /* padding-bottom: 1vh; */
  padding-bottom: 1vmin;
  font-weight: bold;
}
.Invitation .hfont2 {
  font-size: 2.2vh;
  /* margin: 0.5vh 0 1vh 0; */
  margin: 0.5vmin 0 1vmin 0;
}
.Invitation .hfont3 {
  font-size: 2.2vh;
}
.Invitation .hfont3 p {
  margin: 0.3vh 0;
}
.Invitation .content1 {
  font-size: 2.7vh;
}
.Invitation .content1 .c1 {
  margin-left: 3vw;
}
.Invitation .content2 {
  font-size: 2.2vh;
  padding: 0 7vw;
}
.Invitation .btnP {
  text-align: center;
}
.Invitation .btnP .btn1 {
  background-color: #f58320;
  color: #ffffff;
  font-size: 2.2vh;
  width: 40vw;
  margin-top: 5vh;
  /* margin-bottom: 5vh; */
}
.Invitation .btnP .btn2 {
  /* background-color: rgb(243, 206, 172); */
  /* color: #ffffff; */
  color: #f58320;
  font-size: 2.2vh;
  width: 40vw;
  /* margin-top: 5vh; */
  margin-bottom: 5vh;
  text-decoration: underline;
}

/* 字体加粗 */
.Invitation .font_bold {
  font-weight: bold;
}
/* 首行缩进 */
.Invitation .indent {
  text-indent: 7vw;
}
/* 字间距 */
.Invitation .l_spacing {
  letter-spacing: 0.15vw;
}
/* 行间距 */
.Invitation .line_h {
  line-height: 4vh;
}
/* 段落两端对齐 */
.Invitation .justify {
  text-align: justify;
  text-justify: inter-ideograph; /*IE*/
}
.Invitation .space {
  height: 2.5vh;
}

/* 特殊处理 IPhoneX 太长问题 */
/* @media screen and (max-device-aspect-ratio: 812/375) { */
@media screen and (max-device-aspect-ratio: 812/400) {
  .Invitation .head {
    height: 24vh;
  }
}
</style>
