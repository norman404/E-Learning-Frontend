// src/pages/Dashboard/CourseCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course, onDelete }) => {
  const navigate = useNavigate();

  const handleCourseClick = () => {
    navigate(`/courses/${course._id}`);
  };
  return (
    <div className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
      <h2 className="text-xl font-bold text-blue-600 mb-2">{course.title}</h2>
      <p className="text-gray-700 mb-4">{course.description}</p>
      <div className="flex justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleCourseClick}>
          Detalles
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          Editar
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={() => onDelete(course._id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
