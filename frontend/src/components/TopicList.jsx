import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} onTopicSelect={props.onTopicSelect}/>
      ))}
    </div>
  );
};

export default TopicList;
