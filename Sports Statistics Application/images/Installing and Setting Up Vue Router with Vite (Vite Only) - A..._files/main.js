window.BitterBrainsBanner = window.BitterBrainsBanner || {
  isOpen: false,
  countdownInterval: null,
  affiliateKey: null,
  isInitiated: false,
  style: null,
  date: null,
  phases () {
    const baseWinter = {
      name: 'WINTER23',
      classes: ['bb-radioactive', 'winter23'],
      title: 'Get <strong>40% off</strong> Vue School’s Yearly Plan',
      subtitle: 'Winter Vue Sale',
      cta: 'Get Offer',
      link: 'https://vueschool.io/sales/winter23',
      showCountdownLastHours: null,
      overrides: {
        vueschool: {
          link: '/sales/winter23',
        }
      }
    }

    const winter23 = [
      {
        ...baseWinter,
        ends: '2023-02-20T23:59:59+01:00',
        showCountdown: false
      },
      {
        ...baseWinter,
        ends: '2023-02-26T23:59:59+01:00',
        showCountdown: true
      },
      {
        ...baseWinter,
        ends: '2023-02-28T23:59:59+01:00',
        showCountdown: true
      }
    ]

    return [...winter23]
  },
  activePhase: null,
  affiliateKeys: {
    // TESTING
    'html.local': 'testing',
    'localhost:3000': 'testing',
    'staging.vueschool.io': 'testing',
    'alpha.vueschool.io': 'testing',

    // PRODUCTION
    'nuxt.com': 'nuxt',
    'nuxtjs.org': 'nuxt',
    'v3.nuxtjs.org': 'nuxt',
    'vueschool.io': 'vueschool',
    'vuejsdevelopers.com': 'vuejsdevelopers',
    'michaelnthiessen.com': 'michaelnthiessen',
    'vuejsfeed.com': 'vuejsfeed',
    'masteringnuxt.com': 'masteringnuxt',
    'vueuse.org': 'vueuse',
    'pinia.vuejs.org': 'vuerouter',
    'router.vuejs.org': 'vuerouter',
    'vuetifyjs.com': 'vuetify',
    'learnvue.co': 'learnvue'
  },
  allowList: {
    'masteringnuxt': path => path === '/' || path === '/nuxt2' || path === '/nuxt3',
    'vueschool': path => path === '/' || path.startsWith('/courses') || path.startsWith('/articles') || path.startsWith('/lessons')
  },
  parsePhase (phase) {
    const now = this.date
    const remaining = new Date(phase.ends) - now
    const countdownRemaining = new Date(phase.countdownEnds || phase.ends) - now
    const isLastHours = remaining < 1000 * 60 * 60 * 48
    const showCountdown = phase.showCountdown || (phase.showCountdownLastHours && isLastHours)
    const closedKey = `${phase.name}_CLOSED`
    const override = phase.overrides && phase.overrides[this.affiliateKey] ? phase.overrides[this.affiliateKey] : {}

    return { ...phase, remaining, isLastHours, showCountdown, closedKey, countdownRemaining, ...override }
  },
  setDate () {
    const query = new URLSearchParams(window.location.search)
    if (query.has('date') && query.has('hour')) {
      this.date = new Date(`${query.get('date')}T${query.get('hour')}:00:00+01:00`)
      return
    }

    this.date = new Date()
  },
  setActivePhase () {
    this.activePhase = this.phases().map(phase => this.parsePhase(phase)).find(phase => phase.remaining > 0)
  },
  setAffiliateKey () {
    this.affiliateKey = window.BitterBrainsAffiliateKey || this.affiliateKeys[this.host] || ''
  },
  setHost () {
    this.host = window.BitterBrainsAffiliateHost || window.location.host || ''
  },
  render () {
    const { title, subtitle, cta, link, classes, showCountdown } = this.activePhase
    const countdown = showCountdown ? `<div class="bb-countdown">${this.renderCountdown()}</div>` : ''

    const template = `
      <div class="bb-background"></div>
      <div class="bb-logo"></div>
      <div class="bb-core">
        <div class="bb-slogan">
          <div class="bb-title">${title}</div>
          <div class="bb-subtitle">${subtitle}</div>
        </div>
        ${countdown}
        <div class="bb-button-wrapper">
          <div class="bb-button">${cta}</div>
        </div>
      </div>
      <div id="bb-close" class="bb-close">&times;</div>
    `

    const el = document.createElement('a')
    el.setAttribute('id', 'bb-banner')
    let affiliateParam = ''

    if (!['testing', 'vueschool'].includes(this.affiliateKey)) {
      el.setAttribute('target', '_blank')
      affiliateParam = `&friend=${this.affiliateKey}`
    }

    el.setAttribute('href', `${link}?utm_source=${this.affiliateKey}&utm_medium=website&utm_campaign=affiliate&utm_content=top_banner${affiliateParam}`)
    el.classList.add(...classes)
    el.innerHTML = template
    this.addBodyClasses()

    const container = document.getElementById('bb-banner-container') || document.body
    container.appendChild(el)

    addEventListener('popstate', (event) => {
      this.handleNavigation()
    })

    window.history.pushState = new Proxy(window.history.pushState, {
      apply: (target, thisArg, argumentsList) => {
        const output = target.apply(thisArg, argumentsList)
        this.handleNavigation()
        return output
      }
    })
  },
  handleNavigation () {
    this.addBodyClasses()
  },
  addBodyClasses () {
    if (!this.isOpen) return
    const root = document.getElementsByTagName('html')[0]
    root.classList.add('has-bb-banner')

    const container = document.getElementById('bb-banner-container')
    if (container) root.classList.add('has-bb-banner-container')

    const host = this.host
    const path = window.location.pathname || '/'

    if (host) root.classList.add(host.replace(/\./g, '_'))

    if (!this.allowList[this.affiliateKey] || this.allowList[this.affiliateKey](path)) {
      root.classList.remove('bb-banner-hidden')
    } else {
      root.classList.add('bb-banner-hidden')
    }
  },
  renderCountdown () {
    const { isLastHours, showDaysAsHours } = this.activePhase

    const parts = ['hours', 'minutes', 'seconds']
    if (!isLastHours && !showDaysAsHours) parts.unshift('days')
    return parts.map(part => this.renderCountdownPart(part)).join('')
  },
  renderCountdownPart (part) {
    return `
      <div class="bb-countdown-item">
        <div class="bb-countdown-part">
          <div data-countdown="${part}" class="bb-countdown-number"></div><div class="bb-countdown-text"><span class="bb-countdown-text-initial">${part[0]}</span><span>${part.substring(1)}</span></div>
        </div>
        <div class="bb-countdown-colon">:</div>
      </div>
    `
  },
  addCss () {
    const style = document.createElement('style')
    style.textContent = window.BitterBrainsBanner.style
    document.head.appendChild(style)
  },
  close () {
    document.getElementById('bb-banner').remove()
    const root = document.getElementsByTagName('html')[0]
    root.classList.remove('has-bb-banner')
    clearInterval(this.countdownInterval)
    this.isOpen = false
  },
  bindCloseButton () {
    document.getElementById('bb-close').addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()
      this.close()
      localStorage.setItem(this.activePhase.closedKey, 1)
    })
  },
  startCountdown () {
    if (this.activePhase.countdownRemaining < 0) return
    this.updateCountdown()

    this.countdownInterval = setInterval(() => {
      this.activePhase.countdownRemaining -= 1000
      if (this.activePhase.countdownRemaining > 0) {
        this.updateCountdown()
      } else {
        this.close()
      }
    }, 1000)
  },
  updateCountdown () {
    if (!this.isOpen) return

    const { countdownRemaining, isLastHours, showDaysAsHours } = this.activePhase

    const parts = {
      days: Math.floor(countdownRemaining / (1000 * 60 * 60 * 24)),
      hours: Math.floor(countdownRemaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
      minutes: Math.floor(countdownRemaining % (1000 * 60 * 60) / (1000 * 60)),
      seconds: Math.floor(countdownRemaining % (1000 * 60) / 1000)
    }

    if (isLastHours || showDaysAsHours) {
      parts.hours = parts.hours + (parts.days * 24)
      delete parts.days
    }

    Object.entries(parts).forEach(([key, value]) => {
      document.querySelector(`[data-countdown=${key}]`).textContent = value.toString().padStart(2, '0')
    })
  },
  init () {
    this.setDate()
    this.setHost()
    this.setAffiliateKey()

    if (!['testing', 'vueschool', 'vuejsdevelopers', 'vuejsfeed'].includes(this.affiliateKey)) {
      return
    }

    this.setActivePhase()
    if (!this.activePhase || localStorage.getItem(this.activePhase.closedKey) || this.isInitiated) return
    this.isOpen = true
    this.isInitiated = true
    const stateCheck = setInterval(() => {
      if (document.readyState === 'complete') {
        clearInterval(stateCheck)

        this.addCss()
        this.render()
        this.bindCloseButton()
        if (this.activePhase.showCountdown) this.startCountdown()
      }
    }, 100)
  }
}

