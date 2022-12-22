import { postModel, postModelType } from "../models";
import { PostInterface } from "../models/schemas/post";
import { ObjectId } from 'mongodb';

class PostServie {
    private Post: postModelType;

    constructor(postModel: postModelType) {
        this.Post =postModel;
    }

    async createPost(postInfo: PostInterface) {
        const {
            user,
            storeName,
            grade,
            img,
            review,
            city,
            address,
            price,
            like,
            lat,
            lng
        } = postInfo;
        return await this.Post.create(postInfo);
    }

    async patchPost(_id: string, postInfo: PostInterface) {
        return await this.Post.findOneAndUpdate({_id}, { $set: postInfo});
    }
}

const postService = new PostServie(postModel);

export { postService };