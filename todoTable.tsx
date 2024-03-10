import { TodoType } from "./types/todo";
import { FC } from "react";

//omitは指定したプロパティを除外する
//pickは指定したプロパティを抽出する
export const TodoTableData: FC<
  Pick<TodoType, "title" | "userId" | "completed">
> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完了]" : "[未]";
  return (
    <tr>
      <td>{title}</td>
      <td>{userId}</td>
    </tr>
  );
};

export const TodoTableHeader: FC = () => {
  return (
    <tr>
      <td>title</td>
      <td>userId</td>
    </tr>
  );
};
