import { beforeEach, describe, expect, it, mock } from 'bun:test';

import type IMailProvider from '../providers/IMailProvider';
import type IFeedbackRepository from '../repositories/IFeedbackRepository';
import SubmitFeedbackService from './SubmitFeedbackService';

const mockedFeedbackRepository: IFeedbackRepository = {
  create: mock((data) => Promise.resolve(data)),
};
const mockedMailProvider: IMailProvider = {
  send: mock(),
};

describe('Feedback submission', () => {
  let submitFeedbackService: SubmitFeedbackService;

  beforeEach(() => {
    mock.restore();
    submitFeedbackService = new SubmitFeedbackService(mockedFeedbackRepository, mockedMailProvider);
  });

  it('should create a feedback without a screenshot', async () => {
    const servicePromise = submitFeedbackService.execute({
      type: 'bug',
      comment: 'This is a bug',
      screenshot: undefined,
    });

    await expect(servicePromise).resolves.toBeUndefined();
    expect(mockedFeedbackRepository.create).toHaveBeenCalled();
    expect(mockedMailProvider.send).toHaveBeenCalled();
  });

  it('should create a feedback with a screenshot', async () => {
    const servicePromise = submitFeedbackService.execute({
      type: 'bug',
      comment: 'This is a bug',
      screenshot: 'data:image/png;base64,jsano74ahqlu4fnbqo4',
    });

    await expect(servicePromise).resolves.toBeUndefined();
    expect(mockedFeedbackRepository.create).toHaveBeenCalled();
    expect(mockedMailProvider.send).toHaveBeenCalled();
  });

  it('should not create a feedback without a type', async () => {
    const servicePromise = submitFeedbackService.execute({
      type: '',
      comment: 'This is a bug',
      screenshot: 'data:image/png;base64,jsano74ahqlu4fnbqo4',
    });

    await expect(servicePromise).rejects.toThrow();
  });

  it('should not create a feedback without a comment', async () => {
    const servicePromise = submitFeedbackService.execute({
      type: 'bug',
      comment: '',
      screenshot: 'data:image/png;base64,jsano74ahqlu4fnbqo4',
    });

    await expect(servicePromise).rejects.toThrow();
  });

  it('should not create a feedback with an invalid screenshot', async () => {
    const servicePromise = submitFeedbackService.execute({
      type: 'bug',
      comment: 'This is a bug',
      screenshot: 'test.png',
    });

    await expect(servicePromise).rejects.toThrow();
  });
});
