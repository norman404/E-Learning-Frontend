// src/utils/api.js

const API_BASE_URL = 'http://localhost:3000/api';

export const createCourse = async (courseData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/courses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(courseData),
    });

    if (!response.ok) {
      throw new Error('Algo salió mal al crear el curso');
    }

    return await response.json();
  } catch (error) {
    console.error('Error al crear el curso:', error);
    throw error; 
  }
};

export const getCourses = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/courses`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Algo salió mal al obtener los cursos');
    }

    return await response.json();
  } catch (error) {
    console.error('Error al obtener los cursos:', error);
    throw error;
  }
};

export const deleteCourse = async (courseId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/courses/${courseId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Algo salió mal al intentar eliminar el curso con ID ${courseId}`);
    }

    return await true;
  } catch (error) {
    console.error(`Error al eliminar el curso con ID ${courseId}:`, error);
    throw error;
  }
};

export const getCourseById = async (courseId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/courses/${courseId}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Algo salió mal al obtener el curso con ID: ${courseId}`);
    }

    const courseData = await response.json();
    return courseData;
  } catch (error) {
    console.error('Error al obtener el curso:', error);
    throw error;
  }
};

export const updateCourse = async (courseId, courseData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/courses/${courseId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(courseData),
    });

    if (!response.ok) {
      throw new Error(`Algo salió mal al actualizar el curso con ID: ${courseId}`);
    }

    const updatedCourse = await response.json();
    return updatedCourse;
  } catch (error) {
    console.error('Error al actualizar el curso:', error);
    throw error;
  }
};
