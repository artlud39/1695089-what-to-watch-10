import { FilmsType } from '../types/films';

// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const titles: string[] = [
  'Midnight Special',
  'Macbeth',
  'Bohemian Rhapsody',
  'Aviator',
  'We need to talk about Kevin',
  'What We Do in the Shadows',
  'Revenant',
  'Johnny English',
  'Shutter Island',
  'Pulp Fiction',
  'No Country for Old Men',
  'Snatch',
  'Moonrise Kingdom',
  'Seven Years in Tibet',
  'War of the Worlds',
  'Dardjeeling Limited',
  'Orlando',
  'Mindhunter',
];

const pictures: string[] = [
  'img/bohemian-rhapsody.jpg',
  'img/macbeth.jpg',
  'img/aviator.jpg',
  'img/we-need-to-talk-about-kevin.jpg',
  'img/what-we-do-in-the-shadows.jpg',
  'img/revenant.jpg',
  'img/johnny-english.jpg',
  'img/shutter-island.jpg',
  'img/pulp-fiction.jpg',
  'img/no-country-for-old-men.jpg',
  'img/snatch.jpg',
  'img/moonrise-kingdom.jpg',
  'img/seven-years-in-tibet.jpg',
  'img/midnight-special.jpg',
  'img/war-of-the-worlds.jpg',
  'img/dardjeeling-limited.jpg',
  'img/orlando.jpg',
  'img/mindhunter.jpg',
  'img/midnight-special.jpg'
];

