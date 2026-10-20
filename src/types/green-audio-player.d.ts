/**
 * Green Audio Player TypeScript declarations
 * @author Greg Hovanesyan
 * @license MIT
 */

export default class GreenAudioPlayer {
  /**
   * Creates a new Green Audio Player instance
   * @param player - CSS selector string or DOM element
   * @param options - Configuration options
   */
  constructor(player: string | HTMLElement, options?: GreenAudioPlayerOptions);

  /**
   * Initialize all audio players matching selector automatically
   * @param options - Configuration options with required selector property
   */
  static init(options: { selector: string }): void;

  /**
   * Create custom audio backend for advanced use cases
   * @param autoplay - Autoplay boolean attribute
   * @param preload - Preload attribute ('none' | 'metadata' | 'auto')
   * @param play - Function to play audio
   * @param pause - Function to pause audio  
   * @param setCurrentTime - Function to set current position
   * @param setVolume - Function to set volume level
   * @param addPositionListener - Called when position changes
   * @param addVolumeListener - Called when volume changes
   * @param addSeekingListener - Called during seeking operation
   * @param addDurationListener - Called when duration changes
   * @param addEndedListener - Called when playback ends
   * @param addSeekableListener - Called when seeking capability changes
   * @param addPausedListener - Called when paused state changes
   * @param addSrcListener - Called when current source changes
   * @returns Configured audio backend object
   */
  static createAltBackend(
    autoplay: boolean,
    preload: 'none' | 'metadata' | 'auto',
    play: () => Promise<void>,
    pause: () => void,
    setCurrentTime: (time: number) => void,
    setVolume: (volume: number) => void,
    addPositionListener: (callback: (currentTime: number) => void) => void,
    addVolumeListener: (callback: (volume: number) => void) => void,
    addSeekingListener: (callback: (seeking: boolean) => void) => void,
    addDurationListener: (callback: (duration: number) => void) => void,
    addEndedListener: (callback: () => void) => void,
    addSeekableListener: (callback: (seekable: boolean) => void) => void,
    addPausedListener: (callback: (paused: boolean) => void) => void,
    addSrcListener: (callback: (currentSrc: string) => void) => void
  ): PartialAudioBackend;

  /**
   * Returns HTML template for player UI
   */
  static getTemplate(): string;

  /**
   * Format time in mm:ss format
   * @param time - Time in seconds
   * @returns Formatted time string
   */
  static formatTime(time: number): string;

  /**
   * Pause a specific audio player
   * @param player - Audio element/pref
   */
  static pausePlayer(player: HTMLAudioElement): void;

  /**
   * Play a specific audio player
   * @param player - Audio element
   */
  static playPlayer(player: HTMLAudioElement): void;

  /**
   * Stop all other green audio players on screen
   */
  static stopOtherPlayers(): void;

  // Instance methods (not accessible in UMD format, shown for documentation)
  initEvents(): void;
  overcomeIosLimitations(): void;
  isDraggable(el: EventTarget): boolean;
  inRange(event: MouseEvent | TouchEvent): boolean;
  updateProgress(): void;
  updateVolume(): void;
  getRangeBox(event: MouseEvent | TouchEvent): HTMLElement;
  getCoefficient(event: MouseEvent | TouchEvent): number;
  rewind(event: MouseEvent | TouchEvent): void;
  showVolume(): void;
  showHideVolume(): void;
  changeVolume(event: MouseEvent | TouchEvent): void;
  preloadNone(): void;
  togglePlay(): void;
  hasSetAttribute(el: HTMLElement, attr: string, value: string): void;
  setCurrentTime(time: number): void;
  setVolume(volume: number): void;
  unPressKb(event: KeyboardEvent): void;
  pressKb(event: KeyboardEvent): void;
  showLoadingIndicator(): void;
  hideLoadingIndicator(): void;
  showDownload(): void;
  downloadAudio(): void;
  directionAware(): void;
}

export interface GreenAudioPlayerOptions {
  stopOthersOnPlay?: boolean;
  enableKeystrokes?: boolean;
  showTooltips?: boolean;
  outlineControls?: boolean;
  showDownloadButton?: boolean;
  altAudioBackend?: PartialAudioBackend;
}

export interface PartialAudioBackend {
  attributes: any;
  currentTime: number;
  volume: number;
  seeking: boolean;
  duration: number;
  seekable: boolean;
  paused: boolean;
  currentSrc: string;
  play(): Promise<void>;
  pause(): void | Promise<void>;
  setCurrentTime(time: number): void;
  setVolume(volume: number): void;
  addEventListener(
    type: string,
    listener: (value: number | boolean | string) => void
  ): void;
}
