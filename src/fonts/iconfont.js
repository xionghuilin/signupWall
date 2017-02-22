;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-lambda_ic_fullscreen" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M603.648 439.46496l148.992-148.48-0.512 84.13696a12.44672 12.44672 0 0 0 12.416 12.928h8.92416a12.01152 12.01152 0 0 0 12.928-11.38688l0.4096-125.28128 0.2048-6.656a11.70944 11.70944 0 0 0-2.97472-8.92416 11.9808 11.9808 0 0 0-8.92928-3.584l-6.35904 0.1024a0.37376 0.37376 0 0 0-0.3072 0.1024l-124.25728-0.512a13.37856 13.37856 0 0 0-12.928 13.0304v8.92416a14.17216 14.17216 0 0 0 14.57152 12.928l81.87904 0.2048-148.57216 147.968a17.33632 17.33632 0 0 0 0 24.51968 17.15712 17.15712 0 0 0 24.5248 0z m-187.78112 139.9552l-149.08416 147.968 0.512-83.72736a12.45184 12.45184 0 0 0-12.416-12.928h-9.44128a12.01152 12.01152 0 0 0-12.928 11.392l-0.4096 125.3632-0.2048 6.656a11.7248 11.7248 0 0 0 2.97472 8.92928 11.9808 11.9808 0 0 0 8.92928 3.584l6.35904-0.1024a0.37888 0.37888 0 0 0 0.3072-0.1024l124.76928 0.512a13.37344 13.37344 0 0 0 12.928-13.0304v-8.92416a14.16704 14.16704 0 0 0-14.57152-12.928l-81.87904-0.20992 148.48-147.968a17.34144 17.34144 0 0 0 0-24.5248 16.896 16.896 0 0 0-24.31488 0z m370.9184 188.06784l-0.3072-125.38368a12.13952 12.13952 0 0 0-12.928-11.392h-8.92416a12.52352 12.52352 0 0 0-12.42112 12.928l0.512 84.13696-149.0688-148.35712a17.34144 17.34144 0 0 0-24.5248 24.5248l148.48 147.968-81.87904 0.20992a14.336 14.336 0 0 0-14.57152 12.928v8.92416a13.52192 13.52192 0 0 0 12.928 13.0304l124.25728-0.512c0.1024 0 0.2048 0.1024 0.3072 0.1024l6.36416 0.1024a11.33056 11.33056 0 0 0 11.89888-12.5184l-0.1024-6.656zM291.84 266.98752l81.87904-0.2048a14.336 14.336 0 0 0 14.57152-12.928v-8.92928a13.52192 13.52192 0 0 0-12.928-13.0304l-124.87168 0.512c-0.1024 0-0.2048-0.1024-0.3072-0.1024l-6.35904-0.1024a11.33056 11.33056 0 0 0-11.92448 12.53376l0.2048 6.656 0.3072 125.38368a12.07808 12.07808 0 0 0 12.928 11.38688h9.44128a12.50816 12.50816 0 0 0 12.416-12.928l-0.4096-83.72736L415.744 439.56736a17.34144 17.34144 0 1 0 24.51968-24.5248L291.84 266.98752zM509.44 977.92A468.61312 468.61312 0 0 1 327.08096 77.7728a468.608 468.608 0 0 1 364.72832 863.33952A465.6128 465.6128 0 0 1 509.44 977.92z m0-906.36288A437.9904 437.9904 0 0 0 339.01056 912.896a437.98528 437.98528 0 0 0 340.86912-806.912A435.13856 435.13856 0 0 0 509.44 71.57248z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-lambda_ic_music" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M651.81696 244.25472l-29.42464-7.23968-93.43488 379.77088c-61.60896-48.74752-152.81664-25.472-181.76 34.0736-9.44128 19.37408-4.48512 43.19744 0.14848 55.96672 24.7296 68.096 114.176 62.64832 174.00832 9.83552 24.61184-21.72928 32.256-44.89728 46.5408-103.01952l58.03008-235.85792c35.16928 7.5264 84.58752 64.74752 88.26368 106.496 2.31424 26.49088-5.6064 59.12064-23.66464 78.96576-4.608 5.0176-18.47808 21.82656-11.51488 20.5568 12.96384-2.37056 19.18976-7.26528 32.48128-19.6352a131.584 131.584 0 0 0 28.41088-41.92768c51.36896-130.46272-101.22752-172.7744-88.064-278.016M514.56 983.04A468.61312 468.61312 0 0 1 332.20096 82.8928a468.608 468.608 0 0 1 364.72832 863.33952A465.6128 465.6128 0 0 1 514.56 983.04z m0-906.36288A437.9904 437.9904 0 0 0 344.13056 918.016a437.98528 437.98528 0 0 0 340.86912-806.912 435.13856 435.13856 0 0 0-170.43968-34.41152z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-lambda_ic_eye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M513.90464 361.58464c126.62272 0 212.2752 118.07232 234.84928 152.96512-22.57408 34.9696-108.21632 152.99072-234.80832 152.99072-126.70464 0-211.456-118.22592-233.63584-153.0112 22.13888-34.816 106.57792-152.94464 233.59488-152.94464m0-40.8576c-147.36896 0-242.44736 131.584-268.07808 171.88352a40.8576 40.8576 0 0 0 0.03584 43.88864c25.72288 40.32512 121.07776 171.89888 268.0832 171.89888 146.88256 0 243.13344-131.40992 269.1328-171.68896a40.84736 40.84736 0 0 0 0-44.34944c-26.04544-40.26368-122.43456-171.63264-269.15328-171.63264z m0.64512 299.48928a105.62048 105.62048 0 1 1 105.62048-105.61536 105.72288 105.72288 0 0 1-105.61024 105.61536z m0-171.52a65.90976 65.90976 0 1 0 65.90976 65.90976A65.98144 65.98144 0 0 0 514.56 448.6912zM514.56 983.04A468.61312 468.61312 0 0 1 332.20096 82.8928a468.608 468.608 0 0 1 364.72832 863.33952A465.6128 465.6128 0 0 1 514.56 983.04z m0-906.36288A437.9904 437.9904 0 0 0 344.13056 918.016a437.98528 437.98528 0 0 0 340.86912-806.912 435.12832 435.12832 0 0 0-170.43968-34.41152z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)