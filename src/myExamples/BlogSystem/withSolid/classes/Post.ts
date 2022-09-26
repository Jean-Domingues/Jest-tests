import { PostType, CommentType, NotificationProtocol } from '../interfaces';

export class Post implements PostType {
  public likes = 0;
  public comments: CommentType[] = [];

  constructor(
    public userName: string,
    public title: string,
    public notificationService: NotificationProtocol,
  ) {}

  addCommentToPost(message: string, username: string): void {
    this.comments.push({ username, message });
    this.notificationService.send(this.userName, `Novo comentário no post ${this.title}`);
  }

  likePost(): void {
    this.likes += 1;
    this.notificationService.send(this.userName, `Nova curtida no post ${this.title}`);
  }
}
