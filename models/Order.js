import { Schema } from "mongoose"
import { models } from "mongoose";
import { model } from "mongoose";


const OrderSchema = new Schema({

    line_items: Object,
    name: String,
    email: String,
    city: String,
    postalCode: String,
    streeAddress: String,
    country: String,
    paid: Boolean,




}, {

    timestamps: true,



});

export const Order = models?.Order ||
    model('Order', OrderSchema);