const { LocalStorage, SignalTracer } = require('bfx-hf-signals')
const path = require('path')

const isTracingEnabled = true

/**
 * @param {string} dir
 * @param dataDir
 * @param {string} label
 * @param {string} symbol
 * @param {string} tf
 * @returns {SignalTracer}
 */
module.exports = (dataDir, { label, symbol, tf }) => {
  const traceDir = path.join(dataDir, 'traces')
  const fileName = `bt_${label}_${symbol}_${tf}_${Date.now()}.txt`

  const storage = new LocalStorage(traceDir, fileName)
  return new SignalTracer(isTracingEnabled, storage)
}
