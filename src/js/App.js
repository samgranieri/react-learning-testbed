// import { createRoot } from 'react-dom'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { RichText } from '@graphcms/rich-text-react-renderer'

const content = {
  children: [
    {
      type: 'paragraph',
      children: [
        {
          bold: true,
          text: 'Hello World!',
        },
      ],
    },
  ],
}

function App() {
  return (
    <RichText
      content={content}
      renderers={{
        p: ({ children }) => <h1 className="text-white">{children}</h1>,
      }}
    />
  )
}
const rootElement = document.getElementById('navigation')
// const root = createRoot(domNode)
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
)

// root.render(<App />)
