import { Form, Formik } from "formik";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import InputComponent from "../../../components/input/input";
import { RootState } from "../../../redux/store";
import { fetchCreateTeam, ITeam } from "../../../services/team/team";

const CreateTeamForm: FC = () => {
  const user = useSelector((state: RootState) => state.user.data);

  const handleSubmit = (values: ITeam) => {
    values.creatorId = user.id;
    fetchCreateTeam(values);
  };

  useEffect(() => {}, [user.id]);

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          creatorId: user.id,
        }}
        onSubmit={(values: any) => {
          handleSubmit(values);
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ values, handleChange }) => (
          <Form noValidate>
            <div className="flex flex-col">
              <InputComponent
                label="Название"
                name="name"
                type="text"
                value={values.name}
                handleChange={handleChange}
              />

              <button type="submit">Создать команду</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateTeamForm;
