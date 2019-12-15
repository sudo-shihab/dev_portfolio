<template>
  <div class="layout antialiased font-sans relative" :class="[appTheme]" id="app-active-layout">
    <!-- Layouts footer -->
    <footer
      data-v-c6c5ef5c
      class="center px-16 pb-2"
      style="
    position: absolute;
    bottom: 2px;
    width: 100%;
"
    >
      <small data-v-c6c5ef5c class="center" style="
    display: block;
    text-align: left;
">
        ©2019 GridWind by
        <a href target="_blank">Illahi Crafts</a> . All Right Reserved. Read Illahi's
        <a target="_blank" href>Privacy Policy</a> and
        <a target="_blank" href>Terms of Service</a>
      </small>
    </footer>
    <!-- wrapper for animated wall -->
    <div
      class="hidden lg:block lg:w-2/5 right-sided-wrp fixed h-full right-0 top-0 bottom-0"
      id="right-section"
    >
      <div class="img-wrp min-h-screen" id="main-background-img"></div>
    </div>
    <!-- Entire wrapper for left and right side div -->
    <div
      class="layout-main-wrapper clearfix min-h-screen overflow-hidden"
      id="default-layout-main-wrp"
    >
      <!-- wrapper for left sided div -->
      <div class="w-full lg:w-3/5 left-sided-wrp float-left bg-fixed" id="left-section">
        <!-- wrapper for the hero nav -->
        <div class="clearfix">
          <div class="float-left w-full px-16 py-8 pb-2">
            <ul>
              <li class="inline-block float-left">
                <g-image
                  src="../images/png/logo_transparent.png"
                  class="shadow-md"
                  style="width:100px;"
                ></g-image>
              </li>

              <li class="inline-block float-left ml-4 mt-5">
                <h1
                  class="md:text-2xl xl:text-3xl xxl:text-4xl top-auto font-sans font-bold hidden xl:block shadow-md"
                >Grid Wind</h1>
              </li>
              <li class="inline-block float-right mt-8">
                <span class="underline top-auton hidden md:block">Question's ? email us</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="main-content-wrp lg:p-16 md:p-10 sm:p-8 p-4">
          <div
            class="box-container clearfix bg-gray-200 p-4 xxl:p-16 xl:p-12 lg:p-10 md:p-8 sm:p-6 shadow-lg absolute md:realign-main-container lg:aside-main-container resize-width-for-main-container lg:increase-width-for-main-container"
            id="content-box"
          >
            <div class="brand-header float-left w-full mb-8">
              <ul>
                <li class="inline-block float-left">
                  <g-image src="https://placehold.it/35X35" alt />
                </li>
                <li class="inline-block float-left">
                  <h2 class="text-2xl ml-4 font-sans font-bold">Grid Wind</h2>
                </li>
              </ul>
            </div>

            <!-- Brand description section -->
            <div class="brand-description float-left w-full">
              <div class="purpose-title">
                <p class="text-md font-semibold uppercase tracking-wider text-gray-300">Coming soon</p>
              </div>
              <div class="mt-2 hero-support-text">
                <p
                  class="text-2xl font-serif xxl:text-5xl xl:text-4xl lg:text-3xl sm:text-2xl"
                >Where Tailwind, meets Gridsome</p>
              </div>
              <div class="mt-3 hero-sub-support-text">
                <p
                  class="text-sm text-gray-400 xxl:text-2xl xl:text-xl lg:text-lg sm:text-sm"
                >Beautifully designed Functional components and templates, hand-crafted using the CSS framework you already know and love.</p>
              </div>
            </div>

            <!-- -->
            <div class="signup-form-section float-left w-full mt-8">
              <p
                class="xl:text-lg font-medium"
              >Sign up for project updates, early previews, and to find out when it’s ready.</p>

              <div class="form-wrp">
                <form class="clearfix">
                  <div class="float-left w-full py-2">
                    <form action method="POST">
                      <ul>
                        <li class="inline-block lg:w-2/5 lg:mb-0 w-full mb-2">
                          <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="username@example.com"
                          />
                        </li>
                        <li class="inline-block lg:w-2/5 lg:mb-0 w-full mb-2">
                          <button
                            type="submit"
                            class="text-white font-bold py-3 px-8 lg:ml-4 ml-0 w-full lg:w-auto rounded"
                            name="email"
                            id="cta-btn"
                          >Sign Up</button>
                        </li>
                      </ul>
                    </form>
                  </div>
                </form>
              </div>
            </div>
            <!--
              <slot />
            -->
          </div>
          <!-- Project authors -->
          <div class="container mt-24">
            <!-- -->
            <div class="clearfix">
              <div class="w-full mb-4">
                <p class="text-md uppercase tracking-wider">
                  <span class="shadow-sm underline">A Project By</span>
                </p>
              </div>
            </div>
            <div class="clearfix flex flex-col sm:flex-row justify-left align-middle">
              <div class="pr-0 xl:pr-24 lg:pr-16 sm:pr-4 mb-4">
                <ul>
                  <li class="float-left inline-block">
                    <g-image
                      src="https://www.tailwindui.com/adam.87c84df4.jpg"
                      alt
                      class="rounded-full w-16 p-1 shadow-lg"
                    />
                  </li>
                  <li class="inline-block ml-2">
                    <p class="font-bold">Shihab P M</p>
                    <span class="text-sm">Front End Engineer , Zeta</span>
                  </li>
                </ul>
              </div>
              <div class="pr-0 xl:pr-24 lg:pr-16 sm:pr-4">
                <ul>
                  <li class="float-left inline-block">
                    <g-image
                      src="https://www.tailwindui.com/steve.d85280f0.jpg"
                      alt
                      class="rounded-full w-16 p-1 shadow-lg"
                    />
                  </li>
                  <li class="float-left inline-block ml-2">
                    <p class="font-bold">Nishil P</p>
                    <span class="text-sm">UX Designer, X Company</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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


