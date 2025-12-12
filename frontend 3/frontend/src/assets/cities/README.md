# City Map PNG Assets

Place your 3D city outline PNG files in this directory:

- `bengaluru.png` - 3D outline map of Bengaluru
- `mumbai.png` - 3D outline map of Mumbai  
- `delhi.png` - 3D outline map of Delhi

## After Uploading PNGs

1. Update `src/sections/CitiesHeatmapSection.jsx`:
   - Uncomment the import statements at the top
   - Replace `placeholderImage` with the imported PNG variables in the cities array

Example:
```javascript
import bengaluruMap from '../assets/cities/bengaluru.png'
import mumbaiMap from '../assets/cities/mumbai.png'
import delhiMap from '../assets/cities/delhi.png'

// Then in cities array:
{
  id: 'bengaluru',
  name: 'Bengaluru',
  imagePath: bengaluruMap, // Use imported PNG
  // ...
}
```

## PNG Requirements

- Format: PNG (with transparency preferred)
- Style: 3D isometric outline
- Recommended size: 400x400px or larger
- Background: Transparent (PNG with alpha channel)
- Color: Light gray/white for best visibility

