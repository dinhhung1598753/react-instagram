import { User } from "../../common/models";
import { SuggestedItem } from "../suggested_item";

export const SuggestionList = ({ suggestions }: { suggestions: User[] }) => {
  return (
    <div className="mx-4">
      <div className="flex justify-between ">
        <p className="font-semibold text-secondary-text text-sm">
          Suggested for you
        </p>
        <div className="cursor-pointer text-xs font-semibold hover:opacity-50">
          See All
        </div>
      </div>
      <div>
        <div className="py-2">
          {suggestions &&
            suggestions.map((item) => (
              <SuggestedItem item={item} key={item.id} />
            ))}
        </div>
      </div>
    </div>
  );
};
