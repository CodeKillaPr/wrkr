import axios from "axios";

// Configuración base de Axios
const api = axios.create({
  baseURL: "http://127.0.0.1:5000", // Reemplaza con la URL de tu backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Funciones para llamar a User endpoints
const registerUser = async (userData) => {
  try {
    const response = await api.post("/register", userData);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.description || "Error registering user"
    );
  }
};

const loginUser = async (credentials) => {
  try {
    const response = await api.post("/login", credentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.description || "Error logging in");
  }
};

const getProtectedData = async (token) => {
  try {
    const response = await api.get("/protected", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.description || "Error fetching protected data"
    );
  }
};

const updateUser = async (token, updateData) => {
  try {
    const response = await api.put("/user/update", updateData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.description || "Error updating user");
  }
};

export { registerUser, loginUser, getProtectedData, updateUser };

// Funciones para llamar a Jobs endpoints

// Función para crear un trabajo (Job)
const createJob = async (jobData, token) => {
  try {
    const response = await api.post("/jobs", jobData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.description || "Error creating job");
  }
};

// Función para obtener todos los trabajos
const getJobs = async () => {
  try {
    const response = await api.get("/jobs");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.description || "Error fetching jobs");
  }
};

// Función para obtener un trabajo por ID
const getJobById = async (jobId, token) => {
  try {
    const response = await api.get(`/jobs/${jobId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.description || "Error fetching job by ID"
    );
  }
};

// Función para obtener el conteo de trabajos
const getJobCount = async () => {
  try {
    const response = await api.get("/job_count");
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.description || "Error fetching job count"
    );
  }
};

export { createJob, getJobs, getJobById, getJobCount };

// Función para crear una reserva (Booking)
const createBooking = async (bookingData, token) => {
  try {
    const response = await api.post("/booking", bookingData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.description || "Error creating booking"
    );
  }
};

export { createBooking };

const createResume = async (resumeData, token) => {
  try {
    const response = await api.post("/resume", resumeData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Server response:", error.response?.data);
    throw new Error(
      error.response?.data?.description || "Error creating resume"
    );
  }
};

export { createResume };

const getResumes = async () => {
  try {
    const response = await api.get(`/resume`);
    return response.data; // Asegúrate de que esto devuelva la estructura correcta
  } catch (error) {
    throw new Error(
      error.response?.data?.description || "Error fetching resumes"
    );
  }
};

export { getResumes };
