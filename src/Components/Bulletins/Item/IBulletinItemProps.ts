export interface IBulletinItemProps {
  name: string;
  votes: number;
  description: string;
  id: string;
  onVote: (id: string) => void;
  removeBulletin: (id: string) => void;
}
