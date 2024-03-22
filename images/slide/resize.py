import os
from PIL import Image

image_name = 'jay-wennington-N_Y88TWmGwA-unsplash.webp'

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

img = Image.open(image_name)
for filename in filenames:
    img.thumbnail((filename['width'], filename['width']))
    img.save(filename['name'], 'webp')