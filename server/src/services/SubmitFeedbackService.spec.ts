import SubmitFeedbackService from './SubmitFeedbackService';

describe('Feedback submission', () => {
  it('should create a feedback without a screenshot', async () => {
    const feedbackRepositoryCreateSpy = jest.fn(() => ({}) as any);
    const mailAdapterSendSpy = jest.fn();

    const submitFeedbackService = new SubmitFeedbackService(
      { create: feedbackRepositoryCreateSpy },
      { send: mailAdapterSendSpy },
    );

    const servicePromise = submitFeedbackService.execute({
      type: 'bug',
      comment: 'This is a bug',
      screenshot: undefined,
    });

    await expect(servicePromise).resolves.not.toThrow();
    expect(feedbackRepositoryCreateSpy).toHaveBeenCalled();
    expect(mailAdapterSendSpy).toHaveBeenCalled();
  });

  it('should create a feedback with a screenshot', async () => {
    const feedbackRepositoryCreateSpy = jest.fn(
      () => ({ screenshot: 'data:image/png;base64,jsano74ahqlu4fnbqo4' }) as any,
    );
    const mailAdapterSendSpy = jest.fn();

    const submitFeedbackService = new SubmitFeedbackService(
      { create: feedbackRepositoryCreateSpy },
      { send: mailAdapterSendSpy },
    );

    const servicePromise = submitFeedbackService.execute({
      type: 'bug',
      comment: 'This is a bug',
      screenshot: 'data:image/png;base64,jsano74ahqlu4fnbqo4',
    });

    await expect(servicePromise).resolves.not.toThrow();
    expect(feedbackRepositoryCreateSpy).toHaveBeenCalled();
    expect(mailAdapterSendSpy).toHaveBeenCalled();
  });

  it('should not create a feedback without a type', async () => {
    const submitFeedbackService = new SubmitFeedbackService(
      { create: async () => ({}) as any },
      { send: async () => {} },
    );

    const servicePromise = submitFeedbackService.execute({
      type: '',
      comment: 'This is a bug',
      screenshot: 'data:image/png;base64,jsano74ahqlu4fnbqo4',
    });

    await expect(servicePromise).rejects.toThrow();
  });

  it('should not create a feedback without a comment', async () => {
    const submitFeedbackService = new SubmitFeedbackService(
      { create: async () => ({}) as any },
      { send: async () => {} },
    );

    const servicePromise = submitFeedbackService.execute({
      type: 'bug',
      comment: '',
      screenshot: 'data:image/png;base64,jsano74ahqlu4fnbqo4',
    });

    await expect(servicePromise).rejects.toThrow();
  });

  it('should not create a feedback with an invalid screenshot', async () => {
    const submitFeedbackService = new SubmitFeedbackService(
      { create: async () => ({}) as any },
      { send: async () => {} },
    );

    const servicePromise = submitFeedbackService.execute({
      type: 'bug',
      comment: 'This is a bug',
      screenshot: 'test.png',
    });

    await expect(servicePromise).rejects.toThrow();
  });
});
