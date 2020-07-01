import React, { useEffect } from 'react';
import { Observer } from 'mobx-react'
import { Greet } from './components/Greet';
import { useEngines } from './stores/use_engines';

function App() {
  const { wasmEngine } = useEngines()

  useEffect(() => {
    async function loadWasm() {
      await wasmEngine.initialize()
    }
    loadWasm()
  }, [])

  return (
    <Observer>
      {() => wasmEngine.loading ? <h1>Loading...</h1> : <Greet />}
    </Observer>
  )

}

export default App;
