import React from "react";
import AvatarImage from "../../../images/avatars/daniel.jpg";
import ProductImage from "../../../images/products/image-aqua.png";
import { prependToMemberExpression } from "@babel/types";
import { IBulletinItemProps } from "./IBulletinItemProps";

const BulletinItem: React.FC<IBulletinItemProps> = props => {
  return (
    <div className="item">
      <div className="image">
        <img alt="User" src={ProductImage} />
      </div>
      <div className="middle aligned content">
        <div className="header">
          <a onClick={() => props.onVote(props.id)}>
            <i className="large caret up icon" />
          </a>
          Votes: {props.votes}
        </div>
        <div className="description">
          <a href={"#"}>{props.name}</a>
          <p>{props.description}</p>
        </div>
        <div className="extra">
          <span>Submitted by:</span>
          <img className="ui avatar image" alt="Avatar" src={AvatarImage} />
        </div>
      </div>

      <button onClick={() => props.removeBulletin(props.id)} type="button">
        X
      </button>
    </div>
  );
};

export default BulletinItem;
