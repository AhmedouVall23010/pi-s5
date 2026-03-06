import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize, 
  Minimize, 
  CheckCircle2, 
  Cpu, 
  Shield, 
  Zap, 
  Smartphone, 
  Settings, 
  Layers, 
  Database, 
  Lock,
  Activity,
  Globe,
  LayoutGrid
} from 'lucide-react';
import { SLIDES } from './constants';

const ICONS = [
  LayoutGrid, Shield, Zap, Smartphone, Settings, Layers, Database, Lock, Activity, Globe, Cpu, CheckCircle2
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'f') toggleFullscreen();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slide = SLIDES[currentSlide];

  // Dynamic grid layout based on user request
  const getGridClass = (index: number) => {
    if (index === 1) return "grid-cols-1 max-w-3xl mx-auto"; // Slide 2 (Introduction)
    if ([2, 3, 4, 5, 6, 8].includes(index)) return "grid-cols-1 md:grid-cols-2"; // Slides 3, 4, 5, 6, 7, 9
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"; // Default
  };

  return (
    <div className="relative h-screen w-screen flex flex-col bg-emerald-950 select-none overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-800/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-900/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
      </div>

      {/* Main Content Area (No Card) */}
      <main className="relative z-10 flex-1 flex flex-col px-8 py-12 md:px-20 md:py-16 max-w-7xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col"
          >
            {/* Header Section */}
            <div className={`mb-12 ${currentSlide === 0 ? 'flex-1 flex flex-col items-center justify-center text-center' : ''}`}>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: currentSlide === 0 ? 120 : 80 }}
                className="h-1 bg-amber-400 mb-8 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.6)]" 
              />
              <h1 className={`${currentSlide === 0 ? 'text-5xl md:text-8xl' : 'text-4xl md:text-7xl'} font-display font-bold text-stone-50 tracking-tight leading-[1.1]`}>
                {slide.title}
              </h1>
              {slide.subtitle && (
                <div className={`mt-8 ${currentSlide === 0 ? 'text-2xl md:text-4xl text-amber-200/90' : 'text-xl md:text-3xl text-emerald-300/80'} font-light italic font-display whitespace-pre-line max-w-4xl`}>
                  {slide.subtitle}
                </div>
              )}
              {currentSlide === 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-16 p-8 rounded-3xl bg-emerald-900/20 border border-emerald-800/30 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4 text-emerald-400 mb-4 justify-center">
                    <Smartphone size={32} />
                    <div className="h-px w-12 bg-emerald-800" />
                    <Shield size={32} />
                  </div>
                  <p className="text-emerald-500 font-mono text-sm tracking-[0.3em] uppercase">Projet de Fin de Semestre</p>
                </motion.div>
              )}
            </div>

            {/* Content Grid */}
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-4">
              {slide.bullets && (
                <div className={`grid gap-6 ${getGridClass(currentSlide)}`}>
                  {slide.bullets.map((bullet, idx) => {
                    const Icon = ICONS[idx % ICONS.length];
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + idx * 0.05 }}
                        className="group p-6 rounded-3xl bg-emerald-900/30 backdrop-blur-md border border-emerald-800/50 hover:bg-emerald-800/40 hover:border-amber-400/30 transition-all duration-500"
                      >
                        <div className="mb-4 inline-flex p-3 rounded-2xl bg-emerald-950/50 text-amber-400 group-hover:text-amber-300 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] transition-all">
                          <Icon size={28} strokeWidth={1.5} />
                        </div>
                        <p className="text-stone-200 text-lg md:text-xl leading-relaxed font-medium group-hover:text-white transition-colors">
                          {bullet}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Minimal Floating Footer Controls */}
      <footer className="relative z-20 px-8 py-8 md:px-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-emerald-900/40 backdrop-blur-lg rounded-2xl border border-emerald-800/50 p-1.5">
            <button
              onClick={prevSlide}
              className="p-3 rounded-xl hover:bg-emerald-800/60 transition-all text-emerald-400 active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-xl hover:bg-emerald-800/60 transition-all text-emerald-400 active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleFullscreen}
            className="p-4 rounded-2xl bg-emerald-900/40 backdrop-blur-lg border border-emerald-800/50 hover:bg-emerald-800/60 transition-all text-emerald-400 active:scale-90"
          >
            {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
          </button>
        </div>
      </footer>
    </div>
  );
}
