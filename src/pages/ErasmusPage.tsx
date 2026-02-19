import { useEffect } from 'react';

export default function ErasmusPage() {
  useEffect(() => {
    // Deschide pagina oficială Erasmus ASE în tab nou
    window.open('https://international.ase.ro/21/erasmus-selection/', '_blank');
    // Redirectează înapoi la homepage
    window.location.hash = '#/';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#7209B7]/5 via-white to-[#4CC9F0]/5">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#7209B7] border-t-transparent mb-4"></div>
        <p className="text-gray-600">Deschidere pagină Erasmus+ în tab nou...</p>
      </div>
    </div>
  );
}