import os
import glob
from PIL import Image
from pathlib import Path

# Define the target widths for the resized images
sizes = [320, 480, 768, 1024]

# Get all .jpg files in the current directory
jpg_files = glob.glob('*.jpg')
dirs = [ d for d in os.listdir() if os.path.isdir(d) ]
for dir in dirs:
    new_jpgs = glob.glob(dir + '/*.jpg')
    jpg_files.extend(new_jpgs)
    
# Loop through all .jpg files
for image_path in jpg_files:
    # Open the image
    with Image.open(image_path) as img:
        img = img.convert('RGB')  # Convert to RGB if needed
        original_width, original_height = img.size
        
        # Loop through all target sizes and resize accordingly
        for width in sizes:
            # Calculate new height maintaining the aspect ratio
            new_height = int((width / original_width) * original_height)
            
            # Create resized version of the image
            resized_img = img.resize((width, new_height), Image.LANCZOS)
            
            # Create a new filename based on the original name and new width
            # stem = Path(image_path).stem
            # new_filename = f"{stem}-{width}w.webp"
            # same but save the file in it's original directory
            # new_filename = f"{dir}/{Path(image_path).stem}-{width}w.webp"
            new_filename = image_path.replace('.jpg', f'-{width}w.webp')
            
            # Save the resized image as a .webp file
            resized_img.save(new_filename, 'webp', quality=85, optimize=True)
