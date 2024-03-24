import Card from "../../components/Card";
import IconOption from "../../components/IconOption";
import useFormDataStore from "../../store/form-data.store";

const goodPractices = [
  {
    id: "soloHandling",
    name: "Manejo de solo",
    icon: "/good-practices/solo-handling.svg",
  },
  {
    id: "pestHandling",
    name: "Manejo de pragas",
    icon: "/good-practices/pest-handling.svg",
  },
  {
    id: "agrochemicals",
    name: "Uso seguro de agroquímicos",
    icon: "/good-practices/safe-use-of-agrochemicals.svg",
  },
  {
    id: "waterManagement",
    name: "Gestão de água",
    icon: "/good-practices/water-management.svg",
  },
  {
    id: "biodiversity",
    name: "Gestão de biodiversidade",
    icon: "/good-practices/biodiversity-management.svg",
  },
];

export default function GoodPractices({onNextClick, onPriorClick}) {
  const practices = useFormDataStore((state) => state.practices);
  const addPractices = useFormDataStore((state) => state.addPractices);
  const removePractices = useFormDataStore((state) => state.removePractices);
  
  function handleNextClick() {
    if (onNextClick) {
      onNextClick();
    }
  }

  function handlePriorClick(id) {
    if (onPriorClick) {
      onPriorClick(id)
    }
  }

  function handlePracticesClick(practice) {
    if (practices.findIndex(item => item.id === practice.id) >= 0) {
      removePractices(practice);
    } else {
      addPractices(practice);
    }
  }

  return (
    <Card
      onPriorClick={() => handlePriorClick("practices")}
      onNextClick={handleNextClick}
      nextActive={practices.length > 0}
    >
      <div className="w-full flex flex-col items-center pt-10">
        <h1 className="text-2xl font-bold">
          Quais são as boa práticas avaliadas?
        </h1>
        <div className="mt-10 flex flex-wrap justify-center gap-y-10">
          {goodPractices.map((practicesItem) => (
            <div className="w-1/3" key={`practices-${practicesItem.name}`}>
              <IconOption
                icon={practicesItem.icon}
                name={practicesItem.name}
                description={practicesItem.description}
                selected={practices.findIndex(item => item.id === practicesItem.id) >= 0}
                onClick={() => handlePracticesClick(practicesItem)}
              />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
