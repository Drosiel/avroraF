import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../redux/store";
import { fetchApproveUser } from "../../../services/notifications/notifications";
import Button from "../../../shared/ui/button";
import ConfirmForm from "../../../widgets/forms/conformForm";
import Modal from "../../../widgets/modal/modal";

const NotificationProfile: FC = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.data);

  const [open, setOpen] = useState<boolean | string>(false);
  // const [value, setValue] = useState(false);

  const notificationConfirm = (value: boolean) => {
    setOpen(false);
    if (open) {
      fetchApproveUser(open, value);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex">
        Уведомления:
        {user?.notifications.length === 0 && (
          <div className="ml-4">
            <span>Уведомлений нет</span>
          </div>
        )}
      </div>

      {user?.notifications.length > 0 && (
        <div className="flex flex-col gap-2">
          {user?.notifications?.map((item) => (
            <div className="flex items-center pl-2 bg-amber-300">
              <div className="flex gap-2">
                <span
                  className="cursor-pointer"
                  onClick={() => navigate(`/${item.initiator.id}`)}
                >
                  {item.initiator.name}
                </span>
                <span>{item.text}</span>
                <span
                  className="cursor-pointer"
                  onClick={() => navigate(`/team/${item.team.id}`)}
                >
                  {item.team.name}
                </span>
              </div>
              <div className="ml-auto">
                <Button
                  text="Рассмотреть заяву"
                  onClick={() => setOpen(item.id)}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {open && (
        <Modal textHeader="Подтверждение" open={open} onClose={setOpen}>
          <ConfirmForm onClick={notificationConfirm} />
        </Modal>
      )}
    </div>
  );
};

export default NotificationProfile;
