import React from "react";
import BulletinItem from "../Item/BulletinItem";
import LocalData from "../../../Services/LocalData";
import { upVote } from "../../../Services/BulletinService";

const BulletinList: React.FC = () => {
  const handleUpvote = (id: string) => {
    upVote(id);
  };
  const handleRemove = (id: string) => {
    alert(id);
  };
  return (
    <div>
      <div className="main ui text container">
        <div id="content">
          <div className="ui unstackable items">
            {LocalData.sort((a, b) => {
              return b.votes - a.votes;
            }).map(item => {
              return (
                <BulletinItem
                  name={item.title}
                  votes={item.votes}
                  description={item.description}
                  id={item.id}
                  onVote={handleUpvote}
                  removeBulletin={handleRemove}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulletinList;
