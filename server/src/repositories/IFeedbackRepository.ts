export interface FeedbackEntity {
  comment: string;
  id: string;
  screenshot: null | string;
  type: string;
}

export interface ICreateRepositoryData {
  comment: string;
  screenshot?: string;
  type: string;
}

interface IFeedbackRepository {
  create(data: ICreateRepositoryData): Promise<FeedbackEntity>;
}

export default IFeedbackRepository;
