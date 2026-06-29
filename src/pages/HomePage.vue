<template>
  <div class="nwc-anim" style="--accent: #1C857B; position:relative; background:#FAF2CD; color:#17150F; font-family:'Archivo',sans-serif; min-height:100vh; overflow-x:hidden; -webkit-font-smoothing:antialiased;">

    <!-- Grain overlay -->
    <div aria-hidden="true" class="nwc-grain" :style="{ backgroundImage: grainBg }"></div>

    <!-- ==================== HEADER ==================== -->
    <header id="top" style="position:sticky; top:0; z-index:8000; display:flex; align-items:center; justify-content:space-between; gap:24px; padding:18px clamp(20px,5vw,72px); background:rgba(250,242,205,0.82); backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px); border-bottom:1px solid rgba(23,21,15,0.12);">
      <a href="#top" style="display:flex; align-items:center; gap:14px; text-decoration:none; color:#17150F;">
        <img :src="logoSrc" alt="NightWolfe Cinema" style="width:42px; height:42px; object-fit:contain; flex:none;" />
        <span style="display:flex; flex-direction:column; line-height:1;">
          <span style="font-family:'Newsreader',serif; font-weight:700; font-size:20px; letter-spacing:0.01em;">NightWolfe</span>
          <span style="font-family:'Space Mono',monospace; font-size:9.5px; letter-spacing:0.42em; text-transform:uppercase; color:#8A8470; margin-top:3px;">Cinema</span>
        </span>
      </a>
      <nav class="nwc-desktop-nav" style="display:flex; align-items:center; gap:clamp(14px,2.4vw,32px);">
        <a href="#home" data-nav="home" class="nwc-navlink" style="font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.16em; text-transform:uppercase; color:#17150F;">Home</a>
        <a href="#studio" data-nav="studio" class="nwc-navlink" style="font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.16em; text-transform:uppercase; color:#17150F;">Studio</a>
        <a href="#work" data-nav="work" class="nwc-navlink" style="font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.16em; text-transform:uppercase; color:#17150F;">Work</a>
        <a href="#trailers" data-nav="trailers" class="nwc-navlink" style="font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.16em; text-transform:uppercase; color:#17150F;">Trailers</a>
        <a href="#about" data-nav="about" class="nwc-navlink" style="font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.16em; text-transform:uppercase; color:#17150F;">About</a>
        <a href="#contact" data-nav="contact" class="nwc-btn-contact" style="display:inline-flex; align-items:center; gap:8px; font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.16em; text-transform:uppercase; color:#FAF2CD; background:#17150F; padding:11px 18px; border-radius:2px;">Contact</a>
      </nav>
      <button class="nwc-burger" @click="toggleMenu(true)" aria-label="Open menu" style="display:none; align-items:center; justify-content:center; flex-direction:column; gap:5px; width:46px; height:46px; padding:0; background:transparent; border:1px solid rgba(23,21,15,0.22); border-radius:2px;">
        <span style="display:block; width:20px; height:1.5px; background:#17150F;"></span>
        <span style="display:block; width:20px; height:1.5px; background:#17150F;"></span>
        <span style="display:block; width:20px; height:1.5px; background:#17150F;"></span>
      </button>
    </header>

    <!-- ==================== MOBILE MENU ==================== -->
    <div class="nwc-mobile-menu" :class="{ 'nwc-menu-open': menuOpen }" style="position:fixed; inset:0; z-index:8500; background:#14130F; color:#EFE7C8; display:flex; flex-direction:column; padding:24px clamp(20px,6vw,40px) 40px;">
      <div style="display:flex; align-items:center; justify-content:space-between;">
        <span style="display:flex; flex-direction:column; line-height:1;">
          <span style="font-family:'Newsreader',serif; font-weight:700; font-size:20px; color:#FAF2CD;">NightWolfe</span>
          <span style="font-family:'Space Mono',monospace; font-size:9.5px; letter-spacing:0.42em; text-transform:uppercase; color:#8A8470; margin-top:3px;">Cinema</span>
        </span>
        <button @click="toggleMenu(false)" aria-label="Close menu" style="width:46px; height:46px; background:transparent; border:1px solid rgba(239,231,200,0.25); border-radius:2px; color:#EFE7C8; font-size:20px;">✕</button>
      </div>
      <nav style="margin-top:auto; margin-bottom:auto; display:flex; flex-direction:column; gap:6px;">
        <a v-for="item in navItems" :key="item.id" :href="'#' + item.id" @click="toggleMenu(false)" class="nwc-hover-accent" style="display:flex; align-items:baseline; gap:18px; font-family:'Newsreader',serif; font-weight:500; font-size:clamp(40px,12vw,66px); line-height:1.18; text-decoration:none; color:#EFE7C8;">
          <span style="font-family:'Space Mono',monospace; font-size:13px; color:#8A8470; align-self:center;">{{ item.num }}</span>
          <span>{{ item.label }}</span>
        </a>
      </nav>
      <div style="display:flex; flex-direction:column; gap:8px; font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.06em; color:#A8A07E;">
        <a href="mailto:nightwolfecinema@outlook.com" @click="toggleMenu(false)" style="color:#EFE7C8; text-decoration:none;">nightwolfecinema@outlook.com</a>
        <span>Los Angeles · Est. 2023</span>
      </div>
    </div>

    <!-- ==================== HERO ==================== -->
    <section id="home" style="padding:clamp(48px,8vw,104px) clamp(20px,5vw,72px) clamp(28px,4vw,48px); scroll-margin-top:90px; max-width:1400px; margin-left:auto; margin-right:auto;">
      <div class="nwc-reveal" style="display:flex; align-items:center; gap:14px; margin-bottom:clamp(28px,4vw,48px);">
        <span style="width:9px; height:9px; border-radius:50%; background:var(--accent,#1C857B); flex:none;"></span>
        <span style="font-family:'Space Mono',monospace; font-size:13px; letter-spacing:0.24em; text-transform:uppercase; color:#46423A;">Cinematography · Videography · Editing</span>
      </div>
      <h1 class="nwc-reveal" style="margin:0; font-family:'Newsreader',serif; font-weight:500; font-size:clamp(42px,9.2vw,158px); line-height:0.9; letter-spacing:-0.02em; max-width:14ch;">Where visions <span style="font-style:italic; font-weight:600;">howl</span> to life.</h1>
      <div class="nwc-reveal" style="display:flex; flex-wrap:wrap; align-items:flex-end; justify-content:space-between; gap:28px; margin-top:clamp(28px,4vw,52px);">
        <p style="margin:0; max-width:52ch; font-size:clamp(16px,1.4vw,20px); line-height:1.6; color:#3A372E;">NightWolfe Cinema is the studio of <strong style="font-weight:600;">Thomas Rolin</strong> — turning ideas into films that are seen, heard, and felt. Expert camerawork, an editor's eye, and an unwavering pull toward bold, dynamic storytelling.</p>
        <div class="nwc-hero-meta" style="font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.14em; text-transform:uppercase; color:#8A8470; text-align:right; line-height:2;">
          <div>Est. 2023</div>
          <div>Los Angeles</div>
        </div>
      </div>
    </section>

    <!-- ==================== SHOWREEL ==================== -->
    <section class="nwc-reveal" style="width:100%; padding:0 clamp(20px,5vw,72px) clamp(16px,3vw,32px);">
      <div class="nwc-mediacard nwc-showreel-frame" @click="openLightbox({ title: 'Showreel 2025', videoSrc: '/nightwolfecinema.mp4' })" style="position:relative; width:100%; aspect-ratio:21/9; max-height:80vh; border-radius:3px; overflow:hidden; background:#14130F; cursor:pointer;">
        <video autoplay muted loop playsinline style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;" src="/nightwolfecinema.mp4"></video>
        <div style="position:absolute; inset:0; background:linear-gradient(180deg,rgba(20,19,15,0.15) 0%,rgba(20,19,15,0.05) 45%,rgba(20,19,15,0.78) 100%); pointer-events:none;"></div>
        <div style="position:absolute; top:24px; left:24px; display:flex; align-items:center; gap:10px; font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.2em; text-transform:uppercase; color:#EFE7C8; pointer-events:none;">
          <span style="width:8px; height:8px; border-radius:50%; background:#FF3B30;"></span> Rec · Showreel 2025
        </div>
        <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; pointer-events:none;">
          <span style="width:clamp(64px,8vw,96px); height:clamp(64px,8vw,96px); border-radius:50%; background:rgba(250,242,205,0.14); border:1.5px solid rgba(250,242,205,0.55); backdrop-filter:blur(6px); display:flex; align-items:center; justify-content:center;">
            <span style="width:0; height:0; border-style:solid; border-width:13px 0 13px 22px; border-color:transparent transparent transparent #FAF2CD; margin-left:6px;"></span>
          </span>
        </div>
        <div style="position:absolute; bottom:0; left:0; right:0; display:flex; align-items:flex-end; justify-content:space-between; gap:20px; padding:clamp(18px,3vw,34px); pointer-events:none;">
          <div style="font-family:'Newsreader',serif; font-style:italic; font-weight:500; font-size:clamp(22px,3vw,44px); color:#FAF2CD; line-height:1;">The Reel</div>
          <div style="font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.16em; text-transform:uppercase; color:#EFE7C8;">02:34 · 4K</div>
        </div>
      </div>
    </section>

    <!-- ==================== MARQUEE ==================== -->
    <div style="border-top:1px solid rgba(23,21,15,0.13); border-bottom:1px solid rgba(23,21,15,0.13); overflow:hidden; padding:18px 0; margin-top:clamp(20px,3vw,40px);">
      <div style="display:flex; width:max-content; animation:nwc-marquee 26s linear infinite; will-change:transform;">
        <div style="display:flex; align-items:center; flex:none;">
          <span v-for="(w, i) in marqueeWords" :key="'a-' + i" style="display:inline-flex; align-items:center; gap:28px; padding-right:28px; font-family:'Newsreader',serif; font-style:italic; font-weight:500; font-size:clamp(22px,2.6vw,38px); color:#17150F; white-space:nowrap;">
            {{ w }}<span style="color:var(--accent,#1C857B); font-style:normal; font-size:14px;">✦</span>
          </span>
        </div>
        <div style="display:flex; align-items:center; flex:none;" aria-hidden="true">
          <span v-for="(w, i) in marqueeWords" :key="'b-' + i" style="display:inline-flex; align-items:center; gap:28px; padding-right:28px; font-family:'Newsreader',serif; font-style:italic; font-weight:500; font-size:clamp(22px,2.6vw,38px); color:#17150F; white-space:nowrap;">
            {{ w }}<span style="color:var(--accent,#1C857B); font-style:normal; font-size:14px;">✦</span>
          </span>
        </div>
      </div>
    </div>

    <!-- ==================== STUDIO ==================== -->
    <section id="studio" style="padding:clamp(36px,5vw,72px) clamp(20px,5vw,72px); max-width:1400px; margin-left:auto; margin-right:auto; scroll-margin-top:90px;">
      <div style="font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.24em; text-transform:uppercase; color:#8A8470; margin-bottom:clamp(26px,3vw,44px); text-align:center;">( Studio )</div>
      <p class="nwc-reveal" style="margin:0 auto; font-family:'Newsreader',serif; font-weight:400; font-size:clamp(26px,4vw,58px); line-height:1.22; letter-spacing:-0.01em; max-width:20ch; text-align:center;">Every story deserves to be <span style="font-style:italic;">seen, heard, and felt.</span> We shape raw ideas into visual experiences — <span style="color:var(--accent,#1C857B);">bold, dynamic, alive.</span></p>
      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(min(200px,100%),1fr)); gap:clamp(28px,4vw,64px); margin-top:clamp(48px,7vw,96px); border-top:1px solid rgba(23,21,15,0.13); padding-top:clamp(32px,4vw,52px); text-align:center;">
        <div v-for="svc in services" :key="svc.n" class="nwc-reveal">
          <div style="font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.16em; color:#8A8470; margin-bottom:14px;">{{ svc.n }}</div>
          <h3 style="margin:0 0 10px; font-family:'Newsreader',serif; font-weight:600; font-size:clamp(22px,2.2vw,30px);">{{ svc.title }}</h3>
          <p style="margin:0; font-size:15px; line-height:1.6; color:#46423A;">{{ svc.desc }}</p>
        </div>
      </div>
    </section>

    <!-- ==================== WORK ==================== -->
    <section id="work" style="padding:clamp(40px,5vw,72px) clamp(20px,5vw,72px) clamp(72px,11vw,160px); scroll-margin-top:90px; max-width:1400px; margin-left:auto; margin-right:auto;">
      <div class="nwc-reveal" style="display:flex; align-items:flex-end; justify-content:space-between; gap:24px; flex-wrap:wrap; margin-bottom:clamp(36px,5vw,64px);">
        <div>
          <div style="font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.24em; text-transform:uppercase; color:#8A8470; margin-bottom:18px;">01 — Selected Work</div>
          <h2 style="margin:0; font-family:'Newsreader',serif; font-weight:500; font-size:clamp(40px,6.5vw,104px); line-height:0.92; letter-spacing:-0.02em;">My Cinema</h2>
        </div>
        <div style="font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.14em; text-transform:uppercase; color:#8A8470; max-width:26ch; line-height:1.7;">A selection of recent films, edits & motion work.</div>
      </div>
      <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(min(300px,100%),1fr)); gap:clamp(28px,3vw,52px);">
        <div v-for="v in videos" :key="v.n" @click="openLightbox(v)" class="nwc-reveal nwc-card-hover">
          <div class="nwc-mediacard" :class="{ 'has-thumb': v.ytId }" style="position:relative; width:100%; aspect-ratio:16/9; border-radius:3px; overflow:hidden; background:#14130F;">
            <div class="nwc-ph">
              <div class="nwc-ph-perf" style="top:0;"></div>
              <span class="nwc-ph-cap">Awaiting footage</span>
              <div class="nwc-ph-perf" style="bottom:0;"></div>
            </div>
            <img v-if="v.ytId" :src="`https://img.youtube.com/vi/${v.ytId}/maxresdefault.jpg`" :alt="v.title" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;" />
            <div style="position:absolute; inset:0; background:linear-gradient(180deg,rgba(20,19,15,0.1),rgba(20,19,15,0.55)); pointer-events:none;"></div>
            <div style="position:absolute; top:16px; left:16px; display:flex; align-items:center; gap:8px; pointer-events:none;">
              <span style="width:26px; height:26px; border-radius:50%; border:1px solid rgba(239,231,200,0.6); display:flex; align-items:center; justify-content:center; font-family:'Space Mono',monospace; font-size:8px; color:#EFE7C8;">NWC</span>
              <span style="font-family:'Space Mono',monospace; font-size:11px; letter-spacing:0.12em; color:#EFE7C8;">{{ v.ch }}</span>
            </div>
            <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; pointer-events:none;">
              <span style="width:60px; height:60px; border-radius:50%; background:rgba(250,242,205,0.14); border:1.5px solid rgba(250,242,205,0.5); backdrop-filter:blur(5px); display:flex; align-items:center; justify-content:center;">
                <span style="width:0; height:0; border-style:solid; border-width:9px 0 9px 15px; border-color:transparent transparent transparent #FAF2CD; margin-left:4px;"></span>
              </span>
            </div>
            <div style="position:absolute; bottom:14px; right:16px; font-family:'Space Mono',monospace; font-size:11px; letter-spacing:0.1em; color:#EFE7C8; pointer-events:none;">{{ v.rt }}</div>
          </div>
          <div style="display:flex; align-items:baseline; justify-content:space-between; gap:18px; margin-top:20px;">
            <h3 style="margin:0; font-family:'Newsreader',serif; font-weight:600; font-size:clamp(22px,2.4vw,34px); line-height:1.05;">{{ v.title }}</h3>
            <span style="font-family:'Space Mono',monospace; font-size:12px; color:#8A8470; flex:none;">{{ v.n }}</span>
          </div>
          <div style="display:flex; align-items:center; gap:8px; margin-top:10px; font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.1em; text-transform:uppercase; color:#46423A;">
            <span style="width:7px; height:7px; border-radius:50%; background:#FF3B30;"></span> Play in player ▸
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== GAME TRAILERS ==================== -->
    <section id="trailers" style="padding:clamp(40px,5vw,72px) clamp(20px,5vw,72px) clamp(72px,11vw,160px); scroll-margin-top:90px; max-width:1400px; margin-left:auto; margin-right:auto;">
      <div class="nwc-reveal" style="display:flex; align-items:flex-end; justify-content:space-between; gap:24px; flex-wrap:wrap; margin-bottom:clamp(36px,5vw,64px);">
        <div>
          <div style="font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.24em; text-transform:uppercase; color:#8A8470; margin-bottom:18px;">02 — Game Trailers</div>
          <h2 style="margin:0; font-family:'Newsreader',serif; font-weight:500; font-size:clamp(40px,6.5vw,104px); line-height:0.92; letter-spacing:-0.02em;">Press <span style="font-style:italic;">Start</span></h2>
        </div>
        <div style="font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.14em; text-transform:uppercase; color:#8A8470; max-width:28ch; line-height:1.7;">Cinematic cuts for launch reveals, teasers & gameplay edits.</div>
      </div>
      <div style="display:flex; align-items:center; justify-content:center; gap:16px; padding:14px 28px; margin-bottom:clamp(28px,3vw,52px); background:rgba(23,21,15,0.05); border:1px solid rgba(23,21,15,0.14); border-radius:2px;">
        <span style="width:8px; height:8px; border-radius:50%; background:var(--accent,#1C857B); flex:none;"></span>
        <span style="font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.32em; text-transform:uppercase; color:#46423A;">Coming Soon</span>
        <span style="width:8px; height:8px; border-radius:50%; background:var(--accent,#1C857B); flex:none;"></span>
      </div>
      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(min(440px,100%),1fr)); gap:clamp(28px,3vw,52px);">
        <div v-for="t in trailers" :key="t.n" @click="openLightbox(t)" class="nwc-reveal nwc-card-hover">
          <div class="nwc-mediacard" :class="{ 'has-thumb': t.ytId }" style="position:relative; width:100%; aspect-ratio:16/9; border-radius:3px; overflow:hidden; background:#14130F;">
            <div class="nwc-ph">
              <div class="nwc-ph-perf" style="top:0;"></div>
              <span class="nwc-ph-cap">Trailer pending</span>
              <div class="nwc-ph-perf" style="bottom:0;"></div>
            </div>
            <img v-if="t.ytId" :src="`https://img.youtube.com/vi/${t.ytId}/maxresdefault.jpg`" :alt="t.title" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;" />
            <div style="position:absolute; inset:0; background:linear-gradient(180deg,rgba(20,19,15,0.1),rgba(20,19,15,0.6)); pointer-events:none;"></div>
            <div style="position:absolute; top:16px; left:16px; display:flex; align-items:center; gap:8px; pointer-events:none;">
              <span style="font-family:'Space Mono',monospace; font-size:10px; letter-spacing:0.16em; text-transform:uppercase; color:#14130F; background:var(--accent,#1C857B); padding:5px 9px; border-radius:2px;">▶ Trailer</span>
              <span style="font-family:'Space Mono',monospace; font-size:11px; letter-spacing:0.12em; color:#EFE7C8;">{{ t.genre }}</span>
            </div>
            <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; pointer-events:none;">
              <span style="width:60px; height:60px; border-radius:50%; background:rgba(250,242,205,0.14); border:1.5px solid rgba(250,242,205,0.5); backdrop-filter:blur(5px); display:flex; align-items:center; justify-content:center;">
                <span style="width:0; height:0; border-style:solid; border-width:9px 0 9px 15px; border-color:transparent transparent transparent #FAF2CD; margin-left:4px;"></span>
              </span>
            </div>
            <div style="position:absolute; bottom:14px; right:16px; font-family:'Space Mono',monospace; font-size:11px; letter-spacing:0.1em; color:#EFE7C8; pointer-events:none;">{{ t.rt }}</div>
          </div>
          <div style="display:flex; align-items:baseline; justify-content:space-between; gap:18px; margin-top:20px;">
            <h3 style="margin:0; font-family:'Newsreader',serif; font-weight:600; font-size:clamp(22px,2.4vw,34px); line-height:1.05;">{{ t.title }}</h3>
            <span style="font-family:'Space Mono',monospace; font-size:12px; color:#8A8470; flex:none;">{{ t.n }}</span>
          </div>
          <div style="display:flex; align-items:center; gap:8px; margin-top:10px; font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.1em; text-transform:uppercase; color:#46423A;">
            <span style="width:7px; height:7px; border-radius:50%; background:#FF3B30;"></span> Play in player ▸
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== ABOUT (dark) ==================== -->
    <section id="about" style="background:#14130F; color:#EFE7C8; padding:clamp(72px,11vw,160px) clamp(20px,5vw,72px); scroll-margin-top:70px;">
      <div class="nwc-about-grid" style="display:grid; grid-template-columns:minmax(0,0.9fr) minmax(0,1.1fr); gap:clamp(40px,6vw,96px); align-items:start; max-width:1500px; margin:0 auto;">
        <div class="nwc-about-media nwc-reveal" style="position:sticky; top:96px;">
          <div class="nwc-mediacard has-thumb" style="position:relative; width:100%; aspect-ratio:4/5; border-radius:4px; overflow:hidden;">
            <div class="nwc-ph">
              <div class="nwc-ph-perf" style="top:0;"></div>
              <span class="nwc-ph-cap">Portrait pending</span>
              <div class="nwc-ph-perf" style="bottom:0;"></div>
            </div>
            <img :src="portraitSrc" alt="Thomas Rolin" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;" />
          </div>
          <div style="display:flex; align-items:center; gap:12px; margin-top:22px; font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.16em; text-transform:uppercase; color:#A8A07E;">
            <span style="width:8px; height:8px; border-radius:50%; background:var(--accent,#1C857B);"></span> Founder &amp; Creative Director
          </div>
        </div>
        <div class="nwc-reveal">
          <div style="font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.24em; text-transform:uppercase; color:#A8A07E; margin-bottom:24px;">03 — About</div>
          <h2 style="margin:0 0 clamp(28px,4vw,48px); font-family:'Newsreader',serif; font-weight:500; font-size:clamp(42px,6vw,92px); line-height:0.94; letter-spacing:-0.02em;">Thomas <span style="font-style:italic;">Rolin</span></h2>
          <div style="display:grid; gap:22px; font-size:clamp(15px,1.2vw,17px); line-height:1.7; color:#D8CFAE; max-width:62ch;">
            <p style="margin:0;">From the flicker of animated frames to the grandeur of cinematic worlds, storytelling has always called to me. My journey into film began young — sparked by a deep love of anime, action blockbusters, sci-fi sagas, and the enchanting magic of the stories that move, inspire, and transform us.</p>
            <p style="margin:0;">I honed my craft at The Los Angeles Film School, graduating in 2023 with <em style="font-style:italic; color:#EFE7C8;">Summa Cum Laude</em> honors and induction into the honor society. But the real reward has always been watching thoughts turn into visuals — dreams captured in motion, stories brought to life on screen.</p>
          </div>
          <blockquote style="margin:clamp(40px,5vw,64px) 0; padding-left:clamp(24px,3vw,40px); border-left:2px solid var(--accent,#1C857B);">
            <p style="margin:0; font-family:'Newsreader',serif; font-style:italic; font-weight:500; font-size:clamp(26px,3.6vw,52px); line-height:1.18; color:#FAF2CD;">"You're only given a little spark of madness. Keep it."</p>
            <cite style="display:block; margin-top:18px; font-family:'Space Mono',monospace; font-style:normal; font-size:12px; letter-spacing:0.16em; text-transform:uppercase; color:#A8A07E;">— Robin Williams</cite>
          </blockquote>
          <div style="display:grid; gap:22px; font-size:clamp(15px,1.2vw,17px); line-height:1.7; color:#D8CFAE; max-width:62ch;">
            <p style="margin:0;">That spark is the heartbeat of NightWolfe Cinema. It fuels my passion and reminds me never to lose sight of the dream that started it all. I pride myself on being down-to-earth — treating every person I meet like family, because connection sits at the core of every great story.</p>
            <p style="margin:0;">Above all, I'm a father and husband. My family is my greatest inspiration: they drive me to reach higher, dream bigger, and build a legacy worth passing on. Through every frame, I aim to show them — and the world — that anything is possible when you lead with heart and hold tight to your spark.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== CONTACT ==================== -->
    <section id="contact" style="padding:clamp(80px,12vw,160px) clamp(20px,5vw,72px); scroll-margin-top:90px; max-width:1400px; margin-left:auto; margin-right:auto;">
      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(360px,1fr)); gap:clamp(48px,7vw,112px); align-items:start; max-width:1500px;">
        <div class="nwc-reveal">
          <div style="font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.24em; text-transform:uppercase; color:#8A8470; margin-bottom:clamp(24px,3vw,36px);">04 — Let's talk</div>
          <h2 style="margin:0; font-family:'Newsreader',serif; font-weight:500; font-size:clamp(40px,5.6vw,92px); line-height:0.92; letter-spacing:-0.025em;">Let's make something <span style="font-style:italic;">cinematic.</span></h2>
          <p style="margin:clamp(24px,3vw,36px) 0 0; font-size:clamp(16px,1.3vw,19px); line-height:1.6; color:#3A372E; max-width:42ch;">Have a film, event, or edit in mind? Tell me a little about it and I'll get back to you within a couple of days.</p>
          <div style="display:flex; flex-direction:column; gap:14px; margin-top:clamp(32px,4vw,48px);">
            <a href="mailto:nightwolfecinema@outlook.com" class="nwc-hover-accent" style="display:inline-flex; align-items:center; gap:12px; white-space:nowrap; font-family:'Space Mono',monospace; font-size:14px; letter-spacing:0.06em; text-decoration:none; color:#17150F;">nightwolfecinema@outlook.com →</a>
            <a href="mailto:nightwolfecinema@icloud.com" class="nwc-hover-accent" style="display:inline-flex; align-items:center; gap:12px; white-space:nowrap; font-family:'Space Mono',monospace; font-size:14px; letter-spacing:0.06em; text-decoration:none; color:#17150F;">nightwolfecinema@icloud.com →</a>
            <a href="https://www.youtube.com/@nightwolfecinema" target="_blank" rel="noopener" class="nwc-hover-accent" style="display:inline-flex; align-items:center; gap:10px; white-space:nowrap; font-family:'Space Mono',monospace; font-size:14px; letter-spacing:0.06em; text-decoration:none; color:#17150F;">YouTube ↗</a>
          </div>
        </div>
        <div class="nwc-reveal" style="background:#14130F; border-radius:4px; padding:clamp(28px,3.5vw,44px);">
          <form v-if="!sent" @submit.prevent="submitForm" style="display:flex; flex-direction:column; gap:22px;">
            <div style="font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.2em; text-transform:uppercase; color:#A8A07E;">Start a project</div>
            <label style="display:flex; flex-direction:column; gap:8px;">
              <span style="font-family:'Space Mono',monospace; font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:#A8A07E;">Name</span>
              <input v-model="form.name" name="name" placeholder="Your name" class="nwc-input" style="font-family:'Archivo',sans-serif; font-size:16px; color:#FAF2CD; background:transparent; border:0; border-bottom:1px solid rgba(239,231,200,0.28); padding:10px 0;" />
            </label>
            <label style="display:flex; flex-direction:column; gap:8px;">
              <span style="font-family:'Space Mono',monospace; font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:#A8A07E;">Email</span>
              <input v-model="form.email" name="email" type="email" placeholder="you@email.com" class="nwc-input" style="font-family:'Archivo',sans-serif; font-size:16px; color:#FAF2CD; background:transparent; border:0; border-bottom:1px solid rgba(239,231,200,0.28); padding:10px 0;" />
            </label>
            <label style="display:flex; flex-direction:column; gap:8px;">
              <span style="font-family:'Space Mono',monospace; font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:#A8A07E;">Project type</span>
              <select v-model="form.type" name="type" class="nwc-select" style="font-family:'Archivo',sans-serif; font-size:16px; color:#FAF2CD; background:#1C1A14; border:1px solid rgba(239,231,200,0.28); border-radius:2px; padding:12px;">
                <option v-for="pt in projectTypes" :key="pt" :value="pt">{{ pt }}</option>
              </select>
            </label>
            <label style="display:flex; flex-direction:column; gap:8px;">
              <span style="font-family:'Space Mono',monospace; font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:#A8A07E;">Details</span>
              <textarea v-model="form.msg" name="msg" rows="4" placeholder="Tell me about your project, timeline, and budget." class="nwc-textarea" style="font-family:'Archivo',sans-serif; font-size:16px; color:#FAF2CD; background:transparent; border:1px solid rgba(239,231,200,0.28); border-radius:2px; padding:12px; resize:vertical;"></textarea>
            </label>
            <button type="submit" class="nwc-btn-submit" style="font-family:'Space Mono',monospace; font-size:13px; letter-spacing:0.12em; text-transform:uppercase; color:#14130F; background:#FAF2CD; border:0; border-radius:2px; padding:16px 24px;">Send message →</button>
          </form>
          <div v-else style="display:flex; flex-direction:column; gap:18px; padding:clamp(20px,3vw,40px) 0; min-height:280px; justify-content:center;">
            <div style="width:54px; height:54px; border-radius:50%; border:1.5px solid var(--accent,#1C857B); display:flex; align-items:center; justify-content:center; color:var(--accent,#1C857B); font-size:24px;">✓</div>
            <h3 style="margin:0; font-family:'Newsreader',serif; font-style:italic; font-weight:500; font-size:clamp(26px,3vw,40px); color:#FAF2CD;">Your draft is ready.</h3>
            <p style="margin:0; font-size:15px; line-height:1.6; color:#D8CFAE; max-width:38ch;">I've opened a pre-filled email in your mail app — just hit send. Or reach me directly at <span style="color:#FAF2CD;">nightwolfecinema@outlook.com</span></p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== LIGHTBOX ==================== -->
    <div v-if="lightbox" @click="closeLightbox()" style="position:fixed; inset:0; z-index:10000; background:rgba(10,9,6,0.93); backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px); display:flex; align-items:center; justify-content:center; padding:clamp(16px,4vw,72px); animation:nwc-rise 0.28s ease;">
      <div @click.stop style="position:relative; width:100%; max-width:1120px;">
        <button @click="closeLightbox()" style="position:absolute; top:-46px; right:0; font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.14em; text-transform:uppercase; color:#EFE7C8; background:transparent; border:0;">Close ✕</button>
        <div style="position:relative; width:100%; aspect-ratio:16/9; background:#000; border-radius:3px; overflow:hidden; box-shadow:0 40px 120px rgba(0,0,0,0.6);">
          <iframe v-if="lightboxHasYt" :src="lightboxSrc" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen style="position:absolute; inset:0; width:100%; height:100%; border:0;"></iframe>
          <video v-else-if="lightboxHasLocal" :src="lightbox.videoSrc" controls autoplay style="position:absolute; inset:0; width:100%; height:100%;"></video>
          <div v-else style="position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:20px; text-align:center; padding:24px;">
            <span style="width:74px; height:74px; border-radius:50%; border:1.5px solid rgba(239,231,200,0.45); display:flex; align-items:center; justify-content:center;">
              <span style="width:0; height:0; border-style:solid; border-width:12px 0 12px 20px; border-color:transparent transparent transparent #FAF2CD; margin-left:5px;"></span>
            </span>
            <div style="font-family:'Newsreader',serif; font-style:italic; font-size:clamp(22px,3vw,34px); color:#FAF2CD;">{{ lightboxTitle }}</div>
            <div style="font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.14em; text-transform:uppercase; color:#8A8470; max-width:34ch; line-height:1.7;">Add this video's YouTube ID in the code to play it in-page.</div>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:12px; margin-top:18px; font-family:'Space Mono',monospace; font-size:12px; letter-spacing:0.16em; text-transform:uppercase; color:#A8A07E;">
          <span style="width:8px; height:8px; border-radius:50%; background:#FF3B30;"></span> Now playing · {{ lightboxTitle }}
        </div>
      </div>
    </div>

    <!-- ==================== FOOTER ==================== -->
    <footer style="background:#14130F; color:#A8A07E; padding:clamp(36px,5vw,56px) clamp(20px,5vw,72px);">
      <div style="max-width:1400px; margin:0 auto; display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:20px;">
        <div style="display:flex; align-items:center; gap:14px;">
          <img :src="logoSrc" alt="NightWolfe Cinema" style="width:38px; height:38px; object-fit:contain; flex:none; opacity:0.85;" />
          <span style="font-family:'Newsreader',serif; font-size:18px; color:#EFE7C8;">NightWolfe Cinema</span>
        </div>
        <div style="font-family:'Space Mono',monospace; font-size:11px; letter-spacing:0.14em; text-transform:uppercase;">© {{ currentYear }} · Where visions howl to life</div>
      </div>
    </footer>

  </div>
