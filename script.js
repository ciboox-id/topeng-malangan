(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_485BFF41_598E_3DB2_41A9_33F36E014467], 'gyroscopeAvailable'); this.syncPlaylists([this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist,this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist,this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist,this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist,this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist,this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A].forEach(function(component) { component.set('visible', false); }) }",
 "downloadEnabled": false,
 "data": {
  "name": "Player468"
 },
 "height": "100%",
 "id": "rootPlayer",
 "layout": "absolute",
 "minHeight": 20,
 "children": [
  "this.MainViewer",
  "this.Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_59BD9FF7_4087_30A0_41CB_7666679BFA1D",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "buttonToggleMute": "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "desktopMipmappingEnabled": false,
 "propagateClick": true,
 "borderSize": 0,
 "paddingLeft": 0,
 "definitions": [{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.77,
  "pitch": 0
 },
 "id": "camera_5A521475_551D_BF74_41C7_CEB4F425B04D"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -71.11,
  "pitch": 0
 },
 "id": "camera_5A94253A_551D_BEFC_417B_497DF5768688"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -100.96,
  "pitch": 0
 },
 "id": "camera_451376D3_551D_BB8C_41C5_001AE15BA3B7"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.24,
  "pitch": 0
 },
 "id": "camera_45BF0894_551D_B7B4_41A0_5BF9CC7803E8"
},
{
 "thumbnailUrl": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Area Bermain",
 "id": "panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF",
   "backwardYaw": -75.74,
   "yaw": -153.03,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803",
   "backwardYaw": 129.48,
   "yaw": -94.48,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B51FDB4A_A135_ECD8_41C1_1D0807A63E01",
  "this.overlay_B695FF15_A48A_BC02_41C0_26B1EF8AF3ED",
  "this.overlay_BB56CBD0_AB04_813A_41E1_7441018D10D2"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -141.89,
  "pitch": 0
 },
 "id": "camera_5A04C34E_551D_BA94_41C4_FB2B2C243FE0"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 0, 1)",
   "media": "this.panorama_AE398C76_A090_E9EB_41DB_792D72C00094",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AE398C76_A090_E9EB_41DB_792D72C00094_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 1, 2)",
   "media": "this.panorama_AD311744_A090_272E_41E2_516BE2B53D45",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD311744_A090_272E_41E2_516BE2B53D45_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 2, 3)",
   "media": "this.panorama_AD6F770B_A090_6739_41A2_89069712FE4D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD6F770B_A090_6739_41A2_89069712FE4D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 3, 4)",
   "media": "this.panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 4, 5)",
   "media": "this.panorama_AED63BA8_A090_2F67_41D2_E05607D4514B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 5, 6)",
   "media": "this.panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 6, 7)",
   "media": "this.panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 7, 8)",
   "media": "this.panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 8, 9)",
   "media": "this.panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 9, 10)",
   "media": "this.panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 10, 11)",
   "media": "this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 11, 12)",
   "media": "this.panorama_AD729017_A097_D92A_41B9_3F9917723535",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD729017_A097_D92A_41B9_3F9917723535_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 12, 13)",
   "media": "this.panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 13, 14)",
   "media": "this.panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 14, 0)",
   "media": "this.panorama_AD441DCD_A090_2B39_4136_ABF8978199CE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_camera"
  }
 ],
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in",
 "id": "FadeInEffect_B1CBF328_A5A9_EF5A_41DF_DA311959758A",
 "duration": 500
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -10.56,
  "pitch": 0
 },
 "id": "camera_5A8B158F_551D_B994_41CD_D22887C26D07"
},
{
 "thumbnailUrl": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Tanjakan Jalan",
 "id": "panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69",
   "backwardYaw": 84.25,
   "yaw": -26.05,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AD311744_A090_272E_41E2_516BE2B53D45",
   "backwardYaw": 10.28,
   "yaw": -178.25,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_BB2DE721_AB05_811B_41C3_A622A19FFAEA",
  "this.overlay_93D6137C_BFE5_5D81_41D0_2DB9352A93FA",
  "this.overlay_93E0E8AB_BFE3_EC87_41C0_6144560F61A1",
  "this.overlay_93905FE1_BFE3_2483_4183_170BDD0D705C",
  "this.overlay_9309472E_BFEF_2581_41A0_7E3C7B60DDE4"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_BB0A4501_AB05_811B_41E0_48B6C7E40416",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Taman Replika Topeng",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BB09C503_AB05_811F_41D8_2192EA061CDD"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 33.58,
  "pitch": 0
 },
 "id": "camera_5A2F0438_551D_BEFC_41D1_D70350EF99F9"
},
{
 "thumbnailUrl": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Area Parkir",
 "id": "panorama_AD6F770B_A090_6739_41A2_89069712FE4D",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AD311744_A090_272E_41E2_516BE2B53D45",
   "backwardYaw": 79.04,
   "yaw": 17.74,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B4228F21_A47A_5C05_41D0_070158CE820D",
  "this.overlay_92979BDF_BFE7_6CBF_41E6_743D1AF38D31"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Depan AUla",
 "id": "panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AD729017_A097_D92A_41B9_3F9917723535",
   "backwardYaw": 79.02,
   "yaw": -69.92,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF",
   "backwardYaw": 160.46,
   "yaw": -33.97,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0",
   "backwardYaw": -26.05,
   "yaw": 84.25,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF",
   "backwardYaw": 108.89,
   "yaw": 60.63,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1",
   "backwardYaw": 132.92,
   "yaw": -4.76,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AED63BA8_A090_2F67_41D2_E05607D4514B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AD441DCD_A090_2B39_4136_ABF8978199CE",
   "backwardYaw": 169.44,
   "yaw": 38.11,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B395FC9E_A133_E47B_41DB_12661FB31E75",
  "this.overlay_B2878113_A132_9C49_41B4_5A465FC86A92",
  "this.overlay_B7BE9BCB_A48B_E406_4193_B8EEF882ABE2",
  "this.overlay_B73E9BE2_A48B_A407_41CA_88E424DC3618",
  "this.overlay_B2763C3C_A49F_BC02_41D0_C68B6E7564AC",
  "this.overlay_BAEAD423_AB0F_871E_41E3_C2CDFA906E54",
  "this.overlay_B909CE08_AB0C_832A_41DA_FA7313C9B934",
  "this.overlay_8FA8E517_BF22_E58F_41C3_ACC37BF68644",
  "this.overlay_9035AFFE_BF23_6481_41E5_48736EB907AD"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -162.26,
  "pitch": 0
 },
 "id": "camera_5AA8F5E8_551D_B99C_41C3_312488C69691"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_AD729017_A097_D92A_41B9_3F9917723535_camera"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_931896BE_BFEF_2481_41E2_64280859BA3F",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Produk Topeng",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_930746C6_BFEF_2481_41E5_7FC1151F6BA8"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 0, 1)",
   "media": "this.panorama_AE398C76_A090_E9EB_41DB_792D72C00094",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AE398C76_A090_E9EB_41DB_792D72C00094_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 1, 2)",
   "media": "this.panorama_AD311744_A090_272E_41E2_516BE2B53D45",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD311744_A090_272E_41E2_516BE2B53D45_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 2, 3)",
   "media": "this.panorama_AD6F770B_A090_6739_41A2_89069712FE4D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD6F770B_A090_6739_41A2_89069712FE4D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 3, 4)",
   "media": "this.panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 4, 5)",
   "media": "this.panorama_AED63BA8_A090_2F67_41D2_E05607D4514B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 5, 6)",
   "media": "this.panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 6, 7)",
   "media": "this.panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 7, 8)",
   "media": "this.panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 8, 9)",
   "media": "this.panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 9, 10)",
   "media": "this.panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 10, 11)",
   "media": "this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 11, 12)",
   "media": "this.panorama_AD729017_A097_D92A_41B9_3F9917723535",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD729017_A097_D92A_41B9_3F9917723535_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 12, 13)",
   "media": "this.panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 13, 14)",
   "media": "this.panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 14, 0)",
   "media": "this.panorama_AD441DCD_A090_2B39_4136_ABF8978199CE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_camera"
  }
 ],
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -169.72,
  "pitch": 0
 },
 "id": "camera_4530F729_551D_BA9C_41CF_C125BF9628BF"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_BAD2F3FE_AB0F_80E6_41A5_4E0BA1163171",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Mushola",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BAD7D401_AB0F_871A_41E3_FB98C6B5ABFA"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "thumbnailUrl": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "7 Ruang Produksi Topeng copy",
 "id": "panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69",
   "backwardYaw": -33.97,
   "yaw": 160.46,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_904BD02B_BF3F_5B87_41CA_D0F41507BABA",
  "this.overlay_9076D348_BF3D_5D81_41DA_0D819213594D"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 153.95,
  "pitch": 0
 },
 "id": "camera_5A66850A_551D_BE9C_41B9_A82A273806AB"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_BB6A37D4_AB0C_8139_41DC_0FF1A3BC5F2C",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Spot Foto Love",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BB6CE7D7_AB0C_8127_41D5_DB6A78FFDF72"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_BB410484_AB04_871A_41E5_2563077E035F",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Rumah Warga",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BB4FA487_AB04_8726_41E2_F904A8CC34D6"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_9077DE8E_BF3D_2481_4191_AA88C9A90795",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Perumahan Warga",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_90731E92_BF3D_2481_41D1_7624878698BC"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 0, 1)",
   "media": "this.panorama_AE398C76_A090_E9EB_41DB_792D72C00094",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AE398C76_A090_E9EB_41DB_792D72C00094_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 1, 2)",
   "media": "this.panorama_AD311744_A090_272E_41E2_516BE2B53D45",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD311744_A090_272E_41E2_516BE2B53D45_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 2, 3)",
   "media": "this.panorama_AD6F770B_A090_6739_41A2_89069712FE4D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD6F770B_A090_6739_41A2_89069712FE4D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 3, 4)",
   "media": "this.panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 4, 5)",
   "media": "this.panorama_AED63BA8_A090_2F67_41D2_E05607D4514B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 5, 6)",
   "media": "this.panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 6, 7)",
   "media": "this.panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 7, 8)",
   "media": "this.panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 8, 9)",
   "media": "this.panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 9, 10)",
   "media": "this.panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 10, 11)",
   "media": "this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 11, 12)",
   "media": "this.panorama_AD729017_A097_D92A_41B9_3F9917723535",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD729017_A097_D92A_41B9_3F9917723535_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 12, 13)",
   "media": "this.panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 13, 14)",
   "media": "this.panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 14, 0)",
   "media": "this.panorama_AD441DCD_A090_2B39_4136_ABF8978199CE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_camera"
  }
 ],
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist"
},
{
 "buttonToggleHotspots": "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "buttonCardboardView": "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_out",
 "id": "FadeOutEffect_B1CBC328_A5A9_EF5A_41DC_6B31F2783E84",
 "duration": 500
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 165.88,
  "pitch": 0
 },
 "id": "camera_5AB915BD_551D_B9F4_41A5_20815A552A54"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -19.54,
  "pitch": 0
 },
 "id": "camera_5A7734DA_551D_BFBC_41D4_F23EDF828895"
},
{
 "thumbnailUrl": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Simpang Kampung",
 "id": "panorama_AD311744_A090_272E_41E2_516BE2B53D45",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AE398C76_A090_E9EB_41DB_792D72C00094",
   "backwardYaw": -14.12,
   "yaw": 111.5,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AD6F770B_A090_6739_41A2_89069712FE4D",
   "backwardYaw": 17.74,
   "yaw": 79.04,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0",
   "backwardYaw": -178.25,
   "yaw": 10.28,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B3A5795E_A135_ACF8_41D7_B854B8831CCA",
  "this.overlay_B380142A_A132_A458_41D7_DE765848FE70",
  "this.overlay_B4488E7F_A47E_BCFD_41D3_97CD3165AC29",
  "this.overlay_BB7A84AF_AB04_8766_41DA_F49EF509C7F0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -47.08,
  "pitch": 0
 },
 "id": "camera_5A9BB563_551D_BE8C_4185_07841017D32B"
},
{
 "thumbnailUrl": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Taman Gatotkaca",
 "id": "panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803",
   "backwardYaw": 66.47,
   "yaw": -146.42,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05",
   "backwardYaw": -28.17,
   "yaw": -124.67,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B1C0790E_A486_A41E_41E2_6F79FB814943",
  "this.overlay_B158584C_A485_E402_41CD_A7B54B320736",
  "this.overlay_BA3C9A95_AB0D_833B_41D4_D0225FADD7E2"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 0, 1)",
   "media": "this.panorama_AE398C76_A090_E9EB_41DB_792D72C00094",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AE398C76_A090_E9EB_41DB_792D72C00094_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 1, 2)",
   "media": "this.panorama_AD311744_A090_272E_41E2_516BE2B53D45",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD311744_A090_272E_41E2_516BE2B53D45_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 2, 3)",
   "media": "this.panorama_AD6F770B_A090_6739_41A2_89069712FE4D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD6F770B_A090_6739_41A2_89069712FE4D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 3, 4)",
   "media": "this.panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 4, 5)",
   "media": "this.panorama_AED63BA8_A090_2F67_41D2_E05607D4514B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 5, 6)",
   "media": "this.panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 6, 7)",
   "media": "this.panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 7, 8)",
   "media": "this.panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 8, 9)",
   "media": "this.panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 9, 10)",
   "media": "this.panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 10, 11)",
   "media": "this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 11, 12)",
   "media": "this.panorama_AD729017_A097_D92A_41B9_3F9917723535",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD729017_A097_D92A_41B9_3F9917723535_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 12, 13)",
   "media": "this.panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 13, 14)",
   "media": "this.panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 14, 0)",
   "media": "this.panorama_AD441DCD_A090_2B39_4136_ABF8978199CE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_camera"
  }
 ],
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_BB32CBAD_AB04_816B_41E5_430475410BBA",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Area Bermain",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BB3FEBAD_AB04_816A_41E2_931363B6668B"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -119.37,
  "pitch": 0
 },
 "id": "camera_458FD86E_551D_B694_419D_B7EDC7D2E9A2"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_AE398C76_A090_E9EB_41DB_792D72C00094",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AE398C76_A090_E9EB_41DB_792D72C00094_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_AD311744_A090_272E_41E2_516BE2B53D45",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD311744_A090_272E_41E2_516BE2B53D45_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_AD6F770B_A090_6739_41A2_89069712FE4D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD6F770B_A090_6739_41A2_89069712FE4D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_AED63BA8_A090_2F67_41D2_E05607D4514B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_AD729017_A097_D92A_41B9_3F9917723535",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD729017_A097_D92A_41B9_3F9917723535_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 0)",
   "media": "this.panorama_AD441DCD_A090_2B39_4136_ABF8978199CE",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 1.75,
  "pitch": 0
 },
 "id": "camera_5ADED618_551D_BABC_41C1_8893678926CB"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_camera"
},
{
 "class": "ImageResource",
 "id": "ImageResource_B1CBE327_A5A9_EF56_41B4_A86D9BB9BC06",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/zoomImage_B61A6595_A5A6_EB4A_41E0_AC8433C5A8BB_0_0.jpg",
   "width": 2480,
   "height": 3508
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/zoomImage_B61A6595_A5A6_EB4A_41E0_AC8433C5A8BB_0_1.jpg",
   "width": 1447,
   "height": 2048
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/zoomImage_B61A6595_A5A6_EB4A_41E0_AC8433C5A8BB_0_2.jpg",
   "width": 723,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/zoomImage_B61A6595_A5A6_EB4A_41E0_AC8433C5A8BB_0_3.jpg",
   "width": 361,
   "height": 512
  }
 ]
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_BBDC04CA_AB0C_8729_41E2_53B3A8E9E926",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Perumahan Warga",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BBD2A4CD_AB0C_872B_41E2_8104F0971CC4"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "thumbnailUrl": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Gerbang Utama",
 "id": "panorama_AE398C76_A090_E9EB_41DB_792D72C00094",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AD311744_A090_272E_41E2_516BE2B53D45",
   "backwardYaw": 111.5,
   "yaw": -14.12,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B4247C18_A137_A478_41D8_4FD924D5942E",
  "this.overlay_B800A9CF_AB03_8127_41E3_A1A817A70813"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Kesekertariatan",
 "id": "panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69",
   "backwardYaw": -4.76,
   "yaw": 132.92,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B55706C3_A12E_A5C8_41D3_8ADDA60DE0BF",
  "this.overlay_BBB92EEC_AB0D_80EA_41C6_F07ADC3A9358"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -113.53,
  "pitch": 0
 },
 "id": "camera_4526E752_551D_BA8C_41C2_D64354C97C94"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_camera"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 0, 1)",
   "media": "this.panorama_AE398C76_A090_E9EB_41DB_792D72C00094",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AE398C76_A090_E9EB_41DB_792D72C00094_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 1, 2)",
   "media": "this.panorama_AD311744_A090_272E_41E2_516BE2B53D45",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD311744_A090_272E_41E2_516BE2B53D45_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 2, 3)",
   "media": "this.panorama_AD6F770B_A090_6739_41A2_89069712FE4D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD6F770B_A090_6739_41A2_89069712FE4D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 3, 4)",
   "media": "this.panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 4, 5)",
   "media": "this.panorama_AED63BA8_A090_2F67_41D2_E05607D4514B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 5, 6)",
   "media": "this.panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 6, 7)",
   "media": "this.panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 7, 8)",
   "media": "this.panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 8, 9)",
   "media": "this.panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 9, 10)",
   "media": "this.panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 10, 11)",
   "media": "this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 11, 12)",
   "media": "this.panorama_AD729017_A097_D92A_41B9_3F9917723535",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD729017_A097_D92A_41B9_3F9917723535_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 12, 13)",
   "media": "this.panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 13, 14)",
   "media": "this.panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 14, 0)",
   "media": "this.panorama_AD441DCD_A090_2B39_4136_ABF8978199CE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_camera"
  }
 ],
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_BB890EC4_AB0D_831A_41E1_E473FD05CCCA",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Area Souvenir Topeng",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BB8F5EC7_AB0D_8326_41D6_EE154004C4A4"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -95.75,
  "pitch": 0
 },
 "id": "camera_45010700_551D_BA8C_41CF_F0FBA6B79228"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_AD311744_A090_272E_41E2_516BE2B53D45_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_camera"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 0, 1)",
   "media": "this.panorama_AE398C76_A090_E9EB_41DB_792D72C00094",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AE398C76_A090_E9EB_41DB_792D72C00094_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 1, 2)",
   "media": "this.panorama_AD311744_A090_272E_41E2_516BE2B53D45",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD311744_A090_272E_41E2_516BE2B53D45_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 2, 3)",
   "media": "this.panorama_AD6F770B_A090_6739_41A2_89069712FE4D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD6F770B_A090_6739_41A2_89069712FE4D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 3, 4)",
   "media": "this.panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 4, 5)",
   "media": "this.panorama_AED63BA8_A090_2F67_41D2_E05607D4514B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 5, 6)",
   "media": "this.panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 6, 7)",
   "media": "this.panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 7, 8)",
   "media": "this.panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 8, 9)",
   "media": "this.panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 9, 10)",
   "media": "this.panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 10, 11)",
   "media": "this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 11, 12)",
   "media": "this.panorama_AD729017_A097_D92A_41B9_3F9917723535",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD729017_A097_D92A_41B9_3F9917723535_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 12, 13)",
   "media": "this.panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 13, 14)",
   "media": "this.panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 14, 0)",
   "media": "this.panorama_AD441DCD_A090_2B39_4136_ABF8978199CE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_camera"
  }
 ],
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 146.03,
  "pitch": 0
 },
 "id": "camera_5AE3D6A4_551D_BB94_419B_BEE63D7C31C5"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_93635B7C_BFE7_6D81_41D2_2661869C3CA3",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Area Parkir",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_9360CB7E_BFE7_6D81_41E1_50CC70C8B2C0"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_8DC1F53E_BF23_6581_41D0_F064221DD7B1",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Gedung Pengelola",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_8DC3F542_BF23_6581_41C5_2D803F5EF48A"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_camera"
},
{
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_4D4B291C_43A1_3914_41C9_7C921E21F2D1.mp3",
  "oggUrl": "media/audio_4D4B291C_43A1_3914_41C9_7C921E21F2D1.ogg"
 },
 "data": {
  "label": "eng_topeng"
 },
 "class": "MediaAudio",
 "id": "audio_4D4B291C_43A1_3914_41C9_7C921E21F2D1",
 "autoplay": true
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_AD6F770B_A090_6739_41A2_89069712FE4D_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -100.98,
  "pitch": 0
 },
 "id": "camera_5A41E4A7_551D_BF94_41C9_23DD39372FE1"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 104.26,
  "pitch": 0
 },
 "id": "camera_457BE7F9_551D_B97C_41C3_ADEF5C5AC249"
},
{
 "thumbnailUrl": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Gang Desa Topeng",
 "id": "panorama_AD729017_A097_D92A_41B9_3F9917723535",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69",
   "backwardYaw": -69.92,
   "yaw": 79.02,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B22541C7_A12D_BFC9_41D5_63A09FF2D622",
  "this.overlay_BBFA64F1_AB0C_80FB_41B7_9729A1CEAC66"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 26.97,
  "pitch": 0
 },
 "id": "camera_45992847_551D_B694_41CA_416062E8DE3B"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 110.08,
  "pitch": 0
 },
 "id": "camera_454657A5_551D_B994_41D4_19490DC0007C"
},
{
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_5A5876D2_4081_F0E1_41B0_156F2B66ECF9.mp3",
  "oggUrl": "media/audio_5A5876D2_4081_F0E1_41B0_156F2B66ECF9.ogg"
 },
 "data": {
  "label": "audio Kampung malang topengan"
 },
 "class": "MediaAudio",
 "id": "audio_5A5876D2_4081_F0E1_41B0_156F2B66ECF9",
 "autoplay": true
},
{
 "thumbnailUrl": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Jalan naik",
 "id": "panorama_AD441DCD_A090_2B39_4136_ABF8978199CE",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69",
   "backwardYaw": 38.11,
   "yaw": 169.44,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69",
   "backwardYaw": 38.11,
   "yaw": -171.52,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B2B2DA06_A12E_AC4B_41A9_0448A2B5E88C",
  "this.overlay_BBA726AA_AB0D_8369_41C2_35D2C92787AB",
  "this.overlay_8D0C357A_BF23_6581_41E7_B80ECD2CF306",
  "this.overlay_9041FEB5_BF3D_2483_41E7_2E2605CCC981",
  "this.overlay_907D552C_BF3F_2581_41A0_8F3BF655DF9F"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 151.83,
  "pitch": 0
 },
 "id": "camera_5AFC5675_551D_BB74_41B2_523E254F04AA"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_B9F2999C_AB03_8129_41DB_9693C93A9D29",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Gerbang Utama",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_B9E029A6_AB03_8119_41C2_627C940C7681"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 85.52,
  "pitch": 0
 },
 "id": "camera_5A3003CA_551D_B99C_41BC_62942776867F"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_camera"
},
{
 "thumbnailUrl": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Depan Topeng",
 "id": "panorama_AED63BA8_A090_2F67_41D2_E05607D4514B",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B56D94C4_A47A_AC03_41CB_6B3AE47CAD72",
  "this.overlay_BB25E528_AB05_8169_41A2_E9D7A5D8FC99"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -50.52,
  "pitch": 0
 },
 "id": "camera_45699822_551D_B68C_41BB_2D1F393723B5"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_BA109A6D_AB0D_83EB_41D8_8FF9C7A4DF0A",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Patung Gatotkaca",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BA138A6F_AB0D_83E7_41DB_4D6214BE177D"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "thumbnailUrl": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Area Foto",
 "id": "panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C",
   "backwardYaw": -94.48,
   "yaw": 129.48,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB",
   "backwardYaw": -146.42,
   "yaw": 66.47,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB",
   "backwardYaw": -146.42,
   "yaw": 79.79,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05",
   "backwardYaw": 2.23,
   "yaw": 66.47,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B3BABE7C_A136_A4B8_41C3_80D092873D8F",
  "this.overlay_BB9247FB_AB0C_80EF_41DF_ED7B4DEC1CFB",
  "this.overlay_8E4E4231_BF1E_DF83_41B6_4D914ADB1CA8",
  "this.overlay_911D35C4_BF1D_2481_41E1_AF2FD2E49ACF"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Belakang Topeng",
 "id": "panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C",
   "backwardYaw": -153.03,
   "yaw": -75.74,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69",
   "backwardYaw": 60.63,
   "yaw": 108.89,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B3FEEDEA_A132_A7D8_41CF_97C7EF08DA4E",
  "this.overlay_B3ADA448_A133_64D8_41E0_DDD356BD5E81"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_BB3376F0_AB05_80FA_41DE_B21AC83FB81D",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Topeng Ikonik",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BB3EB6F2_AB05_80F9_41E4_79839D7BB2BB"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_BAE42DE1_AB0C_811A_41D6_BDA26EE0F7A6",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "TK Insan Sejahtera",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BAE50DE3_AB0C_811E_4185_57B19088AF45"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "thumbnailUrl": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Jalan Bukit",
 "id": "panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803",
   "backwardYaw": 66.47,
   "yaw": 2.23,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB",
   "backwardYaw": -124.67,
   "yaw": -28.17,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9199A5F1_BF23_2483_41DD_449F7112E125",
  "this.overlay_9129CC2B_BF25_EB87_4197_C83EF0A4239D"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_BBB78686_AB0D_8319_41DA_95D46C9CDC75",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Loket Tiket",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_BBB53687_AB0D_8327_41E3_6F31354AC51E"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -68.5,
  "pitch": 0
 },
 "id": "camera_457407CF_551D_B993_41C2_32B783A18CFF"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 55.33,
  "pitch": 0
 },
 "id": "camera_4556277B_551D_B97C_4148_E0702B1BD39B"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -141.89,
  "pitch": 0
 },
 "id": "camera_5A0EE390_551D_B98C_417A_BA51421F7CF0"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_9066031D_BF3D_5D83_41C5_9BA56E800F77",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Ruang Produksi Topeng",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_9064C320_BF3D_5D81_41D6_D2953FAB06D6"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -113.53,
  "pitch": 0
 },
 "id": "camera_5ACE7645_551D_BA94_41B1_7F94877AC6EA"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 33.58,
  "pitch": 0
 },
 "id": "camera_5A3BE401_551D_BE8C_41D3_BACBFBD0094C"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_AE398C76_A090_E9EB_41DB_792D72C00094_camera"
},
{
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "minHeight": 50,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 5,
 "borderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "10px",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "children": [
  "this.Label_0C5F23A8_3BA0_A6FF_419F_468451E37918",
  "this.Image_5AB74ADD_4081_10E0_41B7_70B984D63C79"
 ],
 "id": "Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
 "left": 30,
 "layout": "absolute",
 "minHeight": 1,
 "width": 271,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "bottom": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 97,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "--STICKER"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "data": {
  "name": "--BUTTON SET"
 },
 "scrollBarOpacity": 0.5,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
  "this.Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
  "this.Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "data": {
  "name": "-button set"
 },
 "scrollBarOpacity": 0.5,
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "layout": "vertical",
 "minHeight": 1,
 "width": 60,
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
  "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
  "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
  "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
  "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": 15,
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "height": 300,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0.02
 ],
 "top": 62,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "gap": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "children": [
  "this.IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
  "this.IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
  "this.IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
  "this.IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
  "this.IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
  "this.IconButton_B6B950D0_A091_D927_41BE_C8B55F476B18",
  "this.IconButton_B74E92BD_A090_3959_41E2_B32C2E223160",
  "this.IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
  "this.IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "layout": "horizontal",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "paddingRight": 30,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "38.885%",
 "height": 90,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set container"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "data": {
  "name": "---INFO photo"
 },
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "---PANORAMA LIST"
 },
 "id": "Container_59BD9FF7_4087_30A0_41CB_7666679BFA1D",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_59BE2FF7_4087_30A0_41CB_CC3C3B39D48F"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_59BD9FF7_4087_30A0_41CB_7666679BFA1D, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "---LOCATION"
 },
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "---FLOORPLAN"
 },
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "---PHOTOALBUM"
 },
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "---REALTOR"
 },
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#04A3E1",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "minHeight": 0,
 "backgroundOpacity": 0.55,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "right": 0,
 "minWidth": 0,
 "propagateClick": false,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": 0,
 "class": "UIComponent",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "UIComponent2181"
 },
 "paddingTop": 0,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "minHeight": 0,
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "right": 0,
 "minWidth": 0,
 "propagateClick": false,
 "bottom": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": 0,
 "class": "ZoomImage",
 "backgroundColorRatios": [],
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "ZoomImage2182"
 },
 "paddingTop": 0,
 "visible": false,
 "scaleMode": "custom"
},
{
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "CloseButton2183"
 },
 "id": "closeButtonPopupPanorama",
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "layout": "horizontal",
 "pressedIconColor": "#888888",
 "minHeight": 0,
 "iconWidth": 20,
 "backgroundOpacity": 0.3,
 "shadowSpread": 1,
 "iconHeight": 20,
 "shadow": false,
 "paddingBottom": 5,
 "borderRadius": 0,
 "right": 10,
 "iconColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 0,
 "iconBeforeLabel": true,
 "propagateClick": false,
 "fontStyle": "normal",
 "rollOverIconColor": "#666666",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 5,
 "fontWeight": "normal",
 "mode": "push",
 "paddingRight": 5,
 "top": 10,
 "class": "CloseButton",
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "fontSize": "1.29vmin",
 "label": "",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 5,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "iconLineWidth": 5
},
{
 "pressedIconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings Mute"
 },
 "iconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41.png",
 "id": "Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedIconWidth": 30,
 "minHeight": 1,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "pressedIconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "iconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A.png",
 "id": "Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedIconWidth": 30,
 "minHeight": 1,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803, this.camera_45699822_551D_B68C_41BB_2D1F393723B5); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B139EA22_A48F_A406_41D8_0B91B272F727",
   "pitch": 0.29,
   "yaw": -94.48,
   "hfov": 13.59,
   "distance": 50
  }
 ],
 "id": "overlay_B51FDB4A_A135_ECD8_41C1_1D0807A63E01",
 "data": {
  "label": "Circle Arrow 04 Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.29,
   "hfov": 13.59
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF, this.camera_457BE7F9_551D_B97C_41C3_ADEF5C5AC249); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B139BA22_A48F_A406_41C3_13BB113CFDB1",
   "pitch": -11.86,
   "yaw": -153.03,
   "hfov": 13.57,
   "distance": 50
  }
 ],
 "id": "overlay_B695FF15_A48A_BC02_41C0_26B1EF8AF3ED",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -153.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -11.86,
   "hfov": 13.57
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BB32CBAD_AB04_816B_41E5_430475410BBA, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BE614211_AB04_833B_41D6_A25E83776162",
   "pitch": -8.8,
   "yaw": -1.82,
   "hfov": 18.58,
   "distance": 100
  }
 ],
 "id": "overlay_BB56CBD0_AB04_813A_41E1_7441018D10D2",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.8,
   "hfov": 18.58
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BB3376F0_AB05_80FA_41DE_B21AC83FB81D, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85DFDFC0_BF25_2481_41DD_4A09C14A38C1",
   "pitch": 19,
   "yaw": 65.45,
   "hfov": 17.78,
   "distance": 100
  }
 ],
 "id": "overlay_BB2DE721_AB05_811B_41C3_A622A19FFAEA",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 19,
   "hfov": 17.78
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD311744_A090_272E_41E2_516BE2B53D45, this.camera_4530F729_551D_BA9C_41CF_C125BF9628BF); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85DF5FC2_BF25_2481_41CF_4B2779F2DCFC",
   "pitch": -44.32,
   "yaw": -178.25,
   "hfov": 16.01,
   "distance": 100
  }
 ],
 "id": "overlay_93D6137C_BFE5_5D81_41D0_2DB9352A93FA",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -178.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_1_HS_3_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -44.32,
   "hfov": 16.01
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69, this.camera_45010700_551D_BA8C_41CF_F0FBA6B79228); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85DE9FC3_BF25_2487_41C1_360D26A36F26",
   "pitch": 11.27,
   "yaw": -26.05,
   "hfov": 10.1,
   "distance": 50
  }
 ],
 "id": "overlay_93E0E8AB_BFE3_EC87_41C0_6144560F61A1",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -26.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 11.27,
   "hfov": 10.1
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85DE3FC4_BF25_2481_41A5_4FA96E38728C",
   "pitch": 11.96,
   "yaw": 15.96,
   "hfov": 10.07,
   "distance": 50
  }
 ],
 "id": "overlay_93905FE1_BFE3_2483_4183_170BDD0D705C",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 15.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 11.96,
   "hfov": 10.07
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_931896BE_BFEF_2481_41E2_64280859BA3F, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85DE4FC4_BF25_2481_41D8_582C11832AA7",
   "pitch": 6.64,
   "yaw": -91.05,
   "hfov": 18.68,
   "distance": 100
  }
 ],
 "id": "overlay_9309472E_BFEF_2581_41A0_7E3C7B60DDE4",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -91.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.64,
   "hfov": 18.68
  }
 ]
},
{
 "id": "htmlText_BB09C503_AB05_811F_41D8_2192EA061CDD",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Taman Topeng Ikonik</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD311744_A090_272E_41E2_516BE2B53D45, this.camera_451376D3_551D_BB8C_41C5_001AE15BA3B7); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B13F2A1F_A48F_A43E_41D0_F21860311F57",
   "pitch": -2.45,
   "yaw": 17.74,
   "hfov": 16.05,
   "distance": 50
  }
 ],
 "id": "overlay_B4228F21_A47A_5C05_41D0_070158CE820D",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 17.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.45,
   "hfov": 16.05
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_93635B7C_BFE7_6D81_41D2_2661869C3CA3, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85DC5FBF_BF25_24FF_41E1_48D659BF046B",
   "pitch": -6.4,
   "yaw": 70.25,
   "hfov": 18.69,
   "distance": 100
  }
 ],
 "id": "overlay_92979BDF_BFE7_6CBF_41E6_743D1AF38D31",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 70.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.4,
   "hfov": 18.69
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0, this.camera_5A66850A_551D_BE9C_41B9_A82A273806AB); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B13B7A23_A48F_A406_41DA_42C5521E67F1",
   "pitch": -21.26,
   "yaw": 84.25,
   "hfov": 21.88,
   "distance": 100
  }
 ],
 "id": "overlay_B395FC9E_A133_E47B_41DB_12661FB31E75",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_1_HS_0_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -21.26,
   "hfov": 21.88
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD729017_A097_D92A_41B9_3F9917723535, this.camera_5A41E4A7_551D_BF94_41C9_23DD39372FE1); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85C4CFDB_BF25_2487_41E7_698A74577154",
   "pitch": 3.78,
   "yaw": -69.92,
   "hfov": 9,
   "distance": 50
  }
 ],
 "id": "overlay_B2878113_A132_9C49_41B4_5A465FC86A92",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -69.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.78,
   "hfov": 9
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B1953016_A487_A40E_41D7_6ECE13D732B1",
   "pitch": -4.31,
   "yaw": 77.12,
   "hfov": 8.55,
   "distance": 100
  }
 ],
 "id": "overlay_B7BE9BCB_A48B_E406_4193_B8EEF882ABE2",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 77.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_0_HS_2_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -4.31,
   "hfov": 8.55
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF, this.camera_5A94253A_551D_BEFC_417B_497DF5768688); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B1957016_A487_A40E_41E3_06D9BBD28553",
   "pitch": -3.77,
   "yaw": 60.63,
   "hfov": 8.56,
   "distance": 100
  }
 ],
 "id": "overlay_B73E9BE2_A48B_A407_41CA_88E424DC3618",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 60.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_0_HS_3_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -3.77,
   "hfov": 8.56
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD441DCD_A090_2B39_4136_ABF8978199CE, this.camera_5A8B158F_551D_B994_41CD_D22887C26D07); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B1923312_A5A9_EF4E_41E1_8446ACCB71D4",
   "pitch": -2.07,
   "yaw": 38.11,
   "hfov": 7.93,
   "distance": 50
  }
 ],
 "id": "overlay_B2763C3C_A49F_BC02_41D0_C68B6E7564AC",
 "data": {
  "label": "Circle Arrow 04 Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.07,
   "hfov": 7.93
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BAD2F3FE_AB0F_80E6_41A5_4E0BA1163171, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85C7DFDF_BF25_24BF_41D3_E24465E69EE3",
   "pitch": 3.49,
   "yaw": -96.58,
   "hfov": 8.04,
   "distance": 100
  }
 ],
 "id": "overlay_BAEAD423_AB0F_871E_41E3_C2CDFA906E54",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.49,
   "hfov": 8.04
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BAE42DE1_AB0C_811A_41D6_BDA26EE0F7A6, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85C6AFE1_BF25_2483_41D5_175167FC4044",
   "pitch": 1.46,
   "yaw": 13.43,
   "hfov": 9.05,
   "distance": 100
  }
 ],
 "id": "overlay_B909CE08_AB0C_832A_41DA_FA7313C9B934",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.46,
   "hfov": 9.05
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF, this.camera_5A7734DA_551D_BFBC_41D4_F23EDF828895); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85C63FE3_BF25_2487_4185_8BA0226FD0CE",
   "pitch": 4.7,
   "yaw": -33.97,
   "hfov": 9,
   "distance": 100
  }
 ],
 "id": "overlay_8FA8E517_BF22_E58F_41C3_ACC37BF68644",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -33.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_1_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.7,
   "hfov": 9
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1, this.camera_5A9BB563_551D_BE8C_4185_07841017D32B); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85C64FE5_BF25_2483_41BE_034EC49F1D25",
   "pitch": 3.64,
   "yaw": -4.76,
   "hfov": 9.01,
   "distance": 100
  }
 ],
 "id": "overlay_9035AFFE_BF23_6481_41E5_48736EB907AD",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_1_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.64,
   "hfov": 9.01
  }
 ]
},
{
 "id": "htmlText_930746C6_BFEF_2481_41E5_7FC1151F6BA8",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Karya seni warga kampung topeng malang</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_BAD7D401_AB0F_871A_41E3_FB98C6B5ABFA",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Tempat sholat</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69, this.camera_5AE3D6A4_551D_BB94_419B_BEE63D7C31C5); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85CD0FF4_BF25_2481_41AB_046E1242F746",
   "pitch": 2.04,
   "yaw": 160.46,
   "hfov": 15.61,
   "distance": 100
  }
 ],
 "id": "overlay_904BD02B_BF3F_5B87_41CA_D0F41507BABA",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 160.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.04,
   "hfov": 15.61
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_9066031D_BF3D_5D83_41C5_9BA56E800F77, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85CD5FF4_BF25_2482_41D1_117303859D3F",
   "pitch": -6.06,
   "yaw": 76.08,
   "hfov": 18.7,
   "distance": 100
  }
 ],
 "id": "overlay_9076D348_BF3D_5D81_41DA_0D819213594D",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.06,
   "hfov": 18.7
  }
 ]
},
{
 "id": "htmlText_BB6CE7D7_AB0C_8127_41D5_DB6A78FFDF72",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Spot berfoto yang instagramable</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_BB4FA487_AB04_8726_41E2_F904A8CC34D6",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Ada setidaknya ada 40 unit rumah yang dibangun dan sebagian besar penghuninya ialah pedagang kecil, pengemis dan gelandangan.</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_90731E92_BF3D_2481_41D1_7624878698BC",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Ada setidaknya ada 40 unit rumah yang dibangun dan sebagian besar penghuninya ialah pedagang kecil, pengemis dan gelandangan.</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "pressedIconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings HS"
 },
 "iconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA.png",
 "id": "Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedIconWidth": 30,
 "minHeight": 1,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "rollOverIconWidth": 30,
 "rollOverIconHeight": 30,
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "pressedIconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings Gyro"
 },
 "iconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467.png",
 "id": "Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedIconWidth": 30,
 "minHeight": 1,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "rollOverIconWidth": 30,
 "rollOverIconHeight": 30,
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button settings VR"
 },
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "fontStyle": "normal",
 "layout": "horizontal",
 "minHeight": 1,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AE398C76_A090_E9EB_41DB_792D72C00094, this.camera_5AB915BD_551D_B9F4_41A5_20815A552A54); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B13C6A1E_A48F_A43E_41DD_1E98986B225B",
   "pitch": -24.14,
   "yaw": 111.5,
   "hfov": 14.91,
   "distance": 50
  }
 ],
 "id": "overlay_B3A5795E_A135_ACF8_41D7_B854B8831CCA",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 111.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -24.14,
   "hfov": 14.91
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0, this.camera_5ADED618_551D_BABC_41C1_8893678926CB); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B13C3A1F_A48F_A43E_4199_0F64ED283CC7",
   "pitch": -10.57,
   "yaw": 10.28,
   "hfov": 18.39,
   "distance": 50
  }
 ],
 "id": "overlay_B380142A_A132_A458_41D7_DE765848FE70",
 "data": {
  "label": "Circle Arrow 02 Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 10.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.57,
   "hfov": 18.39
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD6F770B_A090_6739_41A2_89069712FE4D, this.camera_5AA8F5E8_551D_B99C_41C3_312488C69691); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85DDDFBB_BF25_2487_41CD_265F6EF2545A",
   "pitch": -8.36,
   "yaw": 79.04,
   "hfov": 22.68,
   "distance": 100
  }
 ],
 "id": "overlay_B4488E7F_A47E_BCFD_41D3_97CD3165AC29",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_1_HS_3_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -8.36,
   "hfov": 22.68
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BB410484_AB04_871A_41E5_2563077E035F, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85DD1FBC_BF25_2481_41D7_67D8F5859F75",
   "pitch": -4.68,
   "yaw": -143.21,
   "hfov": 18.74,
   "distance": 100
  }
 ],
 "id": "overlay_BB7A84AF_AB04_8766_41DA_F49EF509C7F0",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -143.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.68,
   "hfov": 18.74
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803, this.camera_5ACE7645_551D_BA94_41B1_7F94877AC6EA); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B193E311_A5A9_EF4A_41E1_76627076E699",
   "pitch": -8.35,
   "yaw": -146.42,
   "hfov": 7.85,
   "distance": 50
  }
 ],
 "id": "overlay_B1C0790E_A486_A41E_41E2_6F79FB814943",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -146.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.35,
   "hfov": 7.85
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05, this.camera_5AFC5675_551D_BB74_41B2_523E254F04AA); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85C2CFD1_BF25_2483_41AC_DF4237B70F8B",
   "pitch": 4.59,
   "yaw": -124.67,
   "hfov": 8.8,
   "distance": 50
  }
 ],
 "id": "overlay_B158584C_A485_E402_41CD_A7B54B320736",
 "data": {
  "label": "Circle Arrow 04 Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -124.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.59,
   "hfov": 8.8
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BA109A6D_AB0D_83EB_41D8_8FF9C7A4DF0A, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BE61C212_AB04_8339_41E1_FA9F5075BB42",
   "pitch": -19.44,
   "yaw": -1.82,
   "hfov": 17.73,
   "distance": 100
  }
 ],
 "id": "overlay_BA3C9A95_AB0D_833B_41D4_D0225FADD7E2",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -19.44,
   "hfov": 17.73
  }
 ]
},
{
 "id": "htmlText_BB3FEBAD_AB04_816A_41E2_931363B6668B",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Taman bermain dan berfoto</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_BBD2A4CD_AB0C_872B_41E2_8104F0971CC4",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Ada setidaknya ada 40 unit rumah yang dibangun dan sebagian besar penghuninya ialah pedagang kecil, pengemis dan gelandangan.</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD311744_A090_272E_41E2_516BE2B53D45, this.camera_457407CF_551D_B993_41C2_32B783A18CFF); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85D90FA7_BF25_248F_41DF_4CB608B57FA5",
   "pitch": -9.18,
   "yaw": -14.12,
   "hfov": 22.36,
   "distance": 100
  }
 ],
 "id": "overlay_B4247C18_A137_A478_41D8_4FD924D5942E",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_1_HS_0_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -9.18,
   "hfov": 22.36
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_B9F2999C_AB03_8129_41DB_9693C93A9D29, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85D8BFAD_BF25_2483_41D0_95F1CD6E677C",
   "pitch": 24.97,
   "yaw": -12.8,
   "hfov": 10.83,
   "distance": 100
  }
 ],
 "id": "overlay_B800A9CF_AB03_8127_41E3_A1A817A70813",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 24.97,
   "hfov": 10.83
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69, this.camera_45BF0894_551D_B7B4_41A0_5BF9CC7803E8); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B1389A25_A48F_A402_4174_8CB2D4C252DC",
   "pitch": -11.03,
   "yaw": 132.92,
   "hfov": 17.92,
   "distance": 50
  }
 ],
 "id": "overlay_B55706C3_A12E_A5C8_41D3_8ADDA60DE0BF",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 132.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -11.03,
   "hfov": 17.92
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BB890EC4_AB0D_831A_41E1_E473FD05CCCA, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BE9F0216_AB04_8339_41DA_9D04AF7EDBBA",
   "pitch": -30.08,
   "yaw": 9.85,
   "hfov": 16.27,
   "distance": 100
  }
 ],
 "id": "overlay_BBB92EEC_AB0D_80EA_41C6_F07ADC3A9358",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -30.08,
   "hfov": 16.27
  }
 ]
},
{
 "id": "htmlText_BB8F5EC7_AB0D_8326_41D6_EE154004C4A4",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Pengunjung akan mendapati fasilitas omah topeng, anda dapat melakukan kegiatan transaksi membeli souvenir berbentuk topeng dengan beragam model menarik. Di omah topeng diperbolehkan membuat hingga mewarnai topeng se-ukuran telapak tangan bayi menurut kreativitas sendiri.</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_9360CB7E_BFE7_6D81_41E1_50CC70C8B2C0",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Luas +- 10m, menampung sekitar 20 motor</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_8DC3F542_BF23_6581_41C5_2D803F5EF48A",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Dikelola oleh Dinas Sosial Kota Malang</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69, this.camera_454657A5_551D_B994_41D4_19490DC0007C); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B1959312_A5A9_EF4E_41E3_B0D365BEB180",
   "pitch": -24.55,
   "yaw": 79.02,
   "hfov": 24.82,
   "distance": 100
  }
 ],
 "id": "overlay_B22541C7_A12D_BFC9_41D5_63A09FF2D622",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_1_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -24.55,
   "hfov": 24.82
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BBDC04CA_AB0C_8729_41E2_53B3A8E9E926, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85CB7FE8_BF25_2481_41DD_753D8AA6F2FC",
   "pitch": -3.65,
   "yaw": -85.9,
   "hfov": 18.77,
   "distance": 100
  }
 ],
 "id": "overlay_BBFA64F1_AB0C_80FB_41B7_9729A1CEAC66",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.65,
   "hfov": 18.77
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69, this.camera_5A04C34E_551D_BA94_41C4_FB2B2C243FE0); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85CB2FED_BF25_2483_41DB_EC91E6D88ECE",
   "pitch": -35.99,
   "yaw": 169.44,
   "hfov": 20.77,
   "distance": 100
  }
 ],
 "id": "overlay_B2B2DA06_A12E_AC4B_41A9_0448A2B5E88C",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_1_HS_1_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -35.99,
   "hfov": 20.77
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BBB78686_AB0D_8319_41DA_95D46C9CDC75, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85CB7FEF_BF25_249F_41E3_24A346F1C5FC",
   "pitch": -12.23,
   "yaw": -146.99,
   "hfov": 18.38,
   "distance": 100
  }
 ],
 "id": "overlay_BBA726AA_AB0D_8369_41C2_35D2C92787AB",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -146.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -12.23,
   "hfov": 18.38
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_8DC1F53E_BF23_6581_41D0_F064221DD7B1, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85CAFFEF_BF25_249F_41B2_9C07448DEC08",
   "pitch": 6.98,
   "yaw": -10.06,
   "hfov": 18.67,
   "distance": 100
  }
 ],
 "id": "overlay_8D0C357A_BF23_6581_41E7_B80ECD2CF306",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.98,
   "hfov": 18.67
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_9077DE8E_BF3D_2481_4191_AA88C9A90795, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85CA7FF1_BF25_2483_41C1_F035E9D286A9",
   "pitch": -8.46,
   "yaw": 82.95,
   "hfov": 18.6,
   "distance": 100
  }
 ],
 "id": "overlay_9041FEB5_BF3D_2483_41E7_2E2605CCC981",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.46,
   "hfov": 18.6
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69, this.camera_5A0EE390_551D_B98C_417A_BA51421F7CF0); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85CDFFF2_BF25_2481_41D9_875CF74FE0A0",
   "pitch": -9.32,
   "yaw": -171.52,
   "hfov": 18.02,
   "distance": 50
  }
 ],
 "id": "overlay_907D552C_BF3F_2581_41A0_8F3BF655DF9F",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.32,
   "hfov": 18.02
  }
 ]
},
{
 "id": "htmlText_B9E029A6_AB03_8119_41C2_627C940C7681",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Diresmikan tanggal 14 Februari 2017 yang terletak di Tlogowaru, Kedungkandang Kota Malang. Pengunjung tak sekedar melakukan berbagai kegiatan berfoto menyenangkan bersama bersama bentuk topeng, melainkan pengunjung diperkenankan membuat dan mewarnai topeng secara mandiri, tentu mengasyikkan bukan.</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B13E3A21_A48F_A402_41CD_DFE99D9CF191",
   "pitch": -25.21,
   "yaw": 83.47,
   "hfov": 15.85,
   "distance": 100
  }
 ],
 "id": "overlay_B56D94C4_A47A_AC03_41CB_6B3AE47CAD72",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_1_HS_0_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -25.21,
   "hfov": 15.85
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BB0A4501_AB05_811B_41E0_48B6C7E40416, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BE67A210_AB04_8339_41CE_AC91491AAC18",
   "pitch": 10.42,
   "yaw": -177.2,
   "hfov": 18.5,
   "distance": 100
  }
 ],
 "id": "overlay_BB25E528_AB05_8169_41A2_E9D7A5D8FC99",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.42,
   "hfov": 18.5
  }
 ]
},
{
 "id": "htmlText_BA138A6F_AB0D_83E7_41DB_4D6214BE177D",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Patung pewayangan</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05, this.camera_5A521475_551D_BF74_41C7_CEB4F425B04D); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85C02FCC_BF25_2482_41E3_2BC6CA185FAA",
   "pitch": 11.55,
   "yaw": 66.47,
   "hfov": 15.2,
   "distance": 50
  }
 ],
 "id": "overlay_B3BABE7C_A136_A4B8_41C3_80D092873D8F",
 "data": {
  "label": "Circle Arrow 04 Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 66.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 11.55,
   "hfov": 15.2
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_BB6A37D4_AB0C_8139_41DC_0FF1A3BC5F2C, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BE625211_AB04_833B_41BC_C0A6BC352F22",
   "pitch": -4.34,
   "yaw": -9.03,
   "hfov": 18.75,
   "distance": 100
  }
 ],
 "id": "overlay_BB9247FB_AB0C_80EF_41DF_ED7B4DEC1CFB",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.34,
   "hfov": 18.75
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB, this.camera_5A2F0438_551D_BEFC_41D1_D70350EF99F9); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85C3CFCE_BF25_2481_41E3_31C7389CFFB4",
   "pitch": -4.58,
   "yaw": 79.79,
   "hfov": 14.92,
   "distance": 50
  }
 ],
 "id": "overlay_8E4E4231_BF1E_DF83_41B6_4D914ADB1CA8",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.58,
   "hfov": 14.92
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C, this.camera_5A3003CA_551D_B99C_41BC_62942776867F); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85C31FCF_BF25_249F_41D6_C028049590F1",
   "pitch": -30.8,
   "yaw": 129.48,
   "hfov": 15.92,
   "distance": 100
  }
 ],
 "id": "overlay_911D35C4_BF1D_2481_41E1_AF2FD2E49ACF",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 129.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_1_HS_4_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -30.8,
   "hfov": 15.92
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C, this.camera_45992847_551D_B694_41CA_416062E8DE3B); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85DE2FC7_BF25_248F_41CA_3296602E1736",
   "pitch": -9.18,
   "yaw": -75.74,
   "hfov": 25.61,
   "distance": 100
  }
 ],
 "id": "overlay_B3FEEDEA_A132_A7D8_41CF_97C7EF08DA4E",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_1_HS_0_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -9.18,
   "hfov": 25.61
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69, this.camera_458FD86E_551D_B694_419D_B7EDC7D2E9A2); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85DE4FC8_BF25_2481_41E3_454AE15EBC6A",
   "pitch": -13.98,
   "yaw": 108.89,
   "hfov": 25.18,
   "distance": 100
  }
 ],
 "id": "overlay_B3ADA448_A133_64D8_41E0_DDD356BD5E81",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 108.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_1_HS_1_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -13.98,
   "hfov": 25.18
  }
 ]
},
{
 "id": "htmlText_BB3EB6F2_AB05_80F9_41E4_79839D7BB2BB",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Topeng raksasa memiliki tinggi 7,5 meter dan lebar 5 meter. Topeng tersebut merupakan tokoh pewayangan yaitu Dewi sekartaji dan Asmorobangun. Cerita menarik Panji Asmorobangun memang sering menjadi tradisi dan seni masyarakat Malang.</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_BAE50DE3_AB0C_811E_4185_57B19088AF45",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Tempat anak-anak warga bersekolah</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB, this.camera_4556277B_551D_B97C_4148_E0702B1BD39B); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85C52FD9_BF25_2483_41E3_746F20B23C9B",
   "pitch": -23.51,
   "yaw": -28.17,
   "hfov": 12.06,
   "distance": 50
  }
 ],
 "id": "overlay_9199A5F1_BF23_2483_41DD_449F7112E125",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -28.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -23.51,
   "hfov": 12.06
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803, this.camera_4526E752_551D_BA8C_41C2_D64354C97C94); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85C54FD9_BF25_2483_41E2_C088EC2B7B43",
   "pitch": -21.74,
   "yaw": 2.23,
   "hfov": 13.9,
   "distance": 50
  }
 ],
 "id": "overlay_9129CC2B_BF25_EB87_4197_C83EF0A4239D",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -21.74,
   "hfov": 13.9
  }
 ]
},
{
 "id": "htmlText_BBB53687_AB0D_8327_41E3_6F31354AC51E",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Tiket dijual dengan harga Rp 5.000, tetapi pada tahun 2022 sepi pengunjung karena pandemi Covid-19</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_9064C320_BF3D_5D81_41D6_D2953FAB06D6",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Di omah topeng diperbolehkan membuat hingga mewarnai topeng se-ukuran telapak tangan bayi menurut kreativitas sendiri.</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "textShadowColor": "#000000",
 "fontFamily": "Montserrat",
 "fontWeight": "normal",
 "data": {
  "name": "text 2"
 },
 "id": "Label_0C5F23A8_3BA0_A6FF_419F_468451E37918",
 "left": 3,
 "minHeight": 1,
 "width": 236,
 "shadow": false,
 "paddingBottom": 0,
 "textShadowVerticalLength": 0,
 "borderRadius": 0,
 "text": "Guide Your VR Tourism",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "textShadowBlurRadius": 10,
 "propagateClick": false,
 "textShadowHorizontalLength": 0,
 "bottom": 5,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 32,
 "class": "Label",
 "fontSize": 18,
 "horizontalAlign": "left",
 "textShadowOpacity": 1,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "paddingTop": 0,
 "textDecoration": "none"
},
{
 "id": "Image_5AB74ADD_4081_10E0_41B7_70B984D63C79",
 "left": "0%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 1871,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "61.55%",
 "height": "63.918%",
 "propagateClick": false,
 "class": "Image",
 "maxHeight": 641,
 "url": "skin/Image_5AB74ADD_4081_10E0_41B7_70B984D63C79.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Image5137"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "fontFamily": "Montserrat",
 "fontWeight": "normal",
 "data": {
  "name": "Label Company Name"
 },
 "id": "Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
 "left": 76,
 "minHeight": 1,
 "width": 450,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "text": "Kampung Topeng Malangan",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 60,
 "top": "0%",
 "class": "Label",
 "fontSize": 31,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "paddingTop": 0,
 "textDecoration": "none"
},
{
 "id": "Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
 "left": 30,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 40,
 "top": "1.67%",
 "bottom": "-1.67%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "5%",
 "propagateClick": false,
 "class": "Image",
 "maxHeight": 30,
 "url": "skin/Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50.png",
 "horizontalAlign": "center",
 "data": {
  "name": "logo"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "children": [
  "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
  "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
  "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
  "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
  "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
  "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
  "this.Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89"
 ],
 "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
 "layout": "horizontal",
 "minHeight": 1,
 "width": 1199,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 15,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 60,
 "top": "0%",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "gap": 3,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set container"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "iconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52.png",
 "id": "IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "click": "this.showPopupImage(this.ImageResource_B1CBE327_A5A9_EF56_41B4_A86D9BB9BC06, null, '90%', '90%', this.FadeInEffect_B1CBF328_A5A9_EF5A_41DF_DA311959758A, this.FadeOutEffect_B1CBC328_A5A9_EF5A_41DC_6B31F2783E84, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Info"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8.png",
 "id": "IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Thumblist"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA.png",
 "id": "IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Photoalbum"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0.png",
 "id": "IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "click": "this.openLink('https://goo.gl/maps/gD9Us5B3KTiTiVFP6', '_blank')",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Location"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_pressed.png",
 "iconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8.png",
 "id": "IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Realtor"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_B6B950D0_A091_D927_41BE_C8B55F476B18.png",
 "id": "IconButton_B6B950D0_A091_D927_41BE_C8B55F476B18",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_B6B950D0_A091_D927_41BE_C8B55F476B18_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_B74E92BD_A090_3959_41E2_B32C2E223160.png",
 "id": "IconButton_B74E92BD_A090_3959_41E2_B32C2E223160",
 "minHeight": 1,
 "width": 36.8,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_B74E92BD_A090_3959_41E2_B32C2E223160_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 39.2,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B.png",
 "id": "IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
 "minHeight": 1,
 "width": 38.4,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44.8,
 "class": "IconButton",
 "click": "this.openLink('https://www.instagram.com/dewivtour/', '_blank')",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93.png",
 "id": "IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93",
 "minHeight": 1,
 "width": 36,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 41.6,
 "class": "IconButton",
 "click": "this.openLink('https://www.youtube.com/@user-gx1gq7me2z', '_blank')",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Video"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "10%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "15%",
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "10%",
 "bottom": "80%",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "id": "Container_59BE2FF7_4087_30A0_41CB_CC3C3B39D48F",
 "left": "15%",
 "layout": "absolute",
 "shadowColor": "#000000",
 "minHeight": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "visible",
 "children": [
  "this.Image_59BDDFF7_4087_30A0_41AC_7FA7FF557E2E",
  "this.HTMLText_59BDCFF7_4087_30A0_41B3_BC51A9C772EF",
  "this.Image_59BDEFF7_4087_30A0_4198_ED9EE6DB99A0"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "10%",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5
},
{
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "10%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "15%",
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "10%",
 "bottom": "80%",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "layout": "absolute",
 "shadowColor": "#000000",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "visible",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "10%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5
},
{
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "layout": "vertical",
 "shadowColor": "#000000",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "visible",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "10%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5
},
{
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "10%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "15%",
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "10%",
 "bottom": "80%",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_1_HS_0_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B139EA22_A48F_A406_41D8_0B91B272F727",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_1_HS_1_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B139BA22_A48F_A406_41C3_13BB113CFDB1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AECFBDE0_A090_2AE7_41E0_2C56C5F45B3C_1_HS_2_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BE614211_AB04_833B_41D6_A25E83776162",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_1_HS_2_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85DFDFC0_BF25_2481_41DD_4A09C14A38C1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_1_HS_3_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85DF5FC2_BF25_2481_41CF_4B2779F2DCFC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_1_HS_4_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85DE9FC3_BF25_2487_41C1_360D26A36F26",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_1_HS_5_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85DE3FC4_BF25_2481_41A5_4FA96E38728C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AE3550D6_A091_D92B_41D7_C99DAF0A66C0_1_HS_6_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85DE4FC4_BF25_2481_41D8_582C11832AA7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_1_HS_0_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B13F2A1F_A48F_A43E_41D0_F21860311F57",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD6F770B_A090_6739_41A2_89069712FE4D_1_HS_2_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85DC5FBF_BF25_24FF_41E1_48D659BF046B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_1_HS_0_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B13B7A23_A48F_A406_41DA_42C5521E67F1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_1_HS_1_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85C4CFDB_BF25_2487_41E7_698A74577154",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_0_HS_2_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B1953016_A487_A40E_41D7_6ECE13D732B1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_0_HS_3_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B1957016_A487_A40E_41E3_06D9BBD28553",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_1_HS_4_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B1923312_A5A9_EF4E_41E1_8446ACCB71D4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_1_HS_5_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85C7DFDF_BF25_24BF_41D3_E24465E69EE3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_1_HS_6_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85C6AFE1_BF25_2483_41D5_175167FC4044",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_1_HS_7_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85C63FE3_BF25_2487_4185_8BA0226FD0CE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD6AB27A_A097_D9DB_41B9_D5550E9FBD69_1_HS_8_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85C64FE5_BF25_2483_41BE_034EC49F1D25",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85CD0FF4_BF25_2481_41AB_046E1242F746",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_90EA0017_BFE3_5B8F_41E6_AE981650DFAF_1_HS_1_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85CD5FF4_BF25_2482_41D1_117303859D3F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_1_HS_0_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B13C6A1E_A48F_A43E_41DD_1E98986B225B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B13C3A1F_A48F_A43E_4199_0F64ED283CC7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_1_HS_3_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85DDDFBB_BF25_2487_41CD_265F6EF2545A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD311744_A090_272E_41E2_516BE2B53D45_1_HS_4_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85DD1FBC_BF25_2481_41D7_67D8F5859F75",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_1_HS_1_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B193E311_A5A9_EF4A_41E1_76627076E699",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_1_HS_2_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85C2CFD1_BF25_2483_41AC_DF4237B70F8B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AED12A5A_A090_29DB_41E3_DC0C38BF1CDB_1_HS_3_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BE61C212_AB04_8339_41E1_FA9F5075BB42",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_1_HS_0_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85D90FA7_BF25_248F_41DF_4CB608B57FA5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AE398C76_A090_E9EB_41DB_792D72C00094_1_HS_1_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85D8BFAD_BF25_2483_41D0_95F1CD6E677C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_1_HS_0_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B1389A25_A48F_A402_4174_8CB2D4C252DC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD58B4EB_A090_7AFA_41CD_0219212036F1_1_HS_1_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BE9F0216_AB04_8339_41DA_9D04AF7EDBBA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_1_HS_1_0.png",
   "width": 1080,
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B1959312_A5A9_EF4E_41E3_B0D365BEB180",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD729017_A097_D92A_41B9_3F9917723535_1_HS_2_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85CB7FE8_BF25_2481_41DD_753D8AA6F2FC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_1_HS_1_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85CB2FED_BF25_2483_41DB_EC91E6D88ECE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_1_HS_2_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85CB7FEF_BF25_249F_41E3_24A346F1C5FC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_1_HS_3_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85CAFFEF_BF25_249F_41B2_9C07448DEC08",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_1_HS_4_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85CA7FF1_BF25_2483_41C1_F035E9D286A9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AD441DCD_A090_2B39_4136_ABF8978199CE_1_HS_5_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85CDFFF2_BF25_2481_41D9_875CF74FE0A0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_1_HS_0_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B13E3A21_A48F_A402_41CD_DFE99D9CF191",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AED63BA8_A090_2F67_41D2_E05607D4514B_1_HS_2_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BE67A210_AB04_8339_41CE_AC91491AAC18",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_1_HS_0_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85C02FCC_BF25_2482_41E3_2BC6CA185FAA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_1_HS_2_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BE625211_AB04_833B_41BC_C0A6BC352F22",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_1_HS_3_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85C3CFCE_BF25_2481_41E3_31C7389CFFB4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AED5CDD2_A090_EB2B_41D5_C1FFE6FD1803_1_HS_4_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85C31FCF_BF25_249F_41D6_C028049590F1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_1_HS_0_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85DE2FC7_BF25_248F_41CA_3296602E1736",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AEA5C2A9_A090_5966_41E2_8E2068D524FF_1_HS_1_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85DE4FC8_BF25_2481_41E3_454AE15EBC6A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_1_HS_2_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85C52FD9_BF25_2483_41E3_746F20B23C9B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_AEE09B30_A090_6F67_41D1_0257ED6B5F05_1_HS_3_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_85C54FD9_BF25_2483_41E2_C088EC2B7B43",
 "frameDuration": 41
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 1"
 },
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 116,
 "popUpFontColor": "#F0623E",
 "playList": "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 15,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "backgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "class": "DropDown",
 "label": "RECEPTION",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 2"
 },
 "height": "100%",
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 5,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 96,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#3E5CB8"
 ],
 "borderSize": 0,
 "paddingLeft": 15,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "paddingRight": 15,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "class": "DropDown",
 "label": "ROOMS",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "backgroundColorRatios": [
  0
 ],
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 3"
 },
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 114,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 15,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "backgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "class": "DropDown",
 "label": "AMENITIES",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 4"
 },
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 130,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 15,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "backgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "class": "DropDown",
 "label": "SPORTS AREA",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 5"
 },
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 127.2,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "pressedBackgroundColor": [
  "#0033CC"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 15,
 "popUpGap": 2,
 "popUpBackgroundColor": "#3E5CB8",
 "backgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#0033CC",
 "class": "DropDown",
 "label": "PRODUKSI",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#3E5CB8",
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 6"
 },
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 138.6,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "pressedBackgroundColor": [
  "#0033CC"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 8,
 "popUpGap": 2,
 "popUpBackgroundColor": "#3E5CB8",
 "backgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#0033CC",
 "class": "DropDown",
 "label": "SPOT LOKASI",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#3E5CB8",
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "textDecoration": "none",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "popUpShadowBlurRadius": 6
},
{
 "pressedIconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings"
 },
 "iconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89.png",
 "id": "Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "iconWidth": 17,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 17,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#0033CC"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "click": "if(!this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4.get('visible')){ this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, false, 0, null, null, false) }",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "height": "100%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "85%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
 "layout": "absolute",
 "minHeight": 1,
 "width": 8,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "orange line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 460,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 50,
 "width": "50%",
 "paddingRight": 50,
 "scrollBarColor": "#0069A3",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarOpacity": 0.51
},
{
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "id": "Image_59BDDFF7_4087_30A0_41AC_7FA7FF557E2E",
 "left": "34.99%",
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "right": "47.03%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 512,
 "url": "skin/Image_59BDDFF7_4087_30A0_41AC_7FA7FF557E2E.png",
 "top": "30.94%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": "21.638%",
 "propagateClick": false,
 "class": "Image",
 "click": "this.setComponentVisibility(this.Container_59BD9FF7_4087_30A0_41CB_7666679BFA1D, false, 0, null, null, false); this.playGlobalAudio(this.audio_5A5876D2_4081_F0E1_41B0_156F2B66ECF9)",
 "maxHeight": 512,
 "horizontalAlign": "center",
 "data": {
  "name": "Image7656"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "id": "HTMLText_59BDCFF7_4087_30A0_41B3_BC51A9C772EF",
 "left": "27.16%",
 "minHeight": 1,
 "shadow": false,
 "scrollBarWidth": 5,
 "paddingBottom": 20,
 "borderRadius": 0,
 "right": "22.83%",
 "backgroundOpacity": 0,
 "minWidth": 1,
 "top": "5.47%",
 "paddingRight": 10,
 "borderSize": 0,
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "24.678%",
 "scrollBarColor": "#FFFFFF",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:7.44vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.58vh;font-family:'Montserrat';\"><B>Pilih Bahasa Audio</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.86vh;font-family:'Montserrat';\"><B>Chose audio language</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "id": "Image_59BDEFF7_4087_30A0_4198_ED9EE6DB99A0",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "right": "30.97%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 512,
 "top": "31.09%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "17.588%",
 "height": "20.923%",
 "propagateClick": false,
 "class": "Image",
 "click": "this.setComponentVisibility(this.Container_59BD9FF7_4087_30A0_41CB_7666679BFA1D, false, 0, null, null, false); this.playGlobalAudio(this.audio_4D4B291C_43A1_3914_41C9_7C921E21F2D1)",
 "maxHeight": 512,
 "url": "skin/Image_59BDEFF7_4087_30A0_4198_ED9EE6DB99A0.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Image8713"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "class": "WebFrame",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "paddingTop": 0,
 "insetBorder": false,
 "height": "100%"
},
{
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderSize": 0,
 "id": "MapViewer",
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "minHeight": 1,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 0,
 "borderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "10px",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Floor Plan"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "layout": "absolute",
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": "100%",
 "height": 140,
 "borderSize": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container photo"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "55%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
 "layout": "absolute",
 "minHeight": 1,
 "width": 8,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "orange line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 460,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 60,
 "width": "45%",
 "paddingRight": 60,
 "scrollBarColor": "#0069A3",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarOpacity": 0.51
},
{
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 2000,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "height": "100%",
 "propagateClick": false,
 "class": "Image",
 "maxHeight": 1000,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "photo"
 },
 "paddingTop": 0,
 "scaleMode": "fit_outside"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "layout": "horizontal",
 "minHeight": 0,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "height": "100%",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "layout": "vertical",
 "minHeight": 520,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 100,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.79
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "layout": "horizontal",
 "minHeight": 1,
 "width": 370,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "height": 40,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "borderRadius": 0,
 "right": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "maxWidth": 60,
 "top": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "mode": "push",
 "height": "36.14%",
 "propagateClick": false,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderSize": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "minHeight": 1,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 0,
 "borderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "10px",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "top": "0%",
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "top": "20%",
 "bottom": "20%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "14.22%",
 "mode": "push",
 "propagateClick": false,
 "class": "IconButton",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "borderRadius": 0,
 "right": 10,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "top": "20%",
 "bottom": "20%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "14.22%",
 "mode": "push",
 "propagateClick": false,
 "class": "IconButton",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "borderRadius": 0,
 "right": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "maxWidth": 60,
 "top": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "10%",
 "mode": "push",
 "height": "10%",
 "propagateClick": false,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "maxWidth": 2000,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "height": "100%",
 "propagateClick": false,
 "class": "Image",
 "maxHeight": 1000,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "Image"
 },
 "paddingTop": 0,
 "scaleMode": "fit_outside"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "layout": "horizontal",
 "minHeight": 0,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "height": "100%",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "layout": "vertical",
 "minHeight": 520,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 100,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.79
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "layout": "horizontal",
 "minHeight": 1,
 "width": 370,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "height": 40,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#F7931E",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.44vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.15vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.15vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.72vh;font-family:'Montserrat';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Montserrat';\"><B>DONEC FEUGIAT:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.29vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Montserrat';\"><B>LOREM IPSUM:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.58vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0
},
{
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Lorem Ipsum"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "iconWidth": 32,
 "width": 180,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "bold",
 "backgroundOpacity": 0.8,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "height": 50,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "fontSize": "1.96vh",
 "label": "LOREM IPSUM",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#F7931E"
 ]
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 0,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "45%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.87vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.15vh;font-family:'Montserrat';\"><B>Kampung Wisata </B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.15vh;font-family:'Montserrat';\"><B>Kesenian</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText18899"
 },
 "paddingTop": 0
},
{
 "height": "80%",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "layout": "horizontal",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "- content"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "maxWidth": 200,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "25%",
 "height": "100%",
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "class": "Image",
 "maxHeight": 200,
 "horizontalAlign": "left",
 "data": {
  "name": "agent photo"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#F7931E",
 "paddingLeft": 10,
 "width": "75%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.86vh;font-family:'Montserrat';\"><B>Bapak Agus</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.29vh;font-family:'Montserrat';\">PENGELOLA DESA</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText19460"
 },
 "paddingTop": 0
}],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.59,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "mouseWheelEnabled": true,
 "scripts": {
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "existsKey": function(key){  return key in window; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getKey": function(key){  return window[key]; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
