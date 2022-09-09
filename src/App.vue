<template>
  <div id="app">
    <div class="wrapper">
      <div class="image"></div>
      <div class="container">
        <div class="header">to do list</div>
        <div class="menu">

          <label class="task">
            <input type='checkbox' name="task1" value="" checked>
            <span></span>Task 1
            <button class="btn"></button>
          </label>

          <label class="task">
            <input type='checkbox' name="task1" value="" checked>
            <span></span> Task 2
            <button class="btn"></button>
          </label>

          <label class="task">
            <input type='checkbox' name="task1" value="" checked>
            <span></span> Task 3
            <button class="btn"></button>
          </label>

          <div><input class="button" placeholder="Add a new task" type="text" id="username" value=""></div>

        </div>

        <footer class="footer__menu">
          <div class="footer__left">1/3left</div>
          <div class="footer__radio">
            <label>
              <input type="radio" name="tab" value="all" checked />
              <span></span>All
            </label>
            <label>
              <input type="radio" name="tab" value="active" />
              <span></span>Active
            </label>
            <label>
              <input type="radio" name="tab" value="completed" />
              <span></span>Completed
            </label>
          </div>
        </footer>

      </div>

    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
@import "./assets/styles/index.scss";


.wrapper {
  background: linear-gradient(104.11deg, #FF7E5F 14.52%, #FEB567 87.26%);
  position: relative;
  height: 100vh;

  .image {
    max-width: 60rem;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background: url("./assets/img/Group.svg") center right no-repeat;
  }

  .container {
    position: absolute;
    max-width: 34.2rem;
    width: 100%;
    left: 50%;
    top: 50%;
    background: $white;
    transform: translate(-50%, -50%);
    box-shadow: 0 0.6rem 2rem 0.3rem $orange;

    .header {
      height: 3rem;
      @include text;
      @include flex;
      @include color;
    }

    .menu {
      padding: 30px;

      .task {
        padding: 0.75rem 1.25rem;
        margin-bottom: 1.5rem;
        border-radius: 0.6rem;
        @include text;
        @include flex;
        @include color;


        input {
          display: none;
          /* <--скрываем дефолтный чекбокс */
        }

        span {
          /* <-- стилизируем новый */
          @include size;
          border: 0.125px solid $orange;
          display: inline-block;
          position: relative;
          background: $card;
          border-radius: 0.25px;
          cursor: pointer;
          margin-right: 1.5rem;
        }

        [type="checkbox"]:checked+span {
          background: $orange url(./assets/img/check.svg) center no-repeat;
        }

        .btn {
          @include flex;
          @include size;
          position: relative;
          background: none;
          border: 0.125rem solid $orange;
          border-radius: 0.25rem;
          cursor: pointer;
          margin-left: auto;

          &::after,
          &::before {
            content: "";
            width: 0.75rem;
            height: 0.125rem;
            position: absolute;
            left: 50%;
            top: 50%;
            background-color: $orange;
          }

          &::after {
            transform: translate(-50%, -50%) rotate(-45deg);
          }

          &::before {
            transform: translate(-50%, -50%) rotate(45deg);
          }
        }
      }

      .button {
        width: 100%;
        height: 3rem;
        @include text;
        background: $gray;
        border: 1.5px dashed $orange;
        border-radius: 0.6rem;
        text-align: center;
        color: $word;
      }
    }

    .footer__menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 1.8rem;
      @include color;

      @media (max-width: 480px) {
        flex-direction: column;
        padding: 0.5rem;
      }

      .footer__left {
        @include text;

        @media (max-width: 480px) {
          margin-bottom: 0.5rem;
        }
      }

      .footer__radio {
        display: flex;

        label {
          position: relative;
          display: inline-block;
          padding: 0.35rem 0.6rem;
          font-size: 1.25rem;
          line-height: 1.75rem;
          background-color: transparent;
          cursor: pointer;

          &:not(:last-of-type) {
            // всем элементам кроме последнего
            margin-right: 1.5rem;

            @media (max-width: 480px) {
              margin-right: 0.5rem;
            }
          }

          input {
            display: none;
            appearance: none;
          }

          span {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            border: 0.125rem solid transparent;
            border-radius: 0.625rem;
          }

          [type="radio"]:checked+span {
            border-color: $brown;
          }
        }
      }
    }
  }
}
</style>
