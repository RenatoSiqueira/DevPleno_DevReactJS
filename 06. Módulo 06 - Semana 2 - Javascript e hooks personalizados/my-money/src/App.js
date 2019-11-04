import React from 'react'
import useGet from './useGet'

const url = 'https://devreact-mymoney.firebaseio.com/movimentacoes.json'

function App() {
  const data = useGet(url)
  return (
    <div>
      <h1>My Money</h1>
      <div>
        {data.loading && <p>Loading...</p>}
        {JSON.stringify(data.data)}
      </div>
    </div>
  )
}

export default App
