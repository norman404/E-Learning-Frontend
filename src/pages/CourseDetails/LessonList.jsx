// src/pages/CourseDetails/LessonList.jsx
import React from 'react';
// Importa los componentes o funciones necesarios para añadir, editar y eliminar lecciones

const LessonList = ({ courseId, lessons }) => {
  // Aquí podrías definir las funciones para manejar la adición, edición y eliminación de lecciones.
  // Por ejemplo: const handleAddLesson = () => { ... }

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Lecciones</h2>
      <div>
        {lessons.length > 0 ? (
          lessons.map((lesson) => (
            <div key={lesson._id} className="mb-4 p-4 border rounded-lg shadow">
              <h3 className="text-xl font-semibold">{lesson.title}</h3>
              <p>{lesson.content}</p>
              {/* Botones para editar y eliminar lección */}
              <div className="flex justify-end mt-2">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2">
                  Editar
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                  Eliminar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay lecciones agregadas a este curso.</p>
        )}
      </div>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">
        Añadir Lección
      </button>
      {/* Aquí podrías incluir un modal o un formulario para la adición o edición de lecciones */}
    </div>
  );
};

export default LessonList;
