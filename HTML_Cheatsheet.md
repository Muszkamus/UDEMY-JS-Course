
# HTML Cheatsheet

## Basic Document Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <!-- Content goes here -->
</body>
</html>
```

---

## Common Elements

### Headings
```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
```
- Use `<h1>` to `<h6>` for headings, where `<h1>` is the most important.

### Paragraphs and Text Formatting
```html
<p>This is a paragraph.</p>
<strong>Bold text</strong>
<em>Italic text</em>
<u>Underlined text</u>
<sup>Superscript</sup>
<sub>Subscript</sub>
```

### Links
```html
<a href="https://example.com">Visit Example</a>
<a href="https://example.com" target="_blank">Open in new tab</a>
<a href="#section-id">Go to section</a>
```

### Images
```html
<img src="image.jpg" alt="Description of image" width="500" height="300">
```

### Lists
#### Ordered List
```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```
#### Unordered List
```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

### Tables
```html
<table>
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
</table>
```

### Forms
```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  
  <button type="submit">Submit</button>
</form>
```

---

## Media Elements

### Audio
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

### Video
```html
<video controls width="600">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

---

## Semantic Elements
Use semantic elements for better accessibility and SEO.
```html
<header>Header Content</header>
<nav>Navigation Links</nav>
<main>Main Content</main>
<section>Section Content</section>
<article>Article Content</article>
<aside>Sidebar Content</aside>
<footer>Footer Content</footer>
```

---

## Metadata (Inside `<head>`)
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Brief description of the page">
<link rel="stylesheet" href="styles.css">
<script src="script.js" defer></script>
```

---

## Attributes
- `id`: Unique identifier for an element.
- `class`: Class name for grouping elements.
- `style`: Inline CSS styles.
- `title`: Tooltip text when hovered.
- `alt`: Description of an image (used for accessibility).

---

## Keyboard Shortcuts (For Developers)
- `<kbd>`: Used to denote keyboard input.
```html
<kbd>Ctrl</kbd> + <kbd>C</kbd>
```

---

## Example Layout
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Example Layout</title>
</head>
<body>
  <header>
    <h1>Website Header</h1>
  </header>
  <nav>
    <ul>
      <li><a href="#section1">Section 1</a></li>
      <li><a href="#section2">Section 2</a></li>
    </ul>
  </nav>
  <main>
    <section id="section1">
      <h2>Section 1</h2>
      <p>Content for section 1.</p>
    </section>
    <section id="section2">
      <h2>Section 2</h2>
      <p>Content for section 2.</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 Example Footer</p>
  </footer>
</body>
</html>
```

---

Happy coding!
