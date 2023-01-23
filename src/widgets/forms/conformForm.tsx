import { FC } from "react";
import Button from "../../shared/ui/button";

const ConfirmForm: FC<any> = ({ onClick }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button typeButton="ok" onClick={() => onClick(true)} text="Принять" />

      <Button
        typeButton="cancel"
        onClick={() => onClick(false)}
        text="Отменить"
      />
    </div>
  );
};

export default ConfirmForm;
