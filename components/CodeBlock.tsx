import { CodeBlock, createShikiAdapter, Icon } from "@chakra-ui/react"
import type { HighlighterGeneric } from "shiki"

let highlighterPromise: Promise<HighlighterGeneric<any, any>> | null = null

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    if (!highlighterPromise) {
      const { createHighlighter } = await import("shiki")
      highlighterPromise = createHighlighter({
        langs: ["python", "bash"],
        themes: ["github-dark"],
      })
    }
    const highlighter = await highlighterPromise
    
    // Return a proxy that ignores dispose() calls to keep the singleton alive
    return new Proxy(highlighter, {
      get(target, prop, receiver) {
        if (prop === "dispose") {
          return () => {} // No-op
        }
        return Reflect.get(target, prop, receiver)
      },
    })
  },
  theme: "github-dark",
})

type SnippetProps = {
  snippet: {
    code: string
    language: string
    title?: string
    icon?: any
  }
}

export const CodeSnippetBlock = ({ snippet }: SnippetProps) => {
  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <CodeBlock.Root code={snippet.code} language={snippet.language}>
        <CodeBlock.Header>
          <CodeBlock.Title>
            {snippet.icon && <Icon as={snippet.icon} boxSize={4}  mr={1} />}
            {snippet.title || "Code Snippet"}
          </CodeBlock.Title>
        </CodeBlock.Header>
        <CodeBlock.Content>
          <CodeBlock.Code>
            <CodeBlock.CodeText />
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </CodeBlock.AdapterProvider>
  )
}
