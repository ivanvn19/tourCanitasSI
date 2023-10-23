var APP_DATA = {
  "scenes": [
    {
      "id": "0-sector-cocheras",
      "name": "Sector cocheras",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.8172361634288006,
        "pitch": -0.2081776740400194,
        "fov": 1.2498900900443681
      },
      "linkHotspots": [
        {
          "yaw": -2.7904327957137838,
          "pitch": 0.025085134896695394,
          "rotation": 0,
          "target": "1-ingreso-a-deptos-i"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ingreso-a-deptos-i",
      "name": "Ingreso a deptos I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.22484559747362276,
        "pitch": 0.041762437376181794,
        "fov": 1.2498900900443681
      },
      "linkHotspots": [
        {
          "yaw": 0.23174629744296027,
          "pitch": 0.0693013398862874,
          "rotation": 0,
          "target": "2-ingreso-a-deptos-ii"
        },
        {
          "yaw": 2.012443413016797,
          "pitch": 0.05886010265148833,
          "rotation": 1.5707963267948966,
          "target": "0-sector-cocheras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ingreso-a-deptos-ii",
      "name": "Ingreso a deptos II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.14171261541141078,
        "pitch": 0.035656568399090816,
        "fov": 1.2498900900443681
      },
      "linkHotspots": [
        {
          "yaw": -2.931606999030448,
          "pitch": 0.06243973594530772,
          "rotation": 0,
          "target": "1-ingreso-a-deptos-i"
        },
        {
          "yaw": 1.7792102958212244,
          "pitch": 0.10293911937604605,
          "rotation": 0,
          "target": "3-fachada-uf-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-fachada-uf-",
      "name": "Fachada UF ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.14156945026117285,
        "pitch": 0.19389703067513686,
        "fov": 1.2498900900443681
      },
      "linkHotspots": [
        {
          "yaw": 0.20091501266578504,
          "pitch": 0.1729403031564516,
          "rotation": 0,
          "target": "4-living--comedor"
        },
        {
          "yaw": -3.100238642994011,
          "pitch": 0.5518516719417175,
          "rotation": 0,
          "target": "2-ingreso-a-deptos-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-living--comedor",
      "name": "Living / Comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4878312572876915,
          "pitch": 0.20618781100858996,
          "rotation": 0,
          "target": "3-fachada-uf-"
        },
        {
          "yaw": 0.8549784474539877,
          "pitch": 0.16268219844470977,
          "rotation": 0,
          "target": "5-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-pasillo",
      "name": "Pasillo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8379067303460364,
          "pitch": 0.10697297408123418,
          "rotation": 0,
          "target": "6-ingreso-a-habitacin--y-bao"
        },
        {
          "yaw": 0.08217355410849869,
          "pitch": 0.17473170574841568,
          "rotation": 4.71238898038469,
          "target": "9-cocina-"
        },
        {
          "yaw": -2.206055424457933,
          "pitch": 0.07302877463355983,
          "rotation": 0,
          "target": "4-living--comedor"
        },
        {
          "yaw": -2.844373312176531,
          "pitch": 0.10080001854215048,
          "rotation": 0,
          "target": "3-fachada-uf-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-ingreso-a-habitacin--y-bao",
      "name": "Ingreso a habitación  y baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.368792989690194,
          "pitch": 0.22139232787856677,
          "rotation": 0,
          "target": "5-pasillo"
        },
        {
          "yaw": 0.7980119364540936,
          "pitch": 0.09630822935264405,
          "rotation": 0,
          "target": "7-habitacin"
        },
        {
          "yaw": -0.4753877253026122,
          "pitch": 0.09545751277481607,
          "rotation": 0,
          "target": "8-bao-completo-"
        },
        {
          "yaw": 2.4605187005420257,
          "pitch": 0.18045817592731872,
          "rotation": 4.71238898038469,
          "target": "9-cocina-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-habitacin",
      "name": "Habitación",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.08743622942981766,
        "pitch": 0.15810599330905362,
        "fov": 1.2498900900443681
      },
      "linkHotspots": [
        {
          "yaw": 2.6434500800075797,
          "pitch": 0.2126461162875195,
          "rotation": 0,
          "target": "6-ingreso-a-habitacin--y-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bao-completo-",
      "name": "Baño completo ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.06439939783010651,
        "pitch": 1.0695904746531912,
        "fov": 1.2498900900443681
      },
      "linkHotspots": [
        {
          "yaw": 1.25077781515016,
          "pitch": 0.1981320637455113,
          "rotation": 0,
          "target": "6-ingreso-a-habitacin--y-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-cocina-",
      "name": "Cocina ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.018636933346758866,
        "pitch": 0.9297087418035339,
        "fov": 1.2498900900443681
      },
      "linkHotspots": [
        {
          "yaw": -1.5695867413740814,
          "pitch": 0.15593549937470286,
          "rotation": 0,
          "target": "5-pasillo"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Las cañitas de San Ignacio 2 ambientes ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
