import { useState } from "react"

export function TextArea() {
  const [textarea, setTextArea] = useState('')

  return (
    <form>
    <label htmlFor="textarea">Textarea</label>
      <textarea
        id="textarea"
        value={textarea}
        rows="3"
        onChange={({ target }) => setTextArea(target.value)} />
    </form>
  )
}