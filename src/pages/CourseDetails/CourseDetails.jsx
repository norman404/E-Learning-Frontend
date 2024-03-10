// src/pages/CourseDetails/CourseDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCourseById, updateCourse } from '../../utils/api';
import LessonList from './LessonList';

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const courseData = await getCourseById(courseId);
        setCourse(courseData);
        setTitle(courseData.title);
        setDescription(courseData.description);
      } catch (error) {
        console.error('Error al cargar los detalles del curso:', error);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  const handleUpdateCourse = async () => {
    try {
      const updatedCourse = await updateCourse(courseId, { title, description });
      setCourse(updatedCourse);
      setEditMode(false);
    } catch (error) {
      console.error('Error al actualizar el curso:', error);
    }
  };

  if (!course) return <div className="text-center mt-10">Cargando...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5 shadow-lg rounded-lg">
      {editMode ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Título del Curso"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Descripción"
            rows="4"
          ></textarea>
          <div className="flex justify-between mt-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              onClick={handleUpdateCourse}
            >
              Guardar Cambios
            </button>
            <button
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
              onClick={() => setEditMode(false)}
            >
              Cancelar
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
          <p className="mb-4">{course.description}</p>
          <button
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
            onClick={() => setEditMode(true)}
          >
            Editar Curso
          </button>
          <button
            className="ml-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            onClick={() => navigate('/')}
          >
            Volver al Dashboard
          </button>
        </>
      )}

      <LessonList courseId={courseId} lessons={course.lessons} />
    </div>
  );
};

export default CourseDetails;
