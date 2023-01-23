import { Form, Formik } from "formik";
import { FC, useState } from "react";
import InputComponent from "../../../../shared/ui/input";
import Button from "../../../../shared/ui/button";
import { fetchAddUserInTeam } from "../../../../services/team/team";
import { IUser } from "../../lib/constant";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import Select from "../../../../shared/ui/select";

interface IAddUserInTeamForm {
  user: IUser;
  userId: string | undefined;
}

const AddUserInTeamForm: FC<IAddUserInTeamForm> = ({ user, userId }) => {
  const creator = useSelector((state: RootState) => state.user.data);
  const [team, setTeam] = useState<any>(null);

  const handleSubmit = (values: any) => {
    console.log(team.target.value);

    fetchAddUserInTeam(user, creator.teamsCreator[team.target.value].id);
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
                options={creator.teamsCreator}
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

export default AddUserInTeamForm;
