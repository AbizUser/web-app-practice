'use client'
import { useFormState, useFormStatus } from 'react-dom';

import { createTask } from '@/actions/sampleActions'

const ServerActionsPage = () => {
  const taskId = 1;
  //バインドでフォーム内に存在しない変数を渡して表示する。
  const createTaskWithTaskId = createTask.bind(null, taskId);
  const initialState = { error: ''}
  const [state, formAction] = useFormState(createTaskWithTaskId, initialState)
  
  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return(
      <button 
        type="submit" 
        className="bg-gray-400 ml-2 px-2 disabled:bg-gray-300 " 
        disabled={pending} 
        >
        送信
      </button>
    );
    
  }
  
  return (
    <div>
      {/* サーバーアクションで定義した値をクライアント側で利用できるようにしている */}
      <form action={formAction}>
        <input type="text" id="name" name="name" className="bg-gray-200"/>
          <SubmitButton />
        <div>{state.error}</div>
      </form>
    </div>
  );
};

export default ServerActionsPage;
