export interface Image {
  id?: string;
  imageId: string;
  likes: number;
  dislikes: number;
  likers: string[];
  dislikers: string[];
}