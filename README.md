# Professional CV Generator

A web application that allows users to create professional CVs in both PDF and Word formats.

## Features

- Clean, professional UI
- Generates both PDF and Word documents
- Optional photo upload
- Dynamic form fields for education, experience, skills, and languages
- Responsive design for all devices
- Comprehensive CV sections including:
  - Personal information
  - Professional profile
  - Education history
  - Work experience
  - Skills
  - Languages with proficiency levels
  - Certifications
  - Interests
  - References

## Technologies Used

- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, JavaScript
- **Document Generation**:
  - python-docx for Word documents
  - ReportLab for PDF documents
- **Image Processing**: Pillow

## Setup Instructions

### Local Development

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd cv-generator
   ```

2. **Create a virtual environment** (recommended)

   ```bash
   python -m venv venv
   # On Windows
   venv\Scripts\activate
   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**

   ```bash
   python app.py
   ```

5. **Access the application**
   Open your browser and go to `http://localhost:5000`

## Deployment to Render

### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Initialize git in your project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

### Step 2: Deploy to Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New" and select "Web Service"
3. Connect your GitHub repository
4. Configure the service:

   - **Name**: Choose a name for your service
   - **Runtime**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
   - **Instance Type**: Free (or choose as needed)

5. Add environment variables (if needed):

   - No specific environment variables are required for this application

6. Click "Create Web Service"

7. Render will automatically deploy your application. The deployment URL will be provided in the dashboard.

### Step 3: Configure for Production

Since Render uses Gunicorn as the production server, we need to add it to our requirements:

1. Update `requirements.txt` to include Gunicorn:

   ```
   Flask==2.3.3
   python-docx==0.8.11
   reportlab==4.0.4
   Pillow==10.0.1
   Werkzeug==2.3.7
   gunicorn==21.2.0
   ```

2. Commit and push the changes:
   ```bash
   git add requirements.txt
   git commit -m "Add gunicorn for production deployment"
   git push origin main
   ```

## Project Structure

```
cv-generator/
│
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── README.md              # This file
├── .gitignore             # Git ignore file
│
├── templates/             # HTML templates
│   ├── index.html         # Main form page
│   └── success.html       # Success page
│
├── static/                # Static assets
│   ├── css/
│   │   └── style.css      # Stylesheet
│   ├── js/
│   │   └── script.js      # Client-side JavaScript
│   └── uploads/           # Uploaded images (created automatically)
│
└── generated/             # Generated CVs (created automatically)
```

## How It Works

1. Users fill out the CV form with their personal information, education, work experience, and skills
2. They can optionally upload a photo
3. Upon submission, the application generates both PDF and Word versions of the CV
4. Users can download both files from the success page

## Customization

You can customize the styling by modifying `static/css/style.css` and the form structure in `templates/index.html`.

## License

This project is open source and available under the MIT License.
