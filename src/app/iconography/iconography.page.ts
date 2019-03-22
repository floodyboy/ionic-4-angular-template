import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iconography',
  templateUrl: './iconography.page.html',
  styleUrls: ['./iconography.page.scss'],
})
export class IconographyPage implements OnInit {

  icons =[  
    {  
       code: '0xf102',
       name: 'ios-add'
    },
    {  
       code: '0xf101',
       name: 'ios-add-circle'
    },
    {  
       code: '0xf100',
       name: 'ios-add-circle-outline'
    },
    {  
       code: '0xf137',
       name: 'ios-airplane'
    },
    {  
       code: '0xf3c8',
       name: 'ios-alarm'
    },
    {  
       code: '0xf3ca',
       name: 'ios-albums'
    },
    {  
       code: '0xf104',
       name: 'ios-alert'
    },
    {  
       code: '0xf106',
       name: 'ios-american-football'
    },
    {  
       code: '0xf3ce',
       name: 'ios-analytics'
    },
    {  
       code: '0xf108',
       name: 'ios-aperture'
    },
    {  
       code: '0xf10a',
       name: 'ios-apps'
    },
    {  
       code: '0xf10c',
       name: 'ios-appstore'
    },
    {  
       code: '0xf10e',
       name: 'ios-archive'
    },
    {  
       code: '0xf3cf',
       name: 'ios-arrow-back'
    },
    {  
       code: '0xf3d0',
       name: 'ios-arrow-down'
    },
    {  
       code: '0xf110',
       name: 'ios-arrow-dropdown'
    },
    {  
       code: '0xf125',
       name: 'ios-arrow-dropdown-circle'
    },
    {  
       code: '0xf112',
       name: 'ios-arrow-dropleft'
    },
    {  
       code: '0xf129',
       name: 'ios-arrow-dropleft-circle'
    },
    {  
       code: '0xf114',
       name: 'ios-arrow-dropright'
    },
    {  
       code: '0xf12b',
       name: 'ios-arrow-dropright-circle'
    },
    {  
       code: '0xf116',
       name: 'ios-arrow-dropup'
    },
    {  
       code: '0xf12d',
       name: 'ios-arrow-dropup-circle'
    },
    {  
       code: '0xf3d1',
       name: 'ios-arrow-forward'
    },
    {  
       code: '0xf117',
       name: 'ios-arrow-round-back'
    },
    {  
       code: '0xf118',
       name: 'ios-arrow-round-down'
    },
    {  
       code: '0xf119',
       name: 'ios-arrow-round-forward'
    },
    {  
       code: '0xf11a',
       name: 'ios-arrow-round-up'
    },
    {  
       code: '0xf3d8',
       name: 'ios-arrow-up'
    },
    {  
       code: '0xf3da',
       name: 'ios-at'
    },
    {  
       code: '0xf11b',
       name: 'ios-attach'
    },
    {  
       code: '0xf11d',
       name: 'ios-backspace'
    },
    {  
       code: '0xf3dc',
       name: 'ios-barcode'
    },
    {  
       code: '0xf3de',
       name: 'ios-baseball'
    },
    {  
       code: '0xf11f',
       name: 'ios-basket'
    },
    {  
       code: '0xf3e0',
       name: 'ios-basketball'
    },
    {  
       code: '0xf120',
       name: 'ios-battery-charging'
    },
    {  
       code: '0xf121',
       name: 'ios-battery-dead'
    },
    {  
       code: '0xf122',
       name: 'ios-battery-full'
    },
    {  
       code: '0xf124',
       name: 'ios-beaker'
    },
    {  
       code: '0xf139',
       name: 'ios-bed'
    },
    {  
       code: '0xf126',
       name: 'ios-beer'
    },
    {  
       code: '0xf127',
       name: 'ios-bicycle'
    },
    {  
       code: '0xf128',
       name: 'ios-bluetooth'
    },
    {  
       code: '0xf12a',
       name: 'ios-boat'
    },
    {  
       code: '0xf3e4',
       name: 'ios-body'
    },
    {  
       code: '0xf12c',
       name: 'ios-bonfire'
    },
    {  
       code: '0xf3e8',
       name: 'ios-book'
    },
    {  
       code: '0xf12e',
       name: 'ios-bookmark'
    },
    {  
       code: '0xf3ea',
       name: 'ios-bookmarks'
    },
    {  
       code: '0xf130',
       name: 'ios-bowtie'
    },
    {  
       code: '0xf3ee',
       name: 'ios-briefcase'
    },
    {  
       code: '0xf3f0',
       name: 'ios-browsers'
    },
    {  
       code: '0xf132',
       name: 'ios-brush'
    },
    {  
       code: '0xf134',
       name: 'ios-bug'
    },
    {  
       code: '0xf136',
       name: 'ios-build'
    },
    {  
       code: '0xf138',
       name: 'ios-bulb'
    },
    {  
       code: '0xf13a',
       name: 'ios-bus'
    },
    {  
       code: '0xf1a3',
       name: 'ios-business'
    },
    {  
       code: '0xf13c',
       name: 'ios-cafe'
    },
    {  
       code: '0xf3f2',
       name: 'ios-calculator'
    },
    {  
       code: '0xf3f4',
       name: 'ios-calendar'
    },
    {  
       code: '0xf13e',
       name: 'ios-call'
    },
    {  
       code: '0xf3f6',
       name: 'ios-camera'
    },
    {  
       code: '0xf140',
       name: 'ios-car'
    },
    {  
       code: '0xf142',
       name: 'ios-card'
    },
    {  
       code: '0xf3f8',
       name: 'ios-cart'
    },
    {  
       code: '0xf144',
       name: 'ios-cash'
    },
    {  
       code: '0xf13d',
       name: 'ios-cellular'
    },
    {  
       code: '0xf3fa',
       name: 'ios-chatboxes'
    },
    {  
       code: '0xf146',
       name: 'ios-chatbubbles'
    },
    {  
       code: '0xf148',
       name: 'ios-checkbox'
    },
    {  
       code: '0xf147',
       name: 'ios-checkbox-outline'
    },
    {  
       code: '0xf3ff',
       name: 'ios-checkmark'
    },
    {  
       code: '0xf14a',
       name: 'ios-checkmark-circle'
    },
    {  
       code: '0xf149',
       name: 'ios-checkmark-circle-outline'
    },
    {  
       code: '0xf14c',
       name: 'ios-clipboard'
    },
    {  
       code: '0xf403',
       name: 'ios-clock'
    },
    {  
       code: '0xf406',
       name: 'ios-close'
    },
    {  
       code: '0xf14e',
       name: 'ios-close-circle'
    },
    {  
       code: '0xf14d',
       name: 'ios-close-circle-outline'
    },
    {  
       code: '0xf40c',
       name: 'ios-cloud'
    },
    {  
       code: '0xf152',
       name: 'ios-cloud-circle'
    },
    {  
       code: '0xf154',
       name: 'ios-cloud-done'
    },
    {  
       code: '0xf408',
       name: 'ios-cloud-download'
    },
    {  
       code: '0xf409',
       name: 'ios-cloud-outline'
    },
    {  
       code: '0xf40b',
       name: 'ios-cloud-upload'
    },
    {  
       code: '0xf410',
       name: 'ios-cloudy'
    },
    {  
       code: '0xf40e',
       name: 'ios-cloudy-night'
    },
    {  
       code: '0xf157',
       name: 'ios-code'
    },
    {  
       code: '0xf155',
       name: 'ios-code-download'
    },
    {  
       code: '0xf156',
       name: 'ios-code-working'
    },
    {  
       code: '0xf412',
       name: 'ios-cog'
    },
    {  
       code: '0xf159',
       name: 'ios-color-fill'
    },
    {  
       code: '0xf414',
       name: 'ios-color-filter'
    },
    {  
       code: '0xf15b',
       name: 'ios-color-palette'
    },
    {  
       code: '0xf416',
       name: 'ios-color-wand'
    },
    {  
       code: '0xf15d',
       name: 'ios-compass'
    },
    {  
       code: '0xf15f',
       name: 'ios-construct'
    },
    {  
       code: '0xf41a',
       name: 'ios-contact'
    },
    {  
       code: '0xf161',
       name: 'ios-contacts'
    },
    {  
       code: '0xf162',
       name: 'ios-contract'
    },
    {  
       code: '0xf163',
       name: 'ios-contrast'
    },
    {  
       code: '0xf41c',
       name: 'ios-copy'
    },
    {  
       code: '0xf165',
       name: 'ios-create'
    },
    {  
       code: '0xf41e',
       name: 'ios-crop'
    },
    {  
       code: '0xf168',
       name: 'ios-cube'
    },
    {  
       code: '0xf16a',
       name: 'ios-cut'
    },
    {  
       code: '0xf16c',
       name: 'ios-desktop'
    },
    {  
       code: '0xf16e',
       name: 'ios-disc'
    },
    {  
       code: '0xf170',
       name: 'ios-document'
    },
    {  
       code: '0xf171',
       name: 'ios-done-all'
    },
    {  
       code: '0xf420',
       name: 'ios-download'
    },
    {  
       code: '0xf173',
       name: 'ios-easel'
    },
    {  
       code: '0xf175',
       name: 'ios-egg'
    },
    {  
       code: '0xf177',
       name: 'ios-exit'
    },
    {  
       code: '0xf178',
       name: 'ios-expand'
    },
    {  
       code: '0xf425',
       name: 'ios-eye'
    },
    {  
       code: '0xf17a',
       name: 'ios-eye-off'
    },
    {  
       code: '0xf427',
       name: 'ios-fastforward'
    },
    {  
       code: '0xf17b',
       name: 'ios-female'
    },
    {  
       code: '0xf429',
       name: 'ios-filing'
    },
    {  
       code: '0xf42b',
       name: 'ios-film'
    },
    {  
       code: '0xf17c',
       name: 'ios-finger-print'
    },
    {  
       code: '0xf1ab',
       name: 'ios-fitness'
    },
    {  
       code: '0xf42d',
       name: 'ios-flag'
    },
    {  
       code: '0xf42f',
       name: 'ios-flame'
    },
    {  
       code: '0xf17e',
       name: 'ios-flash'
    },
    {  
       code: '0xf12f',
       name: 'ios-flash-off'
    },
    {  
       code: '0xf141',
       name: 'ios-flashlight'
    },
    {  
       code: '0xf431',
       name: 'ios-flask'
    },
    {  
       code: '0xf433',
       name: 'ios-flower'
    },
    {  
       code: '0xf435',
       name: 'ios-folder'
    },
    {  
       code: '0xf180',
       name: 'ios-folder-open'
    },
    {  
       code: '0xf437',
       name: 'ios-football'
    },
    {  
       code: '0xf182',
       name: 'ios-funnel'
    },
    {  
       code: '0xf191',
       name: 'ios-gift'
    },
    {  
       code: '0xf183',
       name: 'ios-git-branch'
    },
    {  
       code: '0xf184',
       name: 'ios-git-commit'
    },
    {  
       code: '0xf185',
       name: 'ios-git-compare'
    },
    {  
       code: '0xf186',
       name: 'ios-git-merge'
    },
    {  
       code: '0xf187',
       name: 'ios-git-network'
    },
    {  
       code: '0xf188',
       name: 'ios-git-pull-request'
    },
    {  
       code: '0xf43f',
       name: 'ios-glasses'
    },
    {  
       code: '0xf18a',
       name: 'ios-globe'
    },
    {  
       code: '0xf18c',
       name: 'ios-grid'
    },
    {  
       code: '0xf18e',
       name: 'ios-hammer'
    },
    {  
       code: '0xf190',
       name: 'ios-hand'
    },
    {  
       code: '0xf192',
       name: 'ios-happy'
    },
    {  
       code: '0xf194',
       name: 'ios-headset'
    },
    {  
       code: '0xf443',
       name: 'ios-heart'
    },
    {  
       code: '0xf13f',
       name: 'ios-heart-dislike'
    },
    {  
       code: '0xf19b',
       name: 'ios-heart-empty'
    },
    {  
       code: '0xf19d',
       name: 'ios-heart-half'
    },
    {  
       code: '0xf446',
       name: 'ios-help'
    },
    {  
       code: '0xf196',
       name: 'ios-help-buoy'
    },
    {  
       code: '0xf198',
       name: 'ios-help-circle'
    },
    {  
       code: '0xf197',
       name: 'ios-help-circle-outline'
    },
    {  
       code: '0xf448',
       name: 'ios-home'
    },
    {  
       code: '0xf103',
       name: 'ios-hourglass'
    },
    {  
       code: '0xf19a',
       name: 'ios-ice-cream'
    },
    {  
       code: '0xf19c',
       name: 'ios-image'
    },
    {  
       code: '0xf19e',
       name: 'ios-images'
    },
    {  
       code: '0xf44a',
       name: 'ios-infinite'
    },
    {  
       code: '0xf44d',
       name: 'ios-information'
    },
    {  
       code: '0xf1a0',
       name: 'ios-information-circle'
    },
    {  
       code: '0xf19f',
       name: 'ios-information-circle-outline'
    },
    {  
       code: '0xf1a5',
       name: 'ios-jet'
    },
    {  
       code: '0xf189',
       name: 'ios-journal'
    },
    {  
       code: '0xf1a7',
       name: 'ios-key'
    },
    {  
       code: '0xf450',
       name: 'ios-keypad'
    },
    {  
       code: '0xf1a8',
       name: 'ios-laptop'
    },
    {  
       code: '0xf1aa',
       name: 'ios-leaf'
    },
    {  
       code: '0xf22a',
       name: 'ios-link'
    },
    {  
       code: '0xf454',
       name: 'ios-list'
    },
    {  
       code: '0xf143',
       name: 'ios-list-box'
    },
    {  
       code: '0xf1ae',
       name: 'ios-locate'
    },
    {  
       code: '0xf1b0',
       name: 'ios-lock'
    },
    {  
       code: '0xf1b1',
       name: 'ios-log-in'
    },
    {  
       code: '0xf1b2',
       name: 'ios-log-out'
    },
    {  
       code: '0xf1b4',
       name: 'ios-magnet'
    },
    {  
       code: '0xf1b8',
       name: 'ios-mail'
    },
    {  
       code: '0xf1b6',
       name: 'ios-mail-open'
    },
    {  
       code: '0xf145',
       name: 'ios-mail-unread'
    },
    {  
       code: '0xf1b9',
       name: 'ios-male'
    },
    {  
       code: '0xf1bb',
       name: 'ios-man'
    },
    {  
       code: '0xf1bd',
       name: 'ios-map'
    },
    {  
       code: '0xf1bf',
       name: 'ios-medal'
    },
    {  
       code: '0xf45c',
       name: 'ios-medical'
    },
    {  
       code: '0xf45e',
       name: 'ios-medkit'
    },
    {  
       code: '0xf1c1',
       name: 'ios-megaphone'
    },
    {  
       code: '0xf1c3',
       name: 'ios-menu'
    },
    {  
       code: '0xf461',
       name: 'ios-mic'
    },
    {  
       code: '0xf45f',
       name: 'ios-mic-off'
    },
    {  
       code: '0xf1c6',
       name: 'ios-microphone'
    },
    {  
       code: '0xf468',
       name: 'ios-moon'
    },
    {  
       code: '0xf1c8',
       name: 'ios-more'
    },
    {  
       code: '0xf1cb',
       name: 'ios-move'
    },
    {  
       code: '0xf46b',
       name: 'ios-musical-note'
    },
    {  
       code: '0xf46c',
       name: 'ios-musical-notes'
    },
    {  
       code: '0xf46e',
       name: 'ios-navigate'
    },
    {  
       code: '0xf1d3',
       name: 'ios-notifications'
    },
    {  
       code: '0xf1d1',
       name: 'ios-notifications-off'
    },
    {  
       code: '0xf133',
       name: 'ios-notifications-outline'
    },
    {  
       code: '0xf1d5',
       name: 'ios-nuclear'
    },
    {  
       code: '0xf470',
       name: 'ios-nutrition'
    },
    {  
       code: '0xf1d7',
       name: 'ios-open'
    },
    {  
       code: '0xf1d9',
       name: 'ios-options'
    },
    {  
       code: '0xf1db',
       name: 'ios-outlet'
    },
    {  
       code: '0xf472',
       name: 'ios-paper'
    },
    {  
       code: '0xf1dd',
       name: 'ios-paper-plane'
    },
    {  
       code: '0xf1df',
       name: 'ios-partly-sunny'
    },
    {  
       code: '0xf478',
       name: 'ios-pause'
    },
    {  
       code: '0xf47a',
       name: 'ios-paw'
    },
    {  
       code: '0xf47c',
       name: 'ios-people'
    },
    {  
       code: '0xf47e',
       name: 'ios-person'
    },
    {  
       code: '0xf1e1',
       name: 'ios-person-add'
    },
    {  
       code: '0xf1e2',
       name: 'ios-phone-landscape'
    },
    {  
       code: '0xf1e3',
       name: 'ios-phone-portrait'
    },
    {  
       code: '0xf482',
       name: 'ios-photos'
    },
    {  
       code: '0xf484',
       name: 'ios-pie'
    },
    {  
       code: '0xf1e5',
       name: 'ios-pin'
    },
    {  
       code: '0xf486',
       name: 'ios-pint'
    },
    {  
       code: '0xf1e7',
       name: 'ios-pizza'
    },
    {  
       code: '0xf1eb',
       name: 'ios-planet'
    },
    {  
       code: '0xf488',
       name: 'ios-play'
    },
    {  
       code: '0xf113',
       name: 'ios-play-circle'
    },
    {  
       code: '0xf1ed',
       name: 'ios-podium'
    },
    {  
       code: '0xf1ef',
       name: 'ios-power'
    },
    {  
       code: '0xf48d',
       name: 'ios-pricetag'
    },
    {  
       code: '0xf48f',
       name: 'ios-pricetags'
    },
    {  
       code: '0xf1f1',
       name: 'ios-print'
    },
    {  
       code: '0xf493',
       name: 'ios-pulse'
    },
    {  
       code: '0xf1f3',
       name: 'ios-qr-scanner'
    },
    {  
       code: '0xf1f5',
       name: 'ios-quote'
    },
    {  
       code: '0xf1f9',
       name: 'ios-radio'
    },
    {  
       code: '0xf1f6',
       name: 'ios-radio-button-off'
    },
    {  
       code: '0xf1f7',
       name: 'ios-radio-button-on'
    },
    {  
       code: '0xf495',
       name: 'ios-rainy'
    },
    {  
       code: '0xf497',
       name: 'ios-recording'
    },
    {  
       code: '0xf499',
       name: 'ios-redo'
    },
    {  
       code: '0xf49c',
       name: 'ios-refresh'
    },
    {  
       code: '0xf135',
       name: 'ios-refresh-circle'
    },
    {  
       code: '0xf1fc',
       name: 'ios-remove'
    },
    {  
       code: '0xf1fb',
       name: 'ios-remove-circle'
    },
    {  
       code: '0xf1fa',
       name: 'ios-remove-circle-outline'
    },
    {  
       code: '0xf1fd',
       name: 'ios-reorder'
    },
    {  
       code: '0xf1fe',
       name: 'ios-repeat'
    },
    {  
       code: '0xf1ff',
       name: 'ios-resize'
    },
    {  
       code: '0xf201',
       name: 'ios-restaurant'
    },
    {  
       code: '0xf202',
       name: 'ios-return-left'
    },
    {  
       code: '0xf203',
       name: 'ios-return-right'
    },
    {  
       code: '0xf49f',
       name: 'ios-reverse-camera'
    },
    {  
       code: '0xf4a1',
       name: 'ios-rewind'
    },
    {  
       code: '0xf205',
       name: 'ios-ribbon'
    },
    {  
       code: '0xf14b',
       name: 'ios-rocket'
    },
    {  
       code: '0xf4a3',
       name: 'ios-rose'
    },
    {  
       code: '0xf207',
       name: 'ios-sad'
    },
    {  
       code: '0xf1a6',
       name: 'ios-save'
    },
    {  
       code: '0xf209',
       name: 'ios-school'
    },
    {  
       code: '0xf4a5',
       name: 'ios-search'
    },
    {  
       code: '0xf20c',
       name: 'ios-send'
    },
    {  
       code: '0xf4a7',
       name: 'ios-settings'
    },
    {  
       code: '0xf211',
       name: 'ios-share'
    },
    {  
       code: '0xf20f',
       name: 'ios-share-alt'
    },
    {  
       code: '0xf213',
       name: 'ios-shirt'
    },
    {  
       code: '0xf4a9',
       name: 'ios-shuffle'
    },
    {  
       code: '0xf215',
       name: 'ios-skip-backward'
    },
    {  
       code: '0xf217',
       name: 'ios-skip-forward'
    },
    {  
       code: '0xf218',
       name: 'ios-snow'
    },
    {  
       code: '0xf4b0',
       name: 'ios-speedometer'
    },
    {  
       code: '0xf21a',
       name: 'ios-square'
    },
    {  
       code: '0xf15c',
       name: 'ios-square-outline'
    },
    {  
       code: '0xf4b3',
       name: 'ios-star'
    },
    {  
       code: '0xf4b1',
       name: 'ios-star-half'
    },
    {  
       code: '0xf4b2',
       name: 'ios-star-outline'
    },
    {  
       code: '0xf21c',
       name: 'ios-stats'
    },
    {  
       code: '0xf4b5',
       name: 'ios-stopwatch'
    },
    {  
       code: '0xf21e',
       name: 'ios-subway'
    },
    {  
       code: '0xf4b7',
       name: 'ios-sunny'
    },
    {  
       code: '0xf21f',
       name: 'ios-swap'
    },
    {  
       code: '0xf221',
       name: 'ios-switch'
    },
    {  
       code: '0xf222',
       name: 'ios-sync'
    },
    {  
       code: '0xf223',
       name: 'ios-tablet-landscape'
    },
    {  
       code: '0xf24e',
       name: 'ios-tablet-portrait'
    },
    {  
       code: '0xf4bb',
       name: 'ios-tennisball'
    },
    {  
       code: '0xf250',
       name: 'ios-text'
    },
    {  
       code: '0xf252',
       name: 'ios-thermometer'
    },
    {  
       code: '0xf254',
       name: 'ios-thumbs-down'
    },
    {  
       code: '0xf256',
       name: 'ios-thumbs-up'
    },
    {  
       code: '0xf4bd',
       name: 'ios-thunderstorm'
    },
    {  
       code: '0xf4bf',
       name: 'ios-time'
    },
    {  
       code: '0xf4c1',
       name: 'ios-timer'
    },
    {  
       code: '0xf14f',
       name: 'ios-today'
    },
    {  
       code: '0xf258',
       name: 'ios-train'
    },
    {  
       code: '0xf259',
       name: 'ios-transgender'
    },
    {  
       code: '0xf4c5',
       name: 'ios-trash'
    },
    {  
       code: '0xf25a',
       name: 'ios-trending-down'
    },
    {  
       code: '0xf25b',
       name: 'ios-trending-up'
    },
    {  
       code: '0xf25d',
       name: 'ios-trophy'
    },
    {  
       code: '0xf115',
       name: 'ios-tv'
    },
    {  
       code: '0xf25f',
       name: 'ios-umbrella'
    },
    {  
       code: '0xf4c7',
       name: 'ios-undo'
    },
    {  
       code: '0xf261',
       name: 'ios-unlock'
    },
    {  
       code: '0xf4cd',
       name: 'ios-videocam'
    },
    {  
       code: '0xf11c',
       name: 'ios-volume-high'
    },
    {  
       code: '0xf11e',
       name: 'ios-volume-low'
    },
    {  
       code: '0xf263',
       name: 'ios-volume-mute'
    },
    {  
       code: '0xf264',
       name: 'ios-volume-off'
    },
    {  
       code: '0xf266',
       name: 'ios-walk'
    },
    {  
       code: '0xf18b',
       name: 'ios-wallet'
    },
    {  
       code: '0xf268',
       name: 'ios-warning'
    },
    {  
       code: '0xf269',
       name: 'ios-watch'
    },
    {  
       code: '0xf26b',
       name: 'ios-water'
    },
    {  
       code: '0xf26d',
       name: 'ios-wifi'
    },
    {  
       code: '0xf26f',
       name: 'ios-wine'
    },
    {  
       code: '0xf271',
       name: 'ios-woman'
    },
    {  
       code: '0xf225',
       name: 'logo-android'
    },
    {  
       code: '0xf227',
       name: 'logo-angular'
    },
    {  
       code: '0xf229',
       name: 'logo-apple'
    },
    {  
       code: '0xf193',
       name: 'logo-bitbucket'
    },
    {  
       code: '0xf22b',
       name: 'logo-bitcoin'
    },
    {  
       code: '0xf22d',
       name: 'logo-buffer'
    },
    {  
       code: '0xf22f',
       name: 'logo-chrome'
    },
    {  
       code: '0xf105',
       name: 'logo-closed-captioning'
    },
    {  
       code: '0xf230',
       name: 'logo-codepen'
    },
    {  
       code: '0xf231',
       name: 'logo-css3'
    },
    {  
       code: '0xf232',
       name: 'logo-designernews'
    },
    {  
       code: '0xf233',
       name: 'logo-dribbble'
    },
    {  
       code: '0xf234',
       name: 'logo-dropbox'
    },
    {  
       code: '0xf235',
       name: 'logo-euro'
    },
    {  
       code: '0xf236',
       name: 'logo-facebook'
    },
    {  
       code: '0xf107',
       name: 'logo-flickr'
    },
    {  
       code: '0xf237',
       name: 'logo-foursquare'
    },
    {  
       code: '0xf238',
       name: 'logo-freebsd-devil'
    },
    {  
       code: '0xf13b',
       name: 'logo-game-controller-a'
    },
    {  
       code: '0xf181',
       name: 'logo-game-controller-b'
    },
    {  
       code: '0xf239',
       name: 'logo-github'
    },
    {  
       code: '0xf23a',
       name: 'logo-google'
    },
    {  
       code: '0xf23b',
       name: 'logo-googleplus'
    },
    {  
       code: '0xf23c',
       name: 'logo-hackernews'
    },
    {  
       code: '0xf23d',
       name: 'logo-html5'
    },
    {  
       code: '0xf23e',
       name: 'logo-instagram'
    },
    {  
       code: '0xf150',
       name: 'logo-ionic'
    },
    {  
       code: '0xf151',
       name: 'logo-ionitron'
    },
    {  
       code: '0xf23f',
       name: 'logo-javascript'
    },
    {  
       code: '0xf240',
       name: 'logo-linkedin'
    },
    {  
       code: '0xf241',
       name: 'logo-markdown'
    },
    {  
       code: '0xf153',
       name: 'logo-model-s'
    },
    {  
       code: '0xf109',
       name: 'logo-no-smoking'
    },
    {  
       code: '0xf242',
       name: 'logo-nodejs'
    },
    {  
       code: '0xf195',
       name: 'logo-npm'
    },
    {  
       code: '0xf243',
       name: 'logo-octocat'
    },
    {  
       code: '0xf244',
       name: 'logo-pinterest'
    },
    {  
       code: '0xf245',
       name: 'logo-playstation'
    },
    {  
       code: '0xf15e',
       name: 'logo-polymer'
    },
    {  
       code: '0xf246',
       name: 'logo-python'
    },
    {  
       code: '0xf247',
       name: 'logo-reddit'
    },
    {  
       code: '0xf248',
       name: 'logo-rss'
    },
    {  
       code: '0xf249',
       name: 'logo-sass'
    },
    {  
       code: '0xf24a',
       name: 'logo-skype'
    },
    {  
       code: '0xf10b',
       name: 'logo-slack'
    },
    {  
       code: '0xf24b',
       name: 'logo-snapchat'
    },
    {  
       code: '0xf24c',
       name: 'logo-steam'
    },
    {  
       code: '0xf24d',
       name: 'logo-tumblr'
    },
    {  
       code: '0xf2ae',
       name: 'logo-tux'
    },
    {  
       code: '0xf2af',
       name: 'logo-twitch'
    },
    {  
       code: '0xf2b0',
       name: 'logo-twitter'
    },
    {  
       code: '0xf2b1',
       name: 'logo-usd'
    },
    {  
       code: '0xf2c4',
       name: 'logo-vimeo'
    },
    {  
       code: '0xf10d',
       name: 'logo-vk'
    },
    {  
       code: '0xf2c5',
       name: 'logo-whatsapp'
    },
    {  
       code: '0xf32f',
       name: 'logo-windows'
    },
    {  
       code: '0xf330',
       name: 'logo-wordpress'
    },
    {  
       code: '0xf34c',
       name: 'logo-xbox'
    },
    {  
       code: '0xf10f',
       name: 'logo-xing'
    },
    {  
       code: '0xf34d',
       name: 'logo-yahoo'
    },
    {  
       code: '0xf34e',
       name: 'logo-yen'
    },
    {  
       code: '0xf34f',
       name: 'logo-youtube'
    },
    {  
       code: '0xf273',
       name: 'md-add'
    },
    {  
       code: '0xf272',
       name: 'md-add-circle'
    },
    {  
       code: '0xf158',
       name: 'md-add-circle-outline'
    },
    {  
       code: '0xf15a',
       name: 'md-airplane'
    },
    {  
       code: '0xf274',
       name: 'md-alarm'
    },
    {  
       code: '0xf275',
       name: 'md-albums'
    },
    {  
       code: '0xf276',
       name: 'md-alert'
    },
    {  
       code: '0xf277',
       name: 'md-american-football'
    },
    {  
       code: '0xf278',
       name: 'md-analytics'
    },
    {  
       code: '0xf279',
       name: 'md-aperture'
    },
    {  
       code: '0xf27a',
       name: 'md-apps'
    },
    {  
       code: '0xf27b',
       name: 'md-appstore'
    },
    {  
       code: '0xf27c',
       name: 'md-archive'
    },
    {  
       code: '0xf27d',
       name: 'md-arrow-back'
    },
    {  
       code: '0xf27e',
       name: 'md-arrow-down'
    },
    {  
       code: '0xf280',
       name: 'md-arrow-dropdown'
    },
    {  
       code: '0xf27f',
       name: 'md-arrow-dropdown-circle'
    },
    {  
       code: '0xf282',
       name: 'md-arrow-dropleft'
    },
    {  
       code: '0xf281',
       name: 'md-arrow-dropleft-circle'
    },
    {  
       code: '0xf284',
       name: 'md-arrow-dropright'
    },
    {  
       code: '0xf283',
       name: 'md-arrow-dropright-circle'
    },
    {  
       code: '0xf286',
       name: 'md-arrow-dropup'
    },
    {  
       code: '0xf285',
       name: 'md-arrow-dropup-circle'
    },
    {  
       code: '0xf287',
       name: 'md-arrow-forward'
    },
    {  
       code: '0xf288',
       name: 'md-arrow-round-back'
    },
    {  
       code: '0xf289',
       name: 'md-arrow-round-down'
    },
    {  
       code: '0xf28a',
       name: 'md-arrow-round-forward'
    },
    {  
       code: '0xf28b',
       name: 'md-arrow-round-up'
    },
    {  
       code: '0xf28c',
       name: 'md-arrow-up'
    },
    {  
       code: '0xf28d',
       name: 'md-at'
    },
    {  
       code: '0xf28e',
       name: 'md-attach'
    },
    {  
       code: '0xf28f',
       name: 'md-backspace'
    },
    {  
       code: '0xf290',
       name: 'md-barcode'
    },
    {  
       code: '0xf291',
       name: 'md-baseball'
    },
    {  
       code: '0xf292',
       name: 'md-basket'
    },
    {  
       code: '0xf293',
       name: 'md-basketball'
    },
    {  
       code: '0xf294',
       name: 'md-battery-charging'
    },
    {  
       code: '0xf295',
       name: 'md-battery-dead'
    },
    {  
       code: '0xf296',
       name: 'md-battery-full'
    },
    {  
       code: '0xf297',
       name: 'md-beaker'
    },
    {  
       code: '0xf160',
       name: 'md-bed'
    },
    {  
       code: '0xf298',
       name: 'md-beer'
    },
    {  
       code: '0xf299',
       name: 'md-bicycle'
    },
    {  
       code: '0xf29a',
       name: 'md-bluetooth'
    },
    {  
       code: '0xf29b',
       name: 'md-boat'
    },
    {  
       code: '0xf29c',
       name: 'md-body'
    },
    {  
       code: '0xf29d',
       name: 'md-bonfire'
    },
    {  
       code: '0xf29e',
       name: 'md-book'
    },
    {  
       code: '0xf29f',
       name: 'md-bookmark'
    },
    {  
       code: '0xf2a0',
       name: 'md-bookmarks'
    },
    {  
       code: '0xf2a1',
       name: 'md-bowtie'
    },
    {  
       code: '0xf2a2',
       name: 'md-briefcase'
    },
    {  
       code: '0xf2a3',
       name: 'md-browsers'
    },
    {  
       code: '0xf2a4',
       name: 'md-brush'
    },
    {  
       code: '0xf2a5',
       name: 'md-bug'
    },
    {  
       code: '0xf2a6',
       name: 'md-build'
    },
    {  
       code: '0xf2a7',
       name: 'md-bulb'
    },
    {  
       code: '0xf2a8',
       name: 'md-bus'
    },
    {  
       code: '0xf1a4',
       name: 'md-business'
    },
    {  
       code: '0xf2a9',
       name: 'md-cafe'
    },
    {  
       code: '0xf2aa',
       name: 'md-calculator'
    },
    {  
       code: '0xf2ab',
       name: 'md-calendar'
    },
    {  
       code: '0xf2ac',
       name: 'md-call'
    },
    {  
       code: '0xf2ad',
       name: 'md-camera'
    },
    {  
       code: '0xf2b2',
       name: 'md-car'
    },
    {  
       code: '0xf2b3',
       name: 'md-card'
    },
    {  
       code: '0xf2b4',
       name: 'md-cart'
    },
    {  
       code: '0xf2b5',
       name: 'md-cash'
    },
    {  
       code: '0xf164',
       name: 'md-cellular'
    },
    {  
       code: '0xf2b6',
       name: 'md-chatboxes'
    },
    {  
       code: '0xf2b7',
       name: 'md-chatbubbles'
    },
    {  
       code: '0xf2b9',
       name: 'md-checkbox'
    },
    {  
       code: '0xf2b8',
       name: 'md-checkbox-outline'
    },
    {  
       code: '0xf2bc',
       name: 'md-checkmark'
    },
    {  
       code: '0xf2bb',
       name: 'md-checkmark-circle'
    },
    {  
       code: '0xf2ba',
       name: 'md-checkmark-circle-outline'
    },
    {  
       code: '0xf2bd',
       name: 'md-clipboard'
    },
    {  
       code: '0xf2be',
       name: 'md-clock'
    },
    {  
       code: '0xf2c0',
       name: 'md-close'
    },
    {  
       code: '0xf2bf',
       name: 'md-close-circle'
    },
    {  
       code: '0xf166',
       name: 'md-close-circle-outline'
    },
    {  
       code: '0xf2c9',
       name: 'md-cloud'
    },
    {  
       code: '0xf2c2',
       name: 'md-cloud-circle'
    },
    {  
       code: '0xf2c3',
       name: 'md-cloud-done'
    },
    {  
       code: '0xf2c6',
       name: 'md-cloud-download'
    },
    {  
       code: '0xf2c7',
       name: 'md-cloud-outline'
    },
    {  
       code: '0xf2c8',
       name: 'md-cloud-upload'
    },
    {  
       code: '0xf2cb',
       name: 'md-cloudy'
    },
    {  
       code: '0xf2ca',
       name: 'md-cloudy-night'
    },
    {  
       code: '0xf2ce',
       name: 'md-code'
    },
    {  
       code: '0xf2cc',
       name: 'md-code-download'
    },
    {  
       code: '0xf2cd',
       name: 'md-code-working'
    },
    {  
       code: '0xf2cf',
       name: 'md-cog'
    },
    {  
       code: '0xf2d0',
       name: 'md-color-fill'
    },
    {  
       code: '0xf2d1',
       name: 'md-color-filter'
    },
    {  
       code: '0xf2d2',
       name: 'md-color-palette'
    },
    {  
       code: '0xf2d3',
       name: 'md-color-wand'
    },
    {  
       code: '0xf2d4',
       name: 'md-compass'
    },
    {  
       code: '0xf2d5',
       name: 'md-construct'
    },
    {  
       code: '0xf2d6',
       name: 'md-contact'
    },
    {  
       code: '0xf2d7',
       name: 'md-contacts'
    },
    {  
       code: '0xf2d8',
       name: 'md-contract'
    },
    {  
       code: '0xf2d9',
       name: 'md-contrast'
    },
    {  
       code: '0xf2da',
       name: 'md-copy'
    },
    {  
       code: '0xf2db',
       name: 'md-create'
    },
    {  
       code: '0xf2dc',
       name: 'md-crop'
    },
    {  
       code: '0xf2dd',
       name: 'md-cube'
    },
    {  
       code: '0xf2de',
       name: 'md-cut'
    },
    {  
       code: '0xf2df',
       name: 'md-desktop'
    },
    {  
       code: '0xf2e0',
       name: 'md-disc'
    },
    {  
       code: '0xf2e1',
       name: 'md-document'
    },
    {  
       code: '0xf2e2',
       name: 'md-done-all'
    },
    {  
       code: '0xf2e3',
       name: 'md-download'
    },
    {  
       code: '0xf2e4',
       name: 'md-easel'
    },
    {  
       code: '0xf2e5',
       name: 'md-egg'
    },
    {  
       code: '0xf2e6',
       name: 'md-exit'
    },
    {  
       code: '0xf2e7',
       name: 'md-expand'
    },
    {  
       code: '0xf2e9',
       name: 'md-eye'
    },
    {  
       code: '0xf2e8',
       name: 'md-eye-off'
    },
    {  
       code: '0xf2ea',
       name: 'md-fastforward'
    },
    {  
       code: '0xf2eb',
       name: 'md-female'
    },
    {  
       code: '0xf2ec',
       name: 'md-filing'
    },
    {  
       code: '0xf2ed',
       name: 'md-film'
    },
    {  
       code: '0xf2ee',
       name: 'md-finger-print'
    },
    {  
       code: '0xf1ac',
       name: 'md-fitness'
    },
    {  
       code: '0xf2ef',
       name: 'md-flag'
    },
    {  
       code: '0xf2f0',
       name: 'md-flame'
    },
    {  
       code: '0xf2f1',
       name: 'md-flash'
    },
    {  
       code: '0xf169',
       name: 'md-flash-off'
    },
    {  
       code: '0xf16b',
       name: 'md-flashlight'
    },
    {  
       code: '0xf2f2',
       name: 'md-flask'
    },
    {  
       code: '0xf2f3',
       name: 'md-flower'
    },
    {  
       code: '0xf2f5',
       name: 'md-folder'
    },
    {  
       code: '0xf2f4',
       name: 'md-folder-open'
    },
    {  
       code: '0xf2f6',
       name: 'md-football'
    },
    {  
       code: '0xf2f7',
       name: 'md-funnel'
    },
    {  
       code: '0xf199',
       name: 'md-gift'
    },
    {  
       code: '0xf2fa',
       name: 'md-git-branch'
    },
    {  
       code: '0xf2fb',
       name: 'md-git-commit'
    },
    {  
       code: '0xf2fc',
       name: 'md-git-compare'
    },
    {  
       code: '0xf2fd',
       name: 'md-git-merge'
    },
    {  
       code: '0xf2fe',
       name: 'md-git-network'
    },
    {  
       code: '0xf2ff',
       name: 'md-git-pull-request'
    },
    {  
       code: '0xf300',
       name: 'md-glasses'
    },
    {  
       code: '0xf301',
       name: 'md-globe'
    },
    {  
       code: '0xf302',
       name: 'md-grid'
    },
    {  
       code: '0xf303',
       name: 'md-hammer'
    },
    {  
       code: '0xf304',
       name: 'md-hand'
    },
    {  
       code: '0xf305',
       name: 'md-happy'
    },
    {  
       code: '0xf306',
       name: 'md-headset'
    },
    {  
       code: '0xf308',
       name: 'md-heart'
    },
    {  
       code: '0xf167',
       name: 'md-heart-dislike'
    },
    {  
       code: '0xf1a1',
       name: 'md-heart-empty'
    },
    {  
       code: '0xf1a2',
       name: 'md-heart-half'
    },
    {  
       code: '0xf30b',
       name: 'md-help'
    },
    {  
       code: '0xf309',
       name: 'md-help-buoy'
    },
    {  
       code: '0xf30a',
       name: 'md-help-circle'
    },
    {  
       code: '0xf16d',
       name: 'md-help-circle-outline'
    },
    {  
       code: '0xf30c',
       name: 'md-home'
    },
    {  
       code: '0xf111',
       name: 'md-hourglass'
    },
    {  
       code: '0xf30d',
       name: 'md-ice-cream'
    },
    {  
       code: '0xf30e',
       name: 'md-image'
    },
    {  
       code: '0xf30f',
       name: 'md-images'
    },
    {  
       code: '0xf310',
       name: 'md-infinite'
    },
    {  
       code: '0xf312',
       name: 'md-information'
    },
    {  
       code: '0xf311',
       name: 'md-information-circle'
    },
    {  
       code: '0xf16f',
       name: 'md-information-circle-outline'
    },
    {  
       code: '0xf315',
       name: 'md-jet'
    },
    {  
       code: '0xf18d',
       name: 'md-journal'
    },
    {  
       code: '0xf316',
       name: 'md-key'
    },
    {  
       code: '0xf317',
       name: 'md-keypad'
    },
    {  
       code: '0xf318',
       name: 'md-laptop'
    },
    {  
       code: '0xf319',
       name: 'md-leaf'
    },
    {  
       code: '0xf22e',
       name: 'md-link'
    },
    {  
       code: '0xf31b',
       name: 'md-list'
    },
    {  
       code: '0xf31a',
       name: 'md-list-box'
    },
    {  
       code: '0xf31c',
       name: 'md-locate'
    },
    {  
       code: '0xf31d',
       name: 'md-lock'
    },
    {  
       code: '0xf31e',
       name: 'md-log-in'
    },
    {  
       code: '0xf31f',
       name: 'md-log-out'
    },
    {  
       code: '0xf320',
       name: 'md-magnet'
    },
    {  
       code: '0xf322',
       name: 'md-mail'
    },
    {  
       code: '0xf321',
       name: 'md-mail-open'
    },
    {  
       code: '0xf172',
       name: 'md-mail-unread'
    },
    {  
       code: '0xf323',
       name: 'md-male'
    },
    {  
       code: '0xf324',
       name: 'md-man'
    },
    {  
       code: '0xf325',
       name: 'md-map'
    },
    {  
       code: '0xf326',
       name: 'md-medal'
    },
    {  
       code: '0xf327',
       name: 'md-medical'
    },
    {  
       code: '0xf328',
       name: 'md-medkit'
    },
    {  
       code: '0xf329',
       name: 'md-megaphone'
    },
    {  
       code: '0xf32a',
       name: 'md-menu'
    },
    {  
       code: '0xf32c',
       name: 'md-mic'
    },
    {  
       code: '0xf32b',
       name: 'md-mic-off'
    },
    {  
       code: '0xf32d',
       name: 'md-microphone'
    },
    {  
       code: '0xf32e',
       name: 'md-moon'
    },
    {  
       code: '0xf1c9',
       name: 'md-more'
    },
    {  
       code: '0xf331',
       name: 'md-move'
    },
    {  
       code: '0xf332',
       name: 'md-musical-note'
    },
    {  
       code: '0xf333',
       name: 'md-musical-notes'
    },
    {  
       code: '0xf334',
       name: 'md-navigate'
    },
    {  
       code: '0xf338',
       name: 'md-notifications'
    },
    {  
       code: '0xf336',
       name: 'md-notifications-off'
    },
    {  
       code: '0xf337',
       name: 'md-notifications-outline'
    },
    {  
       code: '0xf339',
       name: 'md-nuclear'
    },
    {  
       code: '0xf33a',
       name: 'md-nutrition'
    },
    {  
       code: '0xf33b',
       name: 'md-open'
    },
    {  
       code: '0xf33c',
       name: 'md-options'
    },
    {  
       code: '0xf33d',
       name: 'md-outlet'
    },
    {  
       code: '0xf33f',
       name: 'md-paper'
    },
    {  
       code: '0xf33e',
       name: 'md-paper-plane'
    },
    {  
       code: '0xf340',
       name: 'md-partly-sunny'
    },
    {  
       code: '0xf341',
       name: 'md-pause'
    },
    {  
       code: '0xf342',
       name: 'md-paw'
    },
    {  
       code: '0xf343',
       name: 'md-people'
    },
    {  
       code: '0xf345',
       name: 'md-person'
    },
    {  
       code: '0xf344',
       name: 'md-person-add'
    },
    {  
       code: '0xf346',
       name: 'md-phone-landscape'
    },
    {  
       code: '0xf347',
       name: 'md-phone-portrait'
    },
    {  
       code: '0xf348',
       name: 'md-photos'
    },
    {  
       code: '0xf349',
       name: 'md-pie'
    },
    {  
       code: '0xf34a',
       name: 'md-pin'
    },
    {  
       code: '0xf34b',
       name: 'md-pint'
    },
    {  
       code: '0xf354',
       name: 'md-pizza'
    },
    {  
       code: '0xf356',
       name: 'md-planet'
    },
    {  
       code: '0xf357',
       name: 'md-play'
    },
    {  
       code: '0xf174',
       name: 'md-play-circle'
    },
    {  
       code: '0xf358',
       name: 'md-podium'
    },
    {  
       code: '0xf359',
       name: 'md-power'
    },
    {  
       code: '0xf35a',
       name: 'md-pricetag'
    },
    {  
       code: '0xf35b',
       name: 'md-pricetags'
    },
    {  
       code: '0xf35c',
       name: 'md-print'
    },
    {  
       code: '0xf35d',
       name: 'md-pulse'
    },
    {  
       code: '0xf35e',
       name: 'md-qr-scanner'
    },
    {  
       code: '0xf35f',
       name: 'md-quote'
    },
    {  
       code: '0xf362',
       name: 'md-radio'
    },
    {  
       code: '0xf360',
       name: 'md-radio-button-off'
    },
    {  
       code: '0xf361',
       name: 'md-radio-button-on'
    },
    {  
       code: '0xf363',
       name: 'md-rainy'
    },
    {  
       code: '0xf364',
       name: 'md-recording'
    },
    {  
       code: '0xf365',
       name: 'md-redo'
    },
    {  
       code: '0xf366',
       name: 'md-refresh'
    },
    {  
       code: '0xf228',
       name: 'md-refresh-circle'
    },
    {  
       code: '0xf368',
       name: 'md-remove'
    },
    {  
       code: '0xf367',
       name: 'md-remove-circle'
    },
    {  
       code: '0xf176',
       name: 'md-remove-circle-outline'
    },
    {  
       code: '0xf369',
       name: 'md-reorder'
    },
    {  
       code: '0xf36a',
       name: 'md-repeat'
    },
    {  
       code: '0xf36b',
       name: 'md-resize'
    },
    {  
       code: '0xf36c',
       name: 'md-restaurant'
    },
    {  
       code: '0xf36d',
       name: 'md-return-left'
    },
    {  
       code: '0xf36e',
       name: 'md-return-right'
    },
    {  
       code: '0xf36f',
       name: 'md-reverse-camera'
    },
    {  
       code: '0xf370',
       name: 'md-rewind'
    },
    {  
       code: '0xf371',
       name: 'md-ribbon'
    },
    {  
       code: '0xf179',
       name: 'md-rocket'
    },
    {  
       code: '0xf372',
       name: 'md-rose'
    },
    {  
       code: '0xf373',
       name: 'md-sad'
    },
    {  
       code: '0xf1a9',
       name: 'md-save'
    },
    {  
       code: '0xf374',
       name: 'md-school'
    },
    {  
       code: '0xf375',
       name: 'md-search'
    },
    {  
       code: '0xf376',
       name: 'md-send'
    },
    {  
       code: '0xf377',
       name: 'md-settings'
    },
    {  
       code: '0xf379',
       name: 'md-share'
    },
    {  
       code: '0xf378',
       name: 'md-share-alt'
    },
    {  
       code: '0xf37a',
       name: 'md-shirt'
    },
    {  
       code: '0xf37b',
       name: 'md-shuffle'
    },
    {  
       code: '0xf37c',
       name: 'md-skip-backward'
    },
    {  
       code: '0xf37d',
       name: 'md-skip-forward'
    },
    {  
       code: '0xf37e',
       name: 'md-snow'
    },
    {  
       code: '0xf37f',
       name: 'md-speedometer'
    },
    {  
       code: '0xf381',
       name: 'md-square'
    },
    {  
       code: '0xf380',
       name: 'md-square-outline'
    },
    {  
       code: '0xf384',
       name: 'md-star'
    },
    {  
       code: '0xf382',
       name: 'md-star-half'
    },
    {  
       code: '0xf383',
       name: 'md-star-outline'
    },
    {  
       code: '0xf385',
       name: 'md-stats'
    },
    {  
       code: '0xf386',
       name: 'md-stopwatch'
    },
    {  
       code: '0xf387',
       name: 'md-subway'
    },
    {  
       code: '0xf388',
       name: 'md-sunny'
    },
    {  
       code: '0xf389',
       name: 'md-swap'
    },
    {  
       code: '0xf38a',
       name: 'md-switch'
    },
    {  
       code: '0xf38b',
       name: 'md-sync'
    },
    {  
       code: '0xf38c',
       name: 'md-tablet-landscape'
    },
    {  
       code: '0xf38d',
       name: 'md-tablet-portrait'
    },
    {  
       code: '0xf38e',
       name: 'md-tennisball'
    },
    {  
       code: '0xf38f',
       name: 'md-text'
    },
    {  
       code: '0xf390',
       name: 'md-thermometer'
    },
    {  
       code: '0xf391',
       name: 'md-thumbs-down'
    },
    {  
       code: '0xf392',
       name: 'md-thumbs-up'
    },
    {  
       code: '0xf393',
       name: 'md-thunderstorm'
    },
    {  
       code: '0xf394',
       name: 'md-time'
    },
    {  
       code: '0xf395',
       name: 'md-timer'
    },
    {  
       code: '0xf17d',
       name: 'md-today'
    },
    {  
       code: '0xf396',
       name: 'md-train'
    },
    {  
       code: '0xf397',
       name: 'md-transgender'
    },
    {  
       code: '0xf398',
       name: 'md-trash'
    },
    {  
       code: '0xf399',
       name: 'md-trending-down'
    },
    {  
       code: '0xf39a',
       name: 'md-trending-up'
    },
    {  
       code: '0xf39b',
       name: 'md-trophy'
    },
    {  
       code: '0xf17f',
       name: 'md-tv'
    },
    {  
       code: '0xf39c',
       name: 'md-umbrella'
    },
    {  
       code: '0xf39d',
       name: 'md-undo'
    },
    {  
       code: '0xf39e',
       name: 'md-unlock'
    },
    {  
       code: '0xf39f',
       name: 'md-videocam'
    },
    {  
       code: '0xf123',
       name: 'md-volume-high'
    },
    {  
       code: '0xf131',
       name: 'md-volume-low'
    },
    {  
       code: '0xf3a1',
       name: 'md-volume-mute'
    },
    {  
       code: '0xf3a2',
       name: 'md-volume-off'
    },
    {  
       code: '0xf3a4',
       name: 'md-walk'
    },
    {  
       code: '0xf18f',
       name: 'md-wallet'
    },
    {  
       code: '0xf3a5',
       name: 'md-warning'
    },
    {  
       code: '0xf3a6',
       name: 'md-watch'
    },
    {  
       code: '0xf3a7',
       name: 'md-water'
    },
    {  
       code: '0xf3a8',
       name: 'md-wifi'
    },
    {  
       code: '0xf3a9',
       name: 'md-wine'
    },
    {  
       code: '0xf3aa',
       name: 'md-woman'
    }
 ];

  constructor() { }

  ngOnInit() {
  }

}
