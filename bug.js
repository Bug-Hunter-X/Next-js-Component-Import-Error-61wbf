```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      {/* This is where the error happens. I want to render a component from a different directory, but it doesn't work. */}
      <MyComponent />
    </div>
  );
}
```
```javascript
// components/MyComponent.js
export default function MyComponent() {
  return (
    <div>
      <h2>This is my component</h2>
    </div>
  );
}
```