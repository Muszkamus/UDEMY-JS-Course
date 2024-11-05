# Basic HTML Structure and Elements

Tag Description

```html
<h1> to <h6>	Headings (h1 is the largest, h6 is the smallest)
<title> 	doesn’t appear on the webpage but on the tab
<p>	Paragraph
<a>	Anchor (for links)
<img>	Image
<ul>	Unordered list (bullet points)
<ol>	Ordered list (numbered)
<li>	List item (used inside <ul> or <ol>)
<div>	Division (for grouping content)
<span>	Inline container (for styling parts of text)
<form>	Form (for user input)
<em> 	Italics
<strong>  Bold
```

---

# INPUT CHEAT SHEET

---

**text** Basic single-line text input. <input type="text" name="username" />
`<input type="text" name="username" />`

**password** Hides entered characters; used for passwords. <input type="password" name="password" />
`<input type="password" name="password" />`

**email** Requires an email format (e.g., user@example.com). <input type="email" name="email" />
`<input type="email" name="email" />`

**number** Accepts only numeric values; can set min, max, step attributes. <input type="number" name="age" min="1" max="100" />
`<input type="number" name="age" min="1" max="100" />`

**tel** For entering telephone numbers; no format validation. <input type="tel" name="phone" />
`<input type="tel" name="phone" />`

**url** Requires a valid URL format. <input type="url" name="website" />
`<input type="url" name="website" />`

**date** Provides a date picker (YYYY-MM-DD format). <input type="date" name="birthday" />
`<input type="date" name="birthday" />`

**time** Time picker (HHformat). <input type="time" name="appointment" />
format).
`<input type="time" name="appointment" />`

**datetime-local** For both date and time (local timezone). <input type="datetime-local" name="meeting" />
`<input type="datetime-local" name="meeting" />`

**month** Allows selection of month and year. <input type="month" name="billing-month" />
`<input type="month" name="billing-month" />`

**week** Allows selection of a specific week of the year. <input type="week" name="week" />
`<input type="week" name="week" />`

**color** Displays a color picker; returns a hex color code. <input type="color" name="favcolor" />
`<input type="color" name="favcolor" />`

**range** Displays a slider for numeric ranges; accepts min, max, step. <input type="range" name="volume" min="0" max="100" />
`<input type="range" name="volume" min="0" max="100" />`

**checkbox** Allows multiple selections; checked or unchecked. <input type="checkbox" name="subscribe" />
`<input type="checkbox" name="subscribe" />`

**radio** Allows a single selection within a group. <input type="radio" name="gender" value="male" />
`<input type="radio" name="gender" value="male" />`

**file** For uploading files. <input type="file" name="profile-picture" />
`<input type="file" name="profile-picture" />`

**hidden **Stores hidden data (invisible to users). <input type="hidden" name="userid" value="12345" />
`<input type="hidden" name="userid" value="12345" />`

**image** Submit button displayed as an image. <input type="image" src="submit.png" alt="Submit" />
`<input type="image" src="submit.png" alt="Submit" />`

**submit** Submits form data. <input type="submit" value="Submit" />
`<input type="submit" value="Submit" />`

**reset** Resets form values to defaults. <input type="reset" value="Reset" />
`<input type="reset" value="Reset" />`

**button** Generic button; can be customized with JavaScript actions. <input type="button" value="Click me" />
`<input type="button" value="Click me" />`

---

# Classes in Ids

Difference between classes and Ids
**Ids have to be unique!**
