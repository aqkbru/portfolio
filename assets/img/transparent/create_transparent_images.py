from PIL import Image
import os

# Create transparent versions of the PNG images
def create_transparent_image(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        # Create transparency mask
        data = img.getdata()
        new_data = []
        
        # For PNG images, we'll just preserve existing transparency
        # and make white background transparent for others
        for item in data:
            # If pixel is white or almost white, make it transparent
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                new_data.append((item[0], item[1], item[2], 0))
            else:
                if len(item) == 4:  # Preserve original alpha if it exists
                    new_data.append(item)
                else:
                    new_data.append(item + (255,))  # Add full opacity
                    
        img.putdata(new_data)
        img.save(output_path, "PNG")
        print(f"Created transparent version: {output_path}")
        return True
    except Exception as e:
        print(f"Error processing {input_path}: {e}")
        return False

# Get base directory
base_dir = "/home/adriano/portfolio/assets/img/"
output_dir = "/home/adriano/portfolio/assets/img/transparent/"

# Process specific files
files_to_process = {
    "facebook.png": "facebook-transparent.png", 
    "instagram.png": "instagram-transparent.png", 
    "counter.png": "counter-transparent.png"
}

# Process each file
for source, target in files_to_process.items():
    source_path = os.path.join(base_dir, source)
    target_path = os.path.join(output_dir, target)
    
    if os.path.exists(source_path):
        create_transparent_image(source_path, target_path)
    else:
        print(f"Source file not found: {source_path}")
