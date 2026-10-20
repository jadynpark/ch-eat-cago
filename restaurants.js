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
    "lastVisited": "",
    "notes": [
      "Amazing ambience; the rooftop bar is extremely pretty",
      "Must-try: crispy short rib hummus, smoked salmon bread & jerusalem bagel"
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
      "service": 4
    },
    "lastVisited": "",
    "notes": [
      "The chicken kebab was meh, pretty good overall!"
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
    "tag": "fave",
    "category": "Mediterranean & Latin",
    "type": "Mediterranean",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 4.5,
      "value": 4,
      "vibe": 4,
      "service": 4
    },
    "lastVisited": "",
    "notes": [
      "Could go everyday for the Medjool dates. Don't get the focaccia… I regret it every time"
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
      "service": 4
    },
    "lastVisited": "",
    "notes": [
      "Peruvian! All around pretty good"
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
      "service": 4
    },
    "lastVisited": "",
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
      "service": 4
    },
    "lastVisited": "",
    "notes": [
      "Far from downtown chi, but really good polish food! Get the family dinner if you can"
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
    "lastVisited": "",
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
      "service": 4
    },
    "lastVisited": "",
    "notes": [
      "V cute and cozy vibe! Their fried onions are good, all the entrees are very solid"
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
    "tag": "fave",
    "category": "Italian & European",
    "type": "Pizza",
    "neighborhood": "Lincoln Park",
    "price": 2,
    "ratings": {
      "food": 5,
      "value": 5,
      "vibe": 3,
      "service": 3
    },
    "lastVisited": "",
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
    "tag": "fave",
    "category": "American",
    "type": "American",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 4.5,
      "value": 4,
      "vibe": 4,
      "service": 4
    },
    "lastVisited": "",
    "notes": [
      "Another one of my favorites! Good dish overall"
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
      "service": 4
    },
    "lastVisited": "",
    "notes": [
      "Must take pics here! Check out the furniture store (Restoration Hardware) it's connected to",
      "The food itself is ok. Decent lobster roll. Prettier for brunch than dinner"
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
    "lastVisited": "",
    "notes": [
      "Bomb steak; mashed potatoes go well with the steak"
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
    "lastVisited": "",
    "notes": [
      "Pretty good italian! Nothing out of the ordinary"
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
      "vibe": 5,
      "service": 4
    },
    "lastVisited": "",
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
      "vibe": 5,
      "service": 4
    },
    "lastVisited": "",
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
    "lastVisited": "",
    "notes": [
      "The restaurant's right next to the lake so the view is amazing",
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
      "service": 3
    },
    "lastVisited": "",
    "notes": [
      "Used to be a Chicago staple, it's meh personally but worth checking out ig"
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
      "service": 4
    },
    "lastVisited": "",
    "notes": [
      "You can use the wine bar right next to the restaurant while on the waitlist!",
      "Amazing view, obviously (on 95th floor). Secure the window seats."
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
      "service": 3.5
    },
    "lastVisited": "",
    "notes": [
      "Typical southern/midwest cuisine? Not amazing, but try the chicken sandwich on the brunch menu"
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
    "lastVisited": "",
    "notes": [
      "Quality burger. Fries with garlic aioli is fantastic"
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
    "lastVisited": "",
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
    "lastVisited": "",
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
    "lastVisited": "",
    "notes": [
      "$$$$$$$$$. But amazing service. Food was overall a little too savory for me."
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
    "lastVisited": "",
    "notes": [
      "Korean/Mexican American fusion? Hip place with good ambiance. Really good amuse-bouche lol."
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
    "lastVisited": "",
    "notes": [
      "Food is honestly just meh. But super cute vibe, their patio is insta-worthy if you're into that stuff"
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
    "lastVisited": "",
    "notes": [
      "Michelin 2 star. Jaw-dropping food. Performative but not super experimental. Legit good food."
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
    "lastVisited": "",
    "notes": [
      "Fondue dinner. Super romantic atmosphere! There's an old man who plays the guitar in the corner."
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
    "lastVisited": "",
    "notes": [
      "All around good steak & Italian.",
      "Must get the Baked Alaska for dessert. It's an ice cream cake covered with marshmallows and they torch the marshmallows in front of you. It's pretty amazing."
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
    "lastVisited": "",
    "notes": [
      "\"European\" inspired bistro. Good service and the restaurant is v cute.",
      "I'll give 3 out of 5 stars because of hygiene though.. (there were crumbs on the seats & the table and the plates were a bit soiled…)"
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
    "lastVisited": "",
    "notes": [
      "Cute brunch place; feels slightly fratty and the food is OK.",
      "I'd rather go to the 3 Arts Club Cafe for this kind of vibe, but still feels like a good place to hang with friends"
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
    "tag": "fave",
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
    "lastVisited": "",
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
    "lastVisited": "",
    "notes": [
      "(Do not recommend) I went during restaurant week, so I might be a bit biased",
      "Aba's crispy brussels sprout was better",
      "The mushroom gnocchi is not as heavy & creamy as other gnocchis (which I liked), but it was also a tad too watery"
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
    "lastVisited": "",
    "notes": [
      "OK, go during christmas season because the steak on their christmas menu is AMAZAZING",
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
    "lastVisited": "",
    "notes": [
      "Prob my favorite restaurant out of the ones I visited recently"
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
    "lastVisited": "",
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
    "lastVisited": "",
    "notes": [
      "Personally prefer their steak over Prime & Provisions, they treat you like you're important"
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
    "lastVisited": "",
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
    "lastVisited": "",
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
      "food": 5,
      "value": 4.5,
      "vibe": 3.5,
      "service": 4
    },
    "lastVisited": "",
    "notes": [
      "The BEST Japanese comfort food in chi (imo).",
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
    "lastVisited": "",
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
    "lastVisited": "",
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
    "lastVisited": "",
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
    "lastVisited": "",
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
    "tag": "fave",
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
    "lastVisited": "",
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
    "lastVisited": "",
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
    "lastVisited": "",
    "notes": [
      "Solid Okonomiyaki"
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
      "food": 4,
      "value": 4.5,
      "vibe": 3,
      "service": 3
    },
    "lastVisited": "",
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
      "food": 4,
      "value": 4.5,
      "vibe": 3,
      "service": 3
    },
    "lastVisited": "",
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
    "tag": "",
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
      "All-you-can-eat hotpot!! You can choose any toppings you want from a conveyor belt like a sushi bar",
      "2023 update: it's not as good as it used to be, but still worth a try"
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
    "lastVisited": "",
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
    "lastVisited": "",
    "notes": [
      "They don't accept reservations so expect to stand in line during lunch/dinner time",
      "The place is pretty small and can get crowded",
      "The only Korean restaurant that is actually pretty close to downtown Chi. Well there's also… Perilla"
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
      "value": 3.5,
      "vibe": 4,
      "service": 4
    },
    "lastVisited": "",
    "notes": [
      "Doesn't really feel like authentic Korean to me. Their KBBQ is still great though!"
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
    "lastVisited": "",
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
    "lastVisited": "",
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
    "lastVisited": "",
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
    "tag": "fave",
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
      "2026 update: Hmm… It's still good but feels a bit overpriced now"
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
    "lastVisited": "",
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
      "service": 3
    },
    "lastVisited": "",
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
    "lastVisited": "",
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
      "food": 5,
      "value": 3.5,
      "vibe": 4.5,
      "service": 5
    },
    "lastVisited": "",
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
      "food": 3.5,
      "value": 4,
      "vibe": 3,
      "service": 3.5
    },
    "lastVisited": "",
    "notes": [
      "Nice to walk in"
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
      "Haven't tried, on my list (heard good things)"
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
      "food": 5,
      "value": 3.5,
      "vibe": 4.5,
      "service": 4.5
    },
    "lastVisited": "",
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
      "food": 4,
      "value": 4,
      "vibe": 3,
      "service": 3.5
    },
    "lastVisited": "",
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
    "tag": "fave",
    "category": "Dessert & Bars",
    "type": "Dessert",
    "neighborhood": "River North",
    "price": 1,
    "ratings": {
      "food": 5,
      "value": 4,
      "vibe": 5,
      "service": 4
    },
    "lastVisited": "",
    "notes": [
      "Strawberries & Cream flavor is amazing.",
      "It's open until 10pm and is perfect for summer night dates. Get a cup of gelato, grab a seat by the river."
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
    "tag": "fave",
    "category": "Dessert & Bars",
    "type": "Dessert",
    "neighborhood": "River North",
    "price": 1,
    "ratings": {
      "food": 5,
      "value": 4.5,
      "vibe": 3,
      "service": 3.5
    },
    "lastVisited": "",
    "notes": [
      "Ice cream sandwich w/ glazed donuts. So good!!",
      "But go early because they run out of ice cream sandwiches pretty quickly."
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
      "food": 4.5,
      "value": 3.5,
      "vibe": 5,
      "service": 4
    },
    "lastVisited": "",
    "notes": [
      "There's also a restaurant, but the cafe is walk-in only. Cute interior design.",
      "Amazing cake & pastries"
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
    "lastVisited": "",
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
    "tag": "fave",
    "category": "Dessert & Bars",
    "type": "Dessert",
    "neighborhood": "Bucktown",
    "price": 1,
    "ratings": {
      "food": 4.5,
      "value": 5,
      "vibe": 5,
      "service": 4
    },
    "lastVisited": "",
    "notes": [
      "A smoll ice cream shop with desserts and sundaes (highly rec!!).",
      "The decorations are fun to watch (such an eye candy--pun intended) and the portion is yuggeee"
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
      "vibe": 3,
      "service": 3
    },
    "lastVisited": "",
    "notes": [
      "It's good but the ice cream melts really quickly so you basically end up just drinking the ice cream"
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
    "lastVisited": "",
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
    "lastVisited": "",
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
  }
];
