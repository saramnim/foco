import {Schema} from "mongoose";

export interface PostInterface {
    user: string;
    storeName: string;
    grade: number;
    img?: string;
    review: string;
    city: string;
    address: string;
    price: number;
    like: number;
    lat: number;
    lng: number;
}   

export const PostSchema = new Schema<PostInterface>({
    user: {
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
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    like: {
        type: Number,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    }
    
},
{
    timestamps: true,
}
)
