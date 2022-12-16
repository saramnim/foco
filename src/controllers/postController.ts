import { PostInterface } from "../models/schemas/post";
import { postService } from "../services"
import { AsyncRequestHandler } from '../types';

interface postControllerInterface {
    postPost: AsyncRequestHandler;
    patchPost: AsyncRequestHandler;
}

export const postController: postControllerInterface = {
    async postPost(req, res) {
        const post = await postService.createPost(req.body);
        res.json({post});
    },
    async patchPost(req, res) {
        const { id } = req.params;
        const newInfo: PostInterface = req.body;
        const post = await postService.patchPost(id, newInfo);
        res.json(post);
    }
    
}