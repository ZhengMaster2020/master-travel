<template>
  <Header></Header>
  <main class="home-main">
    <section class="nearby">
      <h3 class="nearby-title">Explore nearby</h3>
      <div class="nearby-wrap">
        <div class="nearby-wrap-item" v-for="item in 8">
          <img class="img" :src="bg1" />
          <div class="right">
            <span class="h5">Guangzhou City</span>
            <span class="h6">15 minute drive</span>
          </div>
        </div>
      </div>
    </section>

    <section class="nearby live">
      <h3 class="nearby-title">Discover things to do</h3>
      <div class="live-wrap">
        <div class="live-wrap-item" v-for="item in 4">
          <img class="img" :src="bg2" />
          <span class="h5">Outdoor getaways</span>
        </div>
      </div>
    </section>

    <section class="hosting">
      <img class="img" :src="bg4" />
      <div class="hosting-des">
        <p class="hosting-des-title">Try hosting</p>
        <span class="hosting-des-text">Earn extra income and unlock new</span>
        <span class="hosting-des-text">
          opportunities by sharing your space.
        </span>
        <div class="hosting-des-btn">Learn more</div>
      </div>
    </section>

    <section class="nearby discover">
      <h3 class="nearby-title">Discover things to do</h3>
      <div class="discover-wrap">
        <div class="discover-wrap-item" v-for="item in 3">
          <img class="img" :src="bg3" />
          <span class="h5">Experiences</span>
          <span class="h6">Find unforgettable activities near you.</span>
        </div>
      </div>
    </section>

    <section class="inspiration">
      <h3 class="inspiration-title">Inspiration for future getaways</h3>

      <a-tabs default-active-key="2">
        <a-tab-pane key="1" title="Tab 1"> Content of Tab Panel 1 </a-tab-pane>
        <a-tab-pane key="2" title="Tab 2"> Content of Tab Panel 2 </a-tab-pane>
        <a-tab-pane key="3" title="Tab 3"> Content of Tab Panel 3 </a-tab-pane>
      </a-tabs>
    </section>
  </main>
  <Footer></Footer>
</template>

<script setup lang="ts">
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import bg1 from '../../assets/images/nearbg-1.webp'
import bg2 from '../../assets/images/nearbg-2.webp'
import bg3 from '../../assets/images/nearbg-3.webp'
import bg4 from '../../assets/images/nearbg-4.webp'
</script>

<style lang="scss" scoped>
@import '../../assets/scss/app.scss';
@import '../../assets/scss/mixin.scss';

@mixin h5 {
  font-size: 18px;
  line-height: 22px;
  max-height: 44 px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: rgb(34, 34, 34);
  font-weight: 600;
  white-space: pre-line;
  padding-top: 8px;
}

@mixin h6 {
  font-size: 14px;
  line-height: 18px;
  max-height: 54px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: rgb(34, 34, 34);
  font-weight: 400;
  margin-top: 4px;
  white-space: pre-line;
}

.home-main {
  width: calc(100vw - 160px);
  .nearby {
    height: 260px;
    overflow: hidden;

    &-title {
      font-size: 32px;
      color: #222;
    }

    &-wrap {
      // @include flex(flex-start, center);
      display: grid;
      grid-template-columns: auto auto auto;
      grid-template-rows: auto auto auto;
      gap: 16px;

      &-item {
        @include flex(flex-start);
        cursor: pointer;

        .img {
          width: 64px;
          height: 64px;
          border-radius: 4px;
          background-color: #eee;
          margin-right: 10px;
        }
        .right {
          @include flex(center, center, column);
          .h5 {
            font-size: 16px;
            color: #222;
            font-weight: 600;
          }

          .h6 {
            font-size: 16px;
            color: #222;
            margin-top: 10px;
          }
        }
      }
    }
  }

  .live {
    height: auto;

    &-wrap {
      display: grid;
      grid-template-columns: repeat(4, 25%);
      gap: 16px;

      &-item {
        display: grid;
        cursor: pointer;

        .img {
          width: 100%;
          background: rgb(221, 221, 221);
          border-radius: 8px;
        }

        @include h5;
      }
    }
  }

  .discover {
    height: auto;

    &-wrap {
      display: grid;
      grid-template-columns: repeat(3, 33.333%);
      gap: 16px;

      &-item {
        display: grid;
        cursor: pointer;
        .img {
          width: 100%;
          background: rgb(221, 221, 221);
          border-radius: 8px;
        }

        .h5 {
          @include h5;
        }

        .h6 {
          @include h6;
          margin-top: 5px;
          font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
            'Helvetica Neue', sans-serif;
        }
      }
    }
  }

  .hosting {
    position: relative;
    margin: 24px 0;
    margin-top: 40px;
    border-radius: 8px;

    &-des {
      @include flex(center, flex-start, column);
      position: absolute;
      left: 0;
      top: 0;
      width: 48%;
      height: 100%;
      padding-left: 80px;
      color: #fff;
      cursor: pointer;

      &-title {
        font-size: 48px;
        line-height: 52px;
      }

      &-text {
        font-size: 18px;
        line-height: 24px;
      }

      &-btn {
        margin-top: 40px;
        font-size: 16px;
        color: rgb(72, 72, 72);
        border-radius: 8px;
        background-color: #fff;
        font-weight: 600;
        padding: 14px 24px;
        cursor: pointer;

        &:hover {
          opacity: 0.9;
        }
      }
    }

    .img {
      width: 100%;
      border-radius: 8px;
    }
  }

  .inspiration {
    margin-top: 60px;

    &-title {
      color: #222;
      font-weight: 400;
      width: 100%;
      margin-bottom: 8px;
    }
  }
}
</style>
