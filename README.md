This plugin adds **data-index** attribute to all `<pre>` tags.

## Usage example

Add this CSS code to your `styles/website.css`

```css
.markdown-section pre {
  position: relative;
}

.markdown-section pre:before {
  display: block;
  content: attr(data-index);
  position: absolute;
  top: 0;
  right: 0;
  background-color: #silver;
  text-align: center;
  width: 2em;
  color: white;
}
```

![screenshot](./screenshot.png)