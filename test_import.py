import sys
import os

# Add the current directory to the path
sys.path.insert(0, os.path.dirname(__file__))

try:
    from cv_generator.app import app
    print("Import successful!")
    print(f"App: {app}")
except Exception as e:
    print(f"Import failed: {e}")
    import traceback
    traceback.print_exc()