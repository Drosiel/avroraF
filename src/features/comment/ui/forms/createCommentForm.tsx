import { Form, Formik } from "formik";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../../../redux/store";

import Button from "../../../../shared/ui/button";
import { fetchCreateComment } from "../../../../services/comment/comment";

const CreateCommentForm: FC<{ tournamentId: string }> = ({ tournamentId }) => {
  const user = useSelector((state: RootState) => state.user.data);

  const handleSubmit = (values: any) => {
    values.userId = user.id;
    values.tournamentId = tournamentId;
    fetchCreateComment(values);
  };

  useEffect(() => {}, [user.id]);

  return (
    <Formik
      initialValues={{
        text: "",
        userId: "",
        tournamentId: "",
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
