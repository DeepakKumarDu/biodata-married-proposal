# 💍 Married Biodata Management System

A modern, professional web application for creating and managing biodata profiles for marriage proposals. Built with React.js and localStorage for local data persistence.

## Features

- ✅ **User Authentication** - Login/Register system for secure access
- ✅ **User-Specific Profiles** - Each user can only manage their own biodata
- ✅ **Create** - Add new biodata profiles with comprehensive information
- ✅ **Read** - View all biodatas in a beautiful card layout
- ✅ **Update** - Edit existing biodata profiles (only your own)
- ✅ **Delete** - Remove biodata profiles with confirmation (only your own)
- ✅ **Photo Upload** - Upload profile photos directly from device
- ✅ **CV-like Display** - Professional formatted view of biodata
- ✅ **Local Storage** - All data stored locally in browser
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile devices

## Sections Included

1. **Personal Information** - Name, DOB, age, gender, height, weight, religion, caste, location, contact details
2. **Family Information** - Parents' details, siblings, family type and status
3. **Education** - Qualification, institution, field of study, year of passing
4. **Profession** - Occupation, company, designation, work location, income
5. **Lifestyle** - Diet, smoking, drinking, hobbies, languages
6. **Partner Preference** - Age range, height, education, profession, location preferences
7. **Additional Information** - About me section and photo URL

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - The application will be available at `http://localhost:5173`
   - The port may vary, check the terminal output

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Usage

1. **Register/Login**: First, create an account or login with existing credentials
2. **Create Biodata**: Click "Create New Biodata" button and fill in the form
3. **View Biodata**: Click "View" button on any biodata card to see the full CV-like format
4. **Edit Biodata**: Click "Edit" button to modify your biodata (only your own biodatas can be edited)
5. **Delete Biodata**: Click "Delete" button to remove a biodata (only your own biodatas can be deleted)
6. **Upload Photo**: In the form, use the photo upload section to add a profile picture
7. **Logout**: Click logout button to securely log out

## Data Storage

All data (users and biodatas) is stored in the browser's localStorage. This means:
- Data persists between browser sessions
- Data is specific to the browser/device
- No server or database required
- Each user can only see and manage their own biodatas
- Data can be cleared by clearing browser storage

## Authentication

- **Registration**: Create account with name, email, and password
- **Login**: Sign in with email and password
- **Security**: Each biodata is linked to a user ID - only the owner can edit/delete
- **Session**: Login persists until logout or browser data is cleared

## Technology Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **localStorage** - Local database
- **CSS3** - Styling with modern gradients and animations

## Project Structure

```
biodata-married-proposal/
├── src/
│   ├── components/
│   │   ├── BiodataForm.jsx      # Form for create/edit
│   │   ├── BiodataList.jsx      # List view of all biodatas
│   │   ├── BiodataView.jsx      # CV-like detailed view
│   │   └── *.css                # Component styles
│   ├── App.jsx                  # Main application component
│   ├── App.css                  # App styles
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── vite.config.js              # Vite configuration
└── README.md                    # This file
```

## Features in Detail

### Form Validation
- Required fields are marked with asterisk (*)
- Email validation
- Date picker for date of birth
- Dropdowns for standardized options

### Responsive Design
- Mobile-first approach
- Grid layouts that adapt to screen size
- Touch-friendly buttons and inputs
- Optimized for all devices

### User Experience
- Smooth animations and transitions
- Confirmation dialogs for delete operations
- Empty state messages
- Loading states
- Error handling for images

## Customization

You can easily customize:
- Colors: Modify gradient colors in CSS files
- Fields: Add/remove form fields in `BiodataForm.jsx`
- Layout: Adjust grid layouts in CSS files
- Styling: Update styles in component CSS files

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"
7. Your app will be live in minutes!

See `DEPLOYMENT.md` for detailed deployment instructions.

## Live URL

After deployment, your app will be available at:
```
https://your-project-name.vercel.app
```

## License

This project is open source and available for personal use.

## Support

For issues or questions, please check the code comments or modify as needed for your requirements.

---

**Note**: This application uses localStorage, so data is stored locally in your browser. If you clear browser data, all biodatas and user accounts will be lost. Consider exporting data if needed for backup.

