import {  toast } from 'react-toastify';

export const alertSuccess = (msg = '') => toast.success(msg, { autoClose: 1500, })
export const alertWarning = (msg = '') => toast.warn(msg, { autoClose: 1500, })
export const alertError = (msg = '') => toast.error(msg, { autoClose: 1500, })
