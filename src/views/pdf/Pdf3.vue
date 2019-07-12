<template>
  <div>
    <!-- <pdf src="../../static/test.pdf"></pdf> -->
    <!-- <pdf src="https://www.arubanetworks.com/assets/so/SO_HigherEducationArubaOS8.pdf"></pdf> -->
    <vueshowpdf
      @closepdf="closepdf"
      v-model="isshowpdf"
      :pdfurl="pdfurls"
      @pdferr="pdferr"
      :maxscale="4"
      :minscale="0.6"
      :scale="1.1"
    ></vueshowpdf>
    <!-- <span class="compare" @click="sigTab">显著性检验对照表</span> -->
  </div>
</template>

<script>
// import pdf from "vue-pdf";
import vueshowpdf from "vueshowpdf";
export default {
  name: "Pdf",
  components: {
    // pdf
  },
  data() {
    return {
      //pdfurls:'//cdn.mozilla.net/pdfjs/tracemonkey.pdf',
      // pdfurls: "http://localhost:3000/data/significant.pdf",
      pdfurls:
        "https://www.arubanetworks.com/assets/so/SO_Education.pdf",
      isshowpdf: false
    };
  },
  beforeCreate() {},
  created() {},

  mounted() {
    let vm = this;
    setTimeout(() => {
      vm.isshowpdf = true;
      // this.isshowpdf = true;
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
  },
  components: {
    vueshowpdf
  }
};
</script>