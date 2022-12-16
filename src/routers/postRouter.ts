import { Router } from 'express';
import { postController } from '../controllers';
import { asynHandler } from '../utils/asynHandler';

export const postRouter = Router();

postRouter.post('/', asynHandler(postController.postPost));
postRouter.patch('/:id', asynHandler(postController.patchPost));