import { useEffect, useState } from "react";

export const Terminal = () => {
  const [lines, setLines] = useState<string[]>([]);
  
  const terminalLines = [
    "$ Running threat model analysis...",
    "",
    "Identifying potential vulnerabilities in API...",
    "",
    "⚠ Critical vulnerability detected in auth flow",
    "",
    "Attempting exploitation...",
    "",
    "✅ Exploit success! User authentication bypass possible.",
    "",
    "🔧 Generating remediation steps...",
    "",
    "1. Implement proper JWT validation",
    "2. Add rate limiting to authentication endpoints",
    "3. Enable multi-factor authentication",
    "",
    "✅ Vulnerability report complete"
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < terminalLines.length) {
        setLines(prev => [...prev, terminalLines[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm shadow-2xl">
      <div className="flex items-center mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="ml-4 text-gray-400">AppAxon Terminal</span>
      </div>
      
      <div className="space-y-1 h-96 overflow-hidden">
        {lines.map((line, index) => (
          <div key={index} className="animate-fade-in">
            {line && line.includes("Critical vulnerability") && (
              <span className="text-yellow-400">{line}</span>
            )}
            {line && line.includes("Exploit success") && (
              <span className="text-red-400">{line}</span>
            )}
            {line && line.includes("Generating remediation") && (
              <span className="text-blue-400">{line}</span>
            )}
            {line && line.includes("Vulnerability report complete") && (
              <span className="text-green-400">{line}</span>
            )}
            {line && (line.startsWith("1.") || line.startsWith("2.") || line.startsWith("3.")) && (
              <span className="text-cyan-400">{line}</span>
            )}
            {line && line.startsWith("$") && (
              <span className="text-green-400">{line}</span>
            )}
            {line && line.length > 0 && 
             !line.includes("Critical") && 
             !line.includes("Exploit") && 
             !line.includes("Generating") && 
             !line.includes("complete") && 
             !line.startsWith("1.") && 
             !line.startsWith("2.") && 
             !line.startsWith("3.") && 
             !line.startsWith("$") && (
              <span className="text-gray-300">{line}</span>
            )}
            {(!line || line.length === 0) && (
              <span>&nbsp;</span>
            )}
          </div>
        ))}
        <div className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1"></div>
      </div>
    </div>
  );
}; 