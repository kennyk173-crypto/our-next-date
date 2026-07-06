from PIL import Image
image = Image.open("stickers.PNG")
# print(image.size)

# cropped = image.crop(0, 250, 1170, 2282)
# cropped.save("cropped.png")

for row in range(4):
    for column in range(3):
        print(row, column)