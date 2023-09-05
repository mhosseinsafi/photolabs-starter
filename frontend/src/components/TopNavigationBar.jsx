import React from 'react';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';

// top navigation bar of a user interface
const TopNavigationBar = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} onTopicSelect={props.onTopicSelect} />
      <FavBadge hasLikedPhotos={props.hasLikedPhotos} />
    </div>
  )
}

export default TopNavigationBar;