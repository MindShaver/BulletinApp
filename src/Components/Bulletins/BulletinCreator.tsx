import IBulletinData from "../../Services/IBulletinData";
import React from "react";
import uuid from "uuid";

export interface IBulletinCreatorProps {
  handleSubmit: (data: IBulletinData) => void;
}

const BulletinCreator: React.FC<IBulletinCreatorProps> = props => {
  const submit = () => {
    const bulletin: IBulletinData = {
      id: uuid.v4(),
      title: "sdfoij",
      description: "sdfj",
      votes: 2
    };
    props.handleSubmit(bulletin);
  };
  return <button onClick={submit}>Create Bulletin</button>;
};
export default BulletinCreator;
