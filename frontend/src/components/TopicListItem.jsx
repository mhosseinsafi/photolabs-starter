import React from "react";
import "../styles/TopicListItem.scss";

//represent an individual item in a list of topics
const TopicListItem = (props) => {
  return (
    <div className="topic-list__item" onClick={() => props.onTopicSelect(props.topic.id)}>
      <span> {props.topic.title} </span>
    </div>
  );
};

export default TopicListItem;
