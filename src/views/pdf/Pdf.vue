<template>
  <div>
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
export default {
  name: "Pdf",
  components: {
    vueshowpdf
  },
  data() {
    return {
      pdfurls:
        "https://www.arubanetworks.com/assets/so/SO_HigherEducationArubaOS8.pdf",
      isshowpdf: false
    };
  },
  beforeCreate() {},
  created() {},

  mounted() {
    let vm = this;
    setTimeout(() => {
      vm.isshowpdf = true;
    }, 500);
  },
  methods: {
    sigTab() {
      this.isshowpdf = true;
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