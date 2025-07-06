
# KasolJourneys - Travel Agency Website

A modern, responsive travel agency website built for KasolJourneys, specializing in Kasol and Parvati Valley tourism.

## Features

- **Travel Packages**: Curated travel packages for scenic locations around Kasol
- **Vehicle Rentals**: Two-wheeler and four-wheeler rentals for mountain adventures
- **Accommodation**: Comfortable stays in and around Kasol valley
- **Adventure Activities**: Thrilling adventure activities like rafting, trekking, and camping
- **WhatsApp Integration**: Direct booking via WhatsApp
- **Email Booking**: Email inquiry system with pre-filled forms
- **Responsive Design**: Mobile-first, fully responsive design
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom gradients and animations
- **UI Components**: Shadcn/ui component library
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Routing**: React Router Dom

## Services Offered

### 1. Travel Packages
- Malana Village Trek
- Tosh Valley Expedition
- Chalal Riverside Walk
- Rasol Village Tour
Starting from ₹2,999

### 2. Vehicle Rentals
- Royal Enfield Bikes
- Activa Scooters
- SUVs & Sedans
- Local Driver Available
Starting from ₹800/day

### 3. Stays & Accommodation
- Riverside Camps
- Cozy Guesthouses
- Luxury Resorts
- Budget Hostels
Starting from ₹1,200/night

### 4. Adventure Activities
- River Rafting
- Rock Climbing
- Paragliding
- Camping Under Stars
Starting from ₹1,500

## Contact Information

- **WhatsApp**: +91 9857707841
- **Email**: vrikhaketu.jha@gmail.com
- **Location**: Kasol, Himachal Pradesh

## Deployment on Linux

### Prerequisites

1. **Node.js and npm**: Install Node.js (v18 or higher)
   ```bash
   # Using Node Version Manager (recommended)
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   source ~/.bashrc
   nvm install node
   nvm use node
   ```

2. **Git**: Install Git
   ```bash
   # Ubuntu/Debian
   sudo apt update
   sudo apt install git

   # CentOS/RHEL/Fedora
   sudo yum install git  # or sudo dnf install git
   ```

### Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone <YOUR_GIT_URL>
   cd kasoljourney
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:8080`

### Production Build

1. **Build the application**:
   ```bash
   npm run build
   ```
   This creates a `dist` folder with the production-ready files.

2. **Preview the build locally**:
   ```bash
   npm run preview
   ```

### Deployment Options on Linux

#### Option 1: Using Nginx (Recommended)

1. **Install Nginx**:
   ```bash
   # Ubuntu/Debian
   sudo apt update
   sudo apt install nginx

   # CentOS/RHEL
   sudo yum install nginx
   ```

2. **Create Nginx configuration**:
   ```bash
   sudo nano /etc/nginx/sites-available/kasoljourney
   ```

3. **Add configuration**:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;  # Replace with your domain
       root /var/www/kasoljourney/dist;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Enable gzip compression
       gzip on;
       gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

       # Security headers
       add_header X-Frame-Options "SAMEORIGIN" always;
       add_header X-XSS-Protection "1; mode=block" always;
       add_header X-Content-Type-Options "nosniff" always;
   }
   ```

4. **Enable the site**:
   ```bash
   sudo ln -s /etc/nginx/sites-available/kasoljourney /etc/nginx/sites-enabled/
   sudo nginx -t  # Test configuration
   sudo systemctl restart nginx
   ```

5. **Deploy files**:
   ```bash
   sudo mkdir -p /var/www/kasoljourney
   sudo cp -r dist/* /var/www/kasoljourney/
   sudo chown -R www-data:www-data /var/www/kasoljourney
   ```

#### Option 2: Using PM2 with serve

1. **Install PM2 and serve globally**:
   ```bash
   npm install -g pm2 serve
   ```

2. **Create PM2 ecosystem file**:
   ```bash
   nano ecosystem.config.js
   ```

3. **Add PM2 configuration**:
   ```javascript
   module.exports = {
     apps: [{
       name: 'kasoljourney',
       script: 'serve',
       args: 'dist -s -l 3000',
       instances: 1,
       autorestart: true,
       watch: false,
       max_memory_restart: '1G',
       env: {
         NODE_ENV: 'production'
       }
     }]
   };
   ```

4. **Start with PM2**:
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup  # Follow the instructions to enable startup script
   ```

#### Option 3: Using Apache

1. **Install Apache**:
   ```bash
   # Ubuntu/Debian
   sudo apt install apache2

   # CentOS/RHEL
   sudo yum install httpd
   ```

2. **Create virtual host**:
   ```bash
   sudo nano /etc/apache2/sites-available/kasoljourney.conf
   ```

3. **Add configuration**:
   ```apache
   <VirtualHost *:80>
       ServerName your-domain.com
       DocumentRoot /var/www/kasoljourney/dist
       
       <Directory /var/www/kasoljourney/dist>
           Options -Indexes
           AllowOverride All
           Require all granted
       </Directory>

       # Handle React Router
       RewriteEngine On
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
   </VirtualHost>
   ```

4. **Enable the site**:
   ```bash
   sudo a2ensite kasoljourney.conf
   sudo a2enmod rewrite
   sudo systemctl restart apache2
   ```

### SSL Configuration (Optional but Recommended)

Using Let's Encrypt with Certbot:

1. **Install Certbot**:
   ```bash
   # Ubuntu/Debian
   sudo apt install certbot python3-certbot-nginx

   # CentOS/RHEL
   sudo yum install certbot python3-certbot-nginx
   ```

2. **Get SSL certificate**:
   ```bash
   sudo certbot --nginx -d your-domain.com
   ```

### Environment Considerations

- **Firewall**: Ensure ports 80 and 443 are open
- **Memory**: The build process requires at least 1GB RAM
- **Storage**: Ensure adequate disk space (minimum 500MB free)
- **Node.js Version**: Use Node.js v18 or higher for optimal compatibility

### Performance Optimization

1. **Enable Gzip compression** (shown in Nginx config above)
2. **Set up proper caching headers**
3. **Use a CDN** for better global performance
4. **Monitor with tools** like PM2 monitoring or server logs

### Troubleshooting

- **Build fails**: Check Node.js version and available memory
- **404 errors**: Ensure proper routing configuration for SPA
- **Permission issues**: Check file ownership and permissions
- **Port conflicts**: Ensure chosen ports are available

The website is now production-ready and optimized for deployment on any Linux server!
