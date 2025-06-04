//lib/Schema.js

import mongoose from 'mongoose';

const placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    landmark: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
},{
    collection: 'places'
});

export default mongoose.models.Place || mongoose.model('Place', placeSchema);
