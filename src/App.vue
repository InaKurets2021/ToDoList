<template>
  <div id="app">
    <div class="wrapper">
      <img src="./assets/img/Group.svg" alt="group" />
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
          <form action="footer__radio">
            <p><input name="radio" type="radio" value="all">All</p>
            <p><input name="radio" type="radio" value="active">Active</p>
            <p><input name="radio" type="radio" value="completed" checked> Completed</p>
          </form>
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
$white: #fff;
$orange: #FE9262;
$card: #FFCA93;
$word: #7F4B13;
$gray: #FFECD8;


.wrapper {
  background: linear-gradient(104.11deg, #FF7E5F 14.52%, #FEB567 87.26%);
  margin: 0 auto;
  position: relative;

  img {
    padding: 4rem 7.5rem 4rem 41rem;
  }

  .container {
    box-sizing: border-box;
    position: absolute;
    width: 34.2rem;
    height: 27rem;
    left: 20rem;
    top: 6rem;
    background: $white;
    border: 2px solid $orange;
    box-shadow: 0px 0.6rem 2rem 0.3rem $orange;

    .header {
      height: 3rem;
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.7rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $card;
      color: $word;
    }

    .task {
      width: 30rem;
      height: 3rem;
      margin: 1.8rem 1.8rem 1.5rem 1.8rem;
      text-align: start;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.7rem;
      padding-left: 1.2rem;
      width: 30rem;
      height: 3rem;
      left: 21rem;
      top: 11rem;
      background: $card;
      border-radius: .6rem;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.7rem;
      gap: 1.4rem;
      display: flex;
      align-items: center;
      text-align: center;
      color: $word;
    }

    label input {
      display: none;
      /* <--скрываем дефолтный чекбокс */
    }

    label span {
      /* <-- стилизируем новый */
      width: 1rem;
      height: 1rem;
      border: 1.5px solid $orange;
      display: inline-block;
      position: relative;
      padding: 3px;
      background: $card;
      border-radius: 5px;
      cursor: pointer;
    }

    [type=checkbox]:checked+span:before {
      /* <-- ставим иконку, когда чекбокс включен  */
      content: '';
      position: absolute;
      top: 2px;
      left: 5px;
      font-size: 1.5rem;
      color: $white;
      background: $orange;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 1.5rem;
      height: 1.5rem;
      background: $orange url(./assets/img/check.svg) center no-repeat;
    }

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.5rem;
      height: 1.5rem;
      position: relative;
      background: none;
      border: 0.125rem solid $orange;
      border-radius: 0.25rem;
      cursor: pointer;
      margin-left: 20rem;

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

    .button {
      width: 31rem;
      height: 3rem;
      margin: 0 1rem 1.5rem 1.8rem;
      text-align: start;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.7rem;
      background: $gray;
      border: 1.5px dashed $orange;
      border-radius: 0.6rem;
      align-items: center;
      text-align: center;
      color: $word;
    }

    .footer__menu {
      display: flex;
      background: $card;
      gap: 1.5rem;
      .footer__left {
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 1.5rem;
        color: $word;
        margin: 1rem 15rem 0 1.8rem;
      }
      .footer__radio {
       display: flex;
       
      }
    }
  }
}
</style>
