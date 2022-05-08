const dogHotels = [
  {
    "formatted_address": "350 W 40th St, New York, NY 10018, United States",
    "geometry": {
      "location": {
        "lat": 40.7566361,
        "lng": -73.9930715
      },
      "viewport": {
        "northeast": {
          "lat": 40.75812022989273,
          "lng": -73.99164717010727
        },
        "southwest": {
          "lat": 40.75542057010728,
          "lng": -73.99434682989272
        }
      }
    },
    "name": "DoubleTree by Hilton Hotel New York Times Square West",
    "rating": 3.6,
    "user_ratings_total": 4186
  },
  {
    "formatted_address": "125 W 26th St, New York, NY 10001, United States",
    "geometry": {
      "location": {
        "lat": 40.7454112,
        "lng": -73.992243
      },
      "viewport": {
        "northeast": {
          "lat": 40.74665962989272,
          "lng": -73.99096867010728
        },
        "southwest": {
          "lat": 40.74395997010728,
          "lng": -73.99366832989271
        }
      }
    },
    "name": "Holiday Inn Manhattan 6th Ave - Chelsea, an IHG Hotel",
    "rating": 3.6,
    "user_ratings_total": 1820
  },
  {
    "formatted_address": "8 Stone St, New York, NY 10004, United States",
    "geometry": {
      "location": {
        "lat": 40.703921,
        "lng": -74.0123541
      },
      "viewport": {
        "northeast": {
          "lat": 40.70533167989272,
          "lng": -74.01101527010728
        },
        "southwest": {
          "lat": 40.70263202010727,
          "lng": -74.01371492989273
        }
      }
    },
    "name": "DoubleTree by Hilton New York Downtown",
    "rating": 3.7,
    "user_ratings_total": 2320
  },
  {
    "formatted_address": "337 W 36th St, New York, NY 10018, United States",
    "geometry": {
      "location": {
        "lat": 40.7542244,
        "lng": -73.99400729999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.75552702989273,
          "lng": -73.99269422010728
        },
        "southwest": {
          "lat": 40.75282737010728,
          "lng": -73.99539387989272
        }
      }
    },
    "name": "Staypineapple, An Artful Hotel, Midtown New York",
    "rating": 4.5,
    "user_ratings_total": 307
  },
  {
    "formatted_address": "17 W 32nd St, New York, NY 10001, United States",
    "geometry": {
      "location": {
        "lat": 40.7477714,
        "lng": -73.9865653
      },
      "viewport": {
        "northeast": {
          "lat": 40.74908967989271,
          "lng": -73.98525367010727
        },
        "southwest": {
          "lat": 40.74639002010727,
          "lng": -73.98795332989272
        }
      }
    },
    "name": "The Hotel at Fifth Avenue",
    "rating": 3.9,
    "user_ratings_total": 1359
  },
  {
    "formatted_address": "304 E 42nd St, New York, NY 10017, United States",
    "geometry": {
      "location": {
        "lat": 40.7494822,
        "lng": -73.9719214
      },
      "viewport": {
        "northeast": {
          "lat": 40.75088962989272,
          "lng": -73.97053277010728
        },
        "southwest": {
          "lat": 40.74818997010728,
          "lng": -73.97323242989272
        }
      }
    },
    "name": "Westgate New York Grand Central",
    "rating": 4,
    "user_ratings_total": 424
  },
  {
    "formatted_address": "324 W 44th St, New York, NY 10036, United States",
    "geometry": {
      "location": {
        "lat": 40.7588983,
        "lng": -73.9901103
      },
      "viewport": {
        "northeast": {
          "lat": 40.76031722989272,
          "lng": -73.98865982010727
        },
        "southwest": {
          "lat": 40.75761757010728,
          "lng": -73.99135947989272
        }
      }
    },
    "name": "TownePlace Suites by Marriott New York Manhattan/Times Square",
    "rating": 4.2,
    "user_ratings_total": 373
  },
  {
    "formatted_address": "481 8th Ave, New York, NY 10001, United States",
    "geometry": {
      "location": {
        "lat": 40.7526686,
        "lng": -73.9935648
      },
      "viewport": {
        "northeast": {
          "lat": 40.75393962989273,
          "lng": -73.9920435701073
        },
        "southwest": {
          "lat": 40.75123997010729,
          "lng": -73.99474322989273
        }
      }
    },
    "name": "The New Yorker Hotel",
    "rating": 4,
    "user_ratings_total": 8108
  },
  {
    "formatted_address": "136 W 42nd St, New York, NY 10036, United States",
    "geometry": {
      "location": {
        "lat": 40.7553173,
        "lng": -73.98564449999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.75668792989272,
          "lng": -73.98428292010729
        },
        "southwest": {
          "lat": 40.75398827010728,
          "lng": -73.98698257989273
        }
      }
    },
    "name": "Hilton Garden Inn New York/Times Square Central",
    "rating": 4,
    "user_ratings_total": 1736
  },
  {
    "formatted_address": "232 W 29th St, New York, NY 10001, United States",
    "geometry": {
      "location": {
        "lat": 40.7484111,
        "lng": -73.9945863
      },
      "viewport": {
        "northeast": {
          "lat": 40.74977577989272,
          "lng": -73.99322612010727
        },
        "southwest": {
          "lat": 40.74707612010728,
          "lng": -73.99592577989272
        }
      }
    },
    "name": "Holiday Inn Express New York City - Chelsea, an IHG Hotel",
    "rating": 4,
    "user_ratings_total": 1606
  },
  {
    "formatted_address": "370 Canal St, New York, NY 10013, United States",
    "geometry": {
      "location": {
        "lat": 40.7208621,
        "lng": -74.00421779999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.72218582989272,
          "lng": -74.00288252010728
        },
        "southwest": {
          "lat": 40.71948617010728,
          "lng": -74.00558217989273
        }
      }
    },
    "name": "Sheraton Tribeca New York Hotel",
    "rating": 4.1,
    "user_ratings_total": 1852
  },
  {
    "formatted_address": "171 Ludlow St, New York, NY 10002, United States",
    "geometry": {
      "location": {
        "lat": 40.7217558,
        "lng": -73.9876654
      },
      "viewport": {
        "northeast": {
          "lat": 40.72309987989272,
          "lng": -73.98630367010728
        },
        "southwest": {
          "lat": 40.72040022010728,
          "lng": -73.98900332989272
        }
      }
    },
    "name": "Hotel Indigo Lower East Side New York, an IHG Hotel",
    "rating": 4.2,
    "user_ratings_total": 1392
  },
  {
    "formatted_address": "1717 Broadway, New York, NY 10019, United States",
    "geometry": {
      "location": {
        "lat": 40.764346,
        "lng": -73.9829058
      },
      "viewport": {
        "northeast": {
          "lat": 40.76560632989273,
          "lng": -73.98146122010728
        },
        "southwest": {
          "lat": 40.76290667010728,
          "lng": -73.98416087989273
        }
      }
    },
    "name": "Courtyard by Marriott New York Manhattan/Central Park",
    "rating": 4.3,
    "user_ratings_total": 1730
  },
  {
    "formatted_address": "60 W 36th St, New York, NY 10018, United States",
    "geometry": {
      "location": {
        "lat": 40.750497,
        "lng": -73.9860343
      },
      "viewport": {
        "northeast": {
          "lat": 40.75194452989273,
          "lng": -73.98460632010728
        },
        "southwest": {
          "lat": 40.74924487010728,
          "lng": -73.98730597989272
        }
      }
    },
    "name": "Holiday Inn Express Manhattan Times Square South",
    "rating": 4.1,
    "user_ratings_total": 1048
  },
  {
    "formatted_address": "312 W 37th St, New York, NY 10018, United States",
    "geometry": {
      "location": {
        "lat": 40.7543354,
        "lng": -73.9931175
      },
      "viewport": {
        "northeast": {
          "lat": 40.75576397989272,
          "lng": -73.99168177010728
        },
        "southwest": {
          "lat": 40.75306432010728,
          "lng": -73.99438142989273
        }
      }
    },
    "name": "Homewood Suites by Hilton New York/Midtown Manhattan Times Square-South, NY",
    "rating": 4.3,
    "user_ratings_total": 2120
  },
  {
    "formatted_address": "130 W 46th St, New York, NY 10036, United States",
    "geometry": {
      "location": {
        "lat": 40.7579091,
        "lng": -73.9837172
      },
      "viewport": {
        "northeast": {
          "lat": 40.75929857989271,
          "lng": -73.98234392010727
        },
        "southwest": {
          "lat": 40.75659892010727,
          "lng": -73.98504357989272
        }
      }
    },
    "name": "Kimpton Muse Hotel",
    "rating": 4.4,
    "user_ratings_total": 846
  },
  {
    "formatted_address": "337 W 39th St, New York, NY 10018, United States",
    "geometry": {
      "location": {
        "lat": 40.7562119,
        "lng": -73.9928698
      },
      "viewport": {
        "northeast": {
          "lat": 40.75748992989273,
          "lng": -73.99159797010728
        },
        "southwest": {
          "lat": 40.75479027010729,
          "lng": -73.99429762989271
        }
      }
    },
    "name": "Hampton Inn Manhattan/Times Square South",
    "rating": 3.8,
    "user_ratings_total": 1339
  },
  {
    "formatted_address": "326 W 37th St, New York, NY 10018, United States",
    "geometry": {
      "location": {
        "lat": 40.754526,
        "lng": -73.99356759999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.75594097989272,
          "lng": -73.99218027010728
        },
        "southwest": {
          "lat": 40.75324132010728,
          "lng": -73.99487992989272
        }
      }
    },
    "name": "Hilton Garden Inn New York Times Square South",
    "rating": 4.2,
    "user_ratings_total": 1037
  },
  {
    "formatted_address": "300 W 44th St, New York, NY 10036, United States",
    "geometry": {
      "location": {
        "lat": 40.7586625,
        "lng": -73.9893749
      },
      "viewport": {
        "northeast": {
          "lat": 40.76005972989273,
          "lng": -73.98803277010728
        },
        "southwest": {
          "lat": 40.75736007010728,
          "lng": -73.99073242989273
        }
      }
    },
    "name": "InterContinental New York Times Square, an IHG Hotel",
    "rating": 4.3,
    "user_ratings_total": 3200
  },
  {
    "formatted_address": "220 W 41st St, New York, NY 10036, United States",
    "geometry": {
      "location": {
        "lat": 40.7557296,
        "lng": -73.9885346
      },
      "viewport": {
        "northeast": {
          "lat": 40.75705732989272,
          "lng": -73.98721667010729
        },
        "southwest": {
          "lat": 40.75435767010728,
          "lng": -73.98991632989274
        }
      }
    },
    "name": "Hampton Inn Manhattan/Times Square Central",
    "rating": 4.3,
    "user_ratings_total": 2349
  },
  {
    "formatted_address": "45 W 44th St, New York, NY 10036, United States",
    "geometry": {
      "location": {
        "lat": 40.7557007,
        "lng": -73.9818422
      },
      "viewport": {
        "northeast": {
          "lat": 40.75728407989272,
          "lng": -73.98036182010728
        },
        "southwest": {
          "lat": 40.75458442010728,
          "lng": -73.98306147989273
        }
      }
    },
    "name": "Sofitel New York",
    "rating": 4.4,
    "user_ratings_total": 1523
  },
  {
    "formatted_address": "1335 6th Ave, New York, NY 10019, United States",
    "geometry": {
      "location": {
        "lat": 40.7622481,
        "lng": -73.97919
      },
      "viewport": {
        "northeast": {
          "lat": 40.76356237989272,
          "lng": -73.97805559999999
        },
        "southwest": {
          "lat": 40.76086272010728,
          "lng": -73.981144
        }
      }
    },
    "name": "New York Hilton Midtown",
    "rating": 4.2,
    "user_ratings_total": 9064
  },
  {
    "formatted_address": "321 W 35th St, New York, NY 10001, United States",
    "geometry": {
      "location": {
        "lat": 40.75339719999999,
        "lng": -73.99397979999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.75474142989273,
          "lng": -73.99263832010728
        },
        "southwest": {
          "lat": 40.75204177010728,
          "lng": -73.99533797989271
        }
      }
    },
    "name": "EVEN Hotel New York - Times Square South, an IHG Hotel",
    "rating": 4.5,
    "user_ratings_total": 1045
  },
  {
    "formatted_address": "307 W 37th St, New York, NY 10018, United States",
    "geometry": {
      "location": {
        "lat": 40.7544895,
        "lng": -73.99257639999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.75577347989272,
          "lng": -73.99129422010728
        },
        "southwest": {
          "lat": 40.75307382010728,
          "lng": -73.99399387989273
        }
      }
    },
    "name": "Courtyard by Marriott New York Manhattan/Times Square West",
    "rating": 4.4,
    "user_ratings_total": 1326
  },
  {
    "formatted_address": "2178 Broadway, New York, NY 10024, United States",
    "geometry": {
      "location": {
        "lat": 40.782169,
        "lng": -73.98033389999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.78357567989272,
          "lng": -73.97900122010728
        },
        "southwest": {
          "lat": 40.78087602010727,
          "lng": -73.98170087989273
        }
      }
    },
    "name": "Arthouse Hotel New York City",
    "rating": 4.2,
    "user_ratings_total": 1477
  },
  {
    "formatted_address": "22 E 38th St, New York, NY 10016, United States",
    "geometry": {
      "location": {
        "lat": 40.750087,
        "lng": -73.980655
      },
      "viewport": {
        "northeast": {
          "lat": 40.75146957989272,
          "lng": -73.97962697010728
        },
        "southwest": {
          "lat": 40.74876992010728,
          "lng": -73.98232662989273
        }
      }
    },
    "name": "Hotel NH Collection New York Madison Avenue",
    "rating": 4.2,
    "user_ratings_total": 184
  },
  {
    "formatted_address": "23East, 39th Street, New York, NY 10016, United States",
    "geometry": {
      "location": {
        "lat": 40.7507977,
        "lng": -73.9801629
      },
      "viewport": {
        "northeast": {
          "lat": 40.75216727989272,
          "lng": -73.97878807010729
        },
        "southwest": {
          "lat": 40.74946762010727,
          "lng": -73.98148772989272
        }
      }
    },
    "name": "Pestana Park Avenue",
    "rating": 4.4,
    "user_ratings_total": 89
  },
  {
    "formatted_address": "120 W 44th St, New York, NY 10036, United States",
    "geometry": {
      "location": {
        "lat": 40.7565095,
        "lng": -73.9842697
      },
      "viewport": {
        "northeast": {
          "lat": 40.75786612989271,
          "lng": -73.98286102010728
        },
        "southwest": {
          "lat": 40.75516647010727,
          "lng": -73.98556067989273
        }
      }
    },
    "name": "Hotel Mela Times Square",
    "rating": 3.8,
    "user_ratings_total": 1588
  },
  {
    "formatted_address": "851 8th Ave, New York, NY 10019, United States",
    "geometry": {
      "location": {
        "lat": 40.7632795,
        "lng": -73.98566439999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.76458377989272,
          "lng": -73.98420077010726
        },
        "southwest": {
          "lat": 40.76188412010728,
          "lng": -73.98690042989271
        }
      }
    },
    "name": "Hampton Inn Manhattan-Times Square North",
    "rating": 4.1,
    "user_ratings_total": 2281
  },
  {
    "formatted_address": "8 Albany St, New York, NY 10006, United States",
    "geometry": {
      "location": {
        "lat": 40.709274,
        "lng": -74.0136921
      },
      "viewport": {
        "northeast": {
          "lat": 40.71065107989272,
          "lng": -74.01224082010728
        },
        "southwest": {
          "lat": 40.70795142010728,
          "lng": -74.01494047989272
        }
      }
    },
    "name": "W New York \u2013 Downtown",
    "rating": 4.3,
    "user_ratings_total": 997
  },
  {
    "formatted_address": "310 W 40th St, New York, NY 10018, United States",
    "geometry": {
      "location": {
        "lat": 40.7562012,
        "lng": -73.991711
      },
      "viewport": {
        "northeast": {
          "lat": 40.75757952989272,
          "lng": -73.99032392010727
        },
        "southwest": {
          "lat": 40.75487987010727,
          "lng": -73.99302357989272
        }
      }
    },
    "name": "Aliz Hotel Times Square",
    "rating": 3.8,
    "user_ratings_total": 954
  },
  {
    "formatted_address": "270 W 43rd St, New York, NY 10036, United States",
    "geometry": {
      "location": {
        "lat": 40.7577137,
        "lng": -73.9891186
      },
      "viewport": {
        "northeast": {
          "lat": 40.75910642989272,
          "lng": -73.98771132010728
        },
        "southwest": {
          "lat": 40.75640677010728,
          "lng": -73.99041097989273
        }
      }
    },
    "name": "The Westin New York at Times Square",
    "rating": 4.3,
    "user_ratings_total": 4034
  },
  {
    "formatted_address": "333 W 38th St, New York, NY 10018, United States",
    "geometry": {
      "location": {
        "lat": 40.7554541,
        "lng": -73.9931043
      },
      "viewport": {
        "northeast": {
          "lat": 40.75680607989272,
          "lng": -73.99175287010728
        },
        "southwest": {
          "lat": 40.75410642010728,
          "lng": -73.99445252989273
        }
      }
    },
    "name": "La Quinta Inn & Suites by Wyndham Times Square South",
    "rating": 4.3,
    "user_ratings_total": 222
  },
  {
    "formatted_address": "811 7th Avenue, W 53rd St, New York, NY 10019, United States",
    "geometry": {
      "location": {
        "lat": 40.7623861,
        "lng": -73.98201879999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.76390127989273,
          "lng": -73.98061347010727
        },
        "southwest": {
          "lat": 40.76120162010728,
          "lng": -73.98331312989272
        }
      }
    },
    "name": "Sheraton New York Times Square Hotel",
    "rating": 4.1,
    "user_ratings_total": 8177
  },
  {
    "formatted_address": "701 7th Ave, New York, NY 10036, United States",
    "geometry": {
      "location": {
        "lat": 40.759149,
        "lng": -73.98416399999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.76044852989272,
          "lng": -73.98288202010727
        },
        "southwest": {
          "lat": 40.75774887010727,
          "lng": -73.9855816798927
        }
      }
    },
    "name": "The Times Square EDITION",
    "rating": 4.6,
    "user_ratings_total": 805
  },
  {
    "formatted_address": "114 W 40th St, New York, NY 10018, United States",
    "geometry": {
      "location": {
        "lat": 40.753502,
        "lng": -73.9862678
      },
      "viewport": {
        "northeast": {
          "lat": 40.75499207989272,
          "lng": -73.98483922010729
        },
        "southwest": {
          "lat": 40.75229242010727,
          "lng": -73.98753887989272
        }
      }
    },
    "name": "Courtyard by Marriott New York Manhattan/Times Square",
    "rating": 4.1,
    "user_ratings_total": 1075
  },
  {
    "formatted_address": "485 7th Ave, New York, NY 10018, United States",
    "geometry": {
      "location": {
        "lat": 40.7523124,
        "lng": -73.9891195
      },
      "viewport": {
        "northeast": {
          "lat": 40.75351427989272,
          "lng": -73.98781867010727
        },
        "southwest": {
          "lat": 40.75081462010728,
          "lng": -73.99051832989272
        }
      }
    },
    "name": "Moxy NYC Times Square",
    "rating": 4.1,
    "user_ratings_total": 4009
  },
  {
    "formatted_address": "45 E 33rd St, New York, NY 10016, United States",
    "geometry": {
      "location": {
        "lat": 40.746849,
        "lng": -73.98223109999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.74807187989273,
          "lng": -73.98096252010727
        },
        "southwest": {
          "lat": 40.74537222010728,
          "lng": -73.98366217989272
        }
      }
    },
    "name": "Hilton Garden Inn New York/Midtown Park Ave",
    "rating": 4.2,
    "user_ratings_total": 1281
  },
  {
    "formatted_address": "25 W 38th St, New York, NY 10018, United States",
    "geometry": {
      "location": {
        "lat": 40.7516839,
        "lng": -73.9842081
      },
      "viewport": {
        "northeast": {
          "lat": 40.75298317989271,
          "lng": -73.98283767010727
        },
        "southwest": {
          "lat": 40.75028352010727,
          "lng": -73.98553732989272
        }
      }
    },
    "name": "Hotel Hendricks",
    "rating": 3.8,
    "user_ratings_total": 302
  },
  {
    "formatted_address": "145 E 39th St, New York, NY 10016, United States",
    "geometry": {
      "location": {
        "lat": 40.7493306,
        "lng": -73.9766417
      },
      "viewport": {
        "northeast": {
          "lat": 40.75064372989272,
          "lng": -73.97531582010727
        },
        "southwest": {
          "lat": 40.74794407010728,
          "lng": -73.97801547989272
        }
      }
    },
    "name": "Pod 39",
    "rating": 4.1,
    "user_ratings_total": 2959
  },
  {
    "formatted_address": "44 W 29th St, New York, NY 10001, United States",
    "geometry": {
      "location": {
        "lat": 40.7461759,
        "lng": -73.9895245
      },
      "viewport": {
        "northeast": {
          "lat": 40.74761897989271,
          "lng": -73.98808857010728
        },
        "southwest": {
          "lat": 40.74491932010727,
          "lng": -73.99078822989271
        }
      }
    },
    "name": "Made Hotel"
  },
  {
    "formatted_address": "29-21 41st Ave, Queens, NY 11101, United States",
    "geometry": {
      "location": {
        "lat": 40.750225,
        "lng": -73.9369236
      },
      "viewport": {
        "northeast": {
          "lat": 40.75146317989272,
          "lng": -73.93544922010729
        },
        "southwest": {
          "lat": 40.74876352010727,
          "lng": -73.93814887989272
        }
      }
    },
    "name": "Hilton Garden Inn Long Island City New York"
  },
  {
    "formatted_address": "140 Washington St, New York, NY 10006, United States",
    "geometry": {
      "location": {
        "lat": 40.7098277,
        "lng": -74.0139576
      },
      "viewport": {
        "northeast": {
          "lat": 40.71114767989272,
          "lng": -74.01252222010729
        },
        "southwest": {
          "lat": 40.70844802010728,
          "lng": -74.01522187989272
        }
      }
    },
    "name": "Club Quarters Hotel World Trade Center, New York"
  },
  {
    "formatted_address": "180 10th Ave, New York, NY 10011, United States",
    "geometry": {
      "location": {
        "lat": 40.7459912,
        "lng": -74.0049983
      },
      "viewport": {
        "northeast": {
          "lat": 40.74730157989271,
          "lng": -74.00385402010727
        },
        "southwest": {
          "lat": 40.74460192010727,
          "lng": -74.00655367989272
        }
      }
    },
    "name": "The High Line Hotel"
  },
  {
    "formatted_address": "221 E 44th St, New York, NY 10017, United States",
    "geometry": {
      "location": {
        "lat": 40.7518354,
        "lng": -73.9723757
      },
      "viewport": {
        "northeast": {
          "lat": 40.75310117989272,
          "lng": -73.97113962010728
        },
        "southwest": {
          "lat": 40.75040152010727,
          "lng": -73.97383927989273
        }
      }
    },
    "name": "EVEN Hotel New York - Midtown East, an IHG Hotel"
  },
  {
    "formatted_address": "38 W 36th St, New York, NY 10018, United States",
    "geometry": {
      "location": {
        "lat": 40.7502976,
        "lng": -73.9853957
      },
      "viewport": {
        "northeast": {
          "lat": 40.75171802989271,
          "lng": -73.98399297010728
        },
        "southwest": {
          "lat": 40.74901837010727,
          "lng": -73.98669262989273
        }
      }
    },
    "name": "Executive Hotel Le Soleil New York"
  },
  {
    "formatted_address": "108 W 24th St, New York, NY 10011, United States",
    "geometry": {
      "location": {
        "lat": 40.7436686,
        "lng": -73.993151
      },
      "viewport": {
        "northeast": {
          "lat": 40.74510377989272,
          "lng": -73.99167292010726
        },
        "southwest": {
          "lat": 40.74240412010728,
          "lng": -73.99437257989271
        }
      }
    },
    "name": "Hampton Inn Manhattan-Chelsea"
  },
  {
    "formatted_address": "815 6th Ave, New York, NY 10001, United States",
    "geometry": {
      "location": {
        "lat": 40.7462879,
        "lng": -73.99086960000001
      },
      "viewport": {
        "northeast": {
          "lat": 40.74758952989272,
          "lng": -73.98949492010728
        },
        "southwest": {
          "lat": 40.74488987010728,
          "lng": -73.99219457989273
        }
      }
    },
    "name": "Hyatt House New York/Chelsea"
  },
  {
    "formatted_address": "790 8th Ave, New York, NY 10019, United States",
    "geometry": {
      "location": {
        "lat": 40.7612054,
        "lng": -73.9865068
      },
      "viewport": {
        "northeast": {
          "lat": 40.76266842989272,
          "lng": -73.98529197010728
        },
        "southwest": {
          "lat": 40.75996877010728,
          "lng": -73.98799162989272
        }
      }
    },
    "name": "Hilton Garden Inn Times Square"
  },
  {
    "formatted_address": "653 11th Ave, New York, NY 10036, United States",
    "geometry": {
      "location": {
        "lat": 40.764568,
        "lng": -73.995995
      },
      "viewport": {
        "northeast": {
          "lat": 40.76583472989272,
          "lng": -73.99450767010727
        },
        "southwest": {
          "lat": 40.76313507010728,
          "lng": -73.9972073298927
        }
      }
    },
    "name": "Ink 48 Hotel"
  },
  {
    "formatted_address": "345 W 35th St, New York, NY 10001, United States",
    "geometry": {
      "location": {
        "lat": 40.7537791,
        "lng": -73.9946197
      },
      "viewport": {
        "northeast": {
          "lat": 40.75502567989273,
          "lng": -73.99330967010728
        },
        "southwest": {
          "lat": 40.75232602010728,
          "lng": -73.99600932989273
        }
      }
    },
    "name": "TRYP by Wyndham New York City Times Square South"
  },
  {
    "formatted_address": "305 W 48th St, New York, NY 10036, United States",
    "geometry": {
      "location": {
        "lat": 40.76143,
        "lng": -73.98745100000001
      },
      "viewport": {
        "northeast": {
          "lat": 40.76270102989272,
          "lng": -73.98615902010728
        },
        "southwest": {
          "lat": 40.76000137010728,
          "lng": -73.98885867989273
        }
      }
    },
    "name": "CIVILIAN Hotel"
  },
  {
    "formatted_address": "157 W 47th St, New York, NY 10036, United States",
    "geometry": {
      "location": {
        "lat": 40.7590211,
        "lng": -73.9837215
      },
      "viewport": {
        "northeast": {
          "lat": 40.76031517989271,
          "lng": -73.98246037010728
        },
        "southwest": {
          "lat": 40.75761552010727,
          "lng": -73.98516002989273
        }
      }
    },
    "name": "OYO Times Square"
  },
  {
    "formatted_address": "206 E 52nd St, New York, NY 10022, United States",
    "geometry": {
      "location": {
        "lat": 40.756653,
        "lng": -73.9694264
      },
      "viewport": {
        "northeast": {
          "lat": 40.75810947989272,
          "lng": -73.96801862010729
        },
        "southwest": {
          "lat": 40.75540982010727,
          "lng": -73.97071827989272
        }
      }
    },
    "name": "Hilton Garden Inn New York/Manhattan-Midtown East"
  },
  {
    "formatted_address": "130 E 57th St, New York, NY 10022, United States",
    "geometry": {
      "location": {
        "lat": 40.7607992,
        "lng": -73.969493
      },
      "viewport": {
        "northeast": {
          "lat": 40.76228367989273,
          "lng": -73.96813797010728
        },
        "southwest": {
          "lat": 40.75958402010728,
          "lng": -73.97083762989273
        }
      }
    },
    "name": "Hotel 57 New York City"
  },
  {
    "formatted_address": "310 W Broadway, New York, NY 10013, United States",
    "geometry": {
      "location": {
        "lat": 40.722146,
        "lng": -74.004627
      },
      "viewport": {
        "northeast": {
          "lat": 40.72338077989272,
          "lng": -74.00305147010728
        },
        "southwest": {
          "lat": 40.72068112010728,
          "lng": -74.00575112989273
        }
      }
    },
    "name": "Soho Grand Hotel"
  },
  {
    "formatted_address": "85 West Street At, Albany St, New York, NY 10006, United States",
    "geometry": {
      "location": {
        "lat": 40.7095206,
        "lng": -74.01448620000001
      },
      "viewport": {
        "northeast": {
          "lat": 40.71079742989271,
          "lng": -74.01303647010728
        },
        "southwest": {
          "lat": 40.70809777010727,
          "lng": -74.01573612989272
        }
      }
    },
    "name": "New York Marriott Downtown"
  },
  {
    "formatted_address": "128 E 45th St, New York, NY 10017, United States",
    "geometry": {
      "location": {
        "lat": 40.753108,
        "lng": -73.974614
      },
      "viewport": {
        "northeast": {
          "lat": 40.75454492989272,
          "lng": -73.97315667010727
        },
        "southwest": {
          "lat": 40.75184527010728,
          "lng": -73.97585632989272
        }
      }
    },
    "name": "Club Quarters Hotel Grand Central, New York"
  },
  {
    "formatted_address": "63 W 38th St, New York, NY 10018, United States",
    "geometry": {
      "location": {
        "lat": 40.7522226,
        "lng": -73.9853755
      },
      "viewport": {
        "northeast": {
          "lat": 40.75351252989272,
          "lng": -73.98405322010728
        },
        "southwest": {
          "lat": 40.75081287010727,
          "lng": -73.98675287989273
        }
      }
    },
    "name": "Refinery Hotel"
  },
  {
    "formatted_address": "461 West 34th Street At The Corner Of 34th And 10th\u2013 Across From, Hudson Yards, New York, NY 10001, United States",
    "geometry": {
      "location": {
        "lat": 40.754585,
        "lng": -73.99870299999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.75586942989272,
          "lng": -73.99741402010727
        },
        "southwest": {
          "lat": 40.75316977010728,
          "lng": -74.0001136798927
        }
      }
    },
    "name": "Courtyard by Marriott New York Manhattan/Midtown West"
  }
];
