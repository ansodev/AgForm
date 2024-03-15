import Card from "../../components/Card";
import ODSOption from "../../components/ODSOption";
import useFormDataStore from "../../store/form-data.store";
const odsList = [
  {
    id: 'ods1',
    icon: '/ods/ODS1.svg'
  },
  {
    id: 'ods2',
    icon: '/ods/ODS2.svg'
  },
  {
    id: 'ods3',
    icon: '/ods/ODS3.svg'
  },
  {
    id: 'ods4',
    icon: '/ods/ODS4.svg'
  },
  {
    id: 'ods5',
    icon: '/ods/ODS5.svg'
  },
  {
    id: 'ods6',
    icon: '/ods/ODS6.svg'
  },
  {
    id: 'ods7',
    icon: '/ods/ODS7.svg'
  },
  {
    id: 'ods8',
    icon: '/ods/ODS8.svg'
  },
  {
    id: 'ods9',
    icon: '/ods/ODS9.svg'
  },
  {
    id: 'ods10',
    icon: '/ods/ODS10.svg'
  },
  {
    id: 'ods11',
    icon: '/ods/ODS11.svg'
  },
  {
    id: 'ods12',
    icon: '/ods/ODS12.svg'
  },
  {
    id: 'ods13',
    icon: '/ods/ODS13.svg'
  },
  {
    id: 'ods14',
    icon: '/ods/ODS14.svg'
  },
  {
    id: 'ods15',
    icon: '/ods/ODS15.svg'
  },
  {
    id: 'ods16',
    icon: '/ods/ODS16.svg'
  },
  {
    id: 'ods17',
    icon: '/ods/ODS17.svg'
  }
]

export default function ODS({ onPriorClick }) {
  const ods = useFormDataStore((state) => state.ods);
  const addODS = useFormDataStore((state) => state.addODS);
  const removeODS = useFormDataStore((state) => state.removeODS);

  function handleODSClick(id) {
    if (ods.indexOf(id) >= 0) {
      removeODS(id);
    } else {
      addODS(id);
    }
  }

  return (
    <Card onPriorClick={() => onPriorClick("ods")}>
      <div className="w-full flex flex-col items-center pt-10">
        <h1 className="text-2xl font-bold">Escolha as ODS desejadas:</h1>
        <div className="mt-10 flex flex-wrap gap-1 px-28">
            {odsList.map((odsItem) => (
              <ODSOption
                key={`ods-${odsItem.id}`}
                icon={odsItem.icon}
                selected={ods.indexOf(odsItem.id) >= 0}
                onClick={() => handleODSClick(odsItem.id)}
                // disabled={!enabledGoal}
              />
            ))}
          </div>
      </div>
    </Card>
  );
}
