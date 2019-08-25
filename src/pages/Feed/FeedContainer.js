import React, { Component } from 'react';
import FeedPresenter from './FeedPresenter';

const feeds = [
  {
    id: 'id1',
    userId: 'userId1',
    profile_img: 'img',
    title: 'title1',
    description: 'description1',
    image: '1'
  },
  {
    id: 'id2',
    userId: 'userId2',
    profile_img: 'img',
    title: 'title2',
    description: 'description2',
    image: '2'
  },
  {
    id: 'id3',
    userId: 'userId3',
    profile_img: 'img',
    title: 'title3',
    description: 'description3',
    image: '3'
  },
  {
    id: 'id4',
    userId: 'userId4',
    profile_img: 'img',
    title: 'title4',
    description: 'description4',
    image: '4'
  }
];

class FeedContainer extends Component {
  constructor(props) {
    super(props);

    // const random = new Date().getMilliseconds() % 2;
    const random = 1;
    this.props.setNewFeed(random === 1 ? feeds : []);
    this.props.setFollowingList([]);
  }

  render() {
    return <FeedPresenter />;
  }
}

export default FeedContainer;
