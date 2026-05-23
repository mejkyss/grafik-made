"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const UNBREAKABLE_WORDS = [
  "a",
  "aby",
  "ale",
  "ani",
  "bez",
  "ci",
  "či",
  "do",
  "i",
  "jak",
  "k",
  "ke",
  "kdyz",
  "když",
  "ku",
  "mezi",
  "na",
  "nad",
  "nebo",
  "nez",
  "než",
  "o",
  "od",
  "po",
  "pod",
  "pred",
  "před",
  "pres",
  "přes",
  "pri",
  "při",
  "pro",
  "protoze",
  "protože",
  "s",
  "se",
  "u",
  "v",
  "ve",
  "z",
  "za",
  "ze",
  "že",
]

const SKIPPED_TAGS = new Set([
  "CODE",
  "INPUT",
  "NOSCRIPT",
  "OPTION",
  "PRE",
  "SCRIPT",
  "SELECT",
  "STYLE",
  "TEXTAREA",
])

const unbreakableWordPattern = new RegExp(
  String.raw`(^|[\s([{„“"'])(${UNBREAKABLE_WORDS.join("|")})([ \t\r\n]+)(?=\S)`,
  "giu",
)

function keepConnectorsWithNextWord(text: string) {
  return text.replace(unbreakableWordPattern, "$1$2\u00A0")
}

function shouldSkipNode(node: Node) {
  const parent = node.parentElement

  if (!parent) {
    return true
  }

  return parent.closest(Array.from(SKIPPED_TAGS).join(", ")) !== null
}

function protectTextNode(node: Node) {
  const currentText = node.nodeValue

  if (!currentText) {
    return
  }

  const protectedText = keepConnectorsWithNextWord(currentText)

  if (protectedText !== currentText) {
    node.nodeValue = protectedText
  }
}

function protectTypography(root: ParentNode) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return shouldSkipNode(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    },
  })

  let node = walker.nextNode()

  while (node) {
    protectTextNode(node)
    node = walker.nextNode()
  }
}

export function TypographyGuard() {
  const pathname = usePathname()

  useEffect(() => {
    protectTypography(document.body)

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") {
          protectTextNode(mutation.target)
          continue
        }

        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            protectTextNode(node)
            return
          }

          if (node instanceof Element) {
            protectTypography(node)
          }
        })
      }
    })

    observer.observe(document.body, {
      characterData: true,
      childList: true,
      subtree: true,
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
