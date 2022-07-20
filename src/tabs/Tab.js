import { useState } from 'react';
import { TabContent } from './handleTab';

export function Tab() {
  const [tab, setTab] = useState('tab1');

  return (
    <div style={{ marginTop: '1rem' }}>
      <div style={{ display: 'flex', gap: '.5rem' }}>
        <button onClick={() => setTab('tab1')}>Tab 1</button>
        <button onClick={() => setTab('tab2')}>Tab 2</button>
        <button onClick={() => setTab('tab3')}>Tab 3</button>
      </div>
      <div>
        <TabContent tab={tab} />
      </div>
    </div>
  );
}

// import { useState } from 'react';
// import { Button } from './Button';
// import { dataTab, handleTab } from './handleTab';

// export function Tab() {
//   const [tab, setTab] = useState(dataTab.tab1);

//   function handleClick(e) {
//     const tabText = e.target.innerText;
//     handleTab(tabText, setTab, dataTab);
//   }

//   return (
//     <div style={{ marginTop: '1rem' }}>
//       <div style={{ display: 'flex', gap: '.5rem' }}>
//         <Button handleClick={handleClick}>Tab 1</Button>
//         <button onClick={handleClick}>Tab 2</button>
//       </div>
//       <div>
//         <p>{tab.description}</p>
//       </div>
//     </div>
//   );
// }
