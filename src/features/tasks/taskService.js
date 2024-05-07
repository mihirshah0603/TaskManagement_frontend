import axios from 'axios';

const API_URL = '/api/tasks/';

const createTask = async (taskData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    try {
        const response = await axios.post(API_URL, taskData, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getTasks = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    try {
        const response = await axios.get(API_URL, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const deleteTask = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    try {
        const response = await axios.delete(`${API_URL}${id}`, config); // Corrected the URL concatenation
        return response.data;
    } catch (error) {
        throw error;
    }
};

const taskService = { createTask, getTasks, deleteTask };

export default taskService;
