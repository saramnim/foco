import { Model, model } from "mongoose";
import { PostSchema, PostInterface } from "./schemas/post";

interface ModelIdentifierInterface {
    post: string;
}

export const ModelIdentifier: ModelIdentifierInterface ={
    post: 'post'    
};

const postModel = model<PostInterface>(ModelIdentifier.post, PostSchema);

type postModelType = Model<PostInterface>;

export {
    postModel, postModelType
}