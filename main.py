import sys
import os

# Add the current directory to the path
current_dir = os.path.dirname(os.path.abspath(__file__))
if current_dir not in sys.path:
    sys.path.insert(0, current_dir)

# Try to import from the package, if that fails, import directly
try:
    from cv_generator.app import app
except ImportError:
    # Fallback: import directly from the app module
    cv_generator_path = os.path.join(current_dir, 'cv_generator')
    if cv_generator_path not in sys.path:
        sys.path.insert(0, cv_generator_path)
    from app import app

if __name__ == "__main__":
    app.run()