# network-checker-with-navigator-API

## THE NAVIGATOR WEB API

The **Navigator** interface represents the state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities. [Link](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)

 The **navigator.onLine** property returns the online status of the browser. The property returns a boolean value, with true meaning online and false meaning offline.

 what was decided is to alternate the background color based on the browser online status: offline or online.

```javascript
if (navigator.onLine){
    online();
}else{
    offline();
}

function online() {
    body.style.backgroundColor = `deepskyblue`;
    STATUS.innerHTML = `<span> online</span>`;

}

function offline() {
    body.style.backgroundColor = `lightgreen`;
    STATUS.innerHTML = `<span> offline</span>`;
}
```
