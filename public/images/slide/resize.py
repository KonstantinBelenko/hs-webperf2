# resize.py
import os
from PIL import Image

image_name = 'jay-wennington-N_Y88TWmGwA-unsplash.jpg'

filenames = [
    {
        'name': 'jay-wennington-320w.webp',
        'width': 320
    },
    {
        'name': 'jay-wennington-480w.webp',
        'width': 480
    },
    {
        'name': 'jay-wennington-768w.webp',
        'width': 768
    },
    {
        'name': 'jay-wennington-1024w.webp',
        'width': 1024
    }
]

for filename in filenames:
    img = Image.open(image_name)
    img = img.convert('RGB')
    
    original_height = 1280
    original_width = 1920
    new_height = int((filename['width'] / original_width) * original_height)
    img = img.resize((filename['width'], new_height), Image.LANCZOS)
    
    
    img.save(filename['name'], 'webp', quality=85, optimize=True)    

