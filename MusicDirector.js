/**
 * MusicDirector handles procedural synthwave basslines.
 */
export class MusicDirector {
    constructor(audioContext, destination) {
        this.ctx = audioContext;
        this.destination = destination;
        this.tempo = 120;
        this.isPlaying = false;
        this.nextNoteTime = 0;
        this.currentNote = 0;
        
        // A minor pentatonic bass notes
        this.bassNotes = [55.00, 65.41, 73.42, 82.41]; // A1, C2, D2, E2

        this._initWorker();
    }

    _initWorker() {
        const workerCode = `
            let timerID = null;
            self.onmessage = (e) => {
                if (e.data === 'start') {
                    if (timerID) return;
                    timerID = setInterval(() => postMessage('tick'), 25);
                } else if (e.data === 'stop') {
                    if (timerID) {
                        clearInterval(timerID);
                        timerID = null;
                    }
                }
            };
        `;
        const blob = new Blob([workerCode], { type: 'application/javascript' });
        this.worker = new Worker(URL.createObjectURL(blob));
        this.worker.onmessage = () => this.schedule();
    }

    start() {
        if (this.isPlaying) return;
        this.isPlaying = true;
        this.nextNoteTime = this.ctx.currentTime;
        this.worker.postMessage('start');
    }

    stop() {
        this.isPlaying = false;
        this.worker.postMessage('stop');
    }

    setSpeed(speedFactor) {
        this.tempo = 120 * speedFactor;
    }

    schedule() {
        while (this.nextNoteTime < this.ctx.currentTime + 0.1) {
            this.playNote(this.currentNote, this.nextNoteTime);
            this.advanceNote();
        }
    }

    advanceNote() {
        const secondsPerBeat = 60.0 / this.tempo;
        this.nextNoteTime += 0.25 * secondsPerBeat; // 16th notes
        this.currentNote = (this.currentNote + 1) % 16;
    }

    playNote(note, time) {
        // Rhythmic pattern: focus on 1 and 3, with some syncopation
        const pattern = [1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1];
        if (pattern[note] === 0) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sawtooth';
        // Select note based on measure position
        const freq = this.bassNotes[Math.floor(note / 4) % this.bassNotes.length];
        osc.frequency.setValueAtTime(freq, time);
        
        // Filter sweep for that synthwave feel
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(200, time);
        filter.frequency.exponentialRampToValueAtTime(2000, time + 0.1);

        gain.gain.setValueAtTime(0.15, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.2);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.destination);

        osc.start(time);
        osc.stop(time + 0.2);
    }
}
