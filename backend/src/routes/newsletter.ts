import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { validate } from '../middleware/validate';

const router = Router();

const newsletterSchema = z.object({
  email: z.string().email(),
});

router.post('/', validate(newsletterSchema), (req: Request, res: Response) => {
  const { email } = req.body;
  // TODO: Save to DB or send to newsletter service
  console.log('Newsletter signup:', { email });
  res.status(200).json({ success: true });
});

export default router; 