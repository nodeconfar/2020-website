<template>
  <header id="header" class="fixed z-999 w-100" role="banner">
   <div class="container center">
      <div id="desktop-menu" class="dn-ms ph3">
        <div class="flex justify-between items-center">
           <a href="/" class="link"><span class="logo"></span></a>
          <nav class="items-center flex tracked">
            <a v-scroll-to="'/#about'" class="blue-node link f6 pa3 dib ttu">about</a>
            <a href="/speakers" class="blue-node link f6 pa3 dib ttu">speakers</a>
            <a v-scroll-to="'/#schedule'" class="blue-node link f6 pa3 dib ttu">schedule</a>
            <a v-scroll-to="'/#sponsors'" class="blue-node link f6 pa3 dib ttu">sponsors</a>
          </nav>
        </div>
      </div>

      <div class="dn ph3">
        <div class="flex justify-between items-center pv3">
          <a href="/" target="_blank" rel="noopener"><img src="/nodeconf-icon.svg" alt="nodeconf" class="logo-m"></a>
          <div class="dropdown">
            <button class="dropbtn" aria-label="Toggle Menu"><img src="/menu.svg"></button>
            <nav class="dropdown-menu ph3" id="drop-menu">
              <a v-scroll-to="'/#about'" class="blue-node link db ttu pv3">about</a>
              <a v-scroll-to="'/speakers'" class="blue-node link db ttu pv3">speakers</a>
              <a v-scroll-to="'/#schedule'" class="blue-node link db ttu pv3">schedule</a>
              <a v-scroll-to="'/#about'" class="blue-node link db ttu pv3">about</a>
            </nav>
          </div>

        </div>
      </div>
    </div>
  </header>
</template>

<script>
// Dropdown Menu
function menuMob() {
  const toggle = document.querySelector(".dropbtn");
  const topNav = document.querySelector(".dropdown-menu");

  toggle.addEventListener('click', function () {
    topNav.classList.toggle("show");
  }, false);
}

function scrollFunction() {
   const element = document.getElementById("desktop-menu");
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    element.classList.add("w-icon");
  } else {
    element.classList.remove("w-icon");
  }
}

export default {
  mounted () {
    window.onscroll = () => scrollFunction()

    menuMob()
  }
}
</script>

<style lang="scss" scoped>
   header {
     .logo-m {
       width: 30px;
       height: 40px;
     }

     nav a {
       cursor: pointer;
            display: none;
     }

     #desktop-menu {
       transition: 0.2s;
       height: 3rem;
       padding: 1.4rem 0 0.7rem;

       .logo {
         width: 30px;
         height: 40px;
         background: url("/nodeconf-icon.svg");
         background-size: 30px 40px;
         display: block;
       }

       &.w-icon {
         height: 5rem;
         padding: 1rem 0;

         .logo {
           width: 260px;
           height: 40px;
           background: url("/nodeconf-logo.svg");
           background-size: 260px 40px;
         }
       }
     }

     .dropdown {
       .dropbtn {
         position: relative;
         display: block;
         background: transparent;
         border: none;
         width: 25px;
         padding: 0;
       }

       .dropdown-menu {
         font-size: 1.2em;
         display: none;
         position: absolute;
         width: 100%;
         left: 0;
         top: 100%;
         overflow: auto;
         z-index: 2;
         background-color: rgba($color: #0c005f, $alpha: .6)
       }

       #drop-menu.show {
         display: block;
       }
     }
   }
</style>
