import sqlite3 from 'sqlite3';
import path from 'path';

// Enable verbose mode for better debugging
const sqlite = sqlite3.verbose();

// Database file path
const dbPath = path.join(__dirname, '../../../data/skyn_health.db');

// Create database connection
export const db = new sqlite.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database');
    initializeDatabase();
  }
});

// Initialize database tables
function initializeDatabase() {
  // Create subscribers table for email signups
  db.run(`
    CREATE TABLE IF NOT EXISTS subscribers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      source TEXT DEFAULT 'website',
      is_active BOOLEAN DEFAULT 1
    )
  `, (err) => {
    if (err) {
      console.error('Error creating subscribers table:', err.message);
    } else {
      console.log('Subscribers table ready');
    }
  });

  // Create contact submissions table
  db.run(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      status TEXT DEFAULT 'new'
    )
  `, (err) => {
    if (err) {
      console.error('Error creating contact_submissions table:', err.message);
    } else {
      console.log('Contact submissions table ready');
    }
  });
}

// Email subscription functions
export const emailService = {
  // Add new email subscriber
  async addSubscriber(email: string, source: string = 'website'): Promise<{ success: boolean; message: string; id?: number }> {
    return new Promise((resolve, reject) => {
      const stmt = db.prepare('INSERT INTO subscribers (email, source) VALUES (?, ?)');
      stmt.run([email, source], function(err) {
        if (err) {
          if (err.message.includes('UNIQUE constraint failed')) {
            resolve({ success: false, message: 'Email already subscribed' });
          } else {
            console.error('Database error:', err.message);
            reject(new Error('Database error occurred'));
          }
        } else {
          resolve({ 
            success: true, 
            message: 'Successfully subscribed', 
            id: this.lastID 
          });
        }
      });
      stmt.finalize();
    });
  },

  // Get subscriber by email
  async getSubscriber(email: string): Promise<any> {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM subscribers WHERE email = ?', [email], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  },

  // Get all subscribers
  async getAllSubscribers(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM subscribers ORDER BY created_at DESC', (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  },

  // Get subscriber count
  async getSubscriberCount(): Promise<number> {
    return new Promise((resolve, reject) => {
      db.get('SELECT COUNT(*) as count FROM subscribers WHERE is_active = 1', (err, row: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(row.count);
        }
      });
    });
  }
};

// Contact form functions
export const contactService = {
  // Add new contact submission
  async addContactSubmission(name: string, email: string, message: string): Promise<{ success: boolean; message: string; id?: number }> {
    return new Promise((resolve, reject) => {
      const stmt = db.prepare('INSERT INTO contact_submissions (name, email, message) VALUES (?, ?, ?)');
      stmt.run([name, email, message], function(err) {
        if (err) {
          console.error('Database error:', err.message);
          reject(new Error('Database error occurred'));
        } else {
          resolve({ 
            success: true, 
            message: 'Contact form submitted successfully', 
            id: this.lastID 
          });
        }
      });
      stmt.finalize();
    });
  },

  // Get all contact submissions
  async getAllContactSubmissions(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM contact_submissions ORDER BY created_at DESC', (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
};

// Close database connection gracefully
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Database connection closed.');
    }
    process.exit(0);
  });
}); 