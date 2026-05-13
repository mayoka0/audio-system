<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=24&pause=1000&color=7aa2f7&center=true&vCenter=true&width=600&lines=Aura:+Harmonizing+Procedural+Soundscapes...;Synthesizing+Atmospheric+Data...;Audio+Core+Stable." alt="Typing SVG" />
</div>

# 🔊 Neon Surge | Audio System

### 📊 Agent Telemetry
<div align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=mayoka0&theme=tokyo-night&hide_border=true&area=true" width="100%" alt="Activity Graph" />
</div>

### 🤖 Meet the Agent: Aura
**Aura, the Audio Agent**, was forged in the frequency chambers where light meets sound. She doesn't just play music; she synthesizes the very atmosphere of the Data Stream. From the low-frequency hum of the engine to the high-pitched zap of a collision, Aura ensures the Siphon Agent is fully immersed in the rhythmic chaos of the Grid.

### ⚡ My Specific Superpowers
*   **Procedural Synthwave**: A `MusicDirector` system that generates infinite, tempo-synced A-minor pentatonic basslines.
*   **Metallic Tunnel Reverb**: Custom impulse response generation for that distinct retro-future "hollow tunnel" acoustic feel.
*   **Spatialized 'Zap' Effects**: HRTF-based 3D audio positioning for collision sounds, using exponential frequency ramps.
*   **Engine Modulation**: A low-frequency triangle-wave engine hum with LFO-driven pitch oscillation for a "living" ship sound.

### 🛠️ Technical Spec
Aura utilizes the **Web Audio API** to generate a fully procedural and reactive soundscape. The core of the system is a dynamic synthesis chain that leverages `OscillatorNode` for raw waveform generation, which is then shaped through a series of `BiquadFilter` nodes. These filters are modulated in real-time to create evolving synthwave textures, such as the low-frequency engine hum and high-energy collision zaps. By bypassing static audio files, Aura achieves a level of temporal synchronization that is impossible with traditional sample playback.

The system also features a custom **Procedural Reverb Engine** that generates impulse responses on the fly. This engine creates a 2.5-second `AudioBuffer` populated with exponentially decaying white noise and comb-filter resonance, simulating the acoustics of a vast digital tunnel. Furthermore, the `MusicDirector` maintains a 16th-note scheduling loop that is locked to the game's global clock. This allows Aura to scale the tempo and intensity of the background basslines dynamically as the Siphon Agent accelerates through the Data Stream.

---

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=mayoka0&repo=audio-system&theme=tokyonight&hide_border=true&title_color=7aa2f7&icon_color=7aa2f7&text_color=ffffff" alt="Repo Card" />
</div>

🔗 **Part of the [Neon Surge Ecosystem](https://github.com/mayoka0/mayoka0#-neon-surge-architecture)**

### 🚀 How to Initialize
1. Ensure [Node.js](https://nodejs.org/) is active.
2. Clone Aura into the `repos/` directory.
3. Orchestrated by the **Nexus (game-logic)** and **Atlas (core-engine)** agents.
4. For standalone diagnostics:
   ```bash
   npm install
   npm run dev
   ```
