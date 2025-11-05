# Theme Switching Instructions - DEVELOPER ONLY

## How to Change the Website Color Theme

The website is built with a flexible theme system using CSS custom properties (variables). You can easily switch between different color themes by modifying the `:root` section in `css/styles.css`.

### Current Setup:
- **Default Theme**: Classic Brown & Gold (Currently Active)
- **Available Themes**: 6 different color schemes
- **Font Families**: Each theme has unique typography
- **Full Integration**: Navigation, scrolling effects, and all UI elements automatically adapt

### ✅ **Fixed Issues:**
- **Navigation Bar**: Now properly changes color on scroll for all themes
- **JavaScript Integration**: Scroll effects work with all color themes
- **Consistent Styling**: All elements respect the selected theme

### How to Switch Themes:

1. **Open** `css/styles.css` in your code editor
2. **Find** the `:root` section (around line 20)
3. **Copy** your desired theme from the comment section below
4. **Replace** the existing `:root` section with your chosen theme
5. **Save** the file - changes apply immediately!

### Available Themes:

#### Theme 1: Classic Brown & Gold (Default)
**Typography**: Classic Elegant - Dancing Script, Allura, Pinyon Script  
**Style**: Traditional, warm, inviting
```css
:root {
    --primary-color: #8b4513;
    --secondary-color: #cd853f;
    --accent-color: #daa520;
    --highlight-color: #ffd700;
    --light-bg: #f4e4c1;
    --text-color: #2c3e50;
    --light-text: #fff8dc;
    --hover-gold: #ffed4e;
    --nav-bg-opacity: rgba(139, 69, 19, 0.95);
    
    /* Font Families - Classic Elegant */
    --body-font: 'Dancing Script', 'Brush Script MT', 'Lucida Handwriting', cursive;
    --heading-font: 'Allura', 'Alex Brush', cursive;
    --accent-font: 'Pinyon Script', 'Satisfy', cursive;
    --modern-font: 'Dancing Script', cursive;
}
```

#### Theme 2: Royal Purple & Gold
**Typography**: Modern Royal - Great Vibes, Tangerine, Satisfy, Pacifico  
**Style**: Regal, sophisticated, modern
```css
:root {
    --primary-color: #6B46C1;
    --secondary-color: #9333EA;
    --accent-color: #F59E0B;
    --highlight-color: #FCD34D;
    --light-bg: #F3E8FF;
    --text-color: #1F2937;
    --light-text: #FAF5FF;
    --hover-gold: #FDE68A;
    --nav-bg-opacity: rgba(107, 70, 193, 0.95);
    
    /* Font Families - Modern Royal */
    --body-font: 'Great Vibes', 'Brush Script MT', serif;
    --heading-font: 'Tangerine', 'Alex Brush', cursive;
    --accent-font: 'Satisfy', 'Dancing Script', cursive;
    --modern-font: 'Pacifico', 'Dancing Script', cursive;
}
```

#### Theme 3: Ocean Teal & Coral
**Typography**: Ocean Breeze - Satisfy, Alex Brush, Dancing Script, Allura  
**Style**: Fresh, coastal, relaxed
```css
:root {
    --primary-color: #0F766E;
    --secondary-color: #14B8A6;
    --accent-color: #F97316;
    --highlight-color: #FB923C;
    --light-bg: #F0FDFA;
    --text-color: #1F2937;
    --light-text: #ECFDF5;
    --hover-gold: #FED7AA;
    --nav-bg-opacity: rgba(15, 118, 110, 0.95);
    
    /* Font Families - Ocean Breeze */
    --body-font: 'Satisfy', 'Lucida Handwriting', cursive;
    --heading-font: 'Alex Brush', 'Great Vibes', cursive;
    --accent-font: 'Dancing Script', 'Pinyon Script', cursive;
    --modern-font: 'Allura', 'Satisfy', cursive;
}
```

#### Theme 4: Navy & Rose
**Typography**: Navy Elegance - Pinyon Script, Dancing Script, Alex Brush, Tangerine  
**Style**: Nautical, elegant, professional
```css
:root {
    --primary-color: #1E3A8A;
    --secondary-color: #3B82F6;
    --accent-color: #E11D48;
    --highlight-color: #F472B6;
    --light-bg: #F8FAFC;
    --text-color: #1F2937;
    --light-text: #F1F5F9;
    --hover-gold: #FBBF24;
    --nav-bg-opacity: rgba(30, 58, 138, 0.95);
    
    /* Font Families - Navy Elegance */
    --body-font: 'Pinyon Script', 'Great Vibes', cursive;
    --heading-font: 'Dancing Script', 'Allura', cursive;
    --accent-font: 'Alex Brush', 'Satisfy', cursive;
    --modern-font: 'Tangerine', 'Dancing Script', cursive;
}
```

