<template>
  <div class="GreatVideo">
    <div class="bg">
      <img class="logo" src="../../assets/images2/logo4.png" alt />
      <!-- <video class="video" src="https://icampaign.com.cn/customers/aruba/citrix-190306.mp4"></video> -->
      <!-- <video class="video" src="https://icampaign.com.cn/customers/aruba/citrix-190306.mp4" controls="controls"></video> -->
      <!-- <video class="video" src="https://www.runoob.com/try/demo_source/movie.mp4" controls="controls"></video> -->
      <!-- <video class="video" src="../../assets/citrix-190306 [AVC 低质量和大小].mp4" controls="controls"></video> -->
      <!-- <video class="video" src="../../assets/citrix-190306 [AVC 中质量和大小].mp4" controls="controls"></video> -->
      <!-- <video class="video" src="../../assets/citrix-190306 [AVC 高质量和大小].mp4" controls="controls"></video> -->

      <div class="content" v-for="(item,index) in data" :key="index">
        <div class="playbg" :style="{backgroundImage: item.bg}">
          <div class="img_bg" @click="goVideo(item.url)">
            <img class="play" src="../../assets/images2/play.png" alt />
          </div>
          <div class="font1_bg">
            <div class="font1">
              <van-row>
                <van-col span="18">
                  <span class="content">{{item.content}}</span>
                </van-col>
                <van-col span="6">
                  <span class="date">{{item.date}}</span>
                </van-col>
              </van-row>
            </div>
          </div>
          <!-- <div class="bottom"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GreatVideo",
  data() {
    return {
      data: [
        {
          content: "教育行业问题与挑战",
          date: "2019-02-21",
          url:
            "https://static-cdn.yangbentong.com/5a740e81457fdf6416326ecb.mp4",
          bg: "url(" + require("../../assets/images2/videopic1.jpg") + ") "
        },
        {
          content: "Aruba K12解决方案视频",
          date: "2019-02-25",
          url:
            "https://media.arubanetworks.com/Products and Solutions/PULSE_PrimaryEd.mp4",
          bg: "url(" + require("../../assets/images2/videopic2.jpg") + ") ",

          
        },
        {
          content: " PCSSD 如何马上省下了 80 万美元",
          date: "2019-03-02",
          url:
            "https://media.arubanetworks.com/case-studies/Pulaski_County_Special_School_District.mp4",
          bg:  "url(" + require("../../assets/images2/videopic3.jpg") + ") "
        }
      ]
    };
  },
  methods: {
    goVideo(url) {
      window.location.href = url;
    }
  }
};
</script>

<style scoped>
.GreatVideo .bg {
  background-image: url("../../assets/images2/arubabg.png");
  background-size: 100% 100%;
  min-height: 100vh;
  height:100%;
  /* width: 100vw; */
  width: 96vw;
  text-align: center;
  color: #333333;
  /* padding: 10vh 5vw 15vh 5vw; */
  padding-top: 5vh;
  padding: 0 2vw 4vh 2vw;
}

.GreatVideo .video {
  /* height: 200px; */
  /* width: 200px; */
  height: 100%;
  width: 100%;
}

.GreatVideo .logo {
  /* height: 12vh;
  width: 24vh; */
  width: 100px;
  height: 50px;
  margin: 3vh 0;
}
.GreatVideo .content {
  /* background-color: #ffffff; */
  text-align: left;
  margin-top: 3vh;
}
.GreatVideo .playbg {
  /* background-image: url("../../assets/images2/playbg1.png"); */
  background-size: 100% 100%;
  height: 35vh;
  width: 96vw;
  text-align: center;
  color: #ffffff;
  margin-top: 3vh;
}
.GreatVideo .img_bg {
  background: rgba(0, 0, 0, 0.3);
  height: 30vh;
  line-height: 30vh;
}
.GreatVideo .img_bg .play {
  height: 8vh;
  width: 8vh;
  margin-top: 14vh;
}
.GreatVideo .font1_bg {
  background: rgba(0, 0, 0, 0.5);
  height: 5vh;
  line-height: 5vh;
  text-align: left;
  padding-left: 3vh;
}
.GreatVideo .font1_bg .font1 .content {
  color: #ffffff;
  font-size: 2.2vh;
  margin: 0;
}
.GreatVideo .font1_bg .font1 .date {
  color: #cecece;
  font-size: 1.8vh;
  /* margin-left: 22vh; */
  /* margin-left: 50px; */
}
.GreatVideo .bottom {
  height: 10vh;
}

/* @media screen and (max-device-aspect-ratio: 812/400) {
  #date {
    margin-left: 12vh;
  }
} */
</style>
<style>
</style>