<style lang="scss" scoped>
#cta-btn {
  background: linear-gradient(
      0deg,
      rgba(99, 109, 81, 0.3) 0%,
      rgba(198, 203, 94, 0.3) 100%
    ),
    linear-gradient(90deg, #12747d, #36c192);
  transition: all 0.5s ease-out;
  &:hover {
    background: linear-gradient(
        0deg,
        rgba(99, 109, 81, 0.3) 0%,
        rgba(198, 203, 94, 0.3) 100%
      ),
      linear-gradient(90deg, rgb(18, 116, 125), rgb(20, 216, 80));
    transition: all 0.8s ease-in;
  }
}
#main-background-img {
  background-image: url("../images/jpeg/img1.png");
  //background-image: url(https://www.tailwindui.com/components.4b326ba8.png);
  background-position: 0px 0px;
  background-repeat: repeat-y;
  animation: animatedBackground 40s linear infinite;
  background-attachment: fixed;
}

#default-layout-main-wrp {
  background-image: linear-gradient(
      0deg,
      transparent 0%,
      transparent 46%,
      rgba(94, 94, 94, 0.06) 46%,
      rgba(94, 94, 94, 0.06) 65%,
      transparent 65%,
      transparent 100%
    ),
    linear-gradient(
      135deg,
      transparent 0%,
      transparent 37%,
      rgba(94, 94, 94, 0.06) 37%,
      rgba(94, 94, 94, 0.45) 45%,
      transparent 45%,
      transparent 100%
    ),
    linear-gradient(90deg, white, white);
}
#content-box {
  position: relative;
  color: #fff;
  opacity: 0.95;
  background: repeating-linear-gradient(
      135deg,
      rgba(65, 65, 65, 0.06) 0px,
      rgba(65, 65, 65, 0.06) 14px,
      rgba(12, 12, 12, 0.06) 14px,
      rgba(12, 12, 12, 0.06) 50px,
      rgba(139, 139, 139, 0.06) 50px,
      rgba(139, 139, 139, 0.06) 78px,
      rgba(82, 82, 82, 0.06) 78px,
      rgba(82, 82, 82, 0.06) 92px,
      rgba(138, 138, 138, 0.06) 92px,
      rgba(138, 138, 138, 0.06) 136px,
      rgba(98, 98, 98, 0.06) 136px,
      rgba(98, 98, 98, 0.06) 170px,
      rgba(153, 153, 153, 0.06) 170px,
      rgba(153, 153, 153, 0.06) 208px,
      rgba(247, 247, 247, 0.06) 208px,
      rgba(247, 247, 247, 0.06) 257px
    ),
    repeating-linear-gradient(
      135deg,
      rgba(130, 130, 130, 0.06) 0px,
      rgba(130, 130, 130, 0.06) 24px,
      rgba(46, 46, 46, 0.06) 24px,
      rgba(46, 46, 46, 0.06) 72px,
      rgba(26, 26, 26, 0.06) 72px,
      rgba(26, 26, 26, 0.06) 82px,
      rgba(185, 185, 185, 0.06) 82px,
      rgba(185, 185, 185, 0.06) 121px,
      rgba(177, 177, 177, 0.06) 121px,
      rgba(177, 177, 177, 0.06) 166px,
      rgba(106, 106, 106, 0.06) 166px,
      rgba(106, 106, 106, 0.06) 196px,
      rgba(221, 221, 221, 0.06) 196px,
      rgba(221, 221, 221, 0.06) 223px,
      rgba(94, 94, 94, 0.06) 223px,
      rgba(94, 94, 94, 0.06) 244px
    ),
    repeating-linear-gradient(
      135deg,
      rgba(210, 210, 210, 0.06) 0px,
      rgba(210, 210, 210, 0.06) 21px,
      rgba(30, 30, 30, 0.06) 21px,
      rgba(30, 30, 30, 0.06) 65px,
      rgba(46, 46, 46, 0.06) 65px,
      rgba(46, 46, 46, 0.06) 95px,
      rgba(91, 91, 91, 0.06) 95px,
      rgba(91, 91, 91, 0.06) 124px,
      rgba(202, 202, 202, 0.06) 124px,
      rgba(202, 202, 202, 0.06) 152px,
      rgba(46, 46, 46, 0.06) 152px,
      rgba(46, 46, 46, 0.06) 168px,
      rgba(95, 95, 95, 0.06) 168px,
      rgba(95, 95, 95, 0.06) 204px,
      rgba(183, 183, 183, 0.06) 204px,
      rgba(183, 183, 183, 0.06) 217px
    ),
    linear-gradient(90deg, rgb(51, 51, 51), rgb(0, 0, 0));
}
</style>

