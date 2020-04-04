 <template>
     <div class="bg-green-node blue-node">
         <div class="container center ph3 flex flex-wrap items-center justify-betweeen-l justify-center">
             <div class="w-50-l w-100 nt5-l nt3 pl5-l ph4">
                 <p class="editions white bg-blue-node f6 fw7 ttu pv2 ph3 dib"><span class="pr4-l pr3">previous
                         editions</span>
                     <a href="https://2018.nodeconfar.com" class="link pr3-l pr2 green-node hover-white" target="_blank"
                         rel="noopener">2018</a>
                     <a href="https://2017.nodeconfar.com" class="link pr3-l pr2 green-node hover-white" target="_blank"
                         rel="noopener">2017</a>
                     <a href="https://2016.nodeconfar.com" class="link green-node hover-white" target="_blank"
                         rel="noopener">2016</a>

                 </p>
             </div>
             <div class="w-50-l w-100 pl5-l ph4 pv5 flex items-center flex-wrap">
                 <div class="pr3">
                     <h3 class="f3 mv0 ttu">stay</h3>
                     <h3 class="f3 mv0 ttu tl-ns tc">up to date</h3>
                 </div>
                 <form class="mc-form" method="post"
                     action="https://nodeconf.us12.list-manage.com/subscribe/post?u=41bf527ccce1656057feaf22f&amp;id=71ba118ecb"
                     target="_blank" novalidate>
                     <label class="hidden" for="subscribe-email">Subscribe</label>
                     <input class="mc-input" type="email" name="EMAIL" value="" placeholder="you@company.com"
                         id="subscribe-email" required>
                     <div class="mc-protection" aria-hidden="true">
                         <input type="text" name="b_41bf527ccce1656057feaf22f_71ba118ecb" tabindex="-1" value="">
                     </div>
                     <button type="submit" name="subscribe" value="" class="mc-submit" aria-label="Send">
                         <img src="arrow.svg" alt="submit">
                     </button>
                 </form>
             </div>
         </div>
     </div>
 </template>

<style lang="scss" scoped>
.mc-form,
.editions {
    max-width: 21rem;

    input {
        border-radius: 0;
    }
}

.mc-submit {
    border: none;
    color: white;
    background-color: #040b23;
    text-align: center;
    padding: 2px;
    height: 3.5rem;
    width: 3rem;
    text-transform: uppercase;
    float: left;
    transition: all .15s ease-in;
    text-align: center;
    cursor: pointer;
        &:hover {
        background: #040b23;
    }

    img {
        width: 1.5rem;
        height: 1.5rem;
        transform: rotate(270deg)
    }
}


.mc-protection {
    visibility: hidden;
    width: 0;
    float: left
}

.mc-input {
    float: left;
    font-size: 1rem;
    padding-left: 1rem;
    height: 3.5rem;
    line-height: 3.5rem;
    background-color: #040b23;
    border: none;
    color: #fff;
    width: calc(100% - 3.5rem);
    min-width: 17rem;

    @media screen and (max-width: 60em) {
        min-width: 10rem;
    }

    &::placeholder {
        color: white;
    }
}

.hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;

    &.focusable {

        &:active,
        &:focus {
            clip: auto;
            height: auto;
            margin: 0;
            overflow: visible;
            position: static;
            width: auto;
            white-space: inherit;

        }
    }

}
  
  </style>