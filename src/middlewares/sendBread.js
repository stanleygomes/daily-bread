const { SECRET_KEY } = process.env;

export async function validateRequest(req) {
  if (req.method !== 'GET') {
    return {
      status: 405,
      message: 'Method not allowed!',
    };
  }

  const { secret } = req.query;

  if (!secret) {
    return {
      status: 400,
      message: 'Secret not informed!',
    };
  }

  if (secret !== SECRET_KEY) {
    return {
      status: 400,
      message: 'Secret is invalid!',
    };
  }

  return {
    status: 200,
    message: 'Secret is valid!',
  };
}
