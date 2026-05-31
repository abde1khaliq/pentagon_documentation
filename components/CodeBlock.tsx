import { CodeBlock, createShikiAdapter, Icon } from "@chakra-ui/react"
import type { HighlighterGeneric } from "shiki"

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki")
    return createHighlighter({
      langs: ["python", "bash"],
      themes: ["github-dark"],
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
