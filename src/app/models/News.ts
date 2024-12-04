import mongoose, { Schema, model, models, Document } from 'mongoose';

interface INews extends Document {
  newss: string;
  newsurl: string;
  createdAt: Date;
}

const NewsSchema = new Schema<INews>({
  newss: { type: String, required: true },
  newsurl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const News = models.News || model<INews>('News', NewsSchema);

export default News;
