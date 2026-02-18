import { useEffect } from 'react';

const N8NChatWidget = () => {
  useEffect(() => {
    // Load n8n chat stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    document.head.appendChild(link);

    // Load and init the n8n chat widget
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'https://kanak32.app.n8n.cloud/webhook/2d025691-529d-464a-8b83-de2f10d5faf0/chat',
        initialMessages: [
          'Hello! I am JARVIS, your personal AI assistant.',
          'How can I assist you today?'
        ],
        i18n: {
          en: {
            title: 'JARVIS',
            subtitle: 'Personal AI Agent — Always at your service.',
            footer: '',
            getStarted: 'New Conversation',
            inputPlaceholder: 'Ask JARVIS anything...',
          },
        },
      });
    `;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default N8NChatWidget;
