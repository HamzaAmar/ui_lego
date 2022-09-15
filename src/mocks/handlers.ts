import { rest } from 'msw';

export const handlers = [
  rest.post<{ email: string; password: string }>(
    '/login',
    async (req, res, ctx) => {
      try {
        const { email } = await req.json<{
          email: string;
          password: string;
        }>();

        return res(
          ctx.json({ status: 'success', msg: 'You login with success', email }),
        );
      } catch (error) {
        return res(ctx.json({ status: 'error', msg: 'Login Failed' }));
      }
    },
  ),
  rest.get('/user', (_req, res, ctx) => {
    return res(ctx.json({ status: 'success', msg: 'You login with success' }));
  }),
];
