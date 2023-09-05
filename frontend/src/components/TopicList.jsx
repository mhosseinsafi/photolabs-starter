import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

//rendering a list of topics, where each topic is represented by a TopicListItem component
const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} onTopicSelect={props.onTopicSelect} />
      ))}
    </div>
  );
};

export default TopicList;
