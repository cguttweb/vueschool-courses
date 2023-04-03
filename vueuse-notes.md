# VueUse

## VueUse For Everyone course - vueschool.io

examples on stackblitz

- `useTitle()` - self explanatory note when using nuxt 3 this will **NOT** be auto imported in favour of nuxt built-in useTitle functionality

- `useClipboard()` - copy content to your clipboard

```js
const textToCopy = ref('')
const { copy, copied } = useClipboard({ source: textToCopy })
```

```html
<!-- parentheses needed for clipboard -->
<button @click="copy()">Copy</button>
```

`copiedDuring` - can be added to the object in milliseconds how long you want it to last e.g. 3000 = 3 seconds

An alternative to using source option is to add directly to the function e.g.

```html
<button @click="copy(textToCopy)">Copy</button>
```

and text is then available in object destructuring e.g.

```js
const { copy, copied, text } = useClipboard({...})
```

`isSupported` - boolean to check browser support

- `useDark()` - return boolean by default this uses the system preferences for each user adds dark class to html
- `useToggle()` - takes and returns a boolean site preferences are set in localStorage

```js
const isDark = useDark()
const toggleDark = useToggle(isDark)
```

- `useColorMode()` - returns a string e.g. light or dark. More verbose but it allows options for different modes other the default light and dark. To do this they must be registered using the modes options e.g.

```js
const colorMode = useColorMode({
  modes: {
    dim: 'dim',
    cafe: 'cafe',
  },
})
```

```html
<button @click="colorMode = 'dim'">Set Dim Mode</button>
```

```css
.dim {
  background: #999;
  color: #333;
}
```

### Keyboard

- `onKeyStroke()` - this targets a particular key and needs a callback function e.g.

Simple example:

```js
onKeyStroke('ArrowDown', e => {
  e.preventDefault()
  position.value.y += 5
})
```

This can be replicated for other keys, but to simplify you can pass an array instead e.g.

```js
const position = ref({ x: 0, y: 0 })

onKeyStroke(['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'], e => {
  e.preventDefault()
  if (e.key === 'ArrowDown') {
    position.value.y += 5
  } else if (e.key === 'ArrowUp') {
    position.value.y -= 5
  }
})
```

```js
// Refactored code

const controls = {
  ArrowDown: () => (position.value.y += 5),
}

onKeyStroke(Object.keys(controls), e => {
  e.preventDefault()
  controls[e.key]
})
```

**NOTE**: _this composable will still fire the same regardless of what is focused on the page_

- `useMagicKeys()` - cool feature camnm extract any key we want/need and watch keys to see if they were pressed or have been released
- `ẁhenever` = shorthand for watching a value and only calling the calback when the value is true e.g.

```js
const { a, b, c } = useMagicKeys()
whenever(a, pressed => console.log(pressed))
```

You can watch a combination using underscores e.g.

```js
const { a_b_c } // will only fire if all keys are pressed
```

You can combine any keys and exposes the current variable to see which keys are currently pressed - prints a set() which live updates

### Device Sensors

- `useBattery()` - access to level of charge, charging status etc - isSupported is also an option e.g. this is not yet supported in Firefox
- `useOnline()` - test the users connection returns boolean
- `useNetwork()` - for further information to useOnline
- `useGeolocation()` - if permission is allowed look at docs for more info

### Mouse and Touch Events

- `usePageLeave()` - return boolean whether or not mouse is on the page

```js
const isLeft = usePageLeave() // with whenever watch wrapper

whenever(isLeft, () => alert('Are you sure?'))

// in this example alert only happens on the first load
const unwatch = whenever(isLeft, () => {
  alert('Are you sure?'), unwatch()
})
```

- `usePointer()` - very precise for a mouse - 1x1 pixel - a possible use case with the canvas element. This is not a proper reactive option so need to import and wrap it with the reactive property e.g.

```js
const pointer = reactive(usePointer())
watch(pointer, () => {
  if (pointer.pressure === 0) return
})
```

(Look up canvas to learn more how this could work as context is needed to draw)

- `onLongPress()` - this triggers a callback function if under period of time this is 0.5 seconds by default but can be adjusted

### Scroll

`useScroll()` - this takes template ref as the only argument e.g. in a div add ref attribute and reactive ref with the same name in the script section e.g.

```html
<div class="scroll" ref="scrollBox">content here</div>
```

```js
const scrollBox = ref(null)
const scroll = useScroll(scrollBox)
// possible usecase for animating sections
```

`useInfiniteScroll()` - social media often uses this 1st argument is element that will be scrolled 2nd argument is function called when the end of the list reached and distance option with a value of 10 - this is the minimum distance between the bottom of an element and the viewport.

### Media

- `useDisplayMedia()` - used for sharing screen in browser

```js
const video = ref()
const { stream, enabled } = useDisplayMedia()
// stream is the reactive reference of actual screenshare stream
// enabled = boolean ref to enabled/disable screenshare
```

`watchEffect()` - because want to set videos source object automatically when stream is enabled/disabled. It only works if video is already loaded in DOM e.g.

```js
watchEffect(() => {
  if (video.value) video.value.srcObject = stream.value
})
```

- `useuserMedia()` - enable same thing for your camera

- `useMediaControls()` - for video and audio options - look at docs

### Animation

- `useInterval()` - similar to setInterval and setTimeout

```js
// value is in milliseconds
const counter = useInterval(100)
```

In order to have more control use the controls option - destructure counter from the return - pause, resume etc

`controls options is available on multiple vueuse functions`

```js
const { counter, pause, resume } = useInterval(100, { controls: true })
```

```html
<button @click="isActive ? pause() : resume()">
  {{ isActive ? 'Pause' : 'Resume' }}
</button>
```

- `useIntervalFn()`- wrapper function negates the need to use watch e.g.

```vue
watch(counter, () => console.log('Hello World'))

<!-- with useIntervalFn() becomes -->
const { pause, resume, isActive } = useIntervalFn(() => console.log('Hello
Vue'), 100)
```

- `useRafFn()` - requestAnimationFrame (check MDN docs for more info) is the recommended option over setInterval or setTimeout - see StackOverflowLink. This can be destructured in the same way as useInterval
