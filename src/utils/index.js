export const calculateCalories = ({
  height,
  age,
  currentWeight,
  desiredWeight,
}) => {
  return Math.round(
    10 * currentWeight +
      6.25 * height -
      5 * age -
      161 -
      10 * (currentWeight - desiredWeight)
  );
};
