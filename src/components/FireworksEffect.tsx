import { useEffect, useState } from 'react';

interface Firework {
  id: number;
  x: number;
  y: number;
  particles: Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: string;
    life: number;
  }>;
}

export const FireworksEffect = () => {
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const colors = [
      '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', 
      '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd',
      '#ff9f43', '#10ac84', '#00d2d3', '#ff3838'
    ];

    const createFirework = (): Firework => {
      const x = Math.random() * window.innerWidth;
      const y = window.innerHeight;
      const particles = [];
      
      for (let i = 0; i < 50; i++) {
        const angle = (Math.PI * 2 * i) / 50;
        const velocity = 3 + Math.random() * 2;
        particles.push({
          x: 0,
          y: 0,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 1
        });
      }

      return {
        id: Date.now() + Math.random(),
        x,
        y,
        particles
      };
    };

    const interval = setInterval(() => {
      setFireworks(prev => {
        const updated = prev.map(fw => ({
          ...fw,
          particles: fw.particles.map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.1, // gravity
            life: p.life - 0.02
          })).filter(p => p.life > 0)
        })).filter(fw => fw.particles.length > 0);

        if (Math.random() < 0.3) {
          updated.push(createFirework());
        }

        return updated;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isActive]);

  const startFireworks = () => {
    setIsActive(true);
  };

  const stopFireworks = () => {
    setIsActive(false);
    setFireworks([]);
  };

  useEffect(() => {
    // Expose functions globally for external control
    (window as any).startFireworks = startFireworks;
    (window as any).stopFireworks = stopFireworks;
  }, []);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {fireworks.map(firework => (
        <div key={firework.id} className="absolute">
          {firework.particles.map((particle, index) => (
            <div
              key={index}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: firework.x + particle.x,
                top: firework.y + particle.y,
                backgroundColor: particle.color,
                opacity: particle.life,
                transform: `scale(${particle.life})`,
                boxShadow: `0 0 ${6 * particle.life}px ${particle.color}`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}; 