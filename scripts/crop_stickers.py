from PIL import Image

image = Image.open("scripts/stickers.PNG")
print(image.size)

cropped = image.crop((0, 270, 1170, 2250))
cropped.save("scripts/cropped.png")