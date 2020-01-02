import React from "react";
import BulletinItem from "../Item/BulletinItem";
import LocalData from "../../../Services/LocalData";

const BulletinList: React.FC = () => {
  return (
    <div>
      <div className="main ui text container">
        <div id="content">
          <div className="ui unstackable items">
            {LocalData.map(item => {
              return (
                <BulletinItem
                  name={item.title}
                  votes={item.votes}
                  description={item.description}
                  id={item.id}
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
