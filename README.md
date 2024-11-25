# Eco-Adventure Experiences Blog

A dynamic and responsive eco-adventure blog showcasing various eco-friendly travel adventures like mountain treks, ocean dives, and more. This single-page application (SPA) offers detailed insights into adventures while providing user engagement through login, registration, and personalized profiles.

## Purpose

The goal of this project is to encourage eco-friendly travel and provide users with valuable information about adventure experiences, promoting environmental consciousness. It also serves as a platform to connect users with experts for consultation.

## Live URL

[Eco-Adventure Experiences Blog](https://eco-adventure-assignment.web.app/)

## Key Features

### 1. Homepage

- **Banner Slider**: Interactive image slider showcasing eco-adventures.
- **Adventure Experiences Section**: Dynamic cards displaying adventure details (title, image, eco-friendly features) with an "Explore Now" button.
- **Extra Sections**: Recomended For You and Popular Places to Visit sections added to the homepage.

### 2. Authentication

- **Login Page**: Email/password login and Google social login.
- **Registration Page**: User registration with validation for strong passwords.
- **Private Routes**: Restrict access to certain routes for logged-in users only.

### 3. User Profile

- Displays user profile details (name, email, and photo).
- Allows users to update profile information (photo URL and name).

### 4. Adventure Details (Private Route)

- Displays comprehensive information about each adventure.
- **Consultation Button**:
  - Opens Google Meet (if accessed between 10 AM to 8 PM).
  - Shows consultation times via a modal otherwise.

### 5. Error Page

- **404 Page**: Redirects users to the homepage for invalid routes.

### 6. Responsiveness

- Fully responsive on mobile, tablet, and desktop devices.

### 7. Additional Features

- JSON data for adventure details.
- Forgot password functionality.
- Dynamic page titles using custom hook.
- Secure Firebase configuration with environment variables.

## npm Packages Used

- [animate.css](https://animate.style): Adds animations to enhance user experience.
- [Firebase](https://firebase.google.com): Handles authentication and database functionality.

## Unique Design

- **Winter-Themed Design**: The application has a distinct winter-themed layout with division-focused sections to promote local support.

## Deployment

- Hosted on Firebase, Netlify and Surge.
- Ensures smooth navigation without errors on route reloads.

## How to Run Locally

### Prerequisites

- Node.js (v16 or later)
- npm
- Firebase account

### Steps

1. Clone the repository:
   ```bash
   git clone:  https://github.com/programming-hero-web-course1/b10-a9-authentication-ranak8811.git
   cd eco-adventure-blog
   ```

Live page link:
Firebase: https://eco-adventure-assignment.web.app/  
Check out the web here (Netlify): https://eco-adventure-assignment.netlify.app/  
Check out the web here (Surge): https://perfect-body.surge.sh/
