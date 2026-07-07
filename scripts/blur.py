from PIL import Image, ImageFilter
image = Image.open("public/pictures/cropped.png")
blurred = image.filter(ImageFilter.GaussianBlur(radius = 2.5))
blurred.save("public/pictures/cropped_blur.png")
print("confirmed")