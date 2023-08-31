import React from "react";
import "../styles/TopicListItem.scss";
import topics from "mocks/topics";


const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      {props.topic.title}
    </div>
  );
};

export default TopicListItem;
