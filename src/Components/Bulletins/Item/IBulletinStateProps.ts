import IBulletinData from "../../../Services/IBulletinData";

export interface IBulletinStateProps {
  items: IBulletinData[] | null;
  isLoaded: boolean;
}
