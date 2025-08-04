import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { validate } from '../middleware/validate';
import { emailService } from '../database/database';

const router = Router();

const newsletterSchema = z.object({
  email: z.string().email(),
});

router.post('/', validate(newsletterSchema), async (req: Request, res: Response) => {
  const { email } = req.body;
  
  try {
    const result = await emailService.addSubscriber(email, 'website');
    
    if (result.success) {
      console.log('New subscriber added:', { email, id: result.id });
      res.status(200).json({ 
        success: true, 
        message: result.message,
        subscriberId: result.id 
      });
    } else {
      console.log('Subscription failed:', result.message);
      res.status(400).json({ 
        success: false, 
        message: result.message 
      });
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

// Get subscriber statistics (optional endpoint for admin)
router.get('/stats', async (req: Request, res: Response) => {
  try {
    const count = await emailService.getSubscriberCount();
    res.status(200).json({ 
      success: true, 
      subscriberCount: count 
    });
  } catch (error) {
    console.error('Error getting subscriber stats:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

// Get all subscribers (admin endpoint)
router.get('/subscribers', async (req: Request, res: Response) => {
  try {
    const subscribers = await emailService.getAllSubscribers();
    res.status(200).json({ 
      success: true, 
      subscribers: subscribers,
      count: subscribers.length
    });
  } catch (error) {
    console.error('Error getting subscribers:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

export default router; 