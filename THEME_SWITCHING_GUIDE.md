# Theme Switching Instructions - DEVELOPER ONLY

## How to Change the Website Color Theme

The website is built with a flexible theme system using CSS custom properties (variables). You can easily switch between different color themes by modifying the `:root` section in `css/styles.css`.

### Current Setup:
- **Default Theme**: Classic Brown & Gold (Currently Active)
- **Available Themes**: 6 different color schemes
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
}
```

#### Theme 2: Royal Purple & Gold
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
}
```

#### Theme 3: Ocean Teal & Coral
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
}
```

#### Theme 4: Navy & Rose
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
}
```

#### Theme 5: Forest Green & Gold
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
}
```

#### Theme 6: Burgundy & Champagne
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

### Quick Test:
1. Try switching to **Theme 2: Royal Purple & Gold** for a dramatic change
2. Refresh your browser to see the new theme
3. All sections (navigation, hero, about, services, gallery, contact, footer) will update automatically

### Note:
This theme system is designed for developers only and does not appear on the frontend. Users visiting the website will see whatever theme is currently active in the CSS file.
