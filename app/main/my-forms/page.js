import AddButton from "./components/add-button";
import FormList from "./components/form-list";

export default function MyForms() {
  return <div className="bg-[#F2F2F2] w-full h-screen p-6">
    <FormList />
    <AddButton />
  </div>
}