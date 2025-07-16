import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { validate } from '../middleware/validate';

const router = Router();

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

router.post('/', validate(contactSchema), (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  // TODO: Save to DB or send email
  console.log('Contact form submission:', { name, email, message });
  res.status(200).json({ success: true });
});

export default router; 