
# CSS Cheatsheet

## Selectors
- `*` : Selects all elements.
- `element` : Selects all `<element>` (e.g., `div`, `p`, `h1`).
- `.class` : Selects all elements with the class `class`.
- `#id` : Selects the element with the ID `id`.
- `element, element` : Selects all specified elements.
- `element element` : Selects all `<element>` inside another `<element>`.
- `element > element` : Selects direct children.
- `element + element` : Selects adjacent siblings.
- `element ~ element` : Selects general siblings.

---

## Box Model
```css
element {
  margin: 10px;   /* Space outside the element */
  border: 1px solid black; /* Border around the element */
  padding: 10px; /* Space between border and content */
  width: 100px;  /* Content width */
  height: 100px; /* Content height */
}
```

---

## Text & Fonts
```css
element {
  color: #333;              /* Text color */
  font-family: 'Arial', sans-serif; /* Font family */
  font-size: 16px;          /* Font size */
  font-weight: bold;        /* Font weight: normal, bold, bolder, lighter, 100-900 */
  line-height: 1.5;         /* Line spacing */
  text-align: center;       /* Alignment: left, right, center, justify */
  text-transform: uppercase; /* Capitalization: none, uppercase, lowercase, capitalize */
  text-decoration: underline; /* Decoration: none, underline, overline, line-through */
  letter-spacing: 2px;      /* Space between letters */
  word-spacing: 4px;        /* Space between words */
}
```

---

## Backgrounds
```css
element {
  background-color: #f0f0f0; /* Background color */
  background-image: url('image.jpg'); /* Background image */
  background-size: cover;      /* Size: auto, cover, contain */
  background-position: center; /* Position: top, bottom, left, right, center */
  background-repeat: no-repeat; /* Repeat: repeat, no-repeat, repeat-x, repeat-y */
  background-attachment: fixed; /* Attachment: scroll, fixed, local */
}
```

---

## Borders
```css
element {
  border: 2px solid black;     /* Full border */
  border-top: 2px dashed red;  /* Top border */
  border-radius: 10px;         /* Rounded corners */
}
```

---

## Flexbox
```css
container {
  display: flex;                /* Enables Flexbox */
  flex-direction: row;          /* Direction: row, row-reverse, column, column-reverse */
  justify-content: center;      /* Alignment: flex-start, flex-end, center, space-between, space-around */
  align-items: center;          /* Alignment: stretch, flex-start, flex-end, center, baseline */
  flex-wrap: wrap;              /* Wrapping: nowrap, wrap, wrap-reverse */
}

item {
  flex: 1;                      /* Grow, shrink, and basis */
  align-self: flex-end;         /* Override alignment for individual item */
}
```

---

## Grid
```css
container {
  display: grid;                /* Enables Grid */
  grid-template-columns: 1fr 1fr 1fr; /* Column layout */
  grid-template-rows: auto 100px auto; /* Row layout */
  gap: 10px;                    /* Space between items */
  justify-items: center;        /* Horizontal alignment */
  align-items: center;          /* Vertical alignment */
}

item {
  grid-column: 1 / 3;           /* Start at column 1, span to 3 */
  grid-row: 2 / 4;              /* Start at row 2, span to 4 */
}
```

---

## Animations
```css
element {
  animation: slideIn 2s ease-in-out infinite; /* Animation name, duration, timing, and repetition */
}

@keyframes slideIn {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
}
```

---

## Common Units
- `px` : Pixels
- `%` : Percentage
- `em` : Relative to the parent element's font size
- `rem` : Relative to the root element's font size
- `vh` : Percentage of viewport height
- `vw` : Percentage of viewport width

---

## Responsive Design
```css
@media (max-width: 768px) {
  element {
    font-size: 14px;
  }
}
```

---

## Z-Index
```css
element {
  position: relative; /* Required for z-index to work */
  z-index: 10;       /* Stacking order */
}
```

---

## Positions
```css
element {
  position: static;   /* Default */
  position: relative; /* Relative to its normal position */
  position: absolute; /* Relative to the nearest positioned ancestor */
  position: fixed;    /* Fixed relative to the viewport */
  position: sticky;   /* Sticks relative to the scroll */
  top: 10px;          /* Offset from the top */
  left: 20px;         /* Offset from the left */
}
```

---

Happy coding!