export const films: FilmsType[] = [
  {
    id: '1',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    poster: 'img/player-poster.jpg',
    title: titles[getRandomInteger(0, titles.length - 1)],
    bigPicture: 'img/bg-the-grand-budapest-hotel.jpg',
    picture: pictures[getRandomInteger(0, pictures.length - 1)],
    genre: 'Comedy',
    released: 2011,
    runTime: '1h 39m',
    starring: ['Bill Murray','Edward Norton','Jude Law','Willem Dafoe','Saoirse Ronan','Tony Revoloru','Tilda Swinton'],
    director: 'Wes Anderson',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave`s friend and protege.',
    rating: 8.9,
    ratingLevel: 'Very good',
    ratingCount:  240,
    reviews: [
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Kate Muir',
        dateReview: 'December 24, 2018'
      },
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Bill Goodykoontz',
        dateReview: 'November 18, 2015'
      },
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Amanda Greever',
        dateReview: 'November 18, 2015'
      }
    ]
  },
  {
    id: '2',
    video: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    poster: 'img/player-poster.jpg',
    title: titles[getRandomInteger(0, titles.length - 1)],
    bigPicture: 'img/bg-the-grand-budapest-hotel.jpg',
    picture: pictures[getRandomInteger(0, pictures.length - 1)],
    genre: 'Comedy',
    released: 2012,
    runTime: '1h 39m',
    starring: ['Bill Murray','Edward Norton','Jude Law','Willem Dafoe','Saoirse Ronan','Tony Revoloru','Tilda Swinton'],
    director: 'Wes Anderson',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave`s friend and protege.',
    rating: 8.9,
    ratingLevel: 'Very good',
    ratingCount:  240,
    reviews: [
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Kate Muir',
        dateReview: 'December 24, 2018'
      },
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Bill Goodykoontz',
        dateReview: 'November 18, 2015'
      },
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Amanda Greever',
        dateReview: 'November 18, 2015'
      }
    ]
  },
  {
    id: '3',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    poster: 'img/player-poster.jpg',
    title: titles[getRandomInteger(0, titles.length - 1)],
    bigPicture: 'img/bg-the-grand-budapest-hotel.jpg',
    picture: pictures[getRandomInteger(0, pictures.length - 1)],
    genre: 'Comedy',
    released: 2013,
    runTime: '1h 39m',
    starring: ['Bill Murray','Edward Norton','Jude Law','Willem Dafoe','Saoirse Ronan','Tony Revoloru','Tilda Swinton'],
    director: 'Wes Anderson',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave`s friend and protege.',
    rating: 8.9,
    ratingLevel: 'Very good',
    ratingCount:  240,
    reviews: [
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Kate Muir',
        dateReview: 'December 24, 2018'
      },
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Bill Goodykoontz',
        dateReview: 'November 18, 2015'
      },
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Amanda Greever',
        dateReview: 'November 18, 2015'
      }
    ]
  },
  {
    id: '4',
    video: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    poster: 'img/player-poster.jpg',
    title: titles[getRandomInteger(0, titles.length - 1)],
    bigPicture: 'img/bg-the-grand-budapest-hotel.jpg',
    picture: pictures[getRandomInteger(0, pictures.length - 1)],
    genre: 'Comedy',
    released: 2014,
    runTime: '1h 39m',
    starring: ['Bill Murray','Edward Norton','Jude Law','Willem Dafoe','Saoirse Ronan','Tony Revoloru','Tilda Swinton'],
    director: 'Wes Anderson',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave`s friend and protege.',
    rating: 8.9,
    ratingLevel: 'Very good',
    ratingCount:  240,
    reviews: [
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Kate Muir',
        dateReview: 'December 24, 2018'
      },
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Bill Goodykoontz',
        dateReview: 'November 18, 2015'
      },
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Amanda Greever',
        dateReview: 'November 18, 2015'
      }
    ]
  },
  {
    id: '5',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    poster: 'img/player-poster.jpg',
    title: titles[getRandomInteger(0, titles.length - 1)],
    bigPicture: 'img/bg-the-grand-budapest-hotel.jpg',
    picture: pictures[getRandomInteger(0, pictures.length - 1)],
    genre: 'Comedy',
    released: 2015,
    runTime: '1h 39m',
    starring: ['Bill Murray','Edward Norton','Jude Law','Willem Dafoe','Saoirse Ronan','Tony Revoloru','Tilda Swinton'],
    director: 'Wes Anderson',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave`s friend and protege.',
    rating: 8.9,
    ratingLevel: 'Very good',
    ratingCount:  240,
    reviews: [
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Kate Muir',
        dateReview: 'December 24, 2018'
      },
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Bill Goodykoontz',
        dateReview: 'November 18, 2015'
      },
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Amanda Greever',
        dateReview: 'November 18, 2015'
      }
    ]
  },
  {
    id: '6',
    video: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    poster: 'img/player-poster.jpg',
    title: titles[getRandomInteger(0, titles.length - 1)],
    bigPicture: 'img/bg-the-grand-budapest-hotel.jpg',
    picture: pictures[getRandomInteger(0, pictures.length - 1)],
    genre: 'Comedy',
    released: 2016,
    runTime: '1h 39m',
    starring: ['Bill Murray','Edward Norton','Jude Law','Willem Dafoe','Saoirse Ronan','Tony Revoloru','Tilda Swinton'],
    director: 'Wes Anderson',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave`s friend and protege.',
    rating: 8.9,
    ratingLevel: 'Very good',
    ratingCount:  240,
    reviews: [
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Kate Muir',
        dateReview: 'December 24, 2018'
      },
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Bill Goodykoontz',
        dateReview: 'November 18, 2015'
      },
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Amanda Greever',
        dateReview: 'November 18, 2015'
      }
    ]
  },
  {
    id: '7',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    poster: 'img/player-poster.jpg',
    title: titles[getRandomInteger(0, titles.length - 1)],
    bigPicture: 'img/bg-the-grand-budapest-hotel.jpg',
    picture: pictures[getRandomInteger(0, pictures.length - 1)],
    genre: 'Comedy',
    released: 2017,
    runTime: '1h 39m',
    starring: ['Bill Murray','Edward Norton','Jude Law','Willem Dafoe','Saoirse Ronan','Tony Revoloru','Tilda Swinton'],
    director: 'Wes Anderson',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave`s friend and protege.',
    rating: 8.9,
    ratingLevel: 'Very good',
    ratingCount:  240,
    reviews: [
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Kate Muir',
        dateReview: 'December 24, 2018'
      },
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Bill Goodykoontz',
        dateReview: 'November 18, 2015'
      },
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Amanda Greever',
        dateReview: 'November 18, 2015'
      }
    ]
  },
  {
    id: '8',
    video: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    poster: 'img/player-poster.jpg',
    title: titles[getRandomInteger(0, titles.length - 1)],
    bigPicture: 'img/bg-the-grand-budapest-hotel.jpg',
    picture: pictures[getRandomInteger(0, pictures.length - 1)],
    genre: 'Comedy',
    released: 2018,
    runTime: '1h 39m',
    starring: ['Bill Murray','Edward Norton','Jude Law','Willem Dafoe','Saoirse Ronan','Tony Revoloru','Tilda Swinton'],
    director: 'Wes Anderson',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave`s friend and protege.',
    rating: 8.9,
    ratingLevel: 'Very good',
    ratingCount:  240,
    reviews: [
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Kate Muir',
        dateReview: 'December 24, 2018'
      },
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Bill Goodykoontz',
        dateReview: 'November 18, 2015'
      },
      {
        text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed films in years.',
        reviewRating: 8.9,
        nickname: 'Amanda Greever',
        dateReview: 'November 18, 2015'
      }
    ]
  }
];


