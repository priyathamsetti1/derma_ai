def generate_heatmap(image_path):
    # TODO: Apply Grad-CAM on your CNN model
    heatmap_output = "heatmap_" + os.path.basename(image_path)
    heatmap_path = os.path.join("uploads", heatmap_output)
    
    # For now, just copy the image as placeholder
    import shutil
    shutil.copy(image_path, heatmap_path)
    return heatmap_output
