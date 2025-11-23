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
- **Dependency Management**: Poetry

## Setup Instructions

### Local Development

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd cv-generator
   ```

2. **Install Poetry** (if not already installed)

   ```bash
   pip install poetry
   ```

3. **Install dependencies**

   ```bash
   poetry install
   ```

4. **Run the application**

   ```bash
   poetry run python app.py
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
   - **Build Command**: `poetry install`
   - **Start Command**: `poetry run gunicorn app:app`
   - **Instance Type**: Free (or choose as needed)

5. Add environment variables (if needed):

   - No specific environment variables are required for this application

6. Click "Create Web Service"

7. Render will automatically deploy your application. The deployment URL will be provided in the dashboard.

### Python Version

**IMPORTANT**: This application requires Python 3.12 because Pillow (image processing library) does not support Python 3.13 yet.

- The [runtime.txt](file://c:\Users\lenovo\Desktop\cv%20generator\runtime.txt) file specifies `python-3.12` to ensure Render uses the correct version
- If Render defaults to Python 3.13, the deployment will fail with "Pillow does NOT support Python 3.13 yet"
- Make sure Render uses Python 3.12 during deployment

## Project Structure

```
cv-generator/
│
├── app.py                 # Main Flask application
├── pyproject.toml         # Poetry dependencies
├── runtime.txt            # Python runtime version
├── Procfile               # Render deployment configuration
├── README.md              # This file
├── DEPLOYMENT.md          # Deployment guide
├── .gitignore             # Git ignore file
├── LICENSE                # MIT License
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
