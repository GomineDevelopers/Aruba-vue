<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
    <!-- <NetMonitor></NetMonitor> -->
  </div>
</template>

<script>
import NetMonitor from "@/components/NetMonitor";

export default {
  name: "app",
  components: {
    NetMonitor: NetMonitor
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  provide() {
    //提供
    return {
      reload: this.reload
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  font-size: 14px;
  width: 100vw;
  height: 100vh;
}
</style>
