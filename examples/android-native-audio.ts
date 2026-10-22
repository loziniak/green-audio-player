import { default as GreenAudioPlayer, PartialAudioBackend } from "green-audio-player";
import * as Native from "tauri-plugin-native-audio-api";

/**
 *  An example of options.altAudioBackend / GreenAudioPlayer.createAltBackend usage
 *  with Tauri plugin for Android native audio playback.
 */

const AUTOPLAY = false;
const PRELOAD_NONE = 'none';
const INITIAL_STATE: Native.NativeAudioState = { status: 'idle', currentTime: 0, duration: 0, isPlaying: false, buffering: false, rate: 1.0 };

class Listeners<T> {
  #listeners: Array<(value: T) => void> = [];

  add(listener: (value: T) => void): void {
    this.#listeners.push(listener);
  }

  remove(listener: (value: T) => void): void {
    const i = this.#listeners.indexOf(listener);
    if (i >= 0) {
      this.#listeners.splice(i, 1);
    }
  }

  call(value: T): void {
    this.#listeners.forEach((listener) => listener(value));
  }
}

export default class NativeAudio {
  #initPromise;

  #positionListeners = new Listeners<number>();
  #volumeListeners = new Listeners<number>();
  #seekingListeners = new Listeners<boolean>();
  #durationListeners = new Listeners<number>();
  #endedListeners = new Listeners<void>();
  #seekableListeners = new Listeners<boolean>();
  #pausedListeners = new Listeners<boolean>();
  #srcListeners = new Listeners<string>();

  #lastState: Native.NativeAudioState = INITIAL_STATE;

  constructor() {
    const self = this;
    this.#initPromise = Native.initialize();
    Native.addStateListener(this.#onStateChange.bind(self));
  }

  async load(src: string, title?: string, artist?: string, imageUrl?: string) {
    await this.#initPromise;

    const state = await Native.setSource({
      src: src,
      title: title,
      artist: artist,
      artworkUrl: imageUrl
    });
    this.#onStateChange(state);
  }

  async play(): Promise<void> {
    const state = await Native.play();
    this.#onStateChange(state);
  }

  pause(): void {
    const self = this;
    Native.pause().then(state => self.#onStateChange(state));
  }

  addEndedHandler(handler: () => void): void {
    this.#endedListeners.add(handler);
  }

  removeEndedHandler(handler: () => void): void {
    this.#endedListeners.remove(handler);
  }

  #onStateChange(state: Native.NativeAudioState): void {
//     console.log("STATE: ", state); // TODO: debug
//     console.log("LAST_STATE: ", this.#lastState); // TODO: debug

    var seeking = undefined;
    var seekable = undefined;

    if (state.currentTime != this.#lastState.currentTime) this.#positionListeners.call(state.currentTime);
    if (state.duration != this.#lastState.duration) {
      if (state.duration == 0) seekable = false;
      this.#durationListeners.call(state.duration);
    }
    if (state.isPlaying != this.#lastState.isPlaying) this.#pausedListeners.call(!state.isPlaying);

    if (state.buffering != this.#lastState.buffering) seeking = state.buffering;

    if (state.status != this.#lastState.status) {
      if (state.status == 'loading') {
        seekable = false;
        if (!seeking) seeking = true;
      }
      if (this.#lastState.status == 'loading') {
        if (seekable === undefined) seekable = true;
        if (!seeking) seeking = false;
      }

      if (state.status == 'ended') this.#endedListeners.call();

      // notice: status 'playing' redundant with state.isPlaying, so ommitted.
//       if (state.status == 'playing') this.#pausedListeners.call(false);
//       if (this.#lastState.status == 'playing') this.#pausedListeners.call(true);
    }

    if (seekable !== undefined) this.#seekableListeners.call(seekable);
    if (seeking !== undefined) this.#seekingListeners.call(seeking);

    this.#lastState = state;
  }

  async partialBackend(): Promise<PartialAudioBackend> {
    await this.#initPromise;
    const self = this;

    return GreenAudioPlayer.createAltBackend(
      AUTOPLAY,
      PRELOAD_NONE,

      this.play.bind(self),
      this.pause.bind(self),

      (newTime) => {
        Native.seekTo(newTime).then(state => self.#onStateChange(state));
      },
      (newVolume) => {
        this.#volumeListeners.call(newVolume);
      },

      (positionListener) => this.#positionListeners.add(positionListener),
      (volumeListener) => this.#volumeListeners.add(volumeListener),
      (seekingListener) => this.#seekingListeners.add(seekingListener),
      (durationListener) => this.#durationListeners.add(durationListener),
      (endedListener) => this.#endedListeners.add(endedListener),
      (seekableListener) => this.#seekableListeners.add(seekableListener),
      (pausedListener) => this.#pausedListeners.add(pausedListener),
      (srcListener) => this.#srcListeners.add(srcListener),
    );
  }
}

