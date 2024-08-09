"use strict";
(self["webpackChunkfeelife"] = self["webpackChunkfeelife"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_components_album_page_album_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared_components/album-page/album-page.component */ 89);
/* harmony import */ var _shared_components_albums_albums_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared_components/albums/albums.component */ 4767);
/* harmony import */ var _shared_components_artist_page_artist_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared_components/artist-page/artist-page.component */ 9393);
/* harmony import */ var _shared_components_artists_artists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared_components/artists/artists.component */ 309);
/* harmony import */ var _shared_components_discover_discover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared_components/discover/discover.component */ 9933);
/* harmony import */ var _shared_components_global50_global50_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared_components/global50/global50.component */ 3823);
/* harmony import */ var _shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared_components/home/home.component */ 5061);
/* harmony import */ var _shared_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared_components/profile/profile.component */ 8049);
/* harmony import */ var _shared_components_recent_recent_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared_components/recent/recent.component */ 4917);
/* harmony import */ var _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared_components/search/search.component */ 7099);
/* harmony import */ var _shared_components_settings_languages_languages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared_components/settings/languages/languages.component */ 6859);
/* harmony import */ var _shared_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared_components/settings/settings.component */ 4657);
/* harmony import */ var _shared_components_suggestions_suggestions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared_components/suggestions/suggestions.component */ 9225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7580);
















const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home',
  data: {
    state: 'home'
  }
}, {
  path: 'home',
  component: _shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent,
  data: {
    state: 'home'
  }
}, {
  path: 'logout',
  component: _shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent,
  data: {
    state: 'home'
  }
}, {
  path: 'search',
  component: _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_9__.SearchComponent,
  data: {
    state: 'search'
  }
}, {
  path: 'discover',
  component: _shared_components_discover_discover_component__WEBPACK_IMPORTED_MODULE_4__.DiscoverComponent,
  data: {
    state: 'discover'
  }
}, {
  path: 'top50',
  component: _shared_components_global50_global50_component__WEBPACK_IMPORTED_MODULE_5__.Global50Component,
  data: {
    state: 'top50'
  }
}, {
  path: 'suggestions',
  component: _shared_components_suggestions_suggestions_component__WEBPACK_IMPORTED_MODULE_12__.SuggestionsComponent,
  data: {
    state: 'suggestions'
  }
}, {
  path: 'recent',
  component: _shared_components_recent_recent_component__WEBPACK_IMPORTED_MODULE_8__.RecentComponent,
  data: {
    state: 'recent'
  }
}, {
  path: 'albums',
  component: _shared_components_albums_albums_component__WEBPACK_IMPORTED_MODULE_1__.AlbumsComponent,
  data: {
    state: 'albums'
  }
}, {
  path: 'album/:album',
  component: _shared_components_album_page_album_page_component__WEBPACK_IMPORTED_MODULE_0__.AlbumPageComponent,
  data: {
    state: 'album'
  }
}, {
  path: 'artists',
  component: _shared_components_artists_artists_component__WEBPACK_IMPORTED_MODULE_3__.ArtistsComponent,
  data: {
    state: 'artists'
  }
}, {
  path: 'artist-info',
  component: _shared_components_artist_page_artist_page_component__WEBPACK_IMPORTED_MODULE_2__.ArtistPageComponent,
  data: {
    state: 'artistInfo'
  }
}, {
  path: 'artist-info/:id',
  component: _shared_components_artist_page_artist_page_component__WEBPACK_IMPORTED_MODULE_2__.ArtistPageComponent,
  data: {
    state: 'artistInfoId'
  }
}, {
  path: 'settings',
  component: _shared_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__.SettingsComponent,
  data: {
    state: 'settings'
  }
}, {
  path: 'languages',
  component: _shared_components_settings_languages_languages_component__WEBPACK_IMPORTED_MODULE_10__.LanguagesComponent,
  data: {
    state: 'languages'
  }
}, {
  path: 'profile',
  component: _shared_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__.ProfileComponent,
  data: {
    state: 'profile'
  }
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared_services/data-manager.service */ 6108);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _shared_services_status_exchanger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared_services/status-exchanger.service */ 7984);
/* harmony import */ var _shared_services_dark_mode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared_services/dark-mode.service */ 1618);













