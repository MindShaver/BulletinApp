import React, { useState, useEffect } from "react"; //all of these are importing components to use here from other files
import BulletinItem from "../Item/BulletinItem";
import LocalData from "../../../Services/LocalData";
import { upVote } from "../../../Services/BulletinService";
import IBulletinData from "../../../Services/IBulletinData";
import { IBulletinStateProps } from "../Item/IBulletinStateProps";
import BulletinCreator from "../BulletinCreator";

const BulletinList: React.FC = () => {
  const [bulletinState, setBulletinState] = useState<IBulletinStateProps>({
    items: null,
    isLoaded: false
  });

  const handleSubmit = (data: IBulletinData) => {
    let bulletins = bulletinState.items;
    bulletins!.push(data);
    setBulletinState({ items: bulletins, isLoaded: true });
  };

  useEffect(() => {
    setBulletinState({ items: LocalData, isLoaded: true });
  }, []);
  const handleUpvote = (id: string) => {
    const bulletins = bulletinState.items;
    let bulletinItem = bulletins!.find((x: IBulletinData) => x.id === id);
    bulletinItem!.votes += 1;
    setBulletinState({ items: bulletins, isLoaded: true });
  };
  const handleRemove = (id: string) => {
    const bulletins = bulletinState.items;
    const filteredBulletins = bulletins!.filter(x => x.id !== id);
    setBulletinState({ items: filteredBulletins, isLoaded: true });
  };
  return (
    <div>
      <BulletinCreator handleSubmit={handleSubmit} />
      <div className="main ui text container">
        <div id="content">
          <div className="ui unstackable items">
            {bulletinState.isLoaded &&
              bulletinState
                .items!.sort((a, b) => {
                  return b.votes - a.votes;
                })
                .map(item => {
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
