<template>
  <div class="ProductCatalogue">
    <div class="bg">
      <img class="logo" src="../../assets/images2/logo4.png" alt />
      <div class="content">
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item title="无线网络" name="1" class="menu">
            <div
              class="setName"
              v-for="(item,index) in data.wirelessnetwork"
              :key="index"
              @click="goUrl(item.url,item.ifPdf)"
            >
              {{item.name}}
              <span>></span>
            </div>
          </van-collapse-item>
          <van-collapse-item title="有线网络" name="2" class="menu">
            <div
              class="setName"
              v-for="(item2,index) in data.wirednetwork"
              :key="index"
              @click="goUrl(item2.url,item2.ifPdf)"
            >
              {{item2.name}}
              <span>></span>
            </div>
          </van-collapse-item>
          <van-collapse-item title="网络安全" name="3" class="menu">
            <div
              class="setName"
              v-for="(item3,index) in data.networksecurity"
              :key="index"
              @click="goUrl(item3.url,item3.ifPdf)"
            >
              {{item3.name}}
              <span>></span>
            </div>
          </van-collapse-item>
          <van-collapse-item title="网络管理" name="4" class="menu">
            <div
              class="setName"
              v-for="(item4,index) in data.networkmanagement"
              :key="index"
              @click="goUrl(item4.url,item4.ifPdf)"
            >
              {{item4.name}}
              <span>></span>
            </div>
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCatalogue",
  methods: {
    goUrl(url, ifPdf) {
      if (ifPdf) {
        let NAME = "PdfSetting";
        let vm = this;
        vm.$router.push({
          name: NAME,
          query: {
            theurl: url
          }
        });
      } else {
        if (url != "") {
          window.location.href = url;
        }
      }
    }
  },
  data() {
    return {
      activeName: "1",
      data: {
        wirelessnetwork: [
          // 无限网络
          {
            ifPdf: true,
            name: "AP303",
            url: "https://icampaign.com.cn/customers/aruba/attachment/resources/ProductCatalogue/wirelessnetwork/DS_AP303Series.pdf"
          },
          {
            ifPdf: true,
            name: "AP303H",
            url: "https://icampaign.com.cn/customers/aruba/attachment/resources/ProductCatalogue/wirelessnetwork/DS_AP303H.pdf"
          },
          // {
            // ifPdf: false,
            // name: "AP303P",
            // url: ""
          // },
          // {
            // ifPdf: false,
            // name: "AP304/305",
            // url: ""
          // },
          // {
            // ifPdf: false,
            // name: "AP314/315",
            // url: ""
          // },
          // {
            // ifPdf: false,
            // name: "AP324/325",
            // url: ""
          // },
          // {
            // ifPdf: false,
            // name: "AP334/335",
            // url: ""
          // },
          // {
            // ifPdf: false,
            // name: "AP344/345",
            // url: ""
          // },
          // {
            // ifPdf: false,
            // name: "AP374/375/377",
            // url: ""
          // },
          // {
            // ifPdf: false,
            // name: "AP365/367",
            // url: ""
          // },
          // {
            // ifPdf: false,
            // name: "AP387",
            // url: ""
          // },
          {
            ifPdf: true,
            name: "Aruba 510AP系列",
            url:
              "https://icampaign.com.cn/customers/aruba/attachment/resources/ProductCatalogue/wirelessnetwork/Aruba510AP系列.pdf"
          },
          // {
            // ifPdf: false,
            // name: "AP535",
            // url: ""
          // },
          // {
            // ifPdf: false,
            // name: "AP555",
            // url: ""
          // }
        ],
        wirednetwork: [
          // 有线网络
          {
            ifPdf: true,
            name: "Aruba 8400",
            url: "https://icampaign.com.cn/customers/aruba/attachment/resources/ProductCatalogue/wirednetwork/Aruba 8400 核心交换机系列.pdf"
          },
          {
            ifPdf: true,
            name: "Aruba 8320",
            url: "https://icampaign.com.cn/customers/aruba/attachment/resources/ProductCatalogue/wirednetwork/Aruba 8320 核心交换机系列.pdf"
          },
          // {
            // ifPdf: false,
            // name: "Aruba 8325",
            // url: ""
          // },
          {
            ifPdf: true,
            name: "Aruba 5400R 交换机系列",
            url:
              "https://icampaign.com.cn/customers/aruba/attachment/resources/ProductCatalogue/wirednetwork/Aruba5400R交换机系列.pdf"
          },
          {
            ifPdf: false,
            name: "Aruba 3810M交换机系列",
            url:
              "http://aruba.yangben.io/#!/downloads/5eb7e06b241f4f808f8e38e514928736"
          },
          {
            ifPdf: true,
            name: "Aruba 2930M交换机系列",
            url:
              "https://icampaign.com.cn/customers/aruba/attachment/resources/ProductCatalogue/wirednetwork/Aruba 2930M接入交换机系列.pdf"
          },
          {
            ifPdf: true,
            name: "Aruba 2930F交换机系列",
            url:
              "https://icampaign.com.cn/customers/aruba/attachment/resources/ProductCatalogue/wirednetwork/Aruba2930F交换机系列.pdf"
          },
          {
            ifPdf: true,
            name: "Aruba 2530交换机系列",
            url:
              "https://icampaign.com.cn/customers/aruba/attachment/resources/ProductCatalogue/wirednetwork/Aruba2530交换机系列.pdf"
          }
        ],
        networksecurity: [
          // 网络安全
          // {
            // ifPdf: false,
            // name: "Aruba ClearPass",
            // url: ""
          // },
          // {
            // ifPdf: false,
            // name: "Aruba ClearPass Device Insight",
            // url: ""
          // },
          {
            ifPdf: true,
            name: "Aruba IntroSpect",
            url: "https://icampaign.com.cn/customers/aruba/attachment/resources/ProductCatalogue/networksecurity/Aruba IntroSpect 行为分析安全平台.pdf"
          }
        ],
        networkmanagement: [
          // 网络管理
          // {
            // ifPdf: false,
            // name: "Aruba AirWave",
            // url: ""
          // },
          {
            ifPdf: true,
            name: "Aruba Central",
            url: "https://icampaign.com.cn/customers/aruba/attachment/resources/ProductCatalogue/networkmanagement/ArubaCentral综合云管理平台.pdf"
          },
          {
            ifPdf: true,
            name: "Aruba NetInsight",
            url: "https://icampaign.com.cn/customers/aruba/attachment/resources/ProductCatalogue/networkmanagement/Aruba NetInsight 云网络管理分析平台.pdf"
          },
          // {
            // ifPdf: false,
            // name: "Aruba User Experience Insight(UXI)",
            // url: ""
          // }
        ]
      }
    };
  }
};
</script>

