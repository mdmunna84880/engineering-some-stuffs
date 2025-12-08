// types.ts

/**
 * Represents a single post entity from the data source.
 */
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/**
 * Useful if you need to pass props for a list of posts
 */
export interface PostFeedProps {
  posts: Post[];
}