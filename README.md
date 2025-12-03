# Room Rent Management App

A modern, premium-designed web application for managing room rentals, built with React and Firebase.

## Overview

This application allows property managers to easily track room availability, manage bookings, and view occupancy status at a glance. It features a responsive, glassmorphism-inspired UI and real-time data persistence using Firebase Firestore.

## Features

- **📊 Interactive Dashboard**: View all rooms and their real-time status (Available/Occupied).
- **🏨 Room Management**: Add new rooms with details like type, price, and amenities.
- **📅 Booking System**: Seamlessly book rooms with guest details and date ranges.
- **⏳ Availability Tracking**: Automatic calculation of "Days Left" for occupied rooms.
- **☁️ Cloud Persistence**: All data is securely stored in Firebase Firestore.
- **🎨 Premium Design**: Custom Vanilla CSS styling with dark mode and glassmorphism effects.

## Tech Stack

- **Frontend**: React (Vite)
- **Styling**: Vanilla CSS (Variables, Flexbox/Grid, Animations)
- **Database**: Firebase Firestore
- **Deployment**: Firebase Hosting
- **Icons**: Lucide React
- **Date Handling**: date-fns

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd room-booking
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

## Deployment

### Firebase Hosting

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy to Firebase:
   ```bash
   npx firebase login
   npx firebase deploy
   ```

## GitHub Setup

To push this project to a new GitHub repository:

1. Create a new repository on GitHub (skip README/gitignore initialization).
2. Run these commands:
   ```bash
   git remote add origin <YOUR_REPO_URL>
   git branch -M main
   git push -u origin main
   ```

## License

This project is open source and available under the [MIT License](LICENSE).
