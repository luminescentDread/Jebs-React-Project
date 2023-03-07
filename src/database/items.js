export const COLOURS = {
  white: '#ffffff',
  black: '#000000',              //colors used in the project
  lightGray: '#ffe135',
  accent: '#FFC231',
  accentRed: '#FB5D2E',
  accentPink: '#F96165',
};

export const fonts = {
  arial: 'Arial, sans-serif'     //arial font
};

export const restaurants = [             //array of restaurants and their food items basically used as the database for the project
  {
    name: 'Chicken Stop',
    image: require('../database/images/Chop_Shop/Logo/chop_shop_logo.png'),
    details: [
      {
        name: 'Chicken Fingers',
        price: 199,
        image: require('../database/images/Chop_Shop/Others/grilled_chicken.png'),
        delivery: 25
      },
      {
        name: 'Roast Chicken Barbecue',
        price: 99,
        image: require('../database/images/Chop_Shop/Others/roasted_chicken.png'),
        delivery: 20
      },
      {
        name: 'Burger with Ham & Cheese',
        price: 299,
        image: require('../database/images/Chop_Shop/Others/burger.png'),
        delivery: 35
      },
      {
        name: 'Burrito Wrap',
        price: 199,
        image: require('../database/images/Chop_Shop/Others/wrap.png'),
        delivery: 25
      },
    ],
  },
  
  {
    name: 'Vegeterian 100',
    image: require('../database/images/Vegeterian100/Logo/veg100.png'),
    details: [
      {
        name: 'Fruit Salad',
        price: 199,
        image: require('../database/images/Vegeterian100/Others/fruit_salad.png'),
        delivery: 30
      },
      {
        name: 'Submarine Sandwich',
        price: 299,
        image: require('../database/images/Vegeterian100/Others/submarine_sandwich_vegetable.png'),
        delivery: 25
      },
      {
        name: 'Orange Juice',
        price: 499,
        image: require('../database/images/Vegeterian100/Others/orange_juice.png'),
        delivery: 45
      },
    ],
  },
  {
    name: 'Boba Bubble Tea',
    image: require('../database/images/Bubble_tea_gang/Logo/boba.png'),
    details: [
      {
        name: 'Gong Cha Milkshake',
        price: 299,
        image: require('../database/images/Bubble_tea_gang/Others/chocolate_milk_tea.png'),
        delivery: 10  
      },
      {
        name: 'Bubble Tea Frappe',
        price: 199,
        image: require('../database/images//Bubble_tea_gang/Others/frape.png'),
        delivery: 8
      },
      {
        name: 'Sundae Chocolate',
        price: 99,
        image: require('../database/images//Bubble_tea_gang/Others/sundae_chocolate.png'),
        delivery: 5
      },
    ],
  },
];
