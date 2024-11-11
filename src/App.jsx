
import Toggle from './Compound/Toggle'

function App() {


  return (
    <>
      <h1>Compound Toggle Example</h1>
      <Toggle>
        <Toggle.On>
          <p>The toggle is ON</p>
        </Toggle.On>
        <Toggle.Off>
          <p>The toggle is ooof</p>
        </Toggle.Off>
        <Toggle.Button />
      </Toggle>
     </>
  )
}

export default App
