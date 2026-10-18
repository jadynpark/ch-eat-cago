// ✏️ Edit this file to update the map. Each entry = one pin.
// category: one of "American", "Italian & European", "Mediterranean & Latin", "Japanese",
//           "Chinese, Korean & SE Asian", "Dessert & Bars"   (sets pin color + filter chip)
// type: the specific cuisine shown on the card (e.g. "Steakhouse", "Ramen")
// price: 1-4 ($-$$$$)
// ratings: 0-5 stars (halves OK) for food, value, vibe, service. Use null to hide one / the whole thing.
// reserve: {url, via, note?}  via = OpenTable | Resy | Tock | SevenRooms | Website | Phone | Walk-in
// tags: fave | skip | wishlist | closed | maybe-closed
// Tip: get lat/lng by right-clicking a spot in Google Maps.
const RESTAURANTS = [
  {
    "name": "Aba",
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
    "reserve": {
      "url": "https://www.opentable.com/r/aba-chicago",
      "via": "OpenTable"
    },
    "lat": 41.88736,
    "lng": -87.64792,
    "address": "302 N Green St",
    "notes": [
      "Amazing ambience; the rooftop bar is extremely pretty",
      "Must-try: crispy short rib hummus, smoked salmon bread & jerusalem bagel"
    ],
    "tags": [
      "fave"
    ]
  },
  {
    "name": "Ema",
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
    "reserve": {
      "url": "https://www.opentable.com/r/ema-river-north-chicago",
      "via": "OpenTable"
    },
    "lat": 41.89094,
    "lng": -87.62959,
    "address": "74 W Illinois St",
    "notes": [
      "The chicken kebab was meh, pretty good overall!"
    ],
    "tags": []
  },
  {
    "name": "Avec",
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
    "reserve": {
      "url": "https://www.exploretock.com/avec",
      "via": "Tock"
    },
    "lat": 41.88461,
    "lng": -87.64268,
    "address": "615 W Randolph St",
    "notes": [
      "Could go everyday for the Medjool dates. Don't get the focaccia… I regret it every time"
    ],
    "tags": [
      "fave"
    ]
  },
  {
    "name": "Tanta",
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
    "reserve": {
      "url": "https://www.opentable.com/r/tanta-chicago",
      "via": "OpenTable"
    },
    "lat": 41.89149,
    "lng": -87.63065,
    "address": "118 W Grand Ave",
    "notes": [
      "Peruvian! All around pretty good"
    ],
    "tags": []
  },
  {
    "name": "Beatnik on the River",
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
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/beatnik-on-the-river",
      "via": "Resy"
    },
    "lat": 41.88522,
    "lng": -87.6372,
    "address": "180 N Upper Wacker Dr",
    "notes": [
      "Authentic Mediterranean"
    ],
    "tags": []
  },
  {
    "name": "Staropolska",
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
    "reserve": {
      "url": "https://www.opentable.com/r/staropolska-chicago",
      "via": "OpenTable"
    },
    "lat": 41.9367,
    "lng": -87.7076,
    "address": "3030 N Milwaukee Ave",
    "notes": [
      "Far from downtown chi, but really good polish food! Get the family dinner if you can"
    ],
    "tags": []
  },
  {
    "name": "Tomate",
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
    "reserve": {
      "url": "https://www.tomatefreshkitchen.com/",
      "via": "Walk-in",
      "note": "Takeout only"
    },
    "lat": 42.0583,
    "lng": -87.684,
    "address": "914 Noyes St, Evanston",
    "notes": [
      "Take-out only!! Best burritos ever, my death row meal (and I don't even like burritos). The only con is that it's in Evanston."
    ],
    "tags": [
      "fave"
    ]
  },
  {
    "name": "Bistro Campagne",
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
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/bistro-campagne",
      "via": "Resy"
    },
    "lat": 41.9638,
    "lng": -87.6857,
    "address": "4518 N Lincoln Ave",
    "notes": [
      "V cute and cozy vibe! Their fried onions are good, all the entrees are very solid"
    ],
    "tags": []
  },
  {
    "name": "Pequod's",
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
    "reserve": {
      "url": "https://www.exploretock.com/pequodspizza",
      "via": "Tock"
    },
    "lat": 41.92195,
    "lng": -87.66415,
    "address": "2207 N Clybourn Ave",
    "notes": [
      "The best deep dish pizza in the world. DO NOT GO TO GIORDANO'S OR LOU'S. THEY ARE A SCAM.",
      "Don't forget to get extra sauce & cheese"
    ],
    "tags": [
      "fave"
    ]
  },
  {
    "name": "Girl & the Goat",
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
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/girl-and-the-goat-chicago",
      "via": "Resy"
    },
    "lat": 41.88461,
    "lng": -87.64737,
    "address": "809 W Randolph St",
    "notes": [
      "Another one of my favorites! Good dish overall"
    ],
    "tags": [
      "fave"
    ]
  },
  {
    "name": "3 Arts Club Cafe",
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
    "reserve": {
      "url": "https://www.opentable.com/r/3-arts-club-cafe-at-rh-chicago",
      "via": "OpenTable",
      "note": "Book well ahead"
    },
    "lat": 41.90541,
    "lng": -87.62867,
    "address": "1300 N Dearborn St",
    "notes": [
      "Must take pics here! Check out the furniture store (Restoration Hardware) it's connected to",
      "The food itself is ok. Decent lobster roll. Prettier for brunch than dinner"
    ],
    "tags": []
  },
  {
    "name": "Bavette's Bar & Boeuf",
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
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/bavettes-bar-and-boeuf",
      "via": "Resy"
    },
    "lat": 41.88913,
    "lng": -87.63307,
    "address": "218 W Kinzie St",
    "notes": [
      "Bomb steak; mashed potatoes go well with the steak"
    ],
    "tags": []
  },
  {
    "name": "Il Porcellino",
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
    "reserve": {
      "url": "https://www.opentable.com/il-porcellino-chicago",
      "via": "OpenTable"
    },
    "lat": 41.88968,
    "lng": -87.62923,
    "address": "59 W Hubbard St",
    "notes": [
      "Pretty good italian! Nothing out of the ordinary"
    ],
    "tags": []
  },
  {
    "name": "Gilt Bar",
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
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/gilt-bar",
      "via": "Resy"
    },
    "lat": 41.88921,
    "lng": -87.63341,
    "address": "230 W Kinzie St",
    "notes": [
      "Sister restaurant to Ciccio Mio; the vibe is pretty similar",
      "6 out of 5 stars for the ambiance & truffle mozz sticks",
      "Try to catch their happy hour to get the most out of your $$"
    ],
    "tags": [
      "fave"
    ]
  },
  {
    "name": "Ciccio Mio",
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
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/ciccio-mio",
      "via": "Resy",
      "note": "Opens 21 days out at 9am"
    },
    "lat": 41.88906,
    "lng": -87.63322,
    "address": "226 W Kinzie St",
    "notes": [
      "Sister restaurant to Gilt Bar; the vibe is pretty similar",
      "6 out of 5 stars for the ambiance & truffle mozz sticks"
    ],
    "tags": [
      "fave"
    ]
  },
  {
    "name": "North Pond",
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
    "reserve": {
      "url": "https://www.exploretock.com/northpond",
      "via": "Tock"
    },
    "lat": 41.92955,
    "lng": -87.637,
    "address": "2610 N Cannon Dr",
    "notes": [
      "The restaurant's right next to the lake so the view is amazing",
      "Excellent food, service, and wine pairing",
      "Major con: $$$$$$$$. Expect to spend $200/person. Extremely special occasions only."
    ],
    "tags": []
  },
  {
    "name": "The Purple Pig",
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
    "reserve": {
      "url": "https://www.sevenrooms.com/explore/thepurplepigchicago/reservations/create/search/",
      "via": "SevenRooms"
    },
    "lat": 41.8907,
    "lng": -87.6243,
    "address": "444 N Michigan Ave",
    "notes": [
      "Used to be a Chicago staple, it's meh personally but worth checking out ig"
    ],
    "tags": []
  },
  {
    "name": "The Signature Room",
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
    "reserve": null,
    "lat": 41.89885,
    "lng": -87.6229,
    "address": "875 N Michigan Ave (95th fl)",
    "notes": [
      "You can use the wine bar right next to the restaurant while on the waitlist!",
      "Amazing view, obviously (on 95th floor). Secure the window seats."
    ],
    "tags": [
      "closed"
    ]
  },
  {
    "name": "Roister",
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
    "reserve": null,
    "lat": 41.88733,
    "lng": -87.6508,
    "address": "951 W Fulton Market",
    "notes": [
      "Typical southern/midwest cuisine? Not amazing, but try the chicken sandwich on the brunch menu"
    ],
    "tags": [
      "closed"
    ]
  },
  {
    "name": "Au Cheval",
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
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/au-cheval-chicago",
      "via": "Resy",
      "note": "Mostly walk-in; few Resy slots"
    },
    "lat": 41.88454,
    "lng": -87.64715,
    "address": "800 W Randolph St (also Small Cheval)",
    "notes": [
      "Quality burger. Fries with garlic aioli is fantastic"
    ],
    "tags": []
  },
  {
    "name": "The Gage",
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
    "reserve": {
      "url": "https://www.opentable.com/r/the-gage-chicago",
      "via": "OpenTable"
    },
    "lat": 41.8814,
    "lng": -87.6246,
    "address": "24 S Michigan Ave",
    "notes": [
      "Pretty typical American food"
    ],
    "tags": []
  },
  {
    "name": "Alla Vita",
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
    "reserve": {
      "url": "https://www.opentable.com/r/alla-vita-chicago",
      "via": "OpenTable",
      "note": "Opens 60 days out"
    },
    "lat": 41.88461,
    "lng": -87.64144,
    "address": "564 W Randolph St",
    "notes": [
      "GREAT atmosphere",
      "BOMBASS pizza crust"
    ],
    "tags": [
      "fave"
    ]
  },
  {
    "name": "Smyth",
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
    "reserve": {
      "url": "https://www.exploretock.com/smyth/",
      "via": "Tock",
      "note": "Prepaid"
    },
    "lat": 41.8851,
    "lng": -87.65924,
    "address": "177 N Ada St",
    "notes": [
      "$$$$$$$$$. But amazing service. Food was overall a little too savory for me."
    ],
    "tags": []
  },
  {
    "name": "S.K.Y.",
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
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/s-k-y",
      "via": "Resy"
    },
    "lat": 41.9233,
    "lng": -87.6372,
    "address": "2300 N Lincoln Park W (moved from Pilsen in 2025)",
    "notes": [
      "Korean/Mexican American fusion? Hip place with good ambiance. Really good amuse-bouche lol."
    ],
    "tags": []
  },
  {
    "name": "Pizzeria Portofino",
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
    "reserve": {
      "url": "https://www.opentable.com/r/pizzeria-portofino-chicago",
      "via": "OpenTable"
    },
    "lat": 41.8871,
    "lng": -87.6366,
    "address": "317 N Clark St (Wolf Point)",
    "notes": [
      "Food is honestly just meh. But super cute vibe, their patio is insta-worthy if you're into that stuff"
    ],
    "tags": []
  },
  {
    "name": "Oriole",
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
    "reserve": {
      "url": "https://www.exploretock.com/oriolechicago/",
      "via": "Tock",
      "note": "Prepaid"
    },
    "lat": 41.88642,
    "lng": -87.64379,
    "address": "661 W Walnut St",
    "notes": [
      "Michelin 2 star. Jaw-dropping food. Performative but not super experimental. Legit good food."
    ],
    "tags": [
      "fave"
    ]
  },
  {
    "name": "Geja's Cafe",
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
    "reserve": {
      "url": "https://www.opentable.com/r/gejas-cafe-chicago",
      "via": "OpenTable"
    },
    "lat": 41.91807,
    "lng": -87.63602,
    "address": "340 W Armitage Ave",
    "notes": [
      "Fondue dinner. Super romantic atmosphere! There's an old man who plays the guitar in the corner."
    ],
    "tags": []
  },
  {
    "name": "RPM Steak",
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
    "reserve": {
      "url": "https://www.opentable.com/rpm-steak",
      "via": "OpenTable"
    },
    "lat": 41.88913,
    "lng": -87.6294,
    "address": "66 W Kinzie St",
    "notes": [
      "All around good steak & Italian.",
      "Must get the Baked Alaska for dessert. It's an ice cream cake covered with marshmallows and they torch the marshmallows in front of you. It's pretty amazing."
    ],
    "tags": []
  },
  {
    "name": "Cobblestone",
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
    "reserve": {
      "url": "https://www.opentable.com/r/cobblestone-chicago",
      "via": "OpenTable"
    },
    "lat": 41.9605,
    "lng": -87.6825,
    "address": "4337 N Lincoln Ave",
    "notes": [
      "\"European\" inspired bistro. Good service and the restaurant is v cute.",
      "I'll give 3 out of 5 stars because of hygiene though.. (there were crumbs on the seats & the table and the plates were a bit soiled…)"
    ],
    "tags": []
  },
  {
    "name": "Summer House Santa Monica",
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
    "reserve": {
      "url": "https://www.opentable.com/r/summer-house-chicago",
      "via": "OpenTable"
    },
    "lat": 41.91724,
    "lng": -87.64715,
    "address": "1954 N Halsted St",
    "notes": [
      "Cute brunch place; feels slightly fratty and the food is OK.",
      "I'd rather go to the 3 Arts Club Cafe for this kind of vibe, but still feels like a good place to hang with friends"
    ],
    "tags": []
  },
  {
    "name": "Sepia",
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
    "reserve": {
      "url": "https://www.opentable.com/r/sepia-chicago",
      "via": "OpenTable"
    },
    "lat": 41.88412,
    "lng": -87.64231,
    "address": "123 N Jefferson St",
    "notes": [
      "OMG so good; decent price for a Michelin restaurant"
    ],
    "tags": [
      "fave"
    ]
  },
  {
    "name": "Ella Elli",
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
    "reserve": {
      "url": "https://www.exploretock.com/ellaelli/",
      "via": "Tock"
    },
    "lat": 41.9452,
    "lng": -87.66043,
    "address": "1349 W Cornelia Ave",
    "notes": [
      "(Do not recommend) I went during restaurant week, so I might be a bit biased",
      "Aba's crispy brussels sprout was better",
      "The mushroom gnocchi is not as heavy & creamy as other gnocchis (which I liked), but it was also a tad too watery"
    ],
    "tags": [
      "skip"
    ]
  },
  {
    "name": "Apolonia",
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
    "reserve": {
      "url": "https://www.opentable.com/r/apolonia-chicago",
      "via": "OpenTable"
    },
    "lat": 41.853,
    "lng": -87.6237,
    "address": "2201 S Michigan Ave",
    "notes": [
      "OK, go during christmas season because the steak on their christmas menu is AMAZAZING",
      "Other dishes are solid too"
    ],
    "tags": []
  },
  {
    "name": "Rose Mary",
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
    "reserve": {
      "url": "https://www.sevenrooms.com/explore/rosemary/reservations/create/search/",
      "via": "SevenRooms",
      "note": "Opens 30 days out, goes fast"
    },
    "lat": 41.88733,
    "lng": -87.65034,
    "address": "932 W Fulton Market",
    "notes": [
      "Prob my favorite restaurant out of the ones I visited recently"
    ],
    "tags": [
      "fave"
    ]
  },
  {
    "name": "Boka",
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
    "reserve": {
      "url": "https://www.opentable.com/r/boka-chicago",
      "via": "OpenTable"
    },
    "lat": 41.91317,
    "lng": -87.64715,
    "address": "1729 N Halsted St",
    "notes": [
      "Nothing too memorable, overall pretty decent"
    ],
    "tags": []
  },
  {
    "name": "Maple & Ash",
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
    "reserve": {
      "url": "https://www.sevenrooms.com/landing/mapleandashchicagodiningroom",
      "via": "SevenRooms"
    },
    "lat": 41.90053,
    "lng": -87.62799,
    "address": "8 W Maple St",
    "notes": [
      "Personally prefer their steak over Prime & Provisions, they treat you like you're important"
    ],
    "tags": []
  },
  {
    "name": "Esmé",
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
    "reserve": {
      "url": "https://www.exploretock.com/esme-chicago/",
      "via": "Tock"
    },
    "lat": 41.9216,
    "lng": -87.6375,
    "address": "2200 N Clark St",
    "notes": [
      "They collaborate with local Chicago artists for their menu! Really cool dining experience"
    ],
    "tags": []
  },
  {
    "name": "Le Colonial",
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
    "reserve": {
      "url": "https://www.opentable.com/r/le-colonial-chicago",
      "via": "OpenTable"
    },
    "lat": 41.89999,
    "lng": -87.62642,
    "address": "57 E Oak St",
    "notes": [
      "Vietnamese, cute vibe"
    ],
    "tags": []
  },
  {
    "name": "Cocoro",
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
    "reserve": {
      "url": "https://cocorosushi.squarespace.com/",
      "via": "Phone",
      "note": "Call 312-943-2220"
    },
    "lat": 41.89398,
    "lng": -87.63264,
    "address": "668 N Wells St",
    "notes": [
      "The BEST Japanese comfort food in chi (imo).",
      "Try the sukiyaki if you can! (they tend to run out pretty quickly)"
    ],
    "tags": [
      "fave"
    ]
  },
  {
    "name": "High Five Ramen",
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
    "reserve": {
      "url": "https://www.highfiveramen.com/",
      "via": "Walk-in",
      "note": "Waitlist only"
    },
    "lat": 41.88393,
    "lng": -87.64792,
    "address": "112 N Green St (basement)",
    "notes": [
      "Ramen in the dark"
    ],
    "tags": []
  },
  {
    "name": "Sunda",
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
    "reserve": {
      "url": "https://www.opentable.com/r/sunda-new-asian-river-north-chicago",
      "via": "OpenTable"
    },
    "lat": 41.89094,
    "lng": -87.63046,
    "address": "110 W Illinois St",
    "notes": [
      "Asian fusion~"
    ],
    "tags": []
  },
  {
    "name": "Roka Akor",
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
    "reserve": {
      "url": "https://www.opentable.com/r/roka-akor-chicago",
      "via": "OpenTable"
    },
    "lat": 41.89015,
    "lng": -87.63022,
    "address": "456 N Clark St",
    "notes": [
      "Asian fusion~"
    ],
    "tags": []
  },
  {
    "name": "RPM Seafood",
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
    "reserve": {
      "url": "https://www.opentable.com/r/rpm-seafood-chicago",
      "via": "OpenTable"
    },
    "lat": 41.88745,
    "lng": -87.635,
    "address": "317 N Clark St",
    "notes": [
      "Outdoor seating along the river"
    ],
    "tags": []
  },
  {
    "name": "Momotaro",
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
    "reserve": {
      "url": "https://www.opentable.com/r/momotaro-chicago",
      "via": "OpenTable"
    },
    "lat": 41.88552,
    "lng": -87.64763,
    "address": "820 W Lake St",
    "notes": [
      "Highly rec Momotaro if I had to choose one (vs. Arami). Probably the best sushi in the Chicago area. $$$$ though"
    ],
    "tags": [
      "fave"
    ]
  },
  {
    "name": "Arami",
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
    "reserve": null,
    "lat": 41.89637,
    "lng": -87.67204,
    "address": "1829 W Chicago Ave",
    "notes": [
      "Good sushi, but if I had to choose one I'd go to Momotaro"
    ],
    "tags": [
      "closed"
    ]
  },
  {
    "name": "Gaijin",
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
    "reserve": {
      "url": "https://www.opentable.com/r/gaijin-chicago",
      "via": "OpenTable"
    },
    "lat": 41.8806,
    "lng": -87.6508,
    "address": "950 W Monroe St",
    "notes": [
      "Solid Okonomiyaki"
    ],
    "tags": []
  },
  {
    "name": "Minghin Cuisine",
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
    "reserve": {
      "url": "https://www.minghincuisine.com/chinatown",
      "via": "Phone",
      "note": "Call 312-808-1999"
    },
    "lat": 41.85395,
    "lng": -87.6324,
    "address": "2168 S Archer Ave",
    "notes": [
      "Pretty good Chinese restaurant, multiple locations around Chicago!"
    ],
    "tags": []
  },
  {
    "name": "Lao Sze Chuan",
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
    "reserve": {
      "url": "https://www.laoszechuanusa.com/",
      "via": "Phone",
      "note": "Call 312-326-3888"
    },
    "lat": 41.8538,
    "lng": -87.633,
    "address": "2172 S Archer Ave",
    "notes": [
      "Pretty good Chinese restaurant, multiple locations around Chicago!"
    ],
    "tags": []
  },
  {
    "name": "Friends Station",
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
    "reserve": {
      "url": "https://www.friendsstation.com/",
      "via": "Walk-in"
    },
    "lat": 41.89637,
    "lng": -87.6278,
    "address": "800 N State St",
    "notes": [
      "All-you-can-eat hotpot!! You can choose any toppings you want from a conveyor belt like a sushi bar",
      "2023 update: it's not as good as it used to be, but still worth a try"
    ],
    "tags": [
      "maybe-closed"
    ]
  },
  {
    "name": "Sushi Plus",
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
    "reserve": {
      "url": "https://www.rotarysushi.com/",
      "via": "Walk-in"
    },
    "lat": 41.8546,
    "lng": -87.6317,
    "address": "2131 S Archer Ave",
    "notes": [
      "An actual rotary sushi bar",
      "It's dang good!"
    ],
    "tags": []
  },
  {
    "name": "Cho Sun Ok",
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
    "reserve": {
      "url": "http://chosunokrestaurant.com/",
      "via": "Walk-in",
      "note": "No reservations"
    },
    "lat": 41.9585,
    "lng": -87.6815,
    "address": "4200 N Lincoln Ave",
    "notes": [
      "They don't accept reservations so expect to stand in line during lunch/dinner time",
      "The place is pretty small and can get crowded",
      "The only Korean restaurant that is actually pretty close to downtown Chi. Well there's also… Perilla"
    ],
    "tags": []
  },
  {
    "name": "Perilla Korean American Fare",
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
    "reserve": {
      "url": "https://www.opentable.com/r/perilla-korean-american-fare-reservations-chicago",
      "via": "OpenTable"
    },
    "lat": 41.88936,
    "lng": -87.64451,
    "address": "401 N Milwaukee Ave",
    "notes": [
      "Doesn't really feel like authentic Korean to me. Their KBBQ is still great though!"
    ],
    "tags": []
  },
  {
    "name": "TAK Korean Bistro & Karaoke",
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
    "reserve": {
      "url": "https://www.opentable.com/r/tak-korean-bistro-chicago",
      "via": "OpenTable"
    },
    "lat": 41.8685,
    "lng": -87.626,
    "address": "1132 S Wabash Ave",
    "notes": [
      "Can't say I'm a fan of the ambience (dark, loud music) but their food is solid",
      "They also have karaoke"
    ],
    "tags": []
  },
  {
    "name": "Duck Duck Goat",
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
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/duck-duck-goat",
      "via": "Resy"
    },
    "lat": 41.88733,
    "lng": -87.64853,
    "address": "857 W Fulton Market",
    "notes": [
      "PEKING DUCK"
    ],
    "tags": []
  },
  {
    "name": "Sun Wah BBQ",
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
    "reserve": {
      "url": "https://sunwahbbq.com/restaurant/reservations/",
      "via": "Phone",
      "note": "Call 773-769-1254 · closed Thu"
    },
    "lat": 41.974,
    "lng": -87.6597,
    "address": "5039 N Broadway",
    "notes": [
      "MORE DUCK"
    ],
    "tags": []
  },
  {
    "name": "Jeong",
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
    "reserve": {
      "url": "https://www.opentable.com/r/jeong-chicago",
      "via": "OpenTable"
    },
    "lat": 41.89637,
    "lng": -87.66311,
    "address": "1460 W Chicago Ave",
    "notes": [
      "Korean-inspired American cuisine; one of my favorite restaurants in Chi!!",
      "2026 update: Hmm… It's still good but feels a bit overpriced now"
    ],
    "tags": [
      "fave"
    ]
  },
  {
    "name": "Ping Pong",
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
    "reserve": {
      "url": "https://resy.com/cities/chicago-il/venues/pingpong",
      "via": "Resy"
    },
    "lat": 41.9423,
    "lng": -87.6447,
    "address": "3322 N Broadway",
    "notes": [
      "Lettuce cups."
    ],
    "tags": []
  },
  {
    "name": "Kyuramen",
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
    "reserve": {
      "url": "https://www.kyuramen.com/locations/downtown-chicago",
      "via": "Walk-in"
    },
    "lat": 41.88968,
    "lng": -87.62795,
    "address": "6 W Hubbard St",
    "notes": [
      "Ramen-san style chain ramen. Meh."
    ],
    "tags": []
  },
  {
    "name": "Miru",
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
    "reserve": {
      "url": "https://www.opentable.com/r/miru-at-the-st-regis-chicago",
      "via": "OpenTable"
    },
    "lat": 41.8875,
    "lng": -87.6185,
    "address": "401 E Wacker Dr",
    "notes": [
      "High-end Japanese restaurant"
    ],
    "tags": []
  },
  {
    "name": "Mako",
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
    "reserve": {
      "url": "https://www.exploretock.com/mako",
      "via": "Tock",
      "note": "Deposit required"
    },
    "lat": 41.88552,
    "lng": -87.64548,
    "address": "731 W Lake St",
    "notes": [
      "Really good omakase! I'm not a huge fan of seafood in general, but I was able to eat everything here"
    ],
    "tags": [
      "fave"
    ]
  },
  {
    "name": "Siam Thai",
    "category": "Chinese, Korean & SE Asian",
    "type": "Thai",
    "neighborhood": "Hyde Park",
    "price": 1,
    "ratings": {
      "food": 3.5,
      "value": 4,
      "vibe": 3,
      "service": 3.5
    },
    "reserve": {
      "url": "https://chicagosiamthai.com/",
      "via": "Phone",
      "note": "Call 773-324-9296"
    },
    "lat": 41.7951,
    "lng": -87.5868,
    "address": "1639 E 55th St",
    "notes": [
      "Nice to walk in"
    ],
    "tags": []
  },
  {
    "name": "Mahanakhon Noodle Bar",
    "category": "Chinese, Korean & SE Asian",
    "type": "Thai",
    "neighborhood": "Lakeview",
    "price": 2,
    "ratings": null,
    "reserve": {
      "url": "https://www.opentable.com/r/mahanakhon-noodle-bar-chicago",
      "via": "OpenTable"
    },
    "lat": 41.9343,
    "lng": -87.6592,
    "address": "2907 N Lincoln Ave",
    "notes": [
      "Haven't tried, on my list (heard good things)"
    ],
    "tags": [
      "wishlist"
    ]
  },
  {
    "name": "Kumiko",
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
    "reserve": {
      "url": "https://www.sevenrooms.com/reservations/kumiko?experience_id=a-la-carte-5254808812077056",
      "via": "SevenRooms"
    },
    "lat": 41.88552,
    "lng": -87.64304,
    "address": "630 W Lake St",
    "notes": [
      "TRUFFLE MILK TOAST. Don't share, get 1 (or 2) per person."
    ],
    "tags": [
      "fave"
    ]
  },
  {
    "name": "Bombobar",
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
    "reserve": {
      "url": "https://www.bombobar.com/",
      "via": "Walk-in"
    },
    "lat": 41.88469,
    "lng": -87.64792,
    "address": "832 W Randolph St",
    "notes": [
      "Quality gelato"
    ],
    "tags": [
      "maybe-closed"
    ]
  },
  {
    "name": "Sweet Home Gelato",
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
    "reserve": {
      "url": "https://www.instagram.com/sweethomegelato/",
      "via": "Walk-in"
    },
    "lat": 41.8876,
    "lng": -87.633,
    "address": "151 W Riverwalk S",
    "notes": [
      "Strawberries & Cream flavor is amazing.",
      "It's open until 10pm and is perfect for summer night dates. Get a cup of gelato, grab a seat by the river."
    ],
    "tags": [
      "fave"
    ]
  },
  {
    "name": "Firecakes",
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
    "reserve": {
      "url": "https://firecakesdonuts.com/",
      "via": "Walk-in"
    },
    "lat": 41.88968,
    "lng": -87.62944,
    "address": "68 W Hubbard St",
    "notes": [
      "Ice cream sandwich w/ glazed donuts. So good!!",
      "But go early because they run out of ice cream sandwiches pretty quickly."
    ],
    "tags": [
      "fave"
    ]
  },
  {
    "name": "Venteux Cafe",
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
    "reserve": {
      "url": "https://www.sevenrooms.com/reservations/venteux",
      "via": "SevenRooms",
      "note": "Cafe is walk-in; this books the brasserie"
    },
    "lat": 41.8862,
    "lng": -87.6245,
    "address": "224 N Michigan Ave",
    "notes": [
      "There's also a restaurant, but the cafe is walk-in only. Cute interior design.",
      "Amazing cake & pastries"
    ],
    "tags": []
  },
  {
    "name": "The Aviary",
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
    "reserve": {
      "url": "https://www.exploretock.com/theaviary/",
      "via": "Tock",
      "note": "Prepaid"
    },
    "lat": 41.88733,
    "lng": -87.6509,
    "address": "955 W Fulton Market",
    "notes": [
      "Only go if you want to get absolutely hammered. Highly rec for a goooood time."
    ],
    "tags": []
  },
  {
    "name": "Margie's Candies",
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
    "reserve": {
      "url": "https://margiescandies.com/",
      "via": "Walk-in"
    },
    "lat": 41.91735,
    "lng": -87.68585,
    "address": "1960 N Western Ave",
    "notes": [
      "A smoll ice cream shop with desserts and sundaes (highly rec!!).",
      "The decorations are fun to watch (such an eye candy--pun intended) and the portion is yuggeee"
    ],
    "tags": [
      "fave"
    ]
  },
  {
    "name": "Taiyaki",
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
    "reserve": {
      "url": "https://www.taiyakichicago.com/",
      "via": "Walk-in"
    },
    "lat": 41.929,
    "lng": -87.6433,
    "address": "2618 N Clark St",
    "notes": [
      "It's good but the ice cream melts really quickly so you basically end up just drinking the ice cream"
    ],
    "tags": []
  },
  {
    "name": "Afternoon Tea at The Langham",
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
    "reserve": {
      "url": "https://www.exploretock.com/pavilionatthelanghamchicago/",
      "via": "Tock",
      "note": "Book 24h ahead"
    },
    "lat": 41.8882,
    "lng": -87.6268,
    "address": "330 N Wabash Ave",
    "notes": [
      "Overpriced and not worth the hype imo."
    ],
    "tags": [
      "skip"
    ]
  },
  {
    "name": "Afternoon Tea at The Drake",
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
    "reserve": {
      "url": "https://www.opentable.com/r/the-palm-court-chicago",
      "via": "OpenTable"
    },
    "lat": 41.9001,
    "lng": -87.6237,
    "address": "140 E Walton Pl",
    "notes": [
      "Overpriced and not worth the hype imo."
    ],
    "tags": [
      "skip"
    ]
  }
];
