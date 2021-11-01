<template>
  <Header></Header>
  <main class="home-main">
    <div class="nearby">
      <h3 class="nearby-title">Explore nearby</h3>
      <div class="nearby-wrap">
        <div class="nearby-wrap-item" v-for="item in 8">
          <a-image class="img" :src="bg"></a-image>
          <div class="right">
            <span class="h5">Guangzhou City</span>
            <span class="h6">15 minute drive</span>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

<script setup lang="ts">
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import bg from '../../assets/images/nearbg-0.webp'
</script>

<style lang="scss" scoped>
@import '../../assets/scss/app.scss';
@import '../../assets/scss/mixin.scss';

.home-main {
  width: calc(100vw - 160px);
  .nearby {
    height: 260px;

    &-title {
      font-size: 32px;
      color: #222;
    }

    &-wrap {
      @include flex(flex-start, center);
      width: 100%;

      &-item {
        @include flex;
        width: 25%;
        background-color: red;

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
}
</style>
