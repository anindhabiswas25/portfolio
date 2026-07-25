let ctx: AudioContext | null = null;

/* Short synthesized click/pluck, same recipe as the reference site. */
export function playTone(freq = 1000, dur = 0.045) {
  if (typeof window === "undefined") return;
  try {
    if (!ctx) ctx = new AudioContext();
    if (ctx.state === "suspended") ctx.resume();
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
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
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + dur + 0.01);
  } catch {
    // audio not available; ignore
  }
}
