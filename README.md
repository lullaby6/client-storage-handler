# Client Storage Handler (CSH)

Client Storage Handler (CSH) is a lightweight JavaScript library that provides a simple and consistent interface for managing client-side storage, including localStorage, sessionStorage, and cookies.

## Features

- Easy-to-use methods for localStorage, sessionStorage, and cookies
- Consistent API across storage types
- Helper functions for common operations
- Object storage support for localStorage and sessionStorage

## Installation

### CDN

```html
<script src="https://cdn.jsdelivr.net/gh/lullaby6/client-storage-handler/cdn.js"></script>
```

## Usage

After including the library, you can access its functionality through the csh object.

```js
// Local Storage
csh.local.set('key', 'value');
console.log(csh.local.get('key')); // 'value'

// Session Storage
csh.session.set('tempKey', 'tempValue');
console.log(csh.session.get('tempKey')); // 'tempValue'

// Cookies
csh.cookies.set('user', 'John');
console.log(csh.cookies.get('user')); // 'John'
```

## API Reference


## Examples

### Local Storage

```js
// Set and get a value
csh.local.set('username', 'Alice');
console.log(csh.local.get('username')); // 'Alice'

// Store and retrieve an object
const user = { name: 'Bob', age: 30 };
csh.local.setObject('user', user);
const retrievedUser = csh.local.getObject('user');
console.log(retrievedUser.name); // 'Bob'

// Check if localStorage has an item
console.log(csh.local.has('username')); // true

// Get all keys
console.log(csh.local.keys()); // ['username', 'user']

// Clear all items
csh.local.clear();
```

### Session Storage

```js
// Set and get a value
csh.session.set('tempUsername', 'Charlie');
console.log(csh.session.get('tempUsername')); // 'Charlie'

// Store and retrieve an object
const tempUser = { name: 'David', age: 25 };
csh.session.setObject('tempUser', tempUser);
const retrievedTempUser = csh.session.getObject('tempUser');
console.log(retrievedTempUser.name); // 'David'

// Check if sessionStorage has an item
console.log(csh.session.has('tempUsername')); // true

// Get all keys
console.log(csh.session.keys()); // ['tempUsername', 'tempUser']

// Clear all items
csh.session.clear();
```

### Cookies

```js
// Set and get a cookie
csh.cookies.set('session', 'abc123');
console.log(csh.cookies.get('session')); // 'abc123'

// Check if a cookie exists
console.log(csh.cookies.has('session')); // true

// Get all cookies
console.log(csh.cookies.getAll());

// Remove a cookie
csh.cookies.remove('session');

// Clear all cookies
csh.cookies.clear();
```