  <template>
    <div>
      <div class="flex vh-hero bg-blue-node">
        <div class="container center relative ph3 self-center z-5">
          <div class="w-100">
            <div class="mt5-l">
              <h1 class="dn-ms logo-big mv0"><img src="nodeconf-logo-big.svg" alt="nodeconf"></h1>
              <h1 class="dn-l logo-big mv0"><img src="nodeconf-logo-big-m.svg" alt="nodeconf"></h1>
              <p class="year mt0">2020</p>
            </div>
            <div class="tr">
              <p class="f2-l f3 ttu bg-green-node blue-node ttu dib ph3 pv2 mv0">OCTOBER 9th & 10th</p>
              <p class="mt2 mb0"><a href="https://goo.gl/maps/EnygTg2SvyD2" target="_black" rel="noopener"
                  class="f2-l f3 fw9 ttu link go-map relative">c.c. konex
                  <span class="tooltip fw7 ttu">see map</span>
                </a>
              </p>
            </div>
          </div>
                  </div>
                  <span class="square bg-blue-node"></span>
          <div class="bg-hero bottom-0 absolute z-2"></div>
      </div>
    </div>
  </template>

<style lang="scss" scoped>
.vh-hero {
  height: 100vh;
  @media screen and (max-width: 60em) {
    height: calc(100vh - 100px);
    overflow: hidden;
  }
  
}
.logo-big {
  width: 70rem;

  @media screen and (max-width: 60em) {
    width: 100%;
  }
}

.year {
  font-size: 7rem;
  color: white;
  margin-bottom: 1rem;
  @media screen and (max-width: 60em) {
    font-size: 4rem;
    color: #adcb2b;
    margin-bottom: 3rem;
  }
}

.square {
  display: block;
  width: 40%;
  height: 500px;
  position: absolute;
  z-index: 3;
  @media screen and (max-width: 60em) {
   height: 65%;
   width: 60%;
  }
}

.bg-hero {
  background-image: url("/hero-nodeconf.jpg");
  background-size: cover;
  width: 100%;
  height: 60%;
    @media screen and (max-width: 60em) {
      height: 55%;
    }
}
</style>

<script>
</script>




