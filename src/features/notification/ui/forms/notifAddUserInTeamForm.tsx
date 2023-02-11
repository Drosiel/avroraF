import { Form, Formik } from "formik";
import { FC, useState } from "react";
import Button from "../../../../shared/ui/button";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import Select from "../../../../shared/ui/select";
import { IUser } from "../../../user/lib/constant";
import { fetchNotificationUser } from "../../../../services/notifications/notifications";

interface INotificationAddUserInTeamForm {
  user: IUser;
}

const NotificationAddUserInTeamForm: FC<INotificationAddUserInTeamForm> = ({
  user,
}) => {
  const initiator = useSelector((state: RootState) => state.user.data);
  const [team, setTeam] = useState<any>({ target: { value: 0 } });

  const typeNotification = "addTeam";

  const handleSubmit = (values: any) => {
    fetchNotificationUser(
      user.id,
      initiator.id,
      typeNotification,
      initiator?.teamsCreator[team.target.value].id
    );
  };

  return (
    <Formik
      initialValues={{
        name: user?.name,
      }}
      onSubmit={(values: any) => {
        handleSubmit(values);
      }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ values, handleChange }) => (
        <Form noValidate>
          <div className="flex flex-col gap-4">
            <div>
              имя игрока: <span className="text-2xl">{user.name}</span>
            </div>

            <div>
              <span>пригласить в:</span>

              <Select
                name="team"
                options={initiator.teamsCreator}
                onChange={setTeam}
              />
            </div>

            <Button text="Пригласить" type="submit" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NotificationAddUserInTeamForm;