window.BitterBrainsBanner.style = `
html.has-bb-banner {
  margin-top: 72px;
}

html.has-bb-banner.bb-banner-hidden {
  margin-top: 0;
}

html.has-bb-banner.bb-banner-hidden #bb-banner {
  display: none;
}

#bb-banner {
  height: 72px;
  position: fixed;
  z-index: 60;
  top: 0;
  left: 0;
  right: 0;
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto, Arial, sans-serif;
  background: #000;
  overflow: hidden;
  line-height: 18px;
}

#bb-banner * {
  font-family: Roboto, Arial, sans-serif;
}

#bb-banner .bb-logo {
  width: 30px;
  height: 19px;
  left: 16px;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
}

#bb-banner .bb-close {
  font-family: sans-serif;
  color: white;
  position: absolute;
  top: 29px;
  right: 12px;
  line-height: 0;
  font-size: 24px;
  height: 14px;
  width: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#bb-banner .bb-background {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

#bb-banner .bb-core {
  display: flex;
  align-items: center;
  text-align: center;
  gap: 6px;
  position: relative;
  z-index: 10;
  flex-direction: column;
}

#bb-banner .bb-core .bb-slogan {
  width: 240px;
}

#bb-banner .bb-core .bb-title {
  font-size: 14px;
  font-weight: bold;
  color: #00dc82;
}

#bb-banner .bb-core .bb-subtitle {
  color: #FFF;
  font-size: 12px;
}

#bb-banner .bb-core .bb-button-wrapper .bb-button {
  border-radius: 6px;
  font-weight: bold;
  color: #000;
  background: white;
  font-size: 14px;
  padding: 14px 8px;
  white-space: nowrap;
}

#bb-banner .bb-core .bb-countdown {
  align-items: center;
  gap: 4px;
  line-height: 1;
  display: flex;
  font-weight: bold;
  font-size: 12px;
  color: #00dc82;
}

#bb-banner .bb-core .bb-countdown .bb-countdown-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

#bb-banner .bb-core .bb-countdown .bb-countdown-item .bb-countdown-part > div {
  display: inline;
}

#bb-banner .bb-core .bb-countdown .bb-countdown-item:last-child .bb-countdown-colon {
  display: none;
}

#bb-banner .bb-core .bb-countdown .bb-countdown-item .bb-countdown-part .bb-countdown-text .bb-countdown-text-initial~span {
  display: none;
}

@media (min-width: 768px) {
  #bb-banner .bb-close {
    right: 24px;
  }

  #bb-banner .bb-core {
    gap: 12px;
    flex-direction: row;
  }

  #bb-banner .bb-core .bb-slogan {
    width: auto;
  }

  #bb-banner .bb-core .bb-title {
    margin-top: 4px;
    font-size: 18px;
  }

  #bb-banner .bb-core .bb-subtitle {
    margin-top: 4px;
    font-size: 16px;
  }

  #bb-banner .bb-core .bb-button-wrapper {
    display: block;
  }

  #bb-banner .bb-core .bb-button-wrapper .bb-button {
    font-size: 18px;
  }

  #bb-banner .bb-core .bb-countdown {
    font-weight: normal;
    font-size: inherit;
  }

  #bb-banner .bb-core .bb-countdown .bb-countdown-item .bb-countdown-part {
    border-radius: 2px;
    padding: 4px 0;
    text-align: center;
    width: 42px;
    background: rgba(255, 255, 255, 0.1);
  }

  #bb-banner .bb-core .bb-countdown .bb-countdown-item .bb-countdown-part > div {
    display: block;
  }

  #bb-banner .bb-core .bb-countdown .bb-countdown-item .bb-countdown-part .bb-countdown-number {
    font-size: 28px;
    font-weight: 500;
    line-height: 28px;
  }

  #bb-banner .bb-core .bb-countdown .bb-countdown-item .bb-countdown-part .bb-countdown-text {
    font-size: 8px;
    text-transform: uppercase;
  }

  #bb-banner .bb-core .bb-countdown .bb-countdown-item .bb-countdown-part .bb-countdown-text .bb-countdown-text-initial~span {
    display: inline;
  }

  #bb-banner .bb-core .bb-countdown .bb-countdown-item .bb-countdown-colon {
    font-weight: bold;
  }
}

@media (min-width: 1280px) {
  #bb-banner .bb-logo {
    width: 152px;
    left: 24px;
  }

  #bb-banner .bb-core {
    gap: 32px;
  }
}

html.has-bb-banner.has-bb-banner-container {
  margin-top: 0;
}

html.has-bb-banner #bb-banner-container #bb-banner {
  position: relative;
}

html.has-bb-banner #bb-banner-container #bb-banner .bb-close {
  display: none;
}

/*
THEMES
**********************************************************************/

/* Radioactive */

#bb-banner.bb-radioactive {
  background: #202229;
}

#bb-banner.bb-radioactive .bb-background {
  background-size: cover;
  background-image: url("https://vueschool.io/images/banners/assets/VUEJSNATION23/wave.svg");
}

#bb-banner.bb-radioactive .bb-core .bb-slogan {
  width: 280px;
}

#bb-banner.bb-radioactive .bb-core .bb-title {
  font-size: 14px;
  color: #00DC82;
}

#bb-banner.bb-radioactive .bb-core .bb-subtitle {
  font-size: 11px;
}

#bb-banner.bb-radioactive .bb-core .bb-button-wrapper {
  display: none;
}

@media (min-width: 768px) {
  #bb-banner.bb-radioactive .bb-core {
    gap: 10px;
  }

  #bb-banner.bb-radioactive .bb-core .bb-slogan {
    width: 330px;
  }

  #bb-banner.bb-radioactive .bb-core .bb-title {
    font-size: 16px;
  }

  #bb-banner.bb-radioactive .bb-core .bb-subtitle {
    font-size: 14px;
    margin-top: 7px;
  }

  #bb-banner.bb-radioactive .bb-core .bb-button-wrapper {
    display: inline-block;
  }

  #bb-banner.bb-radioactive .bb-core .bb-button-wrapper .bb-button {
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: linear-gradient(45deg, #01BD6F 0%, #628AED 100%);
    color: #FFF;
    border-radius: 6px;
  }

  #bb-banner.bb-radioactive:hover .bb-core .bb-button-wrapper .bb-button {
    box-shadow: 0 0 40px rgba(39, 209, 196, 0.5);
  }
}

@media (min-width: 1280px) {
  #bb-banner.bb-radioactive .bb-core {
    gap: 18px;
    margin-left: 0;
  }
}

/*
CAMPAIGN CUSTOMIZATION
**********************************************************************/

/* Vue Js Nation */

#bb-banner.vuejsnation23 .bb-logo {
  background-image: url("https://vueschool.io/images/banners/assets/VUEJSNATION23/mark.svg");
  width: 30px;
  height: 25px;
}

@media (min-width: 1280px) {
  #bb-banner.vuejsnation23 .bb-logo {
    background-image: url("https://vueschool.io/images/banners/assets/VUEJSNATION23/logo.svg");
    width: 140px;
    height: 25px;
  }
}

/* Vue Js Amsterdam */

#bb-banner.vuejsamsterdam23 .bb-logo {
  background-image: url("https://assets.jsworldconference.com/logo_vuejs_amsterdam_b4b41918cb.svg");
  width: 30px;
  height: 25px;
}

@media (min-width: 1280px) {
  #bb-banner.vuejsamsterdam23 .bb-logo {
    background-image: url("https://img2.storyblok.com/0x0/f/84560/2388x414/8a37b5a2d3/vue-amsterdam-with-name-white.png");
    width: 210px;
    height: 35px;
  }
}

/* Valentine */

#bb-banner.valentines23 {
  background: #211f2d;
}

#bb-banner.valentines23 .bb-background {
  background-image: url("https://vueschool.io/images/banners/assets/VALENTINES23/bg-mobile.png");
}

#bb-banner.valentines23 .bb-core .bb-title {
  background: linear-gradient(90deg, #FF7C9C 1.33%, #855AFF 103.83%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

#bb-banner.valentines23 .bb-core .bb-subtitle {
  color: #FFF;
}

#bb-banner.valentines23 .bb-core .bb-countdown {
  color: #FF3263;
}

#bb-banner.valentines23 .bb-core .bb-button-wrapper .bb-button {
  background: linear-gradient(60.74deg, #FD3265 5.98%, #941180 83.42%);
  padding: 12px 30px;
  border-radius: 56px;
}

#bb-banner.valentines23 .bb-logo {
  background-image: url("https://vueschool.io/images/mark-vueschool-original.svg");
  width: 35px;
  height: 35px;
}

@media (min-width: 768px) {
  #bb-banner.valentines23 .bb-background {
    background-image: url("https://vueschool.io/images/banners/assets/VALENTINES23/bg-tablet.png");
  }

  #bb-banner .bb-core .bb-countdown .bb-countdown-item .bb-countdown-part {
    background: rgba(255, 50, 99, 0.2);
  }
}

@media (min-width: 1280px) {
  #bb-banner.valentines23 .bb-logo {
    background-image: url("https://vueschool.io/images/logo-vueschool-original.svg");
    width: 126px;
    height: 40px;
  }

  #bb-banner.valentines23 .bb-background {
    background-image: url("https://vueschool.io/images/banners/assets/VALENTINES23/bg-desktop.png");
  }
}

/* Winter */

#bb-banner.winter23 {
  background: #285caa;
}

#bb-banner.winter23 .bb-core .bb-countdown {
  color: #FFF;
}

#bb-banner.winter23 .bb-core .bb-button-wrapper .bb-button {
  background: linear-gradient(360deg, #9CC1FF 29.05%, #FFFFFF 83.81%);
  color: #202328;
  border-radius: 40px;
  padding: 12px 30px;
}

#bb-banner.winter23:hover .bb-core .bb-button-wrapper .bb-button {
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
}

#bb-banner.winter23 .bb-core .bb-title {
  font-size: 9px;
  font-weight: normal;
  color: #9CC1FF;
  text-transform: uppercase;
  font-weight: bold;
}

#bb-banner.winter23 .bb-core .bb-title strong {
  color: #0BD88F;
}

#bb-banner.winter23 .bb-core .bb-subtitle {
  color: #FFF;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;

  background: linear-gradient(360deg, #9CC1FF 29.05%, #FFFFFF 83.81%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

#bb-banner.winter23 .bb-logo {
  background-image: url("https://vueschool.io/images/mark-vueschool-original.svg");
  width: 35px;
  height: 35px;
}

#bb-banner.winter23 .bb-background {
  background-image: url("https://vueschool.io/images/banners/assets/WINTER23/bg-mobile.png");
}

@media (min-width: 768px) {
  #bb-banner.winter23 .bb-core .bb-title {
    font-size: 12px;
  }

  #bb-banner.winter23 .bb-core .bb-subtitle {
    font-size: 23px;
  }

  #bb-banner.winter23 .bb-background {
    background-image: url("https://vueschool.io/images/banners/assets/WINTER23/bg-tablet.png");
  }
}

@media (min-width: 1280px) {
  #bb-banner.winter23 .bb-core .bb-slogan {
    width: 400px;
  }

  #bb-banner.winter23 .bb-core .bb-title {
    font-size: 16px;
  }

  #bb-banner.winter23 .bb-background {
    background-image: url("https://vueschool.io/images/banners/assets/WINTER23/bg-desktop.png");
  }

  #bb-banner.winter23 .bb-logo {
    background-image: url("https://vueschool.io/images/logo-vueschool-original.svg");
    width: 126px;
    height: 40px;
  }
}

html.has-bb-banner.vueschool_io #bb-banner.winter23 .bb-logo {
  display: none;
}

/*
EXTRA STYLES FOR AFFILIATES
**********************************************************************/

/* Nuxt Website */

html.has-bb-banner.nuxtjs_org .d-header,
html.has-bb-banner.nuxtjs_org .d-header-home {
  top: 72px;
}

html.has-bb-banner.nuxtjs_org .top-header {
  top: calc(var(--header-height) + 72px);
}

/* Nuxt 3 Website */

html.has-bb-banner.v3_nuxtjs_org header {
  top: 72px;
}

html.has-bb-banner.v3_nuxtjs_org .top-header {
  top: calc(var(--header-height) + 72px);
}

@media (min-width: 1024px) {
  html.has-bb-banner.v3_nuxtjs_org .lg\\:top-header {
    top: calc(var(--header-height) + 72px);
  }
}

/* Vue Use */

html.has-bb-banner.vueuse_org {
  margin-top: 0;
}

html.has-bb-banner.vueuse_org #bb-banner {
  bottom: 0;
  top: auto;
}

/* Pinia */

html.has-bb-banner.pinia_vuejs_org .theme,
html.has-bb-banner.pinia_vuejs_org .theme .nav-bar,
html.has-bb-banner.pinia_vuejs_org .theme .sidebar,
html.has-bb-banner.pinia_vuejs_org .theme .page {
  margin-top: 72px;
}

/* Router */

html.has-bb-banner.router_vuejs_org .theme,
html.has-bb-banner.router_vuejs_org .theme .nav-bar,
html.has-bb-banner.router_vuejs_org .theme .sidebar,
html.has-bb-banner.router_vuejs_org .theme .page {
  margin-top: 72px;
}

/* Vuetify */

html.has-bb-banner.vuetifyjs_com #app-bar {
  margin-top: 72px !important;
}

@media (min-width: 768px) {
  html.has-bb-banner.vuetifyjs_com #app-bar {
  margin-top: 144px !important;
  }

  html.has-bb-banner.vuetifyjs_com #default-toc,
  html.has-bb-banner.vuetifyjs_com #default-drawer,
  html.has-bb-banner.vuetifyjs_com .v-system-bar.v-system-bar--fixed {
    margin-top: 72px !important;
  }
}

/* Vite Press */

html.has-bb-banner.pinia_vuejs_org {
  scroll-padding-top: 134px;
  overflow: auto;
}

html.has-bb-banner .VPNav,
html.has-bb-banner .VPSidebar,
html.has-bb-banner .VPDoc.has-sidebar.has-aside .aside-container {
  top: 72px;
}
`

try {
  window.BitterBrainsBanner.init()
} catch (e) {
  console.warn('Error when trying to render top banner')
}
