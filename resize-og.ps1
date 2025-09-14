Add-Type -AssemblyName System.Drawing

# Load original image
$img = [System.Drawing.Image]::FromFile('src/assets/optimized/VHH_9921.jpg')

# Create new image with Facebook's recommended size (1200x630)
$newImg = $img.GetThumbnailImage(1200, 630, $null, [IntPtr]::Zero)

# Save as JPEG
$newImg.Save('public/og-cover.jpg', [System.Drawing.Imaging.ImageFormat]::Jpeg)

# Clean up
$img.Dispose()
$newImg.Dispose()

Write-Host "OG image resized to 1200x630 successfully!"
