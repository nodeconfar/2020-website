  <template>
    <div>
      <div class="flex vh-100 bg-blue-node">
        <div class="container center relative ph3 self-center z-5">
          <div class="w-100">
            <div class="mt5-l">
              <h1 class="logo-big mv0"><img src="nodeconf-logo-big.svg" alt="nodeconf"></h1>
              <p class="white year mv0">2020</p>
            </div>
            <div class="tr-l tc">
              <p class="f2 ttu bg-green-node blue-node ttu dib ph3 pv2 mv0">OCT. 9th & 10th</p>
              <p class="mv0"><a href="https://goo.gl/maps/EnygTg2SvyD2" target="_black" rel="noopener"
                  class="f2 fw9 ttu link go-map relative">c.c konex
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
.logo-big {
  width: 70rem;

  @media screen and (max-width: 60em) {
    width: 100%;
  }
}

.year {
  font-size: 7rem;

  @media screen and (max-width: 60em) {
    text-align: center;
  }
}

.square {
  display: block;
  width: 40%;
  height: 500px;
  position: absolute;
  z-index: 3;
}

.bg-hero {
  background-image: url("/hero-nodeconf.jpg");
  background-size: cover;
  width: 100%;
  height: 60%;
}
</style>

<script>
</script>




