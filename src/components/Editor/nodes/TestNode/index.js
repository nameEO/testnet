import Rete from 'rete'
import ConnectionSocket from '../../sockets/ConnectionSocket'
import ConnectionControl from './controls/ConnectionControl'

export default class TestNode extends Rete.Component {
  constructor () {
    super('Site') // name
    /*
    this.task = {
      outputs: {}
    }
    */
  }

  builder (node) {
    console.log(node)
    /// modify the node
    node.addControl(new ConnectionControl(this.editor, 'connection', node))
    node.addOutput(new Rete.Output('out', '', ConnectionSocket, true))
    node.addInput(new Rete.Input('in', '', ConnectionSocket, false))
  }

  worker (node, inputs, outputs) {
    /// process data
    outputs.out = { a: 1 }
  }
}
