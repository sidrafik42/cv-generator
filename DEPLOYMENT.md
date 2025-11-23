# Deployment Guide

This guide will help you deploy the CV Generator application to GitHub and Render.

## Prerequisites

1. Git installed on your local machine
2. GitHub account
3. Render account (free available at https://render.com)

## Step 1: Initialize Git Repository

1. Open a terminal in your project directory
2. Initialize the git repository:

   ```bash
   git init
   ```

3. Add all files to git:

   ```bash
   git add .
   ```

4. Make the initial commit:
   ```bash
   git commit -m "Initial commit: Professional CV Generator"
   ```

## Step 2: Create GitHub Repository

1. Go to https://github.com and log in to your account
2. Click the "New" button to create a new repository
3. Give your repository a name (e.g., "cv-generator")
4. Choose to make it public or private
5. Do NOT initialize with a README (we already have one)
6. Do NOT add .gitignore or license (we already have these)
7. Click "Create repository"

## Step 3: Push Code to GitHub

1. Copy the repository URL from GitHub
2. Add the remote origin (replace with your actual URL):

   ```bash
   git remote add origin https://github.com/yourusername/cv-generator.git
   ```

3. Set the main branch:

   ```bash
   git branch -M main
   ```

4. Push the code to GitHub:
   ```bash
   git push -u origin main
   ```

## Step 4: Deploy to Render

1. Go to https://render.com and sign up or log in
2. Click "New" and select "Web Service"
3. Connect your GitHub account when prompted
4. Select the repository you just created
5. Configure the service with these settings:

   - **Name**: cv-generator (or any name you prefer)
   - **Region**: Choose the region closest to you
   - **Branch**: main
   - **Root Directory**: Leave empty (default)
   - **Environment**: Python 3
   - **Build Command**: `poetry install`
   - **Start Command**: `poetry run gunicorn main:app`
   - **Instance Type**: Free (or choose as needed)

6. **IMPORTANT**: Make sure Render uses Python 3.12, not 3.13:

   - The application is configured to use Python 3.12 because Pillow (image processing library) does not support Python 3.13 yet
   - Render may default to Python 3.13, which will cause deployment failures
   - The [runtime.txt](file://c:\Users\lenovo\Desktop\cv%20generator\runtime.txt) and [pyproject.toml](file://c:\Users\lenovo\Desktop\cv%20generator\pyproject.toml) files specify Python 3.12 to ensure compatibility
   - If you see an error like "Current Python version (3.13.4) is not allowed by the project (3.12)", it means Render is using Python 3.13 instead of 3.12
   - **If Render continues to use Python 3.13**, you may need to:
     - Manually specify the Python version in the Render dashboard
     - Contact Render support to ensure they're respecting the [runtime.txt](file://c:\Users\lenovo\Desktop\cv%20generator\runtime.txt) file

7. Click "Create Web Service"

8. Render will automatically start building and deploying your application. This process may take a few minutes.

## Step 5: Configure Environment Variables (if needed)

For this application, no specific environment variables are required. However, if you need to add any in the future:

1. In your Render dashboard, go to your web service
2. Click on "Environment" in the sidebar
3. Add any required environment variables
4. Click "Save Changes" - Render will automatically redeploy

## Step 6: Access Your Application

1. Once deployment is complete, Render will provide a URL for your application
2. The URL will be in the format: `https://your-app-name.onrender.com`
3. Click on this URL to access your deployed CV Generator

## Updating Your Application

To update your deployed application:

1. Make changes to your local code
2. Commit your changes:

   ```bash
   git add .
   git commit -m "Description of changes"
   ```

3. Push to GitHub:

   ```bash
   git push origin main
   ```

4. Render will automatically detect the changes and redeploy your application

## Troubleshooting

### Common Issues

1. **Build Failures**: Check the build logs in Render dashboard for specific error messages
2. **Application Not Starting**: Verify the Procfile and start command are correct
3. **Missing Dependencies**: Ensure all required packages are in pyproject.toml
4. **File Permissions**: Make sure your uploaded files have correct permissions
5. **Python Version Compatibility**: Pillow does NOT support Python 3.13 yet
   - Error message: "Current Python version (3.13.4) is not allowed by the project (3.12)"
   - Solution: Make sure Render uses Python 3.12 by specifying it in runtime.txt
   - The [runtime.txt](file://c:\Users\lenovo\Desktop\cv%20generator\runtime.txt) file should contain exactly: `python-3.12.3`
   - The [pyproject.toml](file://c:\Users\lenovo\Desktop\cv%20generator\pyproject.toml) should specify: `python = "3.12.3"`
6. **Package Installation Issues**:
   - Error message: "Error: The current project could not be installed: No file/folder found for package cv-generator"
   - Solution: The project now uses proper Python package structure with `cv_generator` directory and `__init__.py` file
   - Make sure the [pyproject.toml](file://c:\Users\lenovo\Desktop\cv%20generator\pyproject.toml) includes: `packages = [{include = "cv_generator"}]`
7. **Import Errors**:
   - Error message: "ModuleNotFoundError: No module named 'cv_generator.app'"
   - Solution: The [main.py](file://c:\Users\lenovo\Desktop\cv%20generator\main.py) file now includes proper path configuration
   - The [Procfile](file://c:\Users\lenovo\Desktop\cv%20generator\Procfile) includes `PYTHONPATH` setting for Render deployment
8. **Directory Creation Issues**: The application now automatically creates necessary directories on startup

### Checking Logs

1. In Render dashboard, go to your web service
2. Click on "Logs" in the sidebar
3. View real-time logs or historical logs

### Scaling

1. In Render dashboard, go to your web service
2. Click on "Settings" in the sidebar
3. Scroll to "Instance Type" to upgrade from Free to Paid plans
4. You can also configure auto-scaling based on traffic

## Notes

- The free tier of Render will spin down your application after 15 minutes of inactivity
- First request after spin down may take a few seconds to respond
- For production use, consider upgrading to a paid plan for better performance
- The application automatically creates necessary directories (generated, static/uploads) on startup
- This application uses Poetry for dependency management instead of pip
- **IMPORTANT**: Python 3.12 is required because Pillow does not support Python 3.13 yet
- If Render still defaults to Python 3.13, try specifying the exact version `python-3.12.3` in [runtime.txt](file://c:\Users\lenovo\Desktop\cv%20generator\runtime.txt)
- If problems persist, contact Render support for assistance with Python version selection