const _c0 = ["player"];
const _c1 = ["volumeSlider"];
const _c2 = () => ["home"];
const _c3 = () => ["search"];
const _c4 = () => ["discover"];
const _c5 = () => ["albums"];
const _c6 = () => ["artists"];
const _c7 = () => ["settings"];
const _c8 = () => ["logout"];
const _c9 = () => ["is-active-tab"];
const _c10 = () => ["recent"];
const _c11 = () => ["profile"];
const _c12 = () => ["/artists"];
const _c13 = a0 => ({
  display: a0
});
const _c14 = a0 => [a0];
function AppComponent_ng_container_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const singer_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c14, "/artist-info/" + singer_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", singer_r2.coverphoto, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](singer_r2.singer);
  }
}
function AppComponent_div_119_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 44);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.activeSong.coverphoto, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function AppComponent_div_119_h3_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.activeSong.singer);
  }
}
function AppComponent_div_119_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.activeSong.songtitle);
  }
}
function AppComponent_div_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppComponent_div_119_img_1_Template, 1, 1, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AppComponent_div_119_h3_3_Template, 2, 1, "h3", 48)(4, AppComponent_div_119_p_4_Template, 2, 1, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.activeSong == null ? null : ctx_r2.activeSong.coverphoto);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.activeSong == null ? null : ctx_r2.activeSong.singer);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.activeSong == null ? null : ctx_r2.activeSong.songtitle);
  }
}
function AppComponent_button_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_button_128_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onPause());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_button_130_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_button_130_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onPlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class AppComponent {
  constructor(statusExchanger, dataManager, router, translate, darkMode) {
    this.statusExchanger = statusExchanger;
    this.dataManager = dataManager;
    this.router = router;
    this.translate = translate;
    this.darkMode = darkMode;
    this.title = 'Feelife';
    this.mobileNavStatus = '';
    this.currentProgress$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(0);
    this.currentTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.songs = [];
    this.singers = [];
    this.playlists = [];
    this.favoritedSongs = [];
    this.innerWidth = window.innerWidth;
    this.audio = new Audio();
    this.isPlaying = false;
    this.songCoverImage = '';
    this.paramsSubscription = null;
    this.language = localStorage.getItem('language') ?? 'en';
    this.repeatStatus = false;
    this.shuffleStatus = false;
    this.vol = 100;
    this.translate.setDefaultLang(this.language);
    this.translate.use(this.language);
  }
  ngOnInit() {
    this.loadData();
    this.initSubscriptions();
  }
  ngAfterViewInit() {
    this.changeVolume();
  }
  onResize() {
    this.innerWidth = window.innerWidth;
  }
  loadData() {
    try {
      this.dataManager.getSongs().then(songs => {
        this.songs = songs;
        if (this.songs.length > 0) {
          this.chooseSong(this.songs[0]);
        }
      });
      this.dataManager.getSingers().then(singers => {
        this.singers = singers;
      });
      this.dataManager.getPlaylists().then(playlists => {
        this.playlists = playlists;
      });
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }
  initSubscriptions() {
    this.statusExchanger.activeLanguageCode.subscribe(code => {
      this.setLanguage(code);
    });
    this.statusExchanger.activeSongId.subscribe(songId => {
      this.playSongById(songId);
    });
  }
  setLanguage(code) {
    this.language = code;
    localStorage.setItem('language', code);
    this.translate.setDefaultLang(code);
    this.translate.use(code);
  }
  playSongById(songId) {
    const song = this.songs.find(s => s.id === songId) || this.songs[0];
    this.chooseSong(song);
    this.onPlay();
  }
  onPlay() {
    if (this.activeSong == undefined) {
      this.chooseSong(this.songs[0]);
    }
    this.audio.play();
    this.isPlaying = true;
    this.durationTime = undefined;
    this.audio.ontimeupdate = () => this.onTimeUpdate();
    this.audio.onended = () => this.playNextSong();
  }
  chooseSong(song) {
    this.audio.pause();
    this.audio.src = song.path;
    this.activeSong = song;
    this.dataManager.addRecentSong(song);
  }
  onTimeUpdate() {
    if (!this.durationTime) {
      this.setSongDuration();
    }
    const currentTime = this.audio.currentTime;
    const duration = this.audio.duration;
    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = ('0' + Math.floor(currentTime % 60)).slice(-2);
    this.currentTime$.next(`${currentMinutes}:${currentSeconds}`);
    const percentage = Math.round(currentTime / duration * 100);
    this.currentProgress$.next(percentage);
  }
  setSongDuration() {
    const duration = this.audio.duration;
    const minutes = Math.floor(duration / 60);
    const seconds = ('0' + Math.floor(duration % 60)).slice(-2);
    this.durationTime = `${minutes}:${seconds}`;
  }
  playNextSong() {
    const currentIndex = this.songs.findIndex(s => s.id === this.activeSong?.id);
    const nextIndex = (currentIndex + 1) % this.songs.length;
    this.chooseSong(this.songs[nextIndex]);
    this.onPlay();
  }
  playPreviousSong() {
    const currentIndex = this.songs.findIndex(s => s.id === this.activeSong?.id);
    const prevIndex = (currentIndex - 1 + this.songs.length) % this.songs.length;
    this.chooseSong(this.songs[prevIndex]);
    this.onPlay();
  }
  onPause() {
    this.audio.pause();
    this.isPlaying = false;
    this.currentProgress$.next(0);
    this.currentTime$.next('0:00');
    this.durationTime = undefined;
  }
  changeVolume() {
    this.audio.volume = this.vol / 100;
    this.volumeSlider.nativeElement.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${this.vol}%, #fff ${this.vol}%, #fff 100%)`;
  }
  toggleRepeat() {
    this.repeatStatus = !this.repeatStatus;
  }
  toggleShuffle() {
    this.shuffleStatus = !this.shuffleStatus;
    this.statusExchanger.shuffleStatus.emit(this.shuffleStatus);
  }
  static #_ = this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_status_exchanger_service__WEBPACK_IMPORTED_MODULE_1__.StatusExchangerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_0__.DataManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_dark_mode_service__WEBPACK_IMPORTED_MODULE_2__.DarkModeService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    viewQuery: function AppComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.player = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.volumeSlider = _t.first);
      }
    },
    hostBindings: function AppComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler() {
          return ctx.onResize();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_0__.DataManagerService]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 139,
    vars: 113,
    consts: [["player", ""], ["volumeSlider", ""], [1, "tabs"], [1, "tab"], [3, "routerLink"], ["src", "assets/icons/home.svg", "alt", ""], ["src", "assets/icons/search.svg", "alt", ""], ["src", "assets/icons/discover.svg", "alt", ""], ["src", "assets/icons/album.svg", "alt", ""], ["src", "assets/icons/artist.svg", "alt", ""], ["src", "assets/icons/settings.svg", "alt", ""], ["src", "assets/icons/exit.svg", "alt", ""], [1, "components"], [1, "left"], [1, "logo"], ["src", "assets/icons/logo.svg", "alt", "", 1, "svg"], [1, "tab", 3, "routerLinkActive"], ["src", "assets/icons/recent.svg", "alt", ""], [1, "center"], [2, "margin-bottom", "10px"], [1, "right"], [1, "feature", "tabs"], [1, "profile"], ["src", "assets/icons/user-circle.svg", "alt", "", 1, "userIcon"], [1, "flex"], [1, "moreButton", 3, "routerLink"], ["src", "assets/icons/more.svg", "alt", "", 1, "svg"], [1, "mini-artists-list"], [4, "ngFor", "ngForOf"], [1, "player-bar"], [1, "player-content"], ["class", "music-info-area", 4, "ngIf"], [1, "control-area"], [1, "controller"], [1, "additional-func", "svg", 3, "click"], ["src", "assets/icons/shuffle.svg", "alt", ""], ["type", "button", 1, "svg", 3, "click"], ["src", "assets/icons/skip-back.svg", "alt", ""], ["type", "button", "class", "play-button", 3, "click", 4, "ngIf"], ["src", "assets/icons/skip-forward.svg", "alt", ""], ["src", "assets/icons/repeat.svg", "alt", ""], [1, "volume-slider", 3, "ngStyle"], ["id", "vol-control", "type", "range", "min", "0", "max", "100", "step", "1", 3, "ngModelChange", "ngModel"], [1, "singer", 3, "routerLink"], ["alt", "", 3, "src"], [1, "music-info-area"], ["alt", "", 3, "src", 4, "ngIf"], [1, "music-info"], [4, "ngIf"], ["type", "button", 1, "play-button", 3, "click"], ["src", "assets/icons/pauze.svg", "alt", ""], ["src", "assets/icons/play.svg", "alt", ""]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section")(1, "div", 2)(2, "div", 3)(3, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3)(9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3)(12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 3)(15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 3)(18, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 3)(21, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 12)(24, "aside", 13)(25, "div", 14)(26, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Feelife");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 2)(31, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 16)(35, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 16)(41, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 16)(47, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 16)(53, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 16)(59, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 2)(65, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 16)(69, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 2)(75, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](77, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 16)(79, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 16)(85, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "aside", 18)(91, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "aside", 20)(94, "div", 21)(95, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 22)(99, "div", 3)(100, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](101, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 21)(106, "div", 24)(107, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](109, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](113, AppComponent_ng_container_113_Template, 5, 5, "ng-container", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](114, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "audio", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 29)(118, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](119, AppComponent_div_119_Template, 5, 3, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 32)(121, "table", 33)(122, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_122_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.toggleShuffle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](123, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "td")(125, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_125_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.playPreviousSong());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](126, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](128, AppComponent_button_128_Template, 2, 0, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](130, AppComponent_button_130_Template, 2, 0, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "td")(132, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_132_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.playNextSong());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](133, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_134_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.toggleRepeat());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](135, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 41)(137, "input", 42, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_137_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.vol, $event) || (ctx.vol = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_137_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.changeVolume());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("mobileNavbar ", ctx.mobileNavStatus, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](85, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](86, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](87, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](88, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](89, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](90, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](91, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](92, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](33, 53, "MENU"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](93, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](94, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](39, 55, "Home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](95, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](96, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](45, 57, "Search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](97, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](98, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](51, 59, "Discover"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](99, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](100, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](57, 61, "Albums"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](101, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](102, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 63, "Artists"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](67, 65, "LIBRARY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](103, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](104, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](73, 67, "Recent"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](77, 69, "GENERAL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](105, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](106, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](83, 71, "Settings"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](107, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](108, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](89, 73, "Log Out"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](97, 75, "PROFILE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](109, _c11));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](104, 77, "profile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](109, 79, "TOP ARTISTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](110, _c12));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](114, 81, ctx.singers, 0, 9));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeSong);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.isPlaying === true ? "table-cell" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isPlaying);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.isPlaying === false ? "table-cell" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isPlaying);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](111, _c13, ctx.innerWidth < 768 ? "none" : "block"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.vol);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.SlicePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    styles: ["*[_ngcontent-%COMP%] {\n  transition: 0.1s;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.flex[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n\n.is-active-tab[_ngcontent-%COMP%] {\n  border-right: 3px solid #82ffd0;\n}\n\n.moreButton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n}\n\n.moreButton[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n}\n\n.logo[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  height: 50px;\n}\n\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  max-width: 100px;\n}\n\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 28px;\n}\n\n.mobileNavbar[_ngcontent-%COMP%] {\n  display: none;\n  flex-wrap: nowrap;\n  width: 100%;\n  text-align: center;\n  align-items: center;\n}\n\n.mobileNavbar[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: space-between;\n  width: 96%;\n  margin: auto;\n}\n\n.left[_ngcontent-%COMP%], \n.right[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.left[_ngcontent-%COMP%] {\n  width: 17vw;\n  position: fixed;\n  border-right: 2px solid rgba(220, 226, 234, 0.5490196078);\n  height: -webkit-fill-available;\n}\n\n.right[_ngcontent-%COMP%] {\n  width: 20vw;\n  position: fixed;\n  left: 75%;\n  border-left: 2px solid rgba(220, 226, 234, 0.5490196078);\n  padding-left: 2%;\n  height: -webkit-fill-available;\n}\n\n.center[_ngcontent-%COMP%] {\n  width: 54vw;\n  left: 20vw;\n  position: absolute;\n  padding-bottom: 80px;\n}\n\n.right[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 17px;\n  margin: 5px auto;\n}\n\n.left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.left[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%], \n.mobileNavbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.left[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.mobileNavbar[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.right[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 2.5vh auto;\n  letter-spacing: 3px;\n  font-size: 14px;\n  color: #687490;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 700;\n}\n\n.left[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.mobileNavbar[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n}\n\n.left[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%], \n.mobileNavbar[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n  max-height: 40px;\n  display: flex;\n  height: 30px;\n  margin: 15px auto;\n}\n\n.left[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.mobileNavbar[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  color: #687490;\n}\n\n.left[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #62c49e;\n}\n\n.profile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  color: #687490;\n}\n\n.profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  margin-right: 10px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}\n\n.player-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  backdrop-filter: blur(16px) saturate(180%);\n  -webkit-backdrop-filter: blur(16px) saturate(180%);\n  border-radius: 15px 15px 0px 0px;\n  border: 1px solid rgba(209, 213, 219, 0.3);\n}\n\n.player-bar[_ngcontent-%COMP%]   .player-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  margin: auto;\n  padding: 5px 0px;\n  gap: 10px;\n}\n\n.player-bar[_ngcontent-%COMP%]   .player-content[_ngcontent-%COMP%]   .music-info-area[_ngcontent-%COMP%] {\n  display: flex;\n  height: 50px;\n}\n\n.player-bar[_ngcontent-%COMP%]   .music-info-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  min-width: 50px;\n  height: 50px;\n  object-fit: cover;\n  margin-right: 10px;\n  border-radius: 8px;\n}\n\n.player-bar[_ngcontent-%COMP%]   .player-content[_ngcontent-%COMP%]   .music-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  max-width: 200px;\n}\n\n.player-bar[_ngcontent-%COMP%]   .player-content[_ngcontent-%COMP%]   .music-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 5px 0px 0px 0px;\n  font-size: 15px;\n}\n\n.player-bar[_ngcontent-%COMP%]   .player-content[_ngcontent-%COMP%]   .music-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 13px;\n  width: 100%;\n}\n\n.player-bar[_ngcontent-%COMP%]   .player-content[_ngcontent-%COMP%]   .control-area[_ngcontent-%COMP%] {\n  width: 85%;\n}\n\n.player-bar[_ngcontent-%COMP%]   .control-and-slider[_ngcontent-%COMP%] {\n  margin: auto;\n  gap: 15px;\n  width: 100%;\n}\n\n.player-bar[_ngcontent-%COMP%]   .player-content[_ngcontent-%COMP%]   .volume-slider[_ngcontent-%COMP%]   #vol-control[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  height: 7px;\n  outline: none;\n  transition: background 450ms ease-in;\n  -webkit-appearance: none;\n}\n\n.player-bar[_ngcontent-%COMP%]   .player-content[_ngcontent-%COMP%]   .control-area[_ngcontent-%COMP%]   .controller[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.player-bar[_ngcontent-%COMP%]   .player-content[_ngcontent-%COMP%]   .control-area[_ngcontent-%COMP%]   .controller[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background-color: unset;\n}\n\n.player-bar[_ngcontent-%COMP%]   .player-content[_ngcontent-%COMP%]   .control-area[_ngcontent-%COMP%]   .controller[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n.player-bar[_ngcontent-%COMP%]   .player-content[_ngcontent-%COMP%]   .control-area[_ngcontent-%COMP%]   .controller[_ngcontent-%COMP%]   .play-button[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  background-color: #6ac7cc;\n  padding: 12px;\n  border-radius: 50%;\n}\n\n.player-bar[_ngcontent-%COMP%]   .player-content[_ngcontent-%COMP%]   .control-area[_ngcontent-%COMP%]   .controller[_ngcontent-%COMP%]   .play-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: invert(1);\n}\n\n.player[_ngcontent-%COMP%]   .songInfo[_ngcontent-%COMP%]   .singer[_ngcontent-%COMP%], \n.song[_ngcontent-%COMP%] {\n  margin: 3px auto;\n  font-size: 15px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n}\n\n.player[_ngcontent-%COMP%]   .songInfo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 180px;\n  height: 140px;\n  border-radius: 14px;\n  object-fit: cover;\n}\n\n.player[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\n.player[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  height: 10px;\n  background-color: white;\n  margin-left: 5px;\n}\n\n.playerControllers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background-color: unset;\n}\n\n.playerControllers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  filter: invert(1);\n}\n\n.addFunc[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px !important;\n  height: 18px !important;\n}\n\n.player[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.mini-artists-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  gap: 10px;\n}\n\n.mini-artists-list[_ngcontent-%COMP%]   .singer[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n\n.mini-artists-list[_ngcontent-%COMP%]   .singer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 12vw;\n  height: 12vw;\n  object-fit: cover;\n  border-radius: 12px;\n  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);\n}\n\n.mini-artists-list[_ngcontent-%COMP%]   .singer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: auto;\n}\n\n@media screen and (max-width: 470px) {\n  .player-bar[_ngcontent-%COMP%]   .player-content[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n  .player-bar[_ngcontent-%COMP%]   .player-content[_ngcontent-%COMP%]   .control-area[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .controller[_ngcontent-%COMP%]   .play-button[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n    padding: 7px;\n  }\n  .player-bar[_ngcontent-%COMP%]   .player-content[_ngcontent-%COMP%]   .music-info-area[_ngcontent-%COMP%] {\n    width: 50vw;\n  }\n  .player-bar[_ngcontent-%COMP%]   .player-content[_ngcontent-%COMP%]   .control-area[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .controller[_ngcontent-%COMP%]   .additional-func[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 767px) {\n  .player-bar[_ngcontent-%COMP%]   .player-content[_ngcontent-%COMP%]   .control-area[_ngcontent-%COMP%] {\n    width: unset !important;\n  }\n  .player-bar[_ngcontent-%COMP%]   .player-content[_ngcontent-%COMP%]   .control-area[_ngcontent-%COMP%]   .controller[_ngcontent-%COMP%] {\n    width: 75%;\n    margin: 0px;\n  }\n  .player-bar[_ngcontent-%COMP%]   .player-content[_ngcontent-%COMP%]   .music-info[_ngcontent-%COMP%] {\n    width: 180px;\n    max-width: unset;\n  }\n  .left[_ngcontent-%COMP%], \n   .right[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .center[_ngcontent-%COMP%] {\n    position: unset;\n    width: 90% !important;\n    left: 0px !important;\n    margin: auto;\n  }\n  .mobileNavbar[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n@media screen and (min-width: 768px) {\n  .singer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 6vw !important;\n    height: 6vw !important;\n  }\n}\n@media screen and (min-width: 1100px) {\n  .singer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 5vw !important;\n    height: 5vw !important;\n  }\n}\n@media screen and (max-width: 1190px) {\n  .player[_ngcontent-%COMP%]   .songInfo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 18vh;\n  }\n  .player[_ngcontent-%COMP%]   .songInfo[_ngcontent-%COMP%]   .singer[_ngcontent-%COMP%] {\n    font-size: 2.2vh;\n  }\n  .player[_ngcontent-%COMP%]   .songInfo[_ngcontent-%COMP%]   .song[_ngcontent-%COMP%] {\n    font-size: 1.7vh;\n  }\n  .playerControllers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 2vw;\n    height: 3vh;\n  }\n  .left[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .mobileNavbar[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .right[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 17px auto;\n  }\n  .profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 6vh;\n    height: 6vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTs7RUFFRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlEQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHdEQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTs7O0VBR0UsaUJBQUE7QUFDRjs7QUFFQTs7O0VBR0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBOztFQUVFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsMENBQUE7RUFDQSxrREFBQTtFQUNBLGdDQUFBO0VBQ0EsMENBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBR0E7O0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFNBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLFVBQUE7RUFBRjtFQUdBO0lBTUUsV0FBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VBTkY7RUFTQTtJQUNFLFdBQUE7RUFQRjtFQVVBO0lBTUUsYUFBQTtFQWJGO0FBQ0Y7QUFnQkE7RUFDRTtJQUNFLHVCQUFBO0VBZEY7RUFpQkE7SUFDRSxVQUFBO0lBQ0EsV0FBQTtFQWZGO0VBbUJBO0lBQ0UsWUFBQTtJQUNBLGdCQUFBO0VBakJGO0VBb0JBOztJQUVFLGFBQUE7RUFsQkY7RUFxQkE7SUFDRSxlQUFBO0lBQ0EscUJBQUE7SUFDQSxvQkFBQTtJQUNBLFlBQUE7RUFuQkY7RUFzQkE7SUFDRSxhQUFBO0VBcEJGO0FBQ0Y7QUF1QkE7RUFDRTtJQUNFLHFCQUFBO0lBQ0Esc0JBQUE7RUFyQkY7QUFDRjtBQXdCQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSxzQkFBQTtFQXRCRjtBQUNGO0FBeUJBO0VBQ0U7SUFDRSxZQUFBO0VBdkJGO0VBMEJBO0lBQ0UsZ0JBQUE7RUF4QkY7RUEyQkE7SUFDRSxnQkFBQTtFQXpCRjtFQTRCQTtJQUNFLFVBQUE7SUFDQSxXQUFBO0VBMUJGO0VBNkJBOzs7SUFHRSxpQkFBQTtFQTNCRjtFQThCQTtJQUNFLFVBQUE7SUFDQSxXQUFBO0VBNUJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgdHJhbnNpdGlvbjogMC4xcztcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5mbGV4IGgxIHtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaXMtYWN0aXZlLXRhYiB7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICM4MmZmZDA7XG59XG5cbi5tb3JlQnV0dG9uIGltZyB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5tb3JlQnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5sb2dvIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG5cbi5sb2dvIGEgaW1nIHtcbiAgd2lkdGg6IDI4cHg7XG59XG5cbi5tb2JpbGVOYXZiYXIge1xuICBkaXNwbGF5OiBub25lO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vYmlsZU5hdmJhciAudGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogOTYlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5sZWZ0LFxuLnJpZ2h0IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ubGVmdCB7XG4gIHdpZHRoOiAxN3Z3O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNkY2UyZWE4YztcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xufVxuXG4ucmlnaHQge1xuICB3aWR0aDogMjB2dztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA3NSU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2RjZTJlYThjO1xuICBwYWRkaW5nLWxlZnQ6IDIlO1xuICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG5cbi5jZW50ZXIge1xuICB3aWR0aDogNTR2dztcbiAgbGVmdDogMjB2dztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbn1cblxuLnJpZ2h0IGgxIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW46IDVweCBhdXRvO1xufVxuXG4ubGVmdCBhIHAsXG4ubGVmdCAudGFicyxcbi5tb2JpbGVOYXZiYXIgYSBwIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5sZWZ0IC50YWJzIGgxLFxuLm1vYmlsZU5hdmJhciAudGFicyBoMSxcbi5yaWdodCAudGFicyBoMSB7XG4gIG1hcmdpbjogMi41dmggYXV0bztcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY4NzQ5MDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubGVmdCAudGFicyAudGFiIGEgaW1nLFxuLm1vYmlsZU5hdmJhciAudGFicyAudGFiIGEgaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLmxlZnQgLnRhYnMgLnRhYixcbi5tb2JpbGVOYXZiYXIgLnRhYnMgLnRhYiB7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG59XG5cbi5sZWZ0IC50YWJzIC50YWIgYSxcbi5tb2JpbGVOYXZiYXIgLnRhYnMgLnRhYiBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNjg3NDkwO1xufVxuXG4ubGVmdCAudGFicyAudGFiIGE6aG92ZXIge1xuICBjb2xvcjogIzYyYzQ5ZTtcbn1cblxuLnByb2ZpbGUgYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNjg3NDkwO1xufVxuXG4ucHJvZmlsZSBpbWcge1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnBsYXllci1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KSBzYXR1cmF0ZSgxODAlKTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCkgc2F0dXJhdGUoMTgwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwcHggMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwOSwgMjEzLCAyMTksIDAuMyk7XG59XG5cbi5wbGF5ZXItYmFyIC5wbGF5ZXItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiA1cHggMHB4O1xuICBnYXA6IDEwcHg7XG59XG5cbi5wbGF5ZXItYmFyIC5wbGF5ZXItY29udGVudCAubXVzaWMtaW5mby1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ucGxheWVyLWJhciAubXVzaWMtaW5mby1hcmVhIGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ucGxheWVyLWJhciAucGxheWVyLWNvbnRlbnQgLm11c2ljLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuXG4ucGxheWVyLWJhciAucGxheWVyLWNvbnRlbnQgLm11c2ljLWluZm8gaDMge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA1cHggMHB4IDBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnBsYXllci1iYXIgLnBsYXllci1jb250ZW50IC5tdXNpYy1pbmZvIHAge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBsYXllci1iYXIgLnBsYXllci1jb250ZW50IC5jb250cm9sLWFyZWEge1xuICB3aWR0aDogODUlO1xufVxuXG4ucGxheWVyLWJhciAuY29udHJvbC1hbmQtc2xpZGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBnYXA6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGxheWVyLWJhciAucGxheWVyLWNvbnRlbnQgLnZvbHVtZS1zbGlkZXIgI3ZvbC1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IDdweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCA0NTBtcyBlYXNlLWluO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5wbGF5ZXItYmFyIC5wbGF5ZXItY29udGVudCAuY29udHJvbC1hcmVhIC5jb250cm9sbGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucGxheWVyLWJhciAucGxheWVyLWNvbnRlbnQgLmNvbnRyb2wtYXJlYSAuY29udHJvbGxlciBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xufVxuXG4ucGxheWVyLWJhciAucGxheWVyLWNvbnRlbnQgLmNvbnRyb2wtYXJlYSAuY29udHJvbGxlciBidXR0b24gaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLnBsYXllci1iYXIgLnBsYXllci1jb250ZW50IC5jb250cm9sLWFyZWEgLmNvbnRyb2xsZXIgLnBsYXktYnV0dG9uIHtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZhYzdjYztcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ucGxheWVyLWJhciAucGxheWVyLWNvbnRlbnQgLmNvbnRyb2wtYXJlYSAuY29udHJvbGxlciAucGxheS1idXR0b24gaW1nIHtcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XG59XG5cblxuLnBsYXllciAuc29uZ0luZm8gLnNpbmdlcixcbi5zb25nIHtcbiAgbWFyZ2luOiAzcHggYXV0bztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5wbGF5ZXIgLnNvbmdJbmZvIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnBsYXllciAuY29udGFpbmVyIC5sZWZ0LXNpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBsYXllciAuY29udGFpbmVyIC5yb3cgLnByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5wbGF5ZXJDb250cm9sbGVycyBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xufVxuXG4ucGxheWVyQ29udHJvbGxlcnMgYnV0dG9uIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xufVxuXG4uYWRkRnVuYyBpbWcge1xuICB3aWR0aDogMThweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbn1cblxuLnBsYXllciBoMSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLm1pbmktYXJ0aXN0cy1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcbiAgZ2FwOiAxMHB4O1xufVxuXG4ubWluaS1hcnRpc3RzLWxpc3QgLnNpbmdlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5taW5pLWFydGlzdHMtbGlzdCAuc2luZ2VyIGltZyB7XG4gIHdpZHRoOiAxMnZ3O1xuICBoZWlnaHQ6IDEydnc7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLm1pbmktYXJ0aXN0cy1saXN0IC5zaW5nZXIgaDMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDcwcHgpIHtcbiAgLnBsYXllci1iYXIgLnBsYXllci1jb250ZW50IHtcbiAgICB3aWR0aDogOTUlO1xuICB9XG5cbiAgLnBsYXllci1iYXJcbiAgICAucGxheWVyLWNvbnRlbnRcbiAgICAuY29udHJvbC1hcmVhXG4gICAgLmxlZnQtc2lkZVxuICAgIC5jb250cm9sbGVyXG4gICAgLnBsYXktYnV0dG9uIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgcGFkZGluZzogN3B4O1xuICB9XG5cbiAgLnBsYXllci1iYXIgLnBsYXllci1jb250ZW50IC5tdXNpYy1pbmZvLWFyZWEge1xuICAgIHdpZHRoOiA1MHZ3O1xuICB9XG5cbiAgLnBsYXllci1iYXJcbiAgICAucGxheWVyLWNvbnRlbnRcbiAgICAuY29udHJvbC1hcmVhXG4gICAgLmxlZnQtc2lkZVxuICAgIC5jb250cm9sbGVyXG4gICAgLmFkZGl0aW9uYWwtZnVuYyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAucGxheWVyLWJhciAucGxheWVyLWNvbnRlbnQgLmNvbnRyb2wtYXJlYSB7XG4gICAgd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGxheWVyLWJhciAucGxheWVyLWNvbnRlbnQgLmNvbnRyb2wtYXJlYSAuY29udHJvbGxlciB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG5cbiAgLnBsYXllci1iYXIgLnBsYXllci1jb250ZW50IC5tdXNpYy1pbmZvIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgfVxuXG4gIC5sZWZ0LFxuICAucmlnaHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY2VudGVyIHtcbiAgICBwb3NpdGlvbjogdW5zZXQ7XG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gIC5tb2JpbGVOYXZiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNpbmdlciBpbWcge1xuICAgIHdpZHRoOiA2dncgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDZ2dyAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExMDBweCkge1xuICAuc2luZ2VyIGltZyB7XG4gICAgd2lkdGg6IDV2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNXZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5MHB4KSB7XG4gIC5wbGF5ZXIgLnNvbmdJbmZvIGltZyB7XG4gICAgaGVpZ2h0OiAxOHZoO1xuICB9XG5cbiAgLnBsYXllciAuc29uZ0luZm8gLnNpbmdlciB7XG4gICAgZm9udC1zaXplOiAyLjJ2aDtcbiAgfVxuXG4gIC5wbGF5ZXIgLnNvbmdJbmZvIC5zb25nIHtcbiAgICBmb250LXNpemU6IDEuN3ZoO1xuICB9XG5cbiAgLnBsYXllckNvbnRyb2xsZXJzIGJ1dHRvbiBpbWcge1xuICAgIHdpZHRoOiAydnc7XG4gICAgaGVpZ2h0OiAzdmg7XG4gIH1cblxuICAubGVmdCAudGFicyBoMSxcbiAgLm1vYmlsZU5hdmJhciAudGFicyBoMSxcbiAgLnJpZ2h0IC50YWJzIGgxIHtcbiAgICBtYXJnaW46IDE3cHggYXV0bztcbiAgfVxuXG4gIC5wcm9maWxlIGltZyB7XG4gICAgd2lkdGg6IDZ2aDtcbiAgICBoZWlnaHQ6IDZ2aDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8952);

function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}

/***/ }),

/***/ 2120:
/*!********************************************************************************************!*\
  !*** ./src/app/shared_components/additional_components/album-cube/album-cube.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumCubeComponent: () => (/* binding */ AlbumCubeComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


const _c0 = a0 => [a0];
class AlbumCubeComponent {
  constructor() {}
  static #_ = this.ɵfac = function AlbumCubeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AlbumCubeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AlbumCubeComponent,
    selectors: [["app-album-cube"]],
    inputs: {
      album: "album"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 5,
    consts: [[1, "album", 3, "routerLink"], [1, "albumCube"], ["alt", "", 1, "image", 3, "src"], [1, "albumInfo"]],
    template: function AlbumCubeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "/album/" + ctx.album.album));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.album.albumCover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.album.album);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: [".albumCube[_ngcontent-%COMP%] {\n    margin: auto;\n    text-align: center;\n    margin-top: 20px;\n}\n\n.albumInfo[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.image[_ngcontent-%COMP%] {\n    width: 11vw;\n    height: 11vw;\n    border-radius: 22px;\n    object-fit: cover;\n    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);\n}\n\nh3[_ngcontent-%COMP%] {\n    max-width: 119px;\n    font-size: 15px;\n    margin: auto;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 600;\n    color: #3c4356;\n}\n\np[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin: auto;\n    margin-top: 3px;\n    font-family: 'Montserrat', sans-serif;\n}\n\n\n@media screen and (max-width:767px) {\n    .image[_ngcontent-%COMP%] {\n        width: 21vw;\n        height: 21vw;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkX2NvbXBvbmVudHMvYWRkaXRpb25hbF9jb21wb25lbnRzL2FsYnVtLWN1YmUvYWxidW0tY3ViZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YscUNBQXFDO0FBQ3pDOzs7QUFHQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5hbGJ1bUN1YmUge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmFsYnVtSW5mbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2Uge1xuICAgIHdpZHRoOiAxMXZ3O1xuICAgIGhlaWdodDogMTF2dztcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5oMyB7XG4gICAgbWF4LXdpZHRoOiAxMTlweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzNjNDM1Njtcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XG4gICAgLmltYWdlIHtcbiAgICAgICAgd2lkdGg6IDIxdnc7XG4gICAgICAgIGhlaWdodDogMjF2dztcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6236:
/*!************************************************************************************!*\
  !*** ./src/app/shared_components/additional_components/artist/artist.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtistComponent: () => (/* binding */ ArtistComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


const _c0 = a0 => [a0];
class ArtistComponent {
  constructor() {}
  static #_ = this.ɵfac = function ArtistComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArtistComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ArtistComponent,
    selectors: [["app-artist"]],
    inputs: {
      singer: "singer"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 5,
    consts: [[1, "singer", 3, "routerLink"], ["alt", "", 1, "image", 3, "src"], [1, "singerInfo"]],
    template: function ArtistComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "/artist-info/" + ctx.singer.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.singer.coverphoto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.singer.singer);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: [".singer[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.singerInfo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 10px auto;\n}\n\n.singer[_ngcontent-%COMP%], \n.image[_ngcontent-%COMP%] {\n  max-width: 115px;\n}\n\n.image[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 50vw;\n  max-height: 115px;\n  border-radius: 22px;\n  object-fit: cover;\n  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: unset;\n  font-family: \"Montserrat\", sans-serif;\n  color: #3c4356;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkX2NvbXBvbmVudHMvYWRkaXRpb25hbF9jb21wb25lbnRzL2FydGlzdC9hcnRpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxjQUFjO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbmdlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2luZ2VySW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG5cbi5zaW5nZXIsXG4uaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDExNXB4O1xufVxuXG4uaW1hZ2Uge1xuICB3aWR0aDogNTB2dztcbiAgaGVpZ2h0OiA1MHZ3O1xuICBtYXgtaGVpZ2h0OiAxMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiB1bnNldDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzNjNDM1Njtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7328:
/*!******************************************************************************************!*\
  !*** ./src/app/shared_components/additional_components/song-cube/song-cube.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SongCubeComponent: () => (/* binding */ SongCubeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_status_exchanger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared_services/status-exchanger.service */ 7984);


class SongCubeComponent {
  constructor(statusExchanger) {
    this.statusExchanger = statusExchanger;
  }
  playSong(songID) {
    this.statusExchanger.activeSongId.emit(songID);
  }
  static #_ = this.ɵfac = function SongCubeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SongCubeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_status_exchanger_service__WEBPACK_IMPORTED_MODULE_0__.StatusExchangerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SongCubeComponent,
    selectors: [["app-song-cube"]],
    inputs: {
      song: "song"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 3,
    consts: [[1, "song"], [1, "songCube"], ["alt", "", 1, "image", 3, "src"], [1, "play", 3, "click"], ["src", "assets/icons/play.svg", "alt", ""], [1, "songInfo"]],
    template: function SongCubeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SongCubeComponent_Template_button_click_3_listener() {
          return ctx.playSong(ctx.song.id);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.song.coverphoto, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.song.singer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.song.songtitle);
      }
    },
    styles: [".song[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 140px;\n  margin: 0px 20px;\n}\n\n.songCube[_ngcontent-%COMP%] {\n  margin: auto;\n  text-align: center;\n  max-width: 119px;\n  height: 125px;\n  margin-top: 20px;\n}\n\n.songInfo[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.image[_ngcontent-%COMP%] {\n  width: 115px;\n  height: 115px;\n  border-radius: 22px;\n  object-fit: cover;\n  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: unset;\n  font-family: 'Montserrat', sans-serif;\n  color: #3c4356;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: unset;\n  margin-top: 3px;\n  font-family: 'Montserrat', sans-serif;\n}\n\n.play[_ngcontent-%COMP%] {\n  position: relative;\n  border: none;\n  background: white;\n  border-radius: 6px;\n  left: 28%;\n  bottom: 37%;\n  width: 30px;\n  height: 30px;\n  align-items: center;\n}\n\n.play[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n\n@media screen and (min-width:300px) and (max-width: 525px) {\n  .song[_ngcontent-%COMP%] {\n    margin: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkX2NvbXBvbmVudHMvYWRkaXRpb25hbF9jb21wb25lbnRzL3NvbmctY3ViZS9zb25nLWN1YmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixlQUFlO0VBQ2YscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5zb25nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTQwcHg7XG4gIG1hcmdpbjogMHB4IDIwcHg7XG59XG5cbi5zb25nQ3ViZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDExOXB4O1xuICBoZWlnaHQ6IDEyNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc29uZ0luZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZSB7XG4gIHdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiB1bnNldDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzYzQzNTY7XG59XG5cbnAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogdW5zZXQ7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuLnBsYXkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbGVmdDogMjglO1xuICBib3R0b206IDM3JTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBsYXkgaW1nIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDozMDBweCkgYW5kIChtYXgtd2lkdGg6IDUyNXB4KSB7XG4gIC5zb25nIHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6488:
/*!********************************************************************************!*\
  !*** ./src/app/shared_components/additional_components/song/song.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SongComponent: () => (/* binding */ SongComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_status_exchanger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared_services/status-exchanger.service */ 7984);


class SongComponent {
  constructor(statusExchanger) {
    this.statusExchanger = statusExchanger;
  }
  playSong(songID) {
    this.statusExchanger.activeSongId.emit(songID);
  }
  static #_ = this.ɵfac = function SongComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_status_exchanger_service__WEBPACK_IMPORTED_MODULE_0__.StatusExchangerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SongComponent,
    selectors: [["app-song"]],
    inputs: {
      song: "song"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 3,
    consts: [[1, "song"], [1, "songDetails"], ["alt", "", 1, "image", 3, "src"], [1, "songInfo"], [1, "greyTitle"], [1, "controls"], [1, "play", 3, "click"], ["src", "assets/icons/play.svg", "alt", "", 1, "svg"]],
    template: function SongComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5)(9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SongComponent_Template_button_click_9_listener() {
          return ctx.playSong(ctx.song.id);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.song.coverphoto, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.song.singer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.song.songtitle);
      }
    },
    styles: [".image[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    object-fit: cover;\n    border-radius: 11px;\n    margin-right: 20px;\n    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);\n}\n\n.song[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 15px;\n}\n\n.songDetails[_ngcontent-%COMP%] {\n    display: flex;\n}\n\nh3[_ngcontent-%COMP%] {\n    margin: unset;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 600;\n    color: #3c4356;\n}\n\np[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin: unset;\n    margin-top: 6px;\n    font-family: 'Montserrat', sans-serif;\n}\n\nbutton[_ngcontent-%COMP%] {\n    border: none;\n    background: none;\n}\n\n.play[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkX2NvbXBvbmVudHMvYWRkaXRpb25hbF9jb21wb25lbnRzL3Nvbmcvc29uZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtJQUNmLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uc29uZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uc29uZ0RldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbmgzIHtcbiAgICBtYXJnaW46IHVuc2V0O1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzNjNDM1Njtcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogdW5zZXQ7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbmJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5wbGF5IGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 89:
/*!**********************************************************************!*\
  !*** ./src/app/shared_components/album-page/album-page.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumPageComponent: () => (/* binding */ AlbumPageComponent)
/* harmony export */ });
/* harmony import */ var _home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _additional_components_song_song_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../additional_components/song/song.component */ 6488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared_services/data-manager.service */ 6108);






