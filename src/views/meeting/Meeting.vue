<template>
  <div class="Meeting">
    <vue-headful title="2019中国金融行业技术论坛"></vue-headful>
    <div class="main" :style="bgm">
      <div class="bg">
        <div class="top_logo">
          <img src="@/assets/images2/logo3.png" />
        </div>
        <div class="title">会议安排</div>
        <div class="content">
          <van-tabs>
            <van-tab class="tabs" v-for="(item,index) in tabs" :title="item.date" :key="index">
              <div class="date" @click="changeClass(index,item)"></div>
              <ul class="date_ul" v-if="item.isShow">
                <li class="date_ul_li">
                  <div class="schedule_text" v-for="(item,index) in item.body" :key="index">
                    <span class="schedule_time"></span>
                    <ul class="schedule_time_ul" v-if="item.title != ''">
                      <div class="schedule_detail_time">{{item.time}}</div>
                      <div class="schedule_detail">
                        <li>{{item.title}}</li>
                        <li class="details">{{item.speechmaker}}</li>
                        <li>{{item.job}}</li>
                        <li>{{item.others}}</li>
                      </div>
                    </ul>
                    <ul class="schedule_time_ul" v-if="item.title == ''">
                      <div class="schedule_detail2">
                        <div></div>
                      </div>
                    </ul>
                  </div>
                </li>
              </ul>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Meeting",
  mounted() {

  },
  data() {
    return {
      activity_id: 1,
      radio: "1",
      bgm: {
        backgroundImage:
          "url(" + require("@/assets/images2/arubabg.png") + ") ",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      tabs: [
        {
          date: "8月12日",
          isShow: true,

          body: [
            {
              time: "全天",
              title: "会议注册，入住酒店",
              speechmaker: "会议酒店：伊宁伊犁酒店",
              job: "",
              others: ""
            }
          ]
        },
        {
          date: "8月13日",
          isShow: true,
          body: [
            {
              time: "9:00-9:15",
              title: "欢迎辞",
              speechmaker: "演讲人：谢建国",
              job: "ARUBA中国区总裁",
              others: ""
            },
            {
              time: "9:15-9:45",
              title: "ARUBA下一代移动校园网解决方案",
              speechmaker: "演讲人：俞世丹",
              job: "ARUBA中国区技术总监",
              others: ""
            },
            {
              time: "9:45-10:15",
              title: "物联网应用案例分享",
              speechmaker: "演讲人：王振化",
              job: "北邮",
              others: ""
            },
            {
              time: "10:15-10:30",
              title: "茶歇",
              speechmaker: "",
              job: "",
              others: ""
            },
            {
              time: "10:30-11:00",
              title: "ARUBA校园物联网安全解决方案",
              speechmaker: "演讲人：刘宁",
              job: "ARUBA北区技术总监",
              others: ""
            },
            {
              time: "11:00-11:30",
              title: "信息安全应用案例分享",
              speechmaker: "演讲人：马云龙",
              job: "清华",
              others: ""
            },
            {
              time: "13:30-14:10",
              title: "ARUBA校园有线网络解决方案",
              speechmaker: "演讲人：田伟",
              job: "ARUBA东区技术总监",
              others: ""
            },
            {
              time: "14:10-14:45",
              title: "高校有线网解决方案案例分享",
              speechmaker: "演讲人：段运生",
              job: "安徽大学",
              others: ""
            },
            {
              time: "14:45-15:00",
              title: "茶歇",
              speechmaker: "",
              job: "",
              others: ""
            },
            {
              time: "15:00-15:30",
              title: "如何全面提升校园网用户体验",
              speechmaker: "演讲人：Siok Been",
              job: "ARUBA亚太区高级产品经理",
              others: ""
            },
            {
              time: "15:30-16:00",
              title: "大数据平台案例分享",
              speechmaker: "演讲人：冯琪",
              job: "华东师范大学",
              others: ""
            }
          ]
        },
        {
          date: "8月14日",
          isShow: true,

          body: [
            {
              time: "上午",
              title: "技术专题讨论",
              speechmaker: "",
              job: ""
            },
            {
              time: "下午",
              title: "技术专题讨论",
              speechmaker: "",
              job: ""
            }
          ]
        },
        {
          date: "8月15日",
          isShow: true,
          body: [
            {
              time: "全天",
              title: "离开酒店",
              speechmaker: "",
              job: ""
            }
          ]
        }
      ]
    };
  },
  methods: {
    changeClass(indexTemp, itemTemp) {
      let vm = this;
      vm.tabs.forEach(function (value, index, array) {
        if (indexTemp === index) {
          //   value.isShow = !itemTemp.isShow;
        }
      });
    }
  }
};
</script>

