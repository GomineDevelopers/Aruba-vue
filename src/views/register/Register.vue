<template>
  <div class="Register">
    <div class="bg">
      <span>
        <img class="logo" src="../../assets/images2/logo4.png" alt />
      </span>
      <div class="whitebg">
        <div class="content">
          <van-row class="hfont3">
            <van-col span="8">
              <span>
                <p class="font1 font_bold">用户注册</p>
              </span>
            </van-col>
            <van-col span="8">&nbsp;</van-col>
            <van-col span="8">
              <!-- <span>
                <img class="logo" src="../../assets/images2/logo4.png" alt />
              </span>-->
            </van-col>
          </van-row>
          <p class="font2 font_bold">
            姓名
            <span>
              <img class="icon1" src="../../assets/images2/name3.png" alt />
            </span>
          </p>
          <van-field class="font3" v-model="form.realname" placeholder="请输入姓名" />
          <p class="font2 font_bold">
            手机
            <span>
              <img class="icon2" src="../../assets/images2/phone3.png" alt />
            </span>
          </p>
          <van-field class="font3" v-model="form.mobile" placeholder="请输入手机号" />
          <p class="font2 font_bold">
            公司
            <span>
              <img class="icon1" src="../../assets/images2/gs3.png" alt />
            </span>
          </p>
          <van-field class="font3" v-model="form.company" placeholder="请输入公司名称" />
          <p class="font2 font_bold">
            职务
            <span>
              <img class="icon2" src="../../assets/images2/duty3.png" alt />
            </span>
          </p>
          <van-field class="font3" v-model="form.position" placeholder="请输入职务" />
          <p class="font2 font_bold">
            邮箱
            <span>
              <img class="icon3" src="../../assets/images2/email3.png" alt />
            </span>
          </p>
          <van-field class="font3" v-model="form.email" placeholder="请输入邮箱" />
          <br />
          <span v-show="!showError">请填入相应信息。</span>
          <div
            class="show_error"
            v-text="message"
            v-show="showError"
            :style=" 'background-color:' + backgroundColor +';' + 'color:' + fontColor"
          ></div>
          <div class="btnP">
            <van-button class="btn" @click="myclick()" round>注册</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      form: {
        realname: "",
        mobile: "",
        company: "",
        position: "",
        email: ""
      },
      showError: false,
      backgroundColor: "",
      fontColor: " ",
      message: " "
    };
  },
  mounted() {
    let vm = this;
    vm.$jquery.ajax({
      type: "GET",
      url:
        "https://icampaign.com.cn/customers/aruba/app/index.php?i=1&c=entry&p=activity&do=shop&api=true&op=getinfo&m=ewei_shop", //访问的链接
      // dataType: "jsonp", //数据格式设置为jsonp
      // jsonp: "callback", //Jquery生成验证参数的名称
      success: function(data) {
        data = JSON.parse(data);

        vm.form.realname = data.result.realname;
        vm.form.mobile = data.result.mobile;
        vm.form.company = data.result.company;
        vm.form.position = data.result.position;
        vm.form.email = data.result.email;
      },
      error: function(e) {
        console.log("error: ");
        console.log(e);
        var data = {
          result: {
            realname: "",
            mobile: "",
            company: "",
            position: "",
            email: ""
          }
        };
        vm.form.realname = data.result.realname;
        vm.form.mobile = data.result.mobile;
        vm.form.company = data.result.company;
        vm.form.position = data.result.position;
        vm.form.email = data.result.email;
      }
    });
  },
  methods: {
    setIsshow(message, bgColor, fontColor) {
      this.showError = true;
      this.message = message;
      this.backgroundColor = bgColor;
      this.fontColor = fontColor;
      setTimeout(() => {
        this.showError = false;
      }, 2000);
    },
    myclick() {
      let vm = this;
      if (vm.form.realname == null || vm.form.realname == "") {
        vm.setIsshow("请输入姓名！", "#fdf6ec", "#e6a23c");
        return false;
      } else if (!/^1[34578]\d{9}$/.test(vm.form.mobile)) {
        vm.setIsshow("请输入正确的手机号码！", "#fdf6ec", "#e6a23c");
        return false;
      } else if (vm.form.company == null || vm.form.company == "") {
        vm.setIsshow("请输入公司名称！", "#fdf6ec", "#e6a23c");
        return false;
      } else if (vm.form.position == null || vm.form.position == "") {
        vm.setIsshow("请输入职务名称！", "#fdf6ec", "#e6a23c");
        return false;
      } else if (vm.form.email == null || vm.form.email == "") {
        vm.setIsshow("请输入正确的邮箱地址！", "#fdf6ec", "#e6a23c");
        return false;
      } else {
        vm.$jquery.ajax({
          type: "POST",
          data: {
            realname: vm.form.realname,
            mobile: vm.form.mobile,
            company: vm.form.company,
            position: vm.form.position,
            email: vm.form.email
          },
          url:
            "https://icampaign.com.cn/customers/aruba/app/index.php?i=1&c=entry&p=activity&do=shop&api=true&op=submit&m=ewei_shop", //访问的链接
          // dataType: "jsonp", //数据格式设置为jsonp
          // jsonp: "callback", //Jquery生成验证参数的名称
          success: function(data) {
            data = JSON.parse(data);
            if (data.status == 200) {
              // vm.$router.push({ name: "Meeting" });
            } else {
              vm.setIsshow("注册出现问题，请稍后再试。", "#fdf6ec", "#e6a23c");
              // setTimeout(() => {
              // vm.$router.push({ name: "Meeting" });
              // }, 500);
            }
            vm.$router.push({ name: "Meeting" });
          },
          error: function(e) {
            vm.$router.push({ name: "Meeting" });
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.Register {
  overflow: hidden;
  height: 100vh;
}
.Register .bg {
  background-image: url("../../assets/images2/arubabg.png");
  background-size: 100% 100%;
  height: 75vh;
  width: 100vw;
  text-align: center;
  color: #333333;
  /* padding: 10vh 5vw 15vh 5vw; */
  padding: 3vh 5vw 22vh 5vw;
}
.Register .bg .whitebg {
  text-align: left;
  background-color: #ffffff;
  height: 82vh;
  width: 90vw;
  /* border: 1px solid rgba(175, 157, 157, 0.5); */
  border-radius: 20px;
  -moz-border-radius: 20px;
}
.Register .bg .whitebg .content {
  height: 76vh;
  width: 86vw;
  padding: 2vh 2vw;
}
.Register .logo {
  /* height: 12vh;
  width: 24vh; */
  width: 100px;
  height: 50px;
  margin-bottom: 3vh;
  margin-left: -9vw;
}
/* 长=宽 */
.Register .icon1 {
  height: 2.5vh;
  width: 2.5vh;
}
/* 长>宽 */
.Register .icon2 {
  height: 2.5vh;
  width: 2vh;
}
/* 长<宽 */
.Register .icon3 {
  height: 2.5vh;
  width: 3vh;
}

.Register .van-cell {
  line-height: 2.5vh;
}

.Register .font1 {
  font-size: 2.6vh;
}
.Register .font2 {
  font-size: 2vh;
  margin: 0.7vh 0;
}
.Register .font3 {
  font-size: 1.8vh;
  color: #e2dbdb;
}
.Register .btnP {
  text-align: center;
}
.Register .btnP .btn {
  background-color: #f58320;
  color: #ffffff;
  font-size: 2.2vh;
  width: 30vw;
  margin-top: 5vh;
  margin-bottom: 5vh;
  /* height: 8vh; */
  height: 5vh;
  line-height: 5vh;
}
.Register .font_bold {
  font-weight: bold;
}

/* @media screen and (max-device-aspect-ratio: 812/400) {
  .Register .logo {
    height: 7vh;
    width: 14vh;
  }
} */
</style>
<style>
</style>
