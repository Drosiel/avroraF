import { Widget } from "@uploadcare/react-widget";
import { FC } from "react";

const ImageLoader: FC<any> = ({ onChange, value }: any) => {
  const handlechange = (e: any) => {
    onChange(e);
  };

  const alterLocale = () => ({
    buttons: {
      remove: "Очистить",
      choose: {
        images: {
          one: "Выберите изображения",
          other: "Upload your documents ",
        },
      },
    },
  });

  return (
    <div className="w-full">
      <Widget
        imagesOnly
        localeTranslations={alterLocale()}
        key={value}
        value={value}
        onChange={(e) => handlechange(e)}
        publicKey={process.env.REACT_APP_UPLOADCARE_KEY || ""}
      />
    </div>
  );
};

export default ImageLoader;
