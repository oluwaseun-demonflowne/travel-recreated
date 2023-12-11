export type GetItemByIdFunc = (id: string) => Number;
export type ScrollToItemFunc = (id: string) => void;
export type IsItemSelectedFunc = (id: string) => boolean;
export type SetSelectedFunc = React.Dispatch<React.SetStateAction<string[]>>;

export interface ClickHandlerProps {
  getItemById: GetItemByIdFunc;
  scrollToItem: ScrollToItemFunc;
  isItemSelected: IsItemSelectedFunc;
  setSelected: SetSelectedFunc;
}


/* eslint-disable */

export interface Cars {
  id: string;
  category: string;
  creator: string;
  carName: string;
  location: string;
  price: number;
  image1: string;
  image2: string;
  image3: string;
  passengerNo: number;
  luggageNo: number;
  trans: string;
  overview: string;
  duration: string;
  meetGreet: string;
  shuttle: string;
  size: string;
  wifi: string;
  fmRadio: string;
  airBag: string;
  powerWindows: string;
  sensor: string;
  speed: string;
  steering: string;
  safety: string;
  User: User;
  Like: Like[];
  carComment: carComment[];
}

export interface Flights {
  id: string;
  category: string;
  creator: string;
  image1: string;
  image2: string;
  image3: string;
  startingLocationInitial: string;
  startingLocation: string;
  endingLocationInitial: string;
  endingLocation: string;
  price: number;
  departureTime: number;
  arrivalTime: number;
  duration: number;
  flightClass: string;
  stop: string;
  airline: string;
  Like: Like[];
  flightComment: flightComment[];
}

interface Hotels {
  id: string;
  category: string;
  personWhoCreatedPost: User;
  creator: string;
  image1: string;
  image2: string;
  image3: string;
  hotelName: string;
  shortHotelDescription: string;
  location: string;
  price: number;
  guestNo: string;
  roomNo: string;
  privateBathNo: string;
  cancelFree: string;
  reserveNow: string;
  specialOffer: string;
  breakfast: string;
  romantic: string;
  airport: string;
  overview: string;
  wifi: string;
  star: string;
  hotelType: string;
  dedicated: string;
  checkIn: string;
  freeCancel: string;
  wifiIncluded: string;
  bathroom: string;
  smoking: string;
  breakfastIncluded: string;
  gym: string;
  atm: string;
  pool: string;
  city: string;
  hotelComment: HotelComment[];
  likes: Like[];
}

export interface Like {
  id: string;
  userId: string;
  carId: string;
  flightId: string;
  hotelId: string;
  locationId: string;
  Cars: Cars;
  Flights: Flights;
  Hotels: Hotels;
  Locations: Locations;
  User: User;
}

export interface Locations {
  id: string;
  category: string;
  creator: string;
  image1: string;
  image2: string;
  image3: string;
  locationCaption: string;
  locationAt: string;
  price: number;
  language: string;
  freeCancel: string;
  day: string;
  group: string;
  tour: string;
  cancelFreely: string;
  activityType: string;
  title1: string;
  included1: string;
  title2: string;
  included2: string;
  title3: string;
  included3: string;
  overview: string;
  wifi: string;
  cleanBathroom: string;
  smoking: string;
  breakfast: string;
  gym: string;
  atm: string;
  swimming: string;
  city: string;
  Like: Like[];
  User: User;
  locationComment: locationComment[];
}

export interface User {
  id: string;
  firstName: string;
  lastName?: string | null;
  phoneNumber?: number | null;
  livesIn?: string | null;
  language?: string | null;
  password: string;
  email: string;
  emailVerified?: Date | null;
  bio?: string | null;
  coverPhoto?: string | null;
  profilePhoto?: string | null;
  accounts: Account[];
  sessions: Session[];
  hotelComment: HotelComment[];
  carComment: CarComment[];
  locationComment: LocationComment[];
  flightComment: FlightComment[];
  likes: Like[];
  hotelPost: Hotel[];
  carPost: Car[];
  locationPost: Location[];
}


export interface carComment {
  id: string;
  comment: string;
  carId: string;
  userId: string;
  Cars: Cars;
  User: User;
}

export interface flightComment {
  id: string;
  comment: string;
  flightId: string;
  userId: string;
  Flights: Flights;
  User: User;
}

export interface hotelComment {
  id: string;
  comment: string;
  hotelId: string;
  userId: string;
  Hotels: Hotels;
  User: User;
}

export interface locationComment {
  id: string;
  comment: string;
  locationId: string;
  userId: string;
  Locations: Locations;
  User: User;
}


export interface HotelCommentData {
    comment: string;
    hotelId: string;
    id: string;
    personWhoCommented: {
      bio: string;
      coverPhoto: string;
      email: string;
      firstName: string;
      id: string;
      language: string;
      lastName: string;
      livesIn: string;
      password: string;
      phoneNumber: string;
      profilePhoto: string;
      userId: string;
    };
}