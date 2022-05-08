const petStores = [
  {
    "type": "node",
    "id": 1157647167,
    "lat": 40.6774406,
    "lon": -73.9691709,
    "tags": {
      "addr:housenumber": "628",
      "addr:street": "Vanderbilt Avenue",
      "delivery": "yes",
      "name": "Acme Pet Food",
      "opening_hours": "Mo-Fr 10:00-19:00; Sa 10:00-18:00; Su 11:00-17:00",
      "phone": "+1-718-789-8062",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 1608794595,
    "lat": 40.726185,
    "lon": -73.995877,
    "tags": {
      "brand": "PetSmart",
      "brand:wikidata": "Q3307147",
      "brand:wikipedia": "en:PetSmart",
      "name": "PetSmart",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 2297532765,
    "lat": 40.7916826,
    "lon": -73.9718257,
    "tags": {
      "addr:city": "New York",
      "addr:country": "US",
      "addr:housenumber": "671",
      "addr:postcode": "10025",
      "addr:state": "NY",
      "addr:street": "Amsterdam Avenue",
      "name": "Furry Paws",
      "phone": "+1 212-222-0059",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 2321125646,
    "lat": 40.6977076,
    "lon": -73.9936515,
    "tags": {
      "name": "Clark Pet Shop",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 2524539490,
    "lat": 40.6891572,
    "lon": -73.9913306,
    "tags": {
      "addr:housenumber": "238",
      "addr:postcode": "11201",
      "addr:street": "Atlantic Avenue",
      "brand": "PetSmart",
      "brand:wikidata": "Q3307147",
      "brand:wikipedia": "en:PetSmart",
      "name": "PetSmart",
      "opening_hours": "Mo 09:00-18:00; Tu-Sa 09:00-21:00; Su 10:00-19:00",
      "phone": "+1-718-852-2519",
      "shop": "pet",
      "website": "https://www.petsmart.com/store-locator/store/?storeID=2249"
    }
  },
  {
    "type": "node",
    "id": 2550089895,
    "lat": 40.6594027,
    "lon": -73.9813968,
    "tags": {
      "addr:housenumber": "240",
      "addr:postcode": "11215",
      "addr:street": "Prospect Park West",
      "atm": "yes",
      "delivery": "yes",
      "disused:website": "http://abcpetsupply.com",
      "name": "ABC Pet Supply .com",
      "phone": "+1-718-369-4268",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 2550581158,
    "lat": 40.6696027,
    "lon": -73.9876233,
    "tags": {
      "fax": "+1-718-355-3553",
      "name": "Park Slope Pet",
      "phone": "+1-718-965-3555",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 2561990012,
    "lat": 40.648202,
    "lon": -73.9781916,
    "tags": {
      "addr:housenumber": "155",
      "addr:postcode": "11218",
      "addr:street": "East 3rd Street",
      "name": "The Hamilton Dog House",
      "phone": "+1-718-436-7387",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 2566649180,
    "lat": 40.6624829,
    "lon": -73.9539188,
    "tags": {
      "name": "Sweet Paws",
      "opening_hours": "Mo-Sa 10:30-21:00; Su 13:00-21:00",
      "phone": "+1-347-339-7139",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 2567049313,
    "lat": 40.6658779,
    "lon": -73.9507259,
    "tags": {
      "addr:housenumber": "901",
      "addr:postcode": "11225",
      "addr:street": "Nostrand Avenue",
      "name": "I Love My Pet",
      "opening_hours": "Mo-Su 11:00-20:00",
      "phone": "+1-718-576-6535",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 2568219123,
    "lat": 40.693229,
    "lon": -73.9666831,
    "tags": {
      "addr:housenumber": "464",
      "addr:postcode": "11205",
      "addr:street": "Myrtle Avenue",
      "delivery": "yes",
      "name": "Nycpet.com",
      "opening_hours": "Mo-Fr 09:00-20:00; Sa 09:00-19:00; Su 11:00-18:00",
      "phone": "+1-718-636-3848",
      "shop": "pet",
      "website": "https://nycpet.com"
    }
  },
  {
    "type": "node",
    "id": 2704131534,
    "lat": 40.742438,
    "lon": -73.9807945,
    "tags": {
      "addr:housenumber": "404",
      "addr:postcode": "10016",
      "addr:street": "3rd Avenue",
      "delivery": "yes",
      "name": "Petopia",
      "opening_hours": "Mo-Sa 10:00-20:30; Su 11:00-20:30",
      "phone": "+1-212-481-4544",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 2710839411,
    "lat": 40.7459869,
    "lon": -73.975251,
    "tags": {
      "addr:housenumber": "657",
      "addr:postcode": "10016",
      "addr:street": "2nd Avenue",
      "delivery": "yes",
      "name": "Happy Feet",
      "opening_hours": "Mo-Fr 08:00-21:00; Sa-Su 09:00-20:00",
      "phone": "+1 212 889 3400",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 2711024310,
    "lat": 40.7579165,
    "lon": -73.9629819,
    "tags": {
      "addr:city": "New York",
      "addr:housenumber": "1036",
      "addr:postcode": "10022",
      "addr:state": "NY",
      "addr:street": "1st Avenue",
      "name": "The Bonehouse",
      "shop": "pet",
      "wheelchair": "yes"
    }
  },
  {
    "type": "node",
    "id": 2765578609,
    "lat": 40.8040526,
    "lon": -73.9362468,
    "tags": {
      "addr:housenumber": "167",
      "addr:postcode": "10035",
      "addr:street": "East 125th Street",
      "brand": "Petland Discounts",
      "brand:wikidata": "Q7178463",
      "brand:wikipedia": "en:Petland Discounts",
      "name": "Petland Discounts",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 2791229510,
    "lat": 40.8903538,
    "lon": -74.2506272,
    "tags": {
      "addr:city": "Wayne",
      "addr:housenumber": "57",
      "addr:postcode": "07470",
      "addr:state": "NJ",
      "addr:street": "NJ-23",
      "brand": "PetSmart",
      "brand:wikidata": "Q3307147",
      "brand:wikipedia": "en:PetSmart",
      "name": "PetSmart",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 2823612554,
    "lat": 40.8372221,
    "lon": -74.1524383,
    "tags": {
      "brand": "Petco",
      "brand:wikidata": "Q7171798",
      "brand:wikipedia": "en:Petco",
      "name": "Petco",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 2825635868,
    "lat": 40.7920163,
    "lon": -74.0476155,
    "tags": {
      "brand": "PetSmart",
      "brand:wikidata": "Q3307147",
      "brand:wikipedia": "en:PetSmart",
      "name": "PetSmart",
      "opening_hours": "Mo-Sa 09:00-21:30; Su 10:00-19:00",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 2838706930,
    "lat": 40.7127106,
    "lon": -73.9439202,
    "tags": {
      "addr:housenumber": "300",
      "addr:postcode": "11211",
      "addr:street": "Graham Avenue",
      "name": "NYC Pet",
      "opening_hours": "Mo-Sa 10:00-19:00; Su 11:00-18:00",
      "phone": "+1-718-387-4700",
      "shop": "pet",
      "website": "https://nycpet.com/a/pages/locations/253/williamsburg-i"
    }
  },
  {
    "type": "node",
    "id": 2846942577,
    "lat": 40.7656089,
    "lon": -73.9307049,
    "tags": {
      "addr:housenumber": "21-11",
      "addr:postcode": "11106",
      "addr:street": "Broadway",
      "name": "Tom\u2019s Pet Supply",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 2863260481,
    "lat": 40.6708863,
    "lon": -73.8433087,
    "tags": {
      "addr:housenumber": "90-21;137-20",
      "addr:postcode": "11417",
      "addr:street": "Albert Road;Cross Bay Boulevard",
      "name": "Animal Pantry Ozone Park",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 2897923550,
    "lat": 40.7066463,
    "lon": -74.0043543,
    "tags": {
      "name": "Salty Paw",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 3676993347,
    "lat": 40.7307781,
    "lon": -73.9816312,
    "tags": {
      "addr:city": "New York",
      "addr:housenumber": "420",
      "addr:postcode": "10009",
      "addr:state": "NY",
      "addr:street": "East 14th Street",
      "delivery": "yes",
      "name": "Petopia",
      "opening_hours": "Mo-Sa 10:00-20:30; Su 11:00-20:30",
      "phone": "+1-212-677-2400",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 3841321878,
    "lat": 40.744804,
    "lon": -73.9784286,
    "tags": {
      "addr:housenumber": "487",
      "addr:postcode": "10016",
      "addr:street": "3rd Avenue",
      "amenity": "animal_boarding",
      "level": "-1",
      "name": "Biscuits & Bath",
      "opening_hours": "Mo-Fr 07:00-20:00; Sa-Su 09:00-17:00",
      "phone": "+1-646-786-0971",
      "shop": "pet",
      "website": "https://www.biscuitsandbath.com"
    }
  },
  {
    "type": "node",
    "id": 3862975262,
    "lat": 40.780826,
    "lon": -73.917069,
    "tags": {
      "name": "Pet Care",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 4006308110,
    "lat": 40.7253645,
    "lon": -73.995326,
    "tags": {
      "name": "Happy Paws",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 4136514869,
    "lat": 40.6539485,
    "lon": -73.870715,
    "tags": {
      "brand": "Petco",
      "brand:wikidata": "Q7171798",
      "brand:wikipedia": "en:Petco",
      "name": "Petco",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 4316479490,
    "lat": 40.6884251,
    "lon": -73.9882183,
    "tags": {
      "name": "Little L's",
      "opening_hours": "Mo-Sa 10:00-18:00; Su 11:00-17:00",
      "phone": "+1-347-422-0560",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 4407735190,
    "lat": 40.5767029,
    "lon": -74.166895,
    "tags": {
      "brand": "Petco",
      "brand:wikidata": "Q7171798",
      "brand:wikipedia": "en:Petco",
      "name": "Petco",
      "shop": "pet",
      "wheelchair": "yes"
    }
  },
  {
    "type": "node",
    "id": 4881022236,
    "lat": 40.7335106,
    "lon": -74.0040897,
    "tags": {
      "addr:housenumber": "91",
      "addr:street": "Christopher Street",
      "name": "Wooftown",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 4931671221,
    "lat": 40.596822,
    "lon": -73.9848458,
    "tags": {
      "brand": "Petco",
      "brand:wikidata": "Q7171798",
      "brand:wikipedia": "en:Petco",
      "name": "Petco",
      "name:en": "Petco",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 4995839506,
    "lat": 40.748525,
    "lon": -73.9422437,
    "tags": {
      "name": "Lucky Paws",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5015277497,
    "lat": 40.7579934,
    "lon": -73.7896514,
    "tags": {
      "addr:housenumber": "191-19",
      "addr:street": "Northern Boulevard",
      "name": "Pet Menu",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5060846739,
    "lat": 40.6392066,
    "lon": -73.700906,
    "tags": {
      "addr:city": "Hewlett",
      "addr:housenumber": "1296",
      "addr:postcode": "11557",
      "addr:state": "NY",
      "addr:street": "Broadway",
      "brand": "Petco",
      "brand:wikidata": "Q7171798",
      "brand:wikipedia": "en:Petco",
      "name": "Petco",
      "nysgissam:nysaddresspointid": "NASS372807",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5097791995,
    "lat": 40.7564657,
    "lon": -73.9675993,
    "tags": {
      "addr:housenumber": "991",
      "addr:postcode": "10022",
      "addr:street": "2nd Avenue",
      "brand": "Petco",
      "brand:wikidata": "Q7171798",
      "brand:wikipedia": "en:Petco",
      "name": "Petco",
      "opening_hours": "Mo-Sa 09:00-21:00; Su 10:00-20:00",
      "phone": "+1 212-593-7213",
      "ref": "3746",
      "shop": "pet",
      "website": "https://stores.petco.com/ny/newyork/pet-supplies-newyork-ny-3746.html"
    }
  },
  {
    "type": "node",
    "id": 5120908530,
    "lat": 40.7600509,
    "lon": -73.9183465,
    "tags": {
      "addr:housenumber": "31-50",
      "addr:street": "Steinway Street",
      "name": "Discount Pet Shop",
      "shop": "pet",
      "wheelchair": "yes"
    }
  },
  {
    "type": "node",
    "id": 5159871721,
    "lat": 40.7430091,
    "lon": -73.9560701,
    "tags": {
      "addr:housenumber": "5-04",
      "addr:street": "50th Avenue",
      "name": "HappyDogs",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5172805567,
    "lat": 40.77054,
    "lon": -73.9181828,
    "tags": {
      "addr:street": "Hoyt Avenue South",
      "name": "Pet Club",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5175584325,
    "lat": 40.8501949,
    "lon": -73.8519805,
    "tags": {
      "addr:housenumber": "1129",
      "addr:street": "Morris Park Avenue",
      "name": "The Pet Parlor",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5178536922,
    "lat": 40.7110029,
    "lon": -74.006693,
    "tags": {
      "addr:city": "New York",
      "addr:housenumber": "132",
      "addr:street": "Nassau Street",
      "brand": "Petland Discounts",
      "brand:wikidata": "Q7178463",
      "brand:wikipedia": "en:Petland Discounts",
      "name": "Petland Discounts",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5181111840,
    "lat": 40.6760326,
    "lon": -73.9808999,
    "tags": {
      "delivery": "yes",
      "name": "NYCPet.com",
      "opening_hours": "Mo-Sa 09:00-19:00; Su 11:00-18:00",
      "phone": "+1-718-230-8224",
      "shop": "pet",
      "website": "https://nycpet.com/a/pages/locations/254/park-slope-i"
    }
  },
  {
    "type": "node",
    "id": 5206183371,
    "lat": 40.6896306,
    "lon": -73.9704973,
    "tags": {
      "addr:housenumber": "225",
      "addr:street": "DeKalb Avenue",
      "delivery": "yes",
      "name": "ABC Pet Supply",
      "phone": "+1-718-875-1661",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5213278670,
    "lat": 40.7574657,
    "lon": -73.9160392,
    "tags": {
      "name": "Pooch Palace",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5328220839,
    "lat": 40.6740201,
    "lon": -73.9755983,
    "tags": {
      "addr:housenumber": "103",
      "addr:postcode": "11215",
      "addr:street": "7th Avenue",
      "name": "Gone To The Dogs",
      "opening_hours": "Mo-Fr 11:00-19:00; Sa 11:39-18:30; Su 12:00-18:00",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5349676372,
    "lat": 40.709182,
    "lon": -73.8987806,
    "tags": {
      "addr:housenumber": "65-20",
      "addr:street": "Fresh Pond Road",
      "delivery": "yes",
      "delivery:fee": "free",
      "name": "Five Star Pet Shop",
      "opening_hours": "Su 10:00-20:00; Mo-Sa 09:00-22:00",
      "payment:cash": "yes",
      "phone": "+1-347-335-0099",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5406503615,
    "lat": 40.7094423,
    "lon": -73.9046431,
    "tags": {
      "addr:housenumber": "63-48",
      "addr:street": "Forest Avenue",
      "name": "Dog Friendly Grooms",
      "opening_hours": "Tu, Fr, Sa 10:00-18:00; We, Th 10:00-20:00",
      "phone": "(718) 418-8400",
      "shop": "pet",
      "website": "http://www.dogfriendlygrooms.com/"
    }
  },
  {
    "type": "node",
    "id": 5440512345,
    "lat": 40.7423561,
    "lon": -73.9526265,
    "tags": {
      "addr:housenumber": "10-50",
      "addr:postcode": "11101",
      "addr:street": "Jackson Avenue",
      "name": "Pet Island",
      "opening_hours": "Mo-Sa 10:00-20:00; Su 11:00-19:00",
      "phone": "+1-718-786-1555",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5455578938,
    "lat": 40.7625556,
    "lon": -73.8330576,
    "tags": {
      "addr:housenumber": "135-02",
      "addr:street": "Northern Boulevard",
      "name": "Aquarium Pets",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5546547985,
    "lat": 40.7567911,
    "lon": -73.9140013,
    "tags": {
      "addr:street": "Broadway",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5548352053,
    "lat": 40.7847333,
    "lon": -73.949393,
    "tags": {
      "addr:housenumber": "1705",
      "addr:street": "3rd Avenue",
      "delivery": "yes",
      "name": "Furry Paws",
      "opening_hours": "Mo-Fr 09:00-20:45; Sa 09:00-19:45; Su 10:00-18:45",
      "payment:american_express": "yes",
      "payment:cash": "yes",
      "payment:diners_club": "yes",
      "payment:discover_card": "yes",
      "payment:jcb": "yes",
      "payment:mastercard": "yes",
      "payment:unionpay": "yes",
      "payment:visa": "yes",
      "phone": "+1-212-528-5308",
      "postal_code": "10128",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5559403921,
    "lat": 40.7006232,
    "lon": -73.9020027,
    "tags": {
      "addr:housenumber": "57-45",
      "addr:street": "Myrtle Avenue",
      "name": "Bob's Tropical Pet Grooming",
      "opening_hours": "Mo-Sa 09:00-19:00; Su 10:00-17:00",
      "payment:cash": "yes",
      "payment:credit_cards": "yes",
      "phone": "+1-718-821-2872",
      "shop": "pet",
      "website": "https://bobstropicalpetcenter.com/",
      "wheelchair": "yes"
    }
  },
  {
    "type": "node",
    "id": 5599398200,
    "lat": 40.8125532,
    "lon": -74.1202132,
    "tags": {
      "addr:city": "Lyndhurst",
      "addr:housenumber": "540",
      "addr:postcode": "07071",
      "addr:state": "NJ",
      "addr:street": "New York Avenue",
      "brand": "PetSmart",
      "brand:wikidata": "Q3307147",
      "brand:wikipedia": "en:PetSmart",
      "name": "PetSmart",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5607087921,
    "lat": 40.6191686,
    "lon": -74.0219218,
    "tags": {
      "name": "Animal Pantry",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5631385022,
    "lat": 40.7231656,
    "lon": -73.944329,
    "tags": {
      "name": "District Dog",
      "opening_hours": "Mo-Su 09:00-18:00",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5642320451,
    "lat": 40.7210675,
    "lon": -73.9037311,
    "tags": {
      "addr:housenumber": "61-06",
      "addr:street": "Flushing Avenue",
      "name": "Jenny's Dreams",
      "phone": "+1-718-417-5575",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5646565154,
    "lat": 40.7799187,
    "lon": -73.9554789,
    "tags": {
      "addr:housenumber": "1280",
      "addr:postcode": "10028",
      "addr:street": "Lexington Avenue",
      "brand": "Petco",
      "brand:wikidata": "Q7171798",
      "brand:wikipedia": "en:Petco",
      "name": "Petco",
      "opening_hours": "Mo-Su 09:00-22:00",
      "operator": "Petco Animal Supplies, Inc.",
      "payment:american_express": "yes",
      "payment:cash": "yes",
      "payment:discover_card": "yes",
      "payment:mastercard": "yes",
      "payment:unionpay": "yes",
      "payment:visa": "yes",
      "phone": "+1-212-369-7903",
      "ref": "3713",
      "shop": "pet",
      "website": "https://stores.petco.com/ny/newyork/pet-supplies-newyork-ny-3713.html"
    }
  },
  {
    "type": "node",
    "id": 5652695290,
    "lat": 40.792091,
    "lon": -73.9740586,
    "tags": {
      "addr:housenumber": "2475",
      "addr:postcode": "10025",
      "addr:street": "Broadway",
      "brand": "Petco",
      "brand:wikidata": "Q7171798",
      "brand:wikipedia": "en:Petco",
      "name": "Petco",
      "opening_hours": "Mo-Sa 09:00-21:00; Su 10:00-21:00",
      "operator": "Petco Animal Supplies, Inc.",
      "phone": "+1-212-877-1270",
      "ref": "1750",
      "shop": "pet",
      "website": "https://stores.petco.com/ny/newyork/pet-supplies-newyork-ny-1750.html"
    }
  },
  {
    "type": "node",
    "id": 5652757947,
    "lat": 40.7778058,
    "lon": -73.9484598,
    "tags": {
      "addr:housenumber": "1676",
      "addr:postcode": "10028",
      "addr:street": "1st Avenue",
      "delivery": "yes",
      "level": "0",
      "name": "Pet Town",
      "opening_hours": "Mo-Fr 10:30-20:00; Sa, Su 10:30-19:00",
      "phone": "+1 212-996-6273",
      "shop": "pet",
      "website": "https://pettown.business.site"
    }
  },
  {
    "type": "node",
    "id": 5695094835,
    "lat": 40.7040153,
    "lon": -73.9271968,
    "tags": {
      "addr:housenumber": "175",
      "addr:street": "Knickerbocker Avenue",
      "delivery": "yew",
      "delivery:fee": "no",
      "email": "bushwickbark@gmail.com",
      "name": "Bushwick Bark",
      "opening_hours": "Mo-Fr, Su 10:00-20:00; Sa 10:00-19:00",
      "phone": "+1-718-928-7772",
      "shop": "pet",
      "website": "https://bushwickbark.com/"
    }
  },
  {
    "type": "node",
    "id": 5709849144,
    "lat": 40.6730666,
    "lon": -73.9832532,
    "tags": {
      "atm": "yes",
      "name": "Pet Boutique & Supplies",
      "phone": "+1 718 832 7600",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5712368960,
    "lat": 40.8658674,
    "lon": -73.9268846,
    "tags": {
      "addr:housenumber": "4771",
      "addr:street": "Broadway",
      "delivery": "yes",
      "delivery:fee": "2",
      "name": "Popcorn Pawz - Inwood",
      "opening_hours": "Mo-Su 10:00-20:00",
      "phone": "+1-646-755-8190",
      "shop": "pet",
      "website": "http://popcornpawz.com/"
    }
  },
  {
    "type": "node",
    "id": 5712453222,
    "lat": 40.6802184,
    "lon": -73.9744117,
    "tags": {
      "description": "dogs and cats for sale, supplies, boarding, grooming",
      "name": "Pup Slope",
      "opening_hours": "Mo-Fr 09:00-20:00",
      "phone": "+1 718 783 4204",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5732328016,
    "lat": 40.7568631,
    "lon": -73.99909,
    "tags": {
      "addr:housenumber": "522",
      "addr:street": "West 37th Street",
      "description": "Pet store selling tropical fish.",
      "name": "Manhattan Aquariums",
      "opening_hours": "Mo-Fr 13:00-20:00; Sa 11:00-19:00; Su 11:00-18:00",
      "phone": "+1-310-923-7929",
      "shop": "pet",
      "website": "https://www.aquariumsnewyork.com/",
      "wheelchair": "no"
    }
  },
  {
    "type": "node",
    "id": 5736996022,
    "lat": 40.7050292,
    "lon": -73.9284139,
    "tags": {
      "addr:housenumber": "1087",
      "addr:street": "Flushing Avenue",
      "name": "Bushy Tails",
      "opening_hours": "Mo-Fr 11:00-20:00; Sa 12:00-19:00; Su 12:00-17:00",
      "phone": "+1-718-821-1525",
      "shop": "pet",
      "website": "https://bushytailsbrooklyn.com/"
    }
  },
  {
    "type": "node",
    "id": 5746157765,
    "lat": 40.6229512,
    "lon": -73.7432997,
    "tags": {
      "addr:city": "Inwood",
      "addr:housenumber": "561",
      "addr:postcode": "11096",
      "addr:state": "NY",
      "addr:street": "Burnside Avenue",
      "brand": "Pet Supplies Plus",
      "brand:wikidata": "Q7171563",
      "brand:wikipedia": "en:Pet Supplies Plus",
      "name": "Pet Supplies Plus",
      "nysgissam:nysaddresspointid": "NASS225524",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5758534756,
    "lat": 40.663108,
    "lon": -73.7238612,
    "tags": {
      "brand": "PetSmart",
      "brand:wikidata": "Q3307147",
      "brand:wikipedia": "en:PetSmart",
      "name": "PetSmart",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5838758066,
    "lat": 40.6652098,
    "lon": -73.9827846,
    "tags": {
      "delivery": "yes",
      "name": "NYCPet",
      "opening_hours": "Mo-Fr 09:00-20:00; Sa 10:00-19:00; Su 11:00-18:00",
      "phone": "+1-718-768-3954",
      "shop": "pet",
      "website": "https://nycpet.com"
    }
  },
  {
    "type": "node",
    "id": 5934969268,
    "lat": 40.7202135,
    "lon": -73.9999245,
    "tags": {
      "description": "luxury pet products",
      "name": "Max Bone",
      "shop": "pet",
      "website": "https://www.max-bone.com"
    }
  },
  {
    "type": "node",
    "id": 5963348275,
    "lat": 40.7472865,
    "lon": -73.9743008,
    "tags": {
      "addr:housenumber": "705",
      "addr:postcode": "10016",
      "addr:street": "2nd Avenue",
      "branch": "2nd Avenue",
      "name": "Pet Central",
      "opening_hours": "Mo-Fr 11:00-20:30; Sa 10:00-20:30; Su 12:00-19:00",
      "phone": "+1 212-867-8961",
      "shop": "pet",
      "website": "https://petcentralnyc.com"
    }
  },
  {
    "type": "node",
    "id": 5970480681,
    "lat": 40.6815669,
    "lon": -73.9964462,
    "tags": {
      "name": "Court Street Pet Food",
      "opening_hours": "Mo-Fr 10:00-21:00; Sa 10:00-20:00; Su 19:00-19:00",
      "phone": "+1-718-243-1919",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5978556758,
    "lat": 40.7189468,
    "lon": -73.9541416,
    "tags": {
      "name": "NYCPet",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 5978745699,
    "lat": 40.7074858,
    "lon": -74.0016542,
    "tags": {
      "name": "Seaport Paw",
      "shop": "pet",
      "wheelchair": "yes"
    }
  },
  {
    "type": "node",
    "id": 5984151028,
    "lat": 40.6645078,
    "lon": -73.9904002,
    "tags": {
      "atm": "yes",
      "delivery": "yes",
      "name": "Pet Boutique & Supplies",
      "phone": "+1-718-499-5400",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 6001514293,
    "lat": 40.8886077,
    "lon": -74.0406561,
    "tags": {
      "addr:city": "Hackensack",
      "addr:housenumber": "325",
      "addr:postcode": "07601",
      "addr:state": "NJ",
      "addr:street": "Main Street",
      "email": "barkingontheblvd@gmail.com",
      "name": "Barking On The Blvd",
      "opening_hours": "Mo-Sa 09:00-21:00; Su 10:00-18:00",
      "payment:cash": "yes",
      "payment:debit_cards": "yes",
      "payment:mastercard": "yes",
      "payment:visa": "yes",
      "phone": "+1-862-781-3121",
      "shop": "pet",
      "website": "https://www.barkingontheblvd.com/"
    }
  },
  {
    "type": "node",
    "id": 6037924849,
    "lat": 40.6610359,
    "lon": -73.9935347,
    "tags": {
      "name": "Slope Pet Food",
      "opening_hours": "Mo 09:00-21:00; Tu 09:00-20:30; We-Su 09:00-21:00",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 6039899819,
    "lat": 40.7425057,
    "lon": -73.9894157,
    "tags": {
      "addr:housenumber": "1107",
      "addr:postcode": "10010",
      "addr:street": "Broadway",
      "addr:unit": "101",
      "branch": "Flatiron",
      "brand": "PetSmart",
      "brand:wikidata": "Q3307147",
      "brand:wikipedia": "en:PetSmart",
      "name": "PetSmart",
      "opening_hours": "Mo-Sa 09:00-21:00; Su 10:00-19:00 open \"Store\" || Mo-Th 07:00-19:00; Fr, Sa 07:00-21:00; Su 08:00-18:00 open \"Grooming\"",
      "phone": "+1 646-949-1422",
      "ref": "3077",
      "shop": "pet",
      "website": "https://www.petsmart.com/store-locator/store/?storeID=3077"
    }
  },
  {
    "type": "node",
    "id": 6068993411,
    "lat": 40.7185985,
    "lon": -73.9452043,
    "tags": {
      "name": "Muddy Paws",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 6169675319,
    "lat": 40.7474027,
    "lon": -74.0008914,
    "tags": {
      "addr:housenumber": "231",
      "addr:postcode": "10001",
      "addr:street": "9th Avenue",
      "name": "Pet Central",
      "opening_hours": "Mo-Fr 11:00-20:30; Sa 10:00-20:30; Su 12:00-19:00",
      "phone": "+1 646-928-0157",
      "shop": "pet",
      "website": "https://petcentralnyc.com"
    }
  },
  {
    "type": "node",
    "id": 6293667226,
    "lat": 40.7206914,
    "lon": -73.9841203,
    "tags": {
      "delivery": "yes",
      "name": "Little Paws",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 6317407768,
    "lat": 40.7371243,
    "lon": -73.9900663,
    "tags": {
      "addr:housenumber": "860",
      "addr:postcode": "10013",
      "addr:street": "Broadway",
      "brand": "Petco",
      "brand:wikidata": "Q7171798",
      "brand:wikipedia": "en:Petco",
      "name": "Petco",
      "opening_hours": "Mo-Su 09:00-21:00",
      "phone": "+1 212-358-0692",
      "ref": "778",
      "shop": "pet",
      "website": "https://stores.petco.com/ny/newyork/pet-supplies-newyork-ny-778.html"
    }
  },
  {
    "type": "node",
    "id": 6374724263,
    "lat": 40.6889121,
    "lon": -73.9925616,
    "tags": {
      "name": "Beastly Bite",
      "opening_hours": "Mo-Sa 10:00-20:00; Su 10:00-19:00",
      "phone": "+1-718-522-5133",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 6426529062,
    "lat": 40.6752381,
    "lon": -73.9634413,
    "tags": {
      "delivery": "yes",
      "name": "Brooklyn Tails Pet Food",
      "phone": "+1-718-552-2001",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 6446720167,
    "lat": 40.68366,
    "lon": -74.0008888,
    "tags": {
      "delivery": "yes",
      "name": "Love Thy Pet",
      "opening_hours": "Mo-Fr 10:30-20:00; Sa 10:00-19:00; Su 10:00-18:00",
      "phone": "+1-718-596-2399",
      "shop": "pet",
      "website": "http://www.lovethypetbklyn.com"
    }
  },
  {
    "type": "node",
    "id": 6533165221,
    "lat": 40.8979928,
    "lon": -73.8670927,
    "tags": {
      "name": "National Pet Supply Inc.",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 6578915645,
    "lat": 40.6549892,
    "lon": -73.973549,
    "tags": {
      "name": "Animal Fare",
      "opening_hours": "We-Su 11:00-17:00",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 6672978330,
    "lat": 40.5454323,
    "lon": -74.1617526,
    "tags": {
      "addr:city": "Staten Island",
      "addr:housenumber": "4371",
      "addr:postcode": "10312",
      "addr:state": "NY",
      "addr:street": "Amboy Road",
      "name": "Arcadia Pets",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 6752564954,
    "lat": 40.7451608,
    "lon": -73.9908932,
    "tags": {
      "addr:housenumber": "776",
      "addr:postcode": "10001",
      "addr:street": "6th Avenue",
      "name": "Pet Central",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 6775487662,
    "lat": 40.5603715,
    "lon": -74.1687093,
    "tags": {
      "addr:city": "Staten Island",
      "addr:housenumber": "3241",
      "addr:postcode": "10312",
      "addr:state": "NY",
      "addr:street": "Richmond Avenue",
      "name": "Pet Oasis",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 6779611382,
    "lat": 40.7430433,
    "lon": -74.0294016,
    "tags": {
      "name": "Hoboken Pet",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 7007498321,
    "lat": 40.7735138,
    "lon": -73.953631,
    "tags": {
      "addr:city": "New York",
      "addr:housenumber": "318",
      "addr:postcode": "10075",
      "addr:state": "NY",
      "addr:street": "East 80th Street",
      "addr:unit": "3W",
      "description": "pet sitting services",
      "email": "info@nytails.com",
      "name": "NY Tails",
      "opening_hours": "Mo-Fr 09:00-18:00",
      "phone": "+1-646-2891760",
      "shop": "pet",
      "website": "https://www.nytails.com/"
    }
  },
  {
    "type": "node",
    "id": 7198788926,
    "lat": 40.673025,
    "lon": -73.9569584,
    "tags": {
      "name": "Beastie Bestie Pet Provisions",
      "opening_hours": "Mo-Fr 10:00-20:00; Sa 09:00-19:00; Su 10:00-18:00",
      "phone": "+1-718-975-1066",
      "shop": "pet",
      "website": "https://www.beastiebestie.com"
    }
  },
  {
    "type": "node",
    "id": 7679342635,
    "lat": 40.7423774,
    "lon": -74.0003584,
    "tags": {
      "addr:housenumber": "166",
      "addr:postcode": "10011",
      "addr:street": "8th Avenue",
      "level": "0",
      "name": "Citipups",
      "phone": "+1-888-400-0859",
      "shop": "pet",
      "website": "https://citipups.com"
    }
  },
  {
    "type": "node",
    "id": 7774783630,
    "lat": 40.5167914,
    "lon": -74.2425885,
    "tags": {
      "name": "Staten Island Companion Dog Training Club",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 8259046787,
    "lat": 40.5763124,
    "lon": -74.1643638,
    "tags": {
      "brand": "Petland Discounts",
      "brand:wikidata": "Q7178463",
      "brand:wikipedia": "en:Petland Discounts",
      "name": "Petland Discounts",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 8616334230,
    "lat": 40.6799247,
    "lon": -73.9643436,
    "tags": {
      "addr:housenumber": "620",
      "addr:postcode": "11238",
      "addr:street": "Washington Avenue",
      "delivery": "yes",
      "name": "Natty Pet Shop",
      "phone": "+1-718-975-4414",
      "shop": "pet",
      "website": "https://www.nattypetshop.com"
    }
  },
  {
    "type": "node",
    "id": 8695143164,
    "lat": 40.7368812,
    "lon": -73.9848111,
    "tags": {
      "addr:housenumber": "238",
      "addr:postcode": "10003",
      "addr:street": "3rd Avenue",
      "name": "Canis Minor",
      "opening_hours": "Mo-Sa 10:00-18:00; Su 11:00-18:00",
      "phone": "+1-212-228-4848",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 8726300015,
    "lat": 40.7509623,
    "lon": -73.893676,
    "tags": {
      "addr:housenumber": "72-09",
      "addr:postcode": "11372",
      "addr:street": "35th Avenue",
      "name": "Petista Spa",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 8769372817,
    "lat": 40.7178651,
    "lon": -74.0071513,
    "tags": {
      "name": "Pamper Ur Pets",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 8920738984,
    "lat": 40.7171357,
    "lon": -73.8355117,
    "tags": {
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 8969257191,
    "lat": 40.8841807,
    "lon": -73.8993818,
    "tags": {
      "brand": "Petco",
      "brand:wikidata": "Q7171798",
      "brand:wikipedia": "en:Petco",
      "internet_access": "wlan",
      "internet_access:fee": "no",
      "name": "Petco",
      "opening_hours": "Mo-Sa 09:00-20:00; Su 10:00-19:00",
      "phone": "+1-718-796-0604",
      "shop": "pet",
      "website": "https://stores.petco.com/ny/bronx/pet-supplies-bronx-ny-3751.html"
    }
  },
  {
    "type": "node",
    "id": 8981032238,
    "lat": 40.6158426,
    "lon": -74.031411,
    "tags": {
      "name": "Wagging Tails Pet Shop",
      "opening_hours": "Mo-Sa 09:30-20:00; Su 11:00-20:00",
      "phone": "+1-718-238-7904",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 9009287010,
    "lat": 40.8632809,
    "lon": -73.8345448,
    "tags": {
      "brand": "Petco",
      "brand:wikidata": "Q7171798",
      "brand:wikipedia": "en:Petco",
      "name": "Petco",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 9061954326,
    "lat": 40.890443,
    "lon": -74.2506926,
    "tags": {
      "addr:city": "Wayne",
      "addr:housenumber": "57",
      "addr:postcode": "07470",
      "addr:state": "NJ",
      "addr:street": "NJ-23",
      "name": "TagWorks",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 9234515082,
    "lat": 40.5814996,
    "lon": -73.9759695,
    "tags": {
      "addr:city": "Brooklyn",
      "addr:housenumber": "2916",
      "addr:postcode": "11224",
      "addr:state": "NY",
      "addr:street": "Shell Road",
      "air_conditioning": "yes",
      "level": "0",
      "name": "ProMaster Pet Store",
      "opening_hours": "Mo-Fr 10:00-21:00; Sa 11:00-21:00; Su 11:00-17:00",
      "phone": "+1-347-492-3377",
      "shop": "pet",
      "website": "https://promasterpet.com/",
      "wheelchair": "yes"
    }
  },
  {
    "type": "node",
    "id": 9330613466,
    "lat": 40.695227,
    "lon": -73.9953931,
    "tags": {
      "name": "Pet Emporium",
      "phone": "+1-718-624-2533",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 9354070832,
    "lat": 40.7298646,
    "lon": -73.8895543,
    "tags": {
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 9362317193,
    "lat": 40.7307063,
    "lon": -73.8874269,
    "tags": {
      "brand": "Pet Supplies Plus",
      "brand:wikidata": "Q7171563",
      "brand:wikipedia": "en:Pet Supplies Plus",
      "name": "Pet Supplies Plus",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 9431874772,
    "lat": 40.6416818,
    "lon": -74.0172371,
    "tags": {
      "delivery": "yes",
      "name": "Pet Centro",
      "phone": "+1-347-889-6012",
      "shop": "pet"
    }
  },
  {
    "type": "node",
    "id": 9512186336,
    "lat": 40.6885433,
    "lon": -73.9552822,
    "tags": {
      "addr:housenumber": "228",
      "addr:postcode": "11216",
      "addr:street": "Clifton Place",
      "name": "Mr. Friendly",
      "opening_hours": "Mo 12:00-18:00; Tu-Sa 11:00-19:00; Su 12:00-18:00",
      "phone": "+1-718-489-3575",
      "shop": "pet",
      "website": "https://mrfriendly.nyc"
    }
  }
];
