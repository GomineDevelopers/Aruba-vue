<template>
  <div>
    <img v-show="false" @load="partialRefresh()" src="../../../assets/logo.png" alt />
    <vueshowpdf
      @closepdf="closepdf"
      v-model="isshowpdf"
      :pdfurl="pdfurls"
      @pdferr="pdferr"
      :maxscale="4"
      :minscale="0.6"
      :scale="1.1"
    ></vueshowpdf>
  </div>
</template>

<script>
import vueshowpdf from "vueshowpdf";
import { mapGetters } from "vuex";
import Vue from "vue";

Vue.component("vueshowpdf", vueshowpdf);

export default {
  name: "com_pdf",
  props: ["isshowpdf", "pdfurls", "count"],
  computed: {
    ...mapGetters(["refreshCount"])
  },
  components: {
  },
  data() {
    return {
    };
  },
  created() {
  },
  mounted() {

  },
  inject: ["reload"], //注入
  methods: {
    partialRefresh() {
      let vm = this;
      let TimeCookies = vm.$commonTools.getCookie("TimeCookies");
      if (TimeCookies == null) {
      } else if (TimeCookies == "") {
        vm.$commonTools.setCookie("TimeCookies", "test", 60);
        vm.$router.go(0);
      } else if (TimeCookies != "") {
        vm.$commonTools.delCookie("TimeCookies");
      }
    },
    closepdf() {
      this.isshowpdf = false;
    },
    pdferr(errurl) {
      console.log(errurl);
    }
  }
};
</script>


<style>
</style>
