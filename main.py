import sys
import os

# Add the current directory to the path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from cv_generator.main import app

if __name__ == "__main__":
    app.run()