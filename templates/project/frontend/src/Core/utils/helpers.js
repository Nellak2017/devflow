// Global Helpers here
export const tryCatchSyncFlat = (fn, errFn) => { try { return fn() } catch (e) { return errFn(e) } }
export const tryCatchAsyncFlat = async (fn, errFn) => { try { return await fn() } catch (e) { return errFn(e) } }
export const clamp = (value, min, max) => Math.min(Math.max(value, min), max)