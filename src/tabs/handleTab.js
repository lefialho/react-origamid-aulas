export function handleTab(tabText, setTab, dataTab) {
  switch (tabText) {
    case 'Tab 1':
      setTab(dataTab.tab1);
      break;
    case 'Tab 2':
      setTab(dataTab.tab2);
      break;
    default:
      setTab(null);
  }
}

export const dataTab = {
  tab1: {
    title: 'Tab 1',
    description:
      'Lorem ipsum dolor sit amet. Sit enim magni ut omnis fuga id placeat voluptatem ab rerum sequi est unde sequi ad molestiae quia. Sed quod asperiores non similique galisum et consectetur repudiandae aut eius sequi in omnis eaque. Et dolores excepturi qui perferendis voluptatem rem consequatur officia et enim commodi est iure quod!',
  },
  tab2: {
    title: 'Tab 2',
    description:
      'Qui natus quos qui corporis reprehenderit est ratione minima eum necessitatibus perspiciatis et eligendi consequatur? Non commodi voluptate ut voluptatem voluptas aut voluptatum dolores eum voluptatem quasi vel iste ipsa et aspernatur molestiae. Et numquam rerum et soluta pariatur non alias sint vel deleniti voluptas et impedit consequatur id corporis esse. Aut veniam deserunt aut eaque nulla aut ullam inventore est sint velit.',
  },
};
