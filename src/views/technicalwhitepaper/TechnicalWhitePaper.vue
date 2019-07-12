<template>
  <div class="TechnicalWhitePaper">
    <div class="bg">
      <img class="logo" src="../../assets/images2/logo4.png" alt />
      <div class="content">
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item title="移动性" name="1" class="menu">
            <div
              class="setName"
              v-for="(item,index) in data.Mobility"
              :key="index"
              @click="goUrl(item.url,item.ifPdf)"
            >
              {{item.name}}
              <span>></span>
            </div>
          </van-collapse-item>
          <van-collapse-item title="人工智能" name="2" class="menu">
            <div
              class="setName"
              v-for="(item2,index) in data.AI"
              :key="index"
              @click="goUrl(item2.url,item2.ifPdf)"
            >
              {{item2.name}}
              <span>></span>
            </div>
          </van-collapse-item>
          <van-collapse-item title="物联网安全" name="3" class="menu">
            <div
              class="setName"
              v-for="(item3,index) in data.IoTSecurity"
              :key="index"
              @click="goUrl(item3.url,item3.ifPdf)"
            >
              {{item3.name}}
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
  name: "TechnicalWhitePaper",
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
        Mobility: [
          // 移动性
          {
            ifPdf: true,
            name: "Aruba 802.11ax 技术摘要",
            url:
              "https://icampaign.com.cn/customers/aruba/attachment/resources/TechnicalWhitePaper/Mobility/Aruba 802.11ax技术摘要.pdf"
            // "https://icampaign.com.cn/1.pdf"
          },
          {
            ifPdf: true,
            name: "Aruba 802.11ax 白皮书",
            url:
              "https://icampaign.com.cn/customers/aruba/attachment/resources/TechnicalWhitePaper/Mobility/Aruba 802.11ax 白皮书.pdf"
          },
          // {
          //   ifPdf: false,
          //   name: "5G与WiFi的关系",
          //   url: ""
          // },
          {
            ifPdf: true,
            name: "Aruba增强的智能数字化工作场所体验白皮书",
            url:
              "https://icampaign.com.cn/customers/aruba/attachment/resources/TechnicalWhitePaper/Mobility/Aruba_增强的智能数字化工作场所体验白皮书.pdf"
          },
          {
            ifPdf: true,
            name: "Aruba智能数字化工作场所——转变您的网络基础，以演进未来的工作",
            url:
              "https://icampaign.com.cn/customers/aruba/attachment/resources/TechnicalWhitePaper/Mobility/Aruba 智能数字化工作场所解决方案.pdf"
          },
          {
            ifPdf: true,
            name: "中型园区设计和部署指南",
            url:
              "https://www.arubanetworks.com/assets/so/AVD_MobileFirst_CampusLargeDesignDeploy.pdf"
          }
        ],
        AI: [
          // 人工智能
          {
            ifPdf: true,
            name: "ARUBA基于人工智能的优势",
            url:
              "https://icampaign.com.cn/customers/aruba/attachment/resources/TechnicalWhitePaper/AI/Aruba人工智能优势.pdf"
          },
          {
            ifPdf: true,
            name: "Aruba人工智能驱动的移动网络",
            url:
              "https://icampaign.com.cn/customers/aruba/attachment/resources/TechnicalWhitePaper/AI/Aruba人工智能驱动的移动网络解决方案.pdf"
          },
          {
            ifPdf: true,
            name: "CISO 的基于 AI 的用户和行为分析指南",
            url: "https://www.arubanetworks.com/assets/Guide_CisoSneakPeek.pdf"
          },
          {
            ifPdf: true,
            name: "Aruba绿色节能无线接入技术",
            url:
              "https://icampaign.com.cn/customers/aruba/attachment/resources/TechnicalWhitePaper/AI/Aruba 绿色节能无线接入点技术.pdf"
          }
        ],
        IoTSecurity: [
          // 物联网安全
          {
            ifPdf: true,
            name: "ARUBA 移动优先架构",
            url:
              "https://icampaign.com.cn/customers/aruba/attachment/resources/TechnicalWhitePaper/IoTSecurity/Aruba 移动优先解决方案.pdf"
          },
          {
            ifPdf: true,
            name: "数字工作场所物联网",
            url:
              "https://www.arubanetworks.com/assets/wp/WP_SmartDigitalWorkplaceIoT.pdf"
          },
          {
            ifPdf: true,
            name:
              "保证物联网的网络安全——在不影响网络安全的情况下打造智能工作场所",
            url:
              "https://www.arubanetworks.com/assets/wp/WP_ConnectProtectIoT.pdf"
          },
          {
            ifPdf: true,
            name: "Aruba WP_360SecureFabric",
            url:
              "https://www.arubanetworks.com/assets/wp/WP_360SecureFabric.pdf"
          },
          {
            ifPdf: true,
            name: "CISO 的基于 AI 的用户和行为分析指南",
            url: "https://www.arubanetworks.com/assets/Guide_CisoSneakPeek.pdf"
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.TechnicalWhitePaper .setName {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  height: 10vh;
}
.TechnicalWhitePaper .bg {
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
.TechnicalWhitePaper .logo {
  /* height: 12vh;
  width: 24vh; */
  width: 100px;
  height: 50px;
  margin: 3vh 0;
}

.TechnicalWhitePaper .content {
  background-color: #ffffff;
  text-align: left;
  margin-top: 3vh;
}

.TechnicalWhitePaper .content .menu div {
  line-height: 10vh;
  background-color: #f5f5f5;
  margin: 0;
  color: #f58320;
  padding-left: 5vw;
  border-top: 0.5px solid #e0dfdf;
  /* border-bottom: 0.5px solid #b2b2b2; */
}
.TechnicalWhitePaper .content .menu div > span {
  float: right;
  margin-right: 6vw;
  color: #333333;
}
</style>
<style>
.TechnicalWhitePaper .van-collapse-item__wrapper {
  padding: 0px !important;
}
.TechnicalWhitePaper .van-collapse-item__content {
  padding: 0px !important;
}
.TechnicalWhitePaper .van-cell {
  border-top: 0.5px solid #e0dfdf;
}

.TechnicalWhitePaper .van-collapse-item:nth-child(3) {
  border-bottom: 0.5px solid #e0dfdf;
}
</style>
