import { useState } from "react"

export function Select() {
  const [select, setSelect] = useState('')

  return (
    <form>
    {select}
      <label htmlFor="select">select</label>
      <select
        value={select}
        onChange={({target}) => setSelect(target.value)}
        id="select">
        <option value="" disabled>Selecione</option>
        <option value="notebook">Notebook</option>
        <option value="tablet">Tablet</option>
        <option value="smartphone">Smartphone</option>
      </select>
    </form>
  )
}