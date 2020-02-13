<template>
  <div>
    <div class="vh-hero bg-blue-node relative">
      <div class="container center ph3-l ph5 relative h-100">
        <div class="w-100 z-5 relative pt7-l pt6">
          <div class="flex flex-wrap items-center pt3">
            <h1 class="dn-ms logo-big mv0"><img src="nodeconf-logo-big.svg" alt="nodeconf"></h1>
            <h1 class="dn-l logo-big mv0"><img src="nodeconf-logo-big-m.svg" alt="nodeconf"></h1>
            <p class="country ph4 ttu tc"></p>
          </div>
          <div class="pt5-l pt3">
            <p class="f2-l f3 ttu bg-green-node blue-node ttu dib ph3 pv2 mv0">OCTOBER 9th & 10th, 2020</p>
            <p class="mt2 mb0"><a href="https://goo.gl/maps/EnygTg2SvyD2" target="_black" rel="noopener"
                class="f2-l f3 fw9 ttu link go-map relative">c.c. konex
                <span class="tooltip fw7 ttu">see map</span>
              </a>
            </p>
          </div>
        </div>
       <p class="z-5 animated bounce arrow mb0 mt0-l mt5"> <a v-scroll-to="'#about'"><img src="arrow.svg"></a></p>
      </div>
      <span class="square bg-blue-node bottom-0 right-0"></span>
      <div class="bg-hero top-0 absolute z-2"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vh-hero {
  height: 750px;

  @media screen and (max-width: 60em) {
    height: 100vh;
    overflow: hidden;
  }
}

.logo-big {
  width: 60rem;

  @media screen and (max-width: 60em) {
    width: 100%;
  }
}

.country {
  font-size: 5em;
  line-height: 127px;
  background-color: white;
  color: #051031;
  margin: 0 0 0 2rem;
  box-sizing: border-box;
  letter-spacing: 0.1em;

  &:before {
    content: 'AR',
  }

  @media screen and (max-width: 60em) {
    width: 100%;
    font-size: 2em;
    line-height: 60px;
    margin: 2rem 0 3rem;
    letter-spacing: 0.2em;

    &:before {
      content: 'ARGENTINA'
    }
  }
  @media screen and (max-width: 20em) {
    font-size: 1.5em;
letter-spacing: 0.1em;
  }
}

.square {
  display: block;
  width: 50%;
  height: 450px;
  position: absolute;
  z-index: 3;

  @media screen and (max-width: 60em) {
    display: none;
  }
}

.bg-hero {
  background-image: url("/hero-nodeconf.jpg");
  background-size: cover;
  width: 100%;
  height: 62%;

  @media screen and (max-width: 60em) {
    height: 55%;
  }
}

.arrow {
  position: absolute;
  width: 30px;
  height: 30px;
  bottom: 10rem;
  right: 3rem;

  @media screen and (max-width: 60em) {
    position: relative;
    bottom: 0;
    right: 0;
    left: 0;
  }
}
</style>