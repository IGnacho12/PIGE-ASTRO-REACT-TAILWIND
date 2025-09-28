import React from "react";

export default function Presentation() {
  return (
    <main className="mt-16 flex flex-col justify-center items-center text-gray-900 px-6 bg-transparent">
      {/* Hero */}
      <header className="max-w-2xl text-center space-y-6">
        <Tooltip content="Plataforma integral de Gestión Escolar" delay={120}>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            ¡Bienvenido a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              PIGE
            </span>
            !
          </h1>
        </Tooltip>

        <p className="text-lg text-gray-600">
          Una plataforma diseñada para facilitar la gestión escolar de docentes,
          alumnos y directivos de la
          <span className="font-semibold text-gray-800"> EPETPn10</span>.
        </p>
      </header>

      {/* CTA */}
      <section className="mt-12 flex gap-4"></section>
    </main>
  );
}
