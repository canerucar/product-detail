import './index.scss';

export default function Button(props) { 
  return (
    <button disabled={props.disable}>{props.name}</button>
  );
}