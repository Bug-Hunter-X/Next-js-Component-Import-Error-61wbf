```javascript
// pages/index.js
import MyComponent from '../components/MyComponent';
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
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