<template>
  <div>
    <compdf :isshowpdf="isshowpdf" :pdfurls="pdfurls" :count="count"></compdf>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import vueshowpdf from "vueshowpdf";
import com_pdf from "./components/com_pdf";

export default {
  name: "PdfSetting",
  computed: {
    ...mapGetters(["refreshCount"])
  },
  components: {
    vueshowpdf,
    compdf: com_pdf
  },
  data() {
    return {
      pdfurls: "",
      isshowpdf: false,
      count: 1
    };
  },
  created() {
  },
  mounted() {
    let vm = this;
    vm.pdfurls = this.$route.query.theurl;
    // 延时开启
    setTimeout(() => {
      vm.isshowpdf = true;
    }, 50);

  },
  inject: ["reload"], //注入
  methods: {
    countChange() {
      this.count = 0;
    },
    myLoad() {
      this.$router.go(0); 
    },
    partialRefresh() {
      this.reload(); 
    },
    closepdf() {
      this.isshowpdf = false;
    },
    pdferr(errurl) {
      console.log(errurl);
    },
    TEST() {
      this.$router.go(0);
    },
    TEST2() {
      location.reload();
    }
  }
};
</script>


<style>
</style>
