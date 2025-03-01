interface RootState {
  selectedDate: string;
  selectedFood: string;
  selectedDrink: string;
}

export const dateInformation = (
  key: "selectedDate" | "selectedFood" | "selectedDrink",
  value: string
) => {
  const oldDataJson = localStorage.getItem("dateInformation");

  if (!oldDataJson) {
    const dateInformation: RootState = {
      selectedDate: "",
      selectedFood: "",
      selectedDrink: "",
    };

    dateInformation[key] = value;
    localStorage.setItem("dateInformation", JSON.stringify(dateInformation));
    return;
  }

  const oldData = JSON.parse(oldDataJson);
  oldData[key] = value;
  localStorage.setItem("dateInformation", JSON.stringify(oldData));
};

export const getDateInformation = () => {
  const data = localStorage.getItem("dateInformation");
  if (!data) return null;
  return JSON.parse(data) as RootState;
};
