<template>
  <div class="KeyTechnology">
    <div class="bg">
      <img class="logo" src="../../assets/images2/logo4.png" alt />
      <div class="content">
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item title="WLAN" name="1" class="menu">
            <div
              class="setName"
              v-for="(item,index) in data.WLAN"
              :key="index"
              @click="goUrl(item.url,item.ifPdf)"
            >
              {{item.name}}
              <span>></span>
            </div>
          </van-collapse-item>
          <van-collapse-item title="Wired" name="2" class="menu">
            <div
              class="setName"
              v-for="(item2,index) in data.Wired"
              :key="index"
              @click="goUrl(item2.url,item2.ifPdf)"
            >
              {{item2.name}}
              <span>></span>
            </div>
          </van-collapse-item>
          <van-collapse-item title="Branch" name="3" class="menu">
            <div
              class="setName"
              v-for="(item3,index) in data.Branch"
              :key="index"
              @click="goUrl(item3.url,item3.ifPdf)"
            >
              {{item3.name}}
              <span>></span>
            </div>
          </van-collapse-item>
          <van-collapse-item title="Security" name="4" class="menu">
            <div
              class="setName"
              v-for="(item4,index) in data.Security"
              :key="index"
              @click="goUrl(item4.url,item4.ifPdf)"
            >
              {{item4.name}}
              <span>></span>
            </div>
          </van-collapse-item>
          <van-collapse-item title="Management" name="5" class="menu">
            <div
              class="setName"
              v-for="(item5,index) in data.Management"
              :key="index"
              @click="goUrl(item5.url,item5.ifPdf)"
            >
              {{item5.name}}
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
  name: "KeyTechnology",
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
        WLAN: [
          // {
          // ifPdf: false,
          // name: "AirMatch",
          // url: ""
          // },
          {
            ifPdf: true,
            name: "ClientMatch",
            url:
              "https://icampaign.com.cn/customers/aruba/attachment/resources/KeyTechnology/WLAN/Aruba ClientMatch Wi-Fi 客户端优化技术简介.pdf"
          },
          // {
          // ifPdf: false,
          // name: "动态冗余",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "Multi-zone",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "Live Upgrade",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "Role-based Firewall",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "UC的整合与优化",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "AppRF",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "远程接入",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "无线入侵保护",
          // url: ""
          // },
          {
            ifPdf: false,
            name: "Aruba 802.11ax黑科技揭秘一 OFDMA和MU-MIMO 多路并发技术",
            url:
              "http://aruba.yangben.io/#!/article/6a4924a386e1422abe012bb4a2a1c372/3816e837cf1a4145a54dc92b26725e9b"
          },
          {
            ifPdf: false,
            name: "Aruba 802.11ax黑科技连载二 BSS着色技术",
            url:
              "http://aruba.yangben.io/#!/article/6a4924a386e1422abe012bb4a2a1c372/eb319ceab6f741cb97dccb4f0ed0051a"
          },
          {
            ifPdf: false,
            name: "Aruba 802.11ax黑科技连载三 AI驱动的绿色AP技术",
            url:
              "http://aruba.yangben.io/#!/article/6a4924a386e1422abe012bb4a2a1c372/8789cc70350d4f27935e8a384f11d659"
          },
          {
            ifPdf: false,
            name: "Aruba 802.11ax黑科技连载四 AI驱动的AirMatch自动射频优化技术",
            url:
              "http://aruba.yangben.io/#!/article/6a4924a386e1422abe012bb4a2a1c372/6d3c74d0600c4b87848c3bc0c827e80e"
          },
          {
            ifPdf: false,
            name:
              "Aruba 802.11ax黑科技连载五 具有802.11ax感知能力Aruba ClientMatch技术",
            url:
              "http://aruba.yangben.io/#!/article/6a4924a386e1422abe012bb4a2a1c372/383621f671664f7eb5619aab26970bcc"
          },
          {
            ifPdf: false,
            name: "控制课堂——Aruba AirGroup 工作原理",
            url:
              "https://www.arubanetworks.com/zh-hans/v/#v=Products and Solutions/AirGroup_Animation_H264_960x540_V2.mp4&width=960&height=540&t=Aruba AirGroup:工作原理"
          },
          {
            ifPdf: false,
            name:
              "优先处理关键学习应用程序，阻止不安全的内容——Aruba AppRF:工作原理",
            url:
              "https://www.arubanetworks.com/video/?v=launch/Aruba_AppRF_960x540.mov&width=960&height=540&t=Aruba%20AppRF:%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86"
          }
        ],
        Wired: [
          // {
          // ifPdf: false,
          // name: "Dynamic Segmentation",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "VSX/VSF",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "NAE",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "API",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "NetEdit",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "Loop-protection",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "Role-based Policy",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "802.11bt POE (ITM)",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "Smart Rate",
          // url: ""
          // }
        ],
        Branch: [
          // {
          // ifPdf: false,
          // name: "DPS",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "HA",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "Overlay Routing",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "Dynamic Segmentation",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "AppRF",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "SD-Branch（WAN+Edge)",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "Zero-Touch Provision",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "Virtual GW in VPC",
          // url: ""
          // }
        ],
        Security: [
          // {
          // ifPdf: false,
          // name: "终端识别",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "情境化策略",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "Exchange",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "Onboard",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "Onguard",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "访客管理",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "UEBA",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "Security360",
          // url: ""
          // }
        ],
        Management: [
          {
            ifPdf: true,
            name: "AirWave-有线/无线统一管理",
            url:
              "https://icampaign.com.cn/customers/aruba/attachment/resources/KeyTechnology/Management/DS_AirWave.pdf"
          }
          // {
          // ifPdf: false,
          // name: "Central-分支网络统一管理",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "Central-MSP",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "Central-Live Troubleshooting",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "Central-NetInsight Integration",
          // url: ""
          // },
          // {
          // ifPdf: false,
          // name: "Central-REST API",
          // url: ""
          // }
        ]
      }
    };
  }
};
</script>

<style scoped>
.KeyTechnology .setName {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  height: 10vh;
}
.KeyTechnology .bg {
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
.KeyTechnology .logo {
  /* height: 12vh;
  width: 24vh; */
  width: 100px;
  height: 50px;
  margin: 3vh 0;
}

.KeyTechnology .content {
  background-color: #ffffff;
  text-align: left;
  margin-top: 3vh;
}

.KeyTechnology .content .menu div {
  line-height: 10vh;
  background-color: #f5f5f5;
  margin: 0;
  color: #f58320;
  padding-left: 5vw;
  border-top: 0.5px solid #e0dfdf;
  /* border-bottom: 0.5px solid #b2b2b2; */
}
.KeyTechnology .content .menu div > span {
  float: right;
  margin-right: 6vw;
  color: #333333;
}
</style>
<style>
.KeyTechnology .van-collapse-item__wrapper {
  padding: 0px !important;
}
.KeyTechnology .van-collapse-item__content {
  padding: 0px !important;
}
.KeyTechnology .van-cell {
  border-top: 0.5px solid #e0dfdf;
}

.KeyTechnology .van-collapse-item:nth-child(5) {
  border-bottom: 0.5px solid #e0dfdf;
}
</style>
