interface Trip {
    id: number;
    image: string;
    location: string;
    noOfTravellers: number;
    promo: number; 
  }
  

export const TodayDeal:Trip[] = [
    {
        id:1,
        image:'/TopDeal/athens.jpg',
        location:'Athens, Greece',
        noOfTravellers:150000,
        promo: 0.5
    },
    {
        id:2,
        image:'/TopDeal/bangkok.jpg',
        location:'BangKok, Thailand',
        noOfTravellers:150000,
        promo: 10
    },
    {
        id:3,
        image:'/TopDeal/toronto.jpg',
        location:'Toronto, Canada',
        noOfTravellers:150000,
        promo: 15
    },
    {
        id:4,
        image:'/TopDeal/london.jpg',
        location:'London, England',
        noOfTravellers:150000,
        promo: 8
    },
    {
        id:5,
        image:'/TopDeal/new york.jpg',
        location:'New York, USA',
        noOfTravellers:150000,
        promo: 6
    },
    {
        id:6,
        image:'/TopDeal/rome.jpg',
        location:'Rome, Italy',
        noOfTravellers:150000,
        promo: 10
    },
    {
        id:7,
        image:'/TopDeal/seoul.jpg',
        location:'Seoul, South Korea',
        noOfTravellers:150000,
        promo: 20
    },
    {
        id:8,
        image:'/TopDeal/tokyo.jpg',
        location:'Tokyo, Japan',
        noOfTravellers:150000,
        promo: 10
    },
]