function AlbumPageComponent_app_song_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-song", 5);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("song", item_r1);
  }
}
class AlbumPageComponent {
  constructor(router, manager) {
    this.router = router;
    this.manager = manager;
  }
  ngOnInit() {
    var _this = this;
    this.router.paramMap.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
        _this.albumName = params.get('album');
        try {
          _this.songs = yield _this.manager.getSongs();
          _this.albumSongs = _this.songs.filter(s => s.album === _this.albumName);
          _this.albums = yield _this.manager.getAlbums();
          const album = _this.albums.find(s => s.album === _this.albumName);
          if (album) {
            _this.albumCover = album.albumCover;
          }
        } catch (error) {
          console.error('Error fetching data', error);
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  static #_ = this.ɵfac = function AlbumPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AlbumPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_2__.DataManagerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AlbumPageComponent,
    selectors: [["app-album-page"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 3,
    consts: [[1, "albumInfo"], [1, "greyTitle"], [1, "albumCover", 3, "src"], [1, "albumsongs"], [3, "song", 4, "ngFor", "ngForOf"], [3, "song"]],
    template: function AlbumPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AlbumPageComponent_app_song_5_Template, 1, 1, "app-song", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.albumName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.albumCover, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.albumSongs);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgFor, _additional_components_song_song_component__WEBPACK_IMPORTED_MODULE_1__.SongComponent],
    styles: [".albumCover[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n    margin-bottom: 20px;\n    object-fit: cover;\n    border-radius: 12px;\n    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkX2NvbXBvbmVudHMvYWxidW0tcGFnZS9hbGJ1bS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLCtDQUErQztBQUNuRCIsInNvdXJjZXNDb250ZW50IjpbIi5hbGJ1bUNvdmVyIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4767:
/*!**************************************************************!*\
  !*** ./src/app/shared_components/albums/albums.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumsComponent: () => (/* binding */ AlbumsComponent)
/* harmony export */ });
/* harmony import */ var _home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _additional_components_album_cube_album_cube_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../additional_components/album-cube/album-cube.component */ 2120);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared_services/data-manager.service */ 6108);







