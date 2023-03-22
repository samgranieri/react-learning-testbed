import { createRoot } from 'react-dom/client'
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
const domNode = document.getElementById('navigation')
const root = createRoot(domNode)
root.render(<App />)