<style scoped>
.ProductCatalogue .setName {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  height: 10vh;
}
.ProductCatalogue .bg {
  background-image: url("../../assets/images2/arubabg.png");
  background-size: 100% 100%;
  height: 100vh;
  /* width: 100vw; */
  width: 96vw;
  text-align: center;
  color: #333333;
  /* padding: 10vh 5vw 15vh 5vw; */
  padding-top: 5vh;
  padding: 0 2vw;
}
.ProductCatalogue .logo {
  /* height: 12vh;
  width: 24vh; */
    width: 100px;
  height: 50px;
  margin: 3vh 0;
}

.ProductCatalogue .content {
  background-color: #ffffff;
  text-align: left;
  margin-top: 3vh;
}

.ProductCatalogue .content .menu div {
  line-height: 10vh;
  background-color: #f5f5f5;
  margin: 0;
  color: #f58320;
  padding-left: 5vw;
  border-top: 0.5px solid #e0dfdf;
  /* border-bottom: 0.5px solid #b2b2b2; */
}
.ProductCatalogue .content .menu div > span {
  float: right;
  margin-right: 6vw;
  color: #333333;
}
</style>
<style>
.ProductCatalogue .van-collapse-item__wrapper {
  padding: 0px !important;
}
.ProductCatalogue .van-collapse-item__content {
  padding: 0px !important;
}
.ProductCatalogue .van-cell {
  border-top: 0.5px solid #e0dfdf;
}

.ProductCatalogue .van-collapse-item:nth-child(4) {
  border-bottom: 0.5px solid #e0dfdf;
}
</style>
