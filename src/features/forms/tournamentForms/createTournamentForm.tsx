import { Form, Formik } from "formik";
import { FC } from "react";
import InputComponent from "../../../components/input/input";
import {
  fetchCreateTournament,
  ITournament,
} from "../../../services/tournament/tournament";

const CreateTournamentForm: FC = () => {
  const handleSubmit = (values: ITournament) => {
    fetchCreateTournament(values);
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          dateTournament: new Date(),
          countTeam: 0,
          prize: 0,
          typeTournament: "",
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
              <InputComponent
                label="Дата проведения"
                name="dateTournament"
                type="date"
                value={values.dateTournament}
                handleChange={handleChange}
              />
              <InputComponent
                label="Количество команд"
                name="countTeam"
                type="number"
                value={values.countTeam}
                handleChange={handleChange}
              />
              <InputComponent
                label="Призовые"
                name="prize"
                type="number"
                value={values.prize}
                handleChange={handleChange}
              />
              <InputComponent
                label="Тип турнира"
                name="typeTournament"
                type="text"
                value={values.typeTournament}
                handleChange={handleChange}
              />

              <button type="submit">Создать турнир</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateTournamentForm;
