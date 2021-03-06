import Rete from 'rete'
import component from './component'

export default class ConnectionControl extends Rete.Control {
  constructor(emitter, key, readonly = false) {
    super(key)
    this.emitter = emitter
    this.readonly = readonly
    this.render = 'vue'
    this.component = component
    this.props = { emitter, ikey: key, readonly }
  }

  save() {
    this.vueContext.save()
  }
}
