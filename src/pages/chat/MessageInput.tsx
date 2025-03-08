import { Send,  } from 'lucide-react';
import React from 'react';

const MessageInput: React.FC = () => (
  <div className="flex items-center p-4 border-t border-gray-200">
    <input
      className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder="Enter Message..."
      type="text"
    />
    <div className="flex items-center space-x-2 ml-4">
     
      <button className="bg-primary text-white p-2 rounded-full">
        <Send size={20} />
      </button>
    </div>
  </div>
);

export default MessageInput;