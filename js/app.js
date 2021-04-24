const select = (element) => document.querySelector(element);

const basicSalary = select(".basic-salary");
const transportAllowance = select(".transport-allowance");
const housingAllowance = select(".housing-allowance");
const taxableAllowance = select(".taxable-allowance");

const calculate = (...arg) => {
  const monthResult = [...arg].reduce((a, b) => a + b);

  const monthlyContent = select(".monthly-salary-result > span");
  const yearlyContent = select(".yearly-salary-result > span");

  monthlyContent.textContent = monthResult;
  yearlyContent.textContent = monthResult * 12;
};

select(".calculate-btn").addEventListener("click", () => {
  select(".result").style.display = "flex";
  return calculate(
    Number(basicSalary.value),
    Number(transportAllowance.value),
    Number(housingAllowance.value),
    Number(taxableAllowance.value)
  );
});

select(".reset-btn").addEventListener("click", () => {
  basicSalary.value = "";
  transportAllowance.value = "";
  housingAllowance.value = "";
  taxableAllowance.value = "";

  select(".monthly-salary-result > span").textContent = "";
  select(".yearly-salary-result > span").textContent = "";
  return (select(".result").style.display = "none");
});
