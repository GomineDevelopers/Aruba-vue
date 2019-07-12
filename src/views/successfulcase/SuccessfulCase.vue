<template>
  <div class="personaldata">
    <vue-headful title="成功案例"></vue-headful>
    <div class="personaldata_content" :style="bgm">
      <div class="top_logo">
        <img src="@/assets/images2/logo3.png" />
      </div>
      <!-- 成功案例开始 -->
      <div class="my_article">
        <div class="article_list">
          <ul class="article_list_ul">
            <li
              class="article_list_ul_li"
              v-for="(articleItem,index) in articleList"
              :key="index + 'a' "
            >
              <!-- <a href> -->
              <div @click="goHTML(articleItem.url)">
                <div class="left_img">
                  <img :src="articleItem.img" />
                </div>
                <div class="right_article">
                  <ul class="right_article_ul">
                    <li class="article_title">{{articleItem.title}}</li>
                    <li class="article_date">
                      <span>{{articleItem.date}}</span>
                      <span>{{articleItem.classify}}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- </a> -->
            </li>
          </ul>
        </div>
      </div>
      <!-- 成功案例结束 -->
    </div>
  </div>
</template>
<script>
export default {
  name: "SuccessfulCase",
  methods: {
    goHTML(url) {
      if (url != "") {
        window.location.href = url;
      }
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
      },
      articleList: [
        {
          title: "北京航空航天大学",
          img: require("@/assets/images2/success1.jpg"),
          date: "2018-11-11",
          classify: "成功案例",
          url:
            "http://aruba.yangben.io/#!/education/case/9e20972056ab44c4b7eab4b6133fbb15"
        },
        {
          title: "上海交通大学",
          img: require("@/assets/images2/success2.jpg"),
          date: "2018-11-11",
          classify: "成功案例",
          url:
            "http://aruba.yangben.io/#!/education/case/37f21a82a905476aa9a205359bad20d1"
        },
        {
          title: "Aruba助力厦门大学打造全球一流的无线教育网络",
          img: require("@/assets/images2/success3.jpg"),
          date: "2018-11-11",
          classify: "成功案例",
          url:
            "https://www.arubanetworks.com/zh-hans/resources/xiamen-university/"
        }
      ]
    };
  }
};
</script>
<style scoped>
.personaldata_content {
  height: 100%;
  width: 100%;
  min-height: 100vh;
}
.personal_container {
  margin-top: -12vh;
  overflow: hidden;
  padding: 0 2vw 2vh 2vw;
}
.personaldata_content .top_logo {
  padding: 3vh 0px;
  text-align: center;
}
.personaldata_content .top_logo img {
  width: 100px;
  height: 50px;
}
.personaldata_content .my_article {
  padding: 0 2vw;
}
.my_article .article_list .article_list_ul .article_list_ul_li {
  padding: 1vh 0;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 7px 5px #e2e0e0;
  margin-bottom: 2vh;
  border-radius: 5px;
  border: 1px solid #f9f9f9;
}
.my_article .article_list ul li .left_img {
  float: left;
  margin-right: 2vw;
  margin-left: 2vw;
}
.my_article .article_list ul li .right_article {
  width: 68%;
  float: left;
}
.my_article .article_list ul li .left_img img {
  width: 100%;
  height: 100%;
}
.article_title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.right_article_ul li {
  color: #333;
  line-height: 20px;
  margin-top: 1.5vh;
}
.article_date span:nth-child(1) {
  color: #989898;
  display: inline-block;
  width: 50%;
}
.article_date span:nth-child(2) {
  width: 50%;
  color: #ffa000;
  text-align: right;
  display: inline-block;
}
@media screen and (min-width: 320px) {
  .my_article .article_list ul li .left_img {
    width: 25%;
    height: 12vh;
    margin-top: 9px;
  }
}
@media screen and (min-width: 375px) {
  .my_article .article_list ul li .left_img {
    width: 25%;
    height: 11vh;
    margin-top: 8px;
  }
}
</style>