#!/bin/bash
# Image Optimization Script for El Murmullo
# This script helps optimize large images for better web performance

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}El Murmullo - Image Optimization Script${NC}\n"

# Find images over 1MB
echo -e "${GREEN}Images larger than 1MB:${NC}"
find public/images -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) -size +1M -exec ls -lh {} \; | awk '{print $9, $5}'

echo -e "\n${GREEN}Images larger than 500KB:${NC}"
find public/images -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) -size +500k -exec ls -lh {} \; | awk '{print $9, $5}'

echo -e "\n${YELLOW}Optimization Recommendations:${NC}"
echo "1. Install ImageMagick: brew install imagemagick"
echo "2. Install AVIF support: brew install libavif"
echo "3. Use following commands to optimize:"
echo ""
echo -e "${YELLOW}Compress JPEG/PNG to WebP:${NC}"
echo "mogrify -format webp -quality 80 -resize 1920x1920 public/images/*.jpg"
echo "cwebp -quality 80 -m 6 input.jpg -o output.webp"
echo ""
echo -e "${YELLOW}Batch convert large images:${NC}"
echo "for img in public/images/karl-callwood.webp; do"
echo "  cwebp -quality 75 -m 6 \"\$img\" -o \"\${img%.*}-optimized.webp\""
echo "done"
echo ""
echo -e "${YELLOW}Or use online tools:${NC}"
echo "- TinyImage.co (Batch optimization)"
echo "- Cloudinary (Transform URL-based)"
echo "- ImageOptim (macOS native)"
echo ""
echo -e "${RED}CRITICAL FILES TO OPTIMIZE:${NC}"
echo "1. karl-callwood.webp (2.8 MB) → Target: 800 KB"
echo "2. 9.jpg in cuisines (2.9 MB) → Target: 600 KB"
echo "3. 10.jpg in cuisines (2.4 MB) → Target: 600 KB"
echo "4. Hero images (156-522 KB) → Target: 150-200 KB"
