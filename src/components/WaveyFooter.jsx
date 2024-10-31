import React, { useEffect, useRef } from 'react';
import * as twgl from 'twgl.js';

const WaveyFooter = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");
    
    // Load shaders
    const loadShader = async () => {
      const [vertexResponse, fragmentResponse] = await Promise.all([
        fetch('/shaders/vertex.glsl'),
        fetch('/shaders/fragment.glsl')
      ]);
      
      const vertexShader = await vertexResponse.text();
      const fragmentShader = await fragmentResponse.text();
      
      const programInfo = twgl.createProgramInfo(gl, [vertexShader, fragmentShader]);
      
      const arrays = {
        position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
      };
      const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
      
      let mouseX = 0, mouseY = 0;
      
      canvas.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
      
      function render(time) {
        twgl.resizeCanvasToDisplaySize(gl.canvas, 0.5);
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        
        const uniforms = {
          u_time: time * 0.002,
          u_resolution: [gl.canvas.width, gl.canvas.height],
          u_mouse: [mouseX, mouseY],
        };
        
        gl.useProgram(programInfo.program);
        twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
        twgl.setUniforms(programInfo, uniforms);
        twgl.drawBufferInfo(gl, bufferInfo);
        
        requestAnimationFrame(render);
      }
      
      requestAnimationFrame(render);
    };
    
    loadShader();
  }, []);
  
  return (
    <footer className="relative w-full h-[50vh]">
      <canvas 
        ref={canvasRef}
        className="absolute bottom-0 w-full h-full pointer-events-none"
      />
      <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl">
        Created with 💜
      </div>
    </footer>
  );
};

export default WaveyFooter;