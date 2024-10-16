import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef(null);
  const canvasRef = useRef(null);

  const tracks = [
    { title: 'Track 1', src: '/path/to/track1.mp3' },
    { title: 'Track 2', src: '/path/to/track2.mp3' },
  ];

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      drawWaveform();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack]);

  const drawWaveform = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(audioRef.current);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    function animate() {
      const array = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(array);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      for (let i = 0; i < array.length; i++) {
        const x = i * 3;
        const y = (array[i] / 255) * canvas.height;
        ctx.lineTo(x, canvas.height - y);
      }
      ctx.strokeStyle = '#4CAF50';
      ctx.stroke();
      requestAnimationFrame(animate);
    }

    animate();
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((currentTrack + 1) % tracks.length);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <audio ref={audioRef} src={tracks[currentTrack].src} />
      <canvas ref={canvasRef} width="300" height="50" className="w-full mb-4" />
      <div className="flex justify-between items-center">
        <button onClick={togglePlay} className="bg-green-500 text-white px-4 py-2 rounded">
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <span>{tracks[currentTrack].title}</span>
        <button onClick={nextTrack} className="bg-blue-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;