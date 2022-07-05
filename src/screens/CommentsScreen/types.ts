export interface ICommentsScreenPost {
  id: string;
  comment: string;
  user: {
    id: string;
    image: string;
    username: string;
  };
}
