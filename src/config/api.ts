/**
 * API Configuration
 * แก้ไขให้ชี้มาที่ localhost และ Port 8000 ของเครื่องตัวเอง
 */
export const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

/**
 * Get full API endpoint URL
 */
export const getApiUrl = (endpoint: string): string => {
    return `${API_URL}${endpoint}`;
};