#### Theme 5: Forest Green & Gold
**Typography**: Nature Inspired - Alex Brush, Pacifico, Allura, Satisfy  
**Style**: Organic, earthy, natural
```css
:root {
    --primary-color: #166534;
    --secondary-color: #22C55E;
    --accent-color: #D97706;
    --highlight-color: #FCD34D;
    --light-bg: #F0FDF4;
    --text-color: #1F2937;
    --light-text: #ECFDF5;
    --hover-gold: #FDE68A;
    --nav-bg-opacity: rgba(22, 101, 52, 0.95);
    
    /* Font Families - Nature Inspired */
    --body-font: 'Alex Brush', 'Dancing Script', cursive;
    --heading-font: 'Pacifico', 'Great Vibes', cursive;
    --accent-font: 'Allura', 'Pinyon Script', cursive;
    --modern-font: 'Satisfy', 'Dancing Script', cursive;
}
```

#### Theme 6: Burgundy & Champagne
**Typography**: Vintage Luxury - Tangerine, Satisfy, Pacifico, Pinyon Script  
**Style**: Luxurious, vintage, sophisticated
```css
:root {
    --primary-color: #7C2D12;
    --secondary-color: #DC2626;
    --accent-color: #D97706;
    --highlight-color: #FCD34D;
    --light-bg: #FEF2F2;
    --text-color: #1F2937;
    --light-text: #FDF2F8;
    --hover-gold: #FDE68A;
    --nav-bg-opacity: rgba(124, 45, 18, 0.95);
    
    /* Font Families - Vintage Luxury */
    --body-font: 'Tangerine', 'Great Vibes', cursive;
    --heading-font: 'Satisfy', 'Allura', cursive;
    --accent-font: 'Pacifico', 'Alex Brush', cursive;
    --modern-font: 'Pinyon Script', 'Dancing Script', cursive;
}
```

#### Theme 7: Minimalist Black & White
**Typography**: Clean Minimalist - Georgia, Helvetica Neue, Arial  
**Style**: Ultra-clean, professional, timeless like tmkrishna.com
```css
:root {
    --primary-color: #000000;
    --secondary-color: #333333;
    --accent-color: #666666;
    --highlight-color: #ffffff;
    --light-bg: #f8f9fa;
    --text-color: #212529;
    --light-text: #ffffff;
    --hover-gold: #e9ecef;
    --nav-bg-opacity: rgba(0, 0, 0, 0.95);
    
    /* Font Families - Clean Minimalist */
    --body-font: 'Georgia', 'Times New Roman', serif;
    --heading-font: 'Helvetica Neue', 'Arial', sans-serif;
    --accent-font: 'Georgia', 'Times New Roman', serif;
    --modern-font: 'Arial', 'Helvetica', sans-serif;
}
```

### Color Variable Guide:
- `--primary-color`: Main brand color (navigation, headings, icons)
- `--secondary-color`: Secondary accent color (gradients, hover states)
- `--accent-color`: Tertiary accent color (additional gradients)
- `--highlight-color`: Highlights & buttons (call-to-action elements)
- `--light-bg`: Light background sections
- `--text-color`: Main body text color
- `--light-text`: Light background text areas
- `--hover-gold`: Button hover states
- `--nav-bg-opacity`: Navigation background with transparency

### 🔤 Font Variable Guide:
- `--body-font`: Main content text throughout the website
- `--heading-font`: Large titles, logo, section headers (hero title, section titles)
- `--accent-font`: Subtitles, hero subtitle text
- `--modern-font`: Service cards, form labels, modern elements

**Font Families Used:**
- **Dancing Script**: Elegant handwritten style
- **Great Vibes**: Flowing script font
- **Tangerine**: Bold decorative script
- **Allura**: Sophisticated calligraphy
- **Alex Brush**: Casual brush script
- **Pinyon Script**: Classic formal script
- **Satisfy**: Playful handwritten style
- **Pacifico**: Modern rounded script

### Quick Test:
1. Try switching to **Theme 2: Royal Purple & Gold** for a dramatic change
2. Refresh your browser to see the new theme
3. All sections (navigation, hero, about, services, gallery, contact, footer) will update automatically

### Note:
This theme system is designed for developers only and does not appear on the frontend. Users visiting the website will see whatever theme is currently active in the CSS file.
