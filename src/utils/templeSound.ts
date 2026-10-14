/**
 * Authentic Brass Temple Bell Sound Synthesizer using Web Audio API.
 * Synthesizes a warm, resonant Indian temple bell chime with rich harmonic overtones.
 */

export const playTempleBell = () => {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    const now = ctx.currentTime;
    const fundamental = 587.33; // D5 tone common in sanctum brass bells

    // Harmonic frequencies simulating bell acoustics
    const harmonics = [
      { freqRatio: 1.0, gain: 0.5, decay: 3.2 },
      { freqRatio: 1.5, gain: 0.35, decay: 2.8 },
      { freqRatio: 2.0, gain: 0.25, decay: 2.4 },
      { freqRatio: 2.76, gain: 0.2, decay: 1.8 },
      { freqRatio: 4.07, gain: 0.15, decay: 1.2 },
      { freqRatio: 5.43, gain: 0.08, decay: 0.8 },
    ];

    harmonics.forEach(({ freqRatio, gain, decay }) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(fundamental * freqRatio, now);

      // Strike attack & slow resonant ring
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(gain, now + 0.015);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + decay);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + decay);
    });
  } catch (err) {
    // Graceful fallback if audio is blocked or restricted
    console.log('Audio chime unavailable', err);
  }
};
