import React from "react";

export const user = {
  id: 'vUAqPRNWgYdS2DyJNAC1lV5KpJF21',
  name: 'Chelsea Jones @chelsea',
  image: 'https://via.placeholder.com/500x500',
  address: 'Florida, USA',
  email: '@chelsea',
};

export const userInfo = {
  followers: '2k+',
  following: 847,
  friends: 327,
  isFollow: false
};

export const communityList = [
  {
    id: 1,
    title: 'Nature and Beaches',
    image: 'https://via.placeholder.com/600x400',
    postCount: 25
  },
  {
    id: 2,
    title: 'Agriculture Today',
    image: 'https://via.placeholder.com/600x400',
    postCount: 3
  },
  {
    id: 3,
    title: 'Tools and Machines',
    image: 'https://via.placeholder.com/600x400',
    postCount: 80
  },
  {
    id: 4,
    title: 'Magic Tricks',
    image: 'https://via.placeholder.com/600x400',
    postCount: 0
  },
  {
    id: 5,
    title: 'Taj & Agara',
    image: 'https://via.placeholder.com/600x400',
    postCount: 0
  }
];

export const eventList = [
  {
    id: 1,
    image: 'https://via.placeholder.com/600x400',
    title: 'Data Visualization Summit',
    date: '1 Aug 2018',
    address: 'pugal road ,Bikaner',
  }, {
    id: 2,
    image: 'https://via.placeholder.com/290x193',
    title: 'Daily Marathon',
    date: '11 Aug 2018',
    address: 'Havens Garden, UK',
  },
];

export const newsList = [
  {
    id: 1,
    image: 'https://via.placeholder.com/500x333',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
      ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of' +
      ' type and scrambled it to make a type specimen book. It has survived not only five centuries,',
  }, {
    id: 2,
    image: 'https://via.placeholder.com/600x400',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
      ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of' +
      ' type and scrambled it to make a type specimen book. It has survived not only five centuries,',
  },
];

export const interestList = [
  {
    id: 1,
    interest: 'Music'
  },
  {
    id: 2,
    interest: 'Drawing'
  },
  {
    id: 3,
    interest: 'Sports'
  },
  {
    id: 4,
    interest: 'Graphic Designing'
  },
  {
    id: 5,
    interest: 'Tourism'
  }
];

export const friendList = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150x150',
    name: 'Chelsea',
    status: 'online'

  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150x150',
    name: 'Kenery Thomson',
    status: 'offline'
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150x150',
    name: 'Amanda',
    status: 'away'

  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150x150',
    name: 'Joshua',
    status: 'away'
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/150x150',
    name: 'Alex Mulski',
    status: 'away'

  },
  {
    id: 6,
    image: 'https://via.placeholder.com/150x150',
    name: 'Stella Johnson',
    status: 'away'
  }
];

