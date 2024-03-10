import { TodoType } from "./types/todo";
import { FC } from "react";

//omitは指定したプロパティを除外する
//pickは指定したプロパティを抽出する
export const Todo: FC<Pick<TodoType, "title" | "userId" | "completed">> = (
  props
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完了]" : "[未]";
  return <p>{`${completeMark}${title}userid:${userId}`}</p>;
};
