import { postService } from "../services"
import { AsyncRequestHandler } from '../types';

interface postControllerInterface {
    postPost: AsyncRequestHandler;
}

export const postController: postControllerInterface = {
    async postPost(req, res) {
        const post = await postService.createPost(req.body);
        res.json({post});
    },
    
}