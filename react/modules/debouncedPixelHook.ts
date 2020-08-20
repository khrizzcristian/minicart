import { useRef } from 'react'
import { usePixel } from 'vtex.pixel-manager/PixelContext'
import debounce from 'debounce'

export default function useDebouncedPush() {
  const { push } = usePixel()
  const debouncedPush = useRef<(param: Record<string, unknown>) => void>(
    debounce(push, 600)
  )

  return debouncedPush.current
}
