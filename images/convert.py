import os
import glob
from PIL import Image
from tqdm import tqdm

jpgs = glob.glob('*.jpg')
# print(jpgs)

dirs = [ d for d in os.listdir() if os.path.isdir(d) ]
for dir in dirs:
    new_jpgs = glob.glob(dir + '/*.jpg')
    jpgs.extend(new_jpgs)

for jpg in tqdm(jpgs):
    img = Image.open(jpg)
    img = img.convert('RGB')
    new_path = jpg.replace('.jpg', '.webp')
    img.save(new_path, 'webp', optimize=True, quality=10)