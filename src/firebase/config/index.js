const conf = {
  api_key: import.meta.env.VITE_API_KEY,
  auth_domin: import.meta.env.VITE_AUTH_DOMAIN,
  project_id: import.meta.env.VITE_PROJECT_ID,
  storage_bucket: import.meta.env.VITE_STORAGE_BUCKET,
  message_sender_id: import.meta.env.VITE_MESSAGING_SENDER_ID,
  app_id: import.meta.env.VITE_APP_ID,
};

export{conf}
