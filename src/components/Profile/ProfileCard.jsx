import React from "react";
import "./ProfileCard.css";

export default function ProfileCard({
  profileType,
  name,
  dateOfBirth,
  courseAndDegree,
  age,
  profileImage,
}) {
  return (
    <main className="bg-[var(--background-secondary)] hover:bg-[var(--hover-background)] m-4 border border-[var(--border)] hover:border-[var(--border-active)] rounded-xl shadow-sm hover:shadow-md transition-all duration-100 p-4">
      <h5 className="font-semibold mb-2">{profileType}</h5>

      {/* Profile Info */}
      <article className="flex flex-row justify-between items-start">
        <img
          className="max-w-1/4 p-2 rounded-xl"
          src="defaultProfilePic.avif"
          alt={`Foto de perfil de ${name}`}
          onError={(e) => {

          }}
        />

        <section className="ml-4 w-3/4">
          <dl className="grid grid-cols-2 gap-6">
            <div>
              <dt className="font-semibold">Nombre / Name</dt>
              <dd>{name}</dd>
            </div>

            <div>
              <dt className="font-semibold">
                Fecha de nacimiento / Date of birth
              </dt>
              <dd>{dateOfBirth}</dd>
            </div>

            <div>
              <dt className="font-semibold">
                Curso y división / Course and degree
              </dt>
              <dd>{courseAndDegree}</dd>
            </div>

            <div>
              <dt className="font-semibold">Edad / Age</dt>
              <dd>{age}</dd>
            </div>
          </dl>
        </section>
      </article>
    </main>
  );
}
