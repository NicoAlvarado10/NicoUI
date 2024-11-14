import { useState } from 'react';


export const CopyBtn = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Vuelve a mostrar el ícono de copiar después de 2 segundos
    } catch (error) {
      console.error('Error al copiar al portapapeles:', error);
    }
  };

  return (
    <button onClick={handleCopy} className=" block border rounded py-1
    px-2 bg-gray-700 hover:bg-gray-600" aria-label='Copiar' >
      {copied ? (
          <i className=" ri-file-check-line w-7 h-7 text-gray-400"></i>
    ) : (
          <i className="ri-clipboard-line w-7 h-7 text-gray-400"></i>
      )}
    </button>
  );
};
