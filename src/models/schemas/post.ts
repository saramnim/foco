import {Schema} from "mongoose";

export interface PostInterface {
    uid: string;
    storeName: string;
    grade: number;
    img?: string;
    review: string;
    location: string;
    price: number;
}   

export const PostSchema = new Schema<PostInterface>({
    uid: {
        type: String,
        required: true
    },
    storeName: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    review: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
    
},
{
    timestamps: true,
    strictQuery: false,
}
)
