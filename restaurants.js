// ✏️ Edit this file to update the map. Each entry = one pin.
// price: 1-4 ($-$$$$)   tags: fave | skip | wishlist | closed | maybe-closed
// ratings: 0-5 stars (halves OK, e.g. 4.5) for food, value, vibe, service. Use null to hide a category.
// Tip: get lat/lng by right-clicking a spot in Google Maps.
const RESTAURANTS = [
  {
    "name": "Aba",
    "cuisine": "Mediterranean",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 5,
      "value": 4,
      "vibe": 5,
      "service": 4
    },
    "section": "Med/Mexican/Etc",
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
    "cuisine": "Mediterranean",
    "neighborhood": "River North",
    "price": 2,
    "ratings": {
      "food": 3.5,
      "value": 4,
      "vibe": 4,
      "service": 4
    },
    "section": "Med/Mexican/Etc",
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
    "cuisine": "Mediterranean",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 4.5,
      "value": 4,
      "vibe": 4,
      "service": 4
    },
    "section": "Med/Mexican/Etc",
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
    "cuisine": "Peruvian",
    "neighborhood": "River North",
    "price": 3,
    "ratings": {
      "food": 4,
      "value": 3.5,
      "vibe": 4,
      "service": 4
    },
    "section": "Med/Mexican/Etc",
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
    "cuisine": "Mediterranean",
    "neighborhood": "Loop",
    "price": 3,
    "ratings": {
      "food": 4,
      "value": 3.5,
      "vibe": 4.5,
      "service": 4
    },
    "section": "Med/Mexican/Etc",
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
    "cuisine": "Polish",
    "neighborhood": "Avondale",
    "price": 2,
    "ratings": {
      "food": 4.5,
      "value": 5,
      "vibe": 3,
      "service": 4
    },
    "section": "Med/Mexican/Etc",
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
    "cuisine": "Mexican",
    "neighborhood": "Evanston",
    "price": 1,
    "ratings": {
      "food": 5,
      "value": 5,
      "vibe": 2,
      "service": 3
    },
    "section": "Med/Mexican/Etc",
    "lat": 42.0583,
    "lng": -87.684,
    "address": "908 Noyes St, Evanston",
    "notes": [
      "Take-out only!! Best burritos ever, my death row meal (and I don't even like burritos). The only con is that it's in Evanston."
    ],
    "tags": [
      "fave"
    ]
  },
  {
    "name": "Bistro Campagne",
    "cuisine": "French",
    "neighborhood": "Lincoln Square",
    "price": 3,
    "ratings": {
      "food": 4,
      "value": 4,
      "vibe": 5,
      "service": 4
    },
    "section": "Med/Mexican/Etc",
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
    "cuisine": "Pizza",
    "neighborhood": "Lincoln Park",
    "price": 2,
    "ratings": {
      "food": 5,
      "value": 5,
      "vibe": 3,
      "service": 3
    },
    "section": "American/Italian",
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
    "cuisine": "American",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 4.5,
      "value": 4,
      "vibe": 4,
      "service": 4
    },
    "section": "American/Italian",
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
    "cuisine": "American",
    "neighborhood": "Gold Coast",
    "price": 2,
    "ratings": {
      "food": 3,
      "value": 3,
      "vibe": 5,
      "service": 4
    },
    "section": "American/Italian",
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
    "cuisine": "Steakhouse",
    "neighborhood": "River North",
    "price": 4,
    "ratings": {
      "food": 5,
      "value": 3.5,
      "vibe": 4.5,
      "service": 4.5
    },
    "section": "American/Italian",
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
    "cuisine": "Italian",
    "neighborhood": "River North",
    "price": 2,
    "ratings": {
      "food": 3.5,
      "value": 4,
      "vibe": 3.5,
      "service": 4
    },
    "section": "American/Italian",
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
    "cuisine": "American",
    "neighborhood": "River North",
    "price": 3,
    "ratings": {
      "food": 4,
      "value": 4.5,
      "vibe": 5,
      "service": 4
    },
    "section": "American/Italian",
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
    "cuisine": "Italian",
    "neighborhood": "River North",
    "price": 3,
    "ratings": {
      "food": 4,
      "value": 4,
      "vibe": 5,
      "service": 4
    },
    "section": "American/Italian",
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
    "cuisine": "Fine Dining",
    "neighborhood": "Lincoln Park",
    "price": 4,
    "ratings": {
      "food": 5,
      "value": 2,
      "vibe": 5,
      "service": 5
    },
    "section": "American/Italian",
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
    "cuisine": "Mediterranean",
    "neighborhood": "Streeterville",
    "price": 2,
    "ratings": {
      "food": 3,
      "value": 3,
      "vibe": 3,
      "service": 3
    },
    "section": "American/Italian",
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
    "cuisine": "American",
    "neighborhood": "Streeterville",
    "price": 4,
    "ratings": {
      "food": 3.5,
      "value": 2.5,
      "vibe": 5,
      "service": 4
    },
    "section": "American/Italian",
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
    "cuisine": "American",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 3,
      "value": 3,
      "vibe": 3.5,
      "service": 3.5
    },
    "section": "American/Italian",
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
    "cuisine": "Burgers",
    "neighborhood": "West Loop",
    "price": 2,
    "ratings": {
      "food": 4.5,
      "value": 4,
      "vibe": 3.5,
      "service": 3.5
    },
    "section": "American/Italian",
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
    "cuisine": "American",
    "neighborhood": "Loop",
    "price": 3,
    "ratings": {
      "food": 3,
      "value": 3,
      "vibe": 3.5,
      "service": 3.5
    },
    "section": "American/Italian",
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
    "cuisine": "Italian",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 4.5,
      "value": 4,
      "vibe": 5,
      "service": 4
    },
    "section": "American/Italian",
    "lat": 41.88552,
    "lng": -87.65465,
    "address": "1110 W Lake St",
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
    "cuisine": "Fine Dining",
    "neighborhood": "West Loop",
    "price": 4,
    "ratings": {
      "food": 3.5,
      "value": 2,
      "vibe": 4,
      "service": 5
    },
    "section": "American/Italian",
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
    "cuisine": "Fusion",
    "neighborhood": "Pilsen",
    "price": 3,
    "ratings": {
      "food": 4,
      "value": 3.5,
      "vibe": 4.5,
      "service": 4
    },
    "section": "American/Italian",
    "lat": 41.8578,
    "lng": -87.6582,
    "address": "1239 W 18th St",
    "notes": [
      "Korean/Mexican American fusion? Hip place with good ambiance. Really good amuse-bouche lol."
    ],
    "tags": []
  },
  {
    "name": "Pizzeria Portofino",
    "cuisine": "Italian",
    "neighborhood": "River North",
    "price": 2,
    "ratings": {
      "food": 2.5,
      "value": 3,
      "vibe": 5,
      "service": 3.5
    },
    "section": "American/Italian",
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
    "cuisine": "Fine Dining",
    "neighborhood": "West Loop",
    "price": 4,
    "ratings": {
      "food": 5,
      "value": 3,
      "vibe": 4.5,
      "service": 5
    },
    "section": "American/Italian",
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
    "cuisine": "Fondue",
    "neighborhood": "Lincoln Park",
    "price": 3,
    "ratings": {
      "food": 4,
      "value": 3,
      "vibe": 5,
      "service": 4
    },
    "section": "American/Italian",
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
    "cuisine": "Steakhouse",
    "neighborhood": "River North",
    "price": 4,
    "ratings": {
      "food": 4.5,
      "value": 3,
      "vibe": 4,
      "service": 4.5
    },
    "section": "American/Italian",
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
    "cuisine": "European",
    "neighborhood": "North Center",
    "price": 2,
    "ratings": {
      "food": 3,
      "value": 3,
      "vibe": 3.5,
      "service": 4
    },
    "section": "American/Italian",
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
    "cuisine": "American",
    "neighborhood": "Lincoln Park",
    "price": 2,
    "ratings": {
      "food": 3,
      "value": 3,
      "vibe": 3.5,
      "service": 3
    },
    "section": "American/Italian",
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
    "cuisine": "Fine Dining",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 5,
      "value": 4.5,
      "vibe": 4,
      "service": 4.5
    },
    "section": "American/Italian",
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
    "cuisine": "American",
    "neighborhood": "Lakeview",
    "price": 3,
    "ratings": {
      "food": 2.5,
      "value": 2.5,
      "vibe": 3.5,
      "service": 3
    },
    "section": "American/Italian",
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
    "cuisine": "American",
    "neighborhood": "South Loop",
    "price": 3,
    "ratings": {
      "food": 4.5,
      "value": 3.5,
      "vibe": 4,
      "service": 4
    },
    "section": "American/Italian",
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
    "cuisine": "Italian",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 5,
      "value": 4,
      "vibe": 4.5,
      "service": 4.5
    },
    "section": "American/Italian",
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
    "cuisine": "Fine Dining",
    "neighborhood": "Lincoln Park",
    "price": 4,
    "ratings": {
      "food": 3.5,
      "value": 3,
      "vibe": 4,
      "service": 4
    },
    "section": "American/Italian",
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
    "cuisine": "Steakhouse",
    "neighborhood": "Gold Coast",
    "price": 4,
    "ratings": {
      "food": 4.5,
      "value": 3,
      "vibe": 4.5,
      "service": 5
    },
    "section": "American/Italian",
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
    "cuisine": "Fine Dining",
    "neighborhood": "Lincoln Park",
    "price": 4,
    "ratings": {
      "food": 4.5,
      "value": 3,
      "vibe": 5,
      "service": 4.5
    },
    "section": "American/Italian",
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
    "cuisine": "Vietnamese",
    "neighborhood": "Gold Coast",
    "price": 3,
    "ratings": {
      "food": 3.5,
      "value": 3.5,
      "vibe": 4.5,
      "service": 4
    },
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Japanese",
    "neighborhood": "River North",
    "price": 2,
    "ratings": {
      "food": 5,
      "value": 4.5,
      "vibe": 3.5,
      "service": 4
    },
    "section": "Japanese/Seafood/Asian",
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
    "name": "Hi-Five Ramen",
    "cuisine": "Ramen",
    "neighborhood": "Wicker Park",
    "price": 1,
    "ratings": {
      "food": 4,
      "value": 4,
      "vibe": 3.5,
      "service": 3
    },
    "section": "Japanese/Seafood/Asian",
    "lat": 41.9036,
    "lng": -87.67647,
    "address": "2012 W Division St",
    "notes": [
      "Ramen in the dark"
    ],
    "tags": []
  },
  {
    "name": "Sunda",
    "cuisine": "Asian Fusion",
    "neighborhood": "River North",
    "price": 3,
    "ratings": {
      "food": 3.5,
      "value": 3.5,
      "vibe": 4,
      "service": 3.5
    },
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Japanese",
    "neighborhood": "River North",
    "price": 4,
    "ratings": {
      "food": 3.5,
      "value": 3,
      "vibe": 4,
      "service": 3.5
    },
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Seafood",
    "neighborhood": "River North",
    "price": 4,
    "ratings": {
      "food": 4,
      "value": 3,
      "vibe": 4.5,
      "service": 4
    },
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Japanese",
    "neighborhood": "West Loop",
    "price": 4,
    "ratings": {
      "food": 5,
      "value": 3,
      "vibe": 4.5,
      "service": 4.5
    },
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Japanese",
    "neighborhood": "West Town",
    "price": 3,
    "ratings": {
      "food": 4,
      "value": 3.5,
      "vibe": 4,
      "service": 4
    },
    "section": "Japanese/Seafood/Asian",
    "lat": 41.89637,
    "lng": -87.67204,
    "address": "1829 W Chicago Ave",
    "notes": [
      "Good sushi, but if I had to choose one I'd go to Momotaro"
    ],
    "tags": []
  },
  {
    "name": "Gaijin",
    "cuisine": "Japanese",
    "neighborhood": "West Loop",
    "price": 2,
    "ratings": {
      "food": 4,
      "value": 4,
      "vibe": 3.5,
      "service": 3.5
    },
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Chinese",
    "neighborhood": "Chinatown",
    "price": 2,
    "ratings": {
      "food": 4,
      "value": 4.5,
      "vibe": 3,
      "service": 3
    },
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Chinese",
    "neighborhood": "Chinatown",
    "price": 2,
    "ratings": {
      "food": 4,
      "value": 4.5,
      "vibe": 3,
      "service": 3
    },
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Hot Pot",
    "neighborhood": "River North",
    "price": 2,
    "ratings": {
      "food": 3,
      "value": 4,
      "vibe": 3.5,
      "service": 3
    },
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Japanese",
    "neighborhood": "Chinatown",
    "price": 2,
    "ratings": {
      "food": 4.5,
      "value": 4.5,
      "vibe": 3.5,
      "service": 3.5
    },
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Korean",
    "neighborhood": "North Center",
    "price": 2,
    "ratings": {
      "food": 4,
      "value": 4.5,
      "vibe": 2.5,
      "service": 3
    },
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Korean",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 4,
      "value": 3.5,
      "vibe": 4,
      "service": 4
    },
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Korean",
    "neighborhood": "South Loop",
    "price": 3,
    "ratings": {
      "food": 4,
      "value": 3.5,
      "vibe": 2.5,
      "service": 3.5
    },
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Chinese",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 4.5,
      "value": 3.5,
      "vibe": 4,
      "service": 4
    },
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Chinese",
    "neighborhood": "Uptown",
    "price": 2,
    "ratings": {
      "food": 4.5,
      "value": 4.5,
      "vibe": 2.5,
      "service": 3
    },
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Korean",
    "neighborhood": "West Town",
    "price": 4,
    "ratings": {
      "food": 4.5,
      "value": 3,
      "vibe": 4.5,
      "service": 4.5
    },
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Chinese",
    "neighborhood": "Lakeview",
    "price": 2,
    "ratings": {
      "food": 3.5,
      "value": 3.5,
      "vibe": 3,
      "service": 3
    },
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Ramen",
    "neighborhood": "River North",
    "price": 2,
    "ratings": {
      "food": 2.5,
      "value": 3,
      "vibe": 3,
      "service": 3
    },
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Japanese",
    "neighborhood": "Lakeshore East",
    "price": 4,
    "ratings": {
      "food": 4,
      "value": 3,
      "vibe": 4.5,
      "service": 4.5
    },
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Japanese",
    "neighborhood": "West Loop",
    "price": 4,
    "ratings": {
      "food": 5,
      "value": 3.5,
      "vibe": 4.5,
      "service": 5
    },
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Thai",
    "neighborhood": "Hyde Park",
    "price": 1,
    "ratings": {
      "food": 3.5,
      "value": 4,
      "vibe": 3,
      "service": 3.5
    },
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Thai",
    "neighborhood": "Lakeview",
    "price": 2,
    "ratings": null,
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Bar",
    "neighborhood": "West Loop",
    "price": 3,
    "ratings": {
      "food": 5,
      "value": 3.5,
      "vibe": 4.5,
      "service": 4.5
    },
    "section": "Japanese/Seafood/Asian",
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
    "cuisine": "Dessert",
    "neighborhood": "West Loop",
    "price": 1,
    "ratings": {
      "food": 4,
      "value": 4,
      "vibe": 3,
      "service": 3.5
    },
    "section": "Dessert/Bar",
    "lat": 41.88469,
    "lng": -87.64792,
    "address": "832 W Randolph St",
    "notes": [
      "Quality gelato"
    ],
    "tags": []
  },
  {
    "name": "Sweet Home Gelato",
    "cuisine": "Dessert",
    "neighborhood": "River North",
    "price": 1,
    "ratings": {
      "food": 5,
      "value": 4,
      "vibe": 5,
      "service": 4
    },
    "section": "Dessert/Bar",
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
    "cuisine": "Dessert",
    "neighborhood": "River North",
    "price": 1,
    "ratings": {
      "food": 5,
      "value": 4.5,
      "vibe": 3,
      "service": 3.5
    },
    "section": "Dessert/Bar",
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
    "cuisine": "Bakery/Cafe",
    "neighborhood": "Loop",
    "price": 2,
    "ratings": {
      "food": 4.5,
      "value": 3.5,
      "vibe": 5,
      "service": 4
    },
    "section": "Dessert/Bar",
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
    "cuisine": "Bar",
    "neighborhood": "West Loop",
    "price": 4,
    "ratings": {
      "food": 4.5,
      "value": 3,
      "vibe": 5,
      "service": 4.5
    },
    "section": "Dessert/Bar",
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
    "cuisine": "Dessert",
    "neighborhood": "Bucktown",
    "price": 1,
    "ratings": {
      "food": 4.5,
      "value": 5,
      "vibe": 5,
      "service": 4
    },
    "section": "Dessert/Bar",
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
    "cuisine": "Dessert",
    "neighborhood": "Lincoln Park",
    "price": 1,
    "ratings": {
      "food": 3,
      "value": 3,
      "vibe": 3,
      "service": 3
    },
    "section": "Dessert/Bar",
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
    "cuisine": "Afternoon Tea",
    "neighborhood": "River North",
    "price": 4,
    "ratings": {
      "food": 3,
      "value": 1.5,
      "vibe": 4,
      "service": 4
    },
    "section": "Dessert/Bar",
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
    "cuisine": "Afternoon Tea",
    "neighborhood": "Gold Coast",
    "price": 4,
    "ratings": {
      "food": 3,
      "value": 1.5,
      "vibe": 4,
      "service": 4
    },
    "section": "Dessert/Bar",
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
