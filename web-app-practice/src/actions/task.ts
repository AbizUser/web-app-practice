'use server';

import { Task, TaskModel } from "@/models/tasks";
import { connectDb } from "@/utils/database";
import { redirect } from "next/navigation";

export interface FormState {
  error: string;
}

export const createTask = async (state: FormState, formData: FormData) => {
  const newTask = {
    //より厳格なアプリケーションの作成をする場合にはここにバリデーションロジックを追加する
    title: formData.get('title') as string,
    description: formData.get('title') as string,
    dueDate: formData.get('title') as string,
    isCompleted: false,
  }

  try {
    await connectDb()
    await TaskModel.create(newTask)

  } catch (error) {
      state.error = "タスクの作成に失敗しました";
      return state
  }
  //トライキャッチの外側で定義しないと使用できない。
  redirect('/')
}