<style>
.Meeting .main {
  min-height: 100vh;
  height: 100%;
  padding-bottom: 5vh;
  width: 100%;
  overflow: hidden;
}
.Meeting .top_logo {
  padding: 3vh 0px;
  text-align: center;
}
.Meeting .top_logo img {
  width: 100px;
  height: 50px;
}
.Meeting .title {
  position: relative;
  text-align: center;
  color: #333333;
  font-size: 5vw;
  font-weight: bold;
}
.Meeting .content {
  /* margin-left: -1.6vh; */
  position: relative;
  top: 2.5vh;
  color: #333333;
}
.Meeting .date_right {
  width: 3vw;
  height: 4vh;
  display: block;
  float: right;
  line-height: 4vh;
  margin: 1vh 5vw 0vh 0vw;
}
.Meeting .date {
  height: 3vw;
  line-height: 3vw;
  overflow: hidden;
  margin-top: 1vh;
}
.Meeting .date_ul {
  /* padding-top: 1vh; */
  /* background: #f9f9f9; */
}
.Meeting .date_ul .date_ul_li {
  padding-top: 2vw;
}
.Meeting .schedule_text .schedule_time_ul {
  border-left: 1px solid #f58320;
  margin-left: 5vw;
  padding-left: 5vw;
  padding-bottom: 2.5vh;
  width: 100%;
}
.Meeting .schedule_detail_time {
  width: 25vw;
  display: inline-block;
  vertical-align: top;
  /* margin-top: -0.6vw; */
  font-weight: bold;
  font-size: 4vw;
  height: 3.5vw;
  line-height: 3.5vw;
}
.Meeting .schedule_text .schedule_time_ul .schedule_detail {
  display: inline-block;
  /* margin-top: -0.5vh; */
}
.Meeting .schedule_text .schedule_time_ul .schedule_detail2 {
  padding: 1vh 3vw 1vh 1vw;
  height: 7vh;
}

.Meeting .schedule_text .schedule_time_ul .schedule_detail .details {
  margin-top: 1.5vw;
}

.Meeting .schedule_detail div {
  border: 1px solid #f0f0f0;
  width: 58vw;
  background: #fff;
  padding: 2vw;
  border-radius: 4pt;
  box-shadow: 0 0 2vh #ccc;
}

.Meeting .schedule_detail2 div {
  width: 58vw;
}

.Meeting .schedule_time {
  display: inline-block;
  position: absolute;
  top: 0px;
  left: 3.4vw;
  width: 11px;
  height: 11px;
  background: #fff;
  border: 1px solid #f58320;
  border-radius: 11px;
}
.Meeting .schedule_text {
  display: inline-block;
  position: relative;
}
.Meeting .schedule_detail li {
  line-height: 3.5vh;
}
.Meeting .schedule_detail li:nth-child(1) {
  color: #333;
  font-weight: bold;
  font-size: 4vw;
  height: 3.5vw;
  line-height: 3.5vw;
}
.Meeting .schedule_detail li:nth-child(2) {
  color: #818181;
  font-size: 3.5vw;
}
.Meeting .schedule_detail li:nth-child(3) {
  color: #818181;
  font-size: 3.5vw;
}
.Meeting .schedule_detail li:nth-child(4) {
  color: #818181;
  font-size: 3.5vw;
}

.Metting .van-ellipsis {
  /* height: 2.4vh !important; */
}
.Meeting .van-tab {
  color: #333 !important;
  font-size: 4vw;
}
.Metting .van-tab--active {
  color: #f58320 !important;
  font-size: 2.4vh;
}
.Meeting .van-tabs__line {
  background-color: #f58320 !important;
}
@media only screen and (max-width: 320px) {
  .Meeting .schedule_text .schedule_time_ul {
    padding-top: 0.5vh;
  }
  .Meeting .schedule_time {
    left: 3.2vw;
  }
}
@media only screen and (min-width: 414px) {
  .Meeting .schedule_text .schedule_time_ul {
    padding-top: 0;
  }
  .Meeting .schedule_detail_time {
    margin-top: -0.3vh;
  }
  .Meeting .schedule_text .schedule_time_ul .schedule_detail {
    display: inline-block;
    margin-top: -0.4vh;
  }
  .Meeting .schedule_time {
    left: 3.4vw;
  }
  .Meeting .schedule_detail_time {
    height: 5vw;
    line-height: 5vw;
  }
  /* .Meeting .schedule_detail li:nth-child(1) {
    font-size: 3.5vw;
    height: 5vw;
    line-height: 5vw;
  }
  .Meeting .schedule_detail_time {
    font-size: 3.5vw;
  }
  .Meeting .schedule_detail li:nth-child(3),
  .Meeting .schedule_detail li:nth-child(2) {
    font-size: 3vw;
  } */
}
</style>
