type PostType = {
  postId: number;
  userName: string;
  title: string;
  likes: number;
  comments: CommentType[];
  deleted?: boolean;
};

type CommentType = {
  username: string;
  message: string;
};

export class ManagePosts {
  private readonly posts: PostType[] = [];
  private lastPostId = 0;

  addNewPost(userName: string, title: string): void {
    const post: PostType = {
      postId: this.lastPostId + 1,
      userName,
      title,
      likes: 0,
      comments: [],
    };

    this.posts.push(post);

    this.lastPostId += 1;
  }

  listPosts(): PostType[] {
    return this.posts;
  }

  findPost(postId: number): PostType | void {
    const result = this.posts.find((post) => post.postId === postId);

    if (result) return result;
  }

  likePost(postId: number): void {
    const postItem = this.findPost(postId);

    if (postItem) {
      postItem.likes += 1;

      this.notificationUser(postItem.userName, `Nova curtida no post ${postItem.title}`);
    }
  }

  addCommentToPost(postId: number, message: string, username: string): void {
    const postItem = this.findPost(postId);

    if (postItem) {
      postItem.comments?.push({ username, message });
      this.notificationUser(postItem.userName, `Novo comentário no post ${postItem.title}`);
    }
  }

  deletePost(postId: number): void {
    const postItem = this.findPost(postId);

    if (postItem) {
      postItem.deleted = true;
    }
  }

  notificationUser(userName: string, contextMessage: string): void {
    return console.log(`O usuário ${userName} foi notificado sobre: ${contextMessage}`);
  }
}

const managerOfPosts = new ManagePosts();

managerOfPosts.addNewPost('jeanDomingues', 'post sobre principios solid');
managerOfPosts.addNewPost('jeanDomingues', 'post sobre programação');

console.log(managerOfPosts.listPosts());

managerOfPosts.likePost(1);
managerOfPosts.addCommentToPost(1, 'que bacana', 'joaoFelipe');

console.log(JSON.stringify(managerOfPosts.listPosts(), null, 2));
