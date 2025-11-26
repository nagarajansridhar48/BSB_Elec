import { Conference_Rooms, Meeting_Rooms, Training_Rooms } from './assets/asset'

const data = [
  {
    name: 'Row 1',
    height: 350,
    innerCards: [
      { title: 'Card 1', image: Conference_Rooms },
      { title: 'Card 2', image: Meeting_Rooms },
      { title: 'Card 3', image: Training_Rooms },
      { title: 'Card 4', image: Conference_Rooms },
    ],
  },
  {
    name: 'Row 2',
    height: 350,
    innerCards: [
      { title: 'Card A', image: Conference_Rooms },
      { title: 'Card B', image: Meeting_Rooms },
      { title: 'Card C', image: Training_Rooms },
      { title: 'Card D', image: Conference_Rooms },
    ],
  },
]

export default data
