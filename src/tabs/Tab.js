import { useState } from 'react';
import { Button } from './Button';
import { dataTab, handleTab } from './handleTab';

export function Tab() {
  const [tab, setTab] = useState(dataTab.tab1);

  function handleClick(e) {
    const tabText = e.target.innerText;
    handleTab(tabText, setTab, dataTab);
  }

  return (
    <div style={{ marginTop: '1rem' }}>
      <div style={{ display: 'flex', gap: '.5rem' }}>
        <Button handleClick={handleClick}>Tab 1</Button>
        <button onClick={handleClick}>Tab 2</button>
      </div>
      <div>
        <p>{tab.description}</p>
      </div>
    </div>
  );
}
