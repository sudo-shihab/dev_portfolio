<template>
  <div
    class="layout relative antialiased font-sans min-h-screen bg-gray-900 overflow-hidden"
    :class="[appTheme]"
    id="app-active-layout"
  >
    <div
      class="lg:block absolute scroll-bg"
      style="background-size: 800px;background-image: url('https://source.unsplash.com/random');animation-name: scrollLarge;animation-duration: 15s;animation-timing-function: linear;animation-iteration-count: infinite;height: 400%;width: 400%;height: 400%;width: 400%;top: -25%;left: -100%;background-size: 800px auto;"
    ></div>
    <!-- Two columns -->
    <div class="clearfix relative">
      <div class="float-left w-1/2 app-bg-primary min-h-screen h-12">
        <div class="w-full app-bg-primary" style="transform:skew(10deg)"></div>
      </div>
    </div>
    <!--
    <slot />-->
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import { CACHED } from "@/scripts/commons/Constants.js";

export default {
  data() {
    return {
      appTheme: "theme-forest"
    };
  },
  created() {
    if (CACHED.CURRENT_THEME in localStorage) {
      this.appTheme = localStorage.getItem(CACHED.CURRENT_THEME);
    }
  }
};
</script>


<style>
</style>
