// luma.gl, MIT license

import {Buffer as BufferPolyfill} from './buffer';

/** Install Node.js Buffer polyfill (NO-OP in Node.js) */
export function installBufferPolyfill(): typeof Buffer {
  // @ts-ignore
  globalThis.Buffer = globalThis.Buffer || BufferPolyfill;

  // @ts-ignore
  return globalThis.Buffer;
}