export const postList = [
  {
    id: 1,
    text: '',
    user: {id: 1, name: 'Kenery Thomson', image: 'https://via.placeholder.com/500x500'},
    date: 'Sun Jul 22 2018 10:02:47 GMT+0530 (India Standard Time)',
    mediaList: [{image: 'https://via.placeholder.com/600x400'}, {image: 'https://via.placeholder.com/600x400'}],
    viewCount: 350,
    likeCount: 150,
    isLike: false,
    commentCount: 0,
    commentList: [{
      user: {id: 1, name: 'Kenery Thomson', image: 'https://via.placeholder.com/150x150'},
      comment: 'Wow ! Excellent I particularly like the use of whitespace here Keep it up',
      date: 'Mon Jul 23 2018 10:02:47 GMT+0530 (India Standard Time)',
      isLike: true,
      likeCount: 2,
      commentList: []
    }]
  },
  {
    id: 2,
    text: '',
    user: {id: 1, name: 'Kenery Thomson', image: 'https://via.placeholder.com/150x150'},
    date: 'Fri Aug 03 2018 06:08:15 GMT+0530 (India Standard Time)',
    mediaList: [{image: 'https://via.placeholder.com/600x400'}, {image: 'https://via.placeholder.com/600x400'}, {image: 'https://via.placeholder.com/600x400'}],
    viewCount: 350,
    likeCount: 150,
    isLike: true,
    commentCount: 0,
    commentList: [{
      user: {id: 6, name: 'Kenery Thomson', image: 'https://via.placeholder.com/150x150'},
      comment: 'Wow ! Excellent I particularly like the use of whitespace here Keep it up',
      date: 'Fri Aug 03 2018 08:02:47 GMT+0530 (India Standard Time)',
      likeCount: 3,
      isLike: false,
      commentList: []
    }]
  },
  {
    id: 3,
    text: '',
    user: {id: 1, name: 'Kenery Thomson', image: 'https://via.placeholder.com/500x500'},
    date: 'Fri Aug 03 2018 06:08:15 GMT+0530 (India Standard Time)',
    mediaList: [{image: 'https://via.placeholder.com/600x400'}],
    viewCount: 350,
    likeCount: 150,
    isLike: true,
    commentCount: 0,
    commentList: [{
      user: {id: 6, name: 'Kenery Thomson', image: 'https://via.placeholder.com/150x150'},
      comment: 'Wow ! Excellent I particularly like the use of whitespace here Keep it up',
      date: 'Fri Aug 03 2018 08:02:47 GMT+0530 (India Standard Time)',
      likeCount: 3,
      isLike: false,
      commentList: []
    }]
  }
];

export const photoList = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150x150'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150x150'
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150x150'
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150x150'
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/150x150'

  },
  {
    id: 6,
    image: 'https://via.placeholder.com/150x150'
  },
];

export const communitiesList = [
  {
    id: 1,
    image: 'https://via.placeholder.com/116x90',
    title: 'Layers'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/116x90',
    title: 'play'
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/116x90',
    title: 'Fun & Tourism'
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/116x90',
    title: 'Music Lovers'
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/116x90',
    title: 'Dancing'
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/116x90',
    title: 'Fitness'
  },
];

export const recentActivity = [
  {
    id: 1,
    day: 'Today',
    tasks: [
      {
        id: 1,
        name: 'Mila Alba',
        title: [<span className="gx-link" key={1}>Mila Alba</span>, ' left a 5 star review on ',
          <span className="gx-link" key={2}>Albama’s House</span>],
        avatar: 'https://via.placeholder.com/150x150',
        imageList: [],
      },
      {
        id: 2,
        name: 'Bob Builder',
        title: ['Callback request from ', <span key={3} className="gx-link">Bob Builder</span>, ' for the property ',
          <span className="gx-link" key={4}>Dimitri House</span>],
        avatar: 'https://via.placeholder.com/150x150',
        imageList: [],
      },
      {
        id: 3,
        name: 'Tom Moody',
        title: ['Congratulations to ', <span key={5} className="gx-link">Tom Moody</span>,
          ' for joining 10+ club '],
        avatar: 'https://via.placeholder.com/150x150',
        imageList: [],
      },
      {
        id: 4,
        name: 'Norman Dolphi',
        title: ['Norman Dolphi is looking for a house in New Jersy, USA'],
        avatar: '',
        imageList: [],
      }
    ]
  },
  {
    id: 2,
    day: 'Yesterday',
    tasks: [
      {
        id: 5,
        name: 'Kily Johns',
        title: ['Agent ',
          <span key={6} className="gx-link">Kily Johns</span>, ' has added 7 new photos to the property ',
          <span key={7} className="gx-link">Albama’s House</span>],
        avatar: '',
        imageList: ['https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150'],
      },
      {
        id: 6,
        name: 'Tom Moody',
        title: ['Welcome to a new agent ', <span className="gx-link" key={8}>Tom Moody in the Company</span>],
        avatar: 'https://via.placeholder.com/150x150',
        imageList: [],
      },
      {
        id: 7,
        name: 'Oliver Shorter',
        title: [<span key={9} className="gx-link">Oliver Shorter</span>, ' is looking for an office space in ',
          <span key={10} className="gx-link">Colorado, USA</span>],
        avatar: 'https://via.placeholder.com/150x150',
        imageList: [],
      }
    ]
  }];





