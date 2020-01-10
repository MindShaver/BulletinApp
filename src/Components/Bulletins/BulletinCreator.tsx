import IBulletinData from "../../Services/IBulletinData";
import React, { useState } from "react";
import uuid from "uuid";

export interface IBulletinCreatorProps {
  handleSubmit: (data: IBulletinData) => void;
}

const BulletinCreator: React.FC<IBulletinCreatorProps> = props => {
  const [title, setTitle] = useState("");

  const submit = (evt: any) => {
    evt.preventDefault();
    const bulletin: IBulletinData = {
      id: uuid.v4(),
      title: title,
      description: "sdfj",
      votes: 2
    };
    props.handleSubmit(bulletin);
  };
  return (
    <form onSubmit={submit}>
      <label>
        Bulletin Title:
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
export default BulletinCreator;