const _c0 = a0 => ({
  "display": a0
});
function AlbumsComponent_app_album_cube_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-album-cube", 3);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("album", item_r1)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, item_r1.album !== "" ? "block" : "none"));
  }
}
class AlbumsComponent {
  constructor(manager) {
    this.manager = manager;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.albums = yield _this.manager.getAlbums();
    })();
  }
  static #_ = this.ɵfac = function AlbumsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AlbumsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_2__.DataManagerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AlbumsComponent,
    selectors: [["app-albumbs"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 4,
    consts: [[1, "greyTitle"], [1, "albums-list"], ["class", "album", 3, "album", "ngStyle", 4, "ngFor", "ngForOf"], [1, "album", 3, "album", "ngStyle"]],
    template: function AlbumsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AlbumsComponent_app_album_cube_4_Template, 1, 4, "app-album-cube", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "Albums"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.albums);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgFor, _additional_components_album_cube_album_cube_component__WEBPACK_IMPORTED_MODULE_1__.AlbumCubeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9393:
/*!************************************************************************!*\
  !*** ./src/app/shared_components/artist-page/artist-page.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtistPageComponent: () => (/* binding */ ArtistPageComponent)
/* harmony export */ });
/* harmony import */ var _home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _additional_components_song_song_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../additional_components/song/song.component */ 6488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared_services/data-manager.service */ 6108);






