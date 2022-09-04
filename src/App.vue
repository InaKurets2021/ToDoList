<template>
  <div id="app">
    <div class="wrapper">
      <img src="./Group.svg" alt="group" />
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
          <div class="footer__left">
            <div class="footer__link">1/3left</div>
          </div>
          <div class="footer__link">All</div>
          <div class="footer__link">Active</div>
          <div class="footer__link">Completed</div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;


}

:root {
  --white: #fff;
  --orange: #FE9262;
  --card: #FFCA93;
  --word: #7F4B13;
  --gray: #FFECD8;
}

.wrapper {
  background: linear-gradient(104.11deg, #FF7E5F 14.52%, #FEB567 87.26%);
  width: 73rem;
  height: 40rem;
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
    background: var(--white);
    border: 2px solid var(--orange);
    box-shadow: 0px 8px 35px 5px var(--orange);

    .header {
      width: 34rem;
      height: 3rem;
      left: 20rem;
      top: 6rem;
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.7rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--card);
      color: var(--word);
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
      background: var(--card);
      border-radius: .6rem;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.7rem;
      gap: 1.4rem;
      display: flex;
      align-items: center;
      text-align: center;
      color: var(--word);
    }

    label input {
      display: none;
      /* <--скрываем дефолтный чекбокс */
    }

    label span {
      /* <-- стилизируем новый */
      width: 1rem;
      height: 1rem;
      border: 1.5px solid var(--orange);
      display: inline-block;
      position: relative;
      padding: 3px;
      background: var(--card);
      border-radius: 5px;
    }

    [type=checkbox]:checked+span:before {
      /* <-- ставим иконку, когда чекбокс включен  */
      content: '\2714';
      position: absolute;
      top: 2px;
      left: 5px;
      font-size: 1.5rem;
      color: var(--white);
      background: var(--orange);
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 1.5rem;
      height: 1.5rem;
    }

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.5rem;
      height: 1.5rem;
      position: relative;
      background: none;
      border: 0.125rem solid var(--orange);
      border-radius: 0.25rem;
      cursor: pointer;
      margin-left: 20rem;
    }

    .btn::after,
    .btn::before {
      content: "";
      width: 0.75rem;
      height: 0.125rem;
      position: absolute;
      left: 50%;
      top: 50%;
      background-color: var(--orange);
    }

    .btn::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    .btn:before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    .button {
      width: 31rem;
      height: 3rem;
      margin: 0 1rem 1.5rem 1.8rem;
      text-align: start;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.7rem;
      background: var(--gray);
      border: 1.5px dashed var(--orange);
      border-radius: 10px;
      align-items: center;
      text-align: center;
      color: var(--word);
    }

    .footer__menu {
      width: 34rem;
      height: 3.3rem;
      left: 20rem;
      top: 6rem;
      display: flex;
      background: var(--card);
      gap: 25px;
    }

    .footer__link {
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.5rem;
      margin: .8rem 0 .6rem 0;
      gap: 1.5rem;
      align-items: center;
      text-align: center;
      color: var(--word);
    }

    .footer__left {
      margin: 0 10rem 0 1.8rem;
    }
  }
}
</style>
