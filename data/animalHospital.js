const animalHospitals = [
  {
    "formatted_address": "354 E 66th St, New York, NY 10065, United States",
    "geometry": {
      "location": {
        "lat": 40.7640685,
        "lng": -73.9592025
      },
      "viewport": {
        "northeast": {
          "lat": 40.76542437989272,
          "lng": -73.95780957010727
        },
        "southwest": {
          "lat": 40.76272472010728,
          "lng": -73.96050922989271
        }
      }
    },
    "name": "University Animal Hospital",
    "rating": 4.5,
    "user_ratings_total": 117
  },
  {
    "formatted_address": "238 W 61st St, New York, NY 10023, United States",
    "geometry": {
      "location": {
        "lat": 40.7722924,
        "lng": -73.9886417
      },
      "viewport": {
        "northeast": {
          "lat": 40.77335577989272,
          "lng": -73.98729522010728
        },
        "southwest": {
          "lat": 40.77065612010728,
          "lng": -73.98999487989272
        }
      }
    },
    "name": "Hudson Animal Hospital",
    "rating": 4.6,
    "user_ratings_total": 89
  },
  {
    "formatted_address": "75 8th Ave, New York, NY 10014, United States",
    "geometry": {
      "location": {
        "lat": 40.7396051,
        "lng": -74.0029644
      },
      "viewport": {
        "northeast": {
          "lat": 40.74090732989272,
          "lng": -74.00147952010728
        },
        "southwest": {
          "lat": 40.73820767010727,
          "lng": -74.00417917989272
        }
      }
    },
    "name": "West Village Veterinary Hospital",
    "rating": 4.8,
    "user_ratings_total": 232
  },
  {
    "formatted_address": "21 South End Ave Ground Floor, New York, NY 10280, United States",
    "geometry": {
      "location": {
        "lat": 40.7081329,
        "lng": -74.017798
      },
      "viewport": {
        "northeast": {
          "lat": 40.70949917989272,
          "lng": -74.01641227010727
        },
        "southwest": {
          "lat": 40.70679952010728,
          "lng": -74.01911192989272
        }
      }
    },
    "name": "Battery Park Veterinary Hospital",
    "rating": 4.7,
    "user_ratings_total": 111
  },
  {
    "formatted_address": "193 Malcolm X Blvd, New York, NY 10026, United States",
    "geometry": {
      "location": {
        "lat": 40.8044907,
        "lng": -73.9482881
      },
      "viewport": {
        "northeast": {
          "lat": 40.80578957989272,
          "lng": -73.94682022010727
        },
        "southwest": {
          "lat": 40.80308992010728,
          "lng": -73.94951987989272
        }
      }
    },
    "name": "Harlem Animal Hospital",
    "rating": 4.3,
    "user_ratings_total": 248
  },
  {
    "formatted_address": "77 Worth St #1, New York, NY 10013, United States",
    "geometry": {
      "location": {
        "lat": 40.7168826,
        "lng": -74.0055905
      },
      "viewport": {
        "northeast": {
          "lat": 40.71823262989273,
          "lng": -74.00423967010727
        },
        "southwest": {
          "lat": 40.71553297010728,
          "lng": -74.00693932989272
        }
      }
    },
    "name": "Worth Street Veterinary Center",
    "rating": 4.8,
    "user_ratings_total": 259
  },
  {
    "formatted_address": "180 6th Ave, New York, NY 10013, United States",
    "geometry": {
      "location": {
        "lat": 40.7261185,
        "lng": -74.0035886
      },
      "viewport": {
        "northeast": {
          "lat": 40.72748117989272,
          "lng": -74.00228367010727
        },
        "southwest": {
          "lat": 40.72478152010728,
          "lng": -74.00498332989271
        }
      }
    },
    "name": "Tribeca Soho Animal Hospital",
    "rating": 4.6,
    "user_ratings_total": 95
  },
  {
    "formatted_address": "240 E 80th St, New York, NY 10075, United States",
    "geometry": {
      "location": {
        "lat": 40.7741057,
        "lng": -73.95528250000001
      },
      "viewport": {
        "northeast": {
          "lat": 40.77553257989272,
          "lng": -73.95387557010727
        },
        "southwest": {
          "lat": 40.77283292010728,
          "lng": -73.95657522989272
        }
      }
    },
    "name": "Manhattan Veterinary Group",
    "rating": 4.3,
    "user_ratings_total": 143
  },
  {
    "formatted_address": "163 Loisaida Ave, New York, NY 10009, United States",
    "geometry": {
      "location": {
        "lat": 40.7260697,
        "lng": -73.9777325
      },
      "viewport": {
        "northeast": {
          "lat": 40.72735182989272,
          "lng": -73.97636597010728
        },
        "southwest": {
          "lat": 40.72465217010728,
          "lng": -73.97906562989272
        }
      }
    },
    "name": "Urban Vets Animal Hospital",
    "rating": 4.5,
    "user_ratings_total": 173
  },
  {
    "formatted_address": "424 E 92nd St, New York, NY 10128, United States",
    "geometry": {
      "location": {
        "lat": 40.7801582,
        "lng": -73.9455626
      },
      "viewport": {
        "northeast": {
          "lat": 40.78149912989272,
          "lng": -73.94423692010729
        },
        "southwest": {
          "lat": 40.77879947010728,
          "lng": -73.94693657989272
        }
      }
    },
    "name": "ASPCA Animal Hospital - By Appointment Only",
    "rating": 4.5,
    "user_ratings_total": 764
  },
  {
    "formatted_address": "1390 2nd Ave, New York, NY 10021, United States",
    "geometry": {
      "location": {
        "lat": 40.7684809,
        "lng": -73.9582595
      },
      "viewport": {
        "northeast": {
          "lat": 40.76991322989272,
          "lng": -73.95700482010727
        },
        "southwest": {
          "lat": 40.76721357010727,
          "lng": -73.95970447989272
        }
      }
    },
    "name": "VCA Park East Animal Hospital",
    "rating": 4.5,
    "user_ratings_total": 50
  },
  {
    "formatted_address": "80 Beekman St, New York, NY 10038, United States",
    "geometry": {
      "location": {
        "lat": 40.7089224,
        "lng": -74.0038864
      },
      "viewport": {
        "northeast": {
          "lat": 40.71027222989272,
          "lng": -74.00253657010728
        },
        "southwest": {
          "lat": 40.70757257010728,
          "lng": -74.00523622989273
        }
      }
    },
    "name": "Seaport Animal Hospital",
    "rating": 4.7,
    "user_ratings_total": 135
  },
  {
    "formatted_address": "310 E 65th St #1C, New York, NY 10065, United States",
    "geometry": {
      "location": {
        "lat": 40.7640534,
        "lng": -73.96118609999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.76545377989272,
          "lng": -73.95978837010728
        },
        "southwest": {
          "lat": 40.76275412010728,
          "lng": -73.96248802989273
        }
      }
    },
    "name": "Upper East Side Animal Hospital",
    "rating": 4.7,
    "user_ratings_total": 126
  },
  {
    "formatted_address": "164 W 21st St, New York, NY 10011, United States",
    "geometry": {
      "location": {
        "lat": 40.74260049999999,
        "lng": -73.9963253
      },
      "viewport": {
        "northeast": {
          "lat": 40.74399732989271,
          "lng": -73.99496087010726
        },
        "southwest": {
          "lat": 40.74129767010727,
          "lng": -73.99766052989271
        }
      }
    },
    "name": "Firefly Veterinary Hospital",
    "rating": 4.8,
    "user_ratings_total": 92
  },
  {
    "formatted_address": "200 Avenue A, New York, NY 10009, United States",
    "geometry": {
      "location": {
        "lat": 40.72923979999999,
        "lng": -73.9808494
      },
      "viewport": {
        "northeast": {
          "lat": 40.73064852989272,
          "lng": -73.97964507010728
        },
        "southwest": {
          "lat": 40.72794887010728,
          "lng": -73.98234472989272
        }
      }
    },
    "name": "ABC Animal Hospital",
    "rating": 4.3,
    "user_ratings_total": 108
  },
  {
    "formatted_address": "140 W 67th St, New York, NY 10023, United States",
    "geometry": {
      "location": {
        "lat": 40.7751071,
        "lng": -73.98356919999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.77651272989272,
          "lng": -73.98217567010728
        },
        "southwest": {
          "lat": 40.77381307010728,
          "lng": -73.98487532989272
        }
      }
    },
    "name": "Lincoln Square Veterinary Hospital",
    "rating": 4.6,
    "user_ratings_total": 67
  },
  {
    "formatted_address": "558 Columbus Ave, New York, NY 10024, United States",
    "geometry": {
      "location": {
        "lat": 40.7873891,
        "lng": -73.971785
      },
      "viewport": {
        "northeast": {
          "lat": 40.78868612989272,
          "lng": -73.97042922010728
        },
        "southwest": {
          "lat": 40.78598647010728,
          "lng": -73.97312887989273
        }
      }
    },
    "name": "Animal General",
    "rating": 4.7,
    "user_ratings_total": 148
  },
  {
    "formatted_address": "47 E 30th St, New York, NY 10016, United States",
    "geometry": {
      "location": {
        "lat": 40.7448925,
        "lng": -73.98357229999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.74618457989271,
          "lng": -73.98226492010727
        },
        "southwest": {
          "lat": 40.74348492010727,
          "lng": -73.98496457989272
        }
      }
    },
    "name": "Murray Hill Pet Hospital",
    "rating": 4.7,
    "user_ratings_total": 201
  },
  {
    "formatted_address": "241 Eldridge St, New York, NY 10002, United States",
    "geometry": {
      "location": {
        "lat": 40.7226591,
        "lng": -73.9898831
      },
      "viewport": {
        "northeast": {
          "lat": 40.72398422989271,
          "lng": -73.98844947010727
        },
        "southwest": {
          "lat": 40.72128457010727,
          "lng": -73.99114912989272
        }
      }
    },
    "name": "Heart of Chelsea Veterinary Group - Lower East Side",
    "rating": 4.7,
    "user_ratings_total": 87
  },
  {
    "formatted_address": "256 E 33rd St # 1, New York, NY 10016, United States",
    "geometry": {
      "location": {
        "lat": 40.7441261,
        "lng": -73.9766585
      },
      "viewport": {
        "northeast": {
          "lat": 40.74548047989272,
          "lng": -73.97530537010728
        },
        "southwest": {
          "lat": 40.74278082010728,
          "lng": -73.97800502989273
        }
      }
    },
    "name": "Midtown Animal Hospital",
    "rating": 4.5,
    "user_ratings_total": 40
  },
  {
    "formatted_address": "236 E 75th St # 2 # 2, New York, NY 10021, United States",
    "geometry": {
      "location": {
        "lat": 40.7709657,
        "lng": -73.95771739999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.77231667989272,
          "lng": -73.95636722010728
        },
        "southwest": {
          "lat": 40.76961702010728,
          "lng": -73.95906687989272
        }
      }
    },
    "name": "Center for Veterinary Care",
    "rating": 4.8,
    "user_ratings_total": 98
  },
  {
    "formatted_address": "504 Hudson St, New York, NY 10014, United States",
    "geometry": {
      "location": {
        "lat": 40.733318,
        "lng": -74.0061905
      },
      "viewport": {
        "northeast": {
          "lat": 40.73467657989272,
          "lng": -74.0049302701073
        },
        "southwest": {
          "lat": 40.73197692010728,
          "lng": -74.00762992989273
        }
      }
    },
    "name": "Greenwich Village Animal Hospital",
    "rating": 4.6,
    "user_ratings_total": 120
  },
  {
    "formatted_address": "220 W 83rd St, New York, NY 10024, United States",
    "geometry": {
      "location": {
        "lat": 40.7859906,
        "lng": -73.97742029999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.78740537989272,
          "lng": -73.97602972010728
        },
        "southwest": {
          "lat": 40.78470572010728,
          "lng": -73.97872937989271
        }
      }
    },
    "name": "Westside Veterinary Center",
    "rating": 4.7,
    "user_ratings_total": 588
  },
  {
    "formatted_address": "321 E 52nd St, New York, NY 10022, United States",
    "geometry": {
      "location": {
        "lat": 40.7558033,
        "lng": -73.9665205
      },
      "viewport": {
        "northeast": {
          "lat": 40.75712672989272,
          "lng": -73.96518962010728
        },
        "southwest": {
          "lat": 40.75442707010728,
          "lng": -73.96788927989272
        }
      }
    },
    "name": "East Side Animal Hospital",
    "rating": 4.2,
    "user_ratings_total": 116
  },
  {
    "formatted_address": "229 W 101st St, New York, NY 10025, United States",
    "geometry": {
      "location": {
        "lat": 40.7980924,
        "lng": -73.9697944
      },
      "viewport": {
        "northeast": {
          "lat": 40.79941007989272,
          "lng": -73.96847107010727
        },
        "southwest": {
          "lat": 40.79671042010727,
          "lng": -73.97117072989272
        }
      }
    },
    "name": "Cathedral Dog & Cat Hospital",
    "rating": 4.8,
    "user_ratings_total": 48
  },
  {
    "formatted_address": "348 E 9th St Ste B, New York, NY 10003, United States",
    "geometry": {
      "location": {
        "lat": 40.7282575,
        "lng": -73.9855219
      },
      "viewport": {
        "northeast": {
          "lat": 40.72968492989272,
          "lng": -73.98411242010728
        },
        "southwest": {
          "lat": 40.72698527010728,
          "lng": -73.98681207989273
        }
      }
    },
    "name": "St. Marks Veterinary Hospital",
    "rating": 4.2,
    "user_ratings_total": 114
  },
  {
    "formatted_address": "295 W 112th St, New York, NY 10026, United States",
    "geometry": {
      "location": {
        "lat": 40.8017815,
        "lng": -73.95677839999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.80309482989273,
          "lng": -73.95548202010727
        },
        "southwest": {
          "lat": 40.80039517010728,
          "lng": -73.9581816798927
        }
      }
    },
    "name": "Uptown Veterinary Associates",
    "rating": 4.5,
    "user_ratings_total": 239
  },
  {
    "formatted_address": "146 Reade St, New York, NY 10013, United States",
    "geometry": {
      "location": {
        "lat": 40.71669139999999,
        "lng": -74.0100446
      },
      "viewport": {
        "northeast": {
          "lat": 40.71801637989272,
          "lng": -74.00871447010728
        },
        "southwest": {
          "lat": 40.71531672010728,
          "lng": -74.01141412989273
        }
      }
    },
    "name": "Reade Street Animal Hospital",
    "rating": 4.5,
    "user_ratings_total": 78
  },
  {
    "formatted_address": "248 W 26th St, New York, NY 10001, United States",
    "geometry": {
      "location": {
        "lat": 40.7466494,
        "lng": -73.9962887
      },
      "viewport": {
        "northeast": {
          "lat": 40.74805182989272,
          "lng": -73.99481872010728
        },
        "southwest": {
          "lat": 40.74535217010727,
          "lng": -73.99751837989271
        }
      }
    },
    "name": "West Chelsea Veterinary",
    "rating": 4.7,
    "user_ratings_total": 169
  },
  {
    "formatted_address": "510 E 62nd St, New York, NY 10065, United States",
    "geometry": {
      "location": {
        "lat": 40.7601539,
        "lng": -73.95798460000002
      },
      "viewport": {
        "northeast": {
          "lat": 40.76159662989271,
          "lng": -73.95655902010729
        },
        "southwest": {
          "lat": 40.75889697010727,
          "lng": -73.95925867989273
        }
      }
    },
    "name": "The Schwarzman Animal Medical Center",
    "rating": 3.1,
    "user_ratings_total": 521
  },
  {
    "formatted_address": "130 W 10th St, New York, NY 10014, United States",
    "geometry": {
      "location": {
        "lat": 40.73455879999999,
        "lng": -74.00033549999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.73595002989272,
          "lng": -73.99899612010728
        },
        "southwest": {
          "lat": 40.73325037010727,
          "lng": -74.00169577989271
        }
      }
    },
    "name": "Abingdon Square Veterinary Clinic",
    "rating": 5,
    "user_ratings_total": 151
  },
  {
    "formatted_address": "Door #1, 2143 Adam Clayton Powell Jr Blvd 2nd Floor, New York, NY 10027, United States",
    "geometry": {
      "location": {
        "lat": 40.810326,
        "lng": -73.9470262
      },
      "viewport": {
        "northeast": {
          "lat": 40.81171627989272,
          "lng": -73.94574602010726
        },
        "southwest": {
          "lat": 40.80901662010728,
          "lng": -73.94844567989271
        }
      }
    },
    "name": "Heart of Harlem Veterinary Clinic",
    "rating": 4.4,
    "user_ratings_total": 415
  },
  {
    "formatted_address": "257 W 18th St, New York, NY 10011, United States",
    "geometry": {
      "location": {
        "lat": 40.7422105,
        "lng": -74.0002081
      },
      "viewport": {
        "northeast": {
          "lat": 40.74349017989272,
          "lng": -73.99892682010727
        },
        "southwest": {
          "lat": 40.74079052010728,
          "lng": -74.00162647989272
        }
      }
    },
    "name": "Heart of Chelsea Veterinary Group - Chelsea",
    "rating": 4.4,
    "user_ratings_total": 155
  },
  {
    "formatted_address": "403 E 37th St, New York, NY 10016, United States",
    "geometry": {
      "location": {
        "lat": 40.7457166,
        "lng": -73.9716251
      },
      "viewport": {
        "northeast": {
          "lat": 40.74713017989272,
          "lng": -73.97047492010728
        },
        "southwest": {
          "lat": 40.74443052010728,
          "lng": -73.97317457989273
        }
      }
    },
    "name": "Rivergate Veterinary Clinic",
    "rating": 4.8,
    "user_ratings_total": 248
  },
  {
    "formatted_address": "250 W 108th St, New York, NY 10025, United States",
    "geometry": {
      "location": {
        "lat": 40.8025703,
        "lng": -73.9670082
      },
      "viewport": {
        "northeast": {
          "lat": 40.80396412989272,
          "lng": -73.96562012010727
        },
        "southwest": {
          "lat": 40.80126447010728,
          "lng": -73.96831977989272
        }
      }
    },
    "name": "Riverside Animal Hospital North",
    "rating": 4.5,
    "user_ratings_total": 242
  },
  {
    "formatted_address": "37 E 19th St, New York, NY 10003, United States",
    "geometry": {
      "location": {
        "lat": 40.7382335,
        "lng": -73.9889687
      },
      "viewport": {
        "northeast": {
          "lat": 40.73954122989272,
          "lng": -73.98764047010727
        },
        "southwest": {
          "lat": 40.73684157010727,
          "lng": -73.9903401298927
        }
      }
    },
    "name": "Gramercy Park Animal Hospital",
    "rating": 4.5,
    "user_ratings_total": 89
  },
  {
    "formatted_address": "700 Columbus Ave, New York, NY 10025, United States",
    "geometry": {
      "location": {
        "lat": 40.79206600000001,
        "lng": -73.96850909999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.79329637989272,
          "lng": -73.96707122010727
        },
        "southwest": {
          "lat": 40.79059672010727,
          "lng": -73.96977087989272
        }
      }
    },
    "name": "Gotham Veterinary Center",
    "rating": 4.6,
    "user_ratings_total": 170
  },
  {
    "formatted_address": "219 W 79th St, New York, NY 10024, United States",
    "geometry": {
      "location": {
        "lat": 40.7837568,
        "lng": -73.9790855
      },
      "viewport": {
        "northeast": {
          "lat": 40.78501152989273,
          "lng": -73.97783527010728
        },
        "southwest": {
          "lat": 40.78231187010728,
          "lng": -73.98053492989273
        }
      }
    },
    "name": "Riverside Animal Hospital South",
    "rating": 4.8,
    "user_ratings_total": 181
  },
  {
    "formatted_address": "506 W 42nd St, New York, NY 10036, United States",
    "geometry": {
      "location": {
        "lat": 40.7597266,
        "lng": -73.99609389999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.76109277989272,
          "lng": -73.99463022010727
        },
        "southwest": {
          "lat": 40.75839312010728,
          "lng": -73.99732987989272
        }
      }
    },
    "name": "Pure Paws Veterinary Care of Hell's Kitchen",
    "rating": 4.4,
    "user_ratings_total": 187
  },
  {
    "formatted_address": "244 9th Ave, New York, NY 10011, United States",
    "geometry": {
      "location": {
        "lat": 40.7474496,
        "lng": -74.0003768
      },
      "viewport": {
        "northeast": {
          "lat": 40.74884732989272,
          "lng": -73.99914342010727
        },
        "southwest": {
          "lat": 40.74614767010728,
          "lng": -74.00184307989272
        }
      }
    },
    "name": "Downtown Veterinary Clinic",
    "rating": 4.4,
    "user_ratings_total": 54
  },
  {
    "formatted_address": "666 10th Ave, New York, NY 10036, United States",
    "geometry": {
      "location": {
        "lat": 40.7625745,
        "lng": -73.99312789999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.76392782989272,
          "lng": -73.99178667010726
        },
        "southwest": {
          "lat": 40.76122817010728,
          "lng": -73.99448632989271
        }
      }
    },
    "name": "Westside Animal Hospital",
    "rating": 4,
    "user_ratings_total": 46
  },
  {
    "formatted_address": "555 6th Ave, New York, NY 10011, United States",
    "geometry": {
      "location": {
        "lat": 40.7383503,
        "lng": -73.9967341
      },
      "viewport": {
        "northeast": {
          "lat": 40.73969617989272,
          "lng": -73.99528077010727
        },
        "southwest": {
          "lat": 40.73699652010728,
          "lng": -73.99798042989272
        }
      }
    },
    "name": "Bond Vet - Chelsea",
    "rating": 4.7,
    "user_ratings_total": 263
  },
  {
    "formatted_address": "318 E 11th St, New York, NY 10003, United States",
    "geometry": {
      "location": {
        "lat": 40.7298275,
        "lng": -73.9854029
      },
      "viewport": {
        "northeast": {
          "lat": 40.73123072989272,
          "lng": -73.98400767010727
        },
        "southwest": {
          "lat": 40.72853107010728,
          "lng": -73.98670732989271
        }
      }
    },
    "name": "The Village Veterinarian",
    "rating": 4.7,
    "user_ratings_total": 356
  },
  {
    "formatted_address": "329 2nd Ave, New York, NY 10003, United States",
    "geometry": {
      "location": {
        "lat": 40.7356085,
        "lng": -73.9827818
      },
      "viewport": {
        "northeast": {
          "lat": 40.73692452989272,
          "lng": -73.98134912010728
        },
        "southwest": {
          "lat": 40.73422487010727,
          "lng": -73.98404877989273
        }
      }
    },
    "name": "Gotham Animal Clinic",
    "rating": 4.6,
    "user_ratings_total": 35
  },
  {
    "formatted_address": "1049 3rd Ave, New York, NY 10065, United States",
    "geometry": {
      "location": {
        "lat": 40.7631878,
        "lng": -73.96506699999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.76456922989271,
          "lng": -73.96360662010727
        },
        "southwest": {
          "lat": 40.76186957010727,
          "lng": -73.9663062798927
        }
      }
    },
    "name": "Bond Vet - Upper East Side",
    "rating": 4.8,
    "user_ratings_total": 670
  },
  {
    "formatted_address": "220 W 72nd St, New York, NY 10023, United States",
    "geometry": {
      "location": {
        "lat": 40.7789059,
        "lng": -73.9828766
      },
      "viewport": {
        "northeast": {
          "lat": 40.78030922989272,
          "lng": -73.98149247010728
        },
        "southwest": {
          "lat": 40.77760957010727,
          "lng": -73.98419212989272
        }
      }
    },
    "name": "City Veterinary Care",
    "rating": 4.3,
    "user_ratings_total": 152
  },
  {
    "formatted_address": "417 E 72nd St, New York, NY 10021, United States",
    "geometry": {
      "location": {
        "lat": 40.7675217,
        "lng": -73.95491539999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.76881567989273,
          "lng": -73.95360677010727
        },
        "southwest": {
          "lat": 40.76611602010728,
          "lng": -73.95630642989272
        }
      }
    },
    "name": "York Veterinary Center",
    "rating": 4.7,
    "user_ratings_total": 86
  },
  {
    "formatted_address": "143 Freedom Pl, New York, NY 10069, United States",
    "geometry": {
      "location": {
        "lat": 40.7767839,
        "lng": -73.9885188
      },
      "viewport": {
        "northeast": {
          "lat": 40.77830107989272,
          "lng": -73.98745957010728
        },
        "southwest": {
          "lat": 40.77560142010728,
          "lng": -73.99015922989271
        }
      }
    },
    "name": "New York Cat Hospital",
    "rating": 4.7,
    "user_ratings_total": 75
  },
  {
    "formatted_address": "170 W 96th St, New York, NY 10025, United States",
    "geometry": {
      "location": {
        "lat": 40.7934646,
        "lng": -73.9700716
      },
      "viewport": {
        "northeast": {
          "lat": 40.79473222989272,
          "lng": -73.96876922010728
        },
        "southwest": {
          "lat": 40.79203257010727,
          "lng": -73.97146887989273
        }
      }
    },
    "name": "Symphony Veterinary Center",
    "rating": 4.6,
    "user_ratings_total": 267
  },
  {
    "formatted_address": "207 E 94th St, New York, NY 10128, United States",
    "geometry": {
      "location": {
        "lat": 40.7837775,
        "lng": -73.9494375
      },
      "viewport": {
        "northeast": {
          "lat": 40.78503352989271,
          "lng": -73.94814257010728
        },
        "southwest": {
          "lat": 40.78233387010727,
          "lng": -73.95084222989271
        }
      }
    },
    "name": "Upper East Veterinary Center",
    "rating": 4.4,
    "user_ratings_total": 96
  },
  {
    "formatted_address": "15 7th Ave, New York, NY 10011, United States",
    "geometry": {
      "location": {
        "lat": 40.7370621,
        "lng": -74.0006315
      },
      "viewport": {
        "northeast": {
          "lat": 40.73843792989272,
          "lng": -73.99934582010728
        },
        "southwest": {
          "lat": 40.73573827010728,
          "lng": -74.00204547989273
        }
      }
    },
    "name": "Small Door Veterinary",
    "rating": 4.9,
    "user_ratings_total": 148
  },
  {
    "formatted_address": "1623 1st Ave., New York, NY 10028, United States",
    "geometry": {
      "location": {
        "lat": 40.7759969,
        "lng": -73.9503064
      },
      "viewport": {
        "northeast": {
          "lat": 40.77728107989272,
          "lng": -73.94885852010727
        },
        "southwest": {
          "lat": 40.77458142010728,
          "lng": -73.95155817989271
        }
      }
    },
    "name": "Animal Clinic of New York",
    "rating": 4.5,
    "user_ratings_total": 26
  },
  {
    "formatted_address": "1215 2nd Ave, New York, NY 10065, United States",
    "geometry": {
      "location": {
        "lat": 40.7636237,
        "lng": -73.9623726
      },
      "viewport": {
        "northeast": {
          "lat": 40.76481417989272,
          "lng": -73.96110842010728
        },
        "southwest": {
          "lat": 40.76211452010727,
          "lng": -73.96380807989271
        }
      }
    },
    "name": "Veterinary Emergency Group",
    "rating": 4.7,
    "user_ratings_total": 308
  },
  {
    "formatted_address": "256 West St, New York, NY 10013, United States",
    "geometry": {
      "location": {
        "lat": 40.7225298,
        "lng": -74.0113956
      },
      "viewport": {
        "northeast": {
          "lat": 40.72389457989272,
          "lng": -74.01015737010727
        },
        "southwest": {
          "lat": 40.72119492010727,
          "lng": -74.01285702989271
        }
      }
    },
    "name": "Tribeca Veterinary Wellness",
    "rating": 4.9,
    "user_ratings_total": 43
  },
  {
    "formatted_address": "1147 1st Ave., New York, NY 10065, United States",
    "geometry": {
      "location": {
        "lat": 40.7620166,
        "lng": -73.9604505
      },
      "viewport": {
        "northeast": {
          "lat": 40.76335627989272,
          "lng": -73.95907457010729
        },
        "southwest": {
          "lat": 40.76065662010728,
          "lng": -73.96177422989273
        }
      }
    },
    "name": "Sutton Animal Hospital",
    "rating": 4.7,
    "user_ratings_total": 39
  },
  {
    "formatted_address": "1707 3rd Ave, New York, NY 10128, United States",
    "geometry": {
      "location": {
        "lat": 40.7848313,
        "lng": -73.9492538
      },
      "viewport": {
        "northeast": {
          "lat": 40.78630942989273,
          "lng": -73.94775677010728
        },
        "southwest": {
          "lat": 40.78360977010728,
          "lng": -73.95045642989271
        }
      }
    },
    "name": "Carnegie Hill Veterinarians",
    "rating": 4.5,
    "user_ratings_total": 258
  },
  {
    "formatted_address": "335 1st Ave., New York, NY 10003, United States",
    "geometry": {
      "location": {
        "lat": 40.7347704,
        "lng": -73.98031739999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.73609962989272,
          "lng": -73.97891867010728
        },
        "southwest": {
          "lat": 40.73339997010728,
          "lng": -73.98161832989273
        }
      }
    },
    "name": "First Avenue Veterinary Hospital",
    "rating": 4.2,
    "user_ratings_total": 85
  },
  {
    "formatted_address": "4846 Broadway, New York, NY 10034, United States",
    "geometry": {
      "location": {
        "lat": 40.8663529,
        "lng": -73.9244975
      },
      "viewport": {
        "northeast": {
          "lat": 40.86776082989272,
          "lng": -73.92319047010727
        },
        "southwest": {
          "lat": 40.86506117010727,
          "lng": -73.92589012989272
        }
      }
    },
    "name": "Inwood Animal Clinic",
    "rating": 4.4,
    "user_ratings_total": 669
  },
  {
    "formatted_address": "410 W 55th St, New York, NY 10019, United States",
    "geometry": {
      "location": {
        "lat": 40.7668466,
        "lng": -73.987642
      },
      "viewport": {
        "northeast": {
          "lat": 40.76825512989272,
          "lng": -73.98625982010726
        },
        "southwest": {
          "lat": 40.76555547010727,
          "lng": -73.98895947989271
        }
      }
    },
    "name": "BluePearl Pet Hospital",
    "rating": 3.1,
    "user_ratings_total": 243
  },
  {
    "formatted_address": "1 W 15th St, New York, NY 10011, United States",
    "geometry": {
      "location": {
        "lat": 40.736982,
        "lng": -73.993478
      },
      "viewport": {
        "northeast": {
          "lat": 40.73827672989272,
          "lng": -73.99217842010728
        },
        "southwest": {
          "lat": 40.73557707010727,
          "lng": -73.99487807989273
        }
      }
    },
    "name": "BluePearl Pet Hospital",
    "rating": 3,
    "user_ratings_total": 160
  }
];
