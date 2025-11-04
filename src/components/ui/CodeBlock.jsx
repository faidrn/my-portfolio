// CodeBlock.jsx
import { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

// lenguajes
import javascript from "highlight.js/lib/languages/javascript";
import bash from "highlight.js/lib/languages/bash";
import plaintext from "highlight.js/lib/languages/plaintext";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("jsx", javascript);
hljs.registerLanguage("plaintext", plaintext);

hljs.configure({
  tabReplace: "  ",
  classPrefix: "hljs-",
});

const CodeBlock = ({ code = "", language = "plaintext" }) => {
  const codeRef = useRef(null);

  useEffect(() => {
  if (!codeRef.current) return;

  // Limpia contenido previo y marca de highlight
  codeRef.current.removeAttribute("data-highlighted");
  codeRef.current.textContent = code;

  const raf = requestAnimationFrame(() => {
    try {
      hljs.highlightElement(codeRef.current);
    } catch (err) {
      console.warn("Error al aplicar highlight:", err);
    }
  });

    return () => cancelAnimationFrame(raf);
  }, [code, language]);

  return (
    <div className="rounded-xl overflow-hidden my-8 shadow-2xl border border-gray-700 bg-[#0d1117]">
      <div className="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-sm text-gray-300 font-medium font-mono">{language}</span>
        </div>
        <button
          className="text-xs text-gray-400 hover:text-white transition-colors px-3 py-1 rounded bg-gray-800 hover:bg-gray-700"
          onClick={() => navigator.clipboard.writeText(code)}
          type="button"
        >
          Copiar
        </button>
      </div>

      <pre className="hljs p-0 m-0 overflow-x-auto">
        <code
          ref={codeRef}
          className={`language-${language} block p-6 text-[14px] leading-7 font-mono`}
        >
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
