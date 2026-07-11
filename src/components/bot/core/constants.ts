export const BOT_CONSTANTS = {
  character: {
    position: [0, 0.9, 0] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
  },

  pivots: {
    head: [0, 1.92, 0] as [number, number, number],

    body: [0, 1.2, 0] as [number, number, number],

    leftShoulder: [-0.43, 1.31, 0] as [
      number,
      number,
      number
    ],

    rightShoulder: [0.43, 1.31, 0] as [
      number,
      number,
      number
    ],

    leftHip: [-0.19, 0.78, 0] as [
      number,
      number,
      number
    ],

    rightHip: [0.19, 0.78, 0] as [
      number,
      number,
      number
    ],
  },

  idle: {
    breathing: {
      speed: 2,
      amplitude: 0.015,
      scale: 0.006,
    },

    head: {
      baseYaw: -0.03,

      yawSpeed: 0.55,
      yawAmplitude: 0.045,

      rollSpeed: 0.42,
      rollAmplitude: 0.02,

      bobAmplitude: 0.003,
    },

    blink: {
      cycle: 4.8,
      duration: 0.12,
      minimumScale: 0.05,
    },
  },
} as const;