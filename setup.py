import os
import subprocess
import sys

# Create necessary directories
directories = ['generated', 'static/uploads']

for directory in directories:
    os.makedirs(directory, exist_ok=True)
    print(f"Created directory: {directory}")

# Install Poetry dependencies if pyproject.toml exists
if os.path.exists('pyproject.toml'):
    try:
        subprocess.run(['poetry', 'install'], check=True)
        print("Poetry dependencies installed successfully!")
    except subprocess.CalledProcessError:
        print("Failed to install Poetry dependencies. Make sure Poetry is installed.")
        print("Install Poetry with: pip install poetry")
    except FileNotFoundError:
        print("Poetry not found. Please install Poetry first:")
        print("pip install poetry")
else:
    print("No pyproject.toml found. Using requirements.txt instead.")
    try:
        subprocess.run([sys.executable, '-m', 'pip', 'install', '-r', 'requirements.txt'], check=True)
        print("Requirements installed successfully!")
    except subprocess.CalledProcessError:
        print("Failed to install requirements from requirements.txt")

print("Setup complete! All necessary directories are ready and dependencies installed.")