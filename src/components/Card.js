import { InformationCircleIcon } from "@heroicons/react/solid";

const Card = ({ title, content, icon: Icon }) => {
  return (
    <div className="bg-floralwhite border border-teal-500 rounded shadow my-4">
      <div className="flex items-center p-4 bg-teal-700 text-floralwhite rounded-t">
        {Icon && <Icon className="h-6 w-6 text-floralwhite mr-2" />}
        <h2 className="text-lg text-white font-semibold">{title}</h2>
      </div>
      <div className="p-4">
        <p className="text-teal-900">{content}</p>
      </div>
    </div>
  );
};

export default Card;
