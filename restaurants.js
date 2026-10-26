// Backup copy of the list. Once the Google Sheet is connected (see README), the site reads the Sheet instead
// and this file is only used if the Sheet can’t be reached.
// status: been | want | closed | maybe-closed      tag: fave | skip | ""
// category: American | Italian & European | Mediterranean & Latin | Japanese | Chinese, Korean & SE Asian | Dessert & Bars
// price: 1-4   ratings: 0-5 (halves OK) for food, value, vibe, service   lastVisited: e.g. "2024" or "Oct 2024"
// reserve: {url, via, note?}  via = OpenTable | Resy | Tock | SevenRooms | Website | Phone | Walk-in
const RESTAURANTS = [
  {
    "name": "Aba",
    "status": "been",
    "tag": "fave",
    "category": "Mediterranean & Latin",
    "type": "Mediterranean",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 5,
      "value": 4,
      "vibe": 5,
      "service": 4
    },
    "lastVisited": "2026",
    "notes": [
      "Amazing ambience; the rooftop bar is extremely pretty",
      "Must-try: crispy short rib hummus, smoked salmon bread & Jerusalem bagel"
    ],
    "address": "302 N Green St",
    "lat": 41.88736,
    "lng": -87.64792,
    "reserve": {
      "url": "https://www.opentable.com/r/aba-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Ema",
    "status": "been",
    "tag": "",
    "category": "Mediterranean & Latin",
    "type": "Mediterranean",
    "neighborhood": "River North",
    "price": 2,
    "ratings": {
      "food": 3.5,
      "value": 4,
      "vibe": 4,
      "service": 3
    },
    "lastVisited": "2022",
    "notes": [
      "The chicken kebab was meh, but pretty good overall!"
    ],
    "address": "74 W Illinois St",
    "lat": 41.89094,
    "lng": -87.62959,
    "reserve": {
      "url": "https://www.opentable.com/r/ema-river-north-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Avec",
    "status": "been",
    "tag": "",
    "category": "Mediterranean & Latin",
    "type": "Mediterranean",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 4.5,
      "value": 4,
      "vibe": 4,
      "service": 3
    },
    "lastVisited": "2023",
    "notes": [
      "Could go every day for the Medjool dates. Don't get the focaccia… I regret it every time"
    ],
    "address": "615 W Randolph St",
    "lat": 41.88461,
    "lng": -87.64268,
    "reserve": {
      "url": "https://www.exploretock.com/avec",
      "via": "Tock"
    }
  },
  {
    "name": "Tanta",
    "status": "been",
    "tag": "",
    "category": "Mediterranean & Latin",
    "type": "Peruvian",
    "neighborhood": "River North",
    "price": 3,
    "ratings": {
      "food": 4,
      "value": 3.5,
      "vibe": 4,
      "service": 3
    },
    "lastVisited": "2023",
    "notes": [
      "Peruvian! Pretty good all around"
    ],
    "address": "118 W Grand Ave",
    "lat": 41.89149,
    "lng": -87.63065,
    "reserve": {
      "url": "https://www.opentable.com/r/tanta-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Beatnik on the River",
    "status": "been",
    "tag": "",
    "category": "Mediterranean & Latin",
    "type": "Mediterranean",
    "neighborhood": "Loop",
    "price": 3,
    "ratings": {
      "food": 4,
      "value": 3.5,
      "vibe": 4.5,
      "service": 3
    },
    "lastVisited": "2022",
    "notes": [
      "Authentic Mediterranean"
    ],
    "address": "180 N Upper Wacker Dr",
    "lat": 41.88522,
    "lng": -87.6372,
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/beatnik-on-the-river",
      "via": "Resy"
    }
  },
  {
    "name": "Staropolska",
    "status": "been",
    "tag": "",
    "category": "Italian & European",
    "type": "Polish",
    "neighborhood": "Avondale",
    "price": 2,
    "ratings": {
      "food": 4.5,
      "value": 5,
      "vibe": 3,
      "service": 2.5
    },
    "lastVisited": "2021",
    "notes": [
      "Far from downtown Chi, but really good Polish food! Get the family dinner if you can"
    ],
    "address": "3030 N Milwaukee Ave",
    "lat": 41.9367,
    "lng": -87.7076,
    "reserve": {
      "url": "https://www.opentable.com/r/staropolska-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Tomate",
    "status": "been",
    "tag": "fave",
    "category": "Mediterranean & Latin",
    "type": "Mexican",
    "neighborhood": "Evanston",
    "price": 1,
    "ratings": {
      "food": 5,
      "value": 5,
      "vibe": 2,
      "service": 3
    },
    "lastVisited": "2022",
    "notes": [
      "Take-out only!! Best burritos ever, my death row meal (and I don't even like burritos). The only con is that it's in Evanston."
    ],
    "address": "914 Noyes St, Evanston",
    "lat": 42.0583,
    "lng": -87.684,
    "reserve": {
      "url": "https://www.tomatefreshkitchen.com/",
      "via": "Walk-in",
      "note": "Takeout only"
    }
  },
  {
    "name": "Bistro Campagne",
    "status": "been",
    "tag": "",
    "category": "Italian & European",
    "type": "French",
    "neighborhood": "Lincoln Square",
    "price": 3,
    "ratings": {
      "food": 4,
      "value": 4,
      "vibe": 5,
      "service": 3
    },
    "lastVisited": "2023",
    "notes": [
      "V cute and cozy vibe! Their fried onions are good, and all the entrées are very solid"
    ],
    "address": "4518 N Lincoln Ave",
    "lat": 41.9638,
    "lng": -87.6857,
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/bistro-campagne",
      "via": "Resy"
    }
  },
  {
    "name": "Pequod's",
    "status": "been",
    "tag": "",
    "category": "Italian & European",
    "type": "Pizza",
    "neighborhood": "Lincoln Park",
    "price": 2,
    "ratings": {
      "food": 5,
      "value": 5,
      "vibe": 3,
      "service": 2.5
    },
    "lastVisited": "2026",
    "notes": [
      "The best deep dish pizza in the world. DO NOT GO TO GIORDANO'S OR LOU'S. THEY ARE A SCAM.",
      "Don't forget to get extra sauce & cheese"
    ],
    "address": "2207 N Clybourn Ave",
    "lat": 41.92195,
    "lng": -87.66415,
    "reserve": {
      "url": "https://www.exploretock.com/pequodspizza",
      "via": "Tock"
    }
  },
  {
    "name": "Girl & the Goat",
    "status": "been",
    "tag": "",
    "category": "American",
    "type": "American",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 4.5,
      "value": 3.5,
      "vibe": 4,
      "service": 3
    },
    "lastVisited": "2023",
    "notes": [
      "Another one of my favorites! Good dishes all around."
    ],
    "address": "809 W Randolph St",
    "lat": 41.88461,
    "lng": -87.64737,
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/girl-and-the-goat-chicago",
      "via": "Resy"
    }
  },
  {
    "name": "3 Arts Club Cafe",
    "status": "been",
    "tag": "",
    "category": "American",
    "type": "American",
    "neighborhood": "Gold Coast",
    "price": 2,
    "ratings": {
      "food": 3,
      "value": 3,
      "vibe": 5,
      "service": 3
    },
    "lastVisited": "2025",
    "notes": [
      "Must take pics here! Check out the furniture store it's connected to (Restoration Hardware)",
      "The food itself is OK. Decent lobster roll. Prettier for brunch than dinner"
    ],
    "address": "1300 N Dearborn St",
    "lat": 41.90541,
    "lng": -87.62867,
    "reserve": {
      "url": "https://www.opentable.com/r/3-arts-club-cafe-at-rh-chicago",
      "via": "OpenTable",
      "note": "Book well ahead"
    }
  },
  {
    "name": "Bavette's Bar & Boeuf",
    "status": "been",
    "tag": "",
    "category": "American",
    "type": "Steakhouse",
    "neighborhood": "River North",
    "price": 4,
    "ratings": {
      "food": 5,
      "value": 3.5,
      "vibe": 4.5,
      "service": 4.5
    },
    "lastVisited": "2023",
    "notes": [
      "Bomb steak; the mashed potatoes go really well with it"
    ],
    "address": "218 W Kinzie St",
    "lat": 41.88913,
    "lng": -87.63307,
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/bavettes-bar-and-boeuf",
      "via": "Resy"
    }
  },
  {
    "name": "Il Porcellino",
    "status": "been",
    "tag": "",
    "category": "Italian & European",
    "type": "Italian",
    "neighborhood": "River North",
    "price": 2,
    "ratings": {
      "food": 3.5,
      "value": 4,
      "vibe": 3.5,
      "service": 4
    },
    "lastVisited": "2022",
    "notes": [
      "Pretty good Italian! Nothing out of the ordinary"
    ],
    "address": "59 W Hubbard St",
    "lat": 41.88968,
    "lng": -87.62923,
    "reserve": {
      "url": "https://www.opentable.com/il-porcellino-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Gilt Bar",
    "status": "been",
    "tag": "fave",
    "category": "American",
    "type": "American",
    "neighborhood": "River North",
    "price": 3,
    "ratings": {
      "food": 4,
      "value": 4.5,
      "vibe": 4.5,
      "service": 3
    },
    "lastVisited": "2022",
    "notes": [
      "Sister restaurant to Ciccio Mio; the vibe is pretty similar",
      "6 out of 5 stars for the ambiance & truffle mozz sticks",
      "Try to catch their happy hour to get the most out of your $$"
    ],
    "address": "230 W Kinzie St",
    "lat": 41.88921,
    "lng": -87.63341,
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/gilt-bar",
      "via": "Resy"
    }
  },
  {
    "name": "Ciccio Mio",
    "status": "been",
    "tag": "fave",
    "category": "Italian & European",
    "type": "Italian",
    "neighborhood": "River North",
    "price": 3,
    "ratings": {
      "food": 4,
      "value": 4,
      "vibe": 4.5,
      "service": 3
    },
    "lastVisited": "2022",
    "notes": [
      "Sister restaurant to Gilt Bar; the vibe is pretty similar",
      "6 out of 5 stars for the ambiance & truffle mozz sticks"
    ],
    "address": "226 W Kinzie St",
    "lat": 41.88906,
    "lng": -87.63322,
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/ciccio-mio",
      "via": "Resy",
      "note": "Opens 21 days out at 9am"
    }
  },
  {
    "name": "North Pond",
    "status": "been",
    "tag": "",
    "category": "American",
    "type": "Fine Dining",
    "neighborhood": "Lincoln Park",
    "price": 4,
    "ratings": {
      "food": 5,
      "value": 2,
      "vibe": 5,
      "service": 5
    },
    "lastVisited": "2021",
    "notes": [
      "The restaurant's right next to the lake, so the view is amazing",
      "Excellent food, service, and wine pairing",
      "Major con: $$$$$$$$. Expect to spend $200/person. Extremely special occasions only."
    ],
    "address": "2610 N Cannon Dr",
    "lat": 41.92955,
    "lng": -87.637,
    "reserve": {
      "url": "https://www.exploretock.com/northpond",
      "via": "Tock"
    }
  },
  {
    "name": "The Purple Pig",
    "status": "been",
    "tag": "",
    "category": "Mediterranean & Latin",
    "type": "Mediterranean",
    "neighborhood": "Streeterville",
    "price": 2,
    "ratings": {
      "food": 3,
      "value": 3,
      "vibe": 3,
      "service": 2.5
    },
    "lastVisited": "2021",
    "notes": [
      "Used to be a Chicago staple. Personally I think it's meh, but worth checking out ig"
    ],
    "address": "444 N Michigan Ave",
    "lat": 41.8907,
    "lng": -87.6243,
    "reserve": {
      "url": "https://www.sevenrooms.com/explore/thepurplepigchicago/reservations/create/search/",
      "via": "SevenRooms"
    }
  },
  {
    "name": "The Signature Room",
    "status": "closed",
    "tag": "",
    "category": "American",
    "type": "American",
    "neighborhood": "Streeterville",
    "price": 4,
    "ratings": {
      "food": 3.5,
      "value": 2.5,
      "vibe": 5,
      "service": 3
    },
    "lastVisited": "2020",
    "notes": [
      "You can use the wine bar right next to the restaurant while you're on the waitlist!",
      "Amazing view, obviously (it's on the 95th floor). Snag a window seat."
    ],
    "address": "875 N Michigan Ave (95th fl)",
    "lat": 41.89885,
    "lng": -87.6229,
    "reserve": null
  },
  {
    "name": "Roister",
    "status": "closed",
    "tag": "",
    "category": "American",
    "type": "American",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 3,
      "value": 3,
      "vibe": 3.5,
      "service": 2
    },
    "lastVisited": "2021",
    "notes": [
      "Typical Southern/Midwestern food? Not amazing, but try the chicken sandwich on the brunch menu"
    ],
    "address": "951 W Fulton Market",
    "lat": 41.88733,
    "lng": -87.6508,
    "reserve": null
  },
  {
    "name": "Au Cheval",
    "status": "been",
    "tag": "",
    "category": "American",
    "type": "Burgers",
    "neighborhood": "West Loop",
    "price": 2,
    "ratings": {
      "food": 4.5,
      "value": 4,
      "vibe": 3.5,
      "service": 3.5
    },
    "lastVisited": "2026",
    "notes": [
      "Quality burger. Personally it’s a bit too much for me with the fried egg and everything. Jonathan thinks it’s the best burger in the world, though.",
      "The fries with garlic aioli are fantastic"
    ],
    "address": "800 W Randolph St (also Small Cheval)",
    "lat": 41.88454,
    "lng": -87.64715,
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/au-cheval-chicago",
      "via": "Resy",
      "note": "Mostly walk-in; few Resy slots"
    }
  },
  {
    "name": "The Gage",
    "status": "been",
    "tag": "",
    "category": "American",
    "type": "American",
    "neighborhood": "Loop",
    "price": 3,
    "ratings": {
      "food": 3,
      "value": 3,
      "vibe": 3.5,
      "service": 3.5
    },
    "lastVisited": "2023",
    "notes": [
      "Pretty typical American food"
    ],
    "address": "24 S Michigan Ave",
    "lat": 41.8814,
    "lng": -87.6246,
    "reserve": {
      "url": "https://www.opentable.com/r/the-gage-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Alla Vita",
    "status": "been",
    "tag": "fave",
    "category": "Italian & European",
    "type": "Italian",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 4.5,
      "value": 4,
      "vibe": 5,
      "service": 4
    },
    "lastVisited": "2024",
    "notes": [
      "GREAT atmosphere",
      "BOMBASS pizza crust"
    ],
    "address": "564 W Randolph St",
    "lat": 41.88461,
    "lng": -87.64144,
    "reserve": {
      "url": "https://www.opentable.com/r/alla-vita-chicago",
      "via": "OpenTable",
      "note": "Opens 60 days out"
    }
  },
  {
    "name": "Smyth",
    "status": "been",
    "tag": "",
    "category": "American",
    "type": "Fine Dining",
    "neighborhood": "West Loop",
    "price": 4,
    "ratings": {
      "food": 3.5,
      "value": 2,
      "vibe": 4,
      "service": 5
    },
    "lastVisited": "2026",
    "notes": [
      "$$$$$$$$$. But amazing service. The food was a little too savory for me overall.",
      "2026 update: Huge upgrade since it got its third Michelin star. I heard the head chef spent some time in Japan, and I think that really took things to another level. IT’S SO GOOD NOW."
    ],
    "address": "177 N Ada St",
    "lat": 41.8851,
    "lng": -87.65924,
    "reserve": {
      "url": "https://www.exploretock.com/smyth/",
      "via": "Tock",
      "note": "Prepaid"
    }
  },
  {
    "name": "S.K.Y.",
    "status": "been",
    "tag": "",
    "category": "American",
    "type": "Fusion",
    "neighborhood": "Lincoln Park",
    "price": 3,
    "ratings": {
      "food": 4,
      "value": 3.5,
      "vibe": 4.5,
      "service": 4
    },
    "lastVisited": "2022",
    "notes": [
      "Korean/Mexican/American fusion? Hip place with good ambiance. Really good amuse-bouche lol."
    ],
    "address": "2300 N Lincoln Park W (moved from Pilsen in 2025)",
    "lat": 41.9233,
    "lng": -87.6372,
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/s-k-y",
      "via": "Resy"
    }
  },
  {
    "name": "Pizzeria Portofino",
    "status": "been",
    "tag": "",
    "category": "Italian & European",
    "type": "Italian",
    "neighborhood": "River North",
    "price": 2,
    "ratings": {
      "food": 2.5,
      "value": 3,
      "vibe": 5,
      "service": 3.5
    },
    "lastVisited": "2023",
    "notes": [
      "The food is honestly just meh. But super cute vibe; their patio is insta-worthy if you're into that stuff"
    ],
    "address": "317 N Clark St (Wolf Point)",
    "lat": 41.8871,
    "lng": -87.6366,
    "reserve": {
      "url": "https://www.opentable.com/r/pizzeria-portofino-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Oriole",
    "status": "been",
    "tag": "fave",
    "category": "American",
    "type": "Fine Dining",
    "neighborhood": "West Loop",
    "price": 4,
    "ratings": {
      "food": 5,
      "value": 3,
      "vibe": 4.5,
      "service": 5
    },
    "lastVisited": "2024",
    "notes": [
      "Michelin 2-star. Jaw-dropping food. Performative but not super experimental, just legit good food."
    ],
    "address": "661 W Walnut St",
    "lat": 41.88642,
    "lng": -87.64379,
    "reserve": {
      "url": "https://www.exploretock.com/oriolechicago/",
      "via": "Tock",
      "note": "Prepaid"
    }
  },
  {
    "name": "Geja's Cafe",
    "status": "been",
    "tag": "",
    "category": "Italian & European",
    "type": "Fondue",
    "neighborhood": "Lincoln Park",
    "price": 3,
    "ratings": {
      "food": 4,
      "value": 3,
      "vibe": 5,
      "service": 4
    },
    "lastVisited": "2021",
    "notes": [
      "Fondue dinner. Super romantic atmosphere! There's an old man who plays guitar in the corner."
    ],
    "address": "340 W Armitage Ave",
    "lat": 41.91807,
    "lng": -87.63602,
    "reserve": {
      "url": "https://www.opentable.com/r/gejas-cafe-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "RPM Steak",
    "status": "been",
    "tag": "",
    "category": "American",
    "type": "Steakhouse",
    "neighborhood": "River North",
    "price": 4,
    "ratings": {
      "food": 4.5,
      "value": 3,
      "vibe": 4,
      "service": 4.5
    },
    "lastVisited": "2023",
    "notes": [
      "Good steak & Italian all around.",
      "Must get the Baked Alaska for dessert. It's an ice cream cake covered in marshmallow, and they torch it right in front of you. It's pretty amazing."
    ],
    "address": "66 W Kinzie St",
    "lat": 41.88913,
    "lng": -87.6294,
    "reserve": {
      "url": "https://www.opentable.com/rpm-steak",
      "via": "OpenTable"
    }
  },
  {
    "name": "Cobblestone",
    "status": "been",
    "tag": "",
    "category": "Italian & European",
    "type": "European",
    "neighborhood": "North Center",
    "price": 2,
    "ratings": {
      "food": 3,
      "value": 3,
      "vibe": 3.5,
      "service": 4
    },
    "lastVisited": "2022",
    "notes": [
      "\"European\"-inspired bistro. Good service, and the restaurant is v cute.",
      "I'd give it 3 out of 5 stars because of hygiene, though (there were crumbs on the seats and the table, and the plates were a bit dirty…)"
    ],
    "address": "4337 N Lincoln Ave",
    "lat": 41.9605,
    "lng": -87.6825,
    "reserve": {
      "url": "https://www.opentable.com/r/cobblestone-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Summer House Santa Monica",
    "status": "been",
    "tag": "",
    "category": "American",
    "type": "American",
    "neighborhood": "Lincoln Park",
    "price": 2,
    "ratings": {
      "food": 3,
      "value": 3,
      "vibe": 3.5,
      "service": 3
    },
    "lastVisited": "2022",
    "notes": [
      "Cute brunch place; feels slightly fratty, and the food is OK.",
      "I'd rather go to the 3 Arts Club Cafe for this kind of vibe, but it's still a good place to hang out with friends"
    ],
    "address": "1954 N Halsted St",
    "lat": 41.91724,
    "lng": -87.64715,
    "reserve": {
      "url": "https://www.opentable.com/r/summer-house-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Sepia",
    "status": "been",
    "tag": "",
    "category": "American",
    "type": "Fine Dining",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 5,
      "value": 4.5,
      "vibe": 4,
      "service": 4.5
    },
    "lastVisited": "2025",
    "notes": [
      "OMG so good; decent price for a Michelin restaurant"
    ],
    "address": "123 N Jefferson St",
    "lat": 41.88412,
    "lng": -87.64231,
    "reserve": {
      "url": "https://www.opentable.com/r/sepia-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Ella Elli",
    "status": "been",
    "tag": "skip",
    "category": "American",
    "type": "American",
    "neighborhood": "Lakeview",
    "price": 3,
    "ratings": {
      "food": 2.5,
      "value": 2.5,
      "vibe": 3.5,
      "service": 3
    },
    "lastVisited": "2025",
    "notes": [
      "(Do not recommend) I went during Restaurant Week, so I might be a bit biased",
      "Aba's crispy brussels sprouts are better",
      "The mushroom gnocchi isn't as heavy & creamy as other gnocchi (which I liked), but it was also a tad too watery"
    ],
    "address": "1349 W Cornelia Ave",
    "lat": 41.9452,
    "lng": -87.66043,
    "reserve": {
      "url": "https://www.exploretock.com/ellaelli/",
      "via": "Tock"
    }
  },
  {
    "name": "Apolonia",
    "status": "been",
    "tag": "",
    "category": "American",
    "type": "American",
    "neighborhood": "South Loop",
    "price": 3,
    "ratings": {
      "food": 4.5,
      "value": 3.5,
      "vibe": 4,
      "service": 4
    },
    "lastVisited": "2025",
    "notes": [
      "OK, go during the Christmas season, because the steak on their Christmas menu is AMAZAZING",
      "Other dishes are solid too"
    ],
    "address": "2201 S Michigan Ave",
    "lat": 41.853,
    "lng": -87.6237,
    "reserve": {
      "url": "https://www.opentable.com/r/apolonia-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Rose Mary",
    "status": "been",
    "tag": "fave",
    "category": "Italian & European",
    "type": "Italian",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 5,
      "value": 4,
      "vibe": 4.5,
      "service": 4.5
    },
    "lastVisited": "2025",
    "notes": [
      "Prob my favorite of the restaurants I've been to recently"
    ],
    "address": "932 W Fulton Market",
    "lat": 41.88733,
    "lng": -87.65034,
    "reserve": {
      "url": "https://www.sevenrooms.com/explore/rosemary/reservations/create/search/",
      "via": "SevenRooms",
      "note": "Opens 30 days out, goes fast"
    }
  },
  {
    "name": "Boka",
    "status": "been",
    "tag": "",
    "category": "American",
    "type": "Fine Dining",
    "neighborhood": "Lincoln Park",
    "price": 4,
    "ratings": {
      "food": 3.5,
      "value": 3,
      "vibe": 4,
      "service": 4
    },
    "lastVisited": "2025",
    "notes": [
      "Nothing too memorable, overall pretty decent"
    ],
    "address": "1729 N Halsted St",
    "lat": 41.91317,
    "lng": -87.64715,
    "reserve": {
      "url": "https://www.opentable.com/r/boka-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Maple & Ash",
    "status": "been",
    "tag": "",
    "category": "American",
    "type": "Steakhouse",
    "neighborhood": "Gold Coast",
    "price": 4,
    "ratings": {
      "food": 4.5,
      "value": 3,
      "vibe": 4.5,
      "service": 5
    },
    "lastVisited": "2024",
    "notes": [
      "Personally, I prefer their steak over Prime & Provisions. They treat you like you're important"
    ],
    "address": "8 W Maple St",
    "lat": 41.90053,
    "lng": -87.62799,
    "reserve": {
      "url": "https://www.sevenrooms.com/landing/mapleandashchicagodiningroom",
      "via": "SevenRooms"
    }
  },
  {
    "name": "Esmé",
    "status": "been",
    "tag": "",
    "category": "American",
    "type": "Fine Dining",
    "neighborhood": "Lincoln Park",
    "price": 4,
    "ratings": {
      "food": 4.5,
      "value": 3,
      "vibe": 5,
      "service": 4.5
    },
    "lastVisited": "2025",
    "notes": [
      "They collaborate with local Chicago artists for their menu! Really cool dining experience"
    ],
    "address": "2200 N Clark St",
    "lat": 41.9216,
    "lng": -87.6375,
    "reserve": {
      "url": "https://www.exploretock.com/esme-chicago/",
      "via": "Tock"
    }
  },
  {
    "name": "Le Colonial",
    "status": "been",
    "tag": "",
    "category": "Chinese, Korean & SE Asian",
    "type": "Vietnamese",
    "neighborhood": "Gold Coast",
    "price": 3,
    "ratings": {
      "food": 3.5,
      "value": 3.5,
      "vibe": 4.5,
      "service": 4
    },
    "lastVisited": "2026",
    "notes": [
      "Vietnamese, cute vibe"
    ],
    "address": "57 E Oak St",
    "lat": 41.89999,
    "lng": -87.62642,
    "reserve": {
      "url": "https://www.opentable.com/r/le-colonial-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Cocoro",
    "status": "been",
    "tag": "fave",
    "category": "Japanese",
    "type": "Japanese",
    "neighborhood": "River North",
    "price": 2,
    "ratings": {
      "food": 4.5,
      "value": 4.5,
      "vibe": 3.5,
      "service": 4
    },
    "lastVisited": "2026",
    "notes": [
      "The BEST Japanese comfort food in Chi (imo).",
      "Try the sukiyaki if you can! (they tend to run out pretty quickly)"
    ],
    "address": "668 N Wells St",
    "lat": 41.89398,
    "lng": -87.63264,
    "reserve": {
      "url": "https://cocorosushi.squarespace.com/",
      "via": "Phone",
      "note": "Call 312-943-2220"
    }
  },
  {
    "name": "High Five Ramen",
    "status": "been",
    "tag": "",
    "category": "Japanese",
    "type": "Ramen",
    "neighborhood": "West Loop",
    "price": 1,
    "ratings": {
      "food": 4,
      "value": 4,
      "vibe": 3.5,
      "service": 3
    },
    "lastVisited": "2020",
    "notes": [
      "Ramen in the dark"
    ],
    "address": "112 N Green St (basement)",
    "lat": 41.88393,
    "lng": -87.64792,
    "reserve": {
      "url": "https://www.highfiveramen.com/",
      "via": "Walk-in",
      "note": "Waitlist only"
    }
  },
  {
    "name": "Sunda",
    "status": "been",
    "tag": "",
    "category": "Chinese, Korean & SE Asian",
    "type": "Asian Fusion",
    "neighborhood": "River North",
    "price": 3,
    "ratings": {
      "food": 3.5,
      "value": 3.5,
      "vibe": 4,
      "service": 3.5
    },
    "lastVisited": "2024",
    "notes": [
      "Asian fusion~"
    ],
    "address": "110 W Illinois St",
    "lat": 41.89094,
    "lng": -87.63046,
    "reserve": {
      "url": "https://www.opentable.com/r/sunda-new-asian-river-north-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Roka Akor",
    "status": "been",
    "tag": "",
    "category": "Japanese",
    "type": "Japanese",
    "neighborhood": "River North",
    "price": 4,
    "ratings": {
      "food": 3.5,
      "value": 3,
      "vibe": 4,
      "service": 3.5
    },
    "lastVisited": "2021",
    "notes": [
      "Asian fusion~"
    ],
    "address": "456 N Clark St",
    "lat": 41.89015,
    "lng": -87.63022,
    "reserve": {
      "url": "https://www.opentable.com/r/roka-akor-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "RPM Seafood",
    "status": "been",
    "tag": "",
    "category": "American",
    "type": "Seafood",
    "neighborhood": "River North",
    "price": 4,
    "ratings": {
      "food": 4,
      "value": 3,
      "vibe": 4.5,
      "service": 4
    },
    "lastVisited": "2022",
    "notes": [
      "Outdoor seating along the river"
    ],
    "address": "317 N Clark St",
    "lat": 41.88745,
    "lng": -87.635,
    "reserve": {
      "url": "https://www.opentable.com/r/rpm-seafood-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Momotaro",
    "status": "been",
    "tag": "",
    "category": "Japanese",
    "type": "Japanese",
    "neighborhood": "West Loop",
    "price": 4,
    "ratings": {
      "food": 5,
      "value": 3,
      "vibe": 4.5,
      "service": 4.5
    },
    "lastVisited": "2024",
    "notes": [
      "Highly rec Momotaro if I had to choose one (vs. Arami). Probably the best sushi in the Chicago area. $$$$ though"
    ],
    "address": "820 W Lake St",
    "lat": 41.88552,
    "lng": -87.64763,
    "reserve": {
      "url": "https://www.opentable.com/r/momotaro-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Arami",
    "status": "closed",
    "tag": "",
    "category": "Japanese",
    "type": "Japanese",
    "neighborhood": "West Town",
    "price": 3,
    "ratings": {
      "food": 4,
      "value": 3.5,
      "vibe": 4,
      "service": 4
    },
    "lastVisited": "2021",
    "notes": [
      "Good sushi, but if I had to choose one I'd go to Momotaro"
    ],
    "address": "1829 W Chicago Ave",
    "lat": 41.89637,
    "lng": -87.67204,
    "reserve": null
  },
  {
    "name": "Gaijin",
    "status": "been",
    "tag": "",
    "category": "Japanese",
    "type": "Japanese",
    "neighborhood": "West Loop",
    "price": 2,
    "ratings": {
      "food": 4,
      "value": 4,
      "vibe": 3.5,
      "service": 3.5
    },
    "lastVisited": "2025",
    "notes": [
      "Solid okonomiyaki"
    ],
    "address": "950 W Monroe St",
    "lat": 41.8806,
    "lng": -87.6508,
    "reserve": {
      "url": "https://www.opentable.com/r/gaijin-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Minghin Cuisine",
    "status": "been",
    "tag": "",
    "category": "Chinese, Korean & SE Asian",
    "type": "Chinese",
    "neighborhood": "Chinatown",
    "price": 2,
    "ratings": {
      "food": 3.5,
      "value": 4.5,
      "vibe": 3,
      "service": 3
    },
    "lastVisited": "2025",
    "notes": [
      "Pretty good Chinese restaurant, multiple locations around Chicago!"
    ],
    "address": "2168 S Archer Ave",
    "lat": 41.85395,
    "lng": -87.6324,
    "reserve": {
      "url": "https://www.minghincuisine.com/chinatown",
      "via": "Phone",
      "note": "Call 312-808-1999"
    }
  },
  {
    "name": "Lao Sze Chuan",
    "status": "been",
    "tag": "",
    "category": "Chinese, Korean & SE Asian",
    "type": "Chinese",
    "neighborhood": "Chinatown",
    "price": 2,
    "ratings": {
      "food": 3,
      "value": 4.5,
      "vibe": 3,
      "service": 3
    },
    "lastVisited": "2022",
    "notes": [
      "Pretty good Chinese restaurant, multiple locations around Chicago!"
    ],
    "address": "2172 S Archer Ave",
    "lat": 41.8538,
    "lng": -87.633,
    "reserve": {
      "url": "https://www.laoszechuanusa.com/",
      "via": "Phone",
      "note": "Call 312-326-3888"
    }
  },
  {
    "name": "Friends Station",
    "status": "maybe-closed",
    "tag": "skip",
    "category": "Chinese, Korean & SE Asian",
    "type": "Hot Pot",
    "neighborhood": "River North",
    "price": 2,
    "ratings": {
      "food": 3,
      "value": 4,
      "vibe": 3.5,
      "service": 3
    },
    "lastVisited": "2023",
    "notes": [
      "All-you-can-eat hotpot!! You pick any toppings you want off a conveyor belt, like at a sushi bar",
      "2023 update: it's not as good as it used to be, prob won't go again"
    ],
    "address": "800 N State St",
    "lat": 41.89637,
    "lng": -87.6278,
    "reserve": {
      "url": "https://www.friendsstation.com/",
      "via": "Walk-in"
    }
  },
  {
    "name": "Sushi Plus",
    "status": "been",
    "tag": "",
    "category": "Japanese",
    "type": "Japanese",
    "neighborhood": "Chinatown",
    "price": 2,
    "ratings": {
      "food": 4.5,
      "value": 4.5,
      "vibe": 3.5,
      "service": 3.5
    },
    "lastVisited": "2026",
    "notes": [
      "An actual rotary sushi bar",
      "It's dang good!"
    ],
    "address": "2131 S Archer Ave",
    "lat": 41.8546,
    "lng": -87.6317,
    "reserve": {
      "url": "https://www.rotarysushi.com/",
      "via": "Walk-in"
    }
  },
  {
    "name": "Cho Sun Ok",
    "status": "been",
    "tag": "",
    "category": "Chinese, Korean & SE Asian",
    "type": "Korean",
    "neighborhood": "North Center",
    "price": 2,
    "ratings": {
      "food": 4,
      "value": 4.5,
      "vibe": 2.5,
      "service": 3
    },
    "lastVisited": "2024",
    "notes": [
      "They don't take reservations, so expect to wait in line at lunch/dinner time",
      "The place is pretty small and can get crowded",
      "The only Korean restaurant that's actually pretty close to downtown Chi. Well, there's also… Perilla"
    ],
    "address": "4200 N Lincoln Ave",
    "lat": 41.9585,
    "lng": -87.6815,
    "reserve": {
      "url": "http://chosunokrestaurant.com/",
      "via": "Walk-in",
      "note": "No reservations"
    }
  },
  {
    "name": "Perilla Korean American Fare",
    "status": "been",
    "tag": "",
    "category": "Chinese, Korean & SE Asian",
    "type": "Korean",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 4,
      "value": 2,
      "vibe": 3,
      "service": 4
    },
    "lastVisited": "2023",
    "notes": [
      "Doesn't really feel like authentic Korean to me. Incredibly overpriced. Their KBBQ is still great though!"
    ],
    "address": "401 N Milwaukee Ave",
    "lat": 41.88936,
    "lng": -87.64451,
    "reserve": {
      "url": "https://www.opentable.com/r/perilla-korean-american-fare-reservations-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "TAK Korean Bistro & Karaoke",
    "status": "been",
    "tag": "",
    "category": "Chinese, Korean & SE Asian",
    "type": "Korean",
    "neighborhood": "South Loop",
    "price": 3,
    "ratings": {
      "food": 4,
      "value": 3.5,
      "vibe": 2.5,
      "service": 3.5
    },
    "lastVisited": "2025",
    "notes": [
      "Can't say I'm a fan of the ambience (dark, loud music) but their food is solid",
      "They also have karaoke"
    ],
    "address": "1132 S Wabash Ave",
    "lat": 41.8685,
    "lng": -87.626,
    "reserve": {
      "url": "https://www.opentable.com/r/tak-korean-bistro-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Duck Duck Goat",
    "status": "been",
    "tag": "",
    "category": "Chinese, Korean & SE Asian",
    "type": "Chinese",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 4.5,
      "value": 3.5,
      "vibe": 4,
      "service": 4
    },
    "lastVisited": "2022",
    "notes": [
      "PEKING DUCK"
    ],
    "address": "857 W Fulton Market",
    "lat": 41.88733,
    "lng": -87.64853,
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/duck-duck-goat",
      "via": "Resy"
    }
  },
  {
    "name": "Sun Wah BBQ",
    "status": "been",
    "tag": "",
    "category": "Chinese, Korean & SE Asian",
    "type": "Chinese",
    "neighborhood": "Uptown",
    "price": 2,
    "ratings": {
      "food": 4.5,
      "value": 4.5,
      "vibe": 2.5,
      "service": 3
    },
    "lastVisited": "2023",
    "notes": [
      "MORE DUCK"
    ],
    "address": "5039 N Broadway",
    "lat": 41.974,
    "lng": -87.6597,
    "reserve": {
      "url": "https://sunwahbbq.com/restaurant/reservations/",
      "via": "Phone",
      "note": "Call 773-769-1254 · closed Thu"
    }
  },
  {
    "name": "Jeong",
    "status": "been",
    "tag": "",
    "category": "Chinese, Korean & SE Asian",
    "type": "Korean",
    "neighborhood": "West Town",
    "price": 4,
    "ratings": {
      "food": 4.5,
      "value": 3,
      "vibe": 4.5,
      "service": 4.5
    },
    "lastVisited": "2026",
    "notes": [
      "Korean-inspired American cuisine; one of my favorite restaurants in Chi!!",
      "2026 update: Hmm… it's still good, but feels a bit overpriced now"
    ],
    "address": "1460 W Chicago Ave",
    "lat": 41.89637,
    "lng": -87.66311,
    "reserve": {
      "url": "https://www.opentable.com/r/jeong-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Ping Pong",
    "status": "been",
    "tag": "",
    "category": "Chinese, Korean & SE Asian",
    "type": "Chinese",
    "neighborhood": "Lakeview",
    "price": 2,
    "ratings": {
      "food": 3.5,
      "value": 3.5,
      "vibe": 3,
      "service": 3
    },
    "lastVisited": "2022",
    "notes": [
      "Lettuce cups."
    ],
    "address": "3322 N Broadway",
    "lat": 41.9423,
    "lng": -87.6447,
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/pingpong",
      "via": "Resy"
    }
  },
  {
    "name": "Kyuramen",
    "status": "been",
    "tag": "",
    "category": "Japanese",
    "type": "Ramen",
    "neighborhood": "River North",
    "price": 2,
    "ratings": {
      "food": 2.5,
      "value": 3,
      "vibe": 3,
      "service": 2
    },
    "lastVisited": "2023",
    "notes": [
      "Ramen-san style chain ramen. Meh."
    ],
    "address": "6 W Hubbard St",
    "lat": 41.88968,
    "lng": -87.62795,
    "reserve": {
      "url": "https://www.kyuramen.com/locations/downtown-chicago",
      "via": "Walk-in"
    }
  },
  {
    "name": "Miru",
    "status": "been",
    "tag": "",
    "category": "Japanese",
    "type": "Japanese",
    "neighborhood": "Lakeshore East",
    "price": 4,
    "ratings": {
      "food": 4,
      "value": 3,
      "vibe": 4.5,
      "service": 4.5
    },
    "lastVisited": "2024",
    "notes": [
      "High-end Japanese restaurant"
    ],
    "address": "401 E Wacker Dr",
    "lat": 41.8875,
    "lng": -87.6185,
    "reserve": {
      "url": "https://www.opentable.com/r/miru-at-the-st-regis-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Mako",
    "status": "been",
    "tag": "fave",
    "category": "Japanese",
    "type": "Japanese",
    "neighborhood": "West Loop",
    "price": 4,
    "ratings": {
      "food": 4,
      "value": 3.5,
      "vibe": 4.5,
      "service": 5
    },
    "lastVisited": "2026",
    "notes": [
      "Really good omakase! I'm not a huge fan of seafood in general, but I was able to eat everything here"
    ],
    "address": "731 W Lake St",
    "lat": 41.88552,
    "lng": -87.64548,
    "reserve": {
      "url": "https://www.exploretock.com/mako",
      "via": "Tock",
      "note": "Deposit required"
    }
  },
  {
    "name": "Siam Thai Eatery",
    "status": "been",
    "tag": "",
    "category": "Chinese, Korean & SE Asian",
    "type": "Thai",
    "neighborhood": "South Loop",
    "price": 2,
    "ratings": {
      "food": 3,
      "value": 4,
      "vibe": 2.5,
      "service": 3.5
    },
    "lastVisited": "2026",
    "notes": [
      "Good for walk-ins"
    ],
    "address": "1329 S Michigan Ave",
    "lat": 41.86494,
    "lng": -87.62369,
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/siam-thai-eatery-chicago",
      "via": "Resy"
    }
  },
  {
    "name": "Mahanakhon Noodle Bar",
    "status": "want",
    "tag": "",
    "category": "Chinese, Korean & SE Asian",
    "type": "Thai",
    "neighborhood": "Lakeview",
    "price": 2,
    "ratings": null,
    "lastVisited": "",
    "notes": [
      "Haven't tried it yet, but it's on my list (heard good things)"
    ],
    "address": "2907 N Lincoln Ave",
    "lat": 41.9343,
    "lng": -87.6592,
    "reserve": {
      "url": "https://www.opentable.com/r/mahanakhon-noodle-bar-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Kumiko",
    "status": "been",
    "tag": "fave",
    "category": "Dessert & Bars",
    "type": "Bar",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 4,
      "value": 3.5,
      "vibe": 4.5,
      "service": 4.5
    },
    "lastVisited": "2026",
    "notes": [
      "TRUFFLE MILK TOAST. Don't share, get 1 (or 2) per person."
    ],
    "address": "630 W Lake St",
    "lat": 41.88552,
    "lng": -87.64304,
    "reserve": {
      "url": "https://www.sevenrooms.com/reservations/kumiko?experience_id=a-la-carte-5254808812077056",
      "via": "SevenRooms"
    }
  },
  {
    "name": "Bombobar",
    "status": "maybe-closed",
    "tag": "",
    "category": "Dessert & Bars",
    "type": "Dessert",
    "neighborhood": "West Loop",
    "price": 1,
    "ratings": {
      "food": 3,
      "value": 3,
      "vibe": 2.5,
      "service": 2
    },
    "lastVisited": "2024",
    "notes": [
      "Quality gelato"
    ],
    "address": "832 W Randolph St",
    "lat": 41.88469,
    "lng": -87.64792,
    "reserve": {
      "url": "https://www.bombobar.com/",
      "via": "Walk-in"
    }
  },
  {
    "name": "Sweet Home Gelato",
    "status": "been",
    "tag": "",
    "category": "Dessert & Bars",
    "type": "Dessert",
    "neighborhood": "River North",
    "price": 1,
    "ratings": {
      "food": 3,
      "value": 4,
      "vibe": 4,
      "service": 3
    },
    "lastVisited": "2023",
    "notes": [
      "The Strawberries & Cream flavor is amazing.",
      "It's open until 10pm, perfect for summer night dates. Get a cup of gelato and grab a seat by the river."
    ],
    "address": "151 W Riverwalk S",
    "lat": 41.8876,
    "lng": -87.633,
    "reserve": {
      "url": "https://www.instagram.com/sweethomegelato/",
      "via": "Walk-in"
    }
  },
  {
    "name": "Firecakes",
    "status": "been",
    "tag": "",
    "category": "Dessert & Bars",
    "type": "Dessert",
    "neighborhood": "River North",
    "price": 1,
    "ratings": {
      "food": 3,
      "value": 3,
      "vibe": 2,
      "service": 3.5
    },
    "lastVisited": "2025",
    "notes": [
      "Ice cream sandwich w/ glazed donuts. So good!!",
      "But go early, because they run out of ice cream sandwiches pretty quickly."
    ],
    "address": "68 W Hubbard St",
    "lat": 41.88968,
    "lng": -87.62944,
    "reserve": {
      "url": "https://firecakesdonuts.com/",
      "via": "Walk-in"
    }
  },
  {
    "name": "Venteux Cafe",
    "status": "been",
    "tag": "",
    "category": "Dessert & Bars",
    "type": "Bakery/Cafe",
    "neighborhood": "Loop",
    "price": 2,
    "ratings": {
      "food": 3,
      "value": 2.5,
      "vibe": 3,
      "service": 3
    },
    "lastVisited": "2022",
    "notes": [
      "There's also a restaurant, but the cafe is walk-in only. Cute interior design.",
      "Amazing cakes & pastries"
    ],
    "address": "224 N Michigan Ave",
    "lat": 41.8862,
    "lng": -87.6245,
    "reserve": {
      "url": "https://www.sevenrooms.com/reservations/venteux",
      "via": "SevenRooms",
      "note": "Cafe is walk-in; this books the brasserie"
    }
  },
  {
    "name": "The Aviary",
    "status": "been",
    "tag": "",
    "category": "Dessert & Bars",
    "type": "Bar",
    "neighborhood": "West Loop",
    "price": 4,
    "ratings": {
      "food": 4.5,
      "value": 3,
      "vibe": 5,
      "service": 4.5
    },
    "lastVisited": "2024",
    "notes": [
      "Only go if you want to get absolutely hammered. Highly rec for a goooood time."
    ],
    "address": "955 W Fulton Market",
    "lat": 41.88733,
    "lng": -87.6509,
    "reserve": {
      "url": "https://www.exploretock.com/theaviary/",
      "via": "Tock",
      "note": "Prepaid"
    }
  },
  {
    "name": "Margie's Candies",
    "status": "been",
    "tag": "",
    "category": "Dessert & Bars",
    "type": "Dessert",
    "neighborhood": "Bucktown",
    "price": 1,
    "ratings": {
      "food": 3.5,
      "value": 3.5,
      "vibe": 4,
      "service": 4
    },
    "lastVisited": "2023",
    "notes": [
      "A smoll ice cream shop with desserts and sundaes (highly rec!!).",
      "The decorations are fun to look at (such eye candy--pun intended), and the portions are yuggeee"
    ],
    "address": "1960 N Western Ave",
    "lat": 41.91735,
    "lng": -87.68585,
    "reserve": {
      "url": "https://margiescandies.com/",
      "via": "Walk-in"
    }
  },
  {
    "name": "Taiyaki",
    "status": "been",
    "tag": "",
    "category": "Dessert & Bars",
    "type": "Dessert",
    "neighborhood": "Lincoln Park",
    "price": 1,
    "ratings": {
      "food": 3,
      "value": 3,
      "vibe": 2.5,
      "service": 3
    },
    "lastVisited": "2024",
    "notes": [
      "It's good, but the ice cream melts really quickly, so you basically end up drinking it"
    ],
    "address": "2618 N Clark St",
    "lat": 41.929,
    "lng": -87.6433,
    "reserve": {
      "url": "https://www.taiyakichicago.com/",
      "via": "Walk-in"
    }
  },
  {
    "name": "Afternoon Tea at The Langham",
    "status": "been",
    "tag": "skip",
    "category": "Dessert & Bars",
    "type": "Afternoon Tea",
    "neighborhood": "River North",
    "price": 4,
    "ratings": {
      "food": 3,
      "value": 1.5,
      "vibe": 4,
      "service": 4
    },
    "lastVisited": "2023",
    "notes": [
      "Overpriced and not worth the hype imo."
    ],
    "address": "330 N Wabash Ave",
    "lat": 41.8882,
    "lng": -87.6268,
    "reserve": {
      "url": "https://www.exploretock.com/pavilionatthelanghamchicago/",
      "via": "Tock",
      "note": "Book 24h ahead"
    }
  },
  {
    "name": "Afternoon Tea at The Drake",
    "status": "been",
    "tag": "skip",
    "category": "Dessert & Bars",
    "type": "Afternoon Tea",
    "neighborhood": "Gold Coast",
    "price": 4,
    "ratings": {
      "food": 3,
      "value": 1.5,
      "vibe": 4,
      "service": 4
    },
    "lastVisited": "2024",
    "notes": [
      "Overpriced and not worth the hype imo."
    ],
    "address": "140 E Walton Pl",
    "lat": 41.9001,
    "lng": -87.6237,
    "reserve": {
      "url": "https://www.opentable.com/r/the-palm-court-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Monteverde",
    "status": "been",
    "tag": "fave",
    "category": "Italian & European",
    "type": "Italian",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 4.5,
      "value": 4,
      "vibe": 4,
      "service": 3.5
    },
    "lastVisited": "2026",
    "notes": [
      "One of my favorite Italian restaurants!"
    ],
    "address": "1020 W Madison St",
    "lat": 41.8818,
    "lng": -87.65306,
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/monteverde-restaurant-and-pastificio",
      "via": "Resy",
      "note": "Opens 30 days out; bar is walk-in"
    }
  },
  {
    "name": "Qing Xiang Yuan Dumplings",
    "status": "been",
    "tag": "",
    "category": "Chinese, Korean & SE Asian",
    "type": "Chinese",
    "neighborhood": "Chinatown",
    "price": 2,
    "ratings": {
      "food": 4,
      "value": 4,
      "vibe": 3,
      "service": 3
    },
    "lastVisited": "2026",
    "notes": [
      "Best dumplings in Chicago!!"
    ],
    "address": "2002 S Wentworth Ave, Ste 103",
    "lat": 41.85517,
    "lng": -87.63199,
    "reserve": {
      "url": "https://qxydumpling.com/",
      "via": "Walk-in",
      "note": "Walk-in only · BYOB"
    }
  },
  {
    "name": "Canton Regio",
    "status": "want",
    "tag": "",
    "category": "Mediterranean & Latin",
    "type": "Mexican",
    "neighborhood": "Pilsen",
    "price": 2,
    "ratings": null,
    "lastVisited": "",
    "notes": [],
    "address": "1510 W 18th St",
    "lat": 41.858,
    "lng": -87.66429,
    "reserve": {
      "url": "https://canton-regio.weeblyte.com/",
      "via": "Phone",
      "note": "Call 312-733-3045 · cash only, BYOB"
    }
  },
  {
    "name": "Mott St",
    "status": "want",
    "tag": "",
    "category": "Chinese, Korean & SE Asian",
    "type": "Asian-American",
    "neighborhood": "West Town",
    "price": 2,
    "ratings": null,
    "lastVisited": "",
    "notes": [],
    "address": "1401 N Ashland Ave",
    "lat": 41.90717,
    "lng": -87.66731,
    "reserve": {
      "url": "https://www.opentable.com/mott-street",
      "via": "OpenTable",
      "note": "Bar & patio are walk-in"
    }
  },
  {
    "name": "Omakase Shoji & Izakaya",
    "status": "want",
    "tag": "",
    "category": "Japanese",
    "type": "Omakase",
    "neighborhood": "West Town",
    "price": 4,
    "ratings": null,
    "lastVisited": "",
    "notes": [],
    "address": "1641 W Chicago Ave",
    "lat": 41.8958,
    "lng": -87.66894,
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/omakase-shoji",
      "via": "Resy",
      "note": "10-seat counter; izakaya is walk-in"
    }
  },
  {
    "name": "Hoosier Mama Pie Company",
    "status": "want",
    "tag": "",
    "category": "Dessert & Bars",
    "type": "Pie",
    "neighborhood": "West Town",
    "price": 1,
    "ratings": null,
    "lastVisited": "",
    "notes": [],
    "address": "1618 1/2 W Chicago Ave",
    "lat": 41.89637,
    "lng": -87.66694,
    "reserve": {
      "url": "https://www.hoosiermamapie.com/chicago.html",
      "via": "Walk-in",
      "note": "Counter service"
    }
  },
  {
    "name": "Provaré",
    "status": "want",
    "tag": "",
    "category": "Italian & European",
    "type": "Italian-Creole",
    "neighborhood": "West Town",
    "price": 3,
    "ratings": null,
    "lastVisited": "",
    "notes": [],
    "address": "1523 W Chicago Ave",
    "lat": 41.89589,
    "lng": -87.66586,
    "reserve": {
      "url": "https://www.exploretock.com/provarechicago/",
      "via": "Tock",
      "note": "21+ · 75-min seatings"
    }
  },
  {
    "name": "JJ Thai Street Food",
    "status": "want",
    "tag": "",
    "category": "Chinese, Korean & SE Asian",
    "type": "Thai",
    "neighborhood": "Ukrainian Village",
    "price": 1,
    "ratings": null,
    "lastVisited": "",
    "notes": [],
    "address": "1715 W Chicago Ave",
    "lat": 41.89583,
    "lng": -87.67041,
    "reserve": {
      "url": "https://www.jjthaistreetfood.com/",
      "via": "Walk-in",
      "note": "Counter service · closed Tue"
    }
  },
  {
    "name": "Milly's Pizza In The Pan",
    "status": "want",
    "tag": "",
    "category": "Italian & European",
    "type": "Pizza",
    "neighborhood": "West Town",
    "price": 2,
    "ratings": null,
    "lastVisited": "",
    "notes": [],
    "address": "925 N Ashland Ave",
    "lat": 41.89871,
    "lng": -87.66703,
    "reserve": {
      "url": "https://www.millyspizzachi.com/",
      "via": "Walk-in",
      "note": "Limited pies daily; order ahead online"
    }
  },
  {
    "name": "Black Dog Gelato",
    "status": "want",
    "tag": "",
    "category": "Dessert & Bars",
    "type": "Gelato",
    "neighborhood": "Ukrainian Village",
    "price": 1,
    "ratings": null,
    "lastVisited": "",
    "notes": [],
    "address": "859 N Damen Ave",
    "lat": 41.89765,
    "lng": -87.67695,
    "reserve": {
      "url": "https://blackdoggelato.com/",
      "via": "Walk-in"
    }
  },
  {
    "name": "Daeji Dough Company",
    "status": "been",
    "tag": "",
    "category": "Dessert & Bars",
    "type": "Cafe",
    "neighborhood": "Lakeview",
    "price": 3,
    "ratings": {
      "food": 3,
      "value": 2.5,
      "vibe": 3,
      "service": 3
    },
    "lastVisited": "2026",
    "notes": [
      "Korean bakery inspired cafe"
    ],
    "address": "1360 W Belmont Ave",
    "lat": 41.93999,
    "lng": -87.66354,
    "reserve": {
      "url": "https://daejidoughco.com/",
      "via": "Walk-in",
      "note": "Expect a line · closed Tue"
    }
  },
  {
    "name": "Elske",
    "status": "been",
    "tag": "",
    "category": "American",
    "type": "American",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 4,
      "value": 4,
      "vibe": 4.5,
      "service": 4
    },
    "lastVisited": "2026",
    "notes": [
      "Such a cute vibe; I was too full to really enjoy the steak but every dish was really good"
    ],
    "address": "1350 W Randolph St",
    "lat": 41.88447,
    "lng": -87.66092,
    "reserve": {
      "url": "https://www.exploretock.com/elske-chicago/",
      "via": "Tock"
    }
  },
  {
    "name": "Robert's Pizza and Dough Company",
    "status": "been",
    "tag": "",
    "category": "Italian & European",
    "type": "Pizza",
    "neighborhood": "Streeterville",
    "price": 2,
    "ratings": {
      "food": 3.5,
      "value": 3,
      "vibe": 3,
      "service": 3
    },
    "lastVisited": "2026",
    "notes": [
      "Decent Neapolitan pizza"
    ],
    "address": "465 N McClurg Ct",
    "lat": 41.89048,
    "lng": -87.61641,
    "reserve": {
      "url": "https://www.opentable.com/r/roberts-pizza-and-dough-company-chicago",
      "via": "OpenTable"
    }
  },
  {
    "name": "Bang Bang Pie & Biscuits",
    "status": "been",
    "tag": "fave",
    "category": "American",
    "type": "Pie",
    "neighborhood": "Logan Square",
    "price": 2,
    "ratings": {
      "food": 4,
      "value": 4.5,
      "vibe": 4,
      "service": 4
    },
    "lastVisited": "2025",
    "notes": [
      "I swear it's worth the trip"
    ],
    "address": "2051 N California Ave",
    "lat": 41.9191,
    "lng": -87.69701,
    "reserve": {
      "url": "https://bangbangbiscuits.square.site/",
      "via": "Walk-in",
      "note": "Or order ahead for pickup"
    }
  },
  {
    "name": "Kasama",
    "status": "been",
    "tag": "",
    "category": "Chinese, Korean & SE Asian",
    "type": "Filipino",
    "neighborhood": "Ukrainian Village",
    "price": 2,
    "ratings": {
      "food": 4.5,
      "value": 4,
      "vibe": 4,
      "service": 3.5
    },
    "lastVisited": "2026",
    "notes": [
      "Get there 30 minutes before it opens. You'll still end up waiting in line, but at least you actually get to get in!!"
    ],
    "address": "1001 N Winchester Ave",
    "lat": 41.89969,
    "lng": -87.67557,
    "reserve": {
      "url": "https://www.exploretock.com/kasama/",
      "via": "Tock",
      "note": "Dinner opens 6 weeks out at noon; daytime is walk-in"
    }
  }
];
