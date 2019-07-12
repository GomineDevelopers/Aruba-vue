<template>
  <div class="hello">
    <van-button
      :style="{color:'green'}"
      type="info"
      size="small"
      @click="RouterPush('HelloWorld')"
    >测试页面</van-button>
    <van-button
      :style="{color:'green'}"
      type="info"
      size="small"
      @click="RouterPush('Meeting')"
    >会议日程</van-button>
    <van-button
      :style="{color:'green'}"
      type="info"
      size="small"
      @click="RouterPush('PersonalCenter')"
    >个人中心</van-button>
    <van-button
      :style="{color:'green'}"
      type="info"
      size="small"
      @click="RouterPush('PersonalData')"
    >个人资料</van-button>
    <van-button
      :style="{color:'green'}"
      type="info"
      size="small"
      @click="RouterPush('Solution')"
    >解决方案</van-button>
    <van-button
      :style="{color:'green'}"
      type="info"
      size="small"
      @click="RouterPush('Application1')"
    >应用场景-1</van-button>
    <van-button
      :style="{color:'green'}"
      type="info"
      size="small"
      @click="RouterPush('ProductCatalogue')"
    >产品彩页</van-button>
    <van-button :style="{color:'green'}" type="info" size="small" @click="RouterPush('Register')">注册</van-button>
    <van-button
      :style="{color:'green'}"
      type="info"
      size="small"
      @click="RouterPush('Invitation')"
    >邀请函</van-button>
    <van-button
      :style="{color:'green'}"
      type="info"
      size="small"
      @click="RouterPush('SuccessfulCase')"
    >成功案例</van-button>
    <van-button
      :style="{color:'green'}"
      type="info"
      size="small"
      @click="RouterPush('GreatVideo')"
    >精彩视频</van-button>
    <van-button :style="{color:'green'}" type="info" size="small" @click="TEST()">测试按钮</van-button>
    <a href="https://icampaign.com.cn/customers/aruba/attachment/resources/ProductCatalogue/networkmanagement/ArubaCentral综合云管理平台.pdf">pdf-gomine服务器</a>
    <a href="https://www.arubanetworks.com/assets/so/SO_Education.pdf">pdf-aruba原服务器</a>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
    RouterPush(routername) {
      let vm = this;
      vm.$router.push({ name: routername });
    },
    TEST() {
      let vm = this;
      let tempURL =
        "https://www.arubanetworks.com/assets/so/SO_HigherEducationArubaOS8.pdf";
      vm.$router.push({
        name: "PdfSetting",
        query: {
          theurl: tempURL
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
