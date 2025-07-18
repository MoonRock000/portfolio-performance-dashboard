import '@testing-library/jest-dom';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

// Mock ResizeObserver for Recharts with proper format
global.ResizeObserver = class ResizeObserver {
  constructor(cb: ResizeObserverCallback) {
    this.cb = cb;
  }
  observe() {
    // Recharts expects entries with contentRect
    this.cb([{ 
      target: { 
        getBoundingClientRect: () => ({ width: 500, height: 300 })
      },
      contentRect: { width: 500, height: 300 }
    }] as ResizeObserverEntry[], this);
  }
  unobserve() {}
  disconnect() {}
  cb: ResizeObserverCallback;
};

afterEach(() => {
  cleanup();
});