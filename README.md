# final_project_BE
Server side for final project

1. Run cmd: node app.js
2. Use Postman to hit the following route: http://localhost:3000/api/businesses
3. Use below sample JSON response to seed MongoDB with Businesses

[
  {
    "name": "JoJos",
    "street_address": "313 N Halsted",
    "city": "Chicago",
    "state": "IL",
    "zipcode": 60642,
    "__v": 1,
    "offers": [
      "58b07e7b30ce4d02990071ae",
      "58b0b07e1fbe6807e19843a6"
    ],
    "categories": [],
    "desc_notes": []
  },
  {
    "name": "Laurie's Lipstick Shop",
    "street_address": "1923 Greenwood",
    "city": "Evanston",
    "state": "IL",
    "zipcode": 60201,
    "__v": 0,
    "offers": [],
    "categories": [],
    "desc_notes": []
  },
  {
    "name": "Enland's Eats",
    "street_address": "555 Main St",
    "city": "Austin",
    "state": "TX",
    "zipcode": 60201,
    "__v": 0,
    "offers": [],
    "categories": [],
    "desc_notes": []
  }
]


4. Use the below as an EXAMPLE to seed MongoDB with Offers for businesses: (NOTE....the business field needs to be manually updated include 
a valide business id

http://localhost:3000/api/offers)

[
  {
    "_id": "58b07e7b30ce4d02990071ae",
    "title": "$10 for $20 Wings",
    "desc_short": "Great deal on Wings!",
    "desc_full": "For a limited time we are offering $10 for $20 in Wings!",
    "isTypeDollarOff": true,
    "isTypePercentOff": false,
    "isTypeOther": false,
    "orig_price": 20,
    "deal_price": 10,
    "percent_off": 0.5,
    "thumbnail_url": "www.fb.com",
    "__v": 0,
    "isActive": true,
    "expiration_date": "2017-02-24T18:42:03.121Z",
    "business": [
      "58afadf6e0b9cfeea48a94c1"
    ],
    "notes": [
      "One per customer",
      "Expires in 30 days"
    ]
  },
  {
    "_id": "58b0ad1d4705f7f82c217528",
    "title": "50% off apps",
    "desc_short": "Happy Hour 50% special!",
    "desc_full": "For a limited time we are offering 1/2 off all appetizers!",
    "isTypeDollarOff": false,
    "isTypePercentOff": true,
    "isTypeOther": false,
    "percent_off": 0.5,
    "thumbnail_url": "www.fb.com",
    "__v": 0,
    "isActive": true,
    "expiration_date": "2017-02-24T22:01:01.585Z",
    "business": [
      "58afadf6e0b9cfeea48a94c1"
    ],
    "notes": [
      "Only valid at bar",
      "5pm - 7pm"
    ]
  },
  {
    "_id": "58b0ad6b3b1e14faf4fa5322",
    "title": "50% off apps",
    "desc_short": "Happy Hour 50% special!",
    "desc_full": "For a limited time we are offering 1/2 off all appetizers!",
    "isTypeDollarOff": false,
    "isTypePercentOff": true,
    "isTypeOther": false,
    "percent_off": 0.5,
    "thumbnail_url": "www.fb.com",
    "__v": 0,
    "isActive": true,
    "expiration_date": "2017-02-24T22:02:19.102Z",
    "business": [
      "58afadf6e0b9cfeea48a94c1"
    ],
    "notes": [
      "Only valid at bar",
      "5pm - 7pm"
    ]
  },
  {
    "_id": "58b0b07e1fbe6807e19843a6",
    "title": "25% off apps",
    "desc_short": "25% Late night special!",
    "desc_full": "For a limited time we are offering 1/4 off all appetizers!",
    "isTypeDollarOff": false,
    "isTypePercentOff": true,
    "isTypeOther": false,
    "percent_off": 0.5,
    "thumbnail_url": "www.fb.com",
    "__v": 0,
    "isActive": true,
    "expiration_date": "2017-02-24T22:15:26.801Z",
    "business": [
      "58afadf6e0b9cfeea48a94c1"
    ],
    "notes": [
      "Only valid at bar",
      "5pm - 7pm"
    ]
  }
]
