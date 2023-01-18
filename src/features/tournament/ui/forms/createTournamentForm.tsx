import { Form, Formik } from "formik";
import { FC } from "react";
import InputComponent from "../../../../shared/ui/input";
import { fetchCreateTournament } from "../../../../services/tournament/tournament";
import { ITournament } from "../../lib/constant";
import Button from "../../../../shared/ui/button";

const CreateTournamentForm: FC = () => {
  const handleSubmit = (values: ITournament) => {
    fetchCreateTournament(values);
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          maxTeam: 0,
          prize: 0,
          dateTournamentStart: new Date(),
          dateTournamentEnd: new Date(),
          typeTournament: "5x5",
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
                label="Дата начала"
                name="dateTournamentStart"
                type="date"
                value={values.dateTournamentStart}
                handleChange={handleChange}
              />
              <InputComponent
                label="Дата конца"
                name="dateTournamentEnd"
                type="date"
                value={values.dateTournamentEnd}
                handleChange={handleChange}
              />
              <InputComponent
                label="Количество команд"
                name="maxTeam"
                type="number"
                value={values.maxTeam}
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

              <Button text="Создать турнир" type="submit" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateTournamentForm;
