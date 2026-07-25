/* Shared Web Audio helper.

   Browsers block AudioContext until a genuine user gesture (click / tap /
   keypress). Hover is NOT a qualifying gesture, so the "hover to play" tech
   stack would stay silent forever unless we explicitly unlock the context on
   the first real interaction anywhere on the page. After that, every sound —
   including hovers — plays. */

let ctx: AudioContext | null = null;
let unlockBound = false;

type WindowWithWebkit = Window & { webkitAudioContext?: typeof AudioContext };

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const AC =
    window.AudioContext || (window as WindowWithWebkit).webkitAudioContext;
  if (!AC) return null;
  if (!ctx) ctx = new AC();
  return ctx;
}

function bindUnlock() {
  if (unlockBound || typeof window === "undefined") return;
  unlockBound = true;

  const unlock = () => {
    const c = getCtx();
    if (!c) return;
    if (c.state === "suspended") c.resume();
    // a one-sample silent buffer fully unlocks audio on iOS/Safari
    try {
      const buffer = c.createBuffer(1, 1, 22050);
      const source = c.createBufferSource();
      source.buffer = buffer;
      source.connect(c.destination);
      source.start(0);
    } catch {
      // ignore
    }
  };

  ["pointerdown", "touchstart", "mousedown", "keydown"].forEach((evt) =>
    window.addEventListener(evt, unlock, { passive: true })
  );
}

// register the unlock listeners as soon as this module loads on the client
bindUnlock();

/* Short synthesized click/pluck, same recipe as the reference site. */
export function playTone(freq = 1000, dur = 0.045) {
  const c = getCtx();
  if (!c) return;
  bindUnlock();
  try {
    if (c.state === "suspended") c.resume();
    const t = c.currentTime;
    const osc = c.createOscillator();
    const gain = c.createGain();
    const filter = c.createBiquadFilter();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, t);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.8, t + dur);
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(3000, t);
    filter.Q.value = 0.7;
    gain.gain.setValueAtTime(0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(c.destination);
    osc.start(t);
    osc.stop(t + dur + 0.01);
  } catch {
    // audio not available; ignore
  }
}
