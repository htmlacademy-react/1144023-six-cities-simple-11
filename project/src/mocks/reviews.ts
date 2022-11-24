import { ReviewType } from '../types/review';
import { getRandomAvatar } from '../utils/utils';

export const reviews: ReviewType[] = [
  {
    id: 1,
    user: {
      id: 54,
      isPro: true,
      name: 'Dylan',
      avatarUrl: getRandomAvatar(),
    },
    rating: 4,
    comment:
      'The location was brilliant and the staff were very friendly and welcoming. The room had air con, a new tv and all the basic essentials you would expect from a good budget hotel.',
    date: '2022-11-15T16:03:15+00:00',
  },
  {
    id: 2,
    user: {
      id: 18,
      isPro: false,
      name: 'Natalie',
      avatarUrl: getRandomAvatar(),
    },
    rating: 5,
    comment:
      'Perfect location, literally in the middle of everything. You can walk out of the door and have so many bars, restaurants and coffee shops right on your doorstep. Also the staff are so friendly and helpful',
    date: '2022-11-17T06:11:11+00:00',
  },
  {
    id: 3,
    user: {
      id: 87,
      isPro: false,
      name: 'Alex',
      avatarUrl: getRandomAvatar(),
    },
    rating: 5,
    comment:
      'Overall we had a lovely stay. Staff are lovely and the hotel is nicely decorated with lovely rooms. bigger than I expected and with almost no issues at all. would happily stay again!',
    date: '2022-11-27T20:35:11+00:00',
  },
  {
    id: 4,
    user: {
      id: 94,
      isPro: true,
      name: 'Tailor',
      avatarUrl: getRandomAvatar(),
    },
    rating:3,
    comment:
      'The hotel was overcrowded and didnt have enough staff to cope. Our room still had used sanitary products in the bin from previous guests and dirty glasses and bottles left outside of our room. ',
    date: '2022-09-13T22:35:11+00:00',
  },
];