function ArtistPageComponent_div_0_app_song_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-song", 5);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("song", item_r1);
  }
}
function ArtistPageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ArtistPageComponent_div_0_app_song_5_Template, 1, 1, "app-song", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.singer.singer);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.singer.coverphoto, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.singerSongs);
  }
}
class ArtistPageComponent {
  constructor(router, manager) {
    this.router = router;
    this.manager = manager;
  }
  ngOnInit() {
    var _this = this;
    this.router.paramMap.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
        _this.singerId = params.get('id');
        try {
          _this.songs = yield _this.manager.getSongs();
          _this.singers = yield _this.manager.getSingers();
          if (_this.singerId) {
            const _singer = _this.singers.filter(s => s.id == _this.singerId);
            if (_singer.length > 0) {
              _this.singer = _singer[0];
              _this.singerSongs = _this.songs.filter(s => s.singer === _singer[0].singer);
            }
          }
        } catch (error) {
          console.error('Error fetching data', error);
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  static #_ = this.ɵfac = function ArtistPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArtistPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_2__.DataManagerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ArtistPageComponent,
    selectors: [["app-artist-page"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "singerInfo", 4, "ngIf"], [1, "singerInfo"], [1, "artistPhoto", 3, "src"], [1, "singerSongs"], [3, "song", 4, "ngFor", "ngForOf"], [3, "song"]],
    template: function ArtistPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ArtistPageComponent_div_0_Template, 6, 3, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.singerId && ctx.singer);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgFor, _additional_components_song_song_component__WEBPACK_IMPORTED_MODULE_1__.SongComponent],
    styles: [".artistPhoto[_ngcontent-%COMP%] {\n    width: 150px;\n    margin-bottom: 20px;\n    object-fit: cover;\n    height: 150px;\n    border-radius: 12px;\n    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkX2NvbXBvbmVudHMvYXJ0aXN0LXBhZ2UvYXJ0aXN0LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsK0NBQStDO0FBQ25EIiwic291cmNlc0NvbnRlbnQiOlsiLmFydGlzdFBob3RvIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 309:
/*!****************************************************************!*\
  !*** ./src/app/shared_components/artists/artists.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtistsComponent: () => (/* binding */ ArtistsComponent)
/* harmony export */ });
/* harmony import */ var _home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _additional_components_artist_artist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../additional_components/artist/artist.component */ 6236);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared_services/data-manager.service */ 6108);







