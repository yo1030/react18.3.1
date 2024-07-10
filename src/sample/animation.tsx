// interface FadeInAnimation {
//   node: HTMLElement
// }

export class FadeInAnimation {
  node: HTMLHeadingElement
  duration!: number
  startTime!: DOMHighResTimeStamp |null;
  frameId!: number | null

  constructor(node: HTMLHeadingElement) {
    this.node = node;
  }
  start(duration: number) {
    this.duration = duration;
    if (this.duration === 0) {
      // Jump to end immediately
      this.onProgress(1);
    } else {
      this.onProgress(0);
      // Start animating
      this.startTime = performance.now();
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }
  onFrame() {
    if (this.startTime === null) {
      return
    }
    const timePassed = performance.now() - this.startTime;
    const progress = Math.min(timePassed / this.duration, 1);
    this.onProgress(progress);
    if (progress < 1) {
      // We still have more frames to paint
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }
  onProgress(progress: number) {
    this.node.style.opacity = String(progress);
  }
  stop() {
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }
    this.startTime = null;
    this.frameId = null;
    this.duration = 0;
  }
}
