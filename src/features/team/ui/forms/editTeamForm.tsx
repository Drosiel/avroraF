import { Form, Formik } from "formik";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputComponent from "../../../../shared/ui/input";
import { RootState } from "../../../../redux/store";
import { fetchTeamEdit } from "../../../../services/team/team";
import { ITeam } from "../../lib/constant";
import Button from "../../../../shared/ui/button";
import { fetchRemoveImage } from "../../../../services/uploadcare/uploadcare";
import ImageLoader from "../../../../shared/ui/imageLoader";
import { addTeamData } from "../../../../redux/slices/teams/teamSlice";

const EditTeamForm: FC<{ team: ITeam }> = ({ team }) => {
  const user = useSelector((state: RootState) => state.user.data);

  const dispatch = useDispatch();

  const [logoId, setLogoId] = useState(null);
  const [value, setValue] = useState<any>("");

  const handleSubmit = (values: {
    name: string;
    id: string | null;
    logo: string | null;
  }) => {
    if (user.id !== team.creator.id) {
      console.log(user);
      console.log(team);
      return null;
    }

    values.id = team.id;
    values.logo = logoId ? logoId : team.logo;

    if (logoId !== team.logo && team.logo) {
      fetchRemoveImage(team.logo);
    }

    fetchTeamEdit(values).then((data) => dispatch(addTeamData(data)));
    setValue(null);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: team.name,
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
            <InputComponent
              label="Название"
              name="name"
              type="text"
              value={values.name}
              handleChange={handleChange}
            />

            <ImageLoader
              onChange={(e: any) => setLogoId(e.uuid)}
              value={value}
            />

            <Button text="Принять" type="submit" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditTeamForm;
