import React from 'react';

export default function GlowingBlob() {
  return (
    <div className="w-full h-screen  overflow-hidden flex items-center justify-center">
      {/* Main glowing blob */}
      <div className="relative">
        {/* Outer glow layers for intense lighting effect */}
        <div className="absolute inset-0 animate-blob-spin">
          <div className="w-80 h-80 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-xl opacity-70"></div>
        </div>
        
        <div className="absolute inset-0 animate-blob-spin-reverse animation-delay-2000">
          <div className="w-80 h-80 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full blur-xl opacity-60"></div>
        </div>
        
        <div className="absolute inset-0 animate-blob-pulse">
          <div className="w-80 h-80 bg-gradient-to-r from-blue-300 via-cyan-400 to-teal-500 rounded-full blur-lg opacity-80"></div>
        </div>
        
        {/* Core blob with intense inner glow */}
        <div className="relative w-80 h-80 animate-blob-morph">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-500 rounded-full blur-xl opacity-90"></div>
          <div className="absolute inset-4 bg-gradient-to-tr from-blue-200 via-cyan-300 to-purple-400 rounded-full blur-lg opacity-95"></div>
          <div className="absolute inset-8 bg-gradient-to-bl from-white via-cyan-200 to-blue-300 rounded-full blur-md"></div>
        </div>
        
        {/* Additional light rays */}
        <div className="absolute inset-0 animate-blob-spin-slow">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent rounded-full blur-2xl opacity-40"></div>
        </div>
        
        <div className="absolute w-80 h-80 inset-0 text-black">
          <div className='flex w-full h-full justify-center items-center'>
            <div className="text-4xl font-audiowide bg-black bg-clip-text text-transparent font-bold "  style={{ fontFamily: "'Orbitron', 'Rajdhani', sans-serif" }}>
                ArqonSec ❯
              </div>
          </div>
        </div>


      </div>
      
      <style jsx>{`
        @keyframes blob-spin {
          0%, 100% { transform: rotate(0deg) scale(1); }
          33% { transform: rotate(120deg) scale(1.1); }
          66% { transform: rotate(240deg) scale(0.9); }
        }
        
        @keyframes blob-spin-reverse {
          0%, 100% { transform: rotate(0deg) scale(1); }
          33% { transform: rotate(-120deg) scale(0.95); }
          66% { transform: rotate(-240deg) scale(1.05); }
        }
        
        @keyframes blob-pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 0.6; }
        }
        
        @keyframes blob-morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(0deg); }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: rotate(90deg) scale(1.05); }
          50% { border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; transform: rotate(180deg); }
          75% { border-radius: 70% 30% 40% 60% / 40% 70% 60% 50%; transform: rotate(270deg) scale(0.95); }
        }
        
        @keyframes blob-spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-blob-spin {
          animation: blob-spin 8s ease-in-out infinite;
        }
        
        .animate-blob-spin-reverse {
          animation: blob-spin-reverse 10s ease-in-out infinite;
        }
        
        .animate-blob-pulse {
          animation: blob-pulse 6s ease-in-out infinite;
        }
        
        .animate-blob-morph {
          animation: blob-morph 12s ease-in-out infinite;
        }
        
        .animate-blob-spin-slow {
          animation: blob-spin-slow 20s linear infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}