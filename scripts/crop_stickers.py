from PIL import Image

image = Image.open("public/pictures/stickers.PNG")
print(image.size)

cropped = image.crop((0, 250, 1170, 2250))

cropped.save("cropped.png")