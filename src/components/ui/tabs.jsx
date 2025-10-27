import React from "react";
import { cn } from './utils';

// Contenedor principal de Tabs
export function Tabs({ children, className }) {
  return <div className={cn("flex flex-col gap-2", className)}>{children}</div>;
}

// Contenedor de los triggers (botones)
export function TabsList({ children, className }) {
  return (
    <div className={cn("flex bg-gray-100 rounded-xl p-[3px] gap-1 w-fit", className)}>
      {children}
    </div>
  );
}

// Botón individual de cada pestaña
export function TabsTrigger({ children, isActive, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-xl text-sm font-medium transition-colors",
        isActive ? "bg-white shadow-md" : "bg-transparent text-gray-700 hover:bg-gray-200",
        className
      )}
    >
      {children}
    </button>
  );
}

// Contenido de cada pestaña
export function TabsContent({ children, className }) {
  return <div className={cn("p-4 transition-all", className)}>{children}</div>;
}
