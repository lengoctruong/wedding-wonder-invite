import { useEffect, useState } from 'react';

export const GlobalFloatingElements = () => {
  const [elements, setElements] = useState<Array<{
    id: number;
    type: 'heart';
    left: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const createElements = () => {
      const newElements = [];
      
      // Create floating hearts only
      for (let i = 0; i < 20; i++) {
        newElements.push({
          id: i,
          type: 'heart',
          left: Math.random() * 100,
          delay: Math.random() * 8
        });
      }
      
      setElements(newElements);
    };

    createElements();
    const interval = setInterval(createElements, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-hearts global">
      {elements.map((element) => (
        <div
          key={element.id}
          className={element.type}
          style={{
            left: `${element.left}%`,
            animationDelay: `${element.delay}s`
          }}
        >
          💕
        </div>
      ))}
    </div>
  );
}; 