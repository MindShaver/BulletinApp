import LocalData from "./LocalData";

export function upVote(id: string) {
  let item = LocalData.find(x => x.id === id);
  if (item) {
    item.votes++;
  }
}
