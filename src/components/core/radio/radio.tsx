import type { RadioProps } from './radio.type';

const Radio = ({ id, name, ...rest }: RadioProps) => {
  const idOrName = id ?? name;
  return (
    <label htmlFor={idOrName} className="radio">
      <input type="radio" name={name} id={idOrName} {...rest} />
    </label>
  );
};

export default Radio;
