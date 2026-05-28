'use client';

/**
 * FloatingShapes Component
 * Creates decorative animated shapes and stars
 */
export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full border-2 border-lime-400/20 animate-float" />
      <div
        className="absolute top-40 right-20 w-48 h-48 rounded-full border border-pink-500/10 animate-float"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-40 left-1/4 w-40 h-40 rounded-full border-2 border-lime-400/10 animate-float"
        style={{ animationDelay: '4s' }}
      />

      {/* Animated stars */}
      <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
      <div
        className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-500 rounded-full animate-pulse"
        style={{ animationDelay: '0.5s' }}
      />

      {/* Gradient blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-lime-400/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-500/5 to-transparent rounded-full blur-3xl" />
    </div>
  );
}
