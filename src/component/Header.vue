<template>
    <header class="header">
        <div class="header-container">
            <div class="header-container-content header-container-content--logo basis-0 text-opacity-10"></div>
            <div class="header-container-content header-container-content--menu">
                <div class="header__menuhum"></div>
                <ul class="header__menu divide-green-200">
                    <li class="header__menu__item"><a href="javascript:;" class="link">I am Link</a></li>
                    <li class="header__menu__item"><a href="javascript:;" class="link">I am Link</a></li>
                    <li class="header__menu__item"><a href="javascript:;" class="link">I am Link</a></li>
                </ul>
            </div>
        </div>
      <my-btn class="btn">kk</my-btn>
    </header>
</template>

<script>
import MyBtn from './Btn.vue'

export default {
    name: 'header-common',
    components: {
      MyBtn
    },
    data: () => {
        return {
            success: true
        }
    }
}
</script>

<style lang="scss" scoped>
  .header {
    @apply bg-gray-200;

    &-container {
      @apply flex justify-between items-center max-w-xs;
      @apply mx-auto;

      max-width: 90%;

      &-content {
        &--logo {
          @apply w-10 h-10 bg-gray-600;
        }
      }
    }

    &__menu {
      @apply text-0;

      &__item {
        @apply inline-block align-middle;
        @apply bg-gray-400;
        @apply text-base text-gray-600 font-normal;

        .link {
          @apply inline-block px-2 py-4 #{!important};
        }

        &:not(:last-child) {
          @apply mr-4;
        }
      }
    }
  }
</style>




