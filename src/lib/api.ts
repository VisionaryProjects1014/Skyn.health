const isDevelopment = window.location.hostname === 'localhost';
const API_BASE_URL = isDevelopment 
  ? 'http://localhost:4000/api' 
  : 'https://api.skyn.health/api';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface NewsletterData {
  email: string;
}

export const api = {
  async submitContact(data: ContactFormData) {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit contact form');
    }
    
    return response.json();
  },

  async subscribeNewsletter(data: NewsletterData) {
    const response = await fetch(`${API_BASE_URL}/newsletter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to subscribe to newsletter');
    }
    
    return response.json();
  },

  async healthCheck() {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.json();
  },
}; 