function ArtistsComponent_app_artist_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-artist", 3);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("singer", item_r1);
  }
}
class ArtistsComponent {
  constructor(manager) {
    this.manager = manager;
    this.singers = [];
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.singers = yield _this.manager.getSingers();
    })();
  }
  static #_ = this.ɵfac = function ArtistsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArtistsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_2__.DataManagerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ArtistsComponent,
    selectors: [["app-artists"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 4,
    consts: [[1, "greyTitle"], [1, "artists-list"], [3, "singer", 4, "ngFor", "ngForOf"], [3, "singer"]],
    template: function ArtistsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ArtistsComponent_app_artist_4_Template, 1, 1, "app-artist", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "Artists"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.singers);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgFor, _additional_components_artist_artist_component__WEBPACK_IMPORTED_MODULE_1__.ArtistComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: ["app-artist[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkX2NvbXBvbmVudHMvYXJ0aXN0cy9hcnRpc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWFydGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9933:
/*!******************************************************************!*\
  !*** ./src/app/shared_components/discover/discover.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiscoverComponent: () => (/* binding */ DiscoverComponent)
/* harmony export */ });
/* harmony import */ var _home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _additional_components_song_song_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../additional_components/song/song.component */ 6488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared_services/data-manager.service */ 6108);







function DiscoverComponent_app_song_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-song", 3);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("song", item_r1);
  }
}
class DiscoverComponent {
  constructor(manager) {
    this.manager = manager;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.shuffledArray = yield _this.manager.getShuffledSongs(25);
    })();
  }
  static #_ = this.ɵfac = function DiscoverComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DiscoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_2__.DataManagerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DiscoverComponent,
    selectors: [["app-discover"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 4,
    consts: [[1, "greyTitle"], [1, "discover"], [3, "song", 4, "ngFor", "ngForOf"], [3, "song"]],
    template: function DiscoverComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DiscoverComponent_app_song_4_Template, 1, 1, "app-song", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "Discover"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.shuffledArray);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgFor, _additional_components_song_song_component__WEBPACK_IMPORTED_MODULE_1__.SongComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3823:
/*!******************************************************************!*\
  !*** ./src/app/shared_components/global50/global50.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Global50Component: () => (/* binding */ Global50Component)
/* harmony export */ });
/* harmony import */ var _home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _additional_components_song_cube_song_cube_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../additional_components/song-cube/song-cube.component */ 7328);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared_services/data-manager.service */ 6108);







function Global50Component_app_song_cube_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-song-cube", 6);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("song", item_r1);
  }
}
function Global50Component_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Global50Component_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.goTo("Back"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function Global50Component_button_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "button");
  }
}
function Global50Component_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Global50Component_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.goTo("Next"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class Global50Component {
  constructor(manager) {
    this.manager = manager;
    this.GlobalStart = 0;
    this.GlobalEnd = 16;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.songs = yield _this.manager.getShuffledSongs(50);
    })();
  }
  goTo(where) {
    if (where == "Back") {
      this.GlobalStart = this.GlobalStart - 16;
      this.GlobalEnd = this.GlobalEnd - 16;
    } else {
      this.GlobalStart = this.GlobalStart + 16;
      this.GlobalEnd = this.GlobalEnd + 16;
    }
  }
  static #_ = this.ɵfac = function Global50Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Global50Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_2__.DataManagerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: Global50Component,
    selectors: [["app-global50"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 11,
    consts: [[1, "title"], [1, "global50"], [3, "song", 4, "ngFor", "ngForOf"], [1, "navigation"], [3, "click", 4, "ngIf"], [4, "ngIf"], [3, "song"], [3, "click"], ["src", "assets/icons/chevrons-left.svg", "alt", "", 1, "svg"], ["src", "assets/icons/chevrons-right.svg", "alt", "", 1, "svg"]],
    template: function Global50Component_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, Global50Component_app_song_cube_4_Template, 1, 1, "app-song-cube", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, Global50Component_button_7_Template, 2, 0, "button", 4)(8, Global50Component_button_8_Template, 1, 0, "button", 5)(9, Global50Component_button_9_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 5, "Global Top 50"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](5, 7, ctx.songs, ctx.GlobalStart, ctx.GlobalEnd));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.GlobalStart > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.GlobalStart === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.GlobalEnd + 16 < ctx.songs.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgFor, _additional_components_song_cube_song_cube_component__WEBPACK_IMPORTED_MODULE_1__.SongCubeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: [".navigation[_ngcontent-%COMP%] {\n    width: 90%;\n    padding: 35px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n    background: none;\n    border: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkX2NvbXBvbmVudHMvZ2xvYmFsNTAvZ2xvYmFsNTAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwYWRkaW5nOiAzNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubmF2aWdhdGlvbiBidXR0b24ge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5061:
/*!**********************************************************!*\
  !*** ./src/app/shared_components/home/home.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _additional_components_song_song_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../additional_components/song/song.component */ 6488);
/* harmony import */ var _additional_components_song_cube_song_cube_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../additional_components/song-cube/song-cube.component */ 7328);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared_services/data-manager.service */ 6108);









const _c0 = () => ["/top50"];
const _c1 = () => ["/suggestions"];
const _c2 = () => ["/recent"];
function HomeComponent_app_song_cube_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-song-cube", 9);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("song", item_r1);
  }
}
function HomeComponent_app_song_cube_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-song-cube", 9);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("song", item_r2);
  }
}
function HomeComponent_div_25_app_song_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-song", 9);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("song", item_r3);
  }
}
function HomeComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HomeComponent_div_25_app_song_1_Template, 1, 1, "app-song", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](2, 1, ctx_r3.recentSongs, 0, 10));
  }
}
function HomeComponent_h3_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " You Haven't Played Any Songs Yet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class HomeComponent {
  constructor(manager) {
    this.manager = manager;
    this.top50songs = [];
    this.recentSongs = [];
    this.recommendedSongs = [];
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.recentSongs = yield _this.manager.getRecentSongs();
        _this.top50songs = yield _this.manager.getShuffledSongs(50);
        _this.recommendedSongs = yield _this.manager.getShuffledSongs(50);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    })();
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_3__.DataManagerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 27,
    vars: 27,
    consts: [[1, "title"], [3, "routerLink"], ["src", "assets/icons/more.svg", "alt", "", 1, "svg"], [1, "global50"], [3, "song", 4, "ngFor", "ngForOf"], [1, "suggestions"], [1, "recently"], ["class", "list", 4, "ngIf"], ["class", "notFound", 4, "ngIf"], [3, "song"], [1, "list"], [1, "notFound"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, HomeComponent_app_song_cube_7_Template, 1, 1, "app-song-cube", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 0)(10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, HomeComponent_app_song_cube_16_Template, 1, 1, "app-song-cube", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 0)(19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, HomeComponent_div_25_Template, 3, 5, "div", 7)(26, HomeComponent_h3_26_Template, 2, 0, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 10, "Global Top 50"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](8, 12, ctx.top50songs, 0, 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 16, "Songs You Might Like"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](25, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](17, 18, ctx.recommendedSongs, 0, 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 22, "Recently Played"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](26, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.recentSongs.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.recentSongs.length === 0);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgFor, _additional_components_song_cube_song_cube_component__WEBPACK_IMPORTED_MODULE_2__.SongCubeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _additional_components_song_song_component__WEBPACK_IMPORTED_MODULE_1__.SongComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.SlicePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    styles: [".title[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n}\n\n.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #475476;\n    font-size: 17px;\n    font-family: 'Montserrat', sans-serif;\n}\n\n.title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n}\n\n.title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background: none;\n    border: none;\n}\n\n.notFound[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-family: cursive;\n    color: #475476;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkX2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsY0FBYztBQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50aXRsZSBoMyB7XG4gICAgY29sb3I6ICM0NzU0NzY7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbi50aXRsZSBidXR0b24gaW1nIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbi50aXRsZSBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4ubm90Rm91bmQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICBjb2xvcjogIzQ3NTQ3Njtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8049:
/*!****************************************************************!*\
  !*** ./src/app/shared_components/profile/profile.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _additional_components_song_song_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../additional_components/song/song.component */ 6488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared_services/data-manager.service */ 6108);







function ProfileComponent_app_song_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-song", 12);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("song", item_r1);
  }
}
function ProfileComponent_button_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "button");
  }
}
function ProfileComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProfileComponent_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProfileComponent_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.goNext());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class ProfileComponent {
  constructor(manager) {
    this.manager = manager;
    this.navStart = 0;
    this.navEnd = 10;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.songs = yield _this.manager.getSongs();
    })();
  }
  goBack() {
    this.navStart = this.navStart - 10;
    this.navEnd = this.navEnd - 10;
  }
  goNext() {
    this.navStart = this.navStart + 10;
    this.navEnd = this.navEnd + 10;
  }
  static #_ = this.ɵfac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_2__.DataManagerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ProfileComponent,
    selectors: [["app-profile"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 23,
    vars: 17,
    consts: [[1, "profile"], [1, "profile-info"], [1, "profile-image"], ["src", "assets/icons/user-circle.svg", "alt", ""], [1, "profile-details"], [1, "detail"], [1, "added-songs"], [1, "title"], [3, "song", 4, "ngFor", "ngForOf"], [1, "navigator"], [4, "ngIf"], [3, "click", 4, "ngIf"], [3, "song"], [3, "click"], ["src", "assets/icons/arrow-left.svg", "alt", "", 1, "svg"], ["src", "assets/icons/arrow-right.svg", "alt", "", 1, "svg"]],
    template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5)(10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6)(14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ProfileComponent_app_song_17_Template, 1, 1, "app-song", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ProfileComponent_button_20_Template, 1, 0, "button", 10)(21, ProfileComponent_button_21_Template, 2, 0, "button", 11)(22, ProfileComponent_button_22_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 7, "Name"), " : XXXXXXXXXXXXX");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 9, "Profile Created"), ": XX.XX.XXXX");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 11, "User Added Songs"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](18, 13, ctx.songs, ctx.navStart, ctx.navEnd));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.navStart === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.navStart !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.navStart + 10 < ctx.songs.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgFor, _additional_components_song_song_component__WEBPACK_IMPORTED_MODULE_1__.SongComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: [".profile-info[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    max-width: 450px;\n    align-items: center;\n}\n\n.profile-image[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 160px;\n}\n\n.added-songs[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 25px;\n    margin: 25px auto;\n}\n\n.navigator[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    margin-top: 50px;\n}\n\n.navigator[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background: none;\n    border: none;\n    width: 90px;\n    height: 40px;\n}\n\n.navigator[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkX2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9maWxlLWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xufVxuXG4uYWRkZWQtc29uZ3MgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWFyZ2luOiAyNXB4IGF1dG87XG59XG5cbi5uYXZpZ2F0b3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5uYXZpZ2F0b3IgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5uYXZpZ2F0b3IgYnV0dG9uIGltZyB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4917:
/*!**************************************************************!*\
  !*** ./src/app/shared_components/recent/recent.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecentComponent: () => (/* binding */ RecentComponent)
/* harmony export */ });
/* harmony import */ var _home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _additional_components_song_cube_song_cube_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../additional_components/song-cube/song-cube.component */ 7328);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared_services/data-manager.service */ 6108);







function RecentComponent_app_song_cube_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-song-cube", 6);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("song", item_r1);
  }
}
function RecentComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RecentComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.goTo("Back"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RecentComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "button");
  }
}
function RecentComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RecentComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.goTo("Next"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class RecentComponent {
  constructor(manager) {
    this.manager = manager;
    this.recentSongs = [];
    this.GlobalStart = 0;
    this.GlobalEnd = 16;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.recentSongs = yield _this.manager.getRecentSongs();
      } catch (error) {
        console.error('Error fetching recent songs', error);
      }
    })();
  }
  goTo(where) {
    if (where == 'Back') {
      this.GlobalStart = this.GlobalStart - 16;
      this.GlobalEnd = this.GlobalEnd - 16;
    } else {
      this.GlobalStart = this.GlobalStart + 16;
      this.GlobalEnd = this.GlobalEnd + 16;
    }
  }
  static #_ = this.ɵfac = function RecentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RecentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_2__.DataManagerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: RecentComponent,
    selectors: [["app-recent"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 11,
    consts: [[1, "title"], [1, "recent"], [3, "song", 4, "ngFor", "ngForOf"], [1, "navigation"], [3, "click", 4, "ngIf"], [4, "ngIf"], [3, "song"], [3, "click"], ["src", "assets/icons/chevrons-left.svg", "alt", "", 1, "svg"], ["src", "assets/icons/chevrons-right.svg", "alt", "", 1, "svg"]],
    template: function RecentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, RecentComponent_app_song_cube_4_Template, 1, 1, "app-song-cube", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, RecentComponent_button_7_Template, 2, 0, "button", 4)(8, RecentComponent_button_8_Template, 1, 0, "button", 5)(9, RecentComponent_button_9_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 5, "Recently Played"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](5, 7, ctx.recentSongs, ctx.GlobalStart, ctx.GlobalEnd));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.GlobalStart > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.GlobalStart === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.GlobalEnd + 16 < ctx.recentSongs.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgFor, _additional_components_song_cube_song_cube_component__WEBPACK_IMPORTED_MODULE_1__.SongCubeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: [".navigation[_ngcontent-%COMP%] {\n    width: 90%;\n    padding: 35px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n    background: none;\n    border: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkX2NvbXBvbmVudHMvcmVjZW50L3JlY2VudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9uIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6IDM1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5uYXZpZ2F0aW9uIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7099:
/*!**************************************************************!*\
  !*** ./src/app/shared_components/search/search.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchComponent: () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _additional_components_song_song_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../additional_components/song/song.component */ 6488);
/* harmony import */ var _additional_components_artist_artist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../additional_components/artist/artist.component */ 6236);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared_services/data-manager.service */ 6108);








function SearchComponent_section_2_app_artist_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-artist", 7);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("singer", item_r1);
  }
}
function SearchComponent_section_2_app_song_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-song", 8);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("song", item_r2);
  }
}
function SearchComponent_section_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 2)(1, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SearchComponent_section_2_app_artist_5_Template, 1, 1, "app-artist", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SearchComponent_section_2_app_song_9_Template, 1, 1, "app-song", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, "SINGERS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.singerResults);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 6, "SONGS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.songResults);
  }
}
class SearchComponent {
  constructor(manager) {
    this.manager = manager;
    this.songResults = undefined;
    this.singerResults = undefined;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.songs = yield _this.manager.getSongs();
        _this.singers = yield _this.manager.getSingers();
      } catch (error) {
        console.error('Error fetching songs or singers', error);
      }
    })();
  }
  Search(event) {
    const newSong = event.target.value;
    let SingersFilter = this.singers.filter(value => value.singer.toLowerCase().slice(0, newSong.length) === newSong.toLowerCase());
    let SongsFilter = this.songs.filter(value => value.songtitle.toLowerCase().slice(0, newSong.length) === newSong.toLowerCase());
    if (newSong == '') {
      this.singerResults = undefined;
      this.songResults = undefined;
      SingersFilter = [];
      SongsFilter = [];
    } else {
      this.singerResults = SingersFilter;
      this.songResults = SongsFilter;
    }
  }
  static #_ = this.ɵfac = function SearchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_3__.DataManagerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SearchComponent,
    selectors: [["app-search"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 4,
    consts: [[1, "searchBar", 3, "input", "placeholder"], ["class", "results", 4, "ngIf"], [1, "results"], [1, "greyTitle"], [1, "singers-list"], [3, "singer", 4, "ngFor", "ngForOf"], [3, "song", 4, "ngFor", "ngForOf"], [3, "singer"], [3, "song"]],
    template: function SearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function SearchComponent_Template_input_input_0_listener($event) {
          return ctx.Search($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SearchComponent_section_2_Template, 10, 8, "section", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, "Search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.songResults || ctx.singerResults);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgFor, _additional_components_artist_artist_component__WEBPACK_IMPORTED_MODULE_2__.ArtistComponent, _additional_components_song_song_component__WEBPACK_IMPORTED_MODULE_1__.SongComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    styles: [".searchBar[_ngcontent-%COMP%] {\n    width: 95%;\n    height: 25px;\n    border-radius: 18px;\n    border: 5px solid white;\n    margin-top: 10px;\n}\n\n.searchBar[_ngcontent-%COMP%]:focus{\n    outline: none;\n}\n\n.singers-list[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkX2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGVBQWU7QUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoQmFyIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zZWFyY2hCYXI6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnNpbmdlcnMtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7137:
/*!*************************************************************************************!*\
  !*** ./src/app/shared_components/settings/languages/language/language.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageComponent: () => (/* binding */ LanguageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_shared_services_status_exchanger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared_services/status-exchanger.service */ 7984);



class LanguageComponent {
  constructor(router, statusExchanger) {
    this.router = router;
    this.statusExchanger = statusExchanger;
  }
  changeLanguage(languageCode) {
    localStorage.setItem("language", languageCode);
    this.router.navigate(["/"]);
    this.statusExchanger.activeLanguageCode.emit(languageCode);
  }
  static #_ = this.ɵfac = function LanguageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LanguageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_status_exchanger_service__WEBPACK_IMPORTED_MODULE_0__.StatusExchangerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LanguageComponent,
    selectors: [["app-language"]],
    inputs: {
      language: "language"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 1,
    consts: [[1, "language", 3, "click"]],
    template: function LanguageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LanguageComponent_Template_div_click_0_listener() {
          return ctx.changeLanguage(ctx.language.code);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.language.name);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6859:
/*!*****************************************************************************!*\
  !*** ./src/app/shared_components/settings/languages/languages.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguagesComponent: () => (/* binding */ LanguagesComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_models_language_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared_models/language.model */ 2048);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language/language.component */ 7137);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);






function LanguagesComponent_app_language_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-language", 2);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("language", item_r1);
  }
}
class LanguagesComponent {
  constructor() {
    this.languages = [new src_app_shared_models_language_model__WEBPACK_IMPORTED_MODULE_0__.Language('English', 'en'), new src_app_shared_models_language_model__WEBPACK_IMPORTED_MODULE_0__.Language('Georgian', 'ka'), new src_app_shared_models_language_model__WEBPACK_IMPORTED_MODULE_0__.Language('Russian', 'ru'), new src_app_shared_models_language_model__WEBPACK_IMPORTED_MODULE_0__.Language('Turkey', 'tr'), new src_app_shared_models_language_model__WEBPACK_IMPORTED_MODULE_0__.Language('Spanish', 'sp')];
  }
  static #_ = this.ɵfac = function LanguagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LanguagesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LanguagesComponent,
    selectors: [["app-languages"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 4,
    consts: [[1, "title"], [3, "language", 4, "ngFor", "ngForOf"], [3, "language"]],
    template: function LanguagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, LanguagesComponent_app_language_4_Template, 1, 1, "app-language", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, "Language"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.languages);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _language_language_component__WEBPACK_IMPORTED_MODULE_1__.LanguageComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4657:
/*!******************************************************************!*\
  !*** ./src/app/shared_components/settings/settings.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsComponent: () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_dark_mode_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared_services/dark-mode.service */ 1618);






const _c0 = () => ["/languages"];
class SettingsComponent {
  constructor(darkModeService) {
    this.darkModeService = darkModeService;
    this.darkModeStatus = JSON.parse(localStorage.getItem('dark-mode'));
  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.darkModeService.darkMode$.subscribe(status => {
      this.darkModeStatus = status;
    });
  }
  onResize() {
    this.innerWidth = window.innerWidth;
  }
  changeNightMode() {
    this.darkModeService.changeDarkModeStatus();
  }
  static #_ = this.ɵfac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_dark_mode_service__WEBPACK_IMPORTED_MODULE_0__.DarkModeService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SettingsComponent,
    selectors: [["app-settings"]],
    hostBindings: function SettingsComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function SettingsComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 18,
    vars: 15,
    consts: [[1, "settings"], [1, "sectionTitle", "greyTitle"], [1, "customise"], [1, "customiseTab", "nightMode"], [1, "settingTab"], [3, "click", "ngClass"], ["src", "assets/icons/lightoff.svg", "alt", ""], [1, "otherSettings"], [1, "settingTab", 3, "routerLink"]],
    template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "section", 2)(5, "div", 3)(6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_9_listener() {
          return ctx.changeNightMode();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7)(15, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 6, "CUSTOMISE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 8, "NIGHT MODE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.darkModeStatus === true ? "turnedOn" : "turnButton");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 10, "SETTINGS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 12, "Language"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: [".customiseTab[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-weight: bold;\n    margin: 5px 0px;\n    font-size: 15px;\n}\n\n.sectionTitle[_ngcontent-%COMP%] {\n    margin: 2% auto;\n    font-size: 17px;\n    letter-spacing: 7px;\n}\n\n\n.turnButton[_ngcontent-%COMP%] {\n    border: none;\n    width: 40px;\n    height: 40px;\n}\n\n.turnedOn[_ngcontent-%COMP%] {\n    border: none;\n    width: 40px;\n    height: 40px;\n    background-color: #4BA3A7;\n}\n\n.turnedOn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    filter: invert(1);\n}\n\n.settingTab[_ngcontent-%COMP%] {\n    font-weight: bold;\n    margin: 5px 0px;\n    font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkX2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtBQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21pc2VUYWIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnNlY3Rpb25UaXRsZSB7XG4gICAgbWFyZ2luOiAyJSBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsZXR0ZXItc3BhY2luZzogN3B4O1xufVxuXG5cbi50dXJuQnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuXG4udHVybmVkT24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRCQTNBNztcbn1cblxuLnR1cm5lZE9uIGltZyB7XG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XG59XG5cbi5zZXR0aW5nVGFiIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9225:
/*!************************************************************************!*\
  !*** ./src/app/shared_components/suggestions/suggestions.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuggestionsComponent: () => (/* binding */ SuggestionsComponent)
/* harmony export */ });
/* harmony import */ var _home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _additional_components_song_cube_song_cube_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../additional_components/song-cube/song-cube.component */ 7328);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared_services/data-manager.service */ 6108);







