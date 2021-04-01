# Markdown editor
`created by Isaque Véras`

Este é um **editor de markdown** onde podemos escrever arquivos com a extensão _.md_ e poder ver ao mesmo tempo como ela fica, onde chamamos de **preview**.

Para criar esse editor, basta usar a biblioteca _react-markdown_ onde pegamos os dados de um _textarea_ usando o _useState_ do react.

```js
import ReactMarkdown from 'react-markdown';

function App() {
  const [markdown, setMarkdown] = useState('');

  return (
    <div>
      <textarea value={markdown} onChange={e => setMarkdown(e.target.value)} />
      <ReactMarkdown source={markdown}/>
    </div>
  );

export default App;
```

Esse é todo o código que usei para construir essa aplicação. Gostou? deixe a sua estrelinha nesse repositório. Obrigado!
