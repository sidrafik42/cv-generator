import os

# Create necessary directories
directories = ['generated', 'static/uploads']

for directory in directories:
    os.makedirs(directory, exist_ok=True)
    print(f"Created directory: {directory}")

print("Setup complete! All necessary directories are ready.")