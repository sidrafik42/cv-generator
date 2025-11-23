import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

from cv_generator.app import app

if __name__ == "__main__":
    app.run()