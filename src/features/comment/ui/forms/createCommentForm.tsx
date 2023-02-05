import { Form, Formik } from "formik";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../../../redux/store";

import Button from "../../../../shared/ui/button";
import { fetchCreateComment } from "../../../../services/comment/comment";
import { ITournament } from "../../../tournament/lib/constant";

const CreateCommentForm: FC<{
  tournamentItem: ITournament;
  setTournamentItem: any;
}> = ({ tournamentItem, setTournamentItem }) => {
  const user = useSelector((state: RootState) => state.user.data);

  const handleSubmit = async (values: any) => {
    if (!values.text) {
      return;
    }

    values.userId = user.id;
    values.tournamentId = tournamentItem.id;
    fetchCreateComment(values).then((data: any) =>
      setTournamentItem({
        ...tournamentItem,
        comments: [...tournamentItem.comments, { ...data }],
      })
    );
  };

  useEffect(() => {}, [user.id]);

  return (
    <Formik
      initialValues={{
        text: "",
        userId: "",
        tournamentId: "",
      }}
      onSubmit={(values, actions) => {
        handleSubmit(values).then(() => {
          actions.setSubmitting(false);
          actions.resetForm({
            values: {
              text: "",
              userId: "",
              tournamentId: "",
            },
          });
        });
      }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ values, handleChange }) => (
        <Form noValidate>
          <div className="flex flex-col">
            <textarea
              className="border-amber-700"
              value={values.text}
              name="text"
              id=""
              cols={30}
              rows={10}
              onChange={handleChange}
            ></textarea>

            <Button text="Отправить" type="submit" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateCommentForm;
