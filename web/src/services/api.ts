export interface CreateFeedbackData {
  comment: string;
  screenshot?: string;
  type: string;
}

async function create(data: CreateFeedbackData) {
  await fetch(`${import.meta.env.VITE_SERVER_URL}/feedbacks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export default {
  create,
};
