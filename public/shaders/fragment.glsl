#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

vec2 random2(vec2 st){
  st = vec2( dot(st,vec2(127.1,311.7)),
             dot(st,vec2(269.5,183.3)) );
  return -1.0 + 2.0*fract(sin(st)*43758.5453123);
}

float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    vec2 u = f*f*(3.0-2.0*f);
    return mix( mix( dot( random2(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),
                     dot( random2(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),
                mix( dot( random2(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),
                     dot( random2(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float waveOffset = 0.3;
  float waveCenter = 1.;
  float waveFocus = 0.25;
  float waveSpeed = 2.;
  
  float wMin = waveCenter - waveFocus;
  float wMax = waveCenter + waveFocus;
  
  uv.x *= u_resolution.x/u_resolution.y;
  uv.x += 1787.74328;
  uv.y *= 2.;

  float rn = noise( vec2(uv.x, u_time / waveSpeed));
  float ry = uv.y - rn;
  float r = smoothstep(wMin, wMax, ry);
  
  float bn = noise( vec2(uv.x, u_time / waveSpeed - waveOffset));
  float by = uv.y - bn;
  float b = smoothstep(wMin, wMax, by);
  
  float gn = noise( vec2(uv.x, u_time / waveSpeed + waveOffset));
  float gy = uv.y - gn;
  float g = smoothstep(wMin, wMax, gy);
  
  gl_FragColor = vec4(r, b, g, 1.0);
}