# Green Audio Player

![npm](https://img.shields.io/npm/v/green-audio-player.svg)
![GitHub](https://img.shields.io/github/license/greghub/green-audio-player.svg)
![GitHub file size in bytes](https://img.shields.io/github/size/greghub/green-audio-player/dist/js/green-audio-player.min.js.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/greghub/green-audio-player.svg)


Based on a [pen](https://codepen.io/gregh/pen/NdVvbm) I've created 2 years ago.
Due to requests from many people I decided to create a repository, 
containing an improved version of the Green Audio Player including the support for multiple audio players on a single page.

## [Online demo](https://greghub.github.io/green-audio-player/)

<img src="https://i.imgur.com/CME3A0L.png" alt="Green Audio Player" width="680">

## Installation

#### Github

Download repository ZIP.

#### CDN

Alternatively, you can load it from CDN:

```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/greghub/green-audio-player/dist/css/green-audio-player.min.css">
<script src="https://cdn.jsdelivr.net/gh/greghub/green-audio-player/dist/js/green-audio-player.min.js"></script>
```

#### NPM

```
npm i green-audio-player
```

## Usage

Include the `green-audio-player.css` or `green-audio-player.min.css` file:

```html
<link rel="stylesheet" type="text/css" href="{path}/dist/css/green-audio-player.min.css">
```
and `green-audio-player.js` file (or `green-audio-player.min.js`): 
```html
<script src="{path}/dist/js/green-audio-player.js"></script>
```

Add the audio tag inside of a container. You are free to add any attributes.
Green Audio Player does not change the audio tag, so for example if you want the audio to loop,
you can add the loop attribute to the audio tag.

```html
<div class="gap-example">
    <audio>
        <source src="audio/example-1.mp3" type="audio/mpeg">
    </audio>
</div>
```

This will **initialize** the Green Audio Player on first matching element.
```javascript
new GreenAudioPlayer('.gap-example');
```

By default, internal `audio` tag is used as a playback backend, but you can use **any other sound api** by supplying needed values/functions to `createAltBackend()` helper function to create backend object mimicking necessary `HTMLMediaElement` api, and assign this object to `altAudioBackend` option:
```javascript
new GreenAudioPlayer('.gap-example', { altAudioBackend: GreenAudioPlayer.createAltBackend(
    true,       // autoplay, boolean   (optional)
    undefined,  // preload,  boolean,  (optional)
    play,       // () => Promise<void>
    pause,      // () => void
    setCurrentTime,   // (number) => void
    setVolume,        // (number) => void
    // GreenAudioPlayer will call these to supply listeners, that have to be called, whenever sound engine's state changes:
    addPositionListener,     // ((number) => void) => void:  current time/position changes ('timeupdate', currentTime)
    addVolumeListener,       // ((number) => void) => void:  volume changes ('volumechange', volume)
    addSeekingListener,      // ((boolean) => void) => void: time/position starts/stops to change ('seeking', 'seeked', seeking)
    addDurationListener,     // ((number) => void) => void:  file is loaded and/or duration changes ('loadedmetadata', 'canplay', duration)
    addEndedListener,        // (() => void) => void:        file has ended, or no more data is available ('ended')
    addSeekableListener,     // ((bolean) => void) => void:  backend can or cannot be seeked, eg. when loaded/unloaded new file (seekable)
    addPausedListener,       // ((bolean) => void) => void:  audio gets (un)paused (paused)
    addSrcListener           // ((string) => void) => void:  file download url changes, eg. ne file is loaded (currentSrc)
) });
```

You can add **multiple** players on a single page.

There's a shorter method for initializing several Green Audio Players:
```js
GreenAudioPlayer.init({
    selector: '.player', // inits Green Audio Player on each audio container that has class "player"
    stopOthersOnPlay: true
});
```

Refer to `/examples` folder for demos of single and multiple players.

### TypeScript Support

The library fully supports TypeScript with built-in type declarations. When using TypeScript, you get full IntelliSense and type checking.

Example usage in TypeScript:

```typescript
// Initialize single player with type safety
new GreenAudioPlayer('#player-container', {
  showTooltips: true,
  showDownloadButton: false
});

// Initialize multiple players
GreenAudioPlayer.init({
  selector: '.player-container',
  stopOthersOnPlay: true
});

// Custom audio backend with full typing
const audioBackend = GreenAudioPlayer.createAltBackend(
  false,         // autoplay: boolean
  'metadata',    // preload: 'none' | 'metadata' | 'auto'
  () => audio.play(),      // play: () => Promise<void>
  () => audio.pause(),     // pause: () => void
  (time: number) => { audio.currentTime = time; },      // setCurrentTime
  (volume: number) => { audio.volume = volume; },   // setVolume
  (cb: (time: number) => void) => { audio.addEventListener('timeupdate', cb); }, // addPositionListener
  (cb: (vol: number) => void) => { audio.addEventListener('volumechange', cb); }, // addVolumeListener
  (cb: (seeking: boolean) => void) => { /* add seeking listeners */ },
  (cb: (dur: number) => void) => { audio.addEventListener('loadedmetadata', cb); }, // addDurationListener
  (cb: () => void) => { audio.addEventListener('ended', cb); }, // addEndedListener
  (cb: (seekable: boolean) => void) => { /* add seekable listener */ },
  (cb: (src: string) => void) => { audio.addEventListener('srcchange', cb); }, // addSrcListener
);
```

All types are exported: `GreenAudioPlayer`, `GreenAudioPlayerOptions`, and `PartialAudioBackend`.

## Options

| Option | Description | Values | Default |
|--------|-------------|--------|---------|
| stopOthersOnPlay | Whether other audio players shall get paused when hitting play | `true`, `false` | `false`
| showDownloadButton | Allow audio file download. Displays the download button. | `true`, `false` | `false`
| enableKeystrokes | Players have keystrokes associated with functions. | `true`, `false` | `false`
| showTooltips | Labels for play, volume and download buttons visible on focus | `true`, `false` | `false`
| outlineControls | Outline player controls for accessibility | `true`, `false` | `false`
| selector | CSS selector for elements to be converted to players by `init` function | string | (required)
| altAudioBackend | Use own implementation of Audio api | object | Use `<audio>` HTML tag

The tooltip option requires setting `showTooltips` to true on your player.

## Accessibility

In order to improve accessibility, keyboard navigation can be enabled, by passing the `enableKeystrokes` option.
By default, the outline is disabled on elements.
If you want to add outline to elements, use `outlineControls` option, or add `player-accessible` class to the player element:

```html
<div class="player-1 player-accessible">
...
</div>
```

You can focus on elements with Tab key and use the following keys to use the player controls.

| Key | Action |
|--------|-------------|
| Tab | Focus on the next element | 
| Shift + Tab | Focus on the previous element | 
| Enter or Spacebar | Pause/Play | 
| Right Arrow | Fast-forward | 
| Left Arrow | Rewind | 
| Enter or Spacebar | Show/hide volume slider |
| Up Arrow | Increase volume |
| Down Arrow | Decrease volume |
| Enter | Download | 
