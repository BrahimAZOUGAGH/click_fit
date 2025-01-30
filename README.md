# Click Fit - Your Fitness Journey Starts Here

Click Fit is a modern, responsive web application designed to help users track their fitness journey, connect with trainers, and join a community of fitness enthusiasts. The platform offers custom workout plans, nutrition guidance, and community support features.

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript/jQuery
- Bootstrap 5.3.2
- Bootstrap Icons 1.11.3
- Animate.css 4.1.1

### Backend
- Node.js
- Express.js
- Multer (for file uploads)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (latest stable version)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/BrahimAZOUGAGH/click_fit.git
cd click-fit
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node server.js
```

The application will be available at `http://localhost:3000`

## Project Structure

```
click-fit/
├── public/
│   ├── images/
│   ├── upload_images/
│   ├── styles.css
│   └── scripts.js
├── server.js
└── index.html
```

## Configuration

### File Upload
- Maximum file size: Configured through Multer
- Supported formats: Image files
- Upload directory: `public/upload_images/`

### Server Configuration
- Default port: 3000
- Static file serving: Enabled for the `public` directory

## Features Implementation

### Image Upload
- Drag and drop functionality
- Multiple file upload support
- Success/error notifications

### Interactive Elements
- Animated statistics counters
- Smooth scroll navigation
- Hover effects on feature cards
- Responsive navigation menu

## License

This project is licensed under the MIT License