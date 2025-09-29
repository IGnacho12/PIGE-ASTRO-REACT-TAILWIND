import React from "react";
import Hello from "./Hello.jsx";
import { Table } from "./Table.jsx";
import CircularProgress from "./CircularProgress.jsx";
import { ShowMore } from "./ShowMore.tsx";

const student = {
  name: "Castillo Ignacio",
  subjects: [
    {
      materia: "Matemática",
      promedio: "8.5",
      nota1: "9",
      nota2: "7",
      nota3: "9",
      notaFinal: "8",
    },
    {
      materia: "Lengua",
      promedio: "7.3",
      nota1: "8",
      nota2: "7",
      nota3: "7",
      notaFinal: "7",
    },
    {
      materia: "Historia",
      promedio: "6.8",
      nota1: "6",
      nota2: "7",
      nota3: "7",
      notaFinal: "7",
    },
    {
      materia: "Inglés",
      promedio: "9.2",
      nota1: "9",
      nota2: "10",
      nota3: "9",
      notaFinal: "9",
    },
  ],
};

export default function Index() {
  return (
    <main className="w-3/4 mx-auto pb-12">
      <Hello name={student.name} />

      {/* Notas */}
      <section>
        <span className="text-slate-500 italic">Notas!</span>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head>Materia</Table.Head>
              <Table.Head>Promedio Actual</Table.Head>
              <Table.Head>Nota 1</Table.Head>
              <Table.Head>Nota 2</Table.Head>
              <Table.Head>Nota 3</Table.Head>
              <Table.Head>Nota Final</Table.Head>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {student.subjects.map((subj, index) => (
              <Table.Row key={index} striped={index % 2 === 0}>
                <Table.Cell>{subj.materia}</Table.Cell>
                <Table.Cell>{subj.promedio}</Table.Cell>
                <Table.Cell>{subj.nota1}</Table.Cell>
                <Table.Cell>{subj.nota2}</Table.Cell>
                <Table.Cell>{subj.nota3}</Table.Cell>
                <Table.Cell>{subj.notaFinal}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <ShowMore>Chupami muñano</ShowMore>
      </section>

      <section className="w-full h-full">
        <CircularProgress percentage={50} label="Matemática" />
        <CircularProgress percentage={82} label="Lengua" />
        <CircularProgress percentage={50.9} label="Lengua" />
      </section>
      <section></section>
    </main>
  );
}
