import { PostType } from '../interfaces';

export class ManagePosts {
  private readonly posts: PostType[] = [];
  private lastPostId = 0;

  addNewPost(post: PostType): void {
    const newPostId = this.lastPostId + 1;

    this.posts.push({ ...post, postId: newPostId });
    this.lastPostId = newPostId;
  }

  listPosts(): PostType[] {
    return this.posts;
  }

  findPost(postId: number): PostType | void {
    const result = this.posts.find((post) => post.postId === postId);

    if (result) return result;
  }

  deletePost(postId: number): void {
    const postItem = this.findPost(postId);

    if (postItem) {
      postItem.deleted = true;
    }
  }
}
