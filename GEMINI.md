# Aura | Audio System Agent Instructions

## Overview
Aura is a procedural audio system built with the Web Audio API. It focuses on real-time synthesis of synthwave textures and sound effects for the Neon Surge ecosystem.

## Core Components
- `AudioManager`: Main entry point for starting audio, playing effects (`playZap`), and managing the engine hum.
- `MusicDirector`: Handles the procedural 16th-note bassline generation using a Web Worker timer.

## Coding Standards
- **Web Audio API**: Prefer procedural synthesis over static assets. Use `OscillatorNode`, `BiquadFilterNode`, and `ConvolverNode`.
- **Temporal Synchronization**: Ensure all audio events are scheduled using `audioContext.currentTime` for precise timing.
- **Worker-based Timing**: The `MusicDirector` uses a Web Worker to avoid main-thread jitter in the 16th-note clock.

## Testing Strategy
- Focus on verifying the mathematical correctness of curves and scheduling logic.
- Since it relies on the browser-only `AudioContext`, mock the Web Audio API for unit tests or use a browser-based test runner.

## Future Improvements
- [ ] Convert to TypeScript for better type safety of audio node connections.
- [ ] Add more complex harmonic patterns to `MusicDirector`.
- [ ] Implement a granular synthesizer for atmospheric textures.
