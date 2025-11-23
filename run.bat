@echo off
echo Starting Professional CV Generator...
echo Make sure you have Python and Poetry installed.
echo Visit http://127.0.0.1:5000 in your browser
echo Press Ctrl+C to stop the server
poetry run python -m cv_generator.main
pause