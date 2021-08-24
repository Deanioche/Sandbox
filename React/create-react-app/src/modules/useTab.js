import { useState } from 'react'

export const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if (!allTabs || !Array.isArray(allTabs)) {
        // allTabs가 undefined이거나 배열이 아니면 return
        return;
    }
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex // setter 함수 반환
    };
};