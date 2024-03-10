// src/pages/Dashboard/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import Modal from '../../components/Modal';
import { createCourse, getCourses, deleteCourse } from '../../utils/api';

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({ title: '', description: '' });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesData = await getCourses();
        setCourses(coursesData);
      } catch (error) {
        console.error('Error al cargar los cursos:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleCreateCourse = async () => {
    try {
      const savedCourse = await createCourse(newCourse); 
      setCourses([...courses, savedCourse]);
      setNewCourse({ title: '', description: '' });
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error al guardar el curso:', error);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      await deleteCourse(courseId);
      setCourses(courses.filter(course => course._id !== courseId));
    } catch (error) {
      console.error(`Error al eliminar el curso con ID ${courseId}:`, error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Dashboard de Cursos</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Crear Nuevo Curso
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-semibold mb-4">Crear Nuevo Curso</h2>
        <input
          type="text"
          placeholder="Título"
          className="border p-2 rounded w-full mb-4"
          value={newCourse.title}
          onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
        />
        <textarea
          placeholder="Descripción"
          className="border p-2 rounded w-full mb-4"
          value={newCourse.description}
          onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
        />
        <button
          onClick={handleCreateCourse}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Guardar Curso
        </button>
      </Modal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} onDelete={handleDeleteCourse} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