function SuggestionsComponent_app_song_cube_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-song-cube", 3);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("song", item_r1);
  }
}
class SuggestionsComponent {
  constructor(manager) {
    this.manager = manager;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.songs = yield _this.manager.getShuffledSongs(16);
      } catch (error) {
        console.error('Error fetching shuffled songs', error);
      }
    })();
  }
  static #_ = this.ɵfac = function SuggestionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SuggestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_data_manager_service__WEBPACK_IMPORTED_MODULE_2__.DataManagerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SuggestionsComponent,
    selectors: [["app-suggestions"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 4,
    consts: [[1, "title"], [1, "suggestions"], [3, "song", 4, "ngFor", "ngForOf"], [3, "song"]],
    template: function SuggestionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SuggestionsComponent_app_song_cube_5_Template, 1, 1, "app-song-cube", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, "Songs You Might Like"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.songs);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgFor, _additional_components_song_cube_song_cube_component__WEBPACK_IMPORTED_MODULE_1__.SongCubeComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: [".title[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n}\n\n.title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n}\n\n.title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background: none;\n    border: none;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkX2NvbXBvbmVudHMvc3VnZ2VzdGlvbnMvc3VnZ2VzdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRpdGxlIGJ1dHRvbiBpbWcge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbn1cblxuLnRpdGxlIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2609:
/*!**********************************************!*\
  !*** ./src/app/shared_models/album.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Album: () => (/* binding */ Album)
/* harmony export */ });
class Album {
  constructor(album, albumCover) {
    this.album = album;
    this.albumCover = albumCover;
  }
}

/***/ }),

/***/ 2048:
/*!*************************************************!*\
  !*** ./src/app/shared_models/language.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Language: () => (/* binding */ Language)
/* harmony export */ });
class Language {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}

/***/ }),

/***/ 9386:
/*!***********************************************!*\
  !*** ./src/app/shared_models/singer.model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PLsinger: () => (/* binding */ PLsinger)
/* harmony export */ });
class PLsinger {
  constructor(id, singer, coverphoto) {
    this.singer = singer;
    this.coverphoto = coverphoto;
    this.id = id;
  }
}

/***/ }),

/***/ 1618:
/*!******************************************************!*\
  !*** ./src/app/shared_services/dark-mode.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DarkModeService: () => (/* binding */ DarkModeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class DarkModeService {
  constructor() {
    this.darkMode$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(JSON.parse(localStorage.getItem('dark-mode')));
    if (localStorage.getItem("dark-mode") == "true") {
      document.body.classList.toggle('dark-mode');
    } else if (localStorage.getItem("dark-mode") == "false") {
      document.body.classList.toggle('light-mode');
    } else {
      localStorage.setItem("dark-mode", "false");
      document.body.classList.toggle('light-mode');
    }
  }
  changeDarkModeStatus() {
    if (document.body.classList.contains('dark-mode')) {
      document.body.classList.remove('dark-mode');
      document.body.classList.toggle('light-mode');
      localStorage.setItem("dark-mode", "false");
      this.darkMode$.next(false);
    } else {
      document.body.classList.remove('light-mode');
      document.body.classList.toggle('dark-mode');
      localStorage.setItem("dark-mode", "true");
      this.darkMode$.next(true);
    }
  }
  static #_ = this.ɵfac = function DarkModeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DarkModeService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DarkModeService,
    factory: DarkModeService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6108:
/*!*********************************************************!*\
  !*** ./src/app/shared_services/data-manager.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataManagerService: () => (/* binding */ DataManagerService)
/* harmony export */ });
/* harmony import */ var _home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _shared_models_album_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared_models/album.model */ 2609);
/* harmony import */ var _shared_models_singer_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared_models/singer.model */ 9386);
/* harmony import */ var rxjs_internal_lastValueFrom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/lastValueFrom */ 5342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);






class DataManagerService {
  constructor(http) {
    this.http = http;
    this.favoritedSongs = [];
    this.recentSongs = [];
    this.apiUrl = 'https://raw.githubusercontent.com/gokadzev/fake-apis-for-projects/main/feelife/mmpwa.json';
    this.playlistsApiUrl = 'https://raw.githubusercontent.com/gokadzev/fake-apis-for-projects/main/feelife/mmplaylists.json';
  }
  updateLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }
  addRecentSong(song) {
    if (!this.recentSongs.some(s => s.id === song.id)) {
      this.recentSongs.unshift(song);
      const recentSongsFromLocalStorage = this.getLocalStorage('recentSongs');
      recentSongsFromLocalStorage.push(song.id);
      this.updateLocalStorage('recentSongs', recentSongsFromLocalStorage);
      if (this.recentSongs.length > 49) {
        this.recentSongs.pop();
      }
    }
  }
  getRecentSongs() {
    var _this = this;
    return (0,_home_valeri_Documents_WORK_source_codes_feelife_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const recentSongsFromLocalStorage = _this.getLocalStorage('recentSongs');
      if (recentSongsFromLocalStorage.length !== _this.recentSongs.length) {
        const songs = yield _this.getSongs();
        const mappedSongs = recentSongsFromLocalStorage.map(id => songs.find(s => s.id === id));
        _this.recentSongs = mappedSongs || [];
      }
      return _this.recentSongs;
    })();
  }
  getSongs() {
    return (0,rxjs_internal_lastValueFrom__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(this.http.get(this.apiUrl)).then(response => response).catch(error => {
      console.error('Error fetching songs', error);
      return [];
    });
  }
  getSingers() {
    return this.getSongs().then(songs => {
      const singers = [];
      let singer = '';
      songs.forEach((song, index) => {
        if (singer !== song.coverphoto) {
          singers.push(new _shared_models_singer_model__WEBPACK_IMPORTED_MODULE_2__.PLsinger(index, song.singer, song.coverphoto));
          singer = song.coverphoto;
        }
      });
      return singers;
    });
  }
  getAlbums() {
    return this.getSongs().then(songs => {
      const albums = [];
      songs.forEach(song => {
        const existingAlbum = albums.find(album => album.album === song.album);
        if (!existingAlbum) {
          albums.push(new _shared_models_album_model__WEBPACK_IMPORTED_MODULE_1__.Album(song.album, song.albumCover));
        }
      });
      return albums;
    });
  }
  getPlaylists() {
    return (0,rxjs_internal_lastValueFrom__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(this.http.get(this.playlistsApiUrl)).then(response => response).catch(error => {
      console.error('Error fetching playlists', error);
      return [];
    });
  }
  getShuffledSongs(number) {
    return this.getSongs().then(songs => {
      const shuffledArray = [];
      let songsList = songs.slice(); // Create a copy of the songs list to shuffle.
      if (number === 'all') {
        number = songsList.length;
      }
      for (let i = 0; i < number; i++) {
        const randIndex = Math.floor(Math.random() * songsList.length);
        shuffledArray.push(songsList[randIndex]);
        songsList.splice(randIndex, 1); // Remove the selected song from the list.
      }
      return shuffledArray;
    });
  }
  static #_ = this.ɵfac = function DataManagerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DataManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: DataManagerService,
    factory: DataManagerService.ɵfac
  });
}

/***/ }),

/***/ 7984:
/*!*************************************************************!*\
  !*** ./src/app/shared_services/status-exchanger.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatusExchangerService: () => (/* binding */ StatusExchangerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class StatusExchangerService {
  constructor() {
    this.shuffleStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.activeSongId = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.activeLanguageCode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.actionTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.playerModechange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  static #_ = this.ɵfac = function StatusExchangerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || StatusExchangerService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: StatusExchangerService,
    factory: StatusExchangerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 852);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app-routing.module */ 4114);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);










(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.importProvidersFrom)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateLoader,
      useFactory: _app_app_module__WEBPACK_IMPORTED_MODULE_0__.HttpLoaderFactory,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient]
    }
  })), {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__.HashLocationStrategy
  }, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.withInterceptorsFromDi)()), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.provideAnimations)()]
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map