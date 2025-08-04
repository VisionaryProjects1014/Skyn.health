import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { validate } from '../middleware/validate';
import { contactService } from '../database/database';

const router = Router();

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

router.post('/', validate(contactSchema), async (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  
  try {
    const result = await contactService.addContactSubmission(name, email, message);
    
    console.log('Contact form submission saved:', { 
      name, 
      email, 
      id: result.id 
    });
    
    res.status(200).json({ 
      success: true, 
      message: result.message,
      submissionId: result.id 
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit contact form' 
    });
  }
});

// Get all contact submissions (admin endpoint)
router.get('/submissions', async (req: Request, res: Response) => {
  try {
    const submissions = await contactService.getAllContactSubmissions();
    res.status(200).json({ 
      success: true, 
      submissions: submissions,
      count: submissions.length
    });
  } catch (error) {
    console.error('Error getting contact submissions:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

export default router; 