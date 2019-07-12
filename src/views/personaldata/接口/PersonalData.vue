<template>
  <div class="personaldata">
    <vue-headful title="个人资料"></vue-headful>
    <div class="personaldata_content" :style="bgm">
      <img
        @click="myclick()"
        class="personalsetting"
        src="../../assets/images2/personalsetting.png"
        alt
      />
      <div class="top_bgm" :style="top_bgm"></div>
      <div class="personal_container">
        <div class="personal_detail">
          <span class="personal_avatar">
            <!-- <img src="@/assets/images2/card0.png" /> -->
            <img :src="form.avatar" />
          </span>
          <span class="personal_info">
            <ul>
              <li>
                <span class="person_name">{{form.realname}}</span>
                <span class="person_job">{{form.occupation}}</span>
              </li>
              <li>{{form.mobile}}</li>
              <li>{{form.email}}</li>
            </ul>
          </span>
          <span class="right_logo">
            <img src="@/assets/images2/logo4.png" />
          </span>
          <div class="person_adress">
            <i>
              <img src="@/assets/images2/dw1.png" />
            </i>
            <span>{{form.nationality}}{{form.resideprovince}}{{form.residecity}}{{form.residedist}}{{form.address}}</span>
          </div>
        </div>
      </div>

      <!-- 我的文章开始 -->
      <div class="my_article">
        <div class="article_nav">
          <span class="article_top">我的文章</span>
          <span class="underline"></span>
        </div>
        <div class="article_list">
          <ul class="article_list_ul">
            <li
              class="article_list_ul_li"
              v-for="(articleItem,index) in articleList"
              :key="index + 'a' "
            >
              <!-- <a href> -->
              <span>
                <div class="left_img">
                  <img @click="goArticle(articleItem.id)" :src="ImgPrefix+articleItem.thumb" />
                </div>
                <div class="right_article">
                  <ul class="right_article_ul">
                    <li
                      @click="goArticle(articleItem.id)"
                      class="article_title"
                    >{{articleItem.title}}</li>
                    <li class="article_date">
                      <span>{{articleItem.create_time}}</span>
                      <span @click="mydata(articleItem.id)">我的数据</span>
                    </li>
                  </ul>
                </div>
              </span>

              <!-- </a> -->
            </li>
          </ul>
        </div>
      </div>
      <!-- 我的文章结束 -->
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Dialog } from "vant";
Vue.use(Dialog);

