import { postModel, postModelType } from "../models";
import { PostInterface } from "../models/schemas/post";

class PostServie {
    private Post: postModelType;

    constructor(postModel: postModelType) {
        this.Post =postModel;
    }

    async createPost(postInfo: PostInterface) {
        const {
            uid,
            storeName,
            grade,
            img,
            review,
            location,
            price
        } = postInfo;
        return await this.Post.create(postInfo);
    }
}

const postService = new PostServie(postModel);

export { postService };