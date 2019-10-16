'use strict'

const ude = require('ubuntu-dev-ec2')

module.exports = launcher

async function * launcher (opts = {}) {
  const cfg = (typeof opts.cfg === 'string') ? 
    await ude.config(opts.cfg) :
    opts.cfg
  cfg.type = cfg.type || 'c5.metal'
  cfg.node = cfg.node || 10
  opts = Object.assign({}, cfg, opts)
  opts.setup = {
    'scale-scenarios'() {
      return `
        git clone https://github.com/hyperswarm/scale-scenarios \
          && cd scale-scenarios/scenarios \
          && npm install
      `
    }
  }
  yield * ude(opts)
}