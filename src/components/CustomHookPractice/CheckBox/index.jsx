export const Checkbox = ({ label = 'Label', checked = false, onChange }) => {
  return (
    <>
      <label>
        {label}
        <input type="checkbox" defaultChecked={checked} onChange={onChange} />
      </label>
    </>
  );
};