export default {
  name: "PersonalData",
  methods: {
    mydata(id) {
      let vm = this;
      window.location.href =
        "https://icampaign.com.cn/customers/aruba/app/index.php?i=1&c=entry&do=shop&p=testapi&id=" +
        id +
        "&origin=" +
        vm.form.uid +
        "&fid=" +
        vm.form.uid +
        "&m=ewei_shop";
    },
    myclick() {
      window.location.href =
        "https://icampaign.com.cn/customers/aruba/app/index.php?i=1&c=wechat&a=cardReg&do=enterpeiseInformation&id=userCenter";
    },
    goArticle(id) {
      let vm = this;
      window.location.href =
        "https://icampaign.com.cn/customers/aruba/app/index.php?i=1&c=entry&do=shop&p=detail&id=" +
        id +
        "&origin=" +
        vm.form.uid +
        "&fid=" +
        vm.form.uid +
        "&m=ewei_shop";
    }
  },
  mounted() {
    let vm = this;
    vm.$jquery.ajax({
      type: "GET",
      url:
        "https://icampaign.com.cn/customers/aruba/app/index.php?i=1&c=wechat&a=cardReg&do=userCenter&page=1", //访问的链接
      success: function(data) {
        data = JSON.parse(data);

        vm.form.uid = data.info.uid;
        vm.form.realname = data.info.realname;
        vm.form.occupation = data.info.occupation;
        vm.form.mobile = data.info.mobile;
        vm.form.email = data.info.email;
        vm.form.nationality = data.info.nationality;
        vm.form.resideprovince = data.info.resideprovince;
        vm.form.residecity = data.info.residecity;
        vm.form.residedist = data.info.residedist;
        vm.form.address = data.info.address;
        vm.form.avatar = data.info.avatar;

        if (data.info.wechat == null || data.info.wechat == "") {
          Dialog.alert({
            message: "由于您当前还未注册，将为您跳转到注册页面！"
          }).then(() => {
            // on close
            window.location.href =
              "https://icampaign.com.cn/customers/aruba/app/index.php?i=1&c=wechat&a=cardReg&do=enterpeiseInformation&id=userCenter";
          });
          return;
        }

        let length = data.list.length;
        let i;
        for (i = 0; i < length; i++) {
          vm.articleList.push(data.list[i]);
        }
      },
      error: function(e) {
        console.log("error: ");
        console.log(e);
        //// 个人数据
        var data = {
          info: {
            uid: "1",
            realname: "孙文杰",
            occupation: "PHP",
            mobile: "17605791387",
            email: "vincent.sun@gominemail.cn",
            nationality: "中国",
            resideprovince: "贵州省",
            residecity: "贵阳市",
            residedist: "金阳开发区",
            address: "观山湖",
            avatar: require("@/assets/images2/card0.png")
          },
          list: [
            {
              title: "我是测试",
              thumb: "images/1/2019/07/AhGP2ZH4H5z1J23grA2r12aj4aH2jh.jpg",
              create_time: "2019-07-07 20:14:33",
              id: "128"
            },
            {
              title: "我是测试",
              thumb: "images/1/2019/07/AhGP2ZH4H5z1J23grA2r12aj4aH2jh.jpg",
              create_time: "2019-07-07 20:14:33",
              id: "128"
            },
            {
              title: "我是测试",
              thumb: "images/1/2019/07/AhGP2ZH4H5z1J23grA2r12aj4aH2jh.jpg",
              create_time: "2019-07-07 20:14:33",
              id: "128"
            }
          ]
        };
        vm.form.uid = data.info.uid;
        vm.form.realname = data.info.realname;
        vm.form.occupation = data.info.occupation;
        vm.form.mobile = data.info.mobile;
        vm.form.email = data.info.email;
        vm.form.nationality = data.info.nationality;
        vm.form.resideprovince = data.info.resideprovince;
        vm.form.residecity = data.info.residecity;
        vm.form.residedist = data.info.residedist;
        vm.form.address = data.info.address;
        vm.form.avatar = data.info.avatar;

        //// 文章列表
        let length2 = data.list.length;
        let i2;
        for (i2 = 0; i2 < length2; i2++) {
          vm.articleList.push(data.list[i2]);
        }
      }
    });
  },
  data() {
    return {
      ImgPrefix: "https://icampaign.com.cn/customers/aruba/attachment/",

      form: {
        uid: "1",
        realname: "",
        occupation: "",
        mobile: "",
        email: "",
        nationality: "",
        resideprovince: "",
        residecity: "",
        residedist: "",
        address: "",
        avatar:""
      },
      bgm: {
        backgroundImage:
          "url(" + require("@/assets/images2/arubabg.png") + ") ",
        backgroundRepeat: "repeat-y"
      },
      top_bgm: {
        backgroundImage:
          "url(" + require("@/assets/images2/headbg1.png") + ") ",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      articleList: []
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
.personaldata_content .personalsetting {
  height: 5vh;
  width: 6vh;
  display: inline-block;
  position: absolute;
  right: 4vw;
  top: 1.5vh;
}
.personaldata_content .top_bgm {
  height: 20vh;
  width: 100%;
}
.personal_container {
  margin-top: -12vh;
  overflow: hidden;
  padding: 0 2vw 2vh 2vw;
}
.personal_detail {
  padding: 1.5vh 1vw;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0px 7px 5px #e2e0e0;
}
.personal_detail .personal_avatar,
.personal_detail .personal_info {
  display: inline-block;
  height: 100%;
}
.personal_detail .personal_avatar {
  overflow: hidden;
}
.personal_detail .personal_avatar img {
  width: 75px;
  height: 75px;
  border-radius: 50%;
}
.personal_detail .personal_info ul li {
  height: 25px;
  line-height: 25px;
}
.personal_detail .personal_avatar {
  width: 25%;
  vertical-align: top;
  margin-right: 5px;
}
.personal_detail .personal_info {
  width: 40%;
  margin-right: 5px;
}
.personal_detail .right_logo {
  width: 25%;
  vertical-align: top;
  float: right;
}
.personal_detail .right_logo img {
  width: 100%;
}
.personal_detail .person_name {
  padding: 3px 0;
  font-size: 16px;
}
.personal_detail .person_job {
  margin-left: 5px;
  background: #e67816;
  color: #fff;
  padding: 2px 10px;
  border-radius: 13px;
  font-size: 10px;
  vertical-align: top;
}
.personal_detail .person_adress {
  margin-top: 1.5vh;
}
.personal_detail .person_adress i {
  vertical-align: sub;
  margin-right: 2vw;
}
.article_nav {
  margin: 1vh 0;
}
.personaldata_content .my_article {
  padding: 0 2vw;
}
.personaldata_content .my_article .article_top {
  display: block;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}
.my_article .underline {
  display: block;
  width: 37px;
  margin: 0 auto;
  border-bottom: 2px solid #e67816;
}
.my_article .article_list .article_list_ul .article_list_ul_li {
  padding: 1vh 0;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 7px 5px #e2e0e0;
  margin-bottom: 2vh;
  border-radius: 5px;
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