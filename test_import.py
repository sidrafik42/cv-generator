import sys
import os

# Add the current directory to the path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

try:
    from cv_generator.main import app
    print("Import successful!")
    print(f"App: {app}")
except Exception as e:
    print(f"Import failed: {e}")
    import traceback
    traceback.print_exc()