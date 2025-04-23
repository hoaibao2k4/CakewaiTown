// components/AuthCallback.js
"use client"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { googleLoginUser } from '~/redux/apiRequest';

export const GoogleCallBack = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token'); // JWT token
    const refreshToken = params.get('refreshToken');
    if (token && refreshToken) {

      googleLoginUser(dispatch, refreshToken, token);

      router.replace('/')
    }
  }, [dispatch, router]);
  return null
};
