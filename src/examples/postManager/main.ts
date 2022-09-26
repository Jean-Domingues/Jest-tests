import { Post } from './classes/Post';
import { ManagePosts } from './classes/ManagePosts';
import { NotificationService } from './services/NotificationService';

const notification = new NotificationService();

const post1 = new Post('jeanDomingues', 'testes com Jest', notification);
const post2 = new Post('carlosAdao', 'uma noite fria', notification);
const post3 = new Post('mariaJose', 'livro sobre scrum', notification);

const postManager = new ManagePosts();

postManager.addNewPost(post1);
postManager.addNewPost(post2);
postManager.addNewPost(post3);

post1.addCommentToPost('legal esse post', 'mariaJose');

postManager.deletePost(2);

console.log(JSON.stringify(postManager.listPosts(), null, 2));
