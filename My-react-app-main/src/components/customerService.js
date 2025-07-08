import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Replace with your backend URL

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const customerService = {
  getAllCustomers: async () => {
    try {
      const response = await api.get('/customers');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getCustomerById: async (customerId) => {
    try {
      const response = await api.get(`/customers/${customerId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  updateCustomer: async (customerId, customerData) => {
    try {
      const response = await api.put(`/customers/${customerId}`, customerData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  deleteCustomer: async (customerId) => {
    try {
      const response = await api.delete(`/customers/${customerId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  // Add more functions as needed for creating customers, etc.
};