</template>

<script>
import portraitSrc from '@/assets/default-avatar.png';
import logoSrc from '@/assets/logo.png';
import axios from 'axios';

export default {
  name: 'HomePage',

  data() {
    return {
      portraitSrc,
      logoSrc,
      lightbox: null,
      menuOpen: false,
      sent: false,
      currentYear: new Date().getFullYear(),
      form: { name: '', email: '', type: 'Film / Short', msg: '' },
      grainBg: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      marqueeWords: ['Cinematography', 'Color', 'Sound Design', 'Editing', 'Motion', 'Story'],
      services: [
        { n: '01', title: 'Cinematography', desc: 'Camera, composition, and lighting that give every frame intention and mood.' },
        { n: '02', title: 'Videography', desc: 'From concept to set — capturing events, stories, and brands in motion.' },
        { n: '03', title: 'Editing & Post', desc: 'Cutting-edge audio/video editing, color, and sound that bring it all together.' },
      ],
      videos: [
        { n: '01', title: 'Ending — Intro Gaming Reel', ch: 'Night Wolfe Cinema', rt: '0:42', ytId: '' },
        { n: '02', title: 'Transparent', ch: 'Night Wolfe Cinema', rt: '3:18', ytId: '' },
        { n: '03', title: 'UFO Sightings', ch: 'Night Wolfe Cinema', rt: '2:05', ytId: '' },
        { n: '04', title: 'You Are Essential', ch: 'Night Wolfe Cinema', rt: '4:11', ytId: '' },
      ],
      trailers: [
        { n: '01', title: 'Launch Reveal', genre: 'Action / RPG', rt: '1:48', ytId: '' },
        { n: '02', title: 'Cinematic Teaser', genre: 'Sci-Fi', rt: '1:12', ytId: '' },
        { n: '03', title: 'Gameplay Cut', genre: 'Adventure', rt: '2:36', ytId: '' },
      ],
      projectTypes: ['Film / Short', 'Event / Wedding', 'Music Video', 'Commercial / Brand', 'Editing only', 'Something else'],
      navItems: [
        { id: 'home', label: 'Home', num: '01' },
        { id: 'studio', label: 'Studio', num: '02' },
        { id: 'work', label: 'Work', num: '03' },
        { id: 'trailers', label: 'Trailers', num: '04' },
        { id: 'about', label: 'About', num: '05' },
        { id: 'contact', label: 'Contact', num: '06' },
      ],
    };
  },

  computed: {
    lightboxHasYt() {
      return !!(this.lightbox && this.lightbox.ytId);
    },
    lightboxHasLocal() {
      return !!(this.lightbox && this.lightbox.videoSrc);
    },
    lightboxSrc() {
      return this.lightboxHasYt
        ? `https://www.youtube.com/embed/${this.lightbox.ytId}?autoplay=1&rel=0`
        : '';
    },
    lightboxTitle() {
      return this.lightbox ? this.lightbox.title : '';
    },
  },

  methods: {
    openLightbox(v) {
      this.lightbox = v;
      document.body.style.overflow = 'hidden';
    },
    closeLightbox() {
      this.lightbox = null;
      document.body.style.overflow = '';
    },
    toggleMenu(open) {
      this.menuOpen = typeof open === 'boolean' ? open : !this.menuOpen;
      document.body.style.overflow = this.menuOpen ? 'hidden' : '';
    },
    submitForm() {
      const f = this.form;
      const addr = 'nightwolfecinema@outlook.com';
      const subject = encodeURIComponent('New project inquiry — ' + (f.type || 'General'));
      const body = encodeURIComponent(
        'Name: ' + f.name + '\nEmail: ' + f.email + '\nProject type: ' + f.type + '\n\n' + f.msg
      );
      window.location.href = 'mailto:' + addr + '?subject=' + subject + '&body=' + body;
      this.sent = true;
    },
    setupScrollReveal() {
      if (this._io) { this._io.disconnect(); this._io = null; }
      if (this._revealFallback) { clearTimeout(this._revealFallback); this._revealFallback = null; }
      const reveals = Array.from(document.querySelectorAll('.nwc-reveal'));
      const revealEl = (el, instant) => {
        if (el.hasAttribute('data-shown')) return;
        if (instant) {
          el.setAttribute('data-instant', '');
        } else {
          const sibs = el.parentElement
            ? Array.from(el.parentElement.querySelectorAll(':scope > .nwc-reveal'))
            : [];
          const i = Math.max(0, sibs.indexOf(el));
          el.style.transitionDelay = Math.min(i * 90, 360) + 'ms';
        }
        el.setAttribute('data-shown', '');
      };
      const inView = (el) => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight || 800;
        return r.top < vh * 0.94 && r.bottom > 0;
      };
      reveals.forEach((el) => { if (inView(el)) revealEl(el, true); });
      if (typeof IntersectionObserver !== 'undefined') {
        this._io = new IntersectionObserver(
          (entries) => {
            entries.forEach((en) => {
              if (en.isIntersecting) {
                revealEl(en.target, false);
                this._io.unobserve(en.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
        );
        reveals.forEach((el) => { if (!el.hasAttribute('data-shown')) this._io.observe(el); });
      } else {
        reveals.forEach((el) => revealEl(el, true));
      }
      this._revealFallback = setTimeout(() => {
        reveals.forEach((el) => revealEl(el, true));
      }, 1100);
    },
    async fetchVideos() {
      try {
        const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;
        const CHANNEL_ID = process.env.VUE_APP_YOUTUBE_CHANNEL_KEY;
        if (!API_KEY || !CHANNEL_ID) return;
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: { part: 'snippet', channelId: CHANNEL_ID, maxResults: 8, order: 'date', type: 'video', key: API_KEY },
        });
        const items = response.data.items || [];
        if (items.length) {
          this.videos = items.map((item, i) => ({
            n: String(i + 1).padStart(2, '0'),
            title: item.snippet.title,
            ch: item.snippet.channelTitle,
            rt: '',
            ytId: item.id.videoId,
          }));
          this.$nextTick(() => this.setupScrollReveal());
        }
      } catch (e) {
        console.error('YouTube fetch error:', e);
      }
    },
    setupNavScroll() {
      const navLinks = {};
      document.querySelectorAll('[data-nav]').forEach((l) => {
        navLinks[l.getAttribute('data-nav')] = l;
      });
      const sectionIds = ['home', 'studio', 'work', 'trailers', 'about', 'contact'];
      let ticking = false;
      this._onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          const y = window.scrollY || 0;
          let cur = 'home';
          sectionIds.forEach((id) => {
            const s = document.getElementById(id);
            if (!s) return;
            const top = s.getBoundingClientRect().top + y - 130;
            if (y >= top) cur = id;
          });
          sectionIds.forEach((id) => {
            const l = navLinks[id];
            if (l) l.classList.toggle('nwc-navactive', id === cur);
          });
        });
      };
      window.addEventListener('scroll', this._onScroll, { passive: true });
      window.addEventListener('resize', this._onScroll, { passive: true });
      this._onScroll();
    },
  },

  mounted() {
    this._onKey = (e) => { if (e.key === 'Escape') this.closeLightbox(); };
    window.addEventListener('keydown', this._onKey);
    this.setupScrollReveal();
    this.setupNavScroll();
    this.fetchVideos();
  },

  beforeUnmount() {
    if (this._onKey) window.removeEventListener('keydown', this._onKey);
    if (this._onScroll) {
      window.removeEventListener('scroll', this._onScroll);
      window.removeEventListener('resize', this._onScroll);
    }
    if (this._io) this._io.disconnect();
    if (this._revealFallback) clearTimeout(this._revealFallback);
    document.body.style.overflow = '';
  },
};
</script>
