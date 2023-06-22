var APP_DATA = {
  "scenes": [
    {
      "id": "0-entarance",
      "name": "Entarance",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.0669286464468284,
        "pitch": 0.31753004807696783,
        "fov": 1.2691192001910299
      },
      "linkHotspots": [
        {
          "yaw": -3.094486653598219,
          "pitch": 0.6713425542133038,
          "rotation": 0,
          "target": "1-1st_living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-1st_living",
      "name": "1st_living",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.0461067204140946,
        "pitch": 0.1426084169143742,
        "fov": 1.2691192001910299
      },
      "linkHotspots": [
        {
          "yaw": 1.76635276515254,
          "pitch": 0.12091212496791393,
          "rotation": 0,
          "target": "3-1st_dining"
        },
        {
          "yaw": 0.3133426487829709,
          "pitch": 0.07310279516982554,
          "rotation": 5.497787143782138,
          "target": "4-stairs_to_2nd"
        },
        {
          "yaw": -0.018043526358489714,
          "pitch": 0.3193234788308441,
          "rotation": 2.356194490192345,
          "target": "9-stairs_to_basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-1st_kitchin",
      "name": "1st_kitchin",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0633961714949107,
          "pitch": 0.065452643905898,
          "rotation": 0,
          "target": "3-1st_dining"
        },
        {
          "yaw": -1.8654884519930413,
          "pitch": 0.185947486298085,
          "rotation": 5.497787143782138,
          "target": "1-1st_living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-1st_dining",
      "name": "1st_Dining",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0362804516364488,
          "pitch": 0.1429685610207745,
          "rotation": 0,
          "target": "1-1st_living"
        },
        {
          "yaw": -1.3658724741817245,
          "pitch": 0.2184515820184565,
          "rotation": 0,
          "target": "2-1st_kitchin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-stairs_to_2nd",
      "name": "Stairs_To_2nd",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.416240316082476,
        "pitch": 0.05930382923239108,
        "fov": 1.2691192001910299
      },
      "linkHotspots": [
        {
          "yaw": 1.3506361990221656,
          "pitch": 0.9913949097597516,
          "rotation": 13.351768777756625,
          "target": "1-1st_living"
        },
        {
          "yaw": 1.9391470279888159,
          "pitch": 0.005586843891894233,
          "rotation": 0.7853981633974483,
          "target": "6-2nd_hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-2nd_beadroom",
      "name": "2nd_Beadroom",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.278496377388567,
          "pitch": 0.20794821139596742,
          "rotation": 14.137166941154074,
          "target": "6-2nd_hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-2nd_hallway",
      "name": "2nd_hallway",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.324899753063562,
        "pitch": 0.21438383303356723,
        "fov": 1.2691192001910299
      },
      "linkHotspots": [
        {
          "yaw": -1.929662946248584,
          "pitch": 0.6094838310502766,
          "rotation": 10.210176124166829,
          "target": "4-stairs_to_2nd"
        },
        {
          "yaw": 2.4172516046400965,
          "pitch": 0.3946478103847255,
          "rotation": 1.5707963267948966,
          "target": "5-2nd_beadroom"
        },
        {
          "yaw": 0.5098716485825285,
          "pitch": 0.3624453608389224,
          "rotation": 7.0685834705770345,
          "target": "8-2nd_room"
        },
        {
          "yaw": 0.25587556422083857,
          "pitch": 0.36910883676944195,
          "rotation": 5.497787143782138,
          "target": "7-2nd_guestroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-2nd_guestroom",
      "name": "2nd_Guestroom",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7900752933958195,
          "pitch": 0.5156853349910193,
          "rotation": 0.7853981633974483,
          "target": "6-2nd_hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-2nd_room",
      "name": "2nd_Room",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.05373503515281186,
        "pitch": 0.06512817974507534,
        "fov": 1.2691192001910299
      },
      "linkHotspots": [
        {
          "yaw": -2.0329708873065684,
          "pitch": 0.28031510207046395,
          "rotation": 10.995574287564278,
          "target": "6-2nd_hallway"
        },
        {
          "yaw": -1.8094709711606338,
          "pitch": 0.33794797402377874,
          "rotation": 0.7853981633974483,
          "target": "7-2nd_guestroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-stairs_to_basement",
      "name": "Stairs_To_Basement",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.134563131539732,
        "pitch": 0.17971472097154262,
        "fov": 1.2691192001910299
      },
      "linkHotspots": [
        {
          "yaw": -2.784344452273494,
          "pitch": 0.2933335539039579,
          "rotation": 0.7853981633974483,
          "target": "10-basement_room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-basement_room",
      "name": "Basement_Room",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8579257657209176,
          "pitch": 0.44432071684834185,
          "rotation": 0.7853981633974483,
          "target": "11-basement_hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-basement_hallway",
      "name": "Basement_Hallway",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5336127784169618,
          "pitch": 0.33469198576160863,
          "rotation": 5.497787143782138,
          "target": "12-basement_storage"
        },
        {
          "yaw": 0.23826358117096724,
          "pitch": 0.1852780806737595,
          "rotation": 19.63495408493622,
          "target": "13-basement_living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-basement_storage",
      "name": "Basement_Storage",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.062642444284707,
          "pitch": 0.40712101623486774,
          "rotation": 25.132741228718363,
          "target": "11-basement_hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-basement_living",
      "name": "Basement_living",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.050706336255365,
          "pitch": 0.43814302169504415,
          "rotation": 5.497787143782138,
          "target": "11-basement_hallway"
        },
        {
          "yaw": -0.022201894104028952,
          "pitch": 0.40667584658185874,
          "rotation": 11.780972450961727,
          "target": "14-balcony_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-balcony_1",
      "name": "Balcony_1",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.01544654527981848,
          "pitch": -0.6316699354970812,
          "rotation": 0,
          "target": "15-balcony_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-balcony_2",
      "name": "Balcony_2",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.10361418950666135,
          "pitch": 1.062544967656315,
          "rotation": 6.283185307179586,
          "target": "14-balcony_1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
