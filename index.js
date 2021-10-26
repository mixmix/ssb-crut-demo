const CRUT = require('ssb-crut')
const spec = require('./spec')

module.exports = {
  name: 'diet',

  manifest: {
    create: 'async',
    read: 'async',
    update: 'async',
    tombstone: 'async'
  },

  init (ssb, config) {
    const crut = new CRUT(ssb, spec)

    return {
      create (details, cb) {
        crut.create(details, cb)
      },
      read (recordId, cb) {
        crut.read(recordId, cb)
      },
      update (recordId, details, cb) {
        crut.update(recordId, details, cb)
      },
      tombstone (recordId, details, cb) {
        crut.tombstone(recordId, details, cb)
      }
    }
  